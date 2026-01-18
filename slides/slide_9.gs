/**
 * [해달에듀] 파이썬 프로그래밍 9차시: 함수 (Function)
 * 자동 슬라이드 생성 스크립트 (35장)
 *
 * 독립 실행 가능한 스크립트입니다.
 */

// ==========================================
// 디자인 시스템 상수 (Global Config)
// ==========================================
const COLORS = {
  HAEDAL_YELLOW: '#FFD506',
  DARK: '#3D3D3D',
  DARK_BG: '#4A4A4A',
  GRAY: '#6B6B6B',
  LIGHT_BG: '#F5F5F5',
  CREAM_BG: '#FFF9E6',
  WHITE: '#FFFFFF',
  RED_HIGHLIGHT: '#E53935',
  CODE_BG: '#1E1E1E',
  CODE_GREEN: '#6A9955',
  CODE_BLUE: '#569CD6',
  CODE_ORANGE: '#CE9178',
  CODE_YELLOW: '#DCDCAA',
  CODE_PURPLE: '#C586C0',
  CODE_WHITE: '#D4D4D4'
};

// ==========================================
// 메인 실행 함수
// ==========================================
function createPythonLesson9() {
  var deck = SlidesApp.create("[해달에듀] 파이썬 9차시 - 함수 만들기");
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
  addText(s01, "코드를 묶어서 재사용!", W/2 - 250, H/2 - 100, 500, 44, COLORS.DARK, true, true);
  addText(s01, "📝 함수 만들기", W/2 - 250, H/2 - 20, 500, 24, COLORS.GRAY, false, true);
  addText(s01, "9차시 | 해달에듀", W/2 - 250, H/2 + 50, 500, 18, COLORS.GRAY, false, true);

  // [Slide 02] 질문
  var s02 = createHeaderSlide(deck, "같은 코드를 여러 번 쓰고 있나요?");
  var oldWay = s02.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 100, 300, 150);
  oldWay.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s02, "😅 복붙... 복붙... 복붙...", 70, 150, 260, 16, COLORS.GRAY, true, true);
  var newWay = s02.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 380, 100, 300, 150);
  newWay.getFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s02, "😎 함수로 한 번만 만들고\n계속 재사용!", 400, 145, 260, 16, COLORS.DARK, true, true);

  // [Slide 03] 미리보기
  var s03 = createHeaderSlide(deck, "오늘의 완성작!");
  createCard(s03, 100, 120, 250, 150, "🧮", "나만의\n계산기 함수", COLORS.CREAM_BG);
  createCard(s03, 380, 120, 250, 150, "👋", "맞춤형\n인사 함수", COLORS.CREAM_BG);

  // [Slide 04] 오늘의 미션
  var s04 = createHeaderSlide(deck, "오늘의 미션!");
  var goalBox = s04.insertShape(SlidesApp.ShapeType.RECTANGLE, 100, 120, 520, 230);
  goalBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  goalBox.getBorder().setDashStyle(SlidesApp.DashStyle.DASH).setWeight(2).getLineFill().setSolidFill(COLORS.GRAY);
  addText(s04, "☐ 1. 함수가 뭔지 이해하기\n\n☐ 2. 함수 정의하고 호출하기\n\n☐ 3. 매개변수와 반환값\n\n☐ 4. 나만의 함수 만들기", 140, 150, 440, 20, COLORS.DARK);

  // =====================================================
  // PART 2. 함수 기초 (Concept 1) : 6장
  // =====================================================

  // [Slide 05] 함수란?
  var s05 = createHeaderSlide(deck, "함수(Function)란?");
  addText(s05, "📝 요리 레시피처럼!", 50, 100, 620, 24, COLORS.DARK, true);
  var recipeBox = s05.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 150, 620, 140);
  recipeBox.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s05, "1. 재료를 넣으면 (입력)\n2. 레시피대로 요리하고 (처리)\n3. 음식이 나온다 (출력)\n\n코드를 묶어서 이름 붙인 것!", 80, 170, 560, 16, COLORS.DARK);

  // [Slide 06] 이미 쓰고 있는 함수들
  var s06 = createHeaderSlide(deck, "이미 쓰고 있는 함수들!");
  createCodeBlock(s06, 50, 100, 620, 160, 'print("안녕")     # 출력 함수\ninput("이름: ")   # 입력 함수\nlen("Hello")      # 길이 함수\nint("123")        # 변환 함수');
  addText(s06, "이것들 모두 함수예요!", 100, 280, 520, 20, COLORS.DARK, true, true);

  // [Slide 07] 함수 만들기 (정의)
  var s07 = createHeaderSlide(deck, "함수 만들기 (정의)");
  createCodeBlock(s07, 50, 100, 620, 100, 'def 함수이름():\n    실행할 코드');
  createCodeBlock(s07, 50, 220, 620, 80, '# 예시\ndef say_hello():\n    print("안녕하세요!")');
  addText(s07, "def = define(정의하다)", 480, 320, 200, 16, COLORS.GRAY);

  // [Slide 08] 함수 사용하기 (호출)
  var s08 = createHeaderSlide(deck, "함수 사용하기 (호출)");
  createCodeBlock(s08, 50, 100, 620, 200, 'def say_hello():\n    print("안녕하세요!")\n\n# 함수 호출\nsay_hello()  # 안녕하세요!\nsay_hello()  # 안녕하세요!\nsay_hello()  # 안녕하세요!');
  addText(s08, "함수이름() 으로 호출!", 100, 320, 520, 18, COLORS.DARK, true, true);

  // [Slide 09] 정의 vs 호출
  var s09 = createHeaderSlide(deck, "⚠️ 정의 vs 호출");
  createCodeBlock(s09, 50, 100, 620, 160, '# 정의만 하면 실행 안 됨!\ndef greet():\n    print("Hi!")\n\n# 호출해야 실행됨!\ngreet()');
  var tipBox = s09.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 280, 520, 50);
  tipBox.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s09, "정의 = 레시피 작성 | 호출 = 실제 요리", 120, 293, 480, 16, COLORS.DARK, true, true);

  // [Slide 10] 여러 줄 함수
  var s10 = createHeaderSlide(deck, "여러 줄 함수");
  createCodeBlock(s10, 50, 100, 620, 180, 'def introduce():\n    print("=" * 20)\n    print("안녕하세요!")\n    print("저는 파이썬입니다.")\n    print("=" * 20)\n\nintroduce()');

  // =====================================================
  // PART 3. 매개변수 (Concept 2) : 6장
  // =====================================================

  // [Slide 11] 매개변수란?
  var s11 = createHeaderSlide(deck, "매개변수란?");
  addText(s11, "📦 함수에 전달하는 재료!", 50, 100, 620, 22, COLORS.DARK, true);
  createCodeBlock(s11, 50, 150, 620, 160, 'def greet(name):  # name = 매개변수\n    print(f"안녕, {name}!")\n\ngreet("철수")  # 안녕, 철수!\ngreet("영희")  # 안녕, 영희!');
  addText(s11, "같은 함수, 다른 결과!", 100, 330, 520, 18, COLORS.DARK, true, true);

  // [Slide 12] 매개변수 여러 개
  var s12 = createHeaderSlide(deck, "매개변수 여러 개");
  createCodeBlock(s12, 50, 100, 620, 160, 'def add(a, b):\n    print(f"{a} + {b} = {a + b}")\n\nadd(3, 5)   # 3 + 5 = 8\nadd(10, 20) # 10 + 20 = 30');
  addText(s12, "쉼표로 구분!", 100, 280, 520, 18, COLORS.DARK, true, true);

  // [Slide 13] 기본값 설정
  var s13 = createHeaderSlide(deck, "기본값 설정");
  createCodeBlock(s13, 50, 100, 620, 160, 'def greet(name, msg="안녕하세요"):\n    print(f"{name}님, {msg}!")\n\ngreet("철수")           # 철수님, 안녕하세요!\ngreet("영희", "반가워요") # 영희님, 반가워요!');
  addText(s13, "기본값 있으면 생략 가능!", 100, 280, 520, 18, COLORS.DARK, true, true);

  // [Slide 14] 키워드 인수
  var s14 = createHeaderSlide(deck, "키워드 인수");
  createCodeBlock(s14, 50, 100, 620, 160, 'def info(name, age, city):\n    print(f"{name}, {age}살, {city}")\n\n# 키워드로 순서 상관없이!\ninfo(age=20, city="서울", name="민수")');

  // [Slide 15] 매개변수 vs 인수
  var s15 = createHeaderSlide(deck, "⚠️ 매개변수 vs 인수");
  createCodeBlock(s15, 50, 100, 620, 120, 'def greet(name):  # 매개변수 (parameter)\n    print(name)\n\ngreet("철수")     # 인수 (argument)');
  var termBox = s15.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 250, 520, 60);
  termBox.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s15, "정의할 때 = 매개변수 | 호출할 때 = 인수", 120, 268, 480, 16, COLORS.DARK, true, true);

  // [Slide 16] 실습: 사칙연산 함수
  var s16 = createHeaderSlide(deck, "실습: 사칙연산 함수");
  createCodeBlock(s16, 50, 90, 620, 250, 'def calc(a, b, op):\n    if op == "+":\n        print(a + b)\n    elif op == "-":\n        print(a - b)\n    elif op == "*":\n        print(a * b)\n    elif op == "/":\n        print(a / b)\n\ncalc(10, 3, "+")  # 13\ncalc(10, 3, "*")  # 30');

  // =====================================================
  // PART 4. 반환값 (Concept 3) : 5장
  // =====================================================

  // [Slide 17] return이란?
  var s17 = createHeaderSlide(deck, "return이란?");
  addText(s17, "🎁 함수가 결과를 돌려주는 것!", 50, 100, 620, 22, COLORS.DARK, true);
  createCodeBlock(s17, 50, 150, 620, 150, 'def add(a, b):\n    return a + b  # 결과 반환!\n\nresult = add(3, 5)\nprint(result)  # 8');
  addText(s17, "return = 결과를 돌려줘!", 100, 320, 520, 18, COLORS.DARK, true, true);

  // [Slide 18] return 활용
  var s18 = createHeaderSlide(deck, "return 활용");
  createCodeBlock(s18, 50, 100, 620, 180, 'def square(n):\n    return n ** 2\n\nx = square(4)  # 16\ny = square(5)  # 25\nprint(x + y)   # 41');
  addText(s18, "반환된 값을 변수에 저장!", 100, 300, 520, 18, COLORS.DARK, true, true);

  // [Slide 19] 여러 값 반환
  var s19 = createHeaderSlide(deck, "여러 값 반환");
  createCodeBlock(s19, 50, 100, 620, 180, 'def calc(a, b):\n    return a + b, a - b, a * b, a / b\n\nadd, sub, mul, div = calc(10, 3)\nprint(add, sub, mul, div)\n# 13 7 30 3.333...');
  addText(s19, "쉼표로 여러 값 반환!", 100, 300, 520, 18, COLORS.DARK, true, true);

  // [Slide 20] print vs return
  var s20 = createHeaderSlide(deck, "print vs return");
  createCodeBlock(s20, 50, 100, 620, 200, '# print: 화면에 출력만\ndef add1(a, b):\n    print(a + b)\n\n# return: 값을 돌려줌\ndef add2(a, b):\n    return a + b\n\nresult1 = add1(1, 2)  # None\nresult2 = add2(1, 2)  # 3');

  // [Slide 21] return 후 코드
  var s21 = createHeaderSlide(deck, "return 후 코드");
  createCodeBlock(s21, 50, 100, 620, 180, 'def test():\n    print("A")\n    return "끝"\n    print("B")  # 실행 안 됨!\n\nprint(test())  # A, 끝');
  var warnBox = s21.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 300, 520, 40);
  warnBox.getFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s21, "return 하면 함수 종료!", 120, 308, 480, 18, COLORS.DARK, true, true);

  // =====================================================
  // PART 5. 실습 A - 계산기 함수 (Practice A) : 5장
  // =====================================================

  // [Slide 22] 실습 A 안내
  var s22 = createHeaderSlide(deck, "실습 A: 나만의 계산기");
  addText(s22, "🧮 사칙연산 함수를 각각 만들어요!", 50, 120, 620, 24, COLORS.DARK, true, true);
  createImagePlaceholder(s22, 200, 180, 320, 140, "계산기 이미지");

  // [Slide 23] 함수 정의
  var s23 = createHeaderSlide(deck, "함수 정의");
  createCodeBlock(s23, 50, 90, 620, 250, 'def add(a, b):\n    return a + b\n\ndef subtract(a, b):\n    return a - b\n\ndef multiply(a, b):\n    return a * b\n\ndef divide(a, b):\n    if b == 0:\n        return "0으로 나눌 수 없어요!"\n    return a / b');

  // [Slide 24] 함수 활용
  var s24 = createHeaderSlide(deck, "함수 활용");
  createCodeBlock(s24, 50, 100, 620, 180, 'x, y = 10, 3\n\nprint(f"{x} + {y} = {add(x, y)}")\nprint(f"{x} - {y} = {subtract(x, y)}")\nprint(f"{x} × {y} = {multiply(x, y)}")\nprint(f"{x} ÷ {y} = {divide(x, y):.2f}")');

  // [Slide 25] 실행 결과
  var s25 = createHeaderSlide(deck, "실행 결과");
  var resultBox = s25.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 120, 520, 160);
  resultBox.getFill().setSolidFill(COLORS.CODE_BG);
  addText(s25, "10 + 3 = 13\n10 - 3 = 7\n10 × 3 = 30\n10 ÷ 3 = 3.33", 130, 150, 460, 20, COLORS.CODE_WHITE);

  // [Slide 26] 확장: 계산기 통합
  var s26 = createHeaderSlide(deck, "확장: 계산기 통합");
  createCodeBlock(s26, 50, 100, 620, 180, 'def calculator(a, b, op):\n    if op == "+": return add(a, b)\n    if op == "-": return subtract(a, b)\n    if op == "*": return multiply(a, b)\n    if op == "/": return divide(a, b)\n\nprint(calculator(5, 3, "+"))  # 8');

  // =====================================================
  // PART 6. 실습 B - 인사 함수 (Practice B) : 4장
  // =====================================================

  // [Slide 27] 실습 B 안내
  var s27 = createHeaderSlide(deck, "실습 B: 맞춤 인사 함수");
  addText(s27, "👋 상황에 맞는 인사 함수들!", 50, 120, 620, 24, COLORS.DARK, true, true);

  // [Slide 28] 인사 함수들
  var s28 = createHeaderSlide(deck, "인사 함수들");
  createCodeBlock(s28, 50, 90, 620, 230, 'def morning_greet(name):\n    return f"좋은 아침이에요, {name}님! ☀️"\n\ndef evening_greet(name):\n    return f"좋은 저녁이에요, {name}님! 🌙"\n\ndef birthday_greet(name, age):\n    return f"🎂 {name}님, {age}살 생일 축하해요!"');

  // [Slide 29] 함수 사용
  var s29 = createHeaderSlide(deck, "함수 사용");
  createCodeBlock(s29, 50, 100, 620, 120, 'print(morning_greet("철수"))\nprint(evening_greet("영희"))\nprint(birthday_greet("민수", 15))');

  // [Slide 30] 실행 결과
  var s30 = createHeaderSlide(deck, "실행 결과");
  var resultBox30 = s30.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 120, 520, 150);
  resultBox30.getFill().setSolidFill(COLORS.CODE_BG);
  addText(s30, "좋은 아침이에요, 철수님! ☀️\n좋은 저녁이에요, 영희님! 🌙\n🎂 민수님, 15살 생일 축하해요!", 130, 150, 460, 18, COLORS.CODE_WHITE);

  // =====================================================
  // PART 7. 마무리 (Finish) : 5장
  // =====================================================

  // [Slide 31] 도전 과제
  var s31 = createHeaderSlide(deck, "도전 과제!");
  var challengeBox = s31.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 80, 100, 560, 200);
  challengeBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s31, "🏆 BMI 계산 함수 만들기!", 100, 120, 520, 20, COLORS.DARK, true, true);
  createCodeBlock(s31, 100, 160, 460, 120, 'def calc_bmi(weight, height):\n    # 여기에 코드 작성\n\nbmi = calc_bmi(70, 1.75)\nprint(f"BMI: {bmi}")');

  // [Slide 32] 정답 공개
  var s32 = createHeaderSlide(deck, "정답 공개!");
  createCodeBlock(s32, 50, 100, 620, 150, 'def calc_bmi(weight, height):\n    bmi = weight / (height ** 2)\n    return round(bmi, 1)\n\nprint(calc_bmi(70, 1.75))  # 22.9');

  // [Slide 33] 오늘 배운 것
  var s33 = createHeaderSlide(deck, "오늘 배운 것");
  var reviewBox = s33.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 80, 110, 560, 200);
  reviewBox.getFill().setSolidFill(COLORS.CREAM_BG);
  reviewBox.getBorder().setWeight(3).getLineFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s33, "✅ def 함수이름(): (함수 정의)\n\n✅ 매개변수로 값 전달\n\n✅ return으로 결과 반환\n\n✅ 함수 = 재사용 가능한 코드 묶음", 100, 140, 520, 16, COLORS.DARK);

  // [Slide 34] 예고
  var s34 = deck.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  s34.getBackground().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s34, "다음 시간에는...", W/2 - 200, H/2 - 100, 400, 28, COLORS.DARK, true, true);
  addText(s34, "🔄 지금까지 배운 내용 총정리!", W/2 - 200, H/2 - 30, 400, 24, COLORS.WHITE, true, true);
  addText(s34, "Part 1 완료 복습 시간!", W/2 - 200, H/2 + 30, 400, 18, COLORS.DARK, false, true);

  // [Slide 35] 엔딩
  var s35 = deck.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  s35.getBackground().setSolidFill(COLORS.HAEDAL_YELLOW);
  var endBox = s35.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, W/2 - 250, H/2 - 120, 500, 240);
  endBox.getFill().setSolidFill(COLORS.WHITE);
  addText(s35, "수고했어요!", W/2 - 200, H/2 - 80, 400, 36, COLORS.DARK, true, true);
  addText(s35, "📝 이제 나만의 함수를\n만들 수 있어요!", W/2 - 200, H/2 - 20, 400, 18, COLORS.GRAY, false, true);
  addText(s35, "9차시 완료", W/2 - 100, H/2 + 60, 200, 24, COLORS.HAEDAL_YELLOW, true, true);

  Logger.log("슬라이드 생성 완료! (총 35장) URL: " + deck.getUrl());
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
  addText(slide, title, x + 20, y + 15, w - 40, 24, COLORS.DARK, true, true);
  addText(slide, content, x + 10, y + 55, w - 20, 14, COLORS.GRAY, false, true);
}

function createImagePlaceholder(slide, x, y, w, h, altText) {
  var placeholder = slide.insertShape(SlidesApp.ShapeType.RECTANGLE, x, y, w, h);
  placeholder.getFill().setSolidFill('#E0E0E0');
  placeholder.getBorder().setDashStyle(SlidesApp.DashStyle.DASH).setWeight(2).getLineFill().setSolidFill(COLORS.GRAY);
  addText(slide, "📷 " + altText, x + 10, y + h/2 - 30, w - 20, 11, COLORS.GRAY, false, true);
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
