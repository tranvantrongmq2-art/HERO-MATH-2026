// ========================================================================
// HERO DANH SÁCH HỌC SINH CHUẨN (203 Học Sinh từ 5 file Excel)
// Lớp: 7A2 (44 HS), 7A4 (39 HS), 7A7 (41 HS), 9A4 (39 HS), 9A6 (40 HS)
// Mật khẩu mặc định: 123456 (Đã hash SHA-256 kèm SALT)
// ========================================================================

(function() {
  const usersObj = {
  "Nguyễn Thanh An": {
    "class": "Khối 7",
    "classroom": "7A2",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Huỳnh Ngọc Kim Anh": {
    "class": "Khối 7",
    "classroom": "7A2",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Lê Nguyễn Thái Anh": {
    "class": "Khối 7",
    "classroom": "7A2",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Phạm Nguyên Anh": {
    "class": "Khối 7",
    "classroom": "7A2",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Nguyễn Trần Kim Ánh": {
    "class": "Khối 7",
    "classroom": "7A2",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Nguyễn Hoàng Thiên Ân": {
    "class": "Khối 7",
    "classroom": "7A2",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Trương Thị Bảo Châu": {
    "class": "Khối 7",
    "classroom": "7A2",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Lê Thị Kim Cương": {
    "class": "Khối 7",
    "classroom": "7A2",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Lê Kỳ Duyên": {
    "class": "Khối 7",
    "classroom": "7A2",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Trần Tuấn Dương": {
    "class": "Khối 7",
    "classroom": "7A2",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Dương Thành Đạt": {
    "class": "Khối 7",
    "classroom": "7A2",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Nguyễn Trường Giang": {
    "class": "Khối 7",
    "classroom": "7A2",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Nguyễn Phát Tuyết Giao": {
    "class": "Khối 7",
    "classroom": "7A2",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Bùi Thanh Hào": {
    "class": "Khối 7",
    "classroom": "7A2",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Lê Đặng Gia Hào": {
    "class": "Khối 7",
    "classroom": "7A2",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Trần Y Hân": {
    "class": "Khối 7",
    "classroom": "7A2",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Nguyễn Minh Hiếu": {
    "class": "Khối 7",
    "classroom": "7A2",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Hà Gia Huy": {
    "class": "Khối 7",
    "classroom": "7A2",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Kiều Nguyễn Thiên Khải": {
    "class": "Khối 7",
    "classroom": "7A2",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Nguyễn Hoàng Khang": {
    "class": "Khối 7",
    "classroom": "7A2",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Nguyễn Lê Thiên Kiều": {
    "class": "Khối 7",
    "classroom": "7A2",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Tô Phước Lộc": {
    "class": "Khối 7",
    "classroom": "7A2",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Nguyễn Nhật Minh": {
    "class": "Khối 7",
    "classroom": "7A2",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Huỳnh Nguyễn Gia Ngân": {
    "class": "Khối 7",
    "classroom": "7A2",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Bùi Bảo Ngọc": {
    "class": "Khối 7",
    "classroom": "7A2",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Thái Kim Nguyên": {
    "class": "Khối 7",
    "classroom": "7A2",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Trần Ngọc Yến Nhi": {
    "class": "Khối 7",
    "classroom": "7A2",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Nguyễn Thị Quỳnh Như": {
    "class": "Khối 7",
    "classroom": "7A2",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Bùi Việt Pháp": {
    "class": "Khối 7",
    "classroom": "7A2",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Võ Minh Phúc": {
    "class": "Khối 7",
    "classroom": "7A2",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Đỗ Hoàng Nhã Phương": {
    "class": "Khối 7",
    "classroom": "7A2",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Dương Hồng Quyên": {
    "class": "Khối 7",
    "classroom": "7A2",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Phạm Minh Thành": {
    "class": "Khối 7",
    "classroom": "7A2",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Trần Thị Ngọc Thảo": {
    "class": "Khối 7",
    "classroom": "7A2",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Đặng Thị Ánh Thi": {
    "class": "Khối 7",
    "classroom": "7A2",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Nguyễn Gia Thiện": {
    "class": "Khối 7",
    "classroom": "7A2",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Hồ Ngọc Minh Thư": {
    "class": "Khối 7",
    "classroom": "7A2",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Lê Thị Minh Thư": {
    "class": "Khối 7",
    "classroom": "7A2",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Thái Nhật Tiến": {
    "class": "Khối 7",
    "classroom": "7A2",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Phạm Lê Bảo Trâm": {
    "class": "Khối 7",
    "classroom": "7A2",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Nguyễn Ngọc Yến Vy": {
    "class": "Khối 7",
    "classroom": "7A2",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Phạm Nguyễn Tường Vy": {
    "class": "Khối 7",
    "classroom": "7A2",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Trần Ngọc Yến Vy": {
    "class": "Khối 7",
    "classroom": "7A2",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Võ Ngọc Như Ý": {
    "class": "Khối 7",
    "classroom": "7A2",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Huỳnh Phúc An": {
    "class": "Khối 7",
    "classroom": "7A4",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Nguyễn Châu Anh": {
    "class": "Khối 7",
    "classroom": "7A4",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Nguyễn Ngọc Vân Anh": {
    "class": "Khối 7",
    "classroom": "7A4",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Võ Hoàng Anh": {
    "class": "Khối 7",
    "classroom": "7A4",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Đặng Gia Bảo": {
    "class": "Khối 7",
    "classroom": "7A4",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Thái Quốc Bảo": {
    "class": "Khối 7",
    "classroom": "7A4",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Trịnh Thị Hồng Hạnh": {
    "class": "Khối 7",
    "classroom": "7A4",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Trần Thị Ngọc Hoa": {
    "class": "Khối 7",
    "classroom": "7A4",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Nguyễn Quốc Hoài": {
    "class": "Khối 7",
    "classroom": "7A4",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Ngô Quốc Huy": {
    "class": "Khối 7",
    "classroom": "7A4",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Nguyễn Quốc Huy": {
    "class": "Khối 7",
    "classroom": "7A4",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Vũ Nguyễn Hoàng Khang": {
    "class": "Khối 7",
    "classroom": "7A4",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Nguyễn Duy Khánh": {
    "class": "Khối 7",
    "classroom": "7A4",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Võ Thị Ngân Khánh": {
    "class": "Khối 7",
    "classroom": "7A4",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Nguyễn Hoàng Anh Khoa": {
    "class": "Khối 7",
    "classroom": "7A4",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Nguyễn Tuấn Kiệt": {
    "class": "Khối 7",
    "classroom": "7A4",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Lương Thị Thúy Kiều": {
    "class": "Khối 7",
    "classroom": "7A4",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Huỳnh Ngọc Long": {
    "class": "Khối 7",
    "classroom": "7A4",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Nguyễn Minh Luân": {
    "class": "Khối 7",
    "classroom": "7A4",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Nguyễn Kiều Ngân": {
    "class": "Khối 7",
    "classroom": "7A4",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Triệu Xuân Nghi": {
    "class": "Khối 7",
    "classroom": "7A4",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Trần Sỹ Nguyên": {
    "class": "Khối 7",
    "classroom": "7A4",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Nguyễn Thị Kiều Oanh": {
    "class": "Khối 7",
    "classroom": "7A4",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Hồ Thị Yến Phi": {
    "class": "Khối 7",
    "classroom": "7A4",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Nguyễn Hoàng Như Quỳnh": {
    "class": "Khối 7",
    "classroom": "7A4",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Nguyễn Thái Sang": {
    "class": "Khối 7",
    "classroom": "7A4",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Lê Hữu Thành": {
    "class": "Khối 7",
    "classroom": "7A4",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Nguyễn Thị Ngọc Thắm": {
    "class": "Khối 7",
    "classroom": "7A4",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Nguyễn Lạc Thiên": {
    "class": "Khối 7",
    "classroom": "7A4",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Lương Phúc Thịnh": {
    "class": "Khối 7",
    "classroom": "7A4",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Nguyễn Hưng Thịnh": {
    "class": "Khối 7",
    "classroom": "7A4",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Huỳnh Văn Toàn": {
    "class": "Khối 7",
    "classroom": "7A4",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Phạm Thị Ngọc Trâm": {
    "class": "Khối 7",
    "classroom": "7A4",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Nguyễn Thị Ngọc Trân": {
    "class": "Khối 7",
    "classroom": "7A4",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Phạm Thị Diễm Trinh": {
    "class": "Khối 7",
    "classroom": "7A4",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Nguyễn Thị Kim Tuyến": {
    "class": "Khối 7",
    "classroom": "7A4",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Nguyễn Chí Tường": {
    "class": "Khối 7",
    "classroom": "7A4",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Phạm Ngọc Khả Vy": {
    "class": "Khối 7",
    "classroom": "7A4",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Nguyễn Huỳnh Như Ý": {
    "class": "Khối 7",
    "classroom": "7A4",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Nguyễn Thái An": {
    "class": "Khối 7",
    "classroom": "7A7",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Nguyễn Nhất Nhật Anh": {
    "class": "Khối 7",
    "classroom": "7A7",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Nguyễn Hoài Bảo": {
    "class": "Khối 7",
    "classroom": "7A7",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Nguyễn Quốc Gia Bảo": {
    "class": "Khối 7",
    "classroom": "7A7",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Huỳnh Khánh Duyên": {
    "class": "Khối 7",
    "classroom": "7A7",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Châu Gia Hân": {
    "class": "Khối 7",
    "classroom": "7A7",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Trần Ngọc Hiền": {
    "class": "Khối 7",
    "classroom": "7A7",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Lê Hoàng Hiếu": {
    "class": "Khối 7",
    "classroom": "7A7",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Lê Trung Hiếu": {
    "class": "Khối 7",
    "classroom": "7A7",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Trần Cẩm Ngọc Hiếu": {
    "class": "Khối 7",
    "classroom": "7A7",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Lê Huỳnh Minh Hoài": {
    "class": "Khối 7",
    "classroom": "7A7",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Nguyễn Quốc Hoàng": {
    "class": "Khối 7",
    "classroom": "7A7",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Nguyễn Gia Huy": {
    "class": "Khối 7",
    "classroom": "7A7",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Nguyễn Minh Khoa": {
    "class": "Khối 7",
    "classroom": "7A7",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Trần Đăng Khôi": {
    "class": "Khối 7",
    "classroom": "7A7",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Nguyễn Thị Kiều Lam": {
    "class": "Khối 7",
    "classroom": "7A7",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Quảng Phạm Phi Long": {
    "class": "Khối 7",
    "classroom": "7A7",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Đào Lâm Triệu My": {
    "class": "Khối 7",
    "classroom": "7A7",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Nguyễn Lâm Khải Nam": {
    "class": "Khối 7",
    "classroom": "7A7",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Lê Bảo Ngân": {
    "class": "Khối 7",
    "classroom": "7A7",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Trần Huỳnh Phương Ngân": {
    "class": "Khối 7",
    "classroom": "7A7",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Nguyễn Thái Nguyên": {
    "class": "Khối 7",
    "classroom": "7A7",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Nguyễn Trần Phúc Nguyên": {
    "class": "Khối 7",
    "classroom": "7A7",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Lê Thị Quỳnh Như": {
    "class": "Khối 7",
    "classroom": "7A7",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Cao Hoàng Phát": {
    "class": "Khối 7",
    "classroom": "7A7",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Nguyễn Thiên Định Quốc": {
    "class": "Khối 7",
    "classroom": "7A7",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Bùi Tấn Sang": {
    "class": "Khối 7",
    "classroom": "7A7",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Trần Thanh Thiên": {
    "class": "Khối 7",
    "classroom": "7A7",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Huỳnh Gia Thịnh": {
    "class": "Khối 7",
    "classroom": "7A7",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Lê Hữu Minh Thuận": {
    "class": "Khối 7",
    "classroom": "7A7",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Hồ Huỳnh Minh Thùy": {
    "class": "Khối 7",
    "classroom": "7A7",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Lê Anh Thư": {
    "class": "Khối 7",
    "classroom": "7A7",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Nguyễn Cẩm Tiên": {
    "class": "Khối 7",
    "classroom": "7A7",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Nguyễn Dương Thùy Trang": {
    "class": "Khối 7",
    "classroom": "7A7",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Nguyễn Trần Ngọc Nhã Trân": {
    "class": "Khối 7",
    "classroom": "7A7",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Bùi Nhựt Trí": {
    "class": "Khối 7",
    "classroom": "7A7",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Hồ Thanh Trúc": {
    "class": "Khối 7",
    "classroom": "7A7",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Lê Nguyễn Thu Tuyền": {
    "class": "Khối 7",
    "classroom": "7A7",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Phạm Thị Tường Vi": {
    "class": "Khối 7",
    "classroom": "7A7",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Nguyễn Tường Vy": {
    "class": "Khối 7",
    "classroom": "7A7",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Phan Thị Như Ý": {
    "class": "Khối 7",
    "classroom": "7A7",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Võ Trường An": {
    "class": "Khối 9",
    "classroom": "9A4",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Huỳnh Yến Anh": {
    "class": "Khối 9",
    "classroom": "9A4",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Nguyễn Duy Anh": {
    "class": "Khối 9",
    "classroom": "9A4",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Nguyễn Thị Kim Anh": {
    "class": "Khối 9",
    "classroom": "9A4",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Nguyễn Thị Xuân Đào": {
    "class": "Khối 9",
    "classroom": "9A4",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Nguyễn Minh Đăng": {
    "class": "Khối 9",
    "classroom": "9A4",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Nguyễn Thị Hoa Đăng": {
    "class": "Khối 9",
    "classroom": "9A4",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Trần Văn Huỳnh Em": {
    "class": "Khối 9",
    "classroom": "9A4",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Huỳnh Ngọc Gia Hân": {
    "class": "Khối 9",
    "classroom": "9A4",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Nguyễn Văn Gia Huy": {
    "class": "Khối 9",
    "classroom": "9A4",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Bùi Thị An Huyền": {
    "class": "Khối 9",
    "classroom": "9A4",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Nguyễn Hoàng Khá": {
    "class": "Khối 9",
    "classroom": "9A4",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Hồ Minh Khánh": {
    "class": "Khối 9",
    "classroom": "9A4",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Lê Phạm Đăng Khôi": {
    "class": "Khối 9",
    "classroom": "9A4",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Cao Quốc Kiên": {
    "class": "Khối 9",
    "classroom": "9A4",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Nguyễn Lý Anh Kỳ": {
    "class": "Khối 9",
    "classroom": "9A4",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Ngô Lê Gia Lai": {
    "class": "Khối 9",
    "classroom": "9A4",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Nguyễn Thị Thảo My": {
    "class": "Khối 9",
    "classroom": "9A4",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Nguyễn Lê Ngọc Ngân": {
    "class": "Khối 9",
    "classroom": "9A4",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Nguyễn Hiếu Nghĩa": {
    "class": "Khối 9",
    "classroom": "9A4",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Lương Thị Như Ngọc": {
    "class": "Khối 9",
    "classroom": "9A4",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Nguyễn Tô Hồng Ngọc": {
    "class": "Khối 9",
    "classroom": "9A4",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Trần Bùi Như Ngọc": {
    "class": "Khối 9",
    "classroom": "9A4",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Võ Nguyễn Bảo Ngọc": {
    "class": "Khối 9",
    "classroom": "9A4",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Lê Nhất Nguyễn": {
    "class": "Khối 9",
    "classroom": "9A4",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Lê Khã Nhu": {
    "class": "Khối 9",
    "classroom": "9A4",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Huỳnh Đặng Thị Thanh Như": {
    "class": "Khối 9",
    "classroom": "9A4",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Phạm Thị Quỳnh Như": {
    "class": "Khối 9",
    "classroom": "9A4",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Trần Phạm Ngọc Như": {
    "class": "Khối 9",
    "classroom": "9A4",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Nguyễn Duy Phải": {
    "class": "Khối 9",
    "classroom": "9A4",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Bùi Minh Phúc": {
    "class": "Khối 9",
    "classroom": "9A4",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Nguyễn Thanh Sang": {
    "class": "Khối 9",
    "classroom": "9A4",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Nguyễn Chí Tài": {
    "class": "Khối 9",
    "classroom": "9A4",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Lê Văn Thuận": {
    "class": "Khối 9",
    "classroom": "9A4",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Nguyễn Hòa Thuận": {
    "class": "Khối 9",
    "classroom": "9A4",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Quang Lê Bảo Tín": {
    "class": "Khối 9",
    "classroom": "9A4",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Nguyễn Hoàng Phương Vy": {
    "class": "Khối 9",
    "classroom": "9A4",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Trần Thị Tường Vy": {
    "class": "Khối 9",
    "classroom": "9A4",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Phạm Đặng Kim Xuân": {
    "class": "Khối 9",
    "classroom": "9A4",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Trần Bảo Gia An": {
    "class": "Khối 9",
    "classroom": "9A6",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Lê Nguyễn Hoàng Anh": {
    "class": "Khối 9",
    "classroom": "9A6",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Trần Thị Ngọc Hân": {
    "class": "Khối 9",
    "classroom": "9A6",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Đặng Văn Hiếu Hiện": {
    "class": "Khối 9",
    "classroom": "9A6",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Nguyễn Nhựt Huy": {
    "class": "Khối 9",
    "classroom": "9A6",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Trương Gia Huy": {
    "class": "Khối 9",
    "classroom": "9A6",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Nguyễn Văn Khá": {
    "class": "Khối 9",
    "classroom": "9A6",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Nguyễn Tuấn Khải": {
    "class": "Khối 9",
    "classroom": "9A6",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Lê Chấn Khang": {
    "class": "Khối 9",
    "classroom": "9A6",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Lê Tuấn Khang": {
    "class": "Khối 9",
    "classroom": "9A6",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Lê Ngân Khánh": {
    "class": "Khối 9",
    "classroom": "9A6",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Hồ Đăng Khoa": {
    "class": "Khối 9",
    "classroom": "9A6",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Lê Tấn Khôi": {
    "class": "Khối 9",
    "classroom": "9A6",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Lê Minh Hào Kiệt": {
    "class": "Khối 9",
    "classroom": "9A6",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Nguyễn Văn Hoài Linh": {
    "class": "Khối 9",
    "classroom": "9A6",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Nguyễn Thành Lương": {
    "class": "Khối 9",
    "classroom": "9A6",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Lê Thị Trúc Ly": {
    "class": "Khối 9",
    "classroom": "9A6",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Nguyễn Thị Kim Ngân": {
    "class": "Khối 9",
    "classroom": "9A6",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Nguyễn Hoàng Nghĩa": {
    "class": "Khối 9",
    "classroom": "9A6",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Huỳnh Thị Như Ngọc": {
    "class": "Khối 9",
    "classroom": "9A6",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Trần Trúc Nguyên": {
    "class": "Khối 9",
    "classroom": "9A6",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Ngô Văn Nhiều": {
    "class": "Khối 9",
    "classroom": "9A6",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Phạm Bội Nhữ": {
    "class": "Khối 9",
    "classroom": "9A6",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Châu Thành Phát": {
    "class": "Khối 9",
    "classroom": "9A6",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Nguyễn Tấn Phát": {
    "class": "Khối 9",
    "classroom": "9A6",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Nguyễn Thị Kiều Phương": {
    "class": "Khối 9",
    "classroom": "9A6",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Trần Văn Sang": {
    "class": "Khối 9",
    "classroom": "9A6",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Lê Thành Tài": {
    "class": "Khối 9",
    "classroom": "9A6",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Lê Minh Thắng": {
    "class": "Khối 9",
    "classroom": "9A6",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Thái Minh Thiện": {
    "class": "Khối 9",
    "classroom": "9A6",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Lương Quốc Thịnh": {
    "class": "Khối 9",
    "classroom": "9A6",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Nguyễn Trường Thịnh": {
    "class": "Khối 9",
    "classroom": "9A6",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Nguyễn Hoàng Thông": {
    "class": "Khối 9",
    "classroom": "9A6",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Mai Anh Thơ": {
    "class": "Khối 9",
    "classroom": "9A6",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Lê Đức Trọng": {
    "class": "Khối 9",
    "classroom": "9A6",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Nguyễn Thị Kim Tươi": {
    "class": "Khối 9",
    "classroom": "9A6",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Ngô Thị Thảo Vi": {
    "class": "Khối 9",
    "classroom": "9A6",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Trương Nguyễn Ngọc Vy": {
    "class": "Khối 9",
    "classroom": "9A6",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Phạm Ngọc Ý": {
    "class": "Khối 9",
    "classroom": "9A6",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  },
  "Trần Ngọc Yên": {
    "class": "Khối 9",
    "classroom": "9A6",
    "pass": "9c3a4ac0d8b5cf0eca4248a9c616bd9a51db8017761cb83f76ea12d1af02beba",
    "_hashed": true,
    "_defaultPass": true
  }
};
  const listArr = [
  {
    "stt": 1,
    "name": "Nguyễn Thanh An",
    "class": "Khối 7",
    "classroom": "7A2",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 2,
    "name": "Huỳnh Ngọc Kim Anh",
    "class": "Khối 7",
    "classroom": "7A2",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 3,
    "name": "Lê Nguyễn Thái Anh",
    "class": "Khối 7",
    "classroom": "7A2",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 4,
    "name": "Phạm Nguyên Anh",
    "class": "Khối 7",
    "classroom": "7A2",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 5,
    "name": "Nguyễn Trần Kim Ánh",
    "class": "Khối 7",
    "classroom": "7A2",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 6,
    "name": "Nguyễn Hoàng Thiên Ân",
    "class": "Khối 7",
    "classroom": "7A2",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 7,
    "name": "Trương Thị Bảo Châu",
    "class": "Khối 7",
    "classroom": "7A2",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 8,
    "name": "Lê Thị Kim Cương",
    "class": "Khối 7",
    "classroom": "7A2",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 9,
    "name": "Lê Kỳ Duyên",
    "class": "Khối 7",
    "classroom": "7A2",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 10,
    "name": "Trần Tuấn Dương",
    "class": "Khối 7",
    "classroom": "7A2",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 11,
    "name": "Dương Thành Đạt",
    "class": "Khối 7",
    "classroom": "7A2",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 12,
    "name": "Nguyễn Trường Giang",
    "class": "Khối 7",
    "classroom": "7A2",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 13,
    "name": "Nguyễn Phát Tuyết Giao",
    "class": "Khối 7",
    "classroom": "7A2",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 14,
    "name": "Bùi Thanh Hào",
    "class": "Khối 7",
    "classroom": "7A2",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 15,
    "name": "Lê Đặng Gia Hào",
    "class": "Khối 7",
    "classroom": "7A2",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 16,
    "name": "Trần Y Hân",
    "class": "Khối 7",
    "classroom": "7A2",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 17,
    "name": "Nguyễn Minh Hiếu",
    "class": "Khối 7",
    "classroom": "7A2",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 18,
    "name": "Hà Gia Huy",
    "class": "Khối 7",
    "classroom": "7A2",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 19,
    "name": "Kiều Nguyễn Thiên Khải",
    "class": "Khối 7",
    "classroom": "7A2",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 20,
    "name": "Nguyễn Hoàng Khang",
    "class": "Khối 7",
    "classroom": "7A2",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 21,
    "name": "Nguyễn Lê Thiên Kiều",
    "class": "Khối 7",
    "classroom": "7A2",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 22,
    "name": "Tô Phước Lộc",
    "class": "Khối 7",
    "classroom": "7A2",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 23,
    "name": "Nguyễn Nhật Minh",
    "class": "Khối 7",
    "classroom": "7A2",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 24,
    "name": "Huỳnh Nguyễn Gia Ngân",
    "class": "Khối 7",
    "classroom": "7A2",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 25,
    "name": "Bùi Bảo Ngọc",
    "class": "Khối 7",
    "classroom": "7A2",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 26,
    "name": "Thái Kim Nguyên",
    "class": "Khối 7",
    "classroom": "7A2",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 27,
    "name": "Trần Ngọc Yến Nhi",
    "class": "Khối 7",
    "classroom": "7A2",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 28,
    "name": "Nguyễn Thị Quỳnh Như",
    "class": "Khối 7",
    "classroom": "7A2",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 29,
    "name": "Bùi Việt Pháp",
    "class": "Khối 7",
    "classroom": "7A2",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 30,
    "name": "Võ Minh Phúc",
    "class": "Khối 7",
    "classroom": "7A2",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 31,
    "name": "Đỗ Hoàng Nhã Phương",
    "class": "Khối 7",
    "classroom": "7A2",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 32,
    "name": "Dương Hồng Quyên",
    "class": "Khối 7",
    "classroom": "7A2",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 33,
    "name": "Phạm Minh Thành",
    "class": "Khối 7",
    "classroom": "7A2",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 34,
    "name": "Trần Thị Ngọc Thảo",
    "class": "Khối 7",
    "classroom": "7A2",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 35,
    "name": "Đặng Thị Ánh Thi",
    "class": "Khối 7",
    "classroom": "7A2",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 36,
    "name": "Nguyễn Gia Thiện",
    "class": "Khối 7",
    "classroom": "7A2",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 37,
    "name": "Hồ Ngọc Minh Thư",
    "class": "Khối 7",
    "classroom": "7A2",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 38,
    "name": "Lê Thị Minh Thư",
    "class": "Khối 7",
    "classroom": "7A2",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 39,
    "name": "Thái Nhật Tiến",
    "class": "Khối 7",
    "classroom": "7A2",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 40,
    "name": "Phạm Lê Bảo Trâm",
    "class": "Khối 7",
    "classroom": "7A2",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 41,
    "name": "Nguyễn Ngọc Yến Vy",
    "class": "Khối 7",
    "classroom": "7A2",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 42,
    "name": "Phạm Nguyễn Tường Vy",
    "class": "Khối 7",
    "classroom": "7A2",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 43,
    "name": "Trần Ngọc Yến Vy",
    "class": "Khối 7",
    "classroom": "7A2",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 44,
    "name": "Võ Ngọc Như Ý",
    "class": "Khối 7",
    "classroom": "7A2",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 1,
    "name": "Huỳnh Phúc An",
    "class": "Khối 7",
    "classroom": "7A4",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 2,
    "name": "Nguyễn Châu Anh",
    "class": "Khối 7",
    "classroom": "7A4",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 3,
    "name": "Nguyễn Ngọc Vân Anh",
    "class": "Khối 7",
    "classroom": "7A4",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 4,
    "name": "Võ Hoàng Anh",
    "class": "Khối 7",
    "classroom": "7A4",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 5,
    "name": "Đặng Gia Bảo",
    "class": "Khối 7",
    "classroom": "7A4",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 6,
    "name": "Thái Quốc Bảo",
    "class": "Khối 7",
    "classroom": "7A4",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 7,
    "name": "Trịnh Thị Hồng Hạnh",
    "class": "Khối 7",
    "classroom": "7A4",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 8,
    "name": "Trần Thị Ngọc Hoa",
    "class": "Khối 7",
    "classroom": "7A4",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 9,
    "name": "Nguyễn Quốc Hoài",
    "class": "Khối 7",
    "classroom": "7A4",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 10,
    "name": "Ngô Quốc Huy",
    "class": "Khối 7",
    "classroom": "7A4",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 11,
    "name": "Nguyễn Quốc Huy",
    "class": "Khối 7",
    "classroom": "7A4",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 12,
    "name": "Vũ Nguyễn Hoàng Khang",
    "class": "Khối 7",
    "classroom": "7A4",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 13,
    "name": "Nguyễn Duy Khánh",
    "class": "Khối 7",
    "classroom": "7A4",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 14,
    "name": "Võ Thị Ngân Khánh",
    "class": "Khối 7",
    "classroom": "7A4",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 15,
    "name": "Nguyễn Hoàng Anh Khoa",
    "class": "Khối 7",
    "classroom": "7A4",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 16,
    "name": "Nguyễn Tuấn Kiệt",
    "class": "Khối 7",
    "classroom": "7A4",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 17,
    "name": "Lương Thị Thúy Kiều",
    "class": "Khối 7",
    "classroom": "7A4",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 18,
    "name": "Huỳnh Ngọc Long",
    "class": "Khối 7",
    "classroom": "7A4",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 19,
    "name": "Nguyễn Minh Luân",
    "class": "Khối 7",
    "classroom": "7A4",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 20,
    "name": "Nguyễn Kiều Ngân",
    "class": "Khối 7",
    "classroom": "7A4",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 21,
    "name": "Triệu Xuân Nghi",
    "class": "Khối 7",
    "classroom": "7A4",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 22,
    "name": "Trần Sỹ Nguyên",
    "class": "Khối 7",
    "classroom": "7A4",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 23,
    "name": "Nguyễn Thị Kiều Oanh",
    "class": "Khối 7",
    "classroom": "7A4",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 24,
    "name": "Hồ Thị Yến Phi",
    "class": "Khối 7",
    "classroom": "7A4",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 25,
    "name": "Nguyễn Hoàng Như Quỳnh",
    "class": "Khối 7",
    "classroom": "7A4",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 26,
    "name": "Nguyễn Thái Sang",
    "class": "Khối 7",
    "classroom": "7A4",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 27,
    "name": "Lê Hữu Thành",
    "class": "Khối 7",
    "classroom": "7A4",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 28,
    "name": "Nguyễn Thị Ngọc Thắm",
    "class": "Khối 7",
    "classroom": "7A4",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 29,
    "name": "Nguyễn Lạc Thiên",
    "class": "Khối 7",
    "classroom": "7A4",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 30,
    "name": "Lương Phúc Thịnh",
    "class": "Khối 7",
    "classroom": "7A4",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 31,
    "name": "Nguyễn Hưng Thịnh",
    "class": "Khối 7",
    "classroom": "7A4",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 32,
    "name": "Huỳnh Văn Toàn",
    "class": "Khối 7",
    "classroom": "7A4",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 33,
    "name": "Phạm Thị Ngọc Trâm",
    "class": "Khối 7",
    "classroom": "7A4",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 34,
    "name": "Nguyễn Thị Ngọc Trân",
    "class": "Khối 7",
    "classroom": "7A4",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 35,
    "name": "Phạm Thị Diễm Trinh",
    "class": "Khối 7",
    "classroom": "7A4",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 36,
    "name": "Nguyễn Thị Kim Tuyến",
    "class": "Khối 7",
    "classroom": "7A4",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 37,
    "name": "Nguyễn Chí Tường",
    "class": "Khối 7",
    "classroom": "7A4",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 38,
    "name": "Phạm Ngọc Khả Vy",
    "class": "Khối 7",
    "classroom": "7A4",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 39,
    "name": "Nguyễn Huỳnh Như Ý",
    "class": "Khối 7",
    "classroom": "7A4",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 1,
    "name": "Nguyễn Thái An",
    "class": "Khối 7",
    "classroom": "7A7",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 2,
    "name": "Nguyễn Nhất Nhật Anh",
    "class": "Khối 7",
    "classroom": "7A7",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 3,
    "name": "Nguyễn Hoài Bảo",
    "class": "Khối 7",
    "classroom": "7A7",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 4,
    "name": "Nguyễn Quốc Gia Bảo",
    "class": "Khối 7",
    "classroom": "7A7",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 5,
    "name": "Huỳnh Khánh Duyên",
    "class": "Khối 7",
    "classroom": "7A7",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 6,
    "name": "Châu Gia Hân",
    "class": "Khối 7",
    "classroom": "7A7",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 7,
    "name": "Trần Ngọc Hiền",
    "class": "Khối 7",
    "classroom": "7A7",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 8,
    "name": "Lê Hoàng Hiếu",
    "class": "Khối 7",
    "classroom": "7A7",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 9,
    "name": "Lê Trung Hiếu",
    "class": "Khối 7",
    "classroom": "7A7",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 10,
    "name": "Trần Cẩm Ngọc Hiếu",
    "class": "Khối 7",
    "classroom": "7A7",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 11,
    "name": "Lê Huỳnh Minh Hoài",
    "class": "Khối 7",
    "classroom": "7A7",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 12,
    "name": "Nguyễn Quốc Hoàng",
    "class": "Khối 7",
    "classroom": "7A7",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 13,
    "name": "Nguyễn Gia Huy",
    "class": "Khối 7",
    "classroom": "7A7",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 14,
    "name": "Nguyễn Minh Khoa",
    "class": "Khối 7",
    "classroom": "7A7",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 15,
    "name": "Trần Đăng Khôi",
    "class": "Khối 7",
    "classroom": "7A7",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 16,
    "name": "Nguyễn Thị Kiều Lam",
    "class": "Khối 7",
    "classroom": "7A7",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 17,
    "name": "Quảng Phạm Phi Long",
    "class": "Khối 7",
    "classroom": "7A7",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 18,
    "name": "Đào Lâm Triệu My",
    "class": "Khối 7",
    "classroom": "7A7",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 19,
    "name": "Nguyễn Lâm Khải Nam",
    "class": "Khối 7",
    "classroom": "7A7",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 20,
    "name": "Lê Bảo Ngân",
    "class": "Khối 7",
    "classroom": "7A7",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 21,
    "name": "Trần Huỳnh Phương Ngân",
    "class": "Khối 7",
    "classroom": "7A7",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 22,
    "name": "Nguyễn Thái Nguyên",
    "class": "Khối 7",
    "classroom": "7A7",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 23,
    "name": "Nguyễn Trần Phúc Nguyên",
    "class": "Khối 7",
    "classroom": "7A7",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 24,
    "name": "Lê Thị Quỳnh Như",
    "class": "Khối 7",
    "classroom": "7A7",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 25,
    "name": "Cao Hoàng Phát",
    "class": "Khối 7",
    "classroom": "7A7",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 26,
    "name": "Nguyễn Thiên Định Quốc",
    "class": "Khối 7",
    "classroom": "7A7",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 27,
    "name": "Bùi Tấn Sang",
    "class": "Khối 7",
    "classroom": "7A7",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 28,
    "name": "Trần Thanh Thiên",
    "class": "Khối 7",
    "classroom": "7A7",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 29,
    "name": "Huỳnh Gia Thịnh",
    "class": "Khối 7",
    "classroom": "7A7",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 30,
    "name": "Lê Hữu Minh Thuận",
    "class": "Khối 7",
    "classroom": "7A7",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 31,
    "name": "Hồ Huỳnh Minh Thùy",
    "class": "Khối 7",
    "classroom": "7A7",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 32,
    "name": "Lê Anh Thư",
    "class": "Khối 7",
    "classroom": "7A7",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 33,
    "name": "Nguyễn Cẩm Tiên",
    "class": "Khối 7",
    "classroom": "7A7",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 34,
    "name": "Nguyễn Dương Thùy Trang",
    "class": "Khối 7",
    "classroom": "7A7",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 35,
    "name": "Nguyễn Trần Ngọc Nhã Trân",
    "class": "Khối 7",
    "classroom": "7A7",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 36,
    "name": "Bùi Nhựt Trí",
    "class": "Khối 7",
    "classroom": "7A7",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 37,
    "name": "Hồ Thanh Trúc",
    "class": "Khối 7",
    "classroom": "7A7",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 38,
    "name": "Lê Nguyễn Thu Tuyền",
    "class": "Khối 7",
    "classroom": "7A7",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 39,
    "name": "Phạm Thị Tường Vi",
    "class": "Khối 7",
    "classroom": "7A7",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 40,
    "name": "Nguyễn Tường Vy",
    "class": "Khối 7",
    "classroom": "7A7",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 41,
    "name": "Phan Thị Như Ý",
    "class": "Khối 7",
    "classroom": "7A7",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 1,
    "name": "Võ Trường An",
    "class": "Khối 9",
    "classroom": "9A4",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 2,
    "name": "Huỳnh Yến Anh",
    "class": "Khối 9",
    "classroom": "9A4",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 3,
    "name": "Nguyễn Duy Anh",
    "class": "Khối 9",
    "classroom": "9A4",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 4,
    "name": "Nguyễn Thị Kim Anh",
    "class": "Khối 9",
    "classroom": "9A4",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 5,
    "name": "Nguyễn Thị Xuân Đào",
    "class": "Khối 9",
    "classroom": "9A4",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 6,
    "name": "Nguyễn Minh Đăng",
    "class": "Khối 9",
    "classroom": "9A4",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 7,
    "name": "Nguyễn Thị Hoa Đăng",
    "class": "Khối 9",
    "classroom": "9A4",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 8,
    "name": "Trần Văn Huỳnh Em",
    "class": "Khối 9",
    "classroom": "9A4",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 9,
    "name": "Huỳnh Ngọc Gia Hân",
    "class": "Khối 9",
    "classroom": "9A4",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 10,
    "name": "Nguyễn Văn Gia Huy",
    "class": "Khối 9",
    "classroom": "9A4",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 11,
    "name": "Bùi Thị An Huyền",
    "class": "Khối 9",
    "classroom": "9A4",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 12,
    "name": "Nguyễn Hoàng Khá",
    "class": "Khối 9",
    "classroom": "9A4",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 13,
    "name": "Hồ Minh Khánh",
    "class": "Khối 9",
    "classroom": "9A4",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 14,
    "name": "Lê Phạm Đăng Khôi",
    "class": "Khối 9",
    "classroom": "9A4",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 15,
    "name": "Cao Quốc Kiên",
    "class": "Khối 9",
    "classroom": "9A4",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 16,
    "name": "Nguyễn Lý Anh Kỳ",
    "class": "Khối 9",
    "classroom": "9A4",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 17,
    "name": "Ngô Lê Gia Lai",
    "class": "Khối 9",
    "classroom": "9A4",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 18,
    "name": "Nguyễn Thị Thảo My",
    "class": "Khối 9",
    "classroom": "9A4",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 19,
    "name": "Nguyễn Lê Ngọc Ngân",
    "class": "Khối 9",
    "classroom": "9A4",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 20,
    "name": "Nguyễn Hiếu Nghĩa",
    "class": "Khối 9",
    "classroom": "9A4",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 21,
    "name": "Lương Thị Như Ngọc",
    "class": "Khối 9",
    "classroom": "9A4",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 22,
    "name": "Nguyễn Tô Hồng Ngọc",
    "class": "Khối 9",
    "classroom": "9A4",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 23,
    "name": "Trần Bùi Như Ngọc",
    "class": "Khối 9",
    "classroom": "9A4",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 24,
    "name": "Võ Nguyễn Bảo Ngọc",
    "class": "Khối 9",
    "classroom": "9A4",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 25,
    "name": "Lê Nhất Nguyễn",
    "class": "Khối 9",
    "classroom": "9A4",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 26,
    "name": "Lê Khã Nhu",
    "class": "Khối 9",
    "classroom": "9A4",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 27,
    "name": "Huỳnh Đặng Thị Thanh Như",
    "class": "Khối 9",
    "classroom": "9A4",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 28,
    "name": "Phạm Thị Quỳnh Như",
    "class": "Khối 9",
    "classroom": "9A4",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 29,
    "name": "Trần Phạm Ngọc Như",
    "class": "Khối 9",
    "classroom": "9A4",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 30,
    "name": "Nguyễn Duy Phải",
    "class": "Khối 9",
    "classroom": "9A4",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 31,
    "name": "Bùi Minh Phúc",
    "class": "Khối 9",
    "classroom": "9A4",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 32,
    "name": "Nguyễn Thanh Sang",
    "class": "Khối 9",
    "classroom": "9A4",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 33,
    "name": "Nguyễn Chí Tài",
    "class": "Khối 9",
    "classroom": "9A4",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 34,
    "name": "Lê Văn Thuận",
    "class": "Khối 9",
    "classroom": "9A4",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 35,
    "name": "Nguyễn Hòa Thuận",
    "class": "Khối 9",
    "classroom": "9A4",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 36,
    "name": "Quang Lê Bảo Tín",
    "class": "Khối 9",
    "classroom": "9A4",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 37,
    "name": "Nguyễn Hoàng Phương Vy",
    "class": "Khối 9",
    "classroom": "9A4",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 38,
    "name": "Trần Thị Tường Vy",
    "class": "Khối 9",
    "classroom": "9A4",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 39,
    "name": "Phạm Đặng Kim Xuân",
    "class": "Khối 9",
    "classroom": "9A4",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 1,
    "name": "Trần Bảo Gia An",
    "class": "Khối 9",
    "classroom": "9A6",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 2,
    "name": "Lê Nguyễn Hoàng Anh",
    "class": "Khối 9",
    "classroom": "9A6",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 3,
    "name": "Trần Thị Ngọc Hân",
    "class": "Khối 9",
    "classroom": "9A6",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 4,
    "name": "Đặng Văn Hiếu Hiện",
    "class": "Khối 9",
    "classroom": "9A6",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 5,
    "name": "Nguyễn Nhựt Huy",
    "class": "Khối 9",
    "classroom": "9A6",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 6,
    "name": "Trương Gia Huy",
    "class": "Khối 9",
    "classroom": "9A6",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 7,
    "name": "Nguyễn Văn Khá",
    "class": "Khối 9",
    "classroom": "9A6",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 8,
    "name": "Nguyễn Tuấn Khải",
    "class": "Khối 9",
    "classroom": "9A6",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 9,
    "name": "Lê Chấn Khang",
    "class": "Khối 9",
    "classroom": "9A6",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 10,
    "name": "Lê Tuấn Khang",
    "class": "Khối 9",
    "classroom": "9A6",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 11,
    "name": "Lê Ngân Khánh",
    "class": "Khối 9",
    "classroom": "9A6",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 12,
    "name": "Hồ Đăng Khoa",
    "class": "Khối 9",
    "classroom": "9A6",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 13,
    "name": "Lê Tấn Khôi",
    "class": "Khối 9",
    "classroom": "9A6",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 14,
    "name": "Lê Minh Hào Kiệt",
    "class": "Khối 9",
    "classroom": "9A6",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 15,
    "name": "Nguyễn Văn Hoài Linh",
    "class": "Khối 9",
    "classroom": "9A6",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 16,
    "name": "Nguyễn Thành Lương",
    "class": "Khối 9",
    "classroom": "9A6",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 17,
    "name": "Lê Thị Trúc Ly",
    "class": "Khối 9",
    "classroom": "9A6",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 18,
    "name": "Nguyễn Thị Kim Ngân",
    "class": "Khối 9",
    "classroom": "9A6",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 19,
    "name": "Nguyễn Hoàng Nghĩa",
    "class": "Khối 9",
    "classroom": "9A6",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 20,
    "name": "Huỳnh Thị Như Ngọc",
    "class": "Khối 9",
    "classroom": "9A6",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 21,
    "name": "Trần Trúc Nguyên",
    "class": "Khối 9",
    "classroom": "9A6",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 22,
    "name": "Ngô Văn Nhiều",
    "class": "Khối 9",
    "classroom": "9A6",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 23,
    "name": "Phạm Bội Nhữ",
    "class": "Khối 9",
    "classroom": "9A6",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 24,
    "name": "Châu Thành Phát",
    "class": "Khối 9",
    "classroom": "9A6",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 25,
    "name": "Nguyễn Tấn Phát",
    "class": "Khối 9",
    "classroom": "9A6",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 26,
    "name": "Nguyễn Thị Kiều Phương",
    "class": "Khối 9",
    "classroom": "9A6",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 27,
    "name": "Trần Văn Sang",
    "class": "Khối 9",
    "classroom": "9A6",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 28,
    "name": "Lê Thành Tài",
    "class": "Khối 9",
    "classroom": "9A6",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 29,
    "name": "Lê Minh Thắng",
    "class": "Khối 9",
    "classroom": "9A6",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 30,
    "name": "Thái Minh Thiện",
    "class": "Khối 9",
    "classroom": "9A6",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 31,
    "name": "Lương Quốc Thịnh",
    "class": "Khối 9",
    "classroom": "9A6",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 32,
    "name": "Nguyễn Trường Thịnh",
    "class": "Khối 9",
    "classroom": "9A6",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 33,
    "name": "Nguyễn Hoàng Thông",
    "class": "Khối 9",
    "classroom": "9A6",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 34,
    "name": "Mai Anh Thơ",
    "class": "Khối 9",
    "classroom": "9A6",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 35,
    "name": "Lê Đức Trọng",
    "class": "Khối 9",
    "classroom": "9A6",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 36,
    "name": "Nguyễn Thị Kim Tươi",
    "class": "Khối 9",
    "classroom": "9A6",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 37,
    "name": "Ngô Thị Thảo Vi",
    "class": "Khối 9",
    "classroom": "9A6",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 38,
    "name": "Trương Nguyễn Ngọc Vy",
    "class": "Khối 9",
    "classroom": "9A6",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 39,
    "name": "Phạm Ngọc Ý",
    "class": "Khối 9",
    "classroom": "9A6",
    "exp": 0,
    "coin": 50
  },
  {
    "stt": 40,
    "name": "Trần Ngọc Yên",
    "class": "Khối 9",
    "classroom": "9A6",
    "exp": 0,
    "coin": 50
  }
];

  window.HERO_DANH_SACH_CHUAN_USERS = usersObj;
  window.HERO_DANH_SACH_CHUAN_LIST = listArr;
  window.HERO_DANH_SACH_LOP = ['7A2', '7A4', '7A7', '9A4', '9A6'];

  window.layHocSinhTheoLop = function(tenLop) {
    if (!tenLop || tenLop === 'ALL') return listArr;
    const cleanLop = String(tenLop).trim().toUpperCase();
    return listArr.filter(hs => String(hs.classroom).trim().toUpperCase() === cleanLop);
  };

  window.khoiPhucDanhSachHocSinhChuan = async function() {
    try {
      // Helper chuẩn hóa tên (giống logic tombstone của firebase-sync)
      var _tenChuanHoa = function(s) {
        return String(s || '').replace(/[\u00A0\u200B\uFEFF]/g, ' ').trim().replace(/\s+/g, ' ').normalize('NFC').toLowerCase();
      };

      // 1. Thu thập toàn bộ các tài khoản cũ/thừa không thuộc 203 học sinh chuẩn để đưa vào bia mộ
      var curUsers = {};
      try { curUsers = JSON.parse(localStorage.getItem('math_hero_users_v2') || '{}'); } catch(e) {}
      var dsDaXoa = [];
      try { dsDaXoa = JSON.parse(localStorage.getItem('danh_sach_hs_da_xoa') || '[]'); } catch(e) {}
      if (!Array.isArray(dsDaXoa)) dsDaXoa = [];
      var setDaXoaRaw = new Set(dsDaXoa.map(_tenChuanHoa));

      var setChuan = new Set(Object.keys(usersObj).map(function(n) { return _tenChuanHoa(n); }));
      var dsXoaThem = [];
      Object.keys(curUsers).forEach(function(oldName) {
        if (!setChuan.has(_tenChuanHoa(oldName))) {
          dsXoaThem.push(oldName);
          var norm = _tenChuanHoa(oldName);
          if (!setDaXoaRaw.has(norm)) {
            dsDaXoa.push(oldName);
            setDaXoaRaw.add(norm);
          }
        }
      });

      // 2. Thiết lập đúng 203 học sinh chuẩn, nhưng NHỚ LOẠI BỎ những cái đã nằm trong bia mộ (đã bị thầy xóa)
      //    → KHÔNG hồi sinh tài khoản đã bị xóa!
      var usersFinal = {};
      Object.keys(usersObj).forEach(function(tenChuan) {
        if (!setDaXoaRaw.has(_tenChuanHoa(tenChuan))) {
          usersFinal[tenChuan] = usersObj[tenChuan];
        }
      });
      localStorage.setItem('math_hero_users_v2', JSON.stringify(usersFinal));
      // ⚠️ Bảo toàn bia mộ hiện có, KHÔNG BAO GIỜ reset lại thành mảng rỗng!
      localStorage.setItem('danh_sach_hs_da_xoa', JSON.stringify(dsDaXoa));
      
      // [PHƯƠNG ÁN C-B] Đọc nhật ký đăng nhập → phân loại học sinh nào CHƯA TỪNG ĐĂNG NHẬP
      var setDaDangNhapRaw = {};
      try {
        var nkDangNhap = JSON.parse(localStorage.getItem('nhat_ky_dang_nhap') || '[]');
        if (Array.isArray(nkDangNhap)) {
          nkDangNhap.forEach(function(item) {
            if (item && item.name) setDaDangNhapRaw[_tenChuanHoa(item.name)] = true;
          });
        }
      } catch(e) {}

      // Khởi tạo / Reset điểm mặc định cho 203 học sinh
      listArr.forEach(function(hs) {
        if (!usersFinal[hs.name]) return; // bỏ qua những cái đã bị xóa trong bia mộ
        var tenChuan = _tenChuanHoa(hs.name);
        var chuaTungDangNhap = !setDaDangNhapRaw[tenChuan];
        // [C-B] Nếu học sinh CHƯA TỪNG đăng nhập lần nào → FORCE reset về 0 / 50
        //       (loại bỏ "điểm ma cũ" còn sót từ Cloud/trước bản vá)
        if (chuaTungDangNhap) {
          localStorage.setItem('exp_' + hs.name, String(hs.exp || 0));
          localStorage.setItem('coin_' + hs.name, String(hs.coin || 50));
        } else {
          // Đã đăng nhập rồi → chỉ tạo key nếu thiếu (giữ nguyên điểm cũ tích lũy)
          if (!localStorage.getItem('exp_' + hs.name)) localStorage.setItem('exp_' + hs.name, String(hs.exp || 0));
          if (!localStorage.getItem('coin_' + hs.name)) localStorage.setItem('coin_' + hs.name, String(hs.coin || 50));
        }
      });

      // 3. Xóa các tài liệu thừa khỏi Firestore collection mathhero_students
      var compat = window.HeroFirebaseCompat || window.FirebaseSync;
      if (compat && typeof compat.xoaHocSinhTrenMay === 'function' && dsXoaThem.length > 0) {
        Promise.allSettled(dsXoaThem.map(function(t) { return compat.xoaHocSinhTrenMay(t); })).catch(function() {});
      }

      // 4. Đồng bộ ghi đè lên Cloud
      if (compat && typeof compat.dayCauHinhToanCuc === 'function') {
        await compat.dayCauHinhToanCuc('math_hero_users_v2');
        await compat.dayCauHinhToanCuc('danh_sach_hs_da_xoa');
      } else if (typeof window.dongBoToanCuc === 'function') {
        await window.dongBoToanCuc('math_hero_users_v2');
        await window.dongBoToanCuc('danh_sach_hs_da_xoa');
      }

      return { success: true, count: Object.keys(usersFinal).length };
    } catch(e) {
      console.error('[Khôi phục danh sách chuẩn]', e);
      return { success: false, error: e };
    }
  };

  // TỰ ĐỘNG CHUẨN HÓA 203 HỌC SINH TỪ 5 FILE EXCEL THEO YÊU CẦU CỦA THẦY
  var FLAG_CHUAN_HOA = 'hero_chuan_hoa_203_hs_v2026';
  if (typeof localStorage !== 'undefined') {
    if (localStorage.getItem('hero_chuan_hoa_flag') !== FLAG_CHUAN_HOA) {
      try {
        (function() {
          var _tenChuanHoa = function(s) {
            return String(s || '').replace(/[\u00A0\u200B\uFEFF]/g, ' ').trim().replace(/\s+/g, ' ').normalize('NFC').toLowerCase();
          };
          // Đọc bia mộ hiện có → BẢO TOÀN, KHÔNG reset thành '[]'
          var dsDaXoaHienTai = [];
          try { dsDaXoaHienTai = JSON.parse(localStorage.getItem('danh_sach_hs_da_xoa') || '[]'); } catch(e) {}
          if (!Array.isArray(dsDaXoaHienTai)) dsDaXoaHienTai = [];
          var setDaXoaRaw = new Set(dsDaXoaHienTai.map(_tenChuanHoa));

          // Đảm bảo đủ 203 chuẩn, nhưng LOẠI BỎ những cái đã nằm trong bia mộ
          var usersFinal = {};
          Object.keys(usersObj).forEach(function(tenChuan) {
            if (!setDaXoaRaw.has(_tenChuanHoa(tenChuan))) {
              usersFinal[tenChuan] = usersObj[tenChuan];
            }
          });
          localStorage.setItem('math_hero_users_v2', JSON.stringify(usersFinal));
          localStorage.setItem('hero_chuan_hoa_flag', FLAG_CHUAN_HOA);
          console.log('[Hero Math] Đã tự động dọn sạch danh sách cũ và thiết lập 203 học sinh chuẩn từ 5 file Excel (bảo toàn bia mộ).');

          // [PHƯƠNG ÁN C-B] Đọc nhật ký đăng nhập → reset điểm cho những học sinh chưa từng đăng nhập
          var setDaDangNhapRaw2 = {};
          try {
            var nkDangNhap2 = JSON.parse(localStorage.getItem('nhat_ky_dang_nhap') || '[]');
            if (Array.isArray(nkDangNhap2)) {
              nkDangNhap2.forEach(function(item) {
                if (item && item.name) setDaDangNhapRaw2[_tenChuanHoa(item.name)] = true;
              });
            }
          } catch(e) {}
          
          listArr.forEach(function(hs) {
            if (!usersFinal[hs.name]) return;
            var tenChuan = _tenChuanHoa(hs.name);
            var chuaTungDangNhap = !setDaDangNhapRaw2[tenChuan];
            if (chuaTungDangNhap) {
              localStorage.setItem('exp_' + hs.name, String(hs.exp || 0));
              localStorage.setItem('coin_' + hs.name, String(hs.coin || 50));
            } else {
              if (!localStorage.getItem('exp_' + hs.name)) localStorage.setItem('exp_' + hs.name, String(hs.exp || 0));
              if (!localStorage.getItem('coin_' + hs.name)) localStorage.setItem('coin_' + hs.name, String(hs.coin || 50));
            }
          });
        })();
      } catch(e) {}
    }
  }
})();
