/**
 * [해달에듀] 파이썬 프로그래밍 14차시: turtle 그래픽 응용
 * 자동 슬라이드 생성 스크립트 (35장)
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

  // 코드 블록 컬러 (VS Code 스타일)
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
function createPythonLesson14() {
  var deck = SlidesApp.create("[해달에듀] 파이썬 14차시 - 거북이 고급 기술!");
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
  addText(s01, "거북이 고급 기술!", W/2 - 250, H/2 - 100, 500, 44, COLORS.DARK, true, true);
  addText(s01, "🐢✨ turtle 그래픽 응용", W/2 - 250, H/2 - 20, 500, 24, COLORS.GRAY, false, true);
  addText(s01, "14차시 | 해달에듀", W/2 - 250, H/2 + 50, 500, 18, COLORS.GRAY, false, true);

  // [Slide 02] 질문
  var s02 = createHeaderSlide(deck, "더 멋진 그림을 그리려면?");
  createCard(s02, 50, 120, 200, 150, "🌀", "소용돌이\n프랙탈", COLORS.LIGHT_BG);
  createCard(s02, 270, 120, 200, 150, "🖱️", "마우스로\n그림 그리기", COLORS.LIGHT_BG);
  createCard(s02, 490, 120, 200, 150, "⌨️", "키보드로\n거북이 조종!", COLORS.LIGHT_BG);

  // [Slide 03] 미리보기
  var s03 = createHeaderSlide(deck, "오늘의 완성작!");
  createCard(s03, 80, 130, 260, 200, "🌀", "무지개\n소용돌이", COLORS.CREAM_BG);
  createCard(s03, 380, 130, 260, 200, "🖱️", "마우스 추적\n그리기", COLORS.CREAM_BG);

  // [Slide 04] 오늘의 미션
  var s04 = createHeaderSlide(deck, "오늘의 미션!");
  var goalBox = s04.insertShape(SlidesApp.ShapeType.RECTANGLE, 100, 120, 520, 260);
  goalBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  goalBox.getBorder().setDashStyle(SlidesApp.DashStyle.DASH).setWeight(2).getLineFill().setSolidFill(COLORS.GRAY);
  addText(s04, "☐ 1. 소용돌이/나선 그리기\n\n☐ 2. 이벤트 처리 (마우스, 키보드)\n\n☐ 3. 애니메이션 만들기\n\n☐ 4. 나만의 작품 완성!", 140, 140, 440, 20, COLORS.DARK);

  // =====================================================
  // PART 2. 소용돌이와 나선 (Concept 1) : 6장
  // =====================================================

  // [Slide 05] 소용돌이의 원리
  var s05 = createHeaderSlide(deck, "소용돌이의 원리");
  addText(s05, "🌀 반복하면서 조금씩 변화!", 50, 100, 620, 24, COLORS.DARK, true);
  var conceptBox = s05.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 80, 160, 560, 180);
  conceptBox.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s05, "• 거리가 점점 길어지거나\n• 각도가 조금씩 달라지면\n\n→ 소용돌이 완성!", 120, 190, 480, 20, COLORS.DARK);

  // [Slide 06] 사각형 소용돌이
  var s06 = createHeaderSlide(deck, "사각형 소용돌이");
  createCodeBlock(s06, 50, 100, 620, 200, 'import turtle\nt = turtle.Turtle()\nt.speed(0)\n\nfor i in range(100):\n    t.fd(i * 2)   # 거리 증가\n    t.rt(90)      # 90도 회전\n\nturtle.done()');
  addText(s06, "📐 거리가 점점 늘어나면 소용돌이!", 50, 320, 620, 16, COLORS.GRAY);

  // [Slide 07] 삼각형 소용돌이
  var s07 = createHeaderSlide(deck, "삼각형 소용돌이");
  createCodeBlock(s07, 50, 100, 620, 150, 'for i in range(100):\n    t.fd(i * 2)\n    t.rt(120)  # 삼각형 각도');
  var tipBox7 = s07.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 280, 520, 70);
  tipBox7.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s07, "🔺 각도를 바꾸면 모양이 바뀌어요!", 150, 300, 420, 18, COLORS.DARK, true, true);

  // [Slide 08] 원형 나선
  var s08 = createHeaderSlide(deck, "원형 나선");
  createCodeBlock(s08, 50, 100, 620, 150, 't.speed(0)\n\nfor i in range(200):\n    t.circle(i / 2, 10)  # 반지름 증가');
  var tipBox8 = s08.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 280, 520, 70);
  tipBox8.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s08, "circle(반지름, 각도)로 부분 원!", 150, 300, 420, 18, COLORS.DARK, true, true);

  // [Slide 09] 무지개 소용돌이
  var s09 = createHeaderSlide(deck, "무지개 소용돌이");
  createCodeBlock(s09, 30, 90, 660, 270, 'import turtle\ncolors = ["red", "orange", "yellow", \n          "green", "blue", "purple"]\n\nt = turtle.Turtle()\nt.speed(0)\n\nfor i in range(180):\n    t.pencolor(colors[i % 6])\n    t.fd(i)\n    t.rt(59)  # 소수를 쓰면 더 복잡한 패턴\n\nturtle.done()');

  // [Slide 10] 각도 실험
  var s10 = createHeaderSlide(deck, "각도 실험");
  createCodeBlock(s10, 50, 100, 620, 180, '# 다양한 각도로 실험해보세요!\nfor angle in [91, 89, 60, 72, 144]:\n    for i in range(50):\n        t.fd(i * 2)\n        t.rt(angle)\n    t.home()');
  var tipBox10 = s10.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 300, 520, 60);
  tipBox10.getFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s10, "1도만 바뀌어도 완전히 다른 그림!", 150, 315, 420, 18, COLORS.DARK, true, true);

  // =====================================================
  // PART 3. 마우스 이벤트 (Concept 2) : 6장
  // =====================================================

  // [Slide 11] 이벤트(Event)란?
  var s11 = createHeaderSlide(deck, "이벤트(Event)란?");
  addText(s11, "🖱️ 마우스 클릭, 키보드 입력 등", 50, 100, 620, 24, COLORS.DARK, true);
  var conceptBox11 = s11.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 80, 160, 560, 180);
  conceptBox11.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s11, "사용자의 행동을 감지!\n\n\"클릭하면 이것을 해라\"\n→ 이벤트 처리", 120, 190, 480, 20, COLORS.DARK, false, true);

  // [Slide 12] 클릭 위치로 이동
  var s12 = createHeaderSlide(deck, "클릭 위치로 이동");
  createCodeBlock(s12, 50, 100, 620, 200, 'import turtle\nscreen = turtle.Screen()\nt = turtle.Turtle()\n\ndef go_to_click(x, y):\n    t.goto(x, y)\n\nscreen.onclick(go_to_click)\nscreen.mainloop()');
  addText(s12, "onclick = 클릭할 때 함수 실행", 50, 320, 620, 16, COLORS.GRAY);

  // [Slide 13] 클릭하면 도장 찍기
  var s13 = createHeaderSlide(deck, "클릭하면 도장 찍기");
  createCodeBlock(s13, 50, 100, 620, 220, 'import turtle\nscreen = turtle.Screen()\nt = turtle.Turtle()\nt.shape("turtle")\nt.penup()\n\ndef stamp_here(x, y):\n    t.goto(x, y)\n    t.stamp()  # 도장 찍기\n\nscreen.onclick(stamp_here)\nscreen.mainloop()');

  // [Slide 14] 클릭하면 원 그리기
  var s14 = createHeaderSlide(deck, "클릭하면 원 그리기");
  createCodeBlock(s14, 30, 90, 660, 280, 'import random\n\ndef draw_circle(x, y):\n    t.penup()\n    t.goto(x, y)\n    t.pendown()\n    color = random.choice(["red", "blue", "green", "yellow"])\n    t.pencolor(color)\n    t.fillcolor(color)\n    t.begin_fill()\n    t.circle(20)\n    t.end_fill()\n\nscreen.onclick(draw_circle)');

  // [Slide 15] 드래그로 그리기
  var s15 = createHeaderSlide(deck, "드래그로 그리기");
  createCodeBlock(s15, 50, 100, 620, 180, 'def drag(x, y):\n    t.ondrag(None)  # 재귀 방지\n    t.goto(x, y)\n    t.ondrag(drag)\n\nt.ondrag(drag)\nscreen.mainloop()');
  addText(s15, "✏️ 마우스를 누른 채로 이동하면 그림!", 50, 300, 620, 18, COLORS.GRAY);

  // [Slide 16] 마우스 그림판
  var s16 = createHeaderSlide(deck, "마우스 그림판");
  createCodeBlock(s16, 30, 90, 660, 280, 'import turtle\nscreen = turtle.Screen()\nt = turtle.Turtle()\nt.pensize(3)\nt.speed(0)\n\ndef start_draw(x, y):\n    t.pendown()\n    t.goto(x, y)\n\ndef stop_draw(x, y):\n    t.penup()\n\nt.ondrag(start_draw)\nscreen.onclick(stop_draw, 3)  # 우클릭\nscreen.mainloop()');

  // =====================================================
  // PART 4. 키보드 이벤트 (Concept 3) : 5장
  // =====================================================

  // [Slide 17] 키보드 이벤트
  var s17 = createHeaderSlide(deck, "키보드 이벤트");
  addText(s17, "⌨️ 특정 키를 누르면 함수 실행!", 50, 100, 620, 24, COLORS.DARK, true);
  var conceptBox17 = s17.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 80, 160, 560, 150);
  conceptBox17.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s17, 'screen.onkey(함수, "키")\n\n예: screen.onkey(go_up, "Up")', 120, 190, 480, 20, COLORS.DARK);

  // [Slide 18] 방향키로 이동
  var s18 = createHeaderSlide(deck, "방향키로 이동");
  createCodeBlock(s18, 20, 85, 680, 300, 'import turtle\nscreen = turtle.Screen()\nt = turtle.Turtle()\nt.shape("turtle")\n\ndef go_up():\n    t.setheading(90)\n    t.forward(20)\ndef go_down():\n    t.setheading(270)\n    t.forward(20)\ndef go_left():\n    t.setheading(180)\n    t.forward(20)\ndef go_right():\n    t.setheading(0)\n    t.forward(20)\n\nscreen.onkey(go_up, "Up")\nscreen.onkey(go_down, "Down")\nscreen.onkey(go_left, "Left")\nscreen.onkey(go_right, "Right")\nscreen.listen()  # 키 입력 받기\nscreen.mainloop()');

  // [Slide 19] 펜 올리기/내리기
  var s19 = createHeaderSlide(deck, "펜 올리기/내리기");
  createCodeBlock(s19, 50, 100, 620, 180, 'def pen_up():\n    t.penup()\n\ndef pen_down():\n    t.pendown()\n\nscreen.onkey(pen_up, "u")\nscreen.onkey(pen_down, "d")');
  addText(s19, "u키: 펜 올리기, d키: 펜 내리기", 50, 300, 620, 18, COLORS.GRAY);

  // [Slide 20] 색상 바꾸기
  var s20 = createHeaderSlide(deck, "색상 바꾸기");
  createCodeBlock(s20, 50, 100, 620, 220, 'colors = ["red", "orange", "yellow", "green", "blue"]\ncolor_index = 0\n\ndef change_color():\n    global color_index\n    color_index = (color_index + 1) % len(colors)\n    t.pencolor(colors[color_index])\n\nscreen.onkey(change_color, "c")');
  addText(s20, "c키: 색상 변경", 50, 340, 620, 16, COLORS.GRAY);

  // [Slide 21] 초기화/종료
  var s21 = createHeaderSlide(deck, "초기화/종료");
  createCodeBlock(s21, 50, 100, 620, 180, 'def clear_screen():\n    t.clear()\n    t.home()\n\ndef quit_program():\n    screen.bye()\n\nscreen.onkey(clear_screen, "r")  # reset\nscreen.onkey(quit_program, "q")   # quit');

  // =====================================================
  // PART 5. 실습 A - 소용돌이 (Practice A) : 5장
  // =====================================================

  // [Slide 22] 실습 A 안내
  var s22 = createHeaderSlide(deck, "실습 A: 무지개 소용돌이");
  addText(s22, "🌀🌈 컬러풀한 소용돌이를 그려요!", 50, 110, 620, 24, COLORS.DARK, true);
  var goalBox22 = s22.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 170, 520, 180);
  goalBox22.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s22, "🎯 목표:\n\n• 검은 배경 설정\n• 무지개 색상 적용\n• 멋진 소용돌이 완성!", 130, 200, 460, 18, COLORS.DARK);

  // [Slide 23] 배경 설정
  var s23 = createHeaderSlide(deck, "배경 설정");
  createCodeBlock(s23, 50, 100, 620, 200, 'import turtle\n\nscreen = turtle.Screen()\nscreen.bgcolor("black")  # 검은 배경\n\nt = turtle.Turtle()\nt.speed(0)\nt.pensize(2)');

  // [Slide 24] 무지개 색상
  var s24 = createHeaderSlide(deck, "무지개 색상");
  createCodeBlock(s24, 50, 100, 620, 200, 'colors = ["red", "orange", "yellow", \n          "green", "cyan", "blue", "purple"]\n\nfor i in range(200):\n    t.pencolor(colors[i % len(colors)])\n    t.fd(i)\n    t.rt(59)');
  var tipBox24 = s24.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 320, 520, 50);
  tipBox24.getFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s24, "59도 = 멋진 패턴!", 150, 330, 420, 18, COLORS.DARK, true, true);

  // [Slide 25] 완성 결과
  var s25 = createHeaderSlide(deck, "완성 결과");
  var resultBox = s25.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 120, 520, 200);
  resultBox.getFill().setSolidFill(COLORS.DARK_BG);
  addText(s25, "🌀", W/2 - 50, 160, 100, 80, COLORS.HAEDAL_YELLOW, false, true);
  addText(s25, "🎨 멋진 작품 완성!", W/2 - 150, 340, 300, 24, COLORS.DARK, true, true);

  // [Slide 26] 확장 아이디어
  var s26 = createHeaderSlide(deck, "확장 아이디어");
  createCodeBlock(s26, 50, 100, 620, 220, '# 원형 소용돌이\nfor i in range(200):\n    t.pencolor(colors[i % 7])\n    t.circle(i / 2, 20)\n\n# 나비 패턴\nfor i in range(200):\n    t.pencolor(colors[i % 7])\n    t.circle(i, 60)');

  // =====================================================
  // PART 6. 실습 B - 마우스 추적 (Practice B) : 5장
  // =====================================================

  // [Slide 27] 실습 B 안내
  var s27 = createHeaderSlide(deck, "실습 B: 마우스 그림판");
  addText(s27, "🖱️ 마우스로 자유롭게 그림 그리기!", 50, 110, 620, 24, COLORS.DARK, true);
  var goalBox27 = s27.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 170, 520, 180);
  goalBox27.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s27, "🎯 목표:\n\n• 드래그로 그리기\n• 색상 바꾸기\n• 지우기 기능", 130, 200, 460, 18, COLORS.DARK);

  // [Slide 28] 기본 설정
  var s28 = createHeaderSlide(deck, "기본 설정");
  createCodeBlock(s28, 30, 90, 660, 280, 'import turtle\n\nscreen = turtle.Screen()\nscreen.title("🎨 마우스 그림판")\n\nt = turtle.Turtle()\nt.speed(0)\nt.pensize(3)\nt.penup()\n\ncolors = ["red", "orange", "yellow", \n          "green", "blue", "purple", "black"]\ncurrent_color = 0');

  // [Slide 29] 이벤트 함수
  var s29 = createHeaderSlide(deck, "이벤트 함수");
  createCodeBlock(s29, 30, 90, 660, 280, 'def draw(x, y):\n    t.goto(x, y)\n\ndef start(x, y):\n    t.pendown()\n    draw(x, y)\n\ndef change_color():\n    global current_color\n    current_color = (current_color + 1) % len(colors)\n    t.pencolor(colors[current_color])\n\ndef clear():\n    t.clear()\n    t.penup()\n    t.home()');

  // [Slide 30] 이벤트 연결
  var s30 = createHeaderSlide(deck, "이벤트 연결");
  createCodeBlock(s30, 50, 100, 620, 220, 't.ondrag(draw)\nscreen.onclick(start)\nscreen.onkey(change_color, "c")\nscreen.onkey(clear, "r")\n\nscreen.listen()\nprint("드래그: 그리기, c: 색상변경, r: 지우기")\nscreen.mainloop()');

  // [Slide 31] 실행 결과
  var s31 = createHeaderSlide(deck, "실행 결과");
  var resultBox31 = s31.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 120, 520, 200);
  resultBox31.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s31, "🖱️ 마우스로 자유롭게 그림!\n\n[그림판 사용 예시]", W/2 - 200, 180, 400, 20, COLORS.GRAY, false, true);
  addText(s31, "🎨 나만의 그림판 완성!", W/2 - 150, 340, 300, 24, COLORS.DARK, true, true);

  // =====================================================
  // PART 7. 마무리 (Finish) : 4장
  // =====================================================

  // [Slide 32] 도전 과제
  var s32 = createHeaderSlide(deck, "도전 과제!");
  var challengeBox = s32.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 80, 120, 560, 220);
  challengeBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s32, "🏆 거북이 게임 만들기!", 120, 150, 480, 28, COLORS.DARK, true, true);
  addText(s32, "• 방향키로 거북이를 조종하고\n• 화면에 아이템을 먹으면\n• 점수 증가!", 120, 210, 480, 20, COLORS.DARK);

  // [Slide 33] 오늘 배운 것
  var s33 = createHeaderSlide(deck, "오늘 배운 것");
  var reviewBox = s33.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 80, 110, 560, 260);
  reviewBox.getFill().setSolidFill(COLORS.CREAM_BG);
  reviewBox.getBorder().setWeight(3).getLineFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s33, "✅ 소용돌이/나선 패턴\n\n✅ screen.onclick(): 마우스 클릭\n\n✅ screen.onkey(): 키보드 입력\n\n✅ screen.listen(): 입력 대기\n\n✅ t.ondrag(): 드래그", 120, 140, 480, 18, COLORS.DARK);

  // [Slide 34] 예고
  var s34 = deck.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  s34.getBackground().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s34, "다음 시간에는...", W/2 - 200, H/2 - 100, 400, 28, COLORS.DARK, true, true);
  addText(s34, "🌐 webbrowser 모듈!", W/2 - 200, H/2 - 30, 400, 24, COLORS.WHITE, true, true);
  addText(s34, "파이썬으로 웹사이트 열기!", W/2 - 200, H/2 + 30, 400, 20, COLORS.WHITE, false, true);
  addText(s34, "15차시에서 만나요!", W/2 - 150, H/2 + 100, 300, 20, COLORS.DARK, true, true);

  // [Slide 35] 엔딩
  var s35 = deck.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  s35.getBackground().setSolidFill(COLORS.HAEDAL_YELLOW);
  var endBox = s35.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, W/2 - 250, H/2 - 120, 500, 240);
  endBox.getFill().setSolidFill(COLORS.WHITE);
  addText(s35, "수고했어요!", W/2 - 200, H/2 - 80, 400, 36, COLORS.DARK, true, true);
  addText(s35, "🐢✨ 인터랙티브한\n그래픽 프로그램 완성!", W/2 - 200, H/2 - 20, 400, 20, COLORS.GRAY, false, true);
  addText(s35, "14차시 완료", W/2 - 100, H/2 + 60, 200, 24, COLORS.HAEDAL_YELLOW, true, true);

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
