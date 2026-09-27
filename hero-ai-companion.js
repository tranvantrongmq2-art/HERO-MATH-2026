// ========================================================================
// HERO AI COMPANION - BẠN ĐỒNG HÀNH KỶ LUẬT & TRỢ LÝ AI GỢI Ý THÔNG MINH
// Math Hero - Tinh thần Kỷ luật, Tự giác, Phương pháp Socratic
// Thiết kế 100% Local-First, 0 chi phí Firebase Spark Plan
// ========================================================================

(function (window) {
    'use strict';

    console.log('[Hero AI Companion] Đang khởi động mô-đun Bạn Đồng Hành Kỷ Luật & AI Socratic...');

    // ====================================================================
    // 1. CẤU HÌNH CÁC LOÀI LINH THÚ TRI THỨC (PET DEFINITIONS)
    // ====================================================================
    const DANH_SACH_LINH_THU = {
        'owl': {
            id: 'owl',
            name: 'Cú Trí Tuệ',
            title: 'Sứ Giả Tập Trung & Sâu Sắc',
            themeColor: '#9b59b6',
            accentColor: '#f1c40f',
            icon: '🦉',
            desc: 'Đại diện cho khả năng quan sát chi tiết, tính kiên nhẫn và sự tập trung cao độ khi giải các bài toán khó.',
            quotes: [
                'Kỷ luật tự giác chính là sức mạnh giúp em bay cao hơn mọi thử thách!',
                'Mỗi bài toán giải đúng là một vì sao sáng trên bầu trời tri thức của em.',
                'Đọc kỹ đề bài là em đã đi được một nửa chặng đường rồi đấy!',
                'Tập trung cao độ trong 15 phút quý giá hơn ngồi cả tiếng mà xao nhãng.',
                'Hôm nay em đã hoàn thành thử thách chưa? Cùng mình bay vào thế giới toán học nhé!'
            ]
        },
        'dragon': {
            id: 'dragon',
            name: 'Rồng Kiên Định',
            title: 'Chiến Binh Vượt Khó',
            themeColor: '#2ecc71',
            accentColor: '#ffd700',
            icon: '🐉',
            desc: 'Đại diện cho lòng dũng cảm, tinh thần không ngại bài toán hóc búa, luôn bền bỉ tìm ra hướng giải.',
            quotes: [
                'Lửa thử vàng, toán khó rèn dũng khí! Không có bài toán nào là không có lời giải.',
                'Sai một lần không sao cả, quan trọng là em nhìn ra bài học để mạnh mẽ hơn!',
                'Chiến binh thực thụ rèn luyện mỗi ngày, dù chỉ 10 phút cũng không bỏ cuộc.',
                'Ngọn lửa kỷ luật của em đang cháy rất sáng, hãy giữ vững chuỗi học này nhé!',
                'Mỗi phép tính chính xác là một đòn tấn công uy lực giúp em tiến bộ!'
            ]
        },
        'fox': {
            id: 'fox',
            name: 'Cáo Nhanh Nhẹn',
            title: 'Bậc Thầy Tư Duy Linh Hoạt',
            themeColor: '#e67e22',
            accentColor: '#00ffff',
            icon: '🦊',
            desc: 'Đại diện cho tư duy suy luận nhanh, khả năng kết nối dữ kiện và tìm ra các cách giải thông minh, độc đáo.',
            quotes: [
                'Thử nhìn bài toán từ một góc độ khác xem nào, điều kỳ diệu sẽ xuất hiện đấy!',
                'Tư duy linh hoạt bắt đầu từ việc hiểu sâu bản chất công thức.',
                'Nhanh nhẹn nhưng phải cẩn thận với các dấu âm và đơn vị đo lường nhé!',
                'Em làm rất cừ! Hãy duy trì thói quen tự giác này mỗi ngày.',
                'Cùng mình chinh phục thêm 1 bài toán nữa để nhận trọn vẹn điểm thưởng nào!'
            ]
        },
        'cat': {
            id: 'cat',
            name: 'Mèo Chăm Chỉ',
            title: 'Biểu Tượng Thói Quen Kỷ Luật',
            themeColor: '#f39c12',
            accentColor: '#e74c3c',
            icon: '🐱',
            desc: 'Đại diện cho sự chuyên cần, làm bài đúng giờ, tích lũy kiến thức đều đặn như kiến tha lâu đầy tổ.',
            quotes: [
                'Mỗi ngày một chút đều đặn sẽ tạo nên kỳ tích phi thường!',
                'Mình ở đây để đồng hành cùng em rèn luyện thói quen tự giác mỗi ngày.',
                'Đã đến giờ hẹn học bài rồi, chúng mình cùng nhau khởi động trí não nào!',
                'Kỷ luật hôm nay, thành công rực rỡ ngày mai!',
                'Em đã chăm chỉ hơn hôm qua rồi đấy, mình rất tự hào về em!'
            ]
        },
        'robot': {
            id: 'robot',
            name: 'Mecha Tri Thức',
            title: 'Người Máy AI Siêu Cấp',
            themeColor: '#00f2fe',
            accentColor: '#8b5cf6',
            icon: '🤖',
            desc: 'Đại diện cho tư duy tính toán chuẩn xác, logic sắc bén và công nghệ AI hiện đại.',
            quotes: [
                'Hệ thống ghi nhận: Chỉ số tư duy của em đang tăng vọt! 🚀',
                'Công thức chuẩn xác, logic tuyệt đối, tiến bước nào chiến binh!',
                'Nạp năng lượng tri thức: Sẵn sàng quét sạch mọi bài toán khó!',
                'Lỗi sai chỉ là cơ hội để nâng cấp thuật toán tư duy mà thôi! 💡',
                'Khởi động chế độ tập trung cao độ trong 10 phút nhé chủ nhân!'
            ]
        },
        'horse': {
            id: 'horse',
            name: 'Bạch Mã Thần Tốc',
            title: 'Thiên Mã Kỷ Luật',
            themeColor: '#38bdf8',
            accentColor: '#ffd700',
            icon: '🐎',
            desc: 'Đại diện cho sự bền bỉ phi thường, tinh thần phi nước đại thẳng tiến đến đích vinh quang.',
            quotes: [
                'Bền bỉ phi nước đại, không chướng ngại nào cản được bước chân em! 🏁',
                'Kỷ luật tự giác như vó ngựa kiên định trên thảo nguyên tri thức bao la!',
                'Chạy nhanh tới vạch đích điểm 10 cùng mình nhé chủ nhân!',
                'Ngựa phi ngàn dặm bắt đầu từ một bước chân, bài toán khó bắt đầu từ phép tính đơn giản!'
            ]
        },
        'flamingo': {
            id: 'flamingo',
            name: 'Hồng Hạc Tiên Cảnh',
            title: 'Hạc Thần Phù Trợ',
            themeColor: '#ec4899',
            accentColor: '#f472b6',
            icon: '🦩',
            desc: 'Đại diện cho sự thanh lịch, bình tĩnh và tự tin khi đối diện những bài toán phức tạp.',
            quotes: [
                'Bay lượn trên đôi cánh tự tin và thanh lịch giữa trời mây! 🪶',
                'Trí tuệ nở rộ như đóa sen hồng giữa làn nước hồ tiên trong vắt!',
                'Hãy giữ tâm trí thật tĩnh lặng khi đối diện những câu hỏi đánh đố em nhé!',
                'Mỗi bước nhảy múa của mình là một lời chúc may mắn gửi đến em!'
            ]
        },
        'parrot': {
            id: 'parrot',
            name: 'Vẹt Đa Sắc Thông Thái',
            title: 'Hiền Triết Rừng Xanh',
            themeColor: '#10b981',
            accentColor: '#fbbf24',
            icon: '🦜',
            desc: 'Đại diện cho trí nhớ siêu việt, khả năng tổng hợp và ghi nhớ bản chất công thức toán học.',
            quotes: [
                'Hiểu sâu bản chất công thức là nhớ lâu muôn đời! 📚',
                'Lời nói khôn ngoan xuất phát từ tư duy mạch lạc và logic!',
                'Lặp lại bài tập 3 lần là khắc sâu vĩnh viễn vào trí nhớ đấy!',
                'Đọc to đề bài lên nào, bí mật của bài toán sẽ hé lộ ngay thôi!'
            ]
        },
        'stork': {
            id: 'stork',
            name: 'Bạch Hạc Trường Sinh',
            title: 'Cổ Thụ Bất Tử',
            themeColor: '#94a3b8',
            accentColor: '#38ef7d',
            icon: '🦢',
            desc: 'Đại diện cho đức tính kiên trì, thuần khiết và sự bền lòng trên con đường học tập.',
            quotes: [
                'Đôi cánh trắng muốt tượng trưng cho sự thuần khiết của tri thức! ☁️',
                'Bình tâm suy nghĩ, đáp án đúng sẽ tự khắc hiện rõ như bóng trăng đáy nước!',
                'Trường sinh và trí tuệ vô biên nhờ rèn luyện tư duy bền bỉ mỗi ngày!',
                'Độ kiên trì của em hôm nay chính là thành công rạng rỡ của ngày mai!'
            ]
        },
        'ghost': {
            id: 'ghost',
            name: 'Bóng Ma Tinh Nghịch',
            title: 'Slime Ma Thuật',
            themeColor: '#a855f7',
            accentColor: '#06b6d4',
            icon: '👻',
            desc: 'Đại diện cho sự vui vẻ, phá cách, biến bài toán khó thành trò chơi khám phá hấp dẫn.',
            quotes: [
                'Hù! Toán học đâu có đáng sợ bằng sự lười biếng đâu nè! 👻',
                'Tớ có thể biến hình thành bất kỳ hình dạng nào của đáp án đúng!',
                'Học mà chơi, chơi mà học, tư duy bứt phá vui ơi là vui!',
                'Bí quyết để giải toán siêu đẳng: Không bao giờ sợ thử lại!'
            ]
        },
        'duck': {
            id: 'duck',
            name: 'Vịt Hoàng Kim',
            title: 'Sứ Giả Thần Tài',
            themeColor: '#f59e0b',
            accentColor: '#fbbf24',
            icon: '🦆',
            desc: 'Đại diện cho may mắn, niềm vui sảng khoái và tinh thần lạc quan trong mọi hoàn cảnh.',
            quotes: [
                'Quạc quạc! May mắn luôn mỉm cười với học sinh kiên trì và chăm chỉ! 🍀',
                'Mỗi ngày tích lũy một chút kiến thức sẽ tạo nên kho báu vô giá!',
                'Cùng mình bơi qua mọi con sóng thử thách của đại dương Toán học nhé!',
                'Niềm vui giải được bài toán khó ngọt ngào hơn bất kỳ món ăn nào!'
            ]
        }
    };

    // ====================================================================
    // 2. CƠ CHẾ TIẾN HÓA LINH THÚ (DỰA TRÊN CHUỖI STREAK & SỐ CÂU ĐÚNG)
    // ====================================================================
    // Không cày cuốc, chỉ đánh giá sự KIÊN TRÌ và TỰ GIÁC
    const MOC_TIEN_HOA = [
        { capDo: 1, tenCap: 'Quả Trứng Tri Thức', yeuCauStreak: 0, yeuCauCauDung: 0, iconGiaiDoan: '🥚', badgeColor: '#95a5a6' },
        { capDo: 2, tenCap: 'Linh Thú Sơ Sinh', yeuCauStreak: 2, yeuCauCauDung: 10, iconGiaiDoan: '🐣', badgeColor: '#3498db' },
        { capDo: 3, tenCap: 'Linh Thú Trưởng Thành', yeuCauStreak: 7, yeuCauCauDung: 40, iconGiaiDoan: '🌟', badgeColor: '#9b59b6' },
        { capDo: 4, tenCap: 'Thần Thú Hoàng Gia', yeuCauStreak: 14, yeuCauCauDung: 100, iconGiaiDoan: '👑', badgeColor: '#f1c40f' }
    ];

    // ====================================================================
    // 3. QUẢN LÝ DỮ LIỆU PET (LOCAL-FIRST)
    // ====================================================================
    function layTenHocSinh() {
        if (typeof window.layTenHocSinhHienTai === 'function') {
            return window.layTenHocSinhHienTai() || 'hero_student';
        }
        return localStorage.getItem('ten_hoc_sinh_hien_tai') || sessionStorage.getItem('ten_hoc_sinh_hien_tai') || 'hero_student';
    }

    function layKeyStoragePet(tenHs) {
        return 'hero_discipline_pet_' + (tenHs || layTenHocSinh());
    }

    function layThongTinPetHocSinh(tenHs) {
        let ten = tenHs || layTenHocSinh();
        let key = layKeyStoragePet(ten);
        let data = null;
        try {
            data = JSON.parse(localStorage.getItem(key));
        } catch (e) {}

        if (!data || typeof data !== 'object') {
            data = {
                loai: 'owl', // Mặc định là Cú Trí Tuệ
                tenDat: '',
                ngayNhan: new Date().toISOString().split('T')[0],
                lanCuoiTuongTac: ''
            };
            localStorage.setItem(key, JSON.stringify(data));
        }

        // Đọc chỉ số kỷ luật hiện tại của học sinh từ localStorage
        let streak = parseInt(localStorage.getItem('hero_streak_count_' + ten)) || 1;
        let lastDateStreak = localStorage.getItem('hero_streak_last_date_' + ten) || '';
        let homNay = new Date().toISOString().split('T')[0];
        let daHocHomNay = (lastDateStreak === homNay);

        let exp = parseInt(localStorage.getItem('exp_' + ten)) || 0;
        let soCauDungUocLuong = Math.floor(exp / 10);

        // Tính cấp độ tiến hóa
        let capHienTai = 1;
        for (let i = MOC_TIEN_HOA.length - 1; i >= 0; i--) {
            let moc = MOC_TIEN_HOA[i];
            if (streak >= moc.yeuCauStreak || soCauDungUocLuong >= moc.yeuCauCauDung) {
                capHienTai = moc.capDo;
                break;
            }
        }

        let loaiPet = DANH_SACH_LINH_THU[data.loai] || DANH_SACH_LINH_THU['owl'];
        let infoMoc = MOC_TIEN_HOA.find(m => m.capDo === capHienTai) || MOC_TIEN_HOA[0];
        let infoMocTiepTheo = MOC_TIEN_HOA.find(m => m.capDo === capHienTai + 1) || null;

        // Trạng thái tâm trạng
        let mood = 'happy';
        let moodText = 'Tràn đầy năng lượng tri thức!';
        let moodIcon = '✨';
        if (!daHocHomNay) {
            mood = 'waiting';
            moodText = 'Đang chờ bạn cùng rèn luyện hôm nay...';
            moodIcon = '💤';
        } else if (streak >= 7) {
            mood = 'super';
            moodText = 'Tự hào với Kỷ luật Thép của bạn!';
            moodIcon = '🔥';
        }

        return {
            tenHocSinh: ten,
            loaiId: loaiPet.id,
            tenLoai: loaiPet.name,
            danhHieu: loaiPet.title,
            iconLoai: loaiPet.icon,
            themeColor: loaiPet.themeColor,
            accentColor: loaiPet.accentColor,
            quotes: loaiPet.quotes,
            capDo: capHienTai,
            tenCap: infoMoc.tenCap,
            iconGiaiDoan: infoMoc.iconGiaiDoan,
            badgeColor: infoMoc.badgeColor,
            streak: streak,
            daHocHomNay: daHocHomNay,
            exp: exp,
            soCauDung: soCauDungUocLuong,
            mocTiepTheo: infoMocTiepTheo,
            mood: mood,
            moodText: moodText,
            moodIcon: moodIcon
        };
    }

    function doiLoaiLinhThu(loaiId) {
        if (!DANH_SACH_LINH_THU[loaiId]) return false;
        let ten = layTenHocSinh();
        let key = layKeyStoragePet(ten);
        let data = {};
        try { data = JSON.parse(localStorage.getItem(key)) || {}; } catch (e) {}
        data.loai = loaiId;
        localStorage.setItem(key, JSON.stringify(data));
        return true;
    }

    // ====================================================================
    // 4. ÂM THANH NATIVE TƯƠNG TÁC PET (WEB AUDIO 0KB)
    // ====================================================================
    function phatAmThanhPet(type) {
        try {
            const AudioCtx = window.AudioContext || window.webkitAudioContext;
            if (!AudioCtx) return;
            let ctx = new AudioCtx();
            if (ctx.state === 'suspended') ctx.resume();

            let t0 = ctx.currentTime + 0.02;

            if (type === 'chirp' || type === 'purr') {
                // Tiếng kêu vui tươi nhẹ nhàng khi chạm vào Pet
                let osc = ctx.createOscillator();
                let gain = ctx.createGain();
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.type = 'sine';
                osc.frequency.setValueAtTime(800, t0);
                osc.frequency.exponentialRampToValueAtTime(1400, t0 + 0.08);
                osc.frequency.exponentialRampToValueAtTime(1000, t0 + 0.16);
                gain.gain.setValueAtTime(0.12, t0);
                gain.gain.exponentialRampToValueAtTime(0.001, t0 + 0.2);
                osc.start(t0);
                osc.stop(t0 + 0.2);
            } else if (type === 'level_up') {
                // Tiếng chuông thăng cấp thần thú
                [659.25, 830.61, 987.77, 1318.51].forEach((f, i) => {
                    let osc = ctx.createOscillator();
                    let gain = ctx.createGain();
                    osc.connect(gain);
                    gain.connect(ctx.destination);
                    osc.type = 'triangle';
                    let tStart = t0 + i * 0.08;
                    osc.frequency.setValueAtTime(f, tStart);
                    gain.gain.setValueAtTime(0.2, tStart);
                    gain.gain.exponentialRampToValueAtTime(0.001, tStart + 0.35);
                    osc.start(tStart);
                    osc.stop(tStart + 0.35);
                });
            }
        } catch (e) {}
    }

    // ====================================================================
    // 5. TRỢ LÝ AI SOCRATIC GỢI Ý THÔNG MINH (GEMINI FLASH + FALLBACK)
    // ====================================================================
    // ====================================================================
    // 5. TRỢ LÝ AI SOCRATIC GỢI Ý THÔNG MINH (GEMINI FLASH + BỘ OFFLINE THÔNG MINH)
    // ====================================================================
    function layApiKeyGemini() {
        return (localStorage.getItem('gemini_api_key') || localStorage.getItem('admin_gemini_key') || '').trim();
    }

    // Tra cứu cẩm nang lý thuyết từ kho dữ liệu bài học theo khối và chuyên đề câu hỏi
    function traCuuLyThuyetTuThuVien(cauHoiText, khoiHs, cauHoiObj = {}) {
        let rawLs = localStorage.getItem('danh_sach_bai_hoc_ly_thuyet');
        let ds = [];
        try { if (rawLs) ds = JSON.parse(rawLs); } catch(e){}
        if (!Array.isArray(ds) || ds.length === 0) return null;

        const soKhoiHs = (khoiHs ? (khoiHs.match(/\d+/) || [])[0] : '') || '';
        let dsKhoi = ds.filter(b => {
            if (b.hidden) return false;
            if (!soKhoiHs) return true;
            if (!b.grade || b.grade === 'all') return true;
            return (b.grade.match(/\d+/) || [])[0] === soKhoiHs;
        });
        if (dsKhoi.length === 0) dsKhoi = ds.filter(b => !b.hidden);

        // Gom các nguồn văn bản để nhận diện chuyên đề chính xác
        let textLower = (cauHoiText || '').toLowerCase();
        let chuyenDeText = (cauHoiObj.chuyenDe || cauHoiObj.topic || cauHoiObj.folderName || '').toLowerCase();
        let explanationText = (cauHoiObj.explanation || '').toLowerCase();
        let chuoiTraCuuTong = `${textLower} ${chuyenDeText} ${explanationText}`;

        // Tìm bài học & mục con có độ khớp cao nhất
        let baiHopNhat = null;
        let mucConHopNhat = null;
        let diemCaoNhat = 0;

        dsKhoi.forEach(bh => {
            let diemBai = 0;
            let title = (bh.title || '').toLowerCase();
            let tuKhoa = title.replace(/bài\s*\d+|chương\s*\d+|[\:\,\.\-]/gi, ' ').split(/\s+/).filter(w => w.length >= 3);
            
            tuKhoa.forEach(tk => {
                if (chuyenDeText.includes(tk)) diemBai += 5;
                if (textLower.includes(tk)) diemBai += 3;
                if (explanationText.includes(tk)) diemBai += 2;
            });

            let mucConTotNhatCuaBai = null;
            let diemMucConTotNhat = 0;

            if (Array.isArray(bh.children)) {
                bh.children.forEach(c => {
                    let diemMuc = 0;
                    let cTitle = (c.title || '').toLowerCase();
                    let cTuKhoa = cTitle.replace(/[\:\,\.\-]/gi, ' ').split(/\s+/).filter(w => w.length >= 3);
                    cTuKhoa.forEach(tk => {
                        if (chuyenDeText.includes(tk)) diemMuc += 4;
                        if (textLower.includes(tk)) diemMuc += 3;
                        if (explanationText.includes(tk)) diemMuc += 2;
                    });

                    // Kiểm tra xem mục con có công thức hoặc định lý hữu ích không
                    if (Array.isArray(c.items)) {
                        c.items.forEach(it => {
                            if (it.type === 'formula') diemMuc += 1;
                            let iText = (it.text || '').toLowerCase();
                            cTuKhoa.forEach(tk => {
                                if (iText.includes(tk)) diemMuc += 1;
                            });
                        });
                    }

                    if (diemMuc > diemMucConTotNhat) {
                        diemMucConTotNhat = diemMuc;
                        mucConTotNhatCuaBai = c;
                    }
                });
            }

            let tongDiem = diemBai + diemMucConTotNhat;
            if (tongDiem > diemCaoNhat) {
                diemCaoNhat = tongDiem;
                baiHopNhat = bh;
                mucConHopNhat = mucConTotNhatCuaBai;
            }
        });

        if (baiHopNhat && diemCaoNhat >= 3) {
            let congThuc = '';
            let luuY = '';
            let tenMuc = baiHopNhat.title;

            let mucDung = mucConHopNhat || (Array.isArray(baiHopNhat.children) ? baiHopNhat.children[0] : null);
            if (mucDung) {
                tenMuc = `${baiHopNhat.title} • ${mucDung.title || ''}`;
                let fItem = (mucDung.items || []).find(it => it.type === 'formula');
                let nItem = (mucDung.items || []).find(it => it.type === 'note');
                let lblItem = (mucDung.items || []).find(it => it.label && it.text);

                if (fItem && fItem.text) {
                    let cText = fItem.text.trim();
                    let daCoDola = cText.startsWith('$') && cText.endsWith('$');
                    let canBocDola = !daCoDola && /[\\^_\{\}]/.test(cText);
                    let ctRender = canBocDola ? `$${cText}$` : cText;
                    congThuc = (fItem.label ? `<b>${fItem.label}:</b> ` : '') + ctRender;
                } else if (lblItem && lblItem.text) {
                    congThuc = `<b>${lblItem.label}:</b> ${lblItem.text}`;
                }

                if (nItem && nItem.text) {
                    luuY = nItem.text.trim();
                }
            }

            if (!congThuc && baiHopNhat.content) {
                congThuc = baiHopNhat.content.slice(0, 180) + '...';
            }

            return {
                tenBai: tenMuc,
                congThuc: congThuc,
                luuY: luuY
            };
        }

        return null;
    }

    // Lọc trích xuất định lý / quy tắc tổng quát từ lời giải của giáo viên (TUYỆT ĐỐI KHÔNG LỘ ĐÁP ÁN ĐÚNG)
    function locDinhLyTuExplanation(exp, dapAnDungText = '') {
        if (!exp) return '';
        let s = exp;

        // 1. Loại bỏ các câu chốt đáp án lộ liễu
        s = s.replace(/[A-D]\s*là\s*(?:đáp\s*án|phương\s*án|câu\s*trả\s*lời)\s*(?:đúng|chính\s*xác)[\.]?/gim, '');
        s = s.replace(/(?:Do\s*đó|Vì\s*vậy|Vậy\s*(?:ta)?|Suy\s*ra|Kết\s*luận|=>)\s*[\:\,\-]?\s*(?:chọn)?\s*(?:đáp\s*án|phương\s*án)?\s*[\:\=]?\s*[A-D][\.\s\:]*.*$/gim, '');
        s = s.replace(/(?:Chọn|Đáp\s*án)\s*[\:\-]?\s*(?:phương\s*án|đáp\s*án)?\s*[A-D][\.\s\:]*.*$/gim, '');
        s = s.replace(/(?:đáp\s*án|phương\s*án)\s*(?:đúng|chính\s*xác)?\s*(?:là)?\s*[\:\=]?\s*[A-D][\.\s\:]*.*$/gim, '');

        let cacCau = s.split(/(?<=[.?!])\s+|\n+/).map(c => c.trim()).filter(c => c.length > 5);
        if (cacCau.length === 0) return '';

        let cleanDapAn = (dapAnDungText || '').replace(/^[A-D][\.\:\s]+/, '').trim().toLowerCase();

        // Ưu tiên tìm câu phát biểu định lý, quy tắc, công thức tổng quát mà không chứa đáp án hoặc phép thử nghiệm
        for (let cau of cacCau) {
            let cauLower = cau.toLowerCase();
            if (cleanDapAn && cleanDapAn.length >= 2 && cauLower.includes(cleanDapAn)) continue;
            if (cauLower.includes('thỏa mãn') || cauLower.includes('thoa man') || cauLower.includes('chính là nghiệm') || cauLower.includes('kết quả là') || cauLower.includes('kết quả bằng')) continue;
            if (cauLower.includes('chọn') || cauLower.includes('đáp án đúng') || cauLower.includes('(loại)') || cauLower.includes('loại')) continue;
            if (/^(?:thay|xét|thử)\b/i.test(cau)) continue;

            if (cauLower.includes('định lý') || cauLower.includes('quy tắc') || cauLower.includes('tính chất') || 
                cauLower.includes('công thức') || cauLower.includes('phương pháp') || cauLower.includes('áp dụng') ||
                cauLower.includes('ta có công thức') || cauLower.includes('điều kiện xác định')) {
                return cau;
            }
        }

        // Nếu không có câu chứa từ khóa định lý, tìm câu an toàn đầu tiên
        for (let cau of cacCau) {
            let cauLower = cau.toLowerCase();
            if (cleanDapAn && cleanDapAn.length >= 2 && cauLower.includes(cleanDapAn)) continue;
            if (cauLower.includes('thỏa mãn') || cauLower.includes('kết quả là') || cauLower.includes('chọn') || cauLower.includes('loại')) continue;
            if (/^(?:thay|xét|thử)\b/i.test(cau)) continue;
            return cau;
        }

        return '';
    }

    // Tạo bước gợi mở tư duy theo dạng bài (HƯỚNG DẪN HỌC SINH TỰ LÀM, KHÔNG TÍNH RA ĐÁP SỐ)
    function taoBuocGoiMoTuGiai(cauHoiText = '', cauHoiObj = {}) {
        const textLower = (cauHoiText + ' ' + (cauHoiObj.chuyenDe || '')).toLowerCase();

        if (textLower.includes('nghiệm') && (textLower.includes('cặp số') || textLower.includes('phương trình') || textLower.includes('hệ'))) {
            return 'Em hãy lần lượt thay từng giá trị $(x; y)$ của các phương án A, B, C, D vào phương trình. Cặp số nào làm cho vế trái bằng đúng vế phải thì đó chính là nghiệm cần tìm!';
        }
        if (textLower.includes('tam giác') || textLower.includes('góc') || textLower.includes('số đo')) {
            return 'Em hãy áp dụng định lý tổng các góc, lấy $180^\\circ$ trừ đi tổng số đo của các góc đã biết để tự tính ra số đo của góc còn lại nhé!';
        }
        if (textLower.includes('tìm x') || textLower.includes('phương trình') || textLower.includes('đẳng thức')) {
            return 'Em hãy chuyển các số hạng chứa ẩn $x$ sang một vế, chuyển các số tự do sang vế kia (chú ý đổi dấu), sau đó thu gọn và chia cho hệ số của $x$ để tự tìm ra $x$.';
        }
        if (textLower.includes('phân số') || textLower.includes('mẫu số') || /\d+\s*\/\s*\d+/.test(textLower) || textLower.includes('\\frac')) {
            return 'Em hãy tìm mẫu số chung, quy đồng các phân số về cùng một mẫu số dương rồi thực hiện phép tính ở tử số và rút gọn kết quả tối giản.';
        }
        if (textLower.includes('lũy thừa') || textLower.includes('mũ') || textLower.includes('căn')) {
            return 'Em hãy áp dụng quy tắc nhân/chia lũy thừa cùng cơ số hoặc công thức căn bậc hai tương ứng để biến đổi và rút gọn biểu thức từng bước.';
        }
        if (textLower.includes('song song') || textLower.includes('vuông góc') || textLower.includes('so le')) {
            return 'Em hãy quan sát các cặp góc so le trong, đồng vị hoặc góc trong cùng phía để so sánh và suy ra mối quan hệ giữa các đường thẳng.';
        }
        if (textLower.includes('diện tích') || textLower.includes('thể tích') || textLower.includes('chu vi')) {
            return 'Em hãy nhớ lại công thức tính diện tích/thể tích tương ứng, thay các số đo đã cho vào và tự thực hiện phép tính cẩn thận.';
        }
        return 'Em hãy đọc kỹ dữ kiện đã cho và đại lượng cần tìm, áp dụng công thức lý thuyết ở trên và tự đặt bút tính toán từng bước để tìm ra đáp án đúng nhé!';
    }

    // BỘ GỢI Ý OFFLINE THÔNG MINH (Chỉ gợi ý lý thuyết liên quan - TUYỆT ĐỐI KHÔNG GHI KẾT QUẢ/ĐÁP ÁN)
    function taoGoiYOfflineSocratic(cauHoiText, cacDapAn = [], giaiThichSanCo = '', cauHoiObj = {}) {
        let goiy = [];
        let text = (cauHoiText || '').trim();
        let explanation = (giaiThichSanCo || cauHoiObj.explanation || '').trim();

        // Xác định đáp án đúng bí mật để đảm bảo KHÔNG BAO GIờ bị lộ trong gợi ý
        let dapAnDungText = '';
        if (cauHoiObj && cauHoiObj.correct !== undefined && cauHoiObj.correct !== null) {
            let cIdx = parseInt(cauHoiObj.correct);
            if (!isNaN(cIdx) && cacDapAn[cIdx] !== undefined) {
                dapAnDungText = String(cacDapAn[cIdx]).trim();
            }
        }

        const canBangDola = (s) => {
            if (!s) return '';
            let cnt = (s.match(/\$/g) || []).length;
            return cnt % 2 !== 0 ? s + '$' : s;
        };

        // 1. Tra cứu lý thuyết từ Thư Viện Lý Thuyết SGK theo chuyên đề & khối lớp
        let khoiHs = sessionStorage.getItem('hoc_school_student_class') || localStorage.getItem('hoc_school_student_class') || '';
        let lyThuyetTraCuu = traCuuLyThuyetTuThuVien(text, khoiHs, cauHoiObj);
        if (lyThuyetTraCuu && lyThuyetTraCuu.congThuc) {
            goiy.push({
                tieuDe: `📚 Cẩm nang lý thuyết (${lyThuyetTraCuu.tenBai})`,
                noiDung: lyThuyetTraCuu.congThuc
            });
        }

        // Nếu không tìm được trong thư viện, hiện gợi ý mặc định
        if (goiy.length === 0) {
            goiy.push({
                tieuDe: '📌 Kiến thức cần nắm',
                noiDung: 'Đọc kỹ đề bài, xác định rõ dữ kiện đã cho và đại lượng cần tìm. Hãy mở Cẩm Nang Lý Thuyết để tra cứu công thức liên quan nhé!'
            });
        }


        // 3. Ghi chú / Cảnh báo lỗi hay gặp theo chuyên đề toán học
        let canhBaoLoi = 'Đọc kỹ đề bài, kiểm tra điều kiện xác định, dấu của phép tính và rút gọn kết quả tối giản trước khi chọn.';
        let textLower = (text + ' ' + (cauHoiObj.chuyenDe || '')).toLowerCase();
        if (textLower.includes('tam giác') || textLower.includes('góc') || textLower.includes('song song') || textLower.includes('hình học')) {
            canhBaoLoi = 'Chú ý hình học: Tổng 3 góc trong một tam giác luôn bằng 180°; hai góc kề bù có tổng bằng 180°; các cặp góc so le trong bằng nhau khi hai đường thẳng song song.';
        } else if (textLower.includes('phân số') || textLower.includes('mẫu số') || /\d+\s*\/\s*\d+/.test(textLower)) {
            canhBaoLoi = 'Lưu ý phân số: Muốn cộng trừ phân số phải quy đồng cùng mẫu số dương; khi nhân chia hãy nhớ rút gọn chéo trước để tránh sai sót số lớn.';
        } else if (textLower.includes('phương trình') || textLower.includes('tìm x') || textLower.includes('đẳng thức')) {
            canhBaoLoi = 'Quy tắc chuyển vế: Khi chuyển một số hạng từ vế này sang vế kia của đẳng thức, bắt buộc phải đổi dấu (+ thành -, - thành +).';
        } else if (textLower.includes('lũy thừa') || textLower.includes('mũ')) {
            canhBaoLoi = 'Lưu ý lũy thừa: $x^m \\cdot x^n = x^{m+n}$; $(x^m)^n = x^{m \\cdot n}$; quy ước $x^0 = 1$ với mọi $x \\neq 0$.';
        }

        if (lyThuyetTraCuu && lyThuyetTraCuu.luuY) {
            canhBaoLoi = lyThuyetTraCuu.luuY;
        }

        goiy.push({
            tieuDe: '⚠️ Ghi nhớ quan trọng',
            noiDung: canhBaoLoi
        });

        // BẢO VỆ CUỐI CÙNG: Quét sạch mọi nguy cơ vô tình rò rỉ đáp án đúng trong các mục gợi ý
        if (dapAnDungText && dapAnDungText.length >= 2) {
            let cleanVal = dapAnDungText.replace(/^[A-D][\.\:\s]+/, '').trim().toLowerCase();
            goiy.forEach(item => {
                if (cleanVal.length >= 2 && item.noiDung.toLowerCase().includes(cleanVal)) {
                    item.noiDung = item.noiDung.replace(new RegExp(cleanVal.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'gi'), '[kiến thức ẩn]');
                }
            });
        }

        return {
            nguon: 'offline_socratic',
            goiy: goiy,
            loiKhuyếnKỷLuật: 'Hãy tra cứu Cẩm Nang Lý Thuyết để nắm vững công thức, rồi tự mình sận lạy vào để tìm ra đáp án nhé!'
        };
    }

    // Gọi Gemini API tạo phản hồi Socratic thời gian thực (kèm truyền đáp án & lời giải chuẩn)
    async function goiTroLyAiGoiY(cauHoiText, cacDapAn = [], giaiThichSanCo = '', cauHoiObj = {}) {
        const apiKey = layApiKeyGemini();

        // Nếu chưa có API key hoặc offline: dùng bộ Socratic thông minh cục bộ
        if (!apiKey) {
            console.log('[Hero AI Socratic] Dùng bộ gợi mở tư duy Offline thông minh (trích xuất từ lời giải & thư viện).');
            return taoGoiYOfflineSocratic(cauHoiText, cacDapAn, giaiThichSanCo, cauHoiObj);
        }

        let dapAnDungStr = '';
        let dapAnDungText = '';
        if (cauHoiObj && cauHoiObj.correct !== undefined && cauHoiObj.correct !== null) {
            let correctIdx = parseInt(cauHoiObj.correct);
            if (!isNaN(correctIdx) && cacDapAn[correctIdx] !== undefined) {
                dapAnDungText = String(cacDapAn[correctIdx]).trim();
                dapAnDungStr = `Phương án ${String.fromCharCode(65 + correctIdx)}: ${dapAnDungText}`;
            }
        }

        const promptSocratic = `
Bạn là Trợ Lý Lý Thuyết của ứng dụng Math Hero.
Nhiệm vụ DUY NHẤT của bạn: GỢI Ý LÝ THUYẾT VÀ CÔNG THỨC LIÊN QUAN ĐẺN BÀI - KHÔNG LIÊN QUAN GÌ ĐẺN GIẢI HAY ĐÁP ÁN.

QUY TẮc SẮt ĐÁ BẠT BUỘC PHẢI TUÂN THỦ:
1. TUYỆT ĐỐI KHÔNG CHỈ ĐỊNH ĐÁP ÁN (Không được viết “Chọn A”, “Đáp án là B”, “Kết quả là...”).
2. TUYỆT ĐỐI KHÔNG HƯỞNG DẪN CÁCH GIẢI hay bước tính toán cụ thể.
3. CHỈ ĐƯỢC làm 2 việc: (a) Nhắc lại công thức/định lý toán học cần dùng, (b) Ghi nhớ lưu ý sai lầm hay gặp.

ĐỀ BÀI:
${cauHoiText}

CÁC PHƯƠNG ÁN LỰA CHỌ:
${cacDapAn.map((ans, idx) => `${String.fromCharCode(65 + idx)}. ${ans}`).join('\n')}

${dapAnDungStr ? `ĐÁP ÁN ĐÚNG CỦA GIÁO VIÊN (DÙNG ĐỂ XÁC ĐỊNH CHỦ ĐỀ LÝ THUYẾT, TUYỆT ĐỐI KHÔNG TIẼT LỘ): ${dapAnDungStr}` : ''}
${giaiThichSanCo ? `NỘI DUNG LỜI GIẢI GIÁO VIÊN (CHỈ DÙNG ĐỂ XÁC ĐỊNH KIẺN THỨC CẦN, KHÔNG SAO CHÉP LỜI GIẢI): ${giaiThichSanCo}` : ''}

Hãy viết phản hồi trong 2 mục đơn giản dạng JSON thuần túy (không bọc markdown \`\`\`json):
{
  "kienThucChinh": "Nêu tên công thức/định lý/tính chất toán học cần áp dụng (chỉ nêu tên + nội dung công thức, KHÔNG nêu cách tính hay kết quả)",
  "luuY": "Một lưu ý/sào bẫy toán học phổ biến liên quan (sai dấu, quên điều kiện xác định, nhầm thứ tự phép tính...)"
}
`;

        const danhSachModel = ['gemini-2.0-flash', 'gemini-1.5-flash'];
        for (let model of danhSachModel) {
            try {
                const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        contents: [{ parts: [{ text: promptSocratic }] }],
                        generationConfig: {
                            temperature: 0.3,
                            maxOutputTokens: 600
                        }
                    })
                });

                if (!res.ok) continue;

                const data = await res.json();
                let rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text || '';
                rawText = rawText.replace(/```json/g, '').replace(/```/g, '').trim();

                const parsed = JSON.parse(rawText);
                let kienThuc = parsed.kienThucChinh || '';
                let luuY = parsed.luuY || parsed.canhBaoLoi || '';

                // Lọc bảo vệ: Nếu Gemini vô tình nhắc đến đáp án đúng, khử bỏ ngay lập tức
                if (dapAnDungText && dapAnDungText.length >= 2) {
                    let cleanAns = dapAnDungText.replace(/^[A-D][\.\:\s]+/, '').trim();
                    if (cleanAns.length >= 2) {
                        let reAns = new RegExp(cleanAns.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'gi');
                        kienThuc = kienThuc.replace(reAns, '[kiến thức ẩn]');
                        luuY = luuY.replace(reAns, '[kiến thức ẩn]');
                    }
                }

                return {
                    nguon: 'gemini_socratic',
                    model: model,
                    goiy: [
                        { tieuDe: '📚 Kiến thức cần nắm', noiDung: kienThuc },
                        { tieuDe: '⚠️ Ghi nhớ quan trọng', noiDung: luuY }
                    ],
                    loiKhuyếnKỷLuật: parsed.dongVien || 'Hãy tra Cẩm Nang Lý Thuyết để ôn lại công thức, rồi tự mình tính toán để tìm ra đáp án nhé!'
                };
            } catch (err) {
                console.warn(`[Hero AI Socratic] Lỗi khi gọi model ${model}:`, err);
            }
        }

        // Nếu tất cả các model đều gặp trục trặc: fallback về offline thông minh
        return taoGoiYOfflineSocratic(cauHoiText, cacDapAn, giaiThichSanCo, cauHoiObj);
    }

    // ====================================================================
    // 6. GẮN CÁC HÀM TOÀN CỤC CHO HỆ THỐNG
    // ====================================================================
    window.DANH_SACH_LINH_THU = DANH_SACH_LINH_THU;
    window.MOC_TIEN_HOA_PET = MOC_TIEN_HOA;
    window.layThongTinPetHocSinh = layThongTinPetHocSinh;
    window.doiLoaiLinhThu = doiLoaiLinhThu;
    window.phatAmThanhPet = phatAmThanhPet;
    window.goiTroLyAiGoiY = goiTroLyAiGoiY;

    console.log('[Hero AI Companion] Đã nạp thành công các dịch vụ Linh Thú & AI Socratic!');

})(window);
