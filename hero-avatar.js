/**
 * ========================================================================
 * HERO AVATAR SYSTEM - HỆ THỐNG TỦ ĐỒ AVATAR CHIẾN BINH (MATH HERO BASE)
 * Sử dụng DiceBear Vector SVG CDN (Miễn phí 100%, 0 bytes dung lượng hosting)
 * Hỗ trợ 24 Avatar Chiến Binh & Cơ chế TỰ CHỌN AVATAR khi hoàn thành nhiệm vụ
 * ========================================================================
 */

(function (window) {
    'use strict';

    // 1. DANH MỤC THỂ LOẠI AVATAR
    const CATEGORIES = [
        { id: 'all', ten: 'Tất Cả', icon: '⚡' },
        { id: 'chien_binh', ten: 'Chiến Binh & Hiệp Sĩ', icon: '⚔️' },
        { id: 'mecha', ten: 'Mecha & Công Nghệ', icon: '🤖' },
        { id: 'phap_su', ten: 'Pháp Sư & Học Giả', icon: '🔮' },
        { id: 'pixel_vui', ten: 'Pixel & Vui Nhộn', icon: '👾' },
        { id: 'than_thoai', ten: 'Thần Thoại & Đỉnh Cao', icon: '👑' }
    ];

    // 2. BỘ SƯU TẬP 24 AVATAR CHIẾN BINH ĐA DẠNG PHONG CÁCH
    const DANH_SACH_AVATAR = [
        // --- CHIẾN BINH & HIỆP SĨ ---
        {
            id: "av_tanbinh",
            ten: "Tân Binh Robot",
            danhHieu: "Chiến Binh Tập Sự",
            category: "mecha",
            style: "bottts",
            seed: "HeroTraineeMath",
            moTa: "Món quà ra mắt dành riêng cho mọi chiến binh mới gia nhập Math Hero.",
            dieuKien: "Có sẵn khi khởi tạo tài khoản",
            badge: "TÂN BINH",
            auraColor: "#00ffff",
            coSan: true
        },
        {
            id: "av_dungsi_toan",
            ten: "Dũng Sĩ Số Học",
            danhHieu: "Chiến Tướng Phản Xạ",
            category: "chien_binh",
            style: "adventurer",
            seed: "MathWarriorKnight",
            moTa: "Dũng sĩ tinh nhuệ thông thạo các phép tính và bài toán thử thách.",
            dieuKien: "Hoàn thành bài trắc nghiệm đạt từ 8 - 10 điểm",
            badge: "XUẤT SẮC",
            auraColor: "#2ecc71",
            loaiKiemTra: "trac_nghiem",
            nguong: 8
        },
        {
            id: "av_hiepsi_tuluan",
            ten: "Hiệp Sĩ Tự Luận",
            danhHieu: "Bậc Thầy Lập Luận",
            category: "chien_binh",
            style: "adventurer",
            seed: "EssayKnightChampion",
            moTa: "Phần thưởng danh giá cho bài làm tự luận trình bày chặt chẽ, chính xác.",
            dieuKien: "Bài tự luận được chấm đạt từ 8 - 10 điểm",
            badge: "TINH ANH",
            auraColor: "#ff2a85",
            loaiKiemTra: "tu_luan",
            nguong: 8
        },
        {
            id: "av_kiemkhach_anhsang",
            ten: "Kiếm Khách Ánh Sáng",
            danhHieu: "Lưỡi Kiếm Tri Thức",
            category: "chien_binh",
            style: "adventurer",
            seed: "LightSwordMasterLeo",
            moTa: "Tốc độ giải toán nhanh như tia chớp, chém tan mọi thử thách hóc búa.",
            dieuKien: "Tự chọn khi hoàn thành xuất sắc 1 nhiệm vụ bất kỳ",
            badge: "KIẾM THẦN",
            auraColor: "#38ef7d",
            loaiKiemTra: "nhiem_vu"
        },
        {
            id: "av_cungthu_thantoc",
            ten: "Cung Thủ Thần Tốc",
            danhHieu: "Xạ Thủ Chuẩn Xác",
            category: "chien_binh",
            style: "adventurer",
            seed: "SonicRobinArcherGreen",
            moTa: "Bách phát bách trúng, mọi đáp án lựa chọn đều chính xác tuyệt đối.",
            dieuKien: "Tự chọn khi hoàn thành xuất sắc 1 nhiệm vụ bất kỳ",
            badge: "XẠ THỦ",
            auraColor: "#11998e",
            loaiKiemTra: "nhiem_vu"
        },
        {
            id: "av_nu_chien_tuong",
            ten: "Nữ Tướng Valkyrie",
            danhHieu: "Nữ Tướng Tiên Phong",
            category: "chien_binh",
            style: "adventurer",
            seed: "ValkyrieCommanderHero",
            moTa: "Dũng mãnh dẫn đầu bảng phong thần, không bao giờ lùi bước trước bài khó.",
            dieuKien: "Tự chọn khi hoàn thành xuất sắc 1 nhiệm vụ bất kỳ",
            badge: "VALKYRIE",
            auraColor: "#ff416c",
            loaiKiemTra: "nhiem_vu"
        },
        {
            id: "av_samurai_sohoc",
            ten: "Samurai Số Học",
            danhHieu: "Kiếm Đạo Thâm Sâu",
            category: "chien_binh",
            style: "adventurer",
            seed: "MathRoninSamuraiRed",
            moTa: "Tinh thần võ sĩ kiên cường, rèn luyện tư duy logic bền bỉ mỗi ngày.",
            dieuKien: "Tự chọn khi hoàn thành xuất sắc 1 nhiệm vụ bất kỳ",
            badge: "SAMURAI",
            auraColor: "#ff4b1f",
            loaiKiemTra: "nhiem_vu"
        },

        // --- MECHA & CÔNG NGHỆ ---
        {
            id: "av_chiendau_cyborg",
            ten: "Chiến Binh Cyborg 3000",
            danhHieu: "Người Máy Chiến Đấu",
            category: "mecha",
            style: "bottts",
            seed: "CyberWarriorElite3000",
            moTa: "Người máy công nghệ tương lai sở hữu năng lượng tính toán siêu tốc.",
            dieuKien: "Tích lũy từ 300 EXP hoặc chọn khi hoàn thành nhiệm vụ",
            badge: "CYBORG",
            auraColor: "#00e5ff",
            loaiKiemTra: "exp",
            nguong: 300
        },
        {
            id: "av_mecha_titan",
            ten: "Mecha Titan Hộ Vệ",
            danhHieu: "Pháo Đài Thiết Giáp",
            category: "mecha",
            style: "bottts",
            seed: "MechaTitanGuardianBlue",
            moTa: "Lớp giáp lượng tử kiên cố bảo vệ phong độ thi đấu đỉnh cao của bạn.",
            dieuKien: "Tự chọn khi hoàn thành xuất sắc 1 nhiệm vụ bất kỳ",
            badge: "TITAN",
            auraColor: "#00c6ff",
            loaiKiemTra: "nhiem_vu"
        },
        {
            id: "av_bot_luongtu",
            ten: "Robot Lượng Tử Siêu Tính",
            danhHieu: "Bộ Xử Lý Lượng Tử",
            category: "mecha",
            style: "bottts",
            seed: "QuantumComputingBotX",
            moTa: "Xử lý hàng triệu phương trình trong chớp mắt với độ tin cậy tuyệt đối.",
            dieuKien: "Tự chọn khi hoàn thành xuất sắc 1 nhiệm vụ bất kỳ",
            badge: "QUANTUM",
            auraColor: "#7f00ff",
            loaiKiemTra: "nhiem_vu"
        },
        {
            id: "av_doitham_neon",
            ten: "Trinh Sát Neon 4.0",
            danhHieu: "Thợ Săn Điểm 10",
            category: "mecha",
            style: "bottts",
            seed: "NeonCyberScoutCyber",
            moTa: "Quét radar phát hiện lời giải thông minh và ngắn gọn nhất cho mọi bài toán.",
            dieuKien: "Tự chọn khi hoàn thành xuất sắc 1 nhiệm vụ bất kỳ",
            badge: "NEON",
            auraColor: "#00f2fe",
            loaiKiemTra: "nhiem_vu"
        },
        {
            id: "av_ai_matrix",
            ten: "Siêu Trí Tuệ AI-X",
            danhHieu: "Bộ Não Thuật Toán",
            category: "mecha",
            style: "bottts",
            seed: "AIMatrixOverlordMatrix",
            moTa: "Hội tụ sức mạnh trí tuệ nhân tạo hiện đại đưa bạn chinh phục mọi đỉnh cao.",
            dieuKien: "Tự chọn khi hoàn thành xuất sắc 1 nhiệm vụ bất kỳ",
            badge: "SIÊU AI",
            auraColor: "#00ff87",
            loaiKiemTra: "nhiem_vu"
        },

        // --- PHÁP SƯ & HỌC GIẢ ---
        {
            id: "av_phapsu_hinhhoc",
            ten: "Pháp Sư Tư Duy",
            danhHieu: "Trí Tuệ Đỉnh Cao",
            category: "phap_su",
            style: "lorelei",
            seed: "GeometryMageSupreme",
            moTa: "Người nắm giữ bí mật của các hình khối và tư duy logic không gian.",
            dieuKien: "Vượt qua thử thách Nâng Cấp Tư Duy / Đấu Boss",
            badge: "TƯ DUY CAO",
            auraColor: "#b983ff",
            loaiKiemTra: "tu_duy"
        },
        {
            id: "av_phuthuy_khonggian",
            ten: "Phù Thủy Không Gian",
            danhHieu: "Nữ Vương Chiêm Tinh",
            category: "phap_su",
            style: "lorelei",
            seed: "CosmicSpaceWitchAstral",
            moTa: "Điều khiển ma trận tọa độ và hình học không gian đa chiều kỳ ảo.",
            dieuKien: "Tự chọn khi hoàn thành xuất sắc 1 nhiệm vụ bất kỳ",
            badge: "CHIÊM TINH",
            auraColor: "#c471ed",
            loaiKiemTra: "nhiem_vu"
        },
        {
            id: "av_nha_gia_kim",
            ten: "Nhà Giả Kim Tri Thức",
            danhHieu: "Bậc Thầy Công Thức",
            category: "phap_su",
            style: "lorelei",
            seed: "MathAlchemistMasterGold",
            moTa: "Biến đổi các định lý phức tạp thành những chiến công vang dội.",
            dieuKien: "Tự chọn khi hoàn thành xuất sắc 1 nhiệm vụ bất kỳ",
            badge: "GIẢ KIM",
            auraColor: "#f7971e",
            loaiKiemTra: "nhiem_vu"
        },
        {
            id: "av_tien_tri_so",
            ten: "Tiên Tri Số Học",
            danhHieu: "Thấu Thị Vận Mệnh",
            category: "phap_su",
            style: "notionists",
            seed: "NumericOracleSageMystic",
            moTa: "Thấu hiểu mọi dạng bài thi trước khi bước vào phòng tranh tài.",
            dieuKien: "Tự chọn khi hoàn thành xuất sắc 1 nhiệm vụ bất kỳ",
            badge: "TIÊN TRI",
            auraColor: "#a18cd1",
            loaiKiemTra: "nhiem_vu"
        },
        {
            id: "av_hocgia_cothuat",
            ten: "Đại Học Giả Thư Viện",
            danhHieu: "Kho Báu Tri Thức",
            category: "phap_su",
            style: "notionists",
            seed: "AncientWisdomScholarBook",
            moTa: "Lưu giữ hàng vạn công thức bí truyền của các thế hệ học toán vang danh.",
            dieuKien: "Tự chọn khi hoàn thành xuất sắc 1 nhiệm vụ bất kỳ",
            badge: "BÁC HỌC",
            auraColor: "#4facfe",
            loaiKiemTra: "nhiem_vu"
        },

        // --- PIXEL & VUI NHỘN ---
        {
            id: "av_ongvang",
            ten: "Ong Vàng Chăm Chỉ",
            danhHieu: "Đại Sứ Chuyên Cần",
            category: "pixel_vui",
            style: "thumbs",
            seed: "BusyBeeScholar",
            moTa: "Biểu tượng của lòng kiên trì và tinh thần tự giác học tập mỗi ngày.",
            dieuKien: "Đạt chuỗi chuyên cần (Streak) từ 3 ngày liên tiếp",
            badge: "CHUYÊN CẦN",
            auraColor: "#f1c40f",
            loaiKiemTra: "streak",
            nguong: 3
        },
        {
            id: "av_daigia_tri_thuc",
            ten: "Học Giả Phú Quý",
            danhHieu: "Tỉ Phú Học Đường",
            category: "pixel_vui",
            style: "thumbs",
            seed: "WealthyScholarKing",
            moTa: "Chiến binh chăm chỉ tích lũy kho báu tri thức và chiến lợi phẩm khổng lồ.",
            dieuKien: "Tích lũy từ 250 Điểm/Coin hoặc chọn khi hoàn thành nhiệm vụ",
            badge: "PHÚ QUÝ",
            auraColor: "#e67e22",
            loaiKiemTra: "coin",
            nguong: 250
        },
        {
            id: "av_pixel_ninja",
            ten: "Ninja Toán Học 8-Bit",
            danhHieu: "Nhẫn Giả Siêu Tốc",
            category: "pixel_vui",
            style: "pixel-art",
            seed: "MathNinjaPixel8BitRetro",
            moTa: "Xuất quỷ nhập thần, tốc biến hoàn thành bài kiểm tra trong nháy mắt.",
            dieuKien: "Tự chọn khi hoàn thành xuất sắc 1 nhiệm vụ bất kỳ",
            badge: "8-BIT",
            auraColor: "#ff0844",
            loaiKiemTra: "nhiem_vu"
        },
        {
            id: "av_pixel_knight",
            ten: "Hiệp Sĩ Dũng Cảm Retro",
            danhHieu: "Hào Khí Điện Tử",
            category: "pixel_vui",
            style: "pixel-art",
            seed: "RetroKnightDefenderPixel",
            moTa: "Phong cách game phiêu lưu cổ điển đồng hành trên hành trình vượt ải.",
            dieuKien: "Tự chọn khi hoàn thành xuất sắc 1 nhiệm vụ bất kỳ",
            badge: "RETRO",
            auraColor: "#43e97b",
            loaiKiemTra: "nhiem_vu"
        },
        {
            id: "av_sao_may_man",
            ten: "Ngôi Sao Hy Vọng",
            danhHieu: "Sứ Giả Tươi Vui",
            category: "pixel_vui",
            style: "big-smile",
            seed: "LuckyStarSmileHeroHappy",
            moTa: "Nụ cười rạng rỡ tiếp thêm tự tin và may mắn trước mỗi kỳ thi.",
            dieuKien: "Tự chọn khi hoàn thành xuất sắc 1 nhiệm vụ bất kỳ",
            badge: "MAY MẮN",
            auraColor: "#fa709a",
            loaiKiemTra: "nhiem_vu"
        },

        // --- THẦN THOẠI & ĐỈNH CAO ---
        {
            id: "av_thanthoai_hoangkim",
            ten: "Chiến Thần Hoàng Kim",
            danhHieu: "Huyền Thoại Bất Bại",
            category: "than_thoai",
            style: "adventurer",
            seed: "GoldenGodSupremeHero",
            moTa: "Thành tựu tối thượng dành cho học sinh xuất sắc toàn diện trong sảnh danh vọng.",
            dieuKien: "Đạt điểm 10 Tuyệt Đối bài Tự Luận hoặc đạt từ 800 EXP",
            badge: "THẦN THOẠI",
            auraColor: "#ffd700",
            loaiKiemTra: "than_thoai"
        },
        {
            id: "av_chua_te_vutru",
            ten: "Đấng Thống Trị Vũ Trụ",
            danhHieu: "Bất Tử Tối Thượng",
            category: "than_thoai",
            style: "adventurer",
            seed: "UniversalCosmicSovereignSupreme",
            moTa: "Cảnh giới toán học cao nhất, hội tụ tất cả vinh quang và bản lĩnh chiến binh.",
            dieuKien: "Tự chọn khi hoàn thành xuất sắc 1 nhiệm vụ bất kỳ",
            badge: "TỐI THƯỢNG",
            auraColor: "#ff007f",
            loaiKiemTra: "nhiem_vu"
        }
    ];

    // Tạo URL DiceBear SVG siêu nhẹ (~2KB vector)
    function taoUrlDiceBear(style, seed) {
        return 'https://api.dicebear.com/7.x/' + encodeURIComponent(style) + '/svg?seed=' + encodeURIComponent(seed) + '&backgroundColor=transparent';
    }

    // Âm thanh Web Audio API (Fanfare / Unlock / Equip)
    function phatAmThanh(loai) {
        try {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (!AudioContext) return;
            const ctx = new AudioContext();
            const now = ctx.currentTime;
            
            if (loai === 'unlock' || loai === 'chest') {
                const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51];
                notes.forEach((freq, idx) => {
                    const osc = ctx.createOscillator();
                    const gain = ctx.createGain();
                    osc.type = 'triangle';
                    osc.frequency.setValueAtTime(freq, now + idx * 0.1);
                    gain.gain.setValueAtTime(0.3, now + idx * 0.1);
                    gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.1 + 0.35);
                    osc.connect(gain);
                    gain.connect(ctx.destination);
                    osc.start(now + idx * 0.1);
                    osc.stop(now + idx * 0.1 + 0.36);
                });
            } else if (loai === 'equip') {
                const notes = [440, 659.25, 880];
                notes.forEach((freq, idx) => {
                    const osc = ctx.createOscillator();
                    const gain = ctx.createGain();
                    osc.type = 'sine';
                    osc.frequency.setValueAtTime(freq, now + idx * 0.08);
                    gain.gain.setValueAtTime(0.25, now + idx * 0.08);
                    gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.25);
                    osc.connect(gain);
                    gain.connect(ctx.destination);
                    osc.start(now + idx * 0.08);
                    osc.stop(now + idx * 0.08 + 0.26);
                });
            }
        } catch (e) {}
    }

    // Phun pháo hoa Confetti
    function banPhaoHoa() {
        try {
            if (typeof window.confetti === 'function') {
                window.confetti({
                    particleCount: 120,
                    spread: 80,
                    origin: { y: 0.6 }
                });
            }
        } catch (e) {}
    }

    // ĐỐI TƯỢNG QUẢN LÝ AVATAR TOÀN CỤC
    const HeroAvatar = {
        DANH_SACH_AVATAR,
        CATEGORIES,
        taoUrlDiceBear,
        taoUrl: taoUrlDiceBear,
        phatAmThanh,

        layTenHocSinh() {
            return (localStorage.getItem('hoc_school_ten_hs') || 
                    localStorage.getItem('hoc_school_student_name') || '').trim();
        },

        layDanhSachMoKhoa(tenHS) {
            const ten = (tenHS || this.layTenHocSinh()).trim();
            if (!ten) return ['av_tanbinh'];
            try {
                const raw = localStorage.getItem('math_hero_unlocked_avatars_' + ten);
                const ds = raw ? JSON.parse(raw) : ['av_tanbinh'];
                if (!Array.isArray(ds)) return ['av_tanbinh'];
                if (!ds.includes('av_tanbinh')) ds.unshift('av_tanbinh');
                return ds;
            } catch (e) {
                return ['av_tanbinh'];
            }
        },

        layAvatarHienTai(tenHS) {
            const ten = (tenHS || this.layTenHocSinh()).trim();
            const idHienTai = localStorage.getItem('math_hero_current_avatar_' + ten) || 'av_tanbinh';
            const found = DANH_SACH_AVATAR.find(a => a.id === idHienTai);
            return found || DANH_SACH_AVATAR[0];
        },

        layUrlAvatarHienTai(tenHS) {
            const av = this.layAvatarHienTai(tenHS);
            return taoUrlDiceBear(av.style, av.seed);
        },

        trangBiAvatar(tenHS, avatarId) {
            const ten = (tenHS || this.layTenHocSinh()).trim();
            if (!ten) return false;

            const unlocked = this.layDanhSachMoKhoa(ten);
            if (!unlocked.includes(avatarId)) {
                alert('Chiến binh chưa mở khóa Avatar này!');
                return false;
            }

            const av = DANH_SACH_AVATAR.find(a => a.id === avatarId);
            if (!av) return false;

            localStorage.setItem('math_hero_current_avatar_' + ten, avatarId);
            phatAmThanh('equip');

            this.dongBoLenFirebase(ten);
            this.capNhatTatCaGiaoDien(ten);
            return true;
        },

        // Mở khóa một Avatar cho học sinh
        moKhoaAvatar(tenHS, avatarId) {
            const ten = (tenHS || this.layTenHocSinh()).trim();
            if (!ten) return false;

            const unlocked = this.layDanhSachMoKhoa(ten);
            if (!unlocked.includes(avatarId)) {
                unlocked.push(avatarId);
                localStorage.setItem('math_hero_unlocked_avatars_' + ten, JSON.stringify(unlocked));
                this.dongBoLenFirebase(ten);
            }
            return true;
        },

        // ====================================================================
        // TÍNH NĂNG MỚI: HỌC SINH TỰ CHỌN AVATAR KHI HOÀN THÀNH 1 NHIỆM VỤ
        // ====================================================================
        moRuongChonAvatar(tenHS, thongTinNhiemVu = {}) {
            const ten = (tenHS || this.layTenHocSinh()).trim();
            if (!ten) return;

            this.chenCssHeThong();

            const existing = document.getElementById('modal-avatar-reward-picker');
            if (existing) existing.remove();

            const unlocked = this.layDanhSachMoKhoa(ten);
            const lockedAvatars = DANH_SACH_AVATAR.filter(av => !unlocked.includes(av.id));

            // Nếu đã mở khóa hết sạch toàn bộ 24 Avatar!
            if (lockedAvatars.length === 0) {
                this.hienThiModalDaiKienTuong(ten);
                return;
            }

            phatAmThanh('chest');
            banPhaoHoa();

            let activeCategory = 'all';
            let selectedAvatar = lockedAvatars[0];

            const tieuDeNhiemVu = thongTinNhiemVu.tieuDe || 'Nhiệm Vụ Chiến Binh Xuất Sắc';
            const moTaNhiemVu = thongTinNhiemVu.moTa || 'Chúc mừng chiến binh đã hoàn thành xuất sắc nhiệm vụ!';

            const modal = document.createElement('div');
            modal.id = 'modal-avatar-reward-picker';
            modal.className = 'hero-avatar-picker-backdrop';
            modal.innerHTML = `
                <div class="hero-avatar-picker-container animate-scale-up">
                    <div class="picker-header">
                        <div class="picker-title-box">
                            <span class="picker-icon">🎁</span>
                            <div>
                                <h3>RƯƠNG THƯỞNG CHIẾN TÍCH</h3>
                                <p class="picker-subtitle">TỰ DO CHỌN 1 AVATAR BẠN YÊU THÍCH ĐỂ MỞ KHÓA NGAY!</p>
                            </div>
                        </div>
                        <button class="btn-picker-close" id="btn-close-picker">&times;</button>
                    </div>

                    <div class="picker-mission-banner">
                        <span class="banner-badge">CHIẾN CÔNG</span>
                        <span class="banner-text"><b>${ten}</b> vừa ${moTaNhiemVu}</span>
                    </div>

                    <div class="picker-body">
                        <!-- CỘT TRÁI: PREVIEW AVATAR ĐANG CHỌN -->
                        <div class="picker-preview-col">
                            <div class="picker-stage" id="picker-preview-stage" style="--stage-aura:${selectedAvatar.auraColor};">
                                <img id="picker-preview-img" src="${taoUrlDiceBear(selectedAvatar.style, selectedAvatar.seed)}" alt="${selectedAvatar.ten}">
                                <span class="picker-badge" id="picker-preview-badge" style="background:${selectedAvatar.auraColor};">${selectedAvatar.badge}</span>
                            </div>
                            <h4 class="picker-name" id="picker-preview-name" style="color:${selectedAvatar.auraColor};">${selectedAvatar.ten}</h4>
                            <p class="picker-danhhieu" id="picker-preview-danhhieu">${selectedAvatar.danhHieu}</p>
                            <p class="picker-desc" id="picker-preview-desc">${selectedAvatar.moTa}</p>

                            <div class="picker-action-buttons">
                                <button class="btn-picker-equip-now" id="btn-picker-equip-now">
                                    <i class="fa-solid fa-bolt"></i> Mở Khóa & Trang Bị Luôn
                                </button>
                                <button class="btn-picker-save-locker" id="btn-picker-save-locker">
                                    <i class="fa-solid fa-box-archive"></i> Mở Khóa & Cất Vào Tủ
                                </button>
                            </div>
                        </div>

                        <!-- CỘT PHẢI: DANH SÁCH AVATAR ĐỂ LỰA CHỌN -->
                        <div class="picker-list-col">
                            <div class="picker-filter-tabs">
                                ${CATEGORIES.map(cat => `
                                    <button class="picker-tab-btn ${cat.id === 'all' ? 'active' : ''}" data-cat="${cat.id}">
                                        ${cat.icon} ${cat.ten}
                                    </button>
                                `).join('')}
                            </div>

                            <div class="picker-grid-container">
                                <div class="picker-grid" id="picker-avatar-grid">
                                    <!-- Render các thẻ avatar có thể chọn -->
                                </div>
                            </div>
                            <div class="picker-tip">
                                <i class="fa-solid fa-lightbulb"></i> Bấm vào bất kỳ Avatar nào để xem trước diện mạo và hiệu ứng trước khi đưa ra quyết định!
                            </div>
                        </div>
                    </div>
                </div>
            `;

            document.body.appendChild(modal);

            // Hàm render danh sách avatar theo danh mục
            const renderPickerGrid = () => {
                const grid = document.getElementById('picker-avatar-grid');
                if (!grid) return;

                const filtered = lockedAvatars.filter(av => {
                    if (activeCategory === 'all') return true;
                    return av.category === activeCategory;
                });

                if (filtered.length === 0) {
                    grid.innerHTML = `
                        <div style="grid-column:1/-1; padding:30px; text-align:center; color:#94a3b8; font-size:0.85rem;">
                            Đã sở hữu toàn bộ Avatar trong thể loại này! Hãy chọn thể loại khác nhé.
                        </div>
                    `;
                    return;
                }

                grid.innerHTML = filtered.map(av => {
                    const isSelected = av.id === selectedAvatar.id;
                    return `
                        <div class="picker-card ${isSelected ? 'selected' : ''}" data-id="${av.id}">
                            <div class="picker-card-thumb" style="border-color:${av.auraColor};">
                                <img src="${taoUrlDiceBear(av.style, av.seed)}" alt="${av.ten}">
                                <div class="picker-card-gift-tag"><i class="fa-solid fa-gift"></i></div>
                            </div>
                            <div class="picker-card-name">${av.ten}</div>
                            <div class="picker-card-badge" style="color:${av.auraColor};">${av.badge}</div>
                        </div>
                    `;
                }).join('');

                grid.querySelectorAll('.picker-card').forEach(card => {
                    card.addEventListener('click', () => {
                        const id = card.dataset.id;
                        const found = DANH_SACH_AVATAR.find(a => a.id === id);
                        if (found) capNhatPreviewPicker(found);
                    });
                });
            };

            // Hàm cập nhật Preview
            const capNhatPreviewPicker = (av) => {
                selectedAvatar = av;
                const stage = document.getElementById('picker-preview-stage');
                if (stage) stage.style.setProperty('--stage-aura', av.auraColor);

                const img = document.getElementById('picker-preview-img');
                if (img) img.src = taoUrlDiceBear(av.style, av.seed);

                const badge = document.getElementById('picker-preview-badge');
                if (badge) {
                    badge.innerText = av.badge;
                    badge.style.background = av.auraColor;
                }

                const nameEl = document.getElementById('picker-preview-name');
                if (nameEl) {
                    nameEl.innerText = av.ten;
                    nameEl.style.color = av.auraColor;
                }

                const titleEl = document.getElementById('picker-preview-danhhieu');
                if (titleEl) titleEl.innerText = av.danhHieu;

                const descEl = document.getElementById('picker-preview-desc');
                if (descEl) descEl.innerText = av.moTa;

                document.querySelectorAll('.picker-card').forEach(c => {
                    c.classList.toggle('selected', c.dataset.id === av.id);
                });
            };

            // Gán sự kiện chuyển tab
            modal.querySelectorAll('.picker-tab-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    modal.querySelectorAll('.picker-tab-btn').forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    activeCategory = btn.dataset.cat;
                    renderPickerGrid();
                });
            });

            // Hành động: Mở khóa và trang bị luôn
            document.getElementById('btn-picker-equip-now').onclick = () => {
                this.moKhoaAvatar(ten, selectedAvatar.id);
                this.trangBiAvatar(ten, selectedAvatar.id);
                modal.remove();
                banPhaoHoa();
                alert(`🎉 CHÚC MỪNG CHIẾN BINH! Bạn đã mở khóa và trang bị thành công "${selectedAvatar.ten}". Hãy kiểm tra diện mạo mới cực chất của bạn nhé!`);
            };

            // Hành động: Mở khóa và cất vào tủ đồ
            document.getElementById('btn-picker-save-locker').onclick = () => {
                this.moKhoaAvatar(ten, selectedAvatar.id);
                modal.remove();
                banPhaoHoa();
                alert(`🎉 CHÚC MỪNG CHIẾN BINH! Bạn đã đưa Avatar "${selectedAvatar.ten}" vào Tủ Đồ Chiến Binh thành công. Bạn có thể bấm vào Avatar tại Sảnh chính để đổi trang bị bất cứ lúc nào!`);
            };

            // Đóng
            document.getElementById('btn-close-picker').onclick = () => { modal.remove(); };
            modal.addEventListener('click', (e) => {
                if (e.target === modal) modal.remove();
            });

            // Khởi tạo hiển thị ban đầu
            renderPickerGrid();
            capNhatPreviewPicker(selectedAvatar);
        },

        // Modal khi học sinh đã mở khóa toàn bộ 24/24 Avatar
        hienThiModalDaiKienTuong(tenHS) {
            phatAmThanh('unlock');
            banPhaoHoa();
            const modal = document.createElement('div');
            modal.className = 'hero-avatar-picker-backdrop';
            modal.innerHTML = `
                <div class="hero-avatar-unlock-card animate-pop-in">
                    <div class="unlock-crown"><i class="fa-solid fa-crown fa-bounce" style="color:#ffd700;"></i></div>
                    <h2 class="unlock-title">ĐẠI KIỆN TƯỚNG TOÀN NĂNG!</h2>
                    <p class="unlock-sub">Tuyệt vời <b>${tenHS}</b>! Bạn đã xuất sắc mở khóa trọn bộ <b>24/24 Avatar Chiến Binh</b> của Math Hero!</p>
                    <div style="background:rgba(255,215,0,0.15); border:1px solid #ffd700; border-radius:12px; padding:15px; margin:15px 0;">
                        <span style="font-size:1.5rem;">💎 💰</span>
                        <div style="font-weight:900; color:#ffd700; margin-top:6px;">PHẦN THƯỞNG ĐẶC BIỆT:</div>
                        <div style="font-size:0.9rem; color:#fff;">+100 EXP & +100 Xu Chiến Binh!</div>
                    </div>
                    <button class="btn-unlock-equip" style="width:100%;" onclick="this.closest('.hero-avatar-picker-backdrop').remove()">
                        <i class="fa-solid fa-award"></i> Tiếp Tục Vinh Quang
                    </button>
                </div>
            `;
            document.body.appendChild(modal);
        },

        // Kiểm tra điều kiện mở khóa / Kích hoạt Rương chọn Avatar khi hoàn thành nhiệm vụ
        async kiemTraVaMoKhoaAvatar(tenHS, loaiSuKien, thongSo = {}) {
            const ten = (tenHS || this.layTenHocSinh()).trim();
            if (!ten) return [];

            const daMoKhoa = this.layDanhSachMoKhoa(ten);
            let duDieuKienNhanThuong = false;
            let tieuDeNhiemVu = 'Nhiệm vụ xuất sắc';
            let moTaNhiemVu = 'hoàn thành xuất sắc nhiệm vụ!';

            if (loaiSuKien === 'tu_luan_xuat_sac') {
                if (thongSo.diem >= 8) {
                    duDieuKienNhanThuong = true;
                    tieuDeNhiemVu = 'Bài Tự Luận Xuất Sắc';
                    moTaNhiemVu = `được chấm đạt ${thongSo.diem} điểm bài Tự Luận xuất sắc!`;
                }
            } else if (loaiSuKien === 'trac_nghiem_xuat_sac') {
                if (thongSo.diem >= 8 || (thongSo.tongSoCau && (thongSo.soCauDung / thongSo.tongSoCau >= 0.8))) {
                    duDieuKienNhanThuong = true;
                    tieuDeNhiemVu = 'Luyện Tập Trắc Nghiệm';
                    moTaNhiemVu = `hoàn thành xuất sắc bài thi Trắc Nghiệm đạt kết quả cao!`;
                }
            } else if (loaiSuKien === 'tu_duy') {
                duDieuKienNhanThuong = true;
                tieuDeNhiemVu = 'Nâng Cấp Tư Duy';
                moTaNhiemVu = 'vượt qua thử thách rèn luyện Tư Duy Toán Học logic!';
            } else if (loaiSuKien === 'streak') {
                const countStreak = parseInt(localStorage.getItem('hero_streak_count_' + ten)) || 0;
                if (countStreak >= 3 || (thongSo.streak && thongSo.streak >= 3)) {
                    duDieuKienNhanThuong = true;
                    tieuDeNhiemVu = 'Chuỗi Chuyên Cần';
                    moTaNhiemVu = `duy trì chuỗi học tập liên tiếp ${thongSo.streak || countStreak} ngày!`;
                }
            }

            // Nếu đạt tiêu chuẩn nhận thưởng và còn avatar để mở khóa -> BẬT RƯƠNG CHỌN AVATAR
            if (duDieuKienNhanThuong) {
                const conLai = DANH_SACH_AVATAR.filter(av => !daMoKhoa.includes(av.id));
                if (conLai.length > 0) {
                    this.moRuongChonAvatar(ten, {
                        tieuDe: tieuDeNhiemVu,
                        moTa: moTaNhiemVu,
                        diem: thongSo.diem
                    });
                    return conLai;
                }
            }

            return [];
        },

        // Đồng bộ dữ liệu Avatar lên Firebase
        async dongBoLenFirebase(tenHS) {
            const ten = (tenHS || this.layTenHocSinh()).trim();
            if (!ten) return;

            const unlocked = this.layDanhSachMoKhoa(ten);
            const currentAv = this.layAvatarHienTai(ten);
            const avatarUrl = taoUrlDiceBear(currentAv.style, currentAv.seed);

            const payload = {
                math_hero_unlocked_avatars: unlocked,
                math_hero_current_avatar: currentAv.id,
                avatarUrl: avatarUrl,
                _capNhatAvatar: new Date().toISOString()
            };

            if (window.HeroFirebaseCompat && typeof window.HeroFirebaseCompat.setDoc === 'function') {
                try {
                    await window.HeroFirebaseCompat.setDoc("mathhero_students", encodeURIComponent(ten), payload, { merge: true });
                } catch (e) {}
            } else if (window.fbSyncModule && typeof window.fbSyncModule.dayDuLieuLenMay === 'function') {
                try {
                    await window.fbSyncModule.dayDuLieuLenMay(ten);
                } catch (e) {}
            }
        },

        // Tự động nhận dữ liệu Avatar khi Firebase đồng bộ về máy
        dongBoTuFirebase(tenHS, data) {
            if (!tenHS || !data) return;
            if (Array.isArray(data.math_hero_unlocked_avatars)) {
                localStorage.setItem('math_hero_unlocked_avatars_' + tenHS, JSON.stringify(data.math_hero_unlocked_avatars));
            }
            if (data.math_hero_current_avatar) {
                localStorage.setItem('math_hero_current_avatar_' + tenHS, data.math_hero_current_avatar);
            }
            this.capNhatTatCaGiaoDien(tenHS);
        },

        // Cập nhật Avatar trên tất cả thành phần giao diện đang mở
        capNhatTatCaGiaoDien(tenHS) {
            const ten = (tenHS || this.layTenHocSinh()).trim();
            this.capNhatAvatarGiaoDien('player-avatar', ten);
            this.capNhatAvatarGiaoDien('warrior-avatar-shop', ten);
            
            const shopAv = document.querySelector('.warrior-avatar');
            if (shopAv) {
                this.renderVaoElement(shopAv, ten);
            }
        },

        capNhatAvatarGiaoDien(elementOrId, tenHS) {
            const el = typeof elementOrId === 'string' ? document.getElementById(elementOrId) : elementOrId;
            if (!el) return;
            const ten = (tenHS || this.layTenHocSinh()).trim();
            this.renderVaoElement(el, ten);
        },

        renderVaoElement(el, tenHS) {
            if (!el) return;
            const ten = (tenHS || this.layTenHocSinh()).trim();
            const current = this.layAvatarHienTai(ten);
            const url = taoUrlDiceBear(current.style, current.seed);

            el.innerHTML = `
                <img src="${url}" alt="${current.ten}" 
                     style="width:100%; height:100%; object-fit:contain; border-radius:inherit; filter: drop-shadow(0 0 6px ${current.auraColor});" 
                     loading="lazy">
                <span class="avatar-wardrobe-btn-badge" title="Bấm để mở Tủ Đồ Avatar" style="
                    position:absolute; bottom:-4px; right:-4px; 
                    background:linear-gradient(135deg,#ff2a85,#7b2ff7); 
                    color:#fff; font-size:9px; border-radius:50%; 
                    width:16px; height:16px; display:flex; align-items:center; 
                    justify-content:center; box-shadow:0 0 8px rgba(0,255,255,0.8);
                    border:1px solid #00ffff; pointer-events:none;
                ">🎒</span>
            `;
            el.style.position = 'relative';
            el.style.cursor = 'pointer';
            el.title = `Chiến binh: ${current.ten} (Bấm để đổi Avatar trong Tủ Đồ)`;

            if (!el._daGanClickTuDo) {
                el._daGanClickTuDo = true;
                el.addEventListener('click', (e) => {
                    e.stopPropagation();
                    this.moTuDoAvatar();
                });
            }
        },

        // ====================================================================
        // GIAO DIỆN TỦ ĐỒ CHIẾN BINH MỞ RỘNG (24 AVATAR + BỘ LỌC + TIẾN ĐỘ)
        // ====================================================================
        moTuDoAvatar(tenHocSinh) {
            const ten = (tenHocSinh || this.layTenHocSinh()).trim();
            if (!ten) {
                alert('Vui lòng đăng nhập để mở Tủ Đồ Chiến Binh!');
                return;
            }

            this.chenCssHeThong();

            const existing = document.getElementById('modal-hero-wardrobe');
            if (existing) existing.remove();

            const unlocked = this.layDanhSachMoKhoa(ten);
            let currentSelected = this.layAvatarHienTai(ten);
            let activeCategory = 'all';
            let activeStatusFilter = 'all'; // 'all', 'unlocked', 'locked'
            let searchKeyword = '';

            const tiLePhanTram = Math.round((unlocked.length / DANH_SACH_AVATAR.length) * 100);

            const modal = document.createElement('div');
            modal.id = 'modal-hero-wardrobe';
            modal.className = 'hero-wardrobe-backdrop';
            modal.innerHTML = `
                <div class="hero-wardrobe-container animate-scale-up">
                    <div class="wardrobe-header">
                        <div class="wardrobe-title">
                            <span class="wardrobe-icon">🎒</span>
                            <div>
                                <h3>TỦ ĐỒ CHIẾN BINH (24 AVATAR)</h3>
                                <p>Sưu tầm diện mạo Avatar từ các chiến tích Math Hero</p>
                            </div>
                        </div>
                        <button class="btn-wardrobe-close" id="btn-close-wardrobe">&times;</button>
                    </div>

                    <div class="wardrobe-progress-bar-wrap">
                        <div class="wardrobe-progress-info">
                            <span><i class="fa-solid fa-trophy" style="color:#ffd700;"></i> Tiến độ sưu tập: <b>${unlocked.length}/${DANH_SACH_AVATAR.length}</b> Avatar</span>
                            <span style="color:#00ffff; font-weight:800;">${tiLePhanTram}%</span>
                        </div>
                        <div class="wardrobe-progress-track">
                            <div class="wardrobe-progress-fill" style="width:${tiLePhanTram}%;"></div>
                        </div>
                    </div>

                    <div class="wardrobe-body">
                        <!-- CỘT TRÁI: XEM TRƯỚC (PREVIEW) -->
                        <div class="wardrobe-preview-col">
                            <div class="preview-avatar-stage" id="wardrobe-preview-stage" style="--stage-aura:${currentSelected.auraColor};">
                                <img id="wardrobe-preview-img" src="${taoUrlDiceBear(currentSelected.style, currentSelected.seed)}" alt="${currentSelected.ten}">
                                <span class="preview-badge" id="wardrobe-preview-badge" style="background:${currentSelected.auraColor};">${currentSelected.badge}</span>
                            </div>
                            <h4 class="preview-name" id="wardrobe-preview-name" style="color:${currentSelected.auraColor};">${currentSelected.ten}</h4>
                            <p class="preview-danhhieu" id="wardrobe-preview-danhhieu">${currentSelected.danhHieu}</p>
                            <p class="preview-desc" id="wardrobe-preview-desc">${currentSelected.moTa}</p>

                            <div class="preview-condition-box" id="wardrobe-preview-cond-box">
                                <div class="cond-label"><i class="fa-solid fa-scroll"></i> Điều kiện sở hữu:</div>
                                <div class="cond-text" id="wardrobe-preview-cond">${currentSelected.dieuKien}</div>
                            </div>

                            <button class="btn-wardrobe-equip" id="btn-wardrobe-action-equip">
                                <i class="fa-solid fa-check"></i> Đang Sử Dụng
                            </button>
                        </div>

                        <!-- CỘT PHẢI: BỘ LỌC + LƯỚI DANH SÁCH AVATAR -->
                        <div class="wardrobe-grid-col">
                            <!-- THANH TAB THỂ LOẠI -->
                            <div class="wardrobe-tabs-bar">
                                ${CATEGORIES.map(cat => `
                                    <button class="wardrobe-tab-btn ${cat.id === 'all' ? 'active' : ''}" data-cat="${cat.id}">
                                        ${cat.icon} ${cat.ten}
                                    </button>
                                `).join('')}
                            </div>

                            <!-- THANH TÌM KIẾM & BỘ LỌC TRẠNG THÁI -->
                            <div class="wardrobe-sub-filter">
                                <div class="wardrobe-search-box">
                                    <i class="fa-solid fa-magnifying-glass"></i>
                                    <input type="text" id="wardrobe-search-input" placeholder="Tìm theo tên, danh hiệu...">
                                </div>
                                <div class="wardrobe-status-filter">
                                    <button class="status-btn active" data-status="all">Tất cả</button>
                                    <button class="status-btn" data-status="unlocked">Đã mở (${unlocked.length})</button>
                                    <button class="status-btn" data-status="locked">Chưa mở (${DANH_SACH_AVATAR.length - unlocked.length})</button>
                                </div>
                            </div>

                            <div class="wardrobe-grid" id="wardrobe-items-grid">
                                <!-- Render grid -->
                            </div>
                        </div>
                    </div>
                </div>
            `;

            document.body.appendChild(modal);

            // Hàm render Grid
            const renderWardrobeGrid = () => {
                const grid = document.getElementById('wardrobe-items-grid');
                if (!grid) return;

                const q = (searchKeyword || '').trim().toLowerCase();

                const filtered = DANH_SACH_AVATAR.filter(av => {
                    if (activeCategory !== 'all' && av.category !== activeCategory) return false;
                    const isUnlocked = unlocked.includes(av.id);
                    if (activeStatusFilter === 'unlocked' && !isUnlocked) return false;
                    if (activeStatusFilter === 'locked' && isUnlocked) return false;
                    if (q) {
                        const matchName = av.ten.toLowerCase().includes(q);
                        const matchTitle = av.danhHieu.toLowerCase().includes(q);
                        const matchBadge = av.badge.toLowerCase().includes(q);
                        if (!matchName && !matchTitle && !matchBadge) return false;
                    }
                    return true;
                });

                if (filtered.length === 0) {
                    grid.innerHTML = `
                        <div style="grid-column:1/-1; padding:30px; text-align:center; color:#94a3b8; font-size:0.85rem;">
                            Không tìm thấy Avatar nào phù hợp với bộ lọc hiện tại.
                        </div>
                    `;
                    return;
                }

                grid.innerHTML = filtered.map(av => {
                    const isUnlocked = unlocked.includes(av.id);
                    const isEquipped = (av.id === (localStorage.getItem('math_hero_current_avatar_' + ten) || 'av_tanbinh'));
                    const isSelected = av.id === currentSelected.id;
                    return `
                        <div class="wardrobe-card ${isUnlocked ? 'unlocked' : 'locked'} ${isEquipped ? 'active-equipped' : ''} ${isSelected ? 'selected' : ''}" 
                             data-id="${av.id}">
                            <div class="card-thumb-wrap" style="border-color:${av.auraColor};">
                                <img src="${taoUrlDiceBear(av.style, av.seed)}" alt="${av.ten}">
                                ${!isUnlocked ? '<div class="lock-overlay"><i class="fa-solid fa-lock"></i></div>' : ''}
                                ${isEquipped ? '<div class="equipped-tag">ĐANG DÙNG</div>' : ''}
                            </div>
                            <div class="card-info">
                                <div class="card-name">${av.ten}</div>
                                <div class="card-badge" style="color:${av.auraColor};">${av.badge}</div>
                            </div>
                        </div>
                    `;
                }).join('');

                grid.querySelectorAll('.wardrobe-card').forEach(card => {
                    card.addEventListener('click', () => {
                        const id = card.dataset.id;
                        const av = DANH_SACH_AVATAR.find(a => a.id === id);
                        if (av) capNhatPreview(av);
                    });
                });
            };

            // Hàm cập nhật Panel xem trước khi chọn 1 Avatar
            const capNhatPreview = (av) => {
                currentSelected = av;
                const isUnlocked = unlocked.includes(av.id);
                const currentEquippedId = localStorage.getItem('math_hero_current_avatar_' + ten) || 'av_tanbinh';
                const isEquipped = (av.id === currentEquippedId);

                const stage = document.getElementById('wardrobe-preview-stage');
                if (stage) stage.style.setProperty('--stage-aura', av.auraColor);

                const img = document.getElementById('wardrobe-preview-img');
                if (img) img.src = taoUrlDiceBear(av.style, av.seed);

                const badge = document.getElementById('wardrobe-preview-badge');
                if (badge) {
                    badge.innerText = av.badge;
                    badge.style.background = av.auraColor;
                }

                const nameEl = document.getElementById('wardrobe-preview-name');
                if (nameEl) {
                    nameEl.innerText = av.ten;
                    nameEl.style.color = av.auraColor;
                }

                const titleEl = document.getElementById('wardrobe-preview-danhhieu');
                if (titleEl) titleEl.innerText = av.danhHieu;

                const descEl = document.getElementById('wardrobe-preview-desc');
                if (descEl) descEl.innerText = av.moTa;

                const condEl = document.getElementById('wardrobe-preview-cond');
                if (condEl) condEl.innerText = av.dieuKien;

                const btnEquip = document.getElementById('btn-wardrobe-action-equip');
                if (btnEquip) {
                    if (isEquipped) {
                        btnEquip.className = 'btn-wardrobe-equip is-active';
                        btnEquip.disabled = true;
                        btnEquip.innerHTML = '<i class="fa-solid fa-circle-check"></i> Đang Sử Dụng';
                    } else if (isUnlocked) {
                        btnEquip.className = 'btn-wardrobe-equip can-equip';
                        btnEquip.disabled = false;
                        btnEquip.innerHTML = '<i class="fa-solid fa-shirt"></i> Trang Bị Avatar Này';
                    } else {
                        btnEquip.className = 'btn-wardrobe-equip is-locked';
                        btnEquip.disabled = true;
                        btnEquip.innerHTML = '<i class="fa-solid fa-lock"></i> Chưa Mở Khóa';
                    }
                }

                document.querySelectorAll('.wardrobe-card').forEach(card => {
                    card.classList.toggle('selected', card.dataset.id === av.id);
                });
            };

            // Sự kiện chọn Tab thể loại
            modal.querySelectorAll('.wardrobe-tab-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    modal.querySelectorAll('.wardrobe-tab-btn').forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    activeCategory = btn.dataset.cat;
                    renderWardrobeGrid();
                });
            });

            // Sự kiện tìm kiếm
            const searchInput = document.getElementById('wardrobe-search-input');
            if (searchInput) {
                searchInput.addEventListener('input', (e) => {
                    searchKeyword = e.target.value;
                    renderWardrobeGrid();
                });
            }

            // Sự kiện lọc trạng thái (Tất cả / Đã mở / Chưa mở)
            modal.querySelectorAll('.status-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    modal.querySelectorAll('.status-btn').forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    activeStatusFilter = btn.dataset.status;
                    renderWardrobeGrid();
                });
            });

            // Bấm nút Trang bị
            document.getElementById('btn-wardrobe-action-equip').onclick = () => {
                if (currentSelected && unlocked.includes(currentSelected.id)) {
                    this.trangBiAvatar(ten, currentSelected.id);
                    capNhatPreview(currentSelected);
                    renderWardrobeGrid();
                    alert(`✅ Đã trang bị thành công Avatar "${currentSelected.ten}"!`);
                }
            };

            // Bấm đóng
            document.getElementById('btn-close-wardrobe').onclick = () => { modal.remove(); };
            modal.addEventListener('click', (e) => {
                if (e.target === modal) modal.remove();
            });

            // Render ban đầu
            renderWardrobeGrid();
            capNhatPreview(currentSelected);
        },

        // CSS giao diện hệ thống
        chenCssHeThong() {
            if (document.getElementById('css-hero-avatar-system')) return;
            const style = document.createElement('style');
            style.id = 'css-hero-avatar-system';
            style.textContent = `
                /* BACKDROP */
                .hero-wardrobe-backdrop, .hero-avatar-unlock-backdrop, .hero-avatar-picker-backdrop {
                    position: fixed; inset: 0; background: rgba(5, 2, 15, 0.88);
                    backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
                    z-index: 999999; display: flex; align-items: center; justify-content: center;
                    padding: 16px; animation: fadeIn 0.25s ease;
                }
                @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

                /* MODAL TỦ ĐỒ CONTAINER */
                .hero-wardrobe-container {
                    background: linear-gradient(135deg, #15092a 0%, #0d041c 100%);
                    border: 2px solid #7b2ff7; border-radius: 20px;
                    box-shadow: 0 0 35px rgba(123, 47, 247, 0.4), inset 0 0 20px rgba(0, 255, 255, 0.1);
                    width: 100%; max-width: 880px; max-height: 92vh;
                    display: flex; flex-direction: column; color: #fff; overflow: hidden;
                    font-family: 'Montserrat', sans-serif;
                }
                .wardrobe-header {
                    display: flex; justify-content: space-between; align-items: center;
                    padding: 14px 20px; border-bottom: 1px solid rgba(123, 47, 247, 0.3);
                    background: rgba(255, 255, 255, 0.03);
                }
                .wardrobe-title { display: flex; align-items: center; gap: 12px; }
                .wardrobe-icon { font-size: 1.8rem; filter: drop-shadow(0 0 8px #ff2a85); }
                .wardrobe-title h3 { margin: 0; font-size: 1.15rem; font-weight: 900; letter-spacing: 1px; color: #00ffff; text-shadow: 0 0 10px rgba(0,255,255,0.5); }
                .wardrobe-title p { margin: 2px 0 0 0; font-size: 0.72rem; color: #a5b4fc; font-weight: 600; }
                .btn-wardrobe-close { background: transparent; border: none; font-size: 2rem; color: #f43f5e; cursor: pointer; line-height: 1; transition: 0.2s; }
                .btn-wardrobe-close:hover { transform: scale(1.2); color: #ff0055; }

                /* TIẾN ĐỘ SƯU TẬP */
                .wardrobe-progress-bar-wrap {
                    padding: 10px 20px; background: rgba(0,0,0,0.3); border-bottom: 1px solid rgba(255,255,255,0.06);
                }
                .wardrobe-progress-info {
                    display: flex; justify-content: space-between; font-size: 0.75rem; margin-bottom: 5px; color: #cbd5e1;
                }
                .wardrobe-progress-track {
                    height: 7px; background: rgba(255,255,255,0.1); border-radius: 6px; overflow: hidden; position: relative;
                }
                .wardrobe-progress-fill {
                    height: 100%; background: linear-gradient(90deg, #00ffff, #7b2ff7, #ff2a85);
                    border-radius: 6px; transition: width 0.4s ease; box-shadow: 0 0 8px #00ffff;
                }

                /* BODY GRID 2 CỘT */
                .wardrobe-body {
                    display: flex; flex-direction: row; gap: 16px; padding: 16px 20px; overflow-y: auto; flex: 1; min-height: 0;
                }
                @media (max-width: 768px) {
                    .wardrobe-body { flex-direction: column; }
                    .wardrobe-preview-col { width: 100% !important; }
                }

                /* CỘT PREVIEW */
                .wardrobe-preview-col {
                    width: 270px; flex-shrink: 0; background: rgba(0, 0, 0, 0.35);
                    border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 16px;
                    padding: 16px; display: flex; flex-direction: column; align-items: center; text-align: center;
                }
                .preview-avatar-stage {
                    width: 125px; height: 125px; border-radius: 50%; position: relative;
                    background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0.5) 100%);
                    border: 3px solid var(--stage-aura, #00ffff);
                    box-shadow: 0 0 25px var(--stage-aura, #00ffff), inset 0 0 15px rgba(0,0,0,0.8);
                    display: flex; align-items: center; justify-content: center; margin-bottom: 12px;
                    animation: floatStage 3s infinite ease-in-out;
                }
                @keyframes floatStage {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-5px); }
                }
                .preview-avatar-stage img { width: 85%; height: 85%; object-fit: contain; }
                .preview-badge {
                    position: absolute; bottom: -8px; padding: 2px 10px; border-radius: 10px;
                    font-size: 0.65rem; font-weight: 900; color: #000; letter-spacing: 0.5px;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.6);
                }
                .preview-name { font-size: 1.1rem; font-weight: 900; margin: 4px 0 2px 0; text-shadow: 0 0 8px rgba(255,255,255,0.3); }
                .preview-danhhieu { font-size: 0.72rem; color: #38ef7d; font-weight: 700; margin-bottom: 6px; }
                .preview-desc { font-size: 0.73rem; color: #cbd5e1; line-height: 1.35; margin-bottom: 10px; }
                .preview-condition-box {
                    background: rgba(123, 47, 247, 0.15); border: 1px dashed rgba(123, 47, 247, 0.4);
                    border-radius: 10px; padding: 8px 10px; width: 100%; margin-bottom: 12px; text-align: left;
                }
                .cond-label { font-size: 0.65rem; color: #f1c40f; font-weight: 800; margin-bottom: 2px; }
                .cond-text { font-size: 0.72rem; color: #e0e7ff; font-weight: 600; line-height: 1.3; }

                .btn-wardrobe-equip {
                    width: 100%; padding: 11px; border-radius: 12px; font-weight: 900; font-size: 0.82rem;
                    cursor: pointer; transition: 0.2s; border: none; text-transform: uppercase; letter-spacing: 0.5px;
                }
                .btn-wardrobe-equip.can-equip {
                    background: linear-gradient(135deg, #00ffff, #7b2ff7); color: #fff;
                    box-shadow: 0 0 15px rgba(0, 255, 255, 0.5);
                }
                .btn-wardrobe-equip.can-equip:hover { transform: scale(1.02); filter: brightness(1.15); }
                .btn-wardrobe-equip.is-active {
                    background: rgba(46, 204, 113, 0.2); border: 1px solid #2ecc71; color: #2ecc71; cursor: default;
                }
                .btn-wardrobe-equip.is-locked {
                    background: rgba(255, 255, 255, 0.08); color: #64748b; cursor: not-allowed;
                }

                /* CỘT LƯỚI DANH SÁCH & BỘ LỌC */
                .wardrobe-grid-col { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 10px; }
                
                .wardrobe-tabs-bar {
                    display: flex; gap: 6px; overflow-x: auto; padding-bottom: 4px;
                }
                .wardrobe-tabs-bar::-webkit-scrollbar { height: 3px; }
                .wardrobe-tabs-bar::-webkit-scrollbar-thumb { background: #7b2ff7; border-radius: 3px; }

                .wardrobe-tab-btn {
                    background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12);
                    color: #cbd5e1; padding: 6px 12px; border-radius: 20px; font-size: 0.72rem; font-weight: 700;
                    cursor: pointer; white-space: nowrap; transition: 0.2s;
                }
                .wardrobe-tab-btn:hover { background: rgba(123, 47, 247, 0.25); color: #00ffff; }
                .wardrobe-tab-btn.active {
                    background: linear-gradient(135deg, #7b2ff7, #ff2a85); color: #fff;
                    border-color: #ff2a85; box-shadow: 0 0 10px rgba(255,42,133,0.4);
                }

                .wardrobe-sub-filter {
                    display: flex; gap: 10px; justify-content: space-between; align-items: center; flex-wrap: wrap;
                }
                .wardrobe-search-box {
                    position: relative; flex: 1; min-width: 160px;
                }
                .wardrobe-search-box i {
                    position: absolute; left: 10px; top: 50%; transform: translateY(-50%);
                    color: #64748b; font-size: 0.75rem;
                }
                .wardrobe-search-box input {
                    width: 100%; padding: 6px 10px 6px 28px; background: rgba(0,0,0,0.4);
                    border: 1px solid rgba(255,255,255,0.15); border-radius: 8px; color: #fff;
                    font-size: 0.75rem; outline: none; font-family: inherit;
                }
                .wardrobe-search-box input:focus { border-color: #00ffff; box-shadow: 0 0 8px rgba(0,255,255,0.3); }

                .wardrobe-status-filter { display: flex; gap: 4px; }
                .status-btn {
                    background: transparent; border: 1px solid rgba(255,255,255,0.1);
                    color: #94a3b8; font-size: 0.68rem; font-weight: 700; padding: 5px 8px;
                    border-radius: 6px; cursor: pointer; transition: 0.2s;
                }
                .status-btn.active { background: rgba(0,255,255,0.15); border-color: #00ffff; color: #00ffff; }

                .wardrobe-grid {
                    display: grid; grid-template-columns: repeat(auto-fill, minmax(105px, 1fr)); gap: 10px;
                    max-height: 400px; overflow-y: auto; padding-right: 4px;
                }
                .wardrobe-grid::-webkit-scrollbar { width: 4px; }
                .wardrobe-grid::-webkit-scrollbar-thumb { background: #7b2ff7; border-radius: 4px; }

                .wardrobe-card {
                    background: rgba(20, 10, 35, 0.6); border: 2px solid rgba(255, 255, 255, 0.1);
                    border-radius: 12px; padding: 8px 5px; display: flex; flex-direction: column;
                    align-items: center; text-align: center; cursor: pointer; transition: 0.2s; position: relative;
                }
                .wardrobe-card:hover { transform: translateY(-3px); border-color: #00ffff; box-shadow: 0 4px 15px rgba(0,255,255,0.3); }
                .wardrobe-card.selected { border-color: #00ffff; box-shadow: 0 0 15px #00ffff; background: rgba(0, 255, 255, 0.08); }
                .wardrobe-card.active-equipped { border-color: #2ecc71; }

                .card-thumb-wrap {
                    width: 58px; height: 58px; border-radius: 50%; position: relative;
                    background: radial-gradient(circle, rgba(255,255,255,0.1), rgba(0,0,0,0.6));
                    border: 1px solid rgba(255,255,255,0.2);
                    display: flex; align-items: center; justify-content: center; margin-bottom: 5px;
                }
                .card-thumb-wrap img { width: 85%; height: 85%; object-fit: contain; }
                .lock-overlay {
                    position: absolute; inset: 0; background: rgba(0, 0, 0, 0.7); border-radius: 50%;
                    display: flex; align-items: center; justify-content: center; color: #f43f5e; font-size: 1.1rem;
                }
                .equipped-tag {
                    position: absolute; top: -6px; right: -6px; background: #2ecc71; color: #000;
                    font-size: 0.52rem; font-weight: 900; padding: 1px 4px; border-radius: 5px;
                    box-shadow: 0 2px 5px rgba(0,0,0,0.5);
                }
                .card-name { font-size: 0.7rem; font-weight: 800; color: #f8fafc; line-height: 1.2; margin-bottom: 2px; }
                .card-badge { font-size: 0.58rem; font-weight: 700; }

                /* ==========================================================
                   MODAL RƯƠNG THƯỞNG: HỌC SINH TỰ CHỌN AVATAR KHI XONG NHIỆM VỤ
                   ========================================================== */
                .hero-avatar-picker-container {
                    background: linear-gradient(135deg, #1b0736 0%, #0c0217 100%);
                    border: 2px solid #ffd700; border-radius: 24px;
                    box-shadow: 0 0 45px rgba(255, 215, 0, 0.5), inset 0 0 30px rgba(123, 47, 247, 0.3);
                    width: 100%; max-width: 860px; max-height: 92vh;
                    display: flex; flex-direction: column; color: #fff; overflow: hidden;
                    font-family: 'Montserrat', sans-serif;
                }
                .picker-header {
                    display: flex; justify-content: space-between; align-items: center;
                    padding: 14px 22px; border-bottom: 1px solid rgba(255, 215, 0, 0.3);
                    background: rgba(255, 215, 0, 0.05);
                }
                .picker-title-box { display: flex; align-items: center; gap: 12px; }
                .picker-icon { font-size: 2rem; filter: drop-shadow(0 0 10px #ffd700); }
                .picker-title-box h3 { margin: 0; font-size: 1.25rem; font-weight: 900; color: #ffd700; text-shadow: 0 0 12px rgba(255,215,0,0.6); }
                .picker-subtitle { margin: 2px 0 0 0; font-size: 0.72rem; color: #38ef7d; font-weight: 800; letter-spacing: 0.5px; }
                .btn-picker-close { background: transparent; border: none; font-size: 2rem; color: #f43f5e; cursor: pointer; line-height: 1; }
                .btn-picker-close:hover { transform: scale(1.2); color: #ff0055; }

                .picker-mission-banner {
                    padding: 10px 22px; background: rgba(0,0,0,0.4); border-bottom: 1px solid rgba(255,255,255,0.08);
                    display: flex; align-items: center; gap: 10px; font-size: 0.82rem;
                }
                .banner-badge {
                    background: linear-gradient(135deg, #ff2a85, #ffd700); color: #000;
                    font-weight: 900; font-size: 0.65rem; padding: 2px 8px; border-radius: 6px;
                }
                .banner-text { color: #cbd5e1; }

                .picker-body {
                    display: flex; flex-direction: row; gap: 16px; padding: 18px 22px; overflow-y: auto; flex: 1; min-height: 0;
                }
                @media (max-width: 768px) {
                    .picker-body { flex-direction: column; }
                    .picker-preview-col { width: 100% !important; }
                }

                .picker-preview-col {
                    width: 270px; flex-shrink: 0; background: rgba(0, 0, 0, 0.4);
                    border: 1px solid rgba(255, 215, 0, 0.3); border-radius: 16px;
                    padding: 18px 14px; display: flex; flex-direction: column; align-items: center; text-align: center;
                }
                .picker-stage {
                    width: 135px; height: 135px; border-radius: 50%; position: relative;
                    background: radial-gradient(circle, rgba(255,255,255,0.15), rgba(0,0,0,0.8));
                    border: 3px solid var(--stage-aura, #ffd700);
                    box-shadow: 0 0 30px var(--stage-aura, #ffd700);
                    display: flex; align-items: center; justify-content: center; margin-bottom: 12px;
                    animation: floatStage 2.5s infinite ease-in-out;
                }
                .picker-stage img { width: 85%; height: 85%; object-fit: contain; }
                .picker-badge {
                    position: absolute; bottom: -8px; padding: 2px 10px; border-radius: 10px;
                    font-size: 0.65rem; font-weight: 900; color: #000; box-shadow: 0 2px 8px rgba(0,0,0,0.6);
                }
                .picker-name { font-size: 1.15rem; font-weight: 900; margin: 6px 0 2px 0; }
                .picker-danhhieu { font-size: 0.72rem; color: #38ef7d; font-weight: 700; margin-bottom: 6px; }
                .picker-desc { font-size: 0.73rem; color: #cbd5e1; line-height: 1.35; margin-bottom: 16px; }

                .picker-action-buttons { display: flex; flex-direction: column; gap: 8px; width: 100%; }
                .btn-picker-equip-now {
                    width: 100%; padding: 11px; border-radius: 12px; border: none; font-weight: 900;
                    background: linear-gradient(135deg, #ffd700, #ff8c00); color: #000;
                    box-shadow: 0 0 15px rgba(255, 215, 0, 0.5); cursor: pointer; transition: 0.2s;
                    font-size: 0.8rem; text-transform: uppercase;
                }
                .btn-picker-equip-now:hover { transform: scale(1.02); filter: brightness(1.15); }
                .btn-picker-save-locker {
                    width: 100%; padding: 10px; border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.2);
                    background: rgba(255, 255, 255, 0.08); color: #cbd5e1; font-weight: 700; cursor: pointer;
                    font-size: 0.75rem;
                }
                .btn-picker-save-locker:hover { background: rgba(255, 255, 255, 0.15); color: #fff; }

                .picker-list-col { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 10px; }
                .picker-filter-tabs { display: flex; gap: 6px; overflow-x: auto; padding-bottom: 4px; }
                .picker-tab-btn {
                    background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.15);
                    color: #cbd5e1; padding: 6px 12px; border-radius: 20px; font-size: 0.72rem; font-weight: 700;
                    cursor: pointer; white-space: nowrap; transition: 0.2s;
                }
                .picker-tab-btn:hover { background: rgba(255, 215, 0, 0.2); color: #ffd700; }
                .picker-tab-btn.active {
                    background: linear-gradient(135deg, #ffd700, #ff8c00); color: #000;
                    border-color: #ffd700; box-shadow: 0 0 10px rgba(255,215,0,0.5); font-weight: 900;
                }

                .picker-grid-container { flex: 1; min-height: 0; overflow-y: auto; }
                .picker-grid {
                    display: grid; grid-template-columns: repeat(auto-fill, minmax(105px, 1fr)); gap: 10px; padding-right: 4px;
                }
                .picker-card {
                    background: rgba(20, 10, 35, 0.6); border: 2px solid rgba(255, 215, 0, 0.2);
                    border-radius: 12px; padding: 8px 5px; display: flex; flex-direction: column;
                    align-items: center; text-align: center; cursor: pointer; transition: 0.2s; position: relative;
                }
                .picker-card:hover { transform: translateY(-3px); border-color: #ffd700; box-shadow: 0 4px 15px rgba(255,215,0,0.4); }
                .picker-card.selected { border-color: #ffd700; box-shadow: 0 0 18px #ffd700; background: rgba(255, 215, 0, 0.12); }

                .picker-card-thumb {
                    width: 58px; height: 58px; border-radius: 50%; position: relative;
                    background: radial-gradient(circle, rgba(255,255,255,0.15), rgba(0,0,0,0.6));
                    border: 2px solid #ffd700;
                    display: flex; align-items: center; justify-content: center; margin-bottom: 5px;
                }
                .picker-card-thumb img { width: 85%; height: 85%; object-fit: contain; }
                .picker-card-gift-tag {
                    position: absolute; top: -4px; right: -4px; background: #ff2a85; color: #fff;
                    font-size: 0.55rem; width: 16px; height: 16px; border-radius: 50%; display: flex;
                    align-items: center; justify-content: center; box-shadow: 0 0 6px #ff2a85;
                }
                .picker-card-name { font-size: 0.7rem; font-weight: 800; color: #f8fafc; line-height: 1.2; margin-bottom: 2px; }
                .picker-card-badge { font-size: 0.58rem; font-weight: 700; }
                .picker-tip { font-size: 0.7rem; color: #94a3b8; font-style: italic; text-align: center; padding-top: 4px; }
            `;
            document.head.appendChild(style);
        },

        // Khởi động tự động
        khoiDong() {
            this.chenCssHeThong();
            const ten = this.layTenHocSinh();
            if (ten) {
                this.capNhatTatCaGiaoDien(ten);
            }
        }
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => HeroAvatar.khoiDong());
    } else {
        HeroAvatar.khoiDong();
    }

    window.HeroAvatar = HeroAvatar;

})(window);
