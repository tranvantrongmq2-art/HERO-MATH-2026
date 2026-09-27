// ========================================================================
// FIREBASE SYNC LAYER - MATH HERO (Mức 1: đồng bộ localStorage <-> Firestore)
// ------------------------------------------------------------------------
// File này KHÔNG thay thế localStorage. Mọi hàm game cũ (exp_, coin_,
// luot_lam_bai_, ruong_do_, ...) vẫn đọc/ghi localStorage như trước,
// không cần sửa logic game. File này làm 4 việc:
//
//   DỮ LIỆU THEO TỪNG HỌC SINH (exp, coin, lượt chơi, rương đồ...):
//   1) taiDuLieuTuMay(tenHocSinh)   -> kéo dữ liệu Firestore VỀ localStorage
//      (gọi lúc đăng nhập xong, TRƯỚC khi sang trang index.html)
//   2) dayDuLieuLenMay(tenHocSinh)  -> gom localStorage của học sinh đó,
//      ĐẨY LÊN Firestore (gọi sau khi cộng EXP/Xu, dùng vật phẩm, v.v.)
//
//   DỮ LIỆU TOÀN CỤC (ngân hàng đề, cấu hình giáo viên, shop, marketplace...):
//   3) taiCauHinhToanCuc()          -> kéo TẤT CẢ dữ liệu toàn cục về localStorage
//      (gọi ở đầu mỗi trang, TRƯỚC khi trang đọc localStorage để hiển thị/lọc đề)
//   4) dayCauHinhToanCuc(tenKey)    -> đẩy 1 key toàn cục cụ thể lên Firestore
//      (gọi ngay sau khi giáo viên lưu đề/cấu hình/shop ở admin.html, cua-hang.html)
// ========================================================================

// Config dự án Firebase mới: "toan9-myquy"
const firebaseConfig = {
  apiKey: "AIzaSyCdYnSx482i836955Rdwtw3fCpcyEntTMg",
  authDomain: "toan9-myquy.firebaseapp.com",
  projectId: "toan9-myquy",
  storageBucket: "toan9-myquy.firebasestorage.app",
  messagingSenderId: "840754584008",
  appId: "1:840754584008:web:5ef54ca182a9358fcbc8fd"
};

// ------------------------------------------------------------------------
// Khởi tạo Firebase (dùng CDN module, không cần npm/build tool)
// ------------------------------------------------------------------------
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getFirestore, doc, getDoc, setDoc, getDocs, collection, deleteDoc, writeBatch,
  increment, query, where
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { luuDuLieu, docDuLieu, xoaDuLieu } from './hero-storage.js';

const appFirebase = initializeApp(firebaseConfig);
const db = getFirestore(appFirebase);

// Cho phép các file khác (vd: bai-tap-tu-luan.html) dùng CHUNG 1 app/db Firebase
if (typeof window !== 'undefined') {
  window.db = db;
  window.appFirebase = appFirebase;
}

// ------------------------------------------------------------------------
// DANH SÁCH CÁC KEY localStorage TOÀN CỤC (không gắn theo học sinh cụ thể).
// Đây là dữ liệu/cấu hình do GIÁO VIÊN tạo ra (ngân hàng đề, số lượt tối đa,
// shop, marketplace, nhật ký đăng nhập...), cần giống nhau trên MỌI máy.
// Mỗi key này được lưu thành 1 document RIÊNG trong collection "mathhero_global"
// (tách riêng từng key, không gộp 1 document, để tránh chạm giới hạn 1MB/document
// của Firestore khi ngân hàng đề có nhiều câu hỏi).
// ------------------------------------------------------------------------
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

// ========================================================================
// [IndexedDB Transparent Caching]
// Thay thế localStorage cho các mảng/object dữ liệu lớn (giải quyết lỗi 5MB Quota)
// ========================================================================
window.heroMemoryStorage = {};

// Ghi đè (Monkey Patch) localStorage API - ĐẶT TRƯỚC KHI KHOITAOBONHO CHẠY
const originalGetItem = localStorage.getItem.bind(localStorage);
const originalSetItem = localStorage.setItem.bind(localStorage);
const originalRemoveItem = localStorage.removeItem.bind(localStorage);

window.__originalGetItem = originalGetItem;
window.__originalSetItem = originalSetItem;
window.__originalRemoveItem = originalRemoveItem;

Storage.prototype.getItem = function(key) {
    if (CAC_KEY_TOAN_CUC.includes(key)) {
        if (window.heroMemoryStorage && window.heroMemoryStorage[key] !== undefined && window.heroMemoryStorage[key] !== null) {
            return window.heroMemoryStorage[key];
        }
        return originalGetItem(key) || null;
    }
    return originalGetItem(key);
};
Storage.prototype.setItem = function(key, value) {
    if (CAC_KEY_TOAN_CUC.includes(key)) {
        window.heroMemoryStorage[key] = value;
        luuDuLieu(key, value).catch(() => {}); // Lưu ngầm vào IndexedDB
        try { originalSetItem(key, value); } catch(e) {} // Luôn sao lưu vào real localStorage
        return;
    }
    originalSetItem(key, value);
};
Storage.prototype.removeItem = function(key) {
    if (CAC_KEY_TOAN_CUC.includes(key)) {
        delete window.heroMemoryStorage[key];
        xoaDuLieu(key).catch(() => {});
        return;
    }
    originalRemoveItem(key);
};

async function khoiTaoBoNho() {
    await Promise.all(CAC_KEY_TOAN_CUC.map(async (key) => {
        try {
            let val = await docDuLieu(key);
            if (val !== null && val !== undefined) {
                window.heroMemoryStorage[key] = typeof val === 'string' ? val : JSON.stringify(val);
            } else {
                let lsVal = originalGetItem(key);
                if (lsVal) {
                    window.heroMemoryStorage[key] = lsVal;
                    luuDuLieu(key, lsVal).catch(() => {});
                }
            }
        } catch (e) {
            let lsVal = originalGetItem(key);
            if (lsVal) window.heroMemoryStorage[key] = lsVal;
        }
    }));
    window.heroStorageReady = true;
    try { window.dispatchEvent(new CustomEvent('heroStorageReady')); } catch(e){}
}
(async () => {
    try { await khoiTaoBoNho(); } catch(e) { console.warn('[Firebase Sync] Lỗi khoiTaoBoNho:', e); }
})(); // Bọc IIFE async để tương thích mọi trình duyệt và môi trường script

// [HeroStorage] Không tự động xóa rác ở đây nữa, hero-storage.js sẽ tự xóa nếu IDB thành công!
// Để nếu IDB lỗi trên file://, dữ liệu vẫn được backup ở real localStorage.

// ------------------------------------------------------------------------
// DANH SÁCH CÁC TIỀN TỐ KEY localStorage thuộc về 1 học sinh cụ thể.
// Mỗi key thực tế trong localStorage có dạng: tienTo + tenHocSinh
// (ví dụ "exp_Trần Văn Trong"). Khi đồng bộ, ta quét đúng các tiền tố này.
// (Cập nhật theo toàn bộ dự án thực tế, gồm cả hệ thống Boss, Vòng Quay,
//  Thách Đấu Đối Kháng, Vượt Ải Tuần và các thẻ đặc quyền của từng hệ thống.)
// ------------------------------------------------------------------------
const CAC_TIEN_TO_DU_LIEU_HOC_SINH = [
  // EXP & Xu (lõi hệ thống điểm số)
  'exp_', 'coin_',
  // Lượt chơi mỗi ngày/mỗi tuần theo từng chế độ
  'luot_lam_bai_', 'luot_boss_', 'luot_vong_quay_', 'luot_thach_dau_', 'luot_vuot_ai_', 'da_nop_tu_luan_',
  // Cờ cũ tương thích ngược (vòng quay đời đầu)
  'da_quay_',
  // Rương đồ vật phẩm cá nhân (mua từ Cửa Hàng)
  'ruong_do_',
  // Thú cưng Thần Tiên (linh-thu.html & index.html)
  'math_hero_pet_', 'hero_discipline_pet_',
  // Avatar & Khung & Danh hiệu cá nhân hóa
  'avatar_', 'equipped_avatar_', 'danh_hieu_chinh_', 'danh_hieu_da_mo_', 'khung_avatar_', 'equipped_border_',
  'danh_hieu_active_', 'khung_avatar_active_', 'math_hero_current_avatar_', 'math_hero_unlocked_avatars_',
  // Chuỗi học tập Streak & Lý thuyết
  'hero_streak_count_', 'hero_streak_history_', 'hero_streak_last_date_',
  'hero_exp_doc_ly_thuyet_ngay_', 'hero_nhac_nho_ly_thuyet_ngay_',
  'da_doc_phan_hoi_', 'moc_cap_nhat_hs_', 'tien_trinh_vuot_ai_', 'ai_hien_tai_',
  // Thẻ đặc quyền dùng cho "Nhiệm Vụ Hôm Nay" (lam-bai.html)
  'hero_x2exp_stack_', 'hero_5050_stack_', 'hero_rutgon_stack_', 'hero_cohoi2_stack_',
  'hero_x2exp_', 'hero_5050_', 'hero_rutgon_', 'hero_cohoi2_',
  // Thẻ đặc quyền dùng riêng cho "Vượt Ải Tuần" (vuot-ai-tuan.html)
  'va_khienmiensai_', 'va_khoidau_', 'va_mientruluot_', 'va_nhandoi_', 'va_tangthoigian_',
  // Trạng thái đã vượt qua từng Ải (Vượt Ải Tuần) - tiền tố dạng tuan1_aiX_clear_
  'tuan1_ai1_clear_', 'tuan1_ai2_clear_', 'tuan1_ai3_clear_'
];

// Tiền tố riêng cho cấu hình mỗi "Ải" (ai_config_so_cau_1, ai_config_thoi_gian_2,...).
// Đây KHÔNG gắn theo học sinh, mà theo số thứ tự Ải -> coi là toàn cục,
// nhưng vì số lượng Ải có thể thay đổi (không cố định danh sách key), ta xử lý
// riêng bằng cách quét theo TIỀN TỐ ngay trong lúc đồng bộ toàn cục (xem dưới).
const CAC_TIEN_TO_CAU_HINH_AI = ['ai_config_so_cau_', 'ai_config_thoi_gian_'];

// Tên document Firestore an toàn không chứa dấu "/" (Firestore cấm ký tự này trong ID)
function laySafeDocId(tenHocSinh) {
  return encodeURIComponent(tenHocSinh);
}

// ========================================================================
// 1) KÉO DỮ LIỆU TỪ FIRESTORE VỀ localStorage
//    Gọi ngay sau khi đăng nhập/đăng ký thành công, TRƯỚC khi chuyển trang.
// ========================================================================
async function taiDuLieuTuMay(tenHocSinh) {
  if (!tenHocSinh) return;
  await kiemTraMaDotDuLieu(); // [Mã đợt] dọn máy cũ xong rồi mới kéo điểm về
  try {
    const refHocSinh = doc(db, "mathhero_students", laySafeDocId(tenHocSinh));
    const snap = await getDoc(refHocSinh);

    if (!snap.exists()) {
      // Học sinh mới hoàn toàn trên Firestore (lần đầu đồng bộ) -> không có gì để kéo về, giữ nguyên localStorage hiện tại.
      return;
    }

    const duLieu = snap.data();
    // duLieu có dạng { "exp_Trần Văn Trong": 120, "coin_Trần Văn Trong": 80, "ruong_do_...": "[...]", ... }
    Object.keys(duLieu).forEach(key => {
      // Bỏ qua field metadata nội bộ (nếu có)
      if (key === '_capNhatLanCuoi') return;
      localStorage.setItem(key, duLieu[key]);
    });

    console.log("[Firebase Sync] Đã tải dữ liệu của", tenHocSinh, "về máy.");
  } catch (loi) {
    console.error("[Firebase Sync] Lỗi khi tải dữ liệu:", loi);
    // Lỗi mạng/Firestore -> không chặn học sinh, vẫn cho chơi tiếp với dữ liệu localStorage hiện có.
  }
}

// ========================================================================
// 2) ĐẨY DỮ LIỆU TỪ localStorage LÊN FIRESTORE
//    Gọi sau mỗi hành động quan trọng: cộng EXP/Xu, dùng vật phẩm,
//    mua/bán trên chợ, hết lượt làm bài, v.v.
// ========================================================================
async function dayDuLieuLenMay(tenHocSinh, hoSoTrucTiep) {
  if (!tenHocSinh) return false;
  if (await heroChoMaDot()) return false; // [Mã đợt] máy vừa bị dọn → không đẩy điểm cũ/rỗng lên Cloud
  try {
    const goiDuLieu = {};

    // Quét toàn bộ localStorage, chỉ lấy các key thuộc đúng học sinh này
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (!key) continue;

      const thuocVeHocSinhNay = CAC_TIEN_TO_DU_LIEU_HOC_SINH.some(tienTo => key === tienTo + tenHocSinh);
      if (thuocVeHocSinhNay) {
        goiDuLieu[key] = localStorage.getItem(key);
      }
    }

    // Admin không có session học sinh: lấy lớp từ hồ sơ tài khoản tương ứng.
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

    const refHocSinh = doc(db, "mathhero_students", laySafeDocId(tenHocSinh));
    await setDoc(refHocSinh, goiDuLieu, { merge: true });

    console.log("[Firebase Sync] Đã đẩy dữ liệu của", tenHocSinh, "lên máy chủ.");
    return true;
  } catch (loi) {
    console.error("[Firebase Sync] Lỗi khi đẩy dữ liệu:", loi);
    // Lỗi mạng -> dữ liệu vẫn an toàn trong localStorage, lần đồng bộ sau sẽ thử lại.
    return false;
  }
}

// ========================================================================
// 3) (Dùng cho bang-xep-hang.html / admin.html) TẢI TOÀN BỘ HỌC SINH
//    Vì 1 máy chỉ có localStorage của riêng học sinh đó, các trang cần
//    xem TẤT CẢ học sinh (bảng xếp hạng, quản trị) phải gọi hàm này để
//    lấy danh sách đầy đủ từ Firestore, KHÔNG dùng localStorage.
// ========================================================================
async function taiToanBoHocSinhTuMay() {
  try {
    const snapAll = await getDocs(collection(db, "mathhero_students"));
    const ketQua = [];
    snapAll.forEach(docSnap => {
      ketQua.push({ id: decodeURIComponent(docSnap.id), data: docSnap.data() });
    });
    return ketQua;
  } catch (loi) {
    console.error("[Firebase Sync] Lỗi khi tải toàn bộ học sinh:", loi);
    return [];
  }
}

// Helper gộp mảng dữ liệu thông minh theo ID (tránh xóa đè dữ liệu cục bộ mới)
//
// LƯU Ý QUAN TRỌNG (bản vá lỗi mất/ghi đè đề thi):
// Trước đây, với những ID đã tồn tại ở CẢ 2 bên, hàm này luôn giữ bản Cloud
// vô điều kiện ("...cloudArr" đặt sau cùng trong mảng merged). Hệ quả: nếu
// giáo viên SỬA 1 đề đã có (edit lại nội dung) trên máy A, nhưng máy B đồng
// bộ Cloud trước rồi mới đẩy lên, bản sửa mới ở máy A có thể bị bản cũ hơn
// trên Cloud ghi đè ở lần tải tiếp theo -> mất/lệch dữ liệu.
//
// Cách sửa: mỗi item cần có field "capNhatLuc" (số mili-giây, Date.now())
// đánh dấu lần sửa gần nhất. Khi gộp, với ID trùng ở cả 2 bên, ta so sánh
// "capNhatLuc" và GIỮ BẢN CÓ MỐC THỜI GIAN MỚI HƠN, thay vì mặc định Cloud thắng.
// Item cũ (tạo trước khi có bản vá này) chưa có "capNhatLuc" sẽ được coi là
// mốc = 0, tức luôn nhường cho bất kỳ bản nào có mốc thời gian thật.
function gopMangTheoId(localRaw, cloudRaw, key = '') {
  let localArr = [];
  let cloudArr = [];
  try { localArr = JSON.parse(localRaw); } catch(e) {}
  try { cloudArr = JSON.parse(cloudRaw); } catch(e) {}
  if (!Array.isArray(localArr)) localArr = [];
  if (!Array.isArray(cloudArr)) cloudArr = [];

  // === TOMBSTONE: Lấy danh sách ID đã bị xóa (ưu tiên CAO NHẤT, thắng cả Cloud) ===
  let dsDaXoa = [];
  try {
    // Thử lấy tombstone theo nhiều key khác nhau (tương thích ngược)
    const rawDaXoa = (key === 'danh_sach_bai_hoc_ly_thuyet')
      ? localStorage.getItem('danh_sach_bai_hoc_ly_thuyet_da_xoa')
      : (localStorage.getItem(key + '_da_xoa') || localStorage.getItem('hero_da_xoa_' + key));
    if (rawDaXoa) dsDaXoa = JSON.parse(rawDaXoa);
  } catch(e) {}
  const daXoaSet = new Set(Array.isArray(dsDaXoa) ? dsDaXoa : []);

  if (daXoaSet.size > 0) {
    console.log('[Firebase Sync] Tombstone cho', key, ':', [...daXoaSet]);
  }

  // Xóa bỏ cờ toàn cục gây lỗi chặn bài học và thanh lọc bài học mẫu giả lập cũ
  if (key === 'danh_sach_bai_hoc_ly_thuyet') {
    localStorage.removeItem('hero_da_xoa_ly_thuyet');
    const isLegacyMockId = id => typeof id === 'string' && /^lt_k[6-9]_\d+$/i.test(id);
    localArr = localArr.filter(x => x && x.id && !isLegacyMockId(x.id));
    cloudArr = cloudArr.filter(x => x && x.id && !isLegacyMockId(x.id));
  }

  // Lọc bỏ triệt để các mục đã bị xóa theo Tombstone (cả ở Local lẫn Cloud)
  let daXoaPhanTuTrenCloud = false;
  if (daXoaSet.size > 0) {
    const truocLocal = localArr.length;
    const truocCloud = cloudArr.length;
    localArr = localArr.filter(x => x && x.id && !daXoaSet.has(x.id));
    cloudArr = cloudArr.filter(x => x && x.id && !daXoaSet.has(x.id));
    if (cloudArr.length !== truocCloud || localArr.length !== truocLocal) {
      daXoaPhanTuTrenCloud = true;
    }
  }

  if (daXoaPhanTuTrenCloud) {
    console.log('[Firebase Sync] Đã lọc bỏ mục bị xóa theo Tombstone cho key:', key);
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
    return { merged: localArr, hasNewLocal: localArr.length > 0 || daXoaPhanTuTrenCloud };
  }
  // QUAN TRỌNG: Kể cả khi localArr rỗng, tombstone vẫn đã lọc cloudArr ở trên → an toàn tuyệt đối
  if (localArr.length === 0) {
    return { merged: cloudArr, hasNewLocal: daXoaPhanTuTrenCloud };
  }

  const layMoc = (item) => (item && typeof item.capNhatLuc === 'number') ? item.capNhatLuc : 0;

  const cloudMap = new Map(cloudArr.filter(x => x && x.id).map(x => [x.id, x]));
  let hasNewLocal = daXoaPhanTuTrenCloud;
  const merged = [];
  const daXuLy = new Set();

  // Duyệt local trước để giữ đúng thứ tự hiển thị quen thuộc (mục mới nhất ở đầu)
  localArr.forEach(item => {
    if (!item || !item.id) return;
    daXuLy.add(item.id);
    const cloudItem = cloudMap.get(item.id);

    if (!cloudItem) {
      // Chỉ có ở local -> mục hoàn toàn mới, chưa kịp đẩy lên Cloud
      merged.push(item);
      hasNewLocal = true;
    } else if (layMoc(item) > layMoc(cloudItem)) {
      // Cùng ID nhưng bản local mới sửa SAU bản Cloud -> giữ bản local,
      // đồng thời báo hasNewLocal để đẩy ngược bản mới này lên Cloud
      merged.push(item);
      hasNewLocal = true;
    } else if (layMoc(cloudItem) > layMoc(item)) {
      // Bản Cloud mới hơn -> giữ bản Cloud
      merged.push(cloudItem);
    } else {
      // Bằng mốc thời gian hoặc không có mốc: giữ bản local để bảo toàn trạng thái mới tại máy
      merged.push(item);
      if (item.hidden !== cloudItem.hidden) {
        hasNewLocal = true;
      }
    }
  });

  // Các mục chỉ tồn tại ở Cloud (máy này chưa từng có) -> giữ nguyên, thêm vào sau
  cloudArr.forEach(item => {
    if (item && item.id && !daXuLy.has(item.id)) {
      merged.push(item);
    }
  });

  return { merged, hasNewLocal };
}

// Helper gộp tài khoản học sinh
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

  // Nếu Cloud đã được đặt về rỗng '{}' (người quản trị đã xóa sạch trên Cloud)
  if (cloudRaw && cloudRaw.trim() === '{}') {
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

  return { merged, hasNewLocal };
}


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
//   - Trạng thái dùng chung với hero-firebase-compat.js qua window.__heroMaDot (chỉ đọc Cloud 1 lần/trang).
// ============================================================
const HERO_KEY_MA_DOT = 'hero_ma_dot_du_lieu';
const HERO_DOC_MA_DOT = 'ma_dot_du_lieu';
const HERO_MA_DOT_TIMEOUT_MS = 6000;
const HERO_KEY_HANG_DOI_SYNC = 'hero_pending_sync_queue';
const HERO_KEY_CAN_DON_TOAN_CUC = ['math_hero_users_v2', 'danh_sach_hs_da_xoa'];
const HERO_KEY_PHIEN_HOC_SINH = ['hoc_school_student_name', 'hoc_school_student_class', 'hoc_school_student_classroom'];
const HERO_MA_DOT = window.__heroMaDot = window.__heroMaDot || { promise: null, xong: false, daDon: false };

// Xóa key khỏi IndexedDB (HeroMathDB/HeroStore). DB chưa có thì bỏ qua, KHÔNG tạo DB rỗng.
function heroXoaKeyTrongIDB(cacKey) {
  return new Promise((resolve) => {
    let xong = false;
    const ketThuc = () => { if (!xong) { xong = true; resolve(); } };
    try {
      if (!window.indexedDB) { ketThuc(); return; }
      const req = indexedDB.open('HeroMathDB', 1);
      req.onupgradeneeded = (e) => { try { e.target.transaction.abort(); } catch (x) {} };
      req.onerror = ketThuc;
      req.onblocked = ketThuc;
      req.onsuccess = (e) => {
        const idb = e.target.result;
        try {
          if (!idb.objectStoreNames.contains('HeroStore')) { idb.close(); ketThuc(); return; }
          const tx = idb.transaction(['HeroStore'], 'readwrite');
          const store = tx.objectStore('HeroStore');
          cacKey.forEach((k) => store.delete(k));
          tx.oncomplete = tx.onerror = tx.onabort = () => { try { idb.close(); } catch (x) {} ketThuc(); };
        } catch (x) { try { idb.close(); } catch (y) {} ketThuc(); }
      };
      setTimeout(ketThuc, 3000);
    } catch (e) { ketThuc(); }
  });
}

// Xóa 1 key toàn cục cho THẬT: bộ nhớ đệm + localStorage thật.
// (Storage.prototype.removeItem đã bị patch ở đầu file này KHÔNG xóa localStorage thật của key toàn cục.)
function heroXoaKeyToanCucTaiMay(key) {
  try { if (window.heroMemoryStorage) delete window.heroMemoryStorage[key]; } catch (e) {}
  try { originalRemoveItem(key); } catch (e) {}
}

// Dọn tài khoản + điểm cũ trong máy. Trả về true nếu máy đang có học sinh đăng nhập.
async function heroDonDuLieuHocSinhCu() {
  let coPhien = false;
  try { coPhien = !!(localStorage.getItem('hoc_school_student_name') || sessionStorage.getItem('hoc_school_student_name')); } catch (e) {}

  // 1) Mọi key điểm/vật phẩm/lượt chơi... theo học sinh (cùng danh sách với dayDuLieuLenMay)
  const cacKey = [];
  try {
    for (let i = 0; i < localStorage.length; i++) { const k = localStorage.key(i); if (k) cacKey.push(k); }
  } catch (e) {}
  cacKey.forEach((k) => {
    if (CAC_TIEN_TO_DU_LIEU_HOC_SINH.some((tt) => k.indexOf(tt) === 0)) {
      try { localStorage.removeItem(k); } catch (e) {}
    }
  });

  // 2) Phiên đăng nhập + bản sao tài khoản (nếu giữ lại, index.html sẽ tự khôi phục tài khoản cũ)
  HERO_KEY_PHIEN_HOC_SINH.forEach((k) => {
    try { localStorage.removeItem(k); } catch (e) {}
    try { sessionStorage.removeItem(k); } catch (e) {}
  });
  try { localStorage.removeItem('hero_session_token'); } catch (e) {}
  try { localStorage.removeItem('hero_my_account_backup'); } catch (e) {}

  // 3) Hàng đợi retry: bỏ các mục định đẩy tài khoản/bia mộ cũ lên Cloud (giữ mục khác)
  try {
    const q = JSON.parse(localStorage.getItem(HERO_KEY_HANG_DOI_SYNC) || '[]');
    if (Array.isArray(q) && q.length) {
      const conLai = q.filter((x) => x && HERO_KEY_CAN_DON_TOAN_CUC.indexOf(x.key) === -1);
      if (conLai.length) localStorage.setItem(HERO_KEY_HANG_DOI_SYNC, JSON.stringify(conLai));
      else localStorage.removeItem(HERO_KEY_HANG_DOI_SYNC);
    }
  } catch (e) {}

  // 4) Bỏ mốc "vừa kéo Cloud" để lần taiCauHinhToanCuc kế tiếp chắc chắn kéo mới
  heroHuyDauMocKeoToanCuc();

  // 5) Tài khoản + bia mộ: xóa HẲN (bộ nhớ đệm, localStorage thật, IndexedDB)
  HERO_KEY_CAN_DON_TOAN_CUC.forEach((k) => heroXoaKeyToanCucTaiMay(k));
  await Promise.all(HERO_KEY_CAN_DON_TOAN_CUC.map((k) => Promise.resolve(xoaDuLieu(k)).catch(() => {})));
  await heroXoaKeyTrongIDB(HERO_KEY_CAN_DON_TOAN_CUC);
  if (!window.heroStorageReady) {
    // khoiTaoBoNho đang nạp IndexedDB vào bộ nhớ đệm → chờ xong rồi xóa lại cho sạch
    await new Promise((res) => {
      let da = false;
      const ok = () => { if (!da) { da = true; res(); } };
      window.addEventListener('heroStorageReady', ok, { once: true });
      setTimeout(ok, 3000);
    });
  }
  HERO_KEY_CAN_DON_TOAN_CUC.forEach((k) => heroXoaKeyToanCucTaiMay(k));
  return coPhien;
}

// Học sinh đang đăng nhập mà máy vừa bị dọn → đưa về trang đăng nhập (auth.html tự hiện thông báo)
function heroChuyenVeDangNhapNeuCan(kq) {
  try {
    const p = String(location.pathname || '');
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

async function layMaDotDuLieu() {
  const snap = await getDoc(doc(db, "mathhero_global", HERO_DOC_MA_DOT));
  if (!snap.exists()) return '';
  const v = (snap.data() || {}).value;
  return (v === undefined || v === null) ? '' : String(v).trim();
}

// Kiểm tra mã đợt (chỉ chạy 1 lần/trang, các lần gọi sau dùng lại kết quả).
// Trả về { daDon, maMoi, coPhien }.
function kiemTraMaDotDuLieu() {
  if (HERO_MA_DOT.promise) return HERO_MA_DOT.promise;
  HERO_MA_DOT.promise = (async () => {
    let ketQua = { daDon: false, maMoi: null, coPhien: false };
    try {
      const maCloud = await Promise.race([
        layMaDotDuLieu(),
        new Promise((_, rej) => setTimeout(() => rej(new Error('timeout')), HERO_MA_DOT_TIMEOUT_MS))
      ]);
      const maMay = localStorage.getItem(HERO_KEY_MA_DOT) || '';
      if (maCloud && maCloud !== maMay) {
        let vuaDangNhap = false;
        try {
          const loginTs = parseInt(localStorage.getItem('hero_login_timestamp') || '0', 10);
          if (loginTs > 0 && (Date.now() - loginTs < 5 * 60 * 1000)) {
            vuaDangNhap = true;
          }
        } catch(e) {}

        if (vuaDangNhap) {
          // Học sinh vừa đăng nhập đợt mới thành công, bảo toàn phiên và cập nhật mã đợt
          localStorage.setItem(HERO_KEY_MA_DOT, maCloud);
          ketQua = { daDon: false, maMoi: maCloud, coPhien: true };
        } else {
          const coPhien = await heroDonDuLieuHocSinhCu();
          localStorage.setItem(HERO_KEY_MA_DOT, maCloud); // ghi mã SAU khi dọn xong (đóng trang giữa chừng → lần sau dọn lại)
          HERO_MA_DOT.daDon = true;
          ketQua = { daDon: true, maMoi: maCloud, coPhien };
          console.log('[Firebase Sync] Mã đợt dữ liệu đổi (' + (maMay || 'chưa có') + ' → ' + maCloud + '): đã xóa tài khoản & điểm cũ trong máy.');
          try { window.dispatchEvent(new CustomEvent('heroMaDotDoi', { detail: ketQua })); } catch (e) {}
          heroChuyenVeDangNhapNeuCan(ketQua);
        }
      }
    } catch (loi) {
      console.warn('[Firebase Sync] Không kiểm tra được mã đợt dữ liệu (bỏ qua, không xóa gì):', loi && loi.message);
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
  const xepHangTruoc = !HERO_MA_DOT.xong;
  await kiemTraMaDotDuLieu();
  return xepHangTruoc && HERO_MA_DOT.daDon;
}

// DÙNG Ở ADMIN: đặt mã đợt mới. Từ lúc này, mọi máy mở trang sẽ tự xóa tài khoản + điểm cũ.
// Máy của Thầy được ghi nhận là đã ở đợt mới nên KHÔNG tự xóa chính mình.
async function datMaDotDuLieu(maMoi) {
  maMoi = String(maMoi == null ? '' : maMoi).trim();
  if (!maMoi) throw new Error('Mã đợt dữ liệu không được để trống');
  await setDoc(doc(db, "mathhero_global", HERO_DOC_MA_DOT), {
    value: maMoi,
    _capNhatLanCuoi: new Date().toISOString()
  });
  localStorage.setItem(HERO_KEY_MA_DOT, maMoi);
  console.log('[Firebase Sync] Đã đặt mã đợt dữ liệu:', maMoi);
  return maMoi;
}

// ========================================================================
// 4) KÉO TOÀN BỘ DỮ LIỆU/CẤU HÌNH TOÀN CỤC VỀ localStorage (SMART MERGE)
//    (ngân hàng đề, số lượt tối đa, shop, marketplace, nhật ký đăng nhập...)
//    Tự động gộp hai chiều (Smart Merge) để không bao giờ ghi đè làm mất
//    đề thi/bài học mới do giáo viên vừa tạo ở máy cục bộ.
// ========================================================================
async function taiCauHinhToanCuc(tuyChon) {
  await kiemTraMaDotDuLieu(); // [Mã đợt] phải dọn máy cũ TRƯỚC khi gộp, kẻo gộp ngược tài khoản cũ lên Cloud
  if (heroNenBoQuaKeoToanCuc(tuyChon)) return;
  try {
    const CAC_KEY_MANG_ID = [
      'ngan_hang_de_trac_nghiem',
      'danh_sach_bo_de_trac_nghiem',
      'danh_sach_bai_hoc_ly_thuyet',
      'ngan_hang_de_boss',
      'ngan_hang_de_vuot_ai',
      'danh_sach_yeu_cau_quen_pass'
    ];

    // GIAI ĐOẠN 1: Tải và gộp tất cả các Tombstone key (*_da_xoa) TRƯỚC TIÊN
    const tombstoneKeys = CAC_KEY_TOAN_CUC.filter(k => k.endsWith('_da_xoa'));
    await Promise.all(tombstoneKeys.map(async (key) => {
      try {
        const refKey = doc(db, "mathhero_global", key);
        const snap = await getDoc(refKey);
        const localVal = localStorage.getItem(key);
        let localArr = [];
        let cloudArr = [];
        try { localArr = JSON.parse(localVal || '[]'); } catch(e) {}
        if (snap.exists() && snap.data().value !== undefined) {
          try { cloudArr = JSON.parse(snap.data().value || '[]'); } catch(e) {}
        }
        if (!Array.isArray(localArr)) localArr = [];
        if (!Array.isArray(cloudArr)) cloudArr = [];
        const unionSet = new Set([...localArr, ...cloudArr]);
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

        // Bảo toàn đầy đủ danh sách học sinh đã xóa (Tombstone)
        localStorage.setItem(key, JSON.stringify(mergedArr));
        if (mergedArr.length !== cloudArr.length || localArr.some(id => !cloudArr.includes(id))) {
          dayCauHinhToanCuc(key).catch(() => {});
        }
      } catch(e) {}
    }));

    // GIAI ĐOẠN 2: Tải và gộp các key cấu hình và mảng dữ liệu còn lại
    const dataKeys = CAC_KEY_TOAN_CUC.filter(k => !k.endsWith('_da_xoa'));
    const promises = dataKeys.map(async (key) => {
      const refKey = doc(db, "mathhero_global", key);
      const snap = await getDoc(refKey);

      const localVal = localStorage.getItem(key);

      if (snap.exists() && snap.data().value !== undefined) {
        const cloudVal = snap.data().value;

        // Nếu là danh sách bộ đề / lý thuyết -> Gộp thông minh theo ID
        if (CAC_KEY_MANG_ID.includes(key)) {
          const { merged, hasNewLocal } = gopMangTheoId(localVal, cloudVal, key);
          localStorage.setItem(key, JSON.stringify(merged));
          if (typeof window !== 'undefined' && window.indexedDB) {
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
          // Nếu máy cục bộ có đề mới mà Cloud chưa có -> đẩy bản gộp ngược lên Cloud
          if (hasNewLocal) {
            dayCauHinhToanCuc(key).catch(() => {});
          }
        }
        // Nếu là danh sách tài khoản học sinh -> gộp theo username
        else if (key === 'math_hero_users_v2') {
          const { merged, hasNewLocal } = gopTaiKhoanHocSinh(localVal, cloudVal);
          localStorage.setItem(key, JSON.stringify(merged));
          if (hasNewLocal) {
            dayCauHinhToanCuc(key).catch(() => {});
          }
        } 
        // Các cấu hình đơn giản khác (số lượt, shop...) -> nhận từ Cloud
        else {
          localStorage.setItem(key, cloudVal);
        }
      } else {
        // Nếu Cloud chưa có document này mà máy cục bộ đã có dữ liệu -> đẩy lên Cloud
        if (localVal && localVal.trim() && localVal !== '[]' && localVal !== '{}') {
          dayCauHinhToanCuc(key).catch(() => {});
        }
      }
    });
    await Promise.all(promises);

    // 4b) Các key động theo số Ải (ai_config_so_cau_1, ai_config_thoi_gian_2, ...)
    const refAiConfig = doc(db, "mathhero_global", "ai_config_tat_ca");
    const snapAi = await getDoc(refAiConfig);
    if (snapAi.exists()) {
      const duLieuAi = snapAi.data();
      Object.keys(duLieuAi).forEach(key => {
        if (key === '_capNhatLanCuoi') return;
        localStorage.setItem(key, duLieuAi[key]);
      });
    }

    console.log("[Firebase Sync] Đã đồng bộ Smart Merge cấu hình toàn cục về máy thành công.");
  } catch (loi) {
    heroHuyDauMocKeoToanCuc();
    console.error("[Firebase Sync] Lỗi khi tải cấu hình toàn cục:", loi);
  }
}

// ========================================================================
// 5) ĐẨY 1 KEY TOÀN CỤC CỤ THỂ LÊN FIRESTORE
//    Gọi ngay sau khi giáo viên lưu thay đổi ở admin.html / cua-hang.html
//    (ví dụ sau khi luuBoDeKieuVanBan(), luuSoLuotLamBai(), luuBangGiaMoi()...).
//    Tham số tenKey phải là 1 trong CAC_KEY_TOAN_CUC, hoặc 1 key động dạng
//    "ai_config_so_cau_X" / "ai_config_thoi_gian_X" (sẽ tự định tuyến đúng chỗ).
// ========================================================================
async function dayCauHinhToanCuc(tenKey) {
  if (!tenKey) return;
  // [Mã đợt] lệnh xếp hàng trước khi dọn máy mà đẩy tài khoản/bia mộ → bỏ (nếu không sẽ đẩy null lên Cloud)
  if ((await heroChoMaDot()) && HERO_KEY_CAN_DON_TOAN_CUC.indexOf(tenKey) !== -1) return false;
  try {
    const laKeyAiConfig = CAC_TIEN_TO_CAU_HINH_AI.some(tienTo => tenKey.startsWith(tienTo));

    if (laKeyAiConfig) {
      // Ghi merge vào document chung "ai_config_tat_ca"
      const refAiConfig = doc(db, "mathhero_global", "ai_config_tat_ca");
      await setDoc(refAiConfig, {
        [tenKey]: localStorage.getItem(tenKey),
        _capNhatLanCuoi: new Date().toISOString()
      }, { merge: true });
    } else {
      // Ghi vào document riêng của đúng key đó
      const refKey = doc(db, "mathhero_global", tenKey);
      await setDoc(refKey, {
        value: localStorage.getItem(tenKey),
        _capNhatLanCuoi: new Date().toISOString()
      });
    }

    console.log("[Firebase Sync] Đã đẩy cấu hình toàn cục:", tenKey);
    return true;
  } catch (loi) {
    console.error("[Firebase Sync] Lỗi khi đẩy cấu hình toàn cục:", tenKey, loi);
    return false;
  }
}

// ========================================================================
// 7) GHI NHẬT KÝ HOẠT ĐỘNG (phục vụ Bảng Xếp Hạng NỖ LỰC theo tuần/tháng)
//    Khác với dayDuLieuLenMay() (GHI ĐÈ số cộng dồn hiện tại), hàm này CỘNG DỒN
//    (increment) vào 1 document riêng cho từng NGÀY của từng học sinh, để sau
//    này có thể truy vấn lại: "tuần/tháng này học sinh đã tham gia mấy ngày,
//    làm mấy lượt, đúng/sai bao nhiêu câu" — dữ liệu mà các key exp_/coin_
//    (chỉ lưu số hiện tại) không cho biết được.
//    Gọi ngay sau mỗi lần học sinh HOÀN THÀNH 1 lượt làm bài/vượt ải/đánh boss
//    (dù đúng hay sai đều gọi, để không bỏ sót công sức).
//
//    tenHocSinh: tên học sinh
//    loaiHoatDong: 'lam_bai' | 'vuot_ai' | 'boss'
//    soCauDung, soCauSai: số câu đúng/sai trong lượt vừa xong
//    expNhan: số EXP vừa được cộng trong lượt này
// ========================================================================
async function ghiNhatKyHoatDong(tenHocSinh, loaiHoatDong, soCauDung, soCauSai, expNhan) {
  if (!tenHocSinh) return;
  try {
    const homNayISO = new Date().toISOString().slice(0, 10); // YYYY-MM-DD (sắp xếp/so sánh chuỗi được luôn)
    const lop = sessionStorage.getItem('hoc_school_student_class') || '';
    const lopCuThe = sessionStorage.getItem('hoc_school_student_classroom') || '';
    const docId = laySafeDocId(tenHocSinh) + '_' + homNayISO;
    const refLog = doc(db, "mathhero_activity_log", docId);

    const capNhat = {
      ten: tenHocSinh,
      lop,
      lopCuThe,
      ngay: homNayISO,
      soCauDung: increment(Math.max(0, soCauDung || 0)),
      soCauSai: increment(Math.max(0, soCauSai || 0)),
      expNhan: increment(Math.max(0, expNhan || 0)),
      soLuot: increment(1),
      _capNhatLanCuoi: new Date().toISOString()
    };
    if (loaiHoatDong) {
      capNhat['soLuot_' + loaiHoatDong] = increment(1);
    }

    await setDoc(refLog, capNhat, { merge: true });
    console.log("[Firebase Sync] Đã ghi nhật ký hoạt động:", tenHocSinh, loaiHoatDong);
  } catch (loi) {
    console.error("[Firebase Sync] Lỗi khi ghi nhật ký hoạt động:", loi);
    // Lỗi mạng -> không chặn học sinh chơi tiếp, chấp nhận thiếu 1 dòng log.
  }
}

// ========================================================================
// 8) ĐỌC NHẬT KÝ HOẠT ĐỘNG TRONG 1 KHOẢNG NGÀY (dùng cho bang-xep-hang.html
//    để tính điểm "Nỗ lực" theo tuần/tháng đã chọn).
//    tuNgayISO, denNgayISO: dạng "YYYY-MM-DD" (bao gồm cả 2 đầu mút).
// ========================================================================
async function taiNhatKyHoatDong(tuNgayISO, denNgayISO) {
  try {
    const q = query(
      collection(db, "mathhero_activity_log"),
      where("ngay", ">=", tuNgayISO),
      where("ngay", "<=", denNgayISO)
    );
    const snap = await getDocs(q);
    const ketQua = [];
    snap.forEach(docSnap => ketQua.push(docSnap.data()));
    return ketQua;
  } catch (loi) {
    console.error("[Firebase Sync] Lỗi khi tải nhật ký hoạt động:", loi);
    return [];
  }
}

// ========================================================================
// 9) ĐỌC TOÀN BỘ BÀI TẬP TỰ LUẬN ĐÃ NỘP TRONG 1 KHOẢNG NGÀY (dựa trên
//    trường "thoiGianNop" có sẵn của từng bài nộp trong collection
//    "bai_tap_tu_luan" — không cần ghi log riêng vì mỗi lần nộp bài đã
//    tự động là 1 document có dấu thời gian rồi).
//    tuNgayISO, denNgayISO: dạng "YYYY-MM-DD" (bao gồm cả 2 đầu mút).
// ========================================================================
async function taiBaiTuLuanTrongKhoang(tuNgayISO, denNgayISO) {
  try {
    const tuISOFull = tuNgayISO + 'T00:00:00.000Z';
    const denISOFull = denNgayISO + 'T23:59:59.999Z';
    const q = query(
      collection(db, "bai_tap_tu_luan"),
      where("thoiGianNop", ">=", tuISOFull),
      where("thoiGianNop", "<=", denISOFull)
    );
    const snap = await getDocs(q);
    const ketQua = [];
    snap.forEach(docSnap => ketQua.push(docSnap.data()));
    return ketQua;
  } catch (loi) {
    console.error("[Firebase Sync] Lỗi khi tải bài tập tự luận:", loi);
    return [];
  }
}

// ========================================================================
// 6) XÓA HOÀN TOÀN 1 HỌC SINH TRÊN FIRESTORE
//    Gọi khi giáo viên bấm "Xóa học sinh" ở admin.html / cua-hang.html.
// ========================================================================
async function xoaHocSinhTrenMay(tenHocSinh) {
  if (!tenHocSinh) return;
  try {
    const refHocSinh = doc(db, "mathhero_students", laySafeDocId(tenHocSinh));
    await deleteDoc(refHocSinh);
    console.log("[Firebase Sync] Đã xóa học sinh trên máy chủ:", tenHocSinh);
  } catch (loi) {
    console.error("[Firebase Sync] Lỗi khi xóa học sinh:", loi);
  }
}

// ========================================================================
// 6b) XÓA SẠCH 100% TOÀN BỘ HỌC SINH TRÊN FIRESTORE CLOUD (BATCH DELETE TRIỆT ĐỂ)
// ========================================================================
async function xoaSachToanBoHocSinhTrenCloud() {
  try {
    console.log("[Firebase Sync] Đang quét và xóa sạch collection mathhero_students...");
    const snapAll = await getDocs(collection(db, "mathhero_students"));
    const total = snapAll.size;
    if (total === 0) {
      console.log("[Firebase Sync] Collection mathhero_students đã rỗng sẵn.");
      return { success: true, count: 0 };
    }

    const batchSize = 400;
    let batch = writeBatch(db);
    let count = 0;
    let batchPromises = [];

    snapAll.forEach(docSnap => {
      batch.delete(docSnap.ref);
      count++;
      if (count >= batchSize) {
        batchPromises.push(batch.commit());
        batch = writeBatch(db);
        count = 0;
      }
    });

    if (count > 0) {
      batchPromises.push(batch.commit());
    }

    await Promise.all(batchPromises);
    console.log(`[Firebase Sync] Đã xóa sạch ${total} tài liệu học sinh trên Cloud thành công!`);
    return { success: true, count: total };
  } catch (loi) {
    console.error("[Firebase Sync] Lỗi khi xóa sạch học sinh trên Cloud:", loi);
    try {
      const snapAll = await getDocs(collection(db, "mathhero_students"));
      await Promise.all(snapAll.docs.map(d => deleteDoc(d.ref)));
      return { success: true, count: snapAll.size };
    } catch(loi2) {
      return { success: false, count: 0, error: loi2.message };
    }
  }
}

// ========================================================================
// 10) GHI ĐÈ THẲNG FIREBASE (BYPASS localStorage & merge)
//     Dùng khi xóa trắng dữ liệu để đảm bảo không bị phục hồi
// ========================================================================
async function forceGhiDeFirebase(collectionName, docId, data) {
  try {
    const refDoc = doc(db, collectionName, docId);
    await setDoc(refDoc, data);
    console.log("[Firebase Sync] Force ghi đè Firebase:", collectionName, "/", docId);
  } catch (loi) {
    console.error("[Firebase Sync] Lỗi force ghi đè Firebase:", loi);
    throw loi;
  }
}

const syncApi = {
  db, appFirebase,
  taiDuLieuTuMay, dayDuLieuLenMay, taiToanBoHocSinhTuMay,
  taiCauHinhToanCuc, dayCauHinhToanCuc, ghiNhatKyHoatDong,
  taiNhatKyHoatDong, taiBaiTuLuanTrongKhoang, xoaHocSinhTrenMay,
  xoaSachToanBoHocSinhTrenCloud,
  forceGhiDeFirebase,
  kiemTraMaDotDuLieu, layMaDotDuLieu, datMaDotDuLieu
};

if (typeof window !== 'undefined') {
  window.FirebaseSync = Object.assign(window.FirebaseSync || {}, syncApi);
  Object.assign(window, syncApi);
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = syncApi;
}

export {
  db, appFirebase,
  taiDuLieuTuMay, dayDuLieuLenMay, taiToanBoHocSinhTuMay,
  taiCauHinhToanCuc, dayCauHinhToanCuc, ghiNhatKyHoatDong,
  taiNhatKyHoatDong, taiBaiTuLuanTrongKhoang, xoaHocSinhTrenMay,
  xoaSachToanBoHocSinhTrenCloud,
  forceGhiDeFirebase,
  kiemTraMaDotDuLieu, layMaDotDuLieu, datMaDotDuLieu
};

// [Mã đợt] kiểm tra ngay khi module nạp (dùng chung kết quả với hero-firebase-compat.js nếu nó chạy trước)
kiemTraMaDotDuLieu().catch(() => {});
export default syncApi;
