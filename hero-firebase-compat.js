// ========================================================================
// HERO FIREBASE COMPAT - Math Hero Cloud Sync Layer (Vanilla JS)
// Hoạt động 100% không phụ thuộc ES module, tương thích cả giao thức
// file:/// (khi click mở trực tiếp từ máy tính) lẫn http/https (Live Server/Hosting).
// ========================================================================

(function(window) {
  'use strict';

  const firebaseConfig = {
    apiKey: "AIzaSyCdYnSx482i836955Rdwtw3fCpcyEntTMg",
    authDomain: "toan9-myquy.firebaseapp.com",
    projectId: "toan9-myquy",
    storageBucket: "toan9-myquy.firebasestorage.app",
    messagingSenderId: "840754584008",
    appId: "1:840754584008:web:5ef54ca182a9358fcbc8fd"
  };

  const CAC_KEY_TOAN_CUC = [
    'math_hero_users_v2',
    'danh_sach_hs_da_xoa',
    'danh_sach_bai_hoc_ly_thuyet',
    'danh_sach_bai_hoc_ly_thuyet_da_xoa',
    'danh_sach_bo_de_trac_nghiem',
    'ngan_hang_de_trac_nghiem',
    'ngan_hang_de_trac_nghiem_da_xoa',
    'ngan_hang_de_boss',
    'ngan_hang_de_boss_da_xoa',
    'ngan_hang_de_vuot_ai',
    'ngan_hang_de_vuot_ai_da_xoa',
    'math_hero_marketplace',
    'math_hero_shop_items',
    'nhat_ky_dang_nhap',
    'so_luot_lam_bai_toi_da',
    'so_luot_boss_toi_da',
    'so_luot_vong_quay_toi_da',
    'so_luot_thach_dau_toi_da',
    'so_luot_vuot_ai_toi_da',
    'danh_sach_yeu_cau_quen_pass',
    'danh_sach_yeu_cau_quen_pass_da_xoa',
    'danh_sach_gop_y',
    'thong_tin_giao_vien_lien_he',
    'khoa_dang_ky_he_thong'
  ];

  const CAC_KEY_MANG_ID = [
    'ngan_hang_de_trac_nghiem',
    'danh_sach_bo_de_trac_nghiem',
    'danh_sach_bai_hoc_ly_thuyet',
    'ngan_hang_de_boss',
    'ngan_hang_de_vuot_ai',
    'danh_sach_yeu_cau_quen_pass'
  ];

  const CAC_TIEN_TO_DU_LIEU_HOC_SINH = [
    'exp_', 'coin_', 'da_quay_', 'avatar_', 'equipped_avatar_',
    'danh_hieu_chinh_', 'danh_hieu_da_mo_', 'khung_avatar_',
    'equipped_border_', 'ruong_do_', 'luot_lam_bai_', 'luot_boss_',
    'luot_vong_quay_', 'luot_thach_dau_', 'luot_vuot_ai_',
    'tien_trinh_vuot_ai_', 'ai_hien_tai_', 'da_nop_tu_luan_',
    'math_hero_pet_', 'hero_discipline_pet_',
    'danh_hieu_active_', 'khung_avatar_active_',
    'math_hero_current_avatar_', 'math_hero_unlocked_avatars_',
    'hero_streak_count_', 'hero_streak_history_', 'hero_streak_last_date_',
    'hero_exp_doc_ly_thuyet_ngay_', 'hero_nhac_nho_ly_thuyet_ngay_',
    'da_doc_phan_hoi_', 'moc_cap_nhat_hs_',
    'hero_x2exp_stack_', 'hero_5050_stack_', 'hero_rutgon_stack_', 'hero_cohoi2_stack_',
    'hero_x2exp_', 'hero_5050_', 'hero_rutgon_', 'hero_cohoi2_',
    'va_khienmiensai_', 'va_khoidau_', 'va_mientruluot_', 'va_nhandoi_', 'va_tangthoigian_',
    'tuan1_ai1_clear_', 'tuan1_ai2_clear_', 'tuan1_ai3_clear_'
  ];

  const CAC_TIEN_TO_CAU_HINH_AI = [
    'ai_config_so_cau_', 'ai_config_thoi_gian_', 'ai_config_diem_qua_ai_',
    'ai_config_exp_thuong_', 'ai_config_coin_thuong_', 'ai_config_noi_dung_goi_y_'
  ];


  // ============================================================
  // [GIẢM ĐỌC FIRESTORE] Mỗi lần kéo cấu hình toàn cục tốn ~25 lượt đọc Cloud.
  // Gói miễn phí chỉ có 50.000 lượt đọc/ngày nên không kéo dày trên cùng một máy:
  // sau 1 lần kéo thành công, các lần kế trong 5 phút sẽ dùng dữ liệu đã có trong máy.
  // - Trang admin luôn kéo mới.  - Gọi taiCauHinhToanCuc({ force: true }) để bắt buộc kéo.
  // ============================================================
  var HERO_KEY_LAN_KEO = 'hero_lan_keo_cau_hinh_cuoi';
  var HERO_GIAN_CACH_KEO_MS = 5 * 60 * 1000;
  function heroNenBoQuaKeoToanCuc(tuyChon) {
    try {
      if (tuyChon && tuyChon.force) return false;
      if (/admin/i.test(String(location.pathname || ''))) return false;
      var lanCuoi = parseInt(localStorage.getItem(HERO_KEY_LAN_KEO), 10) || 0;
      if (lanCuoi && (Date.now() - lanCuoi) >= 0 && (Date.now() - lanCuoi) < HERO_GIAN_CACH_KEO_MS) return true;
      localStorage.setItem(HERO_KEY_LAN_KEO, String(Date.now()));
      return false;
    } catch (e) { return false; }
  }
  function heroHuyDauMocKeoToanCuc() {
    try { localStorage.removeItem(HERO_KEY_LAN_KEO); } catch (e) {}
  }

  function laySafeDocId(ten) {
    return encodeURIComponent(String(ten || '').trim());
  }

  let db = null;
  function getDb() {
    if (db) return db;
    if (window.firebase && typeof window.firebase.initializeApp === 'function') {
      try {
        if (!window.firebase.apps || window.firebase.apps.length === 0) {
          window.firebase.initializeApp(firebaseConfig);
        }
        db = window.firebase.firestore();
        return db;
      } catch (e) {
        console.warn("[Hero Firebase Compat] Lỗi khởi tạo Firestore:", e);
      }
    }
    return null;
  }

  // Helper gộp mảng thông minh tôn trọng danh sách đã xóa (tombstones)
  function gopMangTheoId(localRaw, cloudRaw, key) {
    let localArr = [];
    let cloudArr = [];
    try { localArr = JSON.parse(localRaw); } catch(e) {}
    try { cloudArr = JSON.parse(cloudRaw); } catch(e) {}
    if (!Array.isArray(localArr)) localArr = [];
    if (!Array.isArray(cloudArr)) cloudArr = [];

    // Xóa bỏ cờ toàn cục gây lỗi chặn bài học và thanh lọc bài học mẫu giả lập cũ
    if (key === 'danh_sach_bai_hoc_ly_thuyet') {
      localStorage.removeItem('hero_da_xoa_ly_thuyet');
      const isLegacyMockId = id => typeof id === 'string' && /^lt_k[6-9]_\d+$/i.test(id);
      localArr = localArr.filter(x => x && x.id && !isLegacyMockId(x.id));
      cloudArr = cloudArr.filter(x => x && x.id && !isLegacyMockId(x.id));
    }

    let dsDaXoa = [];
    try {
      // Đọc đúng tombstone key cho ly_thuyet và yeu_cau_quen_pass
      const rawDaXoa = (key === 'danh_sach_bai_hoc_ly_thuyet')
        ? localStorage.getItem('danh_sach_bai_hoc_ly_thuyet_da_xoa')
        : (localStorage.getItem((key || '') + '_da_xoa') || localStorage.getItem('hero_da_xoa_' + key));
      if (rawDaXoa) dsDaXoa = JSON.parse(rawDaXoa);
    } catch(e) {}
    const daXoaSet = new Set(Array.isArray(dsDaXoa) ? dsDaXoa : []);

    // Lọc bỏ triệt để các mục đã bị xóa theo Tombstone (cả ở Local lẫn Cloud)
    let daXoaTrenCloud = false;
    if (daXoaSet.size > 0) {
      const truocLocal = localArr.length;
      const truocCloud = cloudArr.length;
      localArr = localArr.filter(x => x && x.id && !daXoaSet.has(x.id));
      cloudArr = cloudArr.filter(x => x && x.id && !daXoaSet.has(x.id));
      if (cloudArr.length !== truocCloud || localArr.length !== truocLocal) {
        daXoaTrenCloud = true;
      }
    }

    // Nếu cả Cloud và Local đều rỗng
    if (cloudArr.length === 0 && localArr.length === 0) {
      return { merged: [], hasNewLocal: false };
    }

    // Nếu Cloud đã được đặt về rỗng '[]' (người quản trị đã xóa sạch trên Cloud)
    if (cloudRaw && cloudRaw.trim() === '[]') {
      return { merged: [], hasNewLocal: false };
    }

    // Nếu máy cục bộ vừa chủ động xóa sạch về rỗng '[]' (người quản trị reset máy)
    if (localRaw && localRaw.trim() === '[]' && localArr.length === 0) {
      return { merged: [], hasNewLocal: true };
    }

    if (cloudArr.length === 0) {
      return { merged: localArr, hasNewLocal: localArr.length > 0 || daXoaTrenCloud };
    }
    // Kể cả khi localArr rỗng, tombstone đã lọc cloudArr ở trên → an toàn tuyệt đối
    if (localArr.length === 0) {
      return { merged: cloudArr, hasNewLocal: daXoaTrenCloud };
    }

    const layMoc = (item) => (item && typeof item.capNhatLuc === 'number') ? item.capNhatLuc : 0;
    const cloudMap = new Map(cloudArr.filter(x => x && x.id).map(x => [x.id, x]));
    let hasNewLocal = daXoaTrenCloud;
    const merged = [];
    const daXuLy = new Set();

    localArr.forEach(item => {
      if (!item || !item.id) return;
      daXuLy.add(item.id);
      const cloudItem = cloudMap.get(item.id);

      if (!cloudItem) {
        merged.push(item);
        hasNewLocal = true;
      } else if (layMoc(item) > layMoc(cloudItem)) {
        merged.push(item);
        hasNewLocal = true;
      } else if (layMoc(cloudItem) > layMoc(item)) {
        merged.push(cloudItem);
      } else {
        // Cùng mốc thời gian hoặc không có mốc: giữ bản local để bảo toàn trạng thái mới tại máy
        merged.push(item);
        if (item.hidden !== cloudItem.hidden) {
          hasNewLocal = true;
        }
      }
    });

    cloudArr.forEach(item => {
      if (item && item.id && !daXuLy.has(item.id)) {
        merged.push(item);
      }
    });

    return { merged, hasNewLocal };
  }

  function gopTaiKhoanHocSinh(localRaw, cloudRaw) {
    let localUsers = {};
    let cloudUsers = {};
    try { localUsers = JSON.parse(localRaw); } catch(e) {}
    try { cloudUsers = JSON.parse(cloudRaw); } catch(e) {}
    if (typeof localUsers !== 'object' || localUsers === null) localUsers = {};
    if (typeof cloudUsers !== 'object' || cloudUsers === null) cloudUsers = {};

    // Lọc bỏ các học sinh nằm trong "bia mộ" (danh_sach_hs_da_xoa)
    // NGUYÊN TẮC: Khi Thầy đã đưa học sinh vào danh sách xóa, học sinh đó PHẢI BỊ XÓA DỨT ĐIỂM!
    let dsDaXoa = [];
    try {
      const rawDaXoa = localStorage.getItem('danh_sach_hs_da_xoa');
      if (rawDaXoa) dsDaXoa = JSON.parse(rawDaXoa);
    } catch(e) {}

    if (Array.isArray(dsDaXoa) && dsDaXoa.length > 0) {
      // NGUYÊN TẮC BẢO TOÀN XÓA: Khi học sinh nằm trong bia mộ, PHẢI XÓA DỨT ĐIỂM ở cả Local và Cloud
      const setDaXoa = new Set(dsDaXoa.map(t => String(t || '').replace(/[\u00A0\u200B\uFEFF]/g, ' ').trim().replace(/\s+/g, ' ').normalize('NFC').toLowerCase()));
      Object.keys(localUsers).forEach(ten => {
        const norm = String(ten || '').replace(/[\u00A0\u200B\uFEFF]/g, ' ').trim().replace(/\s+/g, ' ').normalize('NFC').toLowerCase();
        if (setDaXoa.has(norm)) delete localUsers[ten];
      });
      Object.keys(cloudUsers).forEach(ten => {
        const norm = String(ten || '').replace(/[\u00A0\u200B\uFEFF]/g, ' ').trim().replace(/\s+/g, ' ').normalize('NFC').toLowerCase();
        if (setDaXoa.has(norm)) delete cloudUsers[ten];
      });
    }

    // Nếu cả 2 bên đều rỗng
    if (Object.keys(localUsers).length === 0 && Object.keys(cloudUsers).length === 0) {
      return { merged: {}, hasNewLocal: false };
    }

    // Cloud rỗng không được xóa tài khoản hợp lệ còn ở máy local.
    // Giữ local để đồng bộ lại lên Cloud ở bước tiếp theo.
    if (cloudRaw && cloudRaw.trim() === '{}') {
      if (Object.keys(localUsers).length > 0) {
        return { merged: localUsers, hasNewLocal: true };
      }
      return { merged: {}, hasNewLocal: false };
    }
    // Nếu máy cục bộ vừa chủ động xóa sạch về rỗng '{}'
    if (localRaw && localRaw.trim() === '{}' && Object.keys(localUsers).length === 0) {
      return { merged: {}, hasNewLocal: true };
    }

    // Gộp thông minh: bảo toàn toàn bộ tài khoản cả Cloud lẫn Local, giữ mật khẩu mới nhất
    const merged = Object.assign({}, cloudUsers);
    let hasNewLocal = false;
    Object.keys(localUsers).forEach(k => {
      if (!merged[k]) {
        merged[k] = localUsers[k];
        hasNewLocal = true;
      } else {
        const loc = localUsers[k];
        const cld = merged[k];
        if (loc && typeof loc === 'object') {
          merged[k] = Object.assign({}, cld, loc);
          if (loc.pass && loc.pass !== cld.pass) hasNewLocal = true;
        } else if (loc !== cld) {
          merged[k] = loc;
          hasNewLocal = true;
        }
      }
    });

    // KHÓA DANH SÁCH: Chỉ giữ đúng học sinh thuộc danh sách chuẩn, tuyệt đối không nạp thêm học sinh ngoài danh sách
    const dsChuanObj = (typeof window !== 'undefined' && window.HERO_DANH_SACH_CHUAN_USERS) ? window.HERO_DANH_SACH_CHUAN_USERS : null;
    if (dsChuanObj && typeof dsChuanObj === 'object' && Object.keys(dsChuanObj).length > 0) {
      const setChuan = new Set(Object.keys(dsChuanObj).map(n => n.trim().toLowerCase()));
      Object.keys(merged).forEach(k => {
        if (!setChuan.has(k.trim().toLowerCase())) {
          delete merged[k];
          hasNewLocal = true; // Đánh dấu để loại bỏ triệt để khỏi Cloud
        }
      });
      // Đảm bảo đủ các học sinh chuẩn
      Object.keys(dsChuanObj).forEach(k => {
        if (!merged[k]) {
          merged[k] = dsChuanObj[k];
        }
      });
    }

    return { merged, hasNewLocal };
  }


  // ============================================================
  // [MÃ ĐỢT DỮ LIỆU]
  // Thầy đổi "mã đợt" MỘT LẦN trong admin (lưu ở Cloud: mathhero_global/ma_dot_du_lieu).
  // Mỗi máy nhớ mã đợt đã áp dụng (localStorage: hero_ma_dot_du_lieu). Khi mở trang mà mã trên
  // Cloud KHÁC mã trong máy → máy tự xóa sạch tài khoản + điểm cũ rồi kéo dữ liệu mới từ Cloud.
  //   - Cloud chưa có mã              → không làm gì (tính năng đang tắt).
  //   - Không đọc được Cloud / timeout → KHÔNG xóa gì, lần mở trang sau kiểm tra lại.
  //   - Chỉ dọn: math_hero_users_v2, danh_sach_hs_da_xoa, các key theo học sinh
  //     (CAC_TIEN_TO_DU_LIEU_HOC_SINH), phiên đăng nhập, bản sao tài khoản.
  //     KHÔNG đụng ngân hàng đề, shop, cấu hình giáo viên...
  //   - Không đổi cấu trúc math_hero_users_v2: chỉ XÓA HẲN key, KHÔNG ghi '{}' (vì gopTaiKhoanHocSinh
  //     coi '{}' ở máy là lệnh "xóa sạch" và sẽ đẩy '{}' đè lên Cloud).
  //   - Trạng thái dùng chung với firebase-sync.js qua window.__heroMaDot (chỉ đọc Cloud 1 lần/trang).
  // ============================================================
  var HERO_KEY_MA_DOT = 'hero_ma_dot_du_lieu';
  var HERO_DOC_MA_DOT = 'ma_dot_du_lieu';
  var HERO_MA_DOT_TIMEOUT_MS = 6000;
  var HERO_KEY_HANG_DOI_SYNC = 'hero_pending_sync_queue';
  var HERO_KEY_CAN_DON_TOAN_CUC = ['math_hero_users_v2', 'danh_sach_hs_da_xoa'];
  var HERO_KEY_PHIEN_HOC_SINH = ['hoc_school_student_name', 'hoc_school_student_class', 'hoc_school_student_classroom'];
  var HERO_MA_DOT = window.__heroMaDot = window.__heroMaDot || { promise: null, xong: false, daDon: false };

  // Xóa key khỏi IndexedDB (HeroMathDB/HeroStore). DB chưa có thì bỏ qua, KHÔNG tạo DB rỗng.
  function heroXoaKeyTrongIDB(cacKey) {
    return new Promise(function(resolve) {
      var xong = false;
      function ketThuc() { if (!xong) { xong = true; resolve(); } }
      try {
        if (!window.indexedDB) { ketThuc(); return; }
        var req = indexedDB.open('HeroMathDB', 1);
        req.onupgradeneeded = function(e) { try { e.target.transaction.abort(); } catch (x) {} };
        req.onerror = ketThuc;
        req.onblocked = ketThuc;
        req.onsuccess = function(e) {
          var idb = e.target.result;
          try {
            if (!idb.objectStoreNames.contains('HeroStore')) { idb.close(); ketThuc(); return; }
            var tx = idb.transaction(['HeroStore'], 'readwrite');
            var store = tx.objectStore('HeroStore');
            cacKey.forEach(function(k) { store.delete(k); });
            tx.oncomplete = tx.onerror = tx.onabort = function() { try { idb.close(); } catch (x) {} ketThuc(); };
          } catch (x) { try { idb.close(); } catch (y) {} ketThuc(); }
        };
        setTimeout(ketThuc, 3000);
      } catch (e) { ketThuc(); }
    });
  }

  // Xóa 1 key toàn cục cho THẬT: bộ nhớ đệm + localStorage thật.
  // (Storage.prototype.removeItem bị patch ở firebase-sync.js không xóa localStorage thật của key toàn cục.)
  function heroXoaKeyToanCucTaiMay(key) {
    try { if (window.heroMemoryStorage) delete window.heroMemoryStorage[key]; } catch (e) {}
    try {
      if (typeof window.__originalRemoveItem === 'function') window.__originalRemoveItem(key);
      else localStorage.removeItem(key);
    } catch (e) {}
  }

  // Dọn tài khoản + điểm cũ trong máy. Trả về true nếu máy đang có học sinh đăng nhập.
  async function heroDonDuLieuHocSinhCu() {
    var coPhien = false;
    try { coPhien = !!(localStorage.getItem('hoc_school_student_name') || sessionStorage.getItem('hoc_school_student_name')); } catch (e) {}

    // 1) Mọi key điểm/vật phẩm/lượt chơi... theo học sinh (cùng danh sách với dayDuLieuLenMay)
    var cacKey = [];
    try {
      for (var i = 0; i < localStorage.length; i++) { var k = localStorage.key(i); if (k) cacKey.push(k); }
    } catch (e) {}
    cacKey.forEach(function(k) {
      if (CAC_TIEN_TO_DU_LIEU_HOC_SINH.some(function(tt) { return k.indexOf(tt) === 0; })) {
        try { localStorage.removeItem(k); } catch (e) {}
      }
    });

    // 2) Phiên đăng nhập + bản sao tài khoản (nếu giữ lại, index.html sẽ tự khôi phục tài khoản cũ)
    HERO_KEY_PHIEN_HOC_SINH.forEach(function(k) {
      try { localStorage.removeItem(k); } catch (e) {}
      try { sessionStorage.removeItem(k); } catch (e) {}
    });
    try { localStorage.removeItem('hero_session_token'); } catch (e) {}
    try { localStorage.removeItem('hero_my_account_backup'); } catch (e) {}

    // 3) Hàng đợi retry: bỏ các mục định đẩy tài khoản/bia mộ cũ lên Cloud (giữ mục khác)
    try {
      var q = JSON.parse(localStorage.getItem(HERO_KEY_HANG_DOI_SYNC) || '[]');
      if (Array.isArray(q) && q.length) {
        var conLai = q.filter(function(x) { return x && HERO_KEY_CAN_DON_TOAN_CUC.indexOf(x.key) === -1; });
        if (conLai.length) localStorage.setItem(HERO_KEY_HANG_DOI_SYNC, JSON.stringify(conLai));
        else localStorage.removeItem(HERO_KEY_HANG_DOI_SYNC);
      }
    } catch (e) {}

    // 4) Bỏ mốc "vừa kéo Cloud" để lần taiCauHinhToanCuc kế tiếp chắc chắn kéo mới
    heroHuyDauMocKeoToanCuc();

    // 5) Tài khoản + bia mộ: xóa HẲN (bộ nhớ đệm, localStorage thật, IndexedDB)
    HERO_KEY_CAN_DON_TOAN_CUC.forEach(function(k) { heroXoaKeyToanCucTaiMay(k); });
    await heroXoaKeyTrongIDB(HERO_KEY_CAN_DON_TOAN_CUC);
    if (window.heroMemoryStorage && !window.heroStorageReady) {
      // firebase-sync.js đang nạp IndexedDB vào bộ nhớ đệm → chờ xong rồi xóa lại cho sạch
      await new Promise(function(res) {
        var da = false;
        function ok() { if (!da) { da = true; res(); } }
        window.addEventListener('heroStorageReady', ok, { once: true });
        setTimeout(ok, 3000);
      });
    }
    HERO_KEY_CAN_DON_TOAN_CUC.forEach(function(k) { heroXoaKeyToanCucTaiMay(k); });
    return coPhien;
  }

  // Học sinh đang đăng nhập mà máy vừa bị dọn → đưa về trang đăng nhập (auth.html tự hiện thông báo)
  function heroChuyenVeDangNhapNeuCan(kq) {
    try {
      var p = String(location.pathname || '');
      if (!kq.coPhien || /(^|\/)auth(\.html)?$/i.test(p) || /admin/i.test(p)) return;
      try {
        localStorage.removeItem('hoc_school_student_name');
        localStorage.removeItem('hoc_school_student_class');
        localStorage.removeItem('hoc_school_student_classroom');
        localStorage.removeItem('hero_session_token');
        localStorage.removeItem('hero_my_account_backup');
        sessionStorage.clear();
      } catch (e) {}
      location.replace('auth.html?maDot=1');
    } catch (e) {}
  }

  async function layMaDotTrenCloud(firestore) {
    var snap = await firestore.collection("mathhero_global").doc(HERO_DOC_MA_DOT).get();
    if (!snap.exists) return '';
    var v = (snap.data() || {}).value;
    return (v === undefined || v === null) ? '' : String(v).trim();
  }

  // Kiểm tra mã đợt (chỉ chạy 1 lần/trang, các lần gọi sau dùng lại kết quả).
  // Trả về { daDon, maMoi, coPhien }.
  function heroKiemTraMaDot() {
    if (HERO_MA_DOT.promise) return HERO_MA_DOT.promise;
    var firestore = getDb();
    if (!firestore) return Promise.resolve({ daDon: false, maMoi: null, coPhien: false });
    HERO_MA_DOT.promise = (async function() {
      var ketQua = { daDon: false, maMoi: null, coPhien: false };
      try {
        var maCloud = await Promise.race([
          layMaDotTrenCloud(firestore),
          new Promise(function(_, rej) { setTimeout(function() { rej(new Error('timeout')); }, HERO_MA_DOT_TIMEOUT_MS); })
        ]);
        var maMay = localStorage.getItem(HERO_KEY_MA_DOT) || '';
        if (maCloud && maCloud !== maMay) {
          var vuaDangNhap = false;
          try {
            var loginTs = parseInt(localStorage.getItem('hero_login_timestamp') || '0', 10);
            if (loginTs > 0 && (Date.now() - loginTs < 5 * 60 * 1000)) {
              vuaDangNhap = true;
            }
          } catch(e) {}

          if (vuaDangNhap) {
            // Học sinh vừa đăng nhập đợt mới thành công, bảo toàn phiên và cập nhật mã đợt
            localStorage.setItem(HERO_KEY_MA_DOT, maCloud);
            ketQua = { daDon: false, maMoi: maCloud, coPhien: true };
          } else {
            var coPhien = await heroDonDuLieuHocSinhCu();
            localStorage.setItem(HERO_KEY_MA_DOT, maCloud); // ghi mã SAU khi dọn xong (đóng trang giữa chừng → lần sau dọn lại)
            HERO_MA_DOT.daDon = true;
            ketQua = { daDon: true, maMoi: maCloud, coPhien: coPhien };
            console.log('[Hero Firebase Compat] Mã đợt dữ liệu đổi (' + (maMay || 'chưa có') + ' → ' + maCloud + '): đã xóa tài khoản & điểm cũ trong máy.');
            try { window.dispatchEvent(new CustomEvent('heroMaDotDoi', { detail: ketQua })); } catch (e) {}
            heroChuyenVeDangNhapNeuCan(ketQua);
          }
        }
      } catch (loi) {
        console.warn('[Hero Firebase Compat] Không kiểm tra được mã đợt dữ liệu (bỏ qua, không xóa gì):', loi && loi.message);
      } finally {
        HERO_MA_DOT.xong = true;
      }
      return ketQua;
    })();
    return HERO_MA_DOT.promise;
  }

  // Dùng cho các lệnh ĐẨY lên Cloud: chờ kiểm tra mã đợt xong.
  // Trả về true nếu lệnh này xếp hàng TRƯỚC khi máy bị dọn → dữ liệu nó định đẩy đã cũ → nên bỏ.
  async function heroChoMaDot() {
    var xepHangTruoc = !HERO_MA_DOT.xong;
    await heroKiemTraMaDot();
    return xepHangTruoc && HERO_MA_DOT.daDon;
  }

  // API Đồng Bộ
  const CompatSync = {
    isReady: function() {
      return !!getDb();
    },

    taiDuLieuTuMay: async function(tenHocSinh) {
      const firestore = getDb();
      if (!firestore || !tenHocSinh) return;
      await heroKiemTraMaDot(); // [Mã đợt] dọn máy cũ xong rồi mới kéo điểm về
      try {
        const snap = await firestore.collection("mathhero_students").doc(laySafeDocId(tenHocSinh)).get();
        if (snap.exists) {
          const duLieu = snap.data() || {};
          Object.keys(duLieu).forEach(key => {
            if (key.startsWith('_')) return;
            localStorage.setItem(key, duLieu[key]);
          });
        }
      } catch (loi) {
        console.warn("[Hero Firebase Compat] Lỗi tải dữ liệu học sinh:", loi);
      }
    },

    dayDuLieuLenMay: async function(tenHocSinh, hoSoTrucTiep) {
      const firestore = getDb();
      if (!firestore || !tenHocSinh) return false;
      if (await heroChoMaDot()) return false; // [Mã đợt] máy vừa bị dọn → không đẩy điểm cũ/rỗng lên Cloud
      try {
        const goiDuLieu = {};
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          if (!key) continue;
          const thuocVe = CAC_TIEN_TO_DU_LIEU_HOC_SINH.some(tt => key === tt + tenHocSinh);
          if (thuocVe) {
            goiDuLieu[key] = localStorage.getItem(key);
          }
        }
        let hoSo = hoSoTrucTiep || null;
        try {
          if (!hoSo) {
            const danhSach = JSON.parse(localStorage.getItem('math_hero_users_v2') || '{}');
            hoSo = danhSach && danhSach[tenHocSinh];
          }
        } catch (e) {}
        goiDuLieu['_lop'] = (hoSo && typeof hoSo === 'object' && hoSo.class)
          || sessionStorage.getItem('hoc_school_student_class') || '';
        goiDuLieu['_lopCuThe'] = (hoSo && typeof hoSo === 'object' && hoSo.classroom)
          || sessionStorage.getItem('hoc_school_student_classroom') || '';
        goiDuLieu['_class'] = goiDuLieu['_lop'];
        goiDuLieu['_classroom'] = goiDuLieu['_lopCuThe'];
        goiDuLieu['_capNhatLanCuoi'] = new Date().toISOString();

        await firestore.collection("mathhero_students").doc(laySafeDocId(tenHocSinh)).set(goiDuLieu, { merge: true });
        console.log("[Hero Firebase Compat] Đã đẩy dữ liệu học sinh lên Cloud:", tenHocSinh);
        return true;
      } catch (loi) {
        console.warn("[Hero Firebase Compat] Lỗi đẩy dữ liệu học sinh:", loi);
        return false;
      }
    },

    taiToanBoHocSinhTuMay: async function() {
      const firestore = getDb();
      if (!firestore) return [];
      try {
        const snapAll = await firestore.collection("mathhero_students").get();
        const ketQua = [];
        snapAll.forEach(docSnap => {
          ketQua.push({ id: decodeURIComponent(docSnap.id), data: docSnap.data() });
        });
        return ketQua;
      } catch (loi) {
        console.warn("[Hero Firebase Compat] Lỗi tải toàn bộ học sinh:", loi);
        return [];
      }
    },

    xoaHocSinhTrenMay: async function(tenHocSinh) {
      const firestore = getDb();
      if (!firestore || !tenHocSinh) return;
      try {
        await firestore.collection("mathhero_students").doc(laySafeDocId(tenHocSinh)).delete();
        console.log("[Hero Firebase Compat] Đã xóa học sinh trên Cloud:", tenHocSinh);
      } catch (loi) {
        console.warn("[Hero Firebase Compat] Lỗi xóa học sinh:", loi);
      }
    },

    // XÓA SẠCH 100% TOÀN BỘ HỌC SINH TRÊN FIRESTORE CLOUD (BATCH DELETE TRIỆT ĐỂ)
    xoaSachToanBoHocSinhTrenCloud: async function() {
      const firestore = getDb();
      if (!firestore) return { success: false, count: 0, error: 'Firebase chưa kết nối' };
      try {
        console.log("[Hero Firebase Compat] Đang quét và xóa sạch collection mathhero_students...");
        const snapAll = await firestore.collection("mathhero_students").get();
        const total = snapAll.size || (snapAll.docs ? snapAll.docs.length : 0);
        if (total === 0) {
          console.log("[Hero Firebase Compat] Collection mathhero_students đã rỗng sẵn.");
          return { success: true, count: 0 };
        }

        const batchSize = 400;
        let batch = firestore.batch ? firestore.batch() : null;
        let count = 0;
        let batchPromises = [];

        snapAll.forEach(docSnap => {
          if (batch) {
            batch.delete(docSnap.ref);
            count++;
            if (count >= batchSize) {
              batchPromises.push(batch.commit());
              batch = firestore.batch();
              count = 0;
            }
          } else {
            batchPromises.push(docSnap.ref.delete());
          }
        });

        if (batch && count > 0) {
          batchPromises.push(batch.commit());
        }

        await Promise.all(batchPromises);
        console.log(`[Hero Firebase Compat] Đã xóa sạch ${total} tài liệu học sinh trên Cloud thành công!`);
        return { success: true, count: total };
      } catch (loi) {
        console.error("[Hero Firebase Compat] Lỗi xóa sạch học sinh trên Cloud:", loi);
        try {
          const snapAll = await firestore.collection("mathhero_students").get();
          await Promise.all(snapAll.docs.map(d => d.ref.delete()));
          return { success: true, count: snapAll.size || snapAll.docs.length };
        } catch (loi2) {
          return { success: false, count: 0, error: loi2.message };
        }
      }
    },

    taiCauHinhToanCuc: async function(tuyChon) {
      const firestore = getDb();
      if (!firestore) return;
      await heroKiemTraMaDot(); // [Mã đợt] phải dọn máy cũ TRƯỚC khi gộp, kẻo gộp ngược tài khoản cũ lên Cloud
      if (heroNenBoQuaKeoToanCuc(tuyChon)) return;
      try {
        // GIAI ĐOẠN 1: Tải và gộp tất cả các Tombstone key (*_da_xoa) TRƯỚC TIÊN
        // Đảm bảo local đã có đầy đủ danh sách ID đã xóa trước khi gộp dữ liệu
        const tombstoneKeys = CAC_KEY_TOAN_CUC.filter(k => k.endsWith('_da_xoa'));
        await Promise.all(tombstoneKeys.map(async (key) => {
          try {
            const snap = await firestore.collection("mathhero_global").doc(key).get();
            const localVal = localStorage.getItem(key);
            let localArr2 = [];
            let cloudArr2 = [];
            try { localArr2 = JSON.parse(localVal || '[]'); } catch(e2) {}
            if (snap.exists && snap.data().value !== undefined) {
              try { cloudArr2 = JSON.parse(snap.data().value || '[]'); } catch(e2) {}
            }
            if (!Array.isArray(localArr2)) localArr2 = [];
            if (!Array.isArray(cloudArr2)) cloudArr2 = [];
            const unionSet = new Set([...localArr2, ...cloudArr2]);
            let mergedArr = Array.from(unionSet);

            // ĐỒNG BỘ BIA MỘ: Khi danh sách học sinh đã xóa được cập nhật, xóa dứt điểm khỏi math_hero_users_v2
            if (key === 'danh_sach_hs_da_xoa') {
              try {
                const uRaw = localStorage.getItem('math_hero_users_v2');
                if (uRaw) {
                  const uObj = JSON.parse(uRaw);
                  if (uObj && typeof uObj === 'object') {
                    const setDaXoa = new Set(mergedArr.map(n => String(n || '').replace(/[\u00A0\u200B\uFEFF]/g, ' ').trim().replace(/\s+/g, ' ').normalize('NFC').toLowerCase()));
                    let coXoa = false;
                    Object.keys(uObj).forEach(ten => {
                      const clean = String(ten || '').replace(/[\u00A0\u200B\uFEFF]/g, ' ').trim().replace(/\s+/g, ' ').normalize('NFC').toLowerCase();
                      if (setDaXoa.has(clean)) {
                        delete uObj[ten];
                        coXoa = true;
                      }
                    });
                    if (coXoa) {
                      localStorage.setItem('math_hero_users_v2', JSON.stringify(uObj));
                    }
                  }
                }
              } catch(e) {}
            }

            localStorage.setItem(key, JSON.stringify(mergedArr));
            if (mergedArr.length !== cloudArr2.length || localArr2.some(id => !cloudArr2.includes(id))) {
              CompatSync.dayCauHinhToanCuc(key).catch(function() {});
            }
          } catch(e) {}
        }));

        // GIAI ĐOẠN 2: Tải và gộp các key cấu hình và mảng dữ liệu
        const dataKeys = CAC_KEY_TOAN_CUC.filter(k => !k.endsWith('_da_xoa'));
        const promises = dataKeys.map(async (key) => {
          try {
            const snap = await firestore.collection("mathhero_global").doc(key).get();
            const localVal = localStorage.getItem(key);

            if (snap.exists && snap.data().value !== undefined) {
              const cloudVal = snap.data().value;
              if (CAC_KEY_MANG_ID.includes(key)) {
                const { merged, hasNewLocal } = gopMangTheoId(localVal, cloudVal, key);
                localStorage.setItem(key, JSON.stringify(merged));
                if (window.indexedDB) {
                  try {
                    const req = indexedDB.open('HeroMathDB', 1);
                    req.onsuccess = function(e) {
                      const db = e.target.result;
                      if (db && db.objectStoreNames && db.objectStoreNames.contains('HeroStore')) {
                        const tx = db.transaction(['HeroStore'], 'readwrite');
                        tx.objectStore('HeroStore').put(merged, key);
                      }
                    };
                  } catch(e) {}
                }
                if (hasNewLocal) {
                  CompatSync.dayCauHinhToanCuc(key).catch(function() {});
                }
              } else if (key === 'math_hero_users_v2') {
                const { merged, hasNewLocal } = gopTaiKhoanHocSinh(localVal, cloudVal);
                localStorage.setItem(key, JSON.stringify(merged));
                if (hasNewLocal) {
                  CompatSync.dayCauHinhToanCuc(key).catch(function() {});
                }
              } else {
                localStorage.setItem(key, cloudVal);
              }
            } else {
              if (localVal && localVal.trim() && localVal !== '[]' && localVal !== '{}') {
                CompatSync.dayCauHinhToanCuc(key).catch(function() {});
              }
            }
          } catch(e) {}
        });

        await Promise.all(promises);

        // Nạp ai_config_tat_ca
        try {
          const snapAi = await firestore.collection("mathhero_global").doc("ai_config_tat_ca").get();
          if (snapAi.exists) {
            const duLieuAi = snapAi.data() || {};
            Object.keys(duLieuAi).forEach(k => {
              if (k === '_capNhatLanCuoi') return;
              localStorage.setItem(k, duLieuAi[k]);
            });
          }
        } catch(e){}

        console.log("[Hero Firebase Compat] Đã đồng bộ cấu hình Cloud thành công.");
      } catch (loi) {
        heroHuyDauMocKeoToanCuc();
        console.warn("[Hero Firebase Compat] Lỗi tải cấu hình toàn cục:", loi);
      }
    },

    dayCauHinhToanCuc: async function(tenKey) {
      const firestore = getDb();
      if (!firestore || !tenKey) return false;
      // [Mã đợt] lệnh xếp hàng trước khi dọn máy mà đẩy tài khoản/bia mộ → bỏ (nếu không sẽ đẩy null lên Cloud)
      if ((await heroChoMaDot()) && HERO_KEY_CAN_DON_TOAN_CUC.indexOf(tenKey) !== -1) return false;
      try {
        const laKeyAiConfig = CAC_TIEN_TO_CAU_HINH_AI.some(tt => tenKey.startsWith(tt));
        if (laKeyAiConfig) {
          const payload = {};
          payload[tenKey] = localStorage.getItem(tenKey);
          payload['_capNhatLanCuoi'] = new Date().toISOString();
          await firestore.collection("mathhero_global").doc("ai_config_tat_ca").set(payload, { merge: true });
        } else {
          await firestore.collection("mathhero_global").doc(tenKey).set({
            value: localStorage.getItem(tenKey),
            _capNhatLanCuoi: new Date().toISOString()
          });
        }
        console.log("[Hero Firebase Compat] Đã đẩy cấu hình lên Cloud:", tenKey);
        return true;
      } catch (loi) {
        console.warn("[Hero Firebase Compat] Lỗi đẩy cấu hình lên Cloud:", tenKey, loi);
        return false;
      }
    },

    // ---- MÃ ĐỢT DỮ LIỆU ----
    kiemTraMaDotDuLieu: heroKiemTraMaDot,

    // Đọc mã đợt hiện tại trên Cloud ('' nếu chưa đặt)
    layMaDotDuLieu: async function() {
      const firestore = getDb();
      if (!firestore) throw new Error('Firebase chưa sẵn sàng');
      return await layMaDotTrenCloud(firestore);
    },

    // DÙNG Ở ADMIN: đặt mã đợt mới. Từ lúc này, mọi máy mở trang sẽ tự xóa tài khoản + điểm cũ.
    // Máy của Thầy được ghi nhận là đã ở đợt mới nên KHÔNG tự xóa chính mình.
    datMaDotDuLieu: async function(maMoi) {
      const firestore = getDb();
      if (!firestore) throw new Error('Firebase chưa sẵn sàng');
      maMoi = String(maMoi == null ? '' : maMoi).trim();
      if (!maMoi) throw new Error('Mã đợt dữ liệu không được để trống');
      await firestore.collection("mathhero_global").doc(HERO_DOC_MA_DOT).set({
        value: maMoi,
        _capNhatLanCuoi: new Date().toISOString()
      });
      localStorage.setItem(HERO_KEY_MA_DOT, maMoi);
      console.log('[Hero Firebase Compat] Đã đặt mã đợt dữ liệu:', maMoi);
      return maMoi;
    },

    // Ghi đè thẳng Firebase với giá trị tùy chỉnh (BYPASS localStorage & merge)
    // Dùng để xóa trắng dữ liệu cũ không phải do mình tạo
    forceGhiDeFirebase: async function(collection, docId, data) {
      const firestore = getDb();
      if (!firestore) throw new Error('Firebase chưa sẵn sàng');
      await firestore.collection(collection).doc(docId).set(data);
      console.log('[Hero Firebase Compat] Force ghi đè Firebase:', collection, '/', docId);
    },

    // Ghi nhật ký hoạt động (luyện tập, boss, vượt ải) tương thích hoàn toàn
    ghiNhatKyHoatDong: async function(tenHocSinh, loaiHoatDong, soCauDung, soCauSai, expNhan) {
      if (!tenHocSinh) return;
      const firestore = getDb();
      if (!firestore) return;
      try {
        const homNayISO = new Date().toISOString().slice(0, 10);
        const lop = sessionStorage.getItem('hoc_school_student_class') || localStorage.getItem('hoc_school_student_class') || '';
        const lopCuThe = sessionStorage.getItem('hoc_school_student_classroom') || localStorage.getItem('hoc_school_student_classroom') || '';
        const docId = laySafeDocId(tenHocSinh) + '_' + homNayISO;
        const inc = firebase.firestore.FieldValue.increment;

        const capNhat = {
          ten: tenHocSinh,
          lop,
          lopCuThe,
          ngay: homNayISO,
          soCauDung: inc(Math.max(0, soCauDung || 0)),
          soCauSai: inc(Math.max(0, soCauSai || 0)),
          expNhan: inc(Math.max(0, expNhan || 0)),
          soLuot: inc(1),
          _capNhatLanCuoi: new Date().toISOString()
        };
        if (loaiHoatDong) {
          capNhat['soLuot_' + loaiHoatDong] = inc(1);
        }

        await firestore.collection("mathhero_activity_log").doc(docId).set(capNhat, { merge: true });
        console.log("[Hero Firebase Compat] Đã ghi nhật ký hoạt động:", tenHocSinh, loaiHoatDong);
      } catch (loi) {
        console.warn("[Hero Firebase Compat] Lỗi khi ghi nhật ký hoạt động:", loi);
      }
    },

    taiNhatKyHoatDong: async function(tuNgayISO, denNgayISO) {
      const firestore = getDb();
      if (!firestore) return [];
      try {
        const snap = await firestore.collection("mathhero_activity_log")
          .where("ngay", ">=", tuNgayISO)
          .where("ngay", "<=", denNgayISO)
          .get();
        const ketQua = [];
        snap.forEach(docSnap => ketQua.push(docSnap.data()));
        return ketQua;
      } catch (loi) {
        console.warn("[Hero Firebase Compat] Lỗi khi tải nhật ký hoạt động:", loi);
        return [];
      }
    },

    taiBaiTuLuanTrongKhoang: async function(tuNgayISO, denNgayISO) {
      const firestore = getDb();
      if (!firestore) return [];
      try {
        const tuISOFull = tuNgayISO + 'T00:00:00.000Z';
        const denISOFull = denNgayISO + 'T23:59:59.999Z';
        const snap = await firestore.collection("bai_tap_tu_luan")
          .where("thoiGianNop", ">=", tuISOFull)
          .where("thoiGianNop", "<=", denISOFull)
          .get();
        const ketQua = [];
        snap.forEach(docSnap => ketQua.push(docSnap.data()));
        return ketQua;
      } catch (loi) {
        console.warn("[Hero Firebase Compat] Lỗi khi tải bài tập tự luận:", loi);
        return [];
      }
    }
  };

  // Gán vào biến toàn cục window
  window.HeroFirebaseCompat = CompatSync;
  // [Mã đợt] kiểm tra ngay khi trang nạp (các trang không gọi hàm sync nào vẫn được dọn)
  try { heroKiemTraMaDot().catch(function() {}); } catch (e) {}
  if (!window.FirebaseSync) {
    window.FirebaseSync = CompatSync;
    window.firebaseSyncSan = true;
  }

  // Tự động nạp mô-đun AI Studio nâng cao cho trang Quản Trị (admin.html)
  if (typeof document !== 'undefined') {
    const href = (window.location && window.location.href) ? window.location.href.toLowerCase() : '';
    const isTrangAdmin = href.includes('admin') || 
                         (typeof document.title === 'string' && document.title.toLowerCase().includes('quản trị')) ||
                         !!document.getElementById('khu-ai-studio');
    if (isTrangAdmin) {
      if (document.readyState === 'loading') {
        // Dùng document.write để script nạp ĐỒNG BỘ ngay trong <head>, đảm bảo toàn bộ hàm AI Studio sẵn sàng trước khi body tải xong
        document.write('<script id="hero-ai-studio-script" src="./hero-ai-studio.js"><\/script>');
      } else if (!document.getElementById('hero-ai-studio-script')) {
        const sc = document.createElement('script');
        sc.id = 'hero-ai-studio-script';
        sc.src = './hero-ai-studio.js';
        (document.head || document.documentElement).appendChild(sc);
      }
    }
  }
})(window);
