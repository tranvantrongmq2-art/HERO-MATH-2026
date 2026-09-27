/**
 * HERO SHA-256 - Pure JavaScript Standard SHA-256 & UTF-8 Implementation
 * Chuẩn xác 100% theo tiêu chuẩn FIPS 180-4, tương thích hoàn toàn với Web Crypto API & Node.js crypto.
 * Hỗ trợ tiếng Việt Unicode, Emoji, không có biến toàn cục rò rỉ, chạy offline 100% trên mọi giao thức (file://, http://, https://).
 */

(function(root) {
    'use strict';

    const K = [
        0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
        0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
        0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
        0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
        0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
        0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
        0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
        0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2
    ];

    /**
     * Hàm hash SHA-256 chuẩn xác
     * @param {string} str - Chuỗi đầu vào (hỗ trợ đầy đủ UTF-8 tiếng Việt)
     * @returns {string} - Chuỗi hex 64 ký tự
     */
    function sha256(str) {
        if (typeof str !== 'string') str = String(str || '');

        // 1. Chuyển đổi chuỗi sang mảng byte UTF-8 chuẩn
        const bytes = [];
        for (let i = 0; i < str.length; i++) {
            let c = str.charCodeAt(i);
            if (c < 0x80) {
                bytes.push(c);
            } else if (c < 0x800) {
                bytes.push(0xc0 | (c >> 6), 0x80 | (c & 0x3f));
            } else if (c < 0xd800 || c >= 0xe000) {
                bytes.push(0xe0 | (c >> 12), 0x80 | ((c >> 6) & 0x3f), 0x80 | (c & 0x3f));
            } else {
                i++;
                c = 0x10000 + (((c & 0x3ff) << 10) | (str.charCodeAt(i) & 0x3ff));
                bytes.push(
                    0xf0 | (c >> 18),
                    0x80 | ((c >> 12) & 0x3f),
                    0x80 | ((c >> 6) & 0x3f),
                    0x80 | (c & 0x3f)
                );
            }
        }

        // 2. Padding theo chuẩn FIPS 180-4
        const bitLength = bytes.length * 8;
        bytes.push(0x80);
        while ((bytes.length + 8) % 64 !== 0) {
            bytes.push(0);
        }

        const highBits = Math.floor(bitLength / 0x100000000);
        const lowBits = bitLength >>> 0;
        bytes.push(
            (highBits >>> 24) & 0xff, (highBits >>> 16) & 0xff, (highBits >>> 8) & 0xff, highBits & 0xff,
            (lowBits >>> 24) & 0xff, (lowBits >>> 16) & 0xff, (lowBits >>> 8) & 0xff, lowBits & 0xff
        );

        // 3. Khởi tạo giá trị hash ban đầu (H0 - H7)
        let h0 = 0x6a09e667, h1 = 0xbb67ae85, h2 = 0x3c6ef372, h3 = 0xa54ff53a;
        let h4 = 0x510e527f, h5 = 0x9b05688c, h6 = 0x1f83d9ab, h7 = 0x5be0cd19;

        const W = new Int32Array(64);

        // 4. Xử lý từng khối 64 byte
        for (let i = 0; i < bytes.length; i += 64) {
            for (let t = 0; t < 16; t++) {
                const idx = i + (t * 4);
                W[t] = (bytes[idx] << 24) | (bytes[idx + 1] << 16) | (bytes[idx + 2] << 8) | bytes[idx + 3];
            }
            for (let t = 16; t < 64; t++) {
                const w15 = W[t - 15];
                const s0 = ((w15 >>> 7) | (w15 << 25)) ^ ((w15 >>> 18) | (w15 << 14)) ^ (w15 >>> 3);
                const w2 = W[t - 2];
                const s1 = ((w2 >>> 17) | (w2 << 15)) ^ ((w2 >>> 19) | (w2 << 13)) ^ (w2 >>> 10);
                W[t] = (W[t - 16] + s0 + W[t - 7] + s1) | 0;
            }

            let a = h0, b = h1, c = h2, d = h3, e = h4, f = h5, g = h6, h = h7;

            for (let t = 0; t < 64; t++) {
                const S1 = ((e >>> 6) | (e << 26)) ^ ((e >>> 11) | (e << 21)) ^ ((e >>> 25) | (e << 7));
                const ch = (e & f) ^ ((~e) & g);
                const temp1 = (h + S1 + ch + K[t] + W[t]) | 0;
                const S0 = ((a >>> 2) | (a << 30)) ^ ((a >>> 13) | (a << 19)) ^ ((a >>> 22) | (a << 10));
                const maj = (a & b) ^ (a & c) ^ (b & c);
                const temp2 = (S0 + maj) | 0;

                h = g;
                g = f;
                f = e;
                e = (d + temp1) | 0;
                d = c;
                c = b;
                b = a;
                a = (temp1 + temp2) | 0;
            }

            h0 = (h0 + a) | 0;
            h1 = (h1 + b) | 0;
            h2 = (h2 + c) | 0;
            h3 = (h3 + d) | 0;
            h4 = (h4 + e) | 0;
            h5 = (h5 + f) | 0;
            h6 = (h6 + g) | 0;
            h7 = (h7 + h) | 0;
        }

        function toHex(val) {
            return (val >>> 0).toString(16).padStart(8, '0');
        }

        return toHex(h0) + toHex(h1) + toHex(h2) + toHex(h3) + toHex(h4) + toHex(h5) + toHex(h6) + toHex(h7);
    }

    /**
     * Hàm hash mô phỏng lại thuật toán cũ bị lỗi trước đây,
     * dùng để nhận diện và nâng cấp tự động cho các tài khoản học sinh đã đăng ký trúng lúc hệ thống bị lỗi hash.
     */
    function legacyBrokenSha256(message) {
        var hexChars = '0123456789abcdef'.split('');
        var extra = [-2147483648, 8388608, 32768, 128];
        var shift = [24, 16, 8, 0];
        var legacyK = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];
        var blocks = [];
        var W = blocks;
        var h0 = 1779033703, h1 = 3144134277, h2 = 1013904242, h3 = 2773480762;
        var h4 = 1359893119, h5 = 2600822924, h6 = 528734635, h7 = 1541459225;
        var start = 0, bytes = 0, length = message.length;
        for (var i = 0; i < length; ) {
            var code = message.charCodeAt(i++);
            if (code < 0x80) {
                W[start >> 2] |= code << shift[start++ & 3];
            } else if (code < 0x800) {
                W[start >> 2] |= (0xc0 | (code >> 6)) << shift[start++ & 3];
                W[start >> 2] |= (0x80 | (code & 0x3f)) << shift[start++ & 3];
            } else if (code < 0xd800 || code >= 0xe000) {
                W[start >> 2] |= (0xe0 | (code >> 12)) << shift[start++ & 3];
                W[start >> 2] |= (0x80 | ((code >> 6) & 0x3f)) << shift[start++ & 3];
                W[start >> 2] |= (0x80 | (code & 0x3f)) << shift[start++ & 3];
            } else {
                code = 0x10000 + (((code & 0x3ff) << 10) | (message.charCodeAt(i++) & 0x3ff));
                W[start >> 2] |= (0xf0 | (code >> 18)) << shift[start++ & 3];
                W[start >> 2] |= (0x80 | ((code >> 12) & 0x3f)) << shift[start++ & 3];
                W[start >> 2] |= (0x80 | ((code >> 6) & 0x3f)) << shift[start++ & 3];
                W[start >> 2] |= (0x80 | (code & 0x3f)) << shift[start++ & 3];
            }
            if (start >= 64) {
                var a = h0, b_val = h1, c = h2, d = h3, e = h4, f = h5, g = h6, h = h7;
                for (var j = 0; j < 64; ++j) {
                    if (j >= 16) {
                        var s0 = (W[j - 15] >>> 7 | W[j - 15] << 25) ^ (W[j - 15] >>> 18 | W[j - 15] << 14) ^ (W[j - 15] >>> 3);
                        var s1 = (W[j - 2] >>> 17 | W[j - 2] << 15) ^ (W[j - 2] >>> 19 | W[j - 2] << 13) ^ (W[j - 2] >>> 10);
                        W[j] = (W[j - 16] + s0 + W[j - 7] + s1) | 0;
                    }
                    var S1 = (e >>> 6 | e << 26) ^ (e >>> 11 | e << 21) ^ (e >>> 25 | e << 7);
                    var ch = (e & f) ^ (~e & g);
                    var temp1 = (h + S1 + ch + legacyK[j] + W[j]) | 0;
                    var S0 = (a >>> 2 | a << 30) ^ (a >>> 13 | a << 19) ^ (a >>> 22 | a << 10);
                    var maj = (a & b_val) ^ (a & c) ^ (b_val & c);
                    var temp2 = (S0 + maj) | 0;
                    h = g; g = f; f = e; e = (d + temp1) | 0; d = c; c = b_val; b_val = a; a = (temp1 + temp2) | 0;
                }
                h0 = (h0 + a) | 0; h1 = (h1 + b_val) | 0; h2 = (h2 + c) | 0; h3 = (h3 + d) | 0;
                h4 = (h4 + e) | 0; h5 = (h5 + f) | 0; h6 = (h6 + g) | 0; h7 = (h7 + h) | 0;
                start = 0;
                for (j = 0; j < 16; ++j) W[j] = 0;
            }
            bytes++;
        }
        var lastByteIndex = start;
        W[lastByteIndex >> 2] |= extra[lastByteIndex & 3];
        if (start >= 56) {
            var a = h0, b_val = h1, c = h2, d = h3, e = h4, f = h5, g = h6, h = h7;
            for (j = 0; j < 64; ++j) {
                if (j >= 16) {
                    var s0 = (W[j - 15] >>> 7 | W[j - 15] << 25) ^ (W[j - 15] >>> 18 | W[j - 15] << 14) ^ (W[j - 15] >>> 3);
                    var s1 = (W[j - 2] >>> 17 | W[j - 2] << 15) ^ (W[j - 2] >>> 19 | W[j - 2] << 13) ^ (W[j - 2] >>> 10);
                    W[j] = (W[j - 16] + s0 + W[j - 7] + s1) | 0;
                }
                var S1 = (e >>> 6 | e << 26) ^ (e >>> 11 | e << 21) ^ (e >>> 25 | e << 7);
                var ch = (e & f) ^ (~e & g);
                var temp1 = (h + S1 + ch + legacyK[j] + W[j]) | 0;
                var S0 = (a >>> 2 | a << 30) ^ (a >>> 13 | a << 19) ^ (a >>> 22 | a << 10);
                var maj = (a & b_val) ^ (a & c) ^ (b_val & c);
                var temp2 = (S0 + maj) | 0;
                h = g; g = f; f = e; e = (d + temp1) | 0; d = c; c = b_val; b_val = a; a = (temp1 + temp2) | 0;
            }
            h0 = (h0 + a) | 0; h1 = (h1 + b_val) | 0; h2 = (h2 + c) | 0; h3 = (h3 + d) | 0;
            h4 = (h4 + e) | 0; h5 = (h5 + f) | 0; h6 = (h6 + g) | 0; h7 = (h7 + h) | 0;
            for (j = 0; j < 16; ++j) W[j] = 0;
        }
        W[14] = (bytes * 8) / 0x100000000 | 0;
        W[15] = (bytes * 8) & 0xffffffff;
        var a = h0, b_val = h1, c = h2, d = h3, e = h4, f = h5, g = h6, h = h7;
        for (j = 0; j < 64; ++j) {
            if (j >= 16) {
                var s0 = (W[j - 15] >>> 7 | W[j - 15] << 25) ^ (W[j - 15] >>> 18 | W[j - 15] << 14) ^ (W[j - 15] >>> 3);
                var s1 = (W[j - 2] >>> 17 | W[j - 2] << 15) ^ (W[j - 2] >>> 19 | W[j - 2] << 13) ^ (W[j - 2] >>> 10);
                W[j] = (W[j - 16] + s0 + W[j - 7] + s1) | 0;
            }
            var S1 = (e >>> 6 | e << 26) ^ (e >>> 11 | e << 21) ^ (e >>> 25 | e << 7);
            var ch = (e & f) ^ (~e & g);
            var temp1 = (h + S1 + ch + legacyK[j] + W[j]) | 0;
            var S0 = (a >>> 2 | a << 30) ^ (a >>> 13 | a << 19) ^ (a >>> 22 | a << 10);
            var maj = (a & b_val) ^ (a & c) ^ (b_val & c);
            var temp2 = (S0 + maj) | 0;
            h = g; g = f; f = e; e = (d + temp1) | 0; d = c; c = b_val; b_val = a; a = (temp1 + temp2) | 0;
        }
        h0 = (h0 + a) | 0; h1 = (h1 + b_val) | 0; h2 = (h2 + c) | 0; h3 = (h3 + d) | 0;
        h4 = (h4 + e) | 0; h5 = (h5 + f) | 0; h6 = (h6 + g) | 0; h7 = (h7 + h) | 0;
        var res = '';
        var H = [h0, h1, h2, h3, h4, h5, h6, h7];
        for (i = 0; i < 8; ++i) {
            for (j = 28; j >= 0; j -= 4) {
                res += hexChars[(H[i] >> j) & 0x0f];
            }
        }
        return res;
    }

    // Export ra môi trường trình duyệt và Node.js
    if (typeof root !== 'undefined') {
        root.sha256 = sha256;
        root.legacyBrokenSha256 = legacyBrokenSha256;
        if (!root.HeroSHA256) {
            root.HeroSHA256 = { sha256, legacyBrokenSha256 };
        }
    }
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = { sha256, legacyBrokenSha256 };
    }
})(typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this));
