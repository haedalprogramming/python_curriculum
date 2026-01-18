/**
 * [해달에듀] 파이썬 프로그래밍 2차시: 수치 자료형과 변수
 * 자동 슬라이드 생성 스크립트 (36장)
 *
 * 독립 실행 가능한 스크립트입니다.
 */

// ==========================================
// 디자인 시스템 상수 (Global Config)
// ==========================================
const COLORS = {
  // 브랜드 컬러
  HAEDAL_YELLOW: '#FFD506',
  DARK: '#3D3D3D',
  DARK_BG: '#4A4A4A',
  GRAY: '#6B6B6B',
  LIGHT_BG: '#F5F5F5',
  CREAM_BG: '#FFF9E6',
  WHITE: '#FFFFFF',
  RED_HIGHLIGHT: '#E53935',

  // 코드 블록 컬러
  CODE_BG: '#1E1E1E',
  CODE_WHITE: '#D4D4D4'
};

// ==========================================
// 메인 실행 함수
// ==========================================
function createPythonLesson2() {
  var deck = SlidesApp.create("[해달에듀] 파이썬 2차시 - 숫자야 놀자!");
  var slides = deck.getSlides();
  if (slides.length > 0) slides[0].remove();

  var W = deck.getPageWidth();
  var H = deck.getPageHeight();

  // =====================================================
  // PART 1. 도입 (Intro) : 4장
  // =====================================================

  // [Slide 01] 표지
  var s01 = deck.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  s01.getBackground().setSolidFill(COLORS.HAEDAL_YELLOW);
  var coverBox = s01.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, W/2 - 300, H/2 - 180, 600, 360);
  coverBox.getFill().setSolidFill(COLORS.WHITE);
  coverBox.getBorder().setTransparent();
  addText(s01, "숫자야 놀자!", W/2 - 250, H/2 - 100, 500, 48, COLORS.DARK, true, true);
  addText(s01, "🔢 수치 자료형과 변수", W/2 - 250, H/2 - 20, 500, 24, COLORS.GRAY, false, true);
  addText(s01, "2차시 | 해달에듀", W/2 - 250, H/2 + 50, 500, 18, COLORS.GRAY, false, true);

  // [Slide 02] 질문 - 컴퓨터는 계산을 잘할까요?
  var s02 = createHeaderSlide(deck, "컴퓨터는 계산을 잘할까요?");
  addText(s02, "🧮 1000 × 1000 = ?", 50, 110, 620, 28, COLORS.DARK, true);
  createCard(s02, 50, 170, 280, 120, "⏱️ 사람", "10초...", COLORS.LIGHT_BG);
  var vsShape = s02.insertShape(SlidesApp.ShapeType.ELLIPSE, W/2 - 30, 200, 60, 60);
  vsShape.getFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s02, "VS", W/2 - 30, 215, 60, 20, COLORS.DARK, true, true);
  createCard(s02, 390, 170, 280, 120, "⚡ 컴퓨터", "0.0001초!", COLORS.CREAM_BG);
  addText(s02, "컴퓨터 = 엄청 빠른 계산기!", 50, 320, 620, 22, COLORS.DARK, true, true);

  // [Slide 03] 미리보기 - 오늘의 완성작
  var s03 = createHeaderSlide(deck, "오늘의 완성작!");
  createCard(s03, 80, 120, 280, 200, "🧮", "간단 계산기\n두 숫자로 사칙연산!", COLORS.LIGHT_BG);
  createCard(s03, 400, 120, 280, 200, "📊", "BMI 측정기\n키와 몸무게로 계산!", COLORS.CREAM_BG);

  // [Slide 04] 오늘의 미션
  var s04 = createHeaderSlide(deck, "오늘의 미션!");
  var goalBox = s04.insertShape(SlidesApp.ShapeType.RECTANGLE, 100, 120, 520, 260);
  goalBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  goalBox.getBorder().setDashStyle(SlidesApp.DashStyle.DASH).setWeight(2).getLineFill().setSolidFill(COLORS.GRAY);
  addText(s04, "☐ 1. 숫자 자료형 알기 (정수, 실수)\n\n☐ 2. 변수 사용법 익히기\n\n☐ 3. 계산기 만들기", 140, 150, 440, 20, COLORS.DARK);

  // =====================================================
  // PART 2. 숫자 자료형 (Concept 1) : 6장
  // =====================================================

  // [Slide 05] 숫자의 종류
  var s05 = createHeaderSlide(deck, "숫자의 종류");
  createCard(s05, 50, 120, 300, 180, "🔢 정수 (int)", "1, 2, 100, -5\n소수점 없는 숫자", COLORS.LIGHT_BG);
  createCard(s05, 380, 120, 300, 180, "🔢 실수 (float)", "3.14, 0.5, -2.7\n소수점 있는 숫자", COLORS.CREAM_BG);
  var tipBox = s05.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 320, 520, 50);
  tipBox.getFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s05, "💡 소수점이 있으면 실수!", 150, 330, 420, 18, COLORS.DARK, true, true);

  // [Slide 06] 파이썬에서 숫자 쓰기
  var s06 = createHeaderSlide(deck, "파이썬에서 숫자 쓰기");
  createCodeBlock(s06, 50, 110, 620, 140,
    'a = 10      # 정수\n' +
    'b = 3.14    # 실수\n' +
    'print(a, b)');
  addText(s06, "# 뒤의 글자는 주석 (설명용, 실행 안 됨)", 50, 270, 620, 16, COLORS.GRAY);

  // [Slide 07] 자료형 확인하기: type()
  var s07 = createHeaderSlide(deck, "자료형 확인하기: type()");
  createCodeBlock(s07, 50, 110, 620, 120,
    'print(type(10))    # <class \'int\'>\n' +
    'print(type(3.14))  # <class \'float\'>');
  var typeBox = s07.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 250, 620, 60);
  typeBox.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s07, "type() = \"이게 무슨 종류야?\" 물어보는 함수", 80, 265, 560, 18, COLORS.DARK, true, true);

  // [Slide 08] 산술 연산자
  var s08 = createHeaderSlide(deck, "산술 연산자");
  createCard(s08, 50, 110, 150, 100, "+", "더하기", COLORS.LIGHT_BG);
  createCard(s08, 220, 110, 150, 100, "-", "빼기", COLORS.LIGHT_BG);
  createCard(s08, 390, 110, 150, 100, "*", "곱하기 (별표!)", COLORS.CREAM_BG);
  createCard(s08, 560, 110, 130, 100, "/", "나누기", COLORS.LIGHT_BG);
  var starBox = s08.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 390, 230, 150, 50);
  starBox.getFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s08, "⚠️ × 아니고 *", 400, 240, 130, 16, COLORS.DARK, true, true);

  // [Slide 09] 특별한 연산자
  var s09 = createHeaderSlide(deck, "특별한 연산자");
  createCard(s09, 50, 110, 210, 130, "//", "몫 (정수 나누기)\n7 // 2 = 3", COLORS.LIGHT_BG);
  createCard(s09, 280, 110, 210, 130, "%", "나머지\n7 % 2 = 1", COLORS.LIGHT_BG);
  createCard(s09, 510, 110, 180, 130, "**", "거듭제곱\n2 ** 3 = 8", COLORS.CREAM_BG);
  addText(s09, "💡 이 세 가지는 자주 쓰니 꼭 기억하세요!", 50, 270, 620, 18, COLORS.DARK, true);

  // [Slide 10] 연산자 실습
  var s10 = createHeaderSlide(deck, "연산자 실습");
  createCodeBlock(s10, 50, 100, 620, 200,
    'x = 7\n' +
    'y = 2\n' +
    'print(x + y)   # 9\n' +
    'print(x * y)   # 14\n' +
    'print(x / y)   # 3.5\n' +
    'print(x // y)  # 3\n' +
    'print(x % y)   # 1');

  // =====================================================
  // PART 3. 변수 (Concept 2) : 6장
  // =====================================================

  // [Slide 11] 변수가 뭐예요?
  var s11 = createHeaderSlide(deck, "변수가 뭐예요?");
  addText(s11, "📦 이름표가 붙은 상자!", 50, 100, 620, 28, COLORS.DARK, true);
  var varBox = s11.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 160, 400, 150);
  varBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s11, "값을 저장해두는 공간이에요\n\n나이 = 15\n→ \"나이\"라는 상자에 15를 넣음", 80, 180, 340, 16, COLORS.DARK);
  addText(s11, "📦", 520, 180, 80, 60, COLORS.DARK, false, true);
  addText(s11, "나이", 530, 250, 60, 14, COLORS.GRAY, false, true);

  // [Slide 12] 변수 만들기
  var s12 = createHeaderSlide(deck, "변수 만들기");
  createCodeBlock(s12, 50, 100, 620, 130,
    'name = "철수"   # 문자열\n' +
    'age = 15        # 정수\n' +
    'height = 165.5  # 실수');
  var equalBox = s12.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 250, 620, 60);
  equalBox.getFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s12, "💡 = 는 \"같다\"가 아니라 \"저장해!\"라는 뜻", 80, 265, 560, 18, COLORS.DARK, true, true);

  // [Slide 13] 변수 이름 규칙
  var s13 = createHeaderSlide(deck, "변수 이름 규칙");
  var ruleBox = s13.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 100, 620, 270);
  ruleBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s13, "✅ 영문, 숫자, _ 사용 가능\n\n✅ 숫자로 시작 불가\n\n✅ 띄어쓰기 불가\n\n✅ 예약어(if, for 등) 사용 불가", 80, 130, 560, 18, COLORS.DARK);

  // [Slide 14] 변수 이름 예시
  var s14 = createHeaderSlide(deck, "변수 이름 예시");
  createCodeBlock(s14, 50, 100, 620, 180,
    'my_age = 15      # OK ✅\n' +
    'score1 = 100     # OK ✅\n' +
    '1score = 100     # 에러! ❌\n' +
    'my age = 15      # 에러! ❌');

  // [Slide 15] 변수로 계산하기
  var s15 = createHeaderSlide(deck, "변수로 계산하기");
  createCodeBlock(s15, 50, 100, 620, 160,
    'price = 1000\n' +
    'count = 3\n' +
    'total = price * count\n' +
    'print(total)  # 3000');
  addText(s15, "💡 변수끼리 계산도 가능해요!", 50, 280, 620, 20, COLORS.DARK, true);

  // [Slide 16] 변수 값 바꾸기
  var s16 = createHeaderSlide(deck, "변수 값 바꾸기");
  createCodeBlock(s16, 50, 100, 620, 160,
    'score = 80\n' +
    'print(score)  # 80\n' +
    'score = 90    # 새 값으로 덮어쓰기\n' +
    'print(score)  # 90');
  addText(s16, "📦 상자 안의 내용물을 바꾸는 느낌!", 50, 280, 620, 18, COLORS.DARK, true);

  // =====================================================
  // PART 4. 실습 A - 간단 계산기 : 6장
  // =====================================================

  // [Slide 17] 실습 A: 간단 계산기
  var s17 = createHeaderSlide(deck, "실습 A: 간단 계산기");
  var practiceBox = s17.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 100, 620, 120);
  practiceBox.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s17, "🧮 두 숫자를 입력받아\n사칙연산 결과를 보여주는 프로그램!", 80, 130, 560, 22, COLORS.DARK, true, true);
  createImagePlaceholder(s17, 200, 240, 320, 130, "계산기 이미지");

  // [Slide 18] 1단계: 숫자 입력받기
  var s18 = createHeaderSlide(deck, "1단계: 숫자 입력받기");
  createCodeBlock(s18, 50, 100, 620, 100,
    'num1 = int(input("첫 번째 숫자: "))\n' +
    'num2 = int(input("두 번째 숫자: "))');
  var tipBox18 = s18.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 220, 620, 100);
  tipBox18.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s18, "💡 input() = 사용자 입력 받기\n💡 int() = 숫자로 바꾸기", 80, 245, 560, 18, COLORS.DARK);

  // [Slide 19] 2단계: 계산하기
  var s19 = createHeaderSlide(deck, "2단계: 계산하기");
  createCodeBlock(s19, 50, 100, 620, 160,
    'add = num1 + num2\n' +
    'sub = num1 - num2\n' +
    'mul = num1 * num2\n' +
    'div = num1 / num2');

  // [Slide 20] 3단계: 결과 출력하기
  var s20 = createHeaderSlide(deck, "3단계: 결과 출력하기");
  createCodeBlock(s20, 50, 100, 620, 160,
    'print("더하기:", add)\n' +
    'print("빼기:", sub)\n' +
    'print("곱하기:", mul)\n' +
    'print("나누기:", div)');

  // [Slide 21] 완성 코드
  var s21 = createHeaderSlide(deck, "완성 코드");
  var completeBox = s21.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 45, 95, 630, 290);
  completeBox.getFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  createCodeBlock(s21, 50, 100, 620, 280,
    'num1 = int(input("첫 번째 숫자: "))\n' +
    'num2 = int(input("두 번째 숫자: "))\n\n' +
    'print("더하기:", num1 + num2)\n' +
    'print("빼기:", num1 - num2)\n' +
    'print("곱하기:", num1 * num2)\n' +
    'print("나누기:", num1 / num2)');

  // [Slide 22] 실행 결과
  var s22 = createHeaderSlide(deck, "실행 결과");
  createCodeBlock(s22, 50, 100, 620, 200,
    '첫 번째 숫자: 10\n' +
    '두 번째 숫자: 3\n' +
    '더하기: 13\n' +
    '빼기: 7\n' +
    '곱하기: 30\n' +
    '나누기: 3.333...');
  addText(s22, "🎉 계산기 완성!", 250, 320, 200, 24, COLORS.DARK, true, true);

  // =====================================================
  // PART 5. 실습 B - BMI 측정기 : 6장
  // =====================================================

  // [Slide 23] 실습 B: BMI 측정기
  var s23 = createHeaderSlide(deck, "실습 B: BMI 측정기");
  var bmiBox = s23.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 100, 620, 100);
  bmiBox.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s23, "📊 키와 몸무게로 BMI를 계산해요!", 80, 130, 560, 22, COLORS.DARK, true, true);
  var formulaBox = s23.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 220, 520, 80);
  formulaBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s23, "BMI = 몸무게(kg) ÷ 키(m)²", 150, 245, 420, 20, COLORS.DARK, true, true);

  // [Slide 24] BMI 공식 파헤치기
  var s24 = createHeaderSlide(deck, "BMI 공식 파헤치기");
  createCodeBlock(s24, 50, 100, 620, 80,
    'bmi = weight / (height ** 2)');
  var explainBox = s24.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 200, 620, 150);
  explainBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s24, "• weight: 몸무게 (kg)\n• height: 키 (m 단위!)\n• **2: 제곱", 80, 225, 560, 18, COLORS.DARK);

  // [Slide 25] 1단계: 입력받기
  var s25 = createHeaderSlide(deck, "1단계: 입력받기");
  createCodeBlock(s25, 50, 100, 620, 100,
    'weight = float(input("몸무게(kg): "))\n' +
    'height = float(input("키(m): "))');
  var floatBox = s25.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 220, 620, 60);
  floatBox.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s25, "💡 float() = 실수로 바꾸기 (소수점 가능)", 80, 235, 560, 18, COLORS.DARK, true, true);

  // [Slide 26] 2단계: BMI 계산
  var s26 = createHeaderSlide(deck, "2단계: BMI 계산");
  createCodeBlock(s26, 50, 100, 620, 80,
    'bmi = weight / (height ** 2)');
  var warnBox = s26.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 200, 620, 80);
  warnBox.getFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s26, "⚠️ 괄호 조심! 키를 먼저 제곱해야 해요", 80, 225, 560, 18, COLORS.DARK, true, true);

  // [Slide 27] 3단계: 결과 출력
  var s27 = createHeaderSlide(deck, "3단계: 결과 출력");
  createCodeBlock(s27, 50, 100, 620, 100,
    'print("당신의 BMI:", bmi)\n' +
    'print("반올림:", round(bmi, 1))');
  addText(s27, "💡 round(값, 자릿수) = 반올림 함수", 50, 220, 620, 18, COLORS.GRAY);

  // [Slide 28] 실행 결과
  var s28 = createHeaderSlide(deck, "실행 결과");
  createCodeBlock(s28, 50, 100, 620, 150,
    '몸무게(kg): 65\n' +
    '키(m): 1.75\n' +
    '당신의 BMI: 21.22448...\n' +
    '반올림: 21.2');
  addText(s28, "🏃 건강한 BMI!", 280, 270, 200, 24, COLORS.DARK, true, true);

  // =====================================================
  // PART 6. 도전 과제 : 4장
  // =====================================================

  // [Slide 29] 도전 과제
  var s29 = createHeaderSlide(deck, "도전 과제!");
  var challengeBox = s29.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 100, 620, 150);
  challengeBox.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s29, "🏆 원의 넓이를 구하는 프로그램을 만들어보세요!", 80, 120, 560, 20, COLORS.DARK, true);
  addText(s29, "공식: 넓이 = π × 반지름²\n힌트: π = 3.14159", 80, 170, 560, 18, COLORS.GRAY);
  addText(s29, "⭕", 300, 270, 100, 60, COLORS.DARK, false, true);

  // [Slide 30] 힌트
  var s30 = createHeaderSlide(deck, "힌트");
  var hintBox = s30.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 100, 620, 250);
  hintBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s30, "1. 반지름을 입력받기\n\n2. pi = 3.14159 저장\n\n3. 넓이 = pi * 반지름 ** 2\n\n4. 결과 출력", 80, 130, 560, 20, COLORS.DARK);

  // [Slide 31] 정답 공개
  var s31 = createHeaderSlide(deck, "정답 공개!");
  createCodeBlock(s31, 50, 100, 620, 180,
    'radius = float(input("반지름: "))\n' +
    'pi = 3.14159\n' +
    'area = pi * radius ** 2\n' +
    'print("원의 넓이:", round(area, 2))');

  // [Slide 32] 해설
  var s32 = createHeaderSlide(deck, "해설");
  var solBox = s32.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 100, 620, 270);
  solBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s32, "• radius: 반지름 변수\n\n• pi: 원주율 저장\n\n• **2: 반지름의 제곱\n\n• round(): 소수점 정리", 80, 130, 560, 20, COLORS.DARK);

  // =====================================================
  // PART 7. 마무리 : 4장
  // =====================================================

  // [Slide 33] 오늘 배운 것
  var s33 = createHeaderSlide(deck, "오늘 배운 것");
  var reviewBox = s33.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 100, 620, 280);
  reviewBox.getFill().setSolidFill(COLORS.CREAM_BG);
  reviewBox.getBorder().setWeight(3).getLineFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s33, "✅ 정수(int), 실수(float)\n\n✅ 산술 연산자: + - * / // % **\n\n✅ 변수 = 값을 저장하는 상자\n\n✅ input()으로 입력, print()로 출력", 80, 130, 560, 20, COLORS.DARK);

  // [Slide 34] SOS
  var s34 = deck.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  s34.getBackground().setSolidFill(COLORS.DARK_BG);
  addText(s34, "🆘 도와주세요!", 50, 30, 620, 28, COLORS.HAEDAL_YELLOW, true);
  var sos1 = s34.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 30, 90, 220, 160);
  sos1.getFill().setSolidFill("#5A5A5A");
  addText(s34, "TypeError", 50, 110, 180, 16, COLORS.WHITE, true);
  addText(s34, "→ int() 또는\nfloat()로 변환!", 50, 150, 180, 14, COLORS.LIGHT_BG);
  var sos2 = s34.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 265, 90, 220, 160);
  sos2.getFill().setSolidFill("#5A5A5A");
  addText(s34, "ZeroDivision", 285, 110, 180, 16, COLORS.WHITE, true);
  addText(s34, "→ 0으로 나누면\n안 돼요!", 285, 150, 180, 14, COLORS.LIGHT_BG);
  var sos3 = s34.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 500, 90, 200, 160);
  sos3.getFill().setSolidFill("#5A5A5A");
  addText(s34, "NameError", 520, 110, 160, 16, COLORS.WHITE, true);
  addText(s34, "→ 변수명 오타\n확인!", 520, 150, 160, 14, COLORS.LIGHT_BG);

  // [Slide 35] 예고
  var s35 = deck.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  s35.getBackground().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s35, "다음 시간에는...", W/2 - 200, H/2 - 100, 400, 28, COLORS.DARK, true, true);
  addText(s35, "📝 문자열(텍스트)을 다뤄볼 거예요!", W/2 - 200, H/2 - 30, 400, 22, COLORS.WHITE, true, true);
  addText(s35, "글자를 자르고, 붙이고, 꾸미는 방법!", W/2 - 200, H/2 + 20, 400, 18, COLORS.WHITE, false, true);
  addText(s35, "3차시에서 만나요!", W/2 - 150, H/2 + 100, 300, 20, COLORS.DARK, true, true);

  // [Slide 36] 엔딩
  var s36 = deck.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  s36.getBackground().setSolidFill(COLORS.HAEDAL_YELLOW);
  var endBox = s36.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, W/2 - 250, H/2 - 120, 500, 240);
  endBox.getFill().setSolidFill(COLORS.WHITE);
  addText(s36, "수고했어요!", W/2 - 200, H/2 - 80, 400, 36, COLORS.DARK, true, true);
  addText(s36, "🔢 이제 파이썬으로 계산도 척척!", W/2 - 200, H/2 - 20, 400, 20, COLORS.GRAY, false, true);
  addText(s36, "2차시 완료", W/2 - 100, H/2 + 60, 200, 24, COLORS.HAEDAL_YELLOW, true, true);

  Logger.log("슬라이드 생성 완료! (총 36장) URL: " + deck.getUrl());
}

// =======================================================
// [Helper Functions] 도구 함수들
// =======================================================

function createHeaderSlide(deck, title) {
  var slide = deck.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  var header = slide.insertShape(SlidesApp.ShapeType.RECTANGLE, 0, 0, deck.getPageWidth(), 70);
  header.getFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  header.getBorder().setTransparent();
  addText(slide, title, 30, 15, 660, 32, COLORS.DARK, true);
  return slide;
}

function addText(slide, text, x, y, w, fontSize, color, isBold, isCenter) {
  var textBox = slide.insertTextBox(text, x, y, w, fontSize * 2.5);
  var style = textBox.getText().getTextStyle();
  style.setFontSize(fontSize).setForegroundColor(color).setFontFamily("Roboto");
  if (isBold) style.setBold(true);
  if (isCenter) {
    textBox.getText().getParagraphStyle().setParagraphAlignment(SlidesApp.ParagraphAlignment.CENTER);
  }
  return textBox;
}

function createCard(slide, x, y, w, h, title, content, bgColor) {
  var card = slide.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, x, y, w, h);
  card.getFill().setSolidFill(bgColor);
  card.getBorder().setTransparent();
  addText(slide, title, x + 10, y + 10, w - 20, 24, COLORS.DARK, true, true);
  addText(slide, content, x + 10, y + 50, w - 20, 14, COLORS.GRAY, false, true);
}

function createImagePlaceholder(slide, x, y, w, h, altText) {
  var placeholder = slide.insertShape(SlidesApp.ShapeType.RECTANGLE, x, y, w, h);
  placeholder.getFill().setSolidFill('#E0E0E0');
  placeholder.getBorder().setDashStyle(SlidesApp.DashStyle.DASH).setWeight(2).getLineFill().setSolidFill(COLORS.GRAY);
  addText(slide, "📷 " + altText, x + 10, y + h/2 - 20, w - 20, 11, COLORS.GRAY, false, true);
}

function createCodeBlock(slide, x, y, w, h, code) {
  var codeBox = slide.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, x, y, w, h);
  codeBox.getFill().setSolidFill(COLORS.CODE_BG);
  codeBox.getBorder().setTransparent();
  var textBox = slide.insertTextBox(code, x + 20, y + 15, w - 40, h - 30);
  var style = textBox.getText().getTextStyle();
  style.setFontSize(16).setForegroundColor(COLORS.CODE_WHITE).setFontFamily("Consolas");
  return codeBox;
}
