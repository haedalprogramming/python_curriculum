/**
 * [해달에듀] 파이썬 프로그래밍 7차시: for 반복문
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
function createPythonLesson7() {
  var deck = SlidesApp.create("[해달에듀] 파이썬 7차시 - for 반복문");
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
  addText(s01, "반복은 컴퓨터에게!", W/2 - 250, H/2 - 100, 500, 48, COLORS.DARK, true, true);
  addText(s01, "🔁 for 반복문", W/2 - 250, H/2 - 20, 500, 24, COLORS.GRAY, false, true);
  addText(s01, "7차시 | 해달에듀", W/2 - 250, H/2 + 50, 500, 18, COLORS.GRAY, false, true);

  // [Slide 02] 질문
  var s02 = createHeaderSlide(deck, "\"안녕하세요\"를 100번 출력하려면?");
  var oldWay = s02.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 100, 300, 150);
  oldWay.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s02, "😱 이렇게?", 70, 110, 260, 18, COLORS.GRAY, true);
  addText(s02, "print(\"안녕하세요\")\nprint(\"안녕하세요\")\nprint(...) × 100", 70, 150, 260, 14, COLORS.DARK);
  var newWay = s02.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 380, 100, 300, 150);
  newWay.getFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s02, "😎 그럴 필요 없어요!", 400, 120, 260, 18, COLORS.DARK, true);
  addText(s02, "반복문으로 한 줄이면 끝!", 400, 180, 260, 18, COLORS.DARK, true, true);

  // [Slide 03] 미리보기
  var s03 = createHeaderSlide(deck, "오늘의 완성작!");
  createCard(s03, 100, 120, 250, 150, "🔢", "1부터 100까지\n합 구하기", COLORS.CREAM_BG);
  createCard(s03, 380, 120, 250, 150, "✖️", "구구단 출력기", COLORS.CREAM_BG);

  // [Slide 04] 오늘의 미션
  var s04 = createHeaderSlide(deck, "오늘의 미션!");
  var goalBox = s04.insertShape(SlidesApp.ShapeType.RECTANGLE, 100, 120, 520, 230);
  goalBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  goalBox.getBorder().setDashStyle(SlidesApp.DashStyle.DASH).setWeight(2).getLineFill().setSolidFill(COLORS.GRAY);
  addText(s04, "☐ 1. for 반복문 기본 구조\n\n☐ 2. range() 함수 사용법\n\n☐ 3. 합계 구하기\n\n☐ 4. 구구단 만들기", 140, 150, 440, 20, COLORS.DARK);

  // =====================================================
  // PART 2. for 반복문 기초 (Concept 1) : 6장
  // =====================================================

  // [Slide 05] for 반복문이란?
  var s05 = createHeaderSlide(deck, "for 반복문이란?");
  addText(s05, "🔁 정해진 횟수만큼 반복 실행!", 50, 100, 620, 22, COLORS.DARK, true);
  addText(s05, "도돌이표처럼 같은 구간을 반복", 50, 140, 620, 18, COLORS.GRAY);
  var syntaxBox = s05.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 180, 620, 100);
  syntaxBox.getFill().setSolidFill(COLORS.CODE_BG);
  addText(s05, "for 변수 in 반복할것들:\n    반복할 코드", 80, 205, 560, 18, COLORS.CODE_WHITE);

  // [Slide 06] 리스트와 for문
  var s06 = createHeaderSlide(deck, "리스트와 for문");
  createCodeBlock(s06, 50, 100, 620, 200, 'fruits = ["사과", "바나나", "오렌지"]\n\nfor fruit in fruits:\n    print(fruit)\n\n# 결과:\n# 사과\n# 바나나\n# 오렌지');

  // [Slide 07] 문자열과 for문
  var s07 = createHeaderSlide(deck, "문자열과 for문");
  createCodeBlock(s07, 50, 100, 620, 180, 'for char in "Python":\n    print(char)\n\n# P\n# y\n# t\n# h\n# o\n# n');
  addText(s07, "문자열도 한 글자씩 반복!", 100, 290, 520, 18, COLORS.DARK, true, true);

  // [Slide 08] 들여쓰기 중요
  var s08 = createHeaderSlide(deck, "⚠️ 들여쓰기 중요!");
  createCodeBlock(s08, 50, 100, 620, 180, 'for i in [1, 2, 3]:\n    print(i)      # 반복됨\n    print("반복")  # 반복됨\nprint("끝")        # 반복 안됨');
  var warnBox = s08.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 300, 520, 40);
  warnBox.getFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s08, "들여쓰기 = 반복 범위", 120, 308, 480, 18, COLORS.DARK, true, true);

  // [Slide 09] 반복 변수
  var s09 = createHeaderSlide(deck, "반복 변수");
  createCodeBlock(s09, 50, 100, 620, 130, 'for i in [1, 2, 3]:\n    print(f"현재 i는 {i}")');
  var explainBox = s09.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 260, 520, 60);
  explainBox.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s09, "i는 매번 다른 값을 가짐: 1 → 2 → 3", 120, 278, 480, 16, COLORS.DARK, true, true);

  // [Slide 10] 직접 해보기
  var s10 = createHeaderSlide(deck, "직접 해보기");
  createCodeBlock(s10, 50, 100, 620, 160, 'animals = ["강아지", "고양이", "토끼"]\n\nfor animal in animals:\n    print(f"{animal}가 뛰어가요!")');

  // =====================================================
  // PART 3. range() 함수 (Concept 2) : 6장
  // =====================================================

  // [Slide 11] range()란?
  var s11 = createHeaderSlide(deck, "range()란?");
  addText(s11, "🔢 숫자 범위를 만들어주는 함수!", 50, 100, 620, 24, COLORS.DARK, true);
  var rangeBox = s11.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 160, 620, 80);
  rangeBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s11, "range(5) = 0, 1, 2, 3, 4\n0부터 시작, 5개 숫자!", 80, 180, 560, 18, COLORS.DARK, false, true);

  // [Slide 12] range() 기본
  var s12 = createHeaderSlide(deck, "range() 기본");
  createCodeBlock(s12, 50, 100, 620, 180, 'for i in range(5):\n    print(i)\n\n# 0\n# 1\n# 2\n# 3\n# 4');
  addText(s12, "range(n) = 0부터 n-1까지", 100, 300, 520, 18, COLORS.DARK, true, true);

  // [Slide 13] range(시작, 끝)
  var s13 = createHeaderSlide(deck, "range(시작, 끝)");
  createCodeBlock(s13, 50, 100, 620, 140, 'for i in range(1, 6):\n    print(i)\n\n# 1, 2, 3, 4, 5');
  addText(s13, "range(a, b) = a부터 b-1까지", 100, 260, 520, 18, COLORS.DARK, true, true);

  // [Slide 14] range(시작, 끝, 간격)
  var s14 = createHeaderSlide(deck, "range(시작, 끝, 간격)");
  createCodeBlock(s14, 50, 100, 620, 180, 'for i in range(0, 10, 2):\n    print(i)  # 0, 2, 4, 6, 8\n\nfor i in range(5, 0, -1):\n    print(i)  # 5, 4, 3, 2, 1');
  addText(s14, "간격(step) 지정 가능!", 100, 300, 520, 18, COLORS.DARK, true, true);

  // [Slide 15] range() 정리
  var s15 = createHeaderSlide(deck, "range() 정리");
  var tableBox = s15.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 100, 620, 200);
  tableBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s15, "형태             │ 의미           │ 예시\n─────────────────┼────────────────┼─────────────\nrange(n)         │ 0부터 n-1      │ range(5) → 0,1,2,3,4\nrange(a,b)       │ a부터 b-1      │ range(1,5) → 1,2,3,4\nrange(a,b,c)     │ a부터 b-1, c간격│ range(0,10,2) → 0,2,4,6,8", 70, 120, 580, 14, COLORS.DARK);

  // [Slide 16] 응용: n번 반복
  var s16 = createHeaderSlide(deck, "응용: n번 반복");
  createCodeBlock(s16, 50, 100, 620, 160, 'for _ in range(3):\n    print("안녕하세요!")\n\n# 안녕하세요!\n# 안녕하세요!\n# 안녕하세요!');
  addText(s16, "_ = 변수를 안 쓸 때", 100, 280, 520, 18, COLORS.DARK, true, true);

  // =====================================================
  // PART 4. 실습 A - 합계 구하기 (Practice A) : 5장
  // =====================================================

  // [Slide 17] 실습 A 안내
  var s17 = createHeaderSlide(deck, "실습 A: 1부터 100까지 합");
  addText(s17, "🔢 1+2+3+...+100 = ?", 50, 120, 620, 28, COLORS.DARK, true, true);
  addText(s17, "가우스도 놀랄 프로그램!", 50, 180, 620, 18, COLORS.GRAY, false, true);

  // [Slide 18] 1단계: 누적 변수
  var s18 = createHeaderSlide(deck, "1단계: 누적 변수");
  createCodeBlock(s18, 50, 100, 620, 80, 'total = 0  # 합계를 저장할 변수');
  addText(s18, "합계를 쌓을 \"상자\" 준비!", 100, 220, 520, 20, COLORS.DARK, true, true);

  // [Slide 19] 2단계: 반복 더하기
  var s19 = createHeaderSlide(deck, "2단계: 반복 더하기");
  createCodeBlock(s19, 50, 100, 620, 160, 'total = 0\nfor i in range(1, 101):  # 1~100\n    total = total + i\n    # 또는 total += i\n\nprint(f"합계: {total}")');

  // [Slide 20] 실행 결과
  var s20 = createHeaderSlide(deck, "실행 결과");
  var resultBox = s20.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 120, 520, 100);
  resultBox.getFill().setSolidFill(COLORS.CODE_BG);
  addText(s20, "합계: 5050", 150, 155, 420, 24, COLORS.CODE_WHITE, true, true);
  var celebBox = s20.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 250, 520, 60);
  celebBox.getFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s20, "🎉 정답! 1+2+...+100 = 5050", 120, 268, 480, 18, COLORS.DARK, true, true);

  // [Slide 21] N까지 합 구하기
  var s21 = createHeaderSlide(deck, "N까지 합 구하기");
  createCodeBlock(s21, 50, 100, 620, 180, 'n = int(input("어디까지 더할까요? "))\ntotal = 0\n\nfor i in range(1, n+1):\n    total += i\n\nprint(f"1부터 {n}까지 합: {total}")');
  addText(s21, "사용자가 범위 지정!", 100, 300, 520, 18, COLORS.DARK, true, true);

  // =====================================================
  // PART 5. 실습 B - 구구단 (Practice B) : 6장
  // =====================================================

  // [Slide 22] 실습 B 안내
  var s22 = createHeaderSlide(deck, "실습 B: 구구단 출력기");
  addText(s22, "✖️ 원하는 단의 구구단을 출력해요!", 50, 120, 620, 24, COLORS.DARK, true, true);
  createImagePlaceholder(s22, 200, 170, 320, 150, "구구단표 이미지");

  // [Slide 23] 1단계: 단 입력받기
  var s23 = createHeaderSlide(deck, "1단계: 단 입력받기");
  createCodeBlock(s23, 50, 100, 620, 100, 'dan = int(input("몇 단? "))\nprint(f"=== {dan}단 ===")');

  // [Slide 24] 2단계: 반복 출력
  var s24 = createHeaderSlide(deck, "2단계: 반복 출력");
  createCodeBlock(s24, 50, 100, 620, 160, 'dan = int(input("몇 단? "))\nprint(f"=== {dan}단 ===")\n\nfor i in range(1, 10):\n    print(f"{dan} x {i} = {dan * i}")');
  addText(s24, "1부터 9까지 반복!", 100, 280, 520, 18, COLORS.DARK, true, true);

  // [Slide 25] 실행 결과
  var s25 = createHeaderSlide(deck, "실행 결과");
  var resultBox25 = s25.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 100, 620, 230);
  resultBox25.getFill().setSolidFill(COLORS.CODE_BG);
  addText(s25, "몇 단? 7\n=== 7단 ===\n7 x 1 = 7\n7 x 2 = 14\n7 x 3 = 21\n...\n7 x 9 = 63", 80, 120, 560, 16, COLORS.CODE_WHITE);

  // [Slide 26] 중첩 for문 (심화)
  var s26 = createHeaderSlide(deck, "중첩 for문 (심화)");
  createCodeBlock(s26, 50, 100, 620, 180, 'for dan in range(2, 10):\n    print(f"=== {dan}단 ===")\n    for i in range(1, 10):\n        print(f"{dan}x{i}={dan*i}")\n    print()');
  addText(s26, "2단부터 9단까지 전체 출력!", 100, 300, 520, 18, COLORS.DARK, true, true);

  // [Slide 27] 중첩 for문 이해
  var s27 = createHeaderSlide(deck, "중첩 for문 이해");
  var nestedBox = s27.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 100, 620, 180);
  nestedBox.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s27, "바깥 for: 단 변경 (2→3→4...)\n안쪽 for: 1~9 반복\n\n시계의 시침(바깥)과 분침(안쪽)처럼!", 80, 140, 560, 18, COLORS.DARK, false, true);

  // =====================================================
  // PART 6. 추가 개념 (Advanced) : 4장
  // =====================================================

  // [Slide 28] break: 반복 탈출
  var s28 = createHeaderSlide(deck, "break: 반복 탈출");
  createCodeBlock(s28, 50, 100, 620, 180, 'for i in range(10):\n    if i == 5:\n        break\n    print(i)\n\n# 0, 1, 2, 3, 4 (5에서 멈춤)');
  addText(s28, "break = 반복을 중단!", 100, 300, 520, 18, COLORS.DARK, true, true);

  // [Slide 29] continue: 건너뛰기
  var s29 = createHeaderSlide(deck, "continue: 건너뛰기");
  createCodeBlock(s29, 50, 100, 620, 180, 'for i in range(5):\n    if i == 2:\n        continue\n    print(i)\n\n# 0, 1, 3, 4 (2만 건너뜀)');
  addText(s29, "continue = 이번만 건너뛰기", 100, 300, 520, 18, COLORS.DARK, true, true);

  // [Slide 30] 숫자 찾기 게임
  var s30 = createHeaderSlide(deck, "숫자 찾기 게임");
  createCodeBlock(s30, 50, 100, 620, 180, 'target = 7\nfor i in range(1, 11):\n    if i == target:\n        print(f"{i} 찾았다!")\n        break\n    print(f"{i}...")');

  // [Slide 31] 짝수만 출력
  var s31 = createHeaderSlide(deck, "짝수만 출력");
  createCodeBlock(s31, 50, 100, 620, 160, 'for i in range(1, 11):\n    if i % 2 == 1:  # 홀수면\n        continue\n    print(i)  # 2, 4, 6, 8, 10');

  // =====================================================
  // PART 7. 마무리 (Finish) : 4장
  // =====================================================

  // [Slide 32] 도전 과제
  var s32 = createHeaderSlide(deck, "도전 과제!");
  var challengeBox = s32.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 80, 110, 560, 180);
  challengeBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s32, "🏆 별 피라미드 출력하기!\n\n*\n**\n***\n****\n*****\n\n힌트: print(\"*\" * n)", 100, 130, 520, 16, COLORS.DARK, false, true);

  // [Slide 33] 오늘 배운 것
  var s33 = createHeaderSlide(deck, "오늘 배운 것");
  var reviewBox = s33.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 80, 110, 560, 200);
  reviewBox.getFill().setSolidFill(COLORS.CREAM_BG);
  reviewBox.getBorder().setWeight(3).getLineFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s33, "✅ for 변수 in 리스트/range()\n\n✅ range(시작, 끝, 간격)\n\n✅ 중첩 for문 (구구단)\n\n✅ break(탈출), continue(건너뛰기)", 110, 140, 500, 18, COLORS.DARK);

  // [Slide 34] 예고
  var s34 = deck.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  s34.getBackground().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s34, "다음 시간에는...", W/2 - 200, H/2 - 100, 400, 28, COLORS.DARK, true, true);
  addText(s34, "🔄 while 반복문을 배워요!", W/2 - 200, H/2 - 30, 400, 24, COLORS.WHITE, true, true);
  addText(s34, "조건이 참인 동안 계속 반복!", W/2 - 200, H/2 + 30, 400, 18, COLORS.DARK, false, true);

  // [Slide 35] 엔딩
  var s35 = deck.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  s35.getBackground().setSolidFill(COLORS.HAEDAL_YELLOW);
  var endBox = s35.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, W/2 - 250, H/2 - 120, 500, 240);
  endBox.getFill().setSolidFill(COLORS.WHITE);
  addText(s35, "수고했어요!", W/2 - 200, H/2 - 80, 400, 36, COLORS.DARK, true, true);
  addText(s35, "🔁 이제 반복 작업은\n컴퓨터에게 맡기세요!", W/2 - 200, H/2 - 20, 400, 18, COLORS.GRAY, false, true);
  addText(s35, "7차시 완료", W/2 - 100, H/2 + 60, 200, 24, COLORS.HAEDAL_YELLOW, true, true);

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
