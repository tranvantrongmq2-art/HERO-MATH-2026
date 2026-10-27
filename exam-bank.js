/**
 * HERO MATH - NGÂN HÀNG ĐỀ THI & QUẢN LÝ NẠP ĐỀ (CHUẨN LATEX & AI)
 * Tích hợp 2 cơ chế nạp:
 * 1. AI Gemini API Key tự động bóc tách 28 câu từ văn bản/đề thi
 * 2. Prompt có sẵn chuẩn cấu trúc cho ChatGPT / Claude / Gemini
 */

const EXAM_STORAGE_KEY = 'hero_math_exam_bank_v1';
const ACTIVE_EXAM_KEY = 'hero_math_active_exam_id';
const GEMINI_API_KEY_STORAGE = 'hero_math_gemini_api_key';

// DỮ LIỆU ĐỀ THI MẪU CHUẨN THCS & THPT MỸ QUÝ (KHỐI 7 & KHỐI 9)
const DEFAULT_EXAMS = {
  "ktgk1_toan7_de1": {
    "id": "ktgk1_toan7_de1",
    "title": "Đề Kiểm Tra Giữa Kì I - Toán 7 (Đề Chuẩn 28 Câu)",
    "grade": "7",
    "school": "TRƯỜNG THCS & THPT MỸ QUÝ",
    "durationMinutes": 90,
    "totalQuestions": 28,
    "maxScore": 10.0,
    "mcqScore": 7.0,
    "description": "Đề thi chính thức Giữa Kì I môn Toán Khối 7. Gồm 28 câu trắc nghiệm (7,0 điểm) và phần tự luận (3,0 điểm). Đầy đủ công thức LaTeX và hình học trực quan.",
    "questions": [
      {
        "id": 1,
        "number": 1,
        "level": "Nhận biết",
        "content": "Trong các cách viết sau, cách viết nào biểu diễn một số hữu tỉ?",
        "image": null,
        "options": {
          "A": "$\\frac{3}{0}$",
          "B": "$\\frac{1,5}{2}$",
          "C": "$\\frac{-3}{5}$",
          "D": "$\\sqrt{2}$"
        },
        "correctAnswer": "C",
        "explanation": "Số hữu tỉ là số viết được dưới dạng phân số $\\frac{a}{b}$ với $a, b \\in \\mathbb{Z}, b \\neq 0$. Trong các phương án trên, chỉ có $\\frac{-3}{5}$ thỏa mãn điều kiện vì tử số $-3 \\in \\mathbb{Z}$, mẫu số $5 \\in \\mathbb{Z}$ và mẫu khác 0."
      },
      {
        "id": 2,
        "number": 2,
        "level": "Nhận biết",
        "content": "Tập hợp các số hữu tỉ được kí hiệu là:",
        "image": null,
        "options": {
          "A": "$\\mathbb{N}$",
          "B": "$\\mathbb{Z}$",
          "C": "$\\mathbb{Q}$",
          "D": "$\\mathbb{R}$"
        },
        "correctAnswer": "C",
        "explanation": "Theo quy ước toán học, tập hợp các số hữu tỉ được kí hiệu là $\\mathbb{Q}$ (viết tắt từ 'Quotient')."
      },
      {
        "id": 3,
        "number": 3,
        "level": "Nhận biết",
        "content": "Số đối của số hữu tỉ $\\frac{-4}{7}$ là:",
        "image": null,
        "options": {
          "A": "$\\frac{7}{4}$",
          "B": "$\\frac{4}{7}$",
          "C": "$\\frac{-7}{4}$",
          "D": "$-\\frac{4}{7}$"
        },
        "correctAnswer": "B",
        "explanation": "Số đối của một số $x$ là $-x$. Do đó, số đối của $\\frac{-4}{7}$ là $-\\left(\\frac{-4}{7}\\right) = \\frac{4}{7}$."
      },
      {
        "id": 4,
        "number": 4,
        "level": "Nhận biết",
        "content": "Với $x \\in \\mathbb{Q}$ và $m, n \\in \\mathbb{N}$, công thức nhân hai lũy thừa cùng cơ số đúng là:",
        "image": null,
        "options": {
          "A": "$x^m \\cdot x^n = x^{m \\cdot n}$",
          "B": "$x^m \\cdot x^n = x^{m+n}$",
          "C": "$x^m \\cdot x^n = x^{m-n}$",
          "D": "$x^m \\cdot x^n = (x+x)^{m+n}$"
        },
        "correctAnswer": "B",
        "explanation": "Quy tắc nhân hai lũy thừa cùng cơ số: Giữ nguyên cơ số và cộng các số mũ: $x^m \\cdot x^n = x^{m+n}$."
      },
      {
        "id": 5,
        "number": 5,
        "level": "Nhận biết",
        "content": "Với $x \\in \\mathbb{Q}$ và $m, n \\in \\mathbb{N}$, công thức tính lũy thừa của một lũy thừa đúng là:",
        "image": null,
        "options": {
          "A": "$(x^m)^n = x^{m \\cdot n}$",
          "B": "$(x^m)^n = x^{m+n}$",
          "C": "$(x^m)^n = x^{m-n}$",
          "D": "$(x^m)^n = x^{m^n}$"
        },
        "correctAnswer": "A",
        "explanation": "Quy tắc tính lũy thừa của một lũy thừa: Khi tính lũy thừa của một lũy thừa, ta giữ nguyên cơ số và nhân các số mũ: $(x^m)^n = x^{m \\cdot n}$."
      },
      {
        "id": 6,
        "number": 6,
        "level": "Nhận biết",
        "content": "Đối với biểu thức không có dấu ngoặc, thứ tự thực hiện các phép tính đúng là:",
        "image": null,
        "options": {
          "A": "Nhân và chia $\\rightarrow$ Lũy thừa $\\rightarrow$ Cộng và trừ",
          "B": "Cộng và trừ $\\rightarrow$ Nhân và chia $\\rightarrow$ Lũy thừa",
          "C": "Lũy thừa $\\rightarrow$ Nhân và chia $\\rightarrow$ Cộng và trừ",
          "D": "Thực hiện lần lượt từ trái sang phải bất kể phép tính nào"
        },
        "correctAnswer": "C",
        "explanation": "Thứ tự thực hiện phép tính đối với biểu thức không có dấu ngoặc là: Lũy thừa $\\rightarrow$ Nhân và chia $\\rightarrow$ Cộng và trừ."
      },
      {
        "id": 7,
        "number": 7,
        "level": "Nhận biết",
        "content": "Đối với biểu thức có các dấu ngoặc: ngoặc tròn $( )$, ngoặc vuông $[ ]$, ngoặc nhọn $\\{ \\}$, thứ tự thực hiện các phép tính đúng là:",
        "image": null,
        "options": {
          "A": "$[ ] \\rightarrow ( ) \\rightarrow \\{ \\}$",
          "B": "$( ) \\rightarrow [ ] \\rightarrow \\{ \\}$",
          "C": "$\\{ \\} \\rightarrow [ ] \\rightarrow ( )$",
          "D": "$( ) \\rightarrow \\{ \\} \\rightarrow [ ]$"
        },
        "correctAnswer": "B",
        "explanation": "Đối với biểu thức có các dấu ngoặc, ta thực hiện theo thứ tự: trong ngoặc tròn $( )$ trước, rồi đến trong ngoặc vuông $[ ]$, cuối cùng là trong ngoặc nhọn $\\{ \\}$."
      },
      {
        "id": 8,
        "number": 8,
        "level": "Nhận biết",
        "content": "Trong các số thập phân cho sẵn dưới đây, số nào là số thập phân hữu hạn?",
        "image": null,
        "options": {
          "A": "$0,333...$",
          "B": "$1,(25)$",
          "C": "$2,75$",
          "D": "$1,4142135...$"
        },
        "correctAnswer": "C",
        "explanation": "Số $2,75$ có phần thập phân dừng lại sau hai chữ số nên là số thập phân hữu hạn. Các số còn lại là số thập phân vô hạn."
      },
      {
        "id": 9,
        "number": 9,
        "level": "Nhận biết",
        "content": "Chu kì của số thập phân vô hạn tuần hoàn $5,121212...$ là:",
        "image": null,
        "options": {
          "A": "$5$",
          "B": "$1$",
          "C": "$12$",
          "D": "$21$"
        },
        "correctAnswer": "C",
        "explanation": "Số $5,121212... = 5,(12)$, phần được lặp lại vô hạn lần ngay sau dấu phẩy là nhóm chữ số $12$, do đó chu kì là $12$."
      },
      {
        "id": 10,
        "number": 10,
        "level": "Nhận biết",
        "content": "Tập hợp các số vô tỉ được kí hiệu là:",
        "image": null,
        "options": {
          "A": "$\\mathbb{Q}$",
          "B": "$\\mathbb{I}$",
          "C": "$\\mathbb{R}$",
          "D": "$\\mathbb{Z}$"
        },
        "correctAnswer": "B",
        "explanation": "Tập hợp các số vô tỉ được kí hiệu bằng chữ cái in hoa $\\mathbb{I}$ (viết tắt từ 'Irrational numbers')."
      },
      {
        "id": 11,
        "number": 11,
        "level": "Nhận biết",
        "content": "Vì $6^2 = 36$ và $6 > 0$ nên căn bậc hai số học của $36$ (tức $\\sqrt{36}$) bằng:",
        "image": null,
        "options": {
          "A": "$6$",
          "B": "$-6$",
          "C": "$\\pm 6$",
          "D": "$18$"
        },
        "correctAnswer": "A",
        "explanation": "Căn bậc hai số học của một số $a \\ge 0$ là số không âm $x$ sao cho $x^2 = a$. Vì $6 > 0$ và $6^2 = 36$ nên $\\sqrt{36} = 6$."
      },
      {
        "id": 12,
        "number": 12,
        "level": "Nhận biết",
        "content": "Giá trị tuyệt đối của số thực $-3,5$, kí hiệu $|-3,5|$, bằng:",
        "image": null,
        "options": {
          "A": "$-3,5$",
          "B": "$3,5$",
          "C": "$\\pm 3,5$",
          "D": "$0$"
        },
        "correctAnswer": "B",
        "explanation": "Giá trị tuyệt đối của một số âm là số đối của nó: $|-3,5| = -(-3,5) = 3,5$."
      },
      {
        "id": 13,
        "number": 13,
        "level": "Nhận biết",
        "content": "Cho hai đường thẳng $xx'$ và $yy'$ cắt nhau tại $O$. Góc đối đỉnh của góc $\\widehat{xOy}$ là:",
        "image": null,
        "options": {
          "A": "$\\widehat{xOy'}$",
          "B": "$\\widehat{x'Oy}$",
          "C": "$\\widehat{x'Oy'}$",
          "D": "$\\widehat{xOx'}$"
        },
        "correctAnswer": "C",
        "explanation": "Hai góc đối đỉnh là hai góc mà mỗi cạnh của góc này là tia đối của một cạnh của góc kia. Tia $Ox'$ đối $Ox$, $Oy'$ đối $Oy$ nên góc đối đỉnh của $\\widehat{xOy}$ là $\\widehat{x'Oy'}$."
      },
      {
        "id": 14,
        "number": 14,
        "level": "Nhận biết",
        "content": "Quan sát hình vẽ sau, biết $\\widehat{xOz} = \\widehat{zOy} = 35^\\circ$. Tia phân giác của góc $\\widehat{xOy}$ là:",
        "image": "assets/img/exams/toan7/image1.png",
        "options": {
          "A": "Tia $Ox$",
          "B": "Tia $Oy$",
          "C": "Tia $Oz$",
          "D": "Tia $zx$"
        },
        "correctAnswer": "C",
        "explanation": "Tia $Oz$ nằm giữa hai tia $Ox, Oy$ và tạo với hai tia đó hai góc bằng nhau ($\\widehat{xOz} = \\widehat{zOy} = 35^\\circ$) nên tia $Oz$ là tia phân giác của góc $\\widehat{xOy}$."
      },
      {
        "id": 15,
        "number": 15,
        "level": "Nhận biết",
        "content": "Nếu một đường thẳng cắt hai đường thẳng song song thì:",
        "image": null,
        "options": {
          "A": "Hai góc đồng vị phụ nhau.",
          "B": "Hai góc so le trong bằng nhau.",
          "C": "Hai góc trong cùng phía bằng nhau.",
          "D": "Hai góc so le trong bù nhau."
        },
        "correctAnswer": "B",
        "explanation": "Theo tính chất hai đường thẳng song song: Nếu một đường thẳng cắt hai đường thẳng song song thì hai góc so le trong bằng nhau, hai góc đồng vị bằng nhau, hai góc trong cùng phía bù nhau."
      },
      {
        "id": 16,
        "number": 16,
        "level": "Nhận biết",
        "content": "Cho đường thẳng $c$ cắt hai đường thẳng $a$ và $b$ lần lượt tại $A$ và $B$ như hình vẽ. Cặp góc nào sau đây là hai góc so le trong?",
        "image": "assets/img/exams/toan7/image2.png",
        "options": {
          "A": "$\\widehat{A}_4$ và $\\widehat{B}_2$",
          "B": "$\\widehat{A}_1$ và $\\widehat{B}_1$",
          "C": "$\\widehat{A}_2$ và $\\widehat{B}_4$",
          "D": "$\\widehat{A}_4$ và $\\widehat{B}_1$"
        },
        "correctAnswer": "A",
        "explanation": "Trên hình vẽ, cặp góc nằm ở hai phía so le của đường thẳng cát $c$ và nằm phía trong hai đường thẳng $a, b$ là cặp góc $\\widehat{A}_4$ và $\\widehat{B}_2$."
      },
      {
        "id": 17,
        "number": 17,
        "level": "Thông hiểu",
        "content": "Quan sát trục số dưới đây (đoạn thẳng đơn vị từ $0$ đến $1$ được chia thành $3$ phần bằng nhau). Điểm $M$ biểu diễn số hữu tỉ nào?",
        "image": "assets/img/exams/toan7/image3.png",
        "options": {
          "A": "$\\frac{-1}{3}$",
          "B": "$\\frac{-2}{3}$",
          "C": "$\\frac{2}{3}$",
          "D": "$\\frac{-3}{2}$"
        },
        "correctAnswer": "B",
        "explanation": "Mỗi đoạn đơn vị được chia thành 3 phần bằng nhau, mỗi phần có độ dài $\\frac{1}{3}$. Điểm $M$ nằm bên trái điểm gốc $0$ cách $0$ hai phần, do đó điểm $M$ biểu diễn số hữu tỉ $\\frac{-2}{3}$."
      },
      {
        "id": 18,
        "number": 18,
        "level": "Thông hiểu",
        "content": "Kết quả của phép cộng $\\frac{1}{2} + \\frac{2}{3}$ là:",
        "image": null,
        "options": {
          "A": "$\\frac{3}{5}$",
          "B": "$\\frac{3}{6}$",
          "C": "$\\frac{7}{6}$",
          "D": "$\\frac{5}{6}$"
        },
        "correctAnswer": "C",
        "explanation": "Quy đồng mẫu số chung là $6$: $\\frac{1}{2} + \\frac{2}{3} = \\frac{3}{6} + \\frac{4}{6} = \\frac{7}{6}$."
      },
      {
        "id": 19,
        "number": 19,
        "level": "Thông hiểu",
        "content": "Kết quả của phép trừ $\\frac{3}{4} - \\frac{1}{2}$ là:",
        "image": null,
        "options": {
          "A": "$\\frac{1}{4}$",
          "B": "$\\frac{2}{2}$",
          "C": "$\\frac{-1}{4}$",
          "D": "$\\frac{5}{4}$"
        },
        "correctAnswer": "A",
        "explanation": "Quy đồng mẫu số chung là $4$: $\\frac{3}{4} - \\frac{1}{2} = \\frac{3}{4} - \\frac{2}{4} = \\frac{1}{4}$."
      },
      {
        "id": 20,
        "number": 20,
        "level": "Thông hiểu",
        "content": "Kết quả của phép nhân $\\frac{-2}{3} \\cdot \\frac{4}{5}$ là:",
        "image": null,
        "options": {
          "A": "$\\frac{8}{15}$",
          "B": "$\\frac{-8}{15}$",
          "C": "$\\frac{-6}{15}$",
          "D": "$\\frac{-10}{12}$"
        },
        "correctAnswer": "B",
        "explanation": "Nhân tử với tử và mẫu với mẫu: $\\frac{-2}{3} \\cdot \\frac{4}{5} = \\frac{(-2) \\cdot 4}{3 \\cdot 5} = \\frac{-8}{15}$."
      },
      {
        "id": 21,
        "number": 21,
        "level": "Thông hiểu",
        "content": "Kết quả của phép tính $\\left(\\frac{1}{2}\\right)^3 \\cdot \\left(\\frac{1}{2}\\right)^2$ viết dưới dạng một lũy thừa là:",
        "image": null,
        "options": {
          "A": "$\\left(\\frac{1}{2}\\right)^5$",
          "B": "$\\left(\\frac{1}{2}\\right)^6$",
          "C": "$\\left(\\frac{1}{2}\\right)^1$",
          "D": "$\\left(\\frac{1}{4}\\right)^5$"
        },
        "correctAnswer": "A",
        "explanation": "Áp dụng công thức $a^m \\cdot a^n = a^{m+n}$: $\\left(\\frac{1}{2}\\right)^3 \\cdot \\left(\\frac{1}{2}\\right)^2 = \\left(\\frac{1}{2}\\right)^{3+2} = \\left(\\frac{1}{2}\\right)^5$."
      },
      {
        "id": 22,
        "number": 22,
        "level": "Thông hiểu",
        "content": "Kết quả của phép tính $\\left(\\frac{-3}{5}\\right)^7 : \\left(\\frac{-3}{5}\\right)^4$ là:",
        "image": null,
        "options": {
          "A": "$\\left(\\frac{-3}{5}\\right)^{11}$",
          "B": "$\\left(\\frac{-3}{5}\\right)^3$",
          "C": "$\\left(\\frac{-3}{5}\\right)^{28}$",
          "D": "$1^3$"
        },
        "correctAnswer": "B",
        "explanation": "Áp dụng công thức $a^m : a^n = a^{m-n}$: $\\left(\\frac{-3}{5}\\right)^7 : \\left(\\frac{-3}{5}\\right)^4 = \\left(\\frac{-3}{5}\\right)^{7-4} = \\left(\\frac{-3}{5}\\right)^3$."
      },
      {
        "id": 23,
        "number": 23,
        "level": "Thông hiểu",
        "content": "Viết biểu thức $\\left[\\left(\\frac{2}{3}\\right)^2\\right]^4$ dưới dạng một lũy thừa của $\\frac{2}{3}$, ta được:",
        "image": null,
        "options": {
          "A": "$\\left(\\frac{2}{3}\\right)^6$",
          "B": "$\\left(\\frac{2}{3}\\right)^2$",
          "C": "$\\left(\\frac{2}{3}\\right)^8$",
          "D": "$\\left(\\frac{2}{3}\\right)^{16}$"
        },
        "correctAnswer": "C",
        "explanation": "Áp dụng công thức $(a^m)^n = a^{m \\cdot n}$: $\\left[\\left(\\frac{2}{3}\\right)^2\\right]^4 = \\left(\\frac{2}{3}\\right)^{2 \\cdot 4} = \\left(\\frac{2}{3}\\right)^8$."
      },
      {
        "id": 24,
        "number": 24,
        "level": "Thông hiểu",
        "content": "Làm tròn số thập phân $14,258$ đến chữ số thập phân thứ hai (hàng phần trăm), ta được kết quả là:",
        "image": null,
        "options": {
          "A": "$14,25$",
          "B": "$14,26$",
          "C": "$14,3$",
          "D": "$14,2$"
        },
        "correctAnswer": "B",
        "explanation": "Chữ số ở hàng làm tròn (phần trăm) là 5. Chữ số ngay sau nó là 8 (vì $8 \\ge 5$) nên ta cộng thêm 1 vào chữ số hàng phần trăm: $14,258 \\approx 14,26$."
      },
      {
        "id": 25,
        "number": 25,
        "level": "Thông hiểu",
        "content": "Tất cả các số thực $x$ thỏa mãn $|x| = 4,5$ là:",
        "image": null,
        "options": {
          "A": "$x = 4,5$",
          "B": "$x = -4,5$",
          "C": "$x = 4,5$ hoặc $x = -4,5$",
          "D": "Không có giá trị nào của $x$"
        },
        "correctAnswer": "C",
        "explanation": "Theo định nghĩa giá trị tuyệt đối, nếu $|x| = a$ với $a > 0$ thì $x = a$ hoặc $x = -a$. Vậy $x = 4,5$ hoặc $x = -4,5$."
      },
      {
        "id": 26,
        "number": 26,
        "level": "Thông hiểu",
        "content": "Quan sát trục số dưới đây, điểm biểu diễn số thực $\\sqrt{2} \\approx 1,414$ là điểm nào?",
        "image": "assets/img/exams/toan7/image4.png",
        "options": {
          "A": "Điểm $0$",
          "B": "Điểm $1$",
          "C": "Điểm $P$",
          "D": "Điểm $2$"
        },
        "correctAnswer": "C",
        "explanation": "Vì $1 < 1,414 < 2$ nên điểm biểu diễn số thực $\\sqrt{2}$ phải nằm giữa số 1 và số 2 trên trục số. Điểm thỏa mãn chính là điểm $P$."
      },
      {
        "id": 27,
        "number": 27,
        "level": "Thông hiểu",
        "content": "Cho hình vẽ sau, biết $\\widehat{xOy}$ và $\\widehat{yOz}$ là hai góc kề bù và $\\widehat{xOy} = 60^\\circ$. Số đo của $\\widehat{yOz}$ là:",
        "image": "assets/img/exams/toan7/image5.png",
        "options": {
          "A": "$30^\\circ$",
          "B": "$60^\\circ$",
          "C": "$120^\\circ$",
          "D": "$180^\\circ$"
        },
        "correctAnswer": "C",
        "explanation": "Vì hai góc kề bù có tổng số đo bằng $180^\\circ$ nên: $\\widehat{xOy} + \\widehat{yOz} = 180^\\circ \\Rightarrow \\widehat{yOz} = 180^\\circ - 60^\\circ = 120^\\circ$."
      },
      {
        "id": 28,
        "number": 28,
        "level": "Thông hiểu",
        "content": "Cho hình vẽ sau, biết tia $Om$ là tia phân giác của góc $\\widehat{xOy}$ và $\\widehat{xOy} = 80^\\circ$. Số đo của $\\widehat{xOm}$ là:",
        "image": "assets/img/exams/toan7/image6.png",
        "options": {
          "A": "$40^\\circ$",
          "B": "$80^\\circ$",
          "C": "$160^\\circ$",
          "D": "$20^\\circ$"
        },
        "correctAnswer": "A",
        "explanation": "Vì $Om$ là tia phân giác của $\\widehat{xOy}$ nên: $\\widehat{xOm} = \\widehat{mOy} = \\frac{\\widehat{xOy}}{2} = \\frac{80^\\circ}{2} = 40^\\circ$."
      }
    ]
  },
  "ktgk1_toan9_de1": {
    "id": "ktgk1_toan9_de1",
    "title": "Đề Kiểm Tra Giữa Kì I - Toán 9 (Đề Chuẩn 28 Câu)",
    "grade": "9",
    "school": "TRƯỜNG THCS & THPT MỸ QUÝ",
    "durationMinutes": 90,
    "totalQuestions": 28,
    "maxScore": 10.0,
    "mcqScore": 7.0,
    "description": "Đề thi chính thức Giữa Kì I môn Toán Khối 9. Gồm 28 câu trắc nghiệm (7,0 điểm) theo định dạng chuẩn GD&ĐT, bao quát Hệ PT, Lượng giác & BPT.",
    "questions": [
      {
        "id": 1,
        "number": 1,
        "level": "Nhận biết",
        "content": "Hệ thức nào sau đây là phương trình bậc nhất hai ẩn?",
        "image": null,
        "options": {
          "A": "$2x^2 - y = 3$",
          "B": "$3x + 4y = 5$",
          "C": "$0x + 0y = 1$",
          "D": "$\\frac{1}{x} + 2y = 4$"
        },
        "correctAnswer": "B",
        "explanation": "Phương trình bậc nhất hai ẩn $x, y$ có dạng tổng quát $ax + by = c$, trong đó $a, b$ không đồng thời bằng 0. Do đó, $3x + 4y = 5$ là phương trình bậc nhất hai ẩn."
      },
      {
        "id": 2,
        "number": 2,
        "level": "Nhận biết",
        "content": "Hệ thức nào sau đây không là phương trình bậc nhất hai ẩn?",
        "image": null,
        "options": {
          "A": "$x - 2y = 0$",
          "B": "$0x + 5y = -3$",
          "C": "$0x + 0y = 7$",
          "D": "$4x + 0y = 8$"
        },
        "correctAnswer": "C",
        "explanation": "Trong phương trình $0x + 0y = 7$, cả hai hệ số $a = 0$ và $b = 0$, vi phạm điều kiện $a, b$ không đồng thời bằng 0."
      },
      {
        "id": 3,
        "number": 3,
        "level": "Nhận biết",
        "content": "Hệ phương trình nào sau đây là hệ hai phương trình bậc nhất hai ẩn?",
        "image": null,
        "options": {
          "A": "$\\begin{cases} x + 2y = 5 \\\\ 3x - y = 1 \\end{cases}$",
          "B": "$\\begin{cases} x^2 + y = 2 \\\\ x - y = 3 \\end{cases}$",
          "C": "$\\begin{cases} 0x + 0y = 4 \\\\ 2x + y = 1 \\end{cases}$",
          "D": "$\\begin{cases} \\frac{1}{x} + y = 1 \\\\ x + 3y = 4 \\end{cases}$"
        },
        "correctAnswer": "A",
        "explanation": "Hệ hai phương trình bậc nhất hai ẩn gồm hai phương trình mà mỗi phương trình đều là phương trình bậc nhất hai ẩn. Hệ $\\begin{cases} x + 2y = 5 \\\\ 3x - y = 1 \\end{cases}$ thỏa mãn."
      },
      {
        "id": 4,
        "number": 4,
        "level": "Nhận biết",
        "content": "Hệ phương trình nào sau đây không là hệ hai phương trình bậc nhất hai ẩn?",
        "image": null,
        "options": {
          "A": "$\\begin{cases} 2x - y = 3 \\\\ x + y = 0 \\end{cases}$",
          "B": "$\\begin{cases} x = 4 \\\\ 2x - 3y = 1 \\end{cases}$",
          "C": "$\\begin{cases} x^2 - y^2 = 3 \\\\ x + y = 3 \\end{cases}$",
          "D": "$\\begin{cases} 3x + 2y = 6 \\\\ y = -2 \\end{cases}$"
        },
        "correctAnswer": "C",
        "explanation": "Phương trình $x^2 - y^2 = 3$ chứa bậc 2 của các ẩn nên không phải phương trình bậc nhất."
      },
      {
        "id": 5,
        "number": 5,
        "level": "Nhận biết",
        "content": "Cặp số nào sau đây là nghiệm của phương trình $2x - y = 3$?",
        "image": null,
        "options": {
          "A": "$(1; 1)$",
          "B": "$(2; 1)$",
          "C": "$(0; 3)$",
          "D": "$(-1; 5)$"
        },
        "correctAnswer": "B",
        "explanation": "Thay $(x; y) = (2; 1)$ vào vế trái phương trình: $2(2) - 1 = 4 - 1 = 3$ (bằng vế phải). Vậy $(2; 1)$ là nghiệm."
      },
      {
        "id": 6,
        "number": 6,
        "level": "Nhận biết",
        "content": "Cặp số nào sau đây không phải là nghiệm của phương trình $x + 2y = 4$?",
        "image": null,
        "options": {
          "A": "$(4; 0)$",
          "B": "$(0; 2)$",
          "C": "$(2; 1)$",
          "D": "$(1; 2)$"
        },
        "correctAnswer": "D",
        "explanation": "Thay $(x; y) = (1; 2)$ vào vế trái: $1 + 2(2) = 1 + 4 = 5 \\neq 4$. Do đó $(1; 2)$ không là nghiệm."
      },
      {
        "id": 7,
        "number": 7,
        "level": "Thông hiểu",
        "content": "Dùng máy tính cầm tay, cặp số nào sau đây là nghiệm của hệ phương trình $\\begin{cases} 2x + 3y = 8 \\\\ 3x - y = 1 \\end{cases}$?",
        "image": null,
        "options": {
          "A": "$(1; 2)$",
          "B": "$(2; 1)$",
          "C": "$(-1; 2)$",
          "D": "$(1; -2)$"
        },
        "correctAnswer": "A",
        "explanation": "Giải hệ phương trình: từ phương trình thứ hai $y = 3x - 1$, thay vào phương trình thứ nhất: $2x + 3(3x - 1) = 8 \\Leftrightarrow 11x = 11 \\Leftrightarrow x = 1 \\Rightarrow y = 2$. Vậy nghiệm là $(1; 2)$."
      },
      {
        "id": 8,
        "number": 8,
        "level": "Thông hiểu",
        "content": "Dùng máy tính cầm tay, cặp số nào sau đây không là nghiệm của hệ phương trình $\\begin{cases} x + y = 6 \\\\ 2x - y = 3 \\end{cases}$?",
        "image": null,
        "options": {
          "A": "$(3; 3)$",
          "B": "$(2; 4)$",
          "C": "$\\left(\\frac{6}{2}; \\frac{6}{2}\\right)$",
          "D": "$(3,0; 3,0)$"
        },
        "correctAnswer": "B",
        "explanation": "Cộng hai phương trình lại: $3x = 9 \\Rightarrow x = 3 \\Rightarrow y = 3$. Cặp $(2; 4)$ có $2(2) - 4 = 0 \\neq 3$ nên không phải là nghiệm."
      },
      {
        "id": 9,
        "number": 9,
        "level": "Thông hiểu",
        "content": "Nghiệm của phương trình chứa ẩn ở mẫu $\\frac{x+2}{x-1} = 2$ (với $x \\neq 1$) là:",
        "image": null,
        "options": {
          "A": "$x = 1$",
          "B": "$x = 3$",
          "C": "$x = 4$",
          "D": "$x = -4$"
        },
        "correctAnswer": "C",
        "explanation": "Quy đồng và khử mẫu: $x + 2 = 2(x - 1) \\Leftrightarrow x + 2 = 2x - 2 \\Leftrightarrow x = 4$ (thỏa mãn ĐKXĐ $x \\neq 1$)."
      },
      {
        "id": 10,
        "number": 10,
        "level": "Nhận biết",
        "content": "Cho góc nhọn $\\alpha$ trong một tam giác vuông. Công thức tính $\\sin \\alpha$ là:",
        "image": "assets/img/exams/toan9/image1.png",
        "options": {
          "A": "$\\sin \\alpha = \\frac{\\text{cạnh đối}}{\\text{cạnh huyền}}$",
          "B": "$\\sin \\alpha = \\frac{\\text{cạnh kề}}{\\text{cạnh huyền}}$",
          "C": "$\\sin \\alpha = \\frac{\\text{cạnh đối}}{\\text{cạnh kề}}$",
          "D": "$\\sin \\alpha = \\frac{\\text{cạnh kề}}{\\text{cạnh đối}}$"
        },
        "correctAnswer": "A",
        "explanation": "Định nghĩa tỉ số lượng giác của góc nhọn: $\\sin \\alpha$ bằng tỉ số giữa cạnh đối và cạnh huyền."
      },
      {
        "id": 11,
        "number": 11,
        "level": "Nhận biết",
        "content": "Cho hai góc phụ nhau, khẳng định nào sau đây là đúng?",
        "image": null,
        "options": {
          "A": "$\\sin 40^\\circ = \\sin 50^\\circ$",
          "B": "$\\sin 40^\\circ = \\cos 50^\\circ$",
          "C": "$\\sin 40^\\circ = \\tan 50^\\circ$",
          "D": "$\\cos 40^\\circ = \\cot 50^\\circ$"
        },
        "correctAnswer": "B",
        "explanation": "Nếu hai góc phụ nhau (tổng bằng $90^\\circ$), thì sin góc này bằng cos góc kia: $\\sin 40^\\circ = \\cos (90^\\circ - 40^\\circ) = \\cos 50^\\circ$."
      },
      {
        "id": 12,
        "number": 12,
        "level": "Nhận biết",
        "content": "Cho $\\triangle ABC$ vuông tại $A$, có $BC = 10$, $\\widehat{C} = 30^\\circ$. Công thức đúng để tính cạnh $AB$ là:",
        "image": null,
        "options": {
          "A": "$AB = 10 \\cdot \\cos 30^\\circ$",
          "B": "$AB = 10 \\cdot \\tan 30^\\circ$",
          "C": "$AB = 10 \\cdot \\sin 30^\\circ$",
          "D": "$AB = 10 \\cdot \\cot 30^\\circ$"
        },
        "correctAnswer": "C",
        "explanation": "Trong tam giác vuông, cạnh góc vuông bằng cạnh huyền nhân với sin của góc đối diện: $AB = BC \\cdot \\sin C = 10 \\cdot \\sin 30^\\circ$."
      },
      {
        "id": 13,
        "number": 13,
        "level": "Thông hiểu",
        "content": "Dùng máy tính cầm tay, giá trị của $\\sin 60^\\circ$ là:",
        "image": null,
        "options": {
          "A": "$\\frac{1}{2}$",
          "B": "$\\frac{\\sqrt{2}}{2}$",
          "C": "$\\frac{\\sqrt{3}}{2}$",
          "D": "$\\sqrt{3}$"
        },
        "correctAnswer": "C",
        "explanation": "Theo bảng giá trị lượng giác của các góc đặc biệt, $\\sin 60^\\circ = \\frac{\\sqrt{3}}{2}$."
      },
      {
        "id": 14,
        "number": 14,
        "level": "Thông hiểu",
        "content": "Dùng máy tính cầm tay, giá trị của $\\cos 38^\\circ$ (kết quả như trên màn hình máy tính, không làm tròn số) là:",
        "image": null,
        "options": {
          "A": "$0,7880107536$",
          "B": "$0,6156614753$",
          "C": "$0,7812856265$",
          "D": "$1,279941632$"
        },
        "correctAnswer": "A",
        "explanation": "Bấm phím [cos] [3] [8] [=] trên máy tính Casio hiển thị giá trị $0,7880107536...$"
      },
      {
        "id": 15,
        "number": 15,
        "level": "Thông hiểu",
        "content": "Dùng máy tính cầm tay, tìm số đo góc nhọn $\\alpha$ biết $\\tan \\alpha = 1,5$ (kết quả chuyển về độ, phút, giây):",
        "image": null,
        "options": {
          "A": "$56^\\circ 18' 35''$",
          "B": "$33^\\circ 41' 24,24''$",
          "C": "$56^\\circ 18' 35,76''$",
          "D": "$48^\\circ 35' 25,36''$"
        },
        "correctAnswer": "C",
        "explanation": "Bấm [SHIFT] [tan] [1.5] [=] [°' \"] cho kết quả chính xác $56^\\circ 18' 35,76''$."
      },
      {
        "id": 16,
        "number": 16,
        "level": "Nhận biết",
        "content": "Nghiệm của phương trình tích $(x - 3)(x + 4) = 0$ là:",
        "image": null,
        "options": {
          "A": "$x = 3$ hoặc $x = 4$",
          "B": "$x = 3$ hoặc $x = -4$",
          "C": "$x = -3$ hoặc $x = 4$",
          "D": "$x = -3$ hoặc $x = -4$"
        },
        "correctAnswer": "B",
        "explanation": "Phương trình $A(x) \\cdot B(x) = 0 \\Leftrightarrow A(x) = 0$ hoặc $B(x) = 0$. Suy ra $x - 3 = 0 \\Rightarrow x = 3$ hoặc $x + 4 = 0 \\Rightarrow x = -4$."
      },
      {
        "id": 17,
        "number": 17,
        "level": "Nhận biết",
        "content": "Điều kiện xác định của phương trình $\\frac{3}{x - 5} = 1$ là:",
        "image": null,
        "options": {
          "A": "$x \\neq 5$",
          "B": "$x \\neq -5$",
          "C": "$x \\neq 3$",
          "D": "$x \\neq 1$"
        },
        "correctAnswer": "A",
        "explanation": "Điều kiện xác định của phân thức là mẫu thức khác 0: $x - 5 \\neq 0 \\Leftrightarrow x \\neq 5$."
      },
      {
        "id": 18,
        "number": 18,
        "level": "Thông hiểu",
        "content": "Dùng máy tính cầm tay, nghiệm của phương trình chứa ẩn ở mẫu $\\frac{4}{x+1} = 2$ là:",
        "image": null,
        "options": {
          "A": "$x = 1$",
          "B": "$x = 2$",
          "C": "$x = -1$",
          "D": "$x = 3$"
        },
        "correctAnswer": "A",
        "explanation": "ĐKXĐ: $x \\neq -1$. Ta có $\\frac{4}{x+1} = 2 \\Leftrightarrow 2(x+1) = 4 \\Leftrightarrow x+1 = 2 \\Leftrightarrow x = 1$ (thỏa mãn ĐKXĐ)."
      },
      {
        "id": 19,
        "number": 19,
        "level": "Nhận biết",
        "content": "Dựa vào thứ tự trên tập hợp các số thực, khẳng định nào sau đây là đúng?",
        "image": null,
        "options": {
          "A": "$-2,5 > -1,5$",
          "B": "$3,14 > 3,2$",
          "C": "$-4,2 < -4,1$",
          "D": "$0 < -5$"
        },
        "correctAnswer": "C",
        "explanation": "So sánh hai số âm: Số nào có giá trị tuyệt đối lớn hơn thì số đó nhỏ hơn. Vì $|-4,2| = 4,2 > 4,1 = |-4,1|$ nên $-4,2 < -4,1$."
      },
      {
        "id": 20,
        "number": 20,
        "level": "Nhận biết",
        "content": "Cho bất đẳng thức $3x - 7 \\ge 2$. Vế trái của bất đẳng thức đó là:",
        "image": null,
        "options": {
          "A": "$2$",
          "B": "$-7$",
          "C": "$3x - 7$",
          "D": "$3x$"
        },
        "correctAnswer": "C",
        "explanation": "Trong bất đẳng thức $A \\ge B$, biểu thức $A$ nằm bên trái dấu bất đẳng thức gọi là vế trái. Do đó vế trái là $3x - 7$."
      },
      {
        "id": 21,
        "number": 21,
        "level": "Nhận biết",
        "content": "Theo liên hệ giữa thứ tự và phép cộng, nếu $a < b$ thì khẳng định nào sau đây đúng?",
        "image": null,
        "options": {
          "A": "$a + 4 < b + 4$",
          "B": "$a + 4 > b + 4$",
          "C": "$a - 4 > b - 4$",
          "D": "$a + 4 = b + 4$"
        },
        "correctAnswer": "A",
        "explanation": "Khi cộng cùng một số vào cả hai vế của một bất đẳng thức, ta được bất đẳng thức mới cùng chiều: $a < b \\Rightarrow a + 4 < b + 4$."
      },
      {
        "id": 22,
        "number": 22,
        "level": "Nhận biết",
        "content": "Theo liên hệ giữa thứ tự và phép nhân, nếu $a < b$ thì khi nhân cả hai vế với $-3$ ta được:",
        "image": null,
        "options": {
          "A": "$-3a < -3b$",
          "B": "$-3a > -3b$",
          "C": "$-3a = -3b$",
          "D": "$-3a \\le -3b$"
        },
        "correctAnswer": "B",
        "explanation": "Khi nhân cả hai vế của một bất đẳng thức với một số âm, ta phải đổi chiều bất đẳng thức: $a < b \\Rightarrow -3a > -3b$."
      },
      {
        "id": 23,
        "number": 23,
        "level": "Nhận biết",
        "content": "Bất phương trình nào sau đây là bất phương trình bậc nhất một ẩn?",
        "image": null,
        "options": {
          "A": "$0x - 3 > 0$",
          "B": "$x^2 + 1 > 0$",
          "C": "$2x - 5 < 0$",
          "D": "$x + y \\ge 2$"
        },
        "correctAnswer": "C",
        "explanation": "Bất phương trình bậc nhất một ẩn có dạng $ax + b < 0$ (hoặc $> 0, \\le 0, \\ge 0$) với $a \\neq 0$. Biểu thức $2x - 5 < 0$ có hệ số $a = 2 \\neq 0$ nên là bất phương trình bậc nhất một ẩn."
      },
      {
        "id": 24,
        "number": 24,
        "level": "Nhận biết",
        "content": "Giá trị nào sau đây là một nghiệm của bất phương trình $x - 3 > 0$?",
        "image": null,
        "options": {
          "A": "$x = 1$",
          "B": "$x = 2$",
          "C": "$x = 3$",
          "D": "$x = 4$"
        },
        "correctAnswer": "D",
        "explanation": "Giải bất phương trình: $x - 3 > 0 \\Leftrightarrow x > 3$. Trong các đáp án, chỉ có $x = 4 > 3$ thỏa mãn."
      },
      {
        "id": 25,
        "number": 25,
        "level": "Thông hiểu",
        "content": "Biển báo giao thông quy định tốc độ tối đa cho phép là $60\\text{ km/h}$. Gọi $v\\text{ (km/h)}$ là tốc độ của phương tiện, bất đẳng thức mô tả tốc độ đi đúng quy định là:",
        "image": null,
        "options": {
          "A": "$v > 60$",
          "B": "$v \\ge 60$",
          "C": "$v < 60$",
          "D": "$v \\le 60$"
        },
        "correctAnswer": "D",
        "explanation": "Tốc độ tối đa nghĩa là tốc độ thực tế $v$ không được vượt quá 60, tức là $v$ nhỏ hơn hoặc bằng 60: $v \\le 60$."
      },
      {
        "id": 26,
        "number": 26,
        "level": "Thông hiểu",
        "content": "Dựa vào tính chất cơ bản của bất đẳng thức, cho biết $2a - 3 < 2b - 3$. Khẳng định nào sau đây là đúng?",
        "image": null,
        "options": {
          "A": "$a < b$",
          "B": "$a > b$",
          "C": "$a = b$",
          "D": "$a \\ge b$"
        },
        "correctAnswer": "A",
        "explanation": "Cộng 3 vào hai vế: $2a < 2b$. Chia cả hai vế cho số dương 2: $a < b$."
      },
      {
        "id": 27,
        "number": 27,
        "level": "Thông hiểu",
        "content": "Mô tả tính chất bắc cầu của bất đẳng thức: Nếu $x < y$ và $y < 10$ thì:",
        "image": null,
        "options": {
          "A": "$x > 10$",
          "B": "$x = 10$",
          "C": "$x < 10$",
          "D": "$x \\ge 10$"
        },
        "correctAnswer": "C",
        "explanation": "Theo tính chất bắc cầu của thứ tự: nếu $a < b$ và $b < c$ thì $a < c$. Do đó nếu $x < y$ và $y < 10$ thì $x < 10$."
      },
      {
        "id": 28,
        "number": 28,
        "level": "Thông hiểu",
        "content": "Mô tả liên hệ giữa thứ tự với phép nhân và phép cộng: Cho $m > n$, nếu nhân hai vế với $5$ rồi cộng với $-2$ thì ta được:",
        "image": null,
        "options": {
          "A": "$5m - 2 < 5n - 2$",
          "B": "$5m - 2 > 5n - 2$",
          "C": "$5m + 2 < 5n + 2$",
          "D": "$5m - 2 = 5n - 2$"
        },
        "correctAnswer": "B",
        "explanation": "Vì $m > n$ và $5 > 0$ nên $5m > 5n$. Cộng cả hai vế với $-2$: $5m - 2 > 5n - 2$."
      }
    ]
  }
};

const ExamBank = {
    /**
     * Khởi tạo ngân hàng đề thi
     */
    khoiTao() {
        try {
            const stored = localStorage.getItem(EXAM_STORAGE_KEY);
            if (!stored) {
                localStorage.setItem(EXAM_STORAGE_KEY, JSON.stringify(DEFAULT_EXAMS));
            }
        } catch (e) {
            console.warn('[ExamBank] localStorage error, using default bank', e);
        }
    },

    /**
     * Lấy toàn bộ danh sách đề thi (Đề mặc định + Đề do giáo viên nạp thêm)
     */
    layDanhSachDe() {
        try {
            const stored = localStorage.getItem(EXAM_STORAGE_KEY);
            if (stored) {
                const custom = JSON.parse(stored);
                return { ...DEFAULT_EXAMS, ...custom };
            }
        } catch (e) {
            console.error('[ExamBank] Lỗi đọc ngân hàng đề:', e);
        }
        return DEFAULT_EXAMS;
    },

    /**
     * Lấy đề thi theo ID
     */
    layDeTheoId(id) {
        const all = this.layDanhSachDe();
        return all[id] || DEFAULT_EXAMS['ktgk1_toan7_de1'];
    },

    /**
     * Lưu một đề thi mới vào kho đề
     */
    luuDeMoi(deMoi) {
        if (!deMoi || !deMoi.id || !deMoi.questions || deMoi.questions.length === 0) {
            throw new Error('Dữ liệu đề thi không hợp lệ hoặc thiếu câu hỏi!');
        }
        const all = this.layDanhSachDe();
        all[deMoi.id] = deMoi;
        localStorage.setItem(EXAM_STORAGE_KEY, JSON.stringify(all));
        localStorage.setItem(ACTIVE_EXAM_KEY, deMoi.id);
        return deMoi;
    },

    /**
     * Xóa đề thi tự tạo
     */
    xoaDe(id) {
        if (id.startsWith('ktgk1_toan7_de1') || id.startsWith('ktgk1_toan9_de1')) {
            throw new Error('Không thể xóa đề mẫu mặc định của trường!');
        }
        const all = this.layDanhSachDe();
        if (all[id]) {
            delete all[id];
            localStorage.setItem(EXAM_STORAGE_KEY, JSON.stringify(all));
            return true;
        }
        return false;
    },

    /**
     * Khôi phục ngân hàng đề về trạng thái gốc
     */
    khoiPhucMacDinh() {
        localStorage.setItem(EXAM_STORAGE_KEY, JSON.stringify(DEFAULT_EXAMS));
        localStorage.setItem(ACTIVE_EXAM_KEY, 'ktgk1_toan7_de1');
        return DEFAULT_EXAMS;
    },

    /**
     * Quản lý Gemini API Key
     */
    layApiKey() {
        return localStorage.getItem(GEMINI_API_KEY_STORAGE) || '';
    },

    luuApiKey(key) {
        if (!key) {
            localStorage.removeItem(GEMINI_API_KEY_STORAGE);
        } else {
            localStorage.setItem(GEMINI_API_KEY_STORAGE, key.trim());
        }
    },

    /**
     * PROMPT CHUẨN ĐỂ COPY CHO AI NGOÀI (ChatGPT, Claude, Gemini Web)
     */
    layPromptChuan(grade = '7', examTitle = 'Đề Kiểm Tra Giữa Kì I') {
        return `Bạn là một chuyên gia khảo thí và biên soạn đề thi Toán THCS tại Việt Nam. 
Hãy phân tích nội dung văn bản đề thi dưới đây và trích xuất/giải chính xác thành danh sách 28 câu hỏi trắc nghiệm khách quan chuẩn theo đúng định dạng JSON bên dưới.

YÊU CẦU BẮT BUỘC:
1. Môn học: TOÁN ${grade}. Đầy đủ đúng 28 câu hỏi trắc nghiệm (từ Câu 1 đến Câu 28). Mỗi câu đúng chấm 0,25 điểm (tổng 28 câu = 7,0 điểm trắc nghiệm).
2. TẤT CẢ các ký hiệu toán học, phân số, căn thức, góc, hình học, biến số, hệ phương trình PHẢI viết bằng mã LaTeX và kẹp trong dấu $...$ (ví dụ: $\\frac{a}{b}$, $\\sqrt{x}$, $\\widehat{xOy}$, $\\begin{cases} 2x+y=5 \\\\ x-y=1 \\end{cases}$).
3. Đầy đủ 4 phương án A, B, C, D cho mỗi câu.
4. Xác định đáp án đúng chính xác ('A', 'B', 'C', hoặc 'D').
5. Viết lời giải chi tiết, rõ ràng, sư phạm, có công thức LaTeX để học sinh xem lại sau khi nộp bài.
6. Chỉ trả về mã JSON hợp lệ duy nhất, không giải thích thêm ở đầu hoặc cuối.

CẤU TRÚC JSON YÊU CẦU:
{
  "id": "de_toan${grade}_" + Date.now(),
  "title": "${examTitle} Toán ${grade}",
  "grade": "${grade}",
  "school": "TRƯỜNG THCS & THPT MỸ QUÝ",
  "durationMinutes": 90,
  "totalQuestions": 28,
  "maxScore": 10.0,
  "mcqScore": 7.0,
  "scorePerQuestion": 0.25,
  "description": "Đề ôn tập kiểm tra định kì chuẩn 28 câu (0,25 điểm / câu)",
  "questions": [
    {
      "id": 1,
      "number": 1,
      "level": "Nhận biết",
      "content": "Nội dung câu hỏi 1 chứa công thức LaTeX như $x^2 + 2x = 3$...",
      "image": null,
      "options": {
        "A": "Đáp án A chứa LaTeX...",
        "B": "Đáp án B...",
        "C": "Đáp án C...",
        "D": "Đáp án D..."
      },
      "correctAnswer": "A",
      "explanation": "Lời giải chi tiết từng bước có công thức LaTeX..."
    }
  ]
}

NỘI DUNG ĐỀ THI CẦN XỬ LÝ:
[DÁN ĐỀ THI CỦA THẦY VÀO ĐÂY]`;
    },

    /**
     * GỌI API GEMINI TRỰC TIẾP TỪ TRÌNH DUYỆT (CƠ CHẾ 1)
     * Ưu tiên mô hình Gemini 3.6 Flash, tự động fallback an toàn
     */
    async phanTichDeBangGemini(apiKey, rawText, grade = '7', examTitle = 'Đề Thi Mới', onProgress = null, chosenModel = 'gemini-3.6-flash') {
        if (!apiKey) throw new Error('Vui lòng nhập API Key Google Gemini!');
        if (!rawText || rawText.trim().length < 50) {
            throw new Error('Nội dung đề thi quá ngắn! Vui lòng dán đề có ít nhất vài câu hỏi.');
        }

        const candidateModels = [
            chosenModel || "gemini-3.6-flash",
            "gemini-3.6-flash",
            "gemini-flash-latest",
            "gemini-2.5-flash",
            "gemini-2.0-flash",
            "gemini-1.5-flash"
        ];
        const uniqueModels = [...new Set(candidateModels.filter(Boolean))];

        const prompt = `${this.layPromptChuan(grade, examTitle)}

NỘI DUNG ĐỀ THI CẦN XỬ LÝ:
${rawText}`;

        const payload = {
            contents: [
                {
                    parts: [
                        { text: prompt }
                    ]
                }
            ],
            generationConfig: {
                temperature: 0.2,
                topK: 40,
                topP: 0.95,
                maxOutputTokens: 8192
            }
        };

        let lastError = null;
        let successfulData = null;

        for (const mName of uniqueModels) {
            try {
                if (onProgress) onProgress(`Đang gửi dữ liệu tới AI mô hình ${mName}...`);
                const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(mName)}:generateContent?key=${encodeURIComponent(apiKey)}`;
                
                const response = await fetch(endpoint, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });

                if (response.ok) {
                    const data = await response.json();
                    const candidate = data?.candidates?.[0]?.content?.parts?.[0]?.text;
                    if (candidate) {
                        successfulData = candidate;
                        if (onProgress) onProgress(`✅ Đã nhận kết quả thành công từ ${mName}! Đang xử lý câu hỏi...`);
                        break;
                    }
                } else {
                    const errData = await response.json().catch(() => ({}));
                    lastError = new Error(`Lỗi kết nối ${mName} (${response.status}): ${errData?.error?.message || response.statusText}`);
                }
            } catch (err) {
                lastError = err;
            }
        }

        if (!successfulData) {
            throw lastError || new Error('Không thể kết nối với mô hình Gemini AI! Vui lòng kiểm tra lại API Key hoặc kết nối mạng.');
        }

        return this.parseAndValidateExamJson(successfulData);
    },

    /**
     * BÓC TÁCH VÀ KIỂM TRA TÍNH HỢP LỆ CỦA JSON (CƠ CHẾ 2 & 1)
     */
    parseAndValidateExamJson(rawInput) {
        let text = rawInput.trim();
        // Loại bỏ markdown code block nếu có ```json ... ```
        if (text.startsWith('```')) {
            text = text.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/, '');
        }
        // Tìm khối JSON đầu tiên bắt đầu từ '{' đến '}'
        const firstBrace = text.indexOf('{');
        const lastBrace = text.lastIndexOf('}');
        if (firstBrace !== -1 && lastBrace !== -1 && lastBrace > firstBrace) {
            text = text.substring(firstBrace, lastBrace + 1);
        }

        let parsed;
        try {
            parsed = JSON.parse(text);
        } catch (err) {
            throw new Error('Dữ liệu không phải là chuỗi JSON hợp lệ! Chi tiết: ' + err.message);
        }

        if (!parsed.questions || !Array.isArray(parsed.questions)) {
            throw new Error('JSON thiếu danh sách câu hỏi ("questions": [...])!');
        }

        if (parsed.questions.length === 0) {
            throw new Error('Danh sách câu hỏi rỗng!');
        }

        // Chuẩn hóa từng câu hỏi
        parsed.questions = parsed.questions.map((q, idx) => {
            const num = q.number || (idx + 1);
            const opts = q.options || {};
            return {
                id: q.id || num,
                number: num,
                level: q.level || 'Nhận biết',
                content: q.content || `Câu hỏi số ${num}`,
                image: q.image || null,
                options: {
                    A: opts.A || '',
                    B: opts.B || '',
                    C: opts.C || '',
                    D: opts.D || ''
                },
                correctAnswer: (q.correctAnswer || 'A').toUpperCase().trim(),
                explanation: q.explanation || 'Chưa có lời giải chi tiết.'
            };
        });

        parsed.id = parsed.id || ('de_custom_' + Date.now());
        parsed.title = parsed.title || 'Đề Ôn Tập Trắc Nghiệm Mới';
        parsed.totalQuestions = parsed.questions.length;
        parsed.durationMinutes = parsed.durationMinutes || 90;
        parsed.maxScore = parsed.maxScore || 10.0;
        parsed.mcqScore = parsed.mcqScore || 7.0;

        return parsed;
    }
};

// Tự động khởi tạo khi tải trang
if (typeof window !== 'undefined') {
    window.ExamBank = ExamBank;
    ExamBank.khoiTao();
}
