/**
 * [해달에듀] 파이썬 프로그래밍 5차시: 입력과 출력
 * 자동 슬라이드 생성 스크립트 (32장)
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
function createPythonLesson5() {
  var deck = SlidesApp.create("[해달에듀] 파이썬 5차시 - 입력과 출력 마스터하기");
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
  addText(s01, "컴퓨터와 대화하자!", W/2 - 250, H/2 - 100, 500, 48, COLORS.DARK, true, true);
  addText(s01, "💬 입력과 출력", W/2 - 250, H/2 - 20, 500, 24, COLORS.GRAY, false, true);
  addText(s01, "5차시 | 해달에듀", W/2 - 250, H/2 + 50, 500, 18, COLORS.GRAY, false, true);

  // [Slide 02] 질문
  var s02 = createHeaderSlide(deck, "프로그램은 어떻게 대화할까?");
  createCard(s02, 80, 120, 250, 130, "🎤", "입력(input)\n사용자가 말하기", COLORS.LIGHT_BG);
  createCard(s02, 380, 120, 250, 130, "🔊", "출력(print)\n컴퓨터가 대답하기", COLORS.LIGHT_BG);
  var answerBox = s02.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 280, 520, 50);
  answerBox.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s02, "이 둘로 대화형 프로그램 완성!", 120, 292, 480, 18, COLORS.DARK, true, true);

  // [Slide 03] 미리보기
  var s03 = createHeaderSlide(deck, "오늘의 완성작!");
  createCard(s03, 100, 120, 250, 150, "👋", "맞춤형 인사\n프로그램", COLORS.CREAM_BG);
  createCard(s03, 380, 120, 250, 150, "🧾", "영수증 출력\n프로그램", COLORS.CREAM_BG);

  // [Slide 04] 오늘의 미션
  var s04 = createHeaderSlide(deck, "오늘의 미션!");
  var goalBox = s04.insertShape(SlidesApp.ShapeType.RECTANGLE, 100, 120, 520, 230);
  goalBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  goalBox.getBorder().setDashStyle(SlidesApp.DashStyle.DASH).setWeight(2).getLineFill().setSolidFill(COLORS.GRAY);
  addText(s04, "☐ 1. input()으로 입력받기\n\n☐ 2. 형 변환 (int, float)\n\n☐ 3. print() 고급 기능\n\n☐ 4. 영수증 프로그램 만들기", 140, 150, 440, 20, COLORS.DARK);

  // =====================================================
  // PART 2. input() 함수 (Concept 1) : 6장
  // =====================================================

  // [Slide 05] input()이란?
  var s05 = createHeaderSlide(deck, "input()이란?");
  addText(s05, "🎤 사용자의 입력을 기다리는 함수", 50, 100, 620, 24, COLORS.DARK, true);
  var inputBox = s05.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 160, 620, 80);
  inputBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s05, "input(\"메시지\")\n메시지 보여주고 → 입력 기다리기", 80, 175, 560, 18, COLORS.DARK, false, true);

  // [Slide 06] input() 기본 사용
  var s06 = createHeaderSlide(deck, "input() 기본 사용");
  createCodeBlock(s06, 50, 100, 620, 120, 'name = input("이름이 뭐예요? ")\nprint(f"안녕, {name}!")');
  var tipBox6 = s06.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 250, 520, 50);
  tipBox6.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s06, "입력한 값이 name에 저장!", 120, 262, 480, 18, COLORS.DARK, true, true);

  // [Slide 07] input()은 항상 문자열
  var s07 = createHeaderSlide(deck, "⚠️ input()은 항상 문자열!");
  createCodeBlock(s07, 50, 100, 620, 120, 'age = input("나이: ")  # "15"\nprint(type(age))  # <class \'str\'>');
  var warnBox = s07.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 250, 520, 60);
  warnBox.getFill().setSolidFill(COLORS.RED_HIGHLIGHT);
  addText(s07, "숫자를 입력해도 문자열로 저장!", 120, 268, 480, 18, COLORS.WHITE, true, true);

  // [Slide 08] 형 변환
  var s08 = createHeaderSlide(deck, "형 변환 (Type Conversion)");
  createCodeBlock(s08, 50, 100, 620, 140, '# 문자열 → 정수\nage = int(input("나이: "))\n\n# 문자열 → 실수\nheight = float(input("키: "))');
  var tipBox8 = s08.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 260, 520, 50);
  tipBox8.getFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s08, "int(), float()로 숫자 변환!", 120, 272, 480, 18, COLORS.DARK, true, true);

  // [Slide 09] 형 변환 실습
  var s09 = createHeaderSlide(deck, "형 변환 실습");
  createCodeBlock(s09, 50, 100, 620, 140, 'num1 = int(input("첫 번째 숫자: "))\nnum2 = int(input("두 번째 숫자: "))\nprint(f"합: {num1 + num2}")');
  addText(s09, "변환 안 하면 문자열 더하기 됨!", 100, 260, 520, 18, COLORS.DARK, true, true);

  // [Slide 10] ValueError 주의
  var s10 = createHeaderSlide(deck, "⚠️ ValueError 주의!");
  createCodeBlock(s10, 50, 100, 620, 100, 'age = int(input("나이: "))\n# "열다섯" 입력 → 에러!');
  var warnBox10 = s10.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 230, 520, 70);
  warnBox10.getFill().setSolidFill(COLORS.RED_HIGHLIGHT);
  addText(s10, "숫자가 아닌 값은 변환 불가!", 120, 250, 480, 20, COLORS.WHITE, true, true);

  // =====================================================
  // PART 3. print() 고급 (Concept 2) : 6장
  // =====================================================

  // [Slide 11] print() 여러 값 출력
  var s11 = createHeaderSlide(deck, "print() 여러 값 출력");
  createCodeBlock(s11, 50, 100, 620, 150, 'name = "철수"\nage = 15\nprint(name, age)           # 철수 15\nprint(name, age, sep=", ") # 철수, 15');
  addText(s11, "sep = 구분자 (기본은 공백)", 100, 270, 520, 18, COLORS.DARK, true, true);

  // [Slide 12] 줄바꿈 제어: end
  var s12 = createHeaderSlide(deck, "줄바꿈 제어: end");
  createCodeBlock(s12, 50, 100, 620, 140, 'print("Hello", end=" ")\nprint("World")\n# Hello World (같은 줄에 출력)');
  addText(s12, "기본 end=\"\\n\" (줄바꿈)", 100, 260, 520, 18, COLORS.DARK, true, true);

  // [Slide 13] 이스케이프 문자
  var s13 = createHeaderSlide(deck, "이스케이프 문자");
  createCodeBlock(s13, 50, 100, 620, 140, 'print("안녕\\n하세요")  # 줄바꿈\nprint("탭\\t간격")      # 탭\nprint("따옴표: \\"\\""  # 따옴표');
  var escapeBox = s13.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 260, 520, 60);
  escapeBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s13, "\\n 줄바꿈  |  \\t 탭  |  \\\\ 역슬래시", 120, 278, 480, 16, COLORS.DARK, false, true);

  // [Slide 14] f-string 복습
  var s14 = createHeaderSlide(deck, "f-string 복습");
  createCodeBlock(s14, 50, 100, 620, 140, 'name = "영희"\nscore = 95\nprint(f"{name}의 점수: {score}점")\nprint(f"평균: {score/100*100:.1f}%")');
  addText(s14, ":.1f = 소수점 1자리", 100, 260, 520, 18, COLORS.DARK, true, true);

  // [Slide 15] 정렬하기
  var s15 = createHeaderSlide(deck, "정렬하기");
  createCodeBlock(s15, 50, 100, 620, 140, 'print(f"{\'왼쪽\':<10}|")   # 왼쪽 정렬\nprint(f"{\'가운데\':^10}|")  # 가운데 정렬\nprint(f"{\'오른쪽\':>10}|")  # 오른쪽 정렬');
  addText(s15, "< 왼쪽  |  ^ 가운데  |  > 오른쪽", 100, 260, 520, 18, COLORS.DARK, true, true);

  // [Slide 16] 숫자 포맷팅
  var s16 = createHeaderSlide(deck, "숫자 포맷팅");
  createCodeBlock(s16, 50, 100, 620, 140, 'price = 1234567\nprint(f"{price:,}원")  # 1,234,567원\n\npi = 3.141592\nprint(f"{pi:.2f}")     # 3.14');
  addText(s16, "천 단위 쉼표, 소수점 자릿수", 100, 260, 520, 18, COLORS.DARK, true, true);

  // =====================================================
  // PART 4. 실습 A - 인사 프로그램 (Practice A) : 5장
  // =====================================================

  // [Slide 17] 실습 A 안내
  var s17 = createHeaderSlide(deck, "실습 A: 맞춤형 인사 프로그램");
  addText(s17, "👋 이름과 나이를 입력받아 인사하는 프로그램!", 50, 120, 620, 20, COLORS.DARK, true, true);
  createImagePlaceholder(s17, 150, 180, 420, 150, "인사 프로그램 이미지");

  // [Slide 18] 1단계: 정보 입력받기
  var s18 = createHeaderSlide(deck, "1단계: 정보 입력받기");
  createCodeBlock(s18, 50, 100, 620, 130, 'print("=== 환영합니다! ===")\nname = input("이름을 입력하세요: ")\nage = int(input("나이를 입력하세요: "))');

  // [Slide 19] 2단계: 맞춤 인사 출력
  var s19 = createHeaderSlide(deck, "2단계: 맞춤 인사 출력");
  createCodeBlock(s19, 50, 100, 620, 160, 'print(f"\\n안녕하세요, {name}님!")\nprint(f"{age}살이시군요!")\nbirth_year = 2024 - age\nprint(f"태어난 해는 {birth_year}년이네요!")');

  // [Slide 20] 완성 코드
  var s20 = createHeaderSlide(deck, "완성 코드");
  createCodeBlock(s20, 50, 90, 620, 240, 'print("=== 환영합니다! ===")\nname = input("이름을 입력하세요: ")\nage = int(input("나이를 입력하세요: "))\n\nprint(f"\\n안녕하세요, {name}님!")\nprint(f"{age}살이시군요!")\nprint(f"태어난 해는 {2024-age}년이네요!")\nprint(f"\\n{name}님, 좋은 하루 되세요! 👋")');

  // [Slide 21] 실행 결과
  var s21 = createHeaderSlide(deck, "실행 결과");
  var resultBox = s21.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 100, 620, 230);
  resultBox.getFill().setSolidFill(COLORS.CODE_BG);
  addText(s21, "=== 환영합니다! ===\n이름을 입력하세요: 민수\n나이를 입력하세요: 15\n\n안녕하세요, 민수님!\n15살이시군요!\n태어난 해는 2009년이네요!\n\n민수님, 좋은 하루 되세요! 👋", 80, 115, 560, 14, COLORS.CODE_WHITE);

  // =====================================================
  // PART 5. 실습 B - 영수증 출력 (Practice B) : 6장
  // =====================================================

  // [Slide 22] 실습 B 안내
  var s22 = createHeaderSlide(deck, "실습 B: 영수증 출력 프로그램");
  addText(s22, "🧾 물건을 입력받아 깔끔한 영수증을 출력해요!", 50, 120, 620, 20, COLORS.DARK, true, true);
  createImagePlaceholder(s22, 200, 170, 320, 150, "영수증 이미지");

  // [Slide 23] 1단계: 상품 입력
  var s23 = createHeaderSlide(deck, "1단계: 상품 입력");
  createCodeBlock(s23, 50, 100, 620, 160, 'print("=== 편의점 영수증 ===")\nitem1 = input("상품1 이름: ")\nprice1 = int(input("상품1 가격: "))\nitem2 = input("상품2 이름: ")\nprice2 = int(input("상품2 가격: "))');

  // [Slide 24] 2단계: 영수증 출력
  var s24 = createHeaderSlide(deck, "2단계: 영수증 출력");
  createCodeBlock(s24, 50, 90, 620, 230, 'print("\\n" + "=" * 30)\nprint("        [ 영수증 ]")\nprint("=" * 30)\nprint(f"{item1:<15}{price1:>10,}원")\nprint(f"{item2:<15}{price2:>10,}원")\nprint("-" * 30)\ntotal = price1 + price2\nprint(f"{\'합계\':<15}{total:>10,}원")\nprint("=" * 30)');

  // [Slide 25] 실행 결과
  var s25 = createHeaderSlide(deck, "실행 결과");
  var resultBox25 = s25.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 90, 620, 260);
  resultBox25.getFill().setSolidFill(COLORS.CODE_BG);
  addText(s25, "=== 편의점 영수증 ===\n상품1 이름: 삼각김밥\n상품1 가격: 1500\n상품2 이름: 음료수\n상품2 가격: 2000\n==============================\n        [ 영수증 ]\n==============================\n삼각김밥           1,500원\n음료수             2,000원\n------------------------------\n합계               3,500원\n==============================", 80, 100, 560, 12, COLORS.CODE_WHITE);

  // [Slide 26] 확장
  var s26 = createHeaderSlide(deck, "확장: 3개 이상 상품");
  addText(s26, "리스트를 사용하면 더 많은 상품도 가능!", 50, 120, 620, 24, COLORS.DARK, true, true);
  addText(s26, "(나중에 배워요)", 50, 180, 620, 18, COLORS.GRAY, false, true);

  // [Slide 27] 테스트
  var s27 = createHeaderSlide(deck, "직접 해보기");
  var testBox = s27.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 80, 120, 560, 150);
  testBox.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s27, "다른 상품으로도 테스트해보세요!\n\n가격은 천 단위로 ,가 찍히는지 확인!", 100, 160, 520, 18, COLORS.DARK, false, true);

  // =====================================================
  // PART 6. 도전 과제 (Challenge) : 2장
  // =====================================================

  // [Slide 28] 도전 과제
  var s28 = createHeaderSlide(deck, "도전 과제!");
  var challengeBox = s28.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 80, 110, 560, 180);
  challengeBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s28, "🏆 간단한 명함을 출력하는 프로그램을\n만들어보세요!\n\n이름, 직업, 연락처를 입력받아\n예쁜 명함 형태로 출력!", 100, 140, 520, 18, COLORS.DARK, false, true);

  // [Slide 29] 정답 예시
  var s29 = createHeaderSlide(deck, "정답 예시");
  createCodeBlock(s29, 50, 90, 620, 250, 'name = input("이름: ")\njob = input("직업: ")\nphone = input("연락처: ")\n\nprint("\\n" + "┌" + "─"*28 + "┐")\nprint(f"│{\'[ 명함 ]\':^28}│")\nprint("├" + "─"*28 + "┤")\nprint(f"│ 이름: {name:<20}│")\nprint(f"│ 직업: {job:<20}│")\nprint(f"│ 연락처: {phone:<18}│")\nprint("└" + "─"*28 + "┘")');

  // =====================================================
  // PART 7. 마무리 (Finish) : 3장
  // =====================================================

  // [Slide 30] 오늘 배운 것
  var s30 = createHeaderSlide(deck, "오늘 배운 것");
  var reviewBox = s30.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 80, 110, 560, 200);
  reviewBox.getFill().setSolidFill(COLORS.CREAM_BG);
  reviewBox.getBorder().setWeight(3).getLineFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s30, "✅ input(): 사용자 입력 받기\n\n✅ int(), float(): 형 변환\n\n✅ print() sep, end 옵션\n\n✅ f-string 정렬, 포맷팅", 110, 140, 500, 18, COLORS.DARK);

  // [Slide 31] 예고
  var s31 = deck.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  s31.getBackground().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s31, "다음 시간에는...", W/2 - 200, H/2 - 100, 400, 28, COLORS.DARK, true, true);
  addText(s31, "🔀 조건문을 배워요!", W/2 - 200, H/2 - 30, 400, 24, COLORS.WHITE, true, true);
  addText(s31, "\"만약 ~라면\" 상황에 따라 다르게 동작!", W/2 - 200, H/2 + 30, 400, 18, COLORS.DARK, false, true);

  // [Slide 32] 엔딩
  var s32 = deck.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  s32.getBackground().setSolidFill(COLORS.HAEDAL_YELLOW);
  var endBox = s32.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, W/2 - 250, H/2 - 120, 500, 240);
  endBox.getFill().setSolidFill(COLORS.WHITE);
  addText(s32, "수고했어요!", W/2 - 200, H/2 - 80, 400, 36, COLORS.DARK, true, true);
  addText(s32, "💬 이제 컴퓨터와 대화할 수 있어요!", W/2 - 200, H/2 - 20, 400, 18, COLORS.GRAY, false, true);
  addText(s32, "5차시 완료", W/2 - 100, H/2 + 60, 200, 24, COLORS.HAEDAL_YELLOW, true, true);

  Logger.log("슬라이드 생성 완료! (총 32장) URL: " + deck.getUrl());
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
