/**
 * [해달에듀] 파이썬 프로그래밍 13차시: turtle 그래픽 기초
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
function createPythonLesson13() {
  var deck = SlidesApp.create("[해달에듀] 파이썬 13차시 - 거북이로 그림 그리기!");
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
  addText(s01, "거북이로 그림 그리기!", W/2 - 250, H/2 - 100, 500, 44, COLORS.DARK, true, true);
  addText(s01, "🐢 turtle 그래픽 기초", W/2 - 250, H/2 - 20, 500, 24, COLORS.GRAY, false, true);
  addText(s01, "13차시 | 해달에듀", W/2 - 250, H/2 + 50, 500, 18, COLORS.GRAY, false, true);

  // [Slide 02] 질문
  var s02 = createHeaderSlide(deck, "코드로 그림을 그릴 수 있다면?");
  createCard(s02, 80, 130, 260, 180, "🎨", "선, 도형,\n다양한 패턴...", COLORS.LIGHT_BG);
  createCard(s02, 380, 130, 260, 180, "🖼️", "나만의 작품\n만들기!", COLORS.LIGHT_BG);
  var answerBox = s02.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 330, 520, 60);
  answerBox.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s02, "turtle 모듈로 가능해요!", 120, 345, 480, 20, COLORS.DARK, true, true);

  // [Slide 03] 미리보기
  var s03 = createHeaderSlide(deck, "오늘의 완성작!");
  createCard(s03, 80, 130, 260, 200, "🔷", "삼각형, 사각형, 원", COLORS.CREAM_BG);
  createCard(s03, 380, 130, 260, 200, "⭐", "별 그리기", COLORS.CREAM_BG);

  // [Slide 04] 오늘의 미션
  var s04 = createHeaderSlide(deck, "오늘의 미션!");
  var goalBox = s04.insertShape(SlidesApp.ShapeType.RECTANGLE, 100, 120, 520, 260);
  goalBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  goalBox.getBorder().setDashStyle(SlidesApp.DashStyle.DASH).setWeight(2).getLineFill().setSolidFill(COLORS.GRAY);
  addText(s04, "☐ 1. turtle 기본 명령어\n\n☐ 2. 기본 도형 그리기\n\n☐ 3. 색상과 채우기\n\n☐ 4. 반복문으로 패턴 만들기", 140, 140, 440, 20, COLORS.DARK);

  // =====================================================
  // PART 2. turtle 기초 (Concept 1) : 6장
  // =====================================================

  // [Slide 05] turtle이란?
  var s05 = createHeaderSlide(deck, "turtle이란?");
  addText(s05, "🐢 거북이가 움직이며 선을 그려요!", 50, 100, 620, 24, COLORS.DARK, true);
  var conceptBox = s05.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 160, 400, 120);
  conceptBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s05, "거북이에게 명령을 내려서\n그림을 완성해요!", 80, 195, 340, 18, COLORS.DARK, false, true);
  createCodeBlock(s05, 50, 300, 400, 60, "import turtle");

  // [Slide 06] 화면 설정
  var s06 = createHeaderSlide(deck, "화면 설정");
  createCodeBlock(s06, 50, 100, 620, 180, 'import turtle\n\nt = turtle.Turtle()  # 거북이 생성\nt.shape("turtle")    # 모양을 거북이로\n\nturtle.done()  # 창 유지');
  var tipBox6 = s06.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 300, 520, 60);
  tipBox6.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s06, "t는 거북이 이름이에요!", 150, 315, 420, 18, COLORS.DARK, true, true);

  // [Slide 07] 이동 명령어
  var s07 = createHeaderSlide(deck, "이동 명령어");
  createCodeBlock(s07, 50, 100, 620, 180, 't.forward(100)   # 앞으로 100픽셀\nt.backward(50)   # 뒤로 50픽셀\n\n# 줄임말\nt.fd(100)\nt.bk(50)');
  addText(s07, "➡️ 거북이가 바라보는 방향으로 이동!", 50, 300, 620, 18, COLORS.GRAY);

  // [Slide 08] 회전 명령어
  var s08 = createHeaderSlide(deck, "회전 명령어");
  createCodeBlock(s08, 50, 100, 620, 180, 't.right(90)   # 오른쪽으로 90도\nt.left(90)    # 왼쪽으로 90도\n\n# 줄임말\nt.rt(90)\nt.lt(90)');
  addText(s08, "🔄 현재 방향에서 회전!", 50, 300, 620, 18, COLORS.GRAY);

  // [Slide 09] 사각형 그리기 (수동)
  var s09 = createHeaderSlide(deck, "사각형 그리기 (수동)");
  createCodeBlock(s09, 40, 95, 640, 270, 'import turtle\nt = turtle.Turtle()\n\nt.forward(100)\nt.right(90)\nt.forward(100)\nt.right(90)\nt.forward(100)\nt.right(90)\nt.forward(100)\n\nturtle.done()');

  // [Slide 10] 명령어 정리
  var s10 = createHeaderSlide(deck, "명령어 정리");
  var tableBox = s10.insertShape(SlidesApp.ShapeType.RECTANGLE, 60, 100, 600, 260);
  tableBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  tableBox.getBorder().setWeight(2).getLineFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s10, "명령어          줄임말        의미", 80, 120, 560, 16, COLORS.DARK, true);
  addText(s10, "─────────────────────────────────────", 80, 145, 560, 12, COLORS.GRAY);
  addText(s10, "forward         fd            앞으로\n\nbackward        bk            뒤로\n\nright           rt            오른쪽 회전\n\nleft            lt            왼쪽 회전", 80, 170, 560, 16, COLORS.DARK);

  // =====================================================
  // PART 3. 펜과 색상 (Concept 2) : 5장
  // =====================================================

  // [Slide 11] 펜 올리기/내리기
  var s11 = createHeaderSlide(deck, "펜 올리기/내리기");
  createCodeBlock(s11, 50, 100, 620, 200, 't.penup()     # 펜 들기 (선 안 그림)\nt.forward(100)\nt.pendown()   # 펜 내리기 (선 그림)\nt.forward(100)\n\n# 줄임말\nt.pu()\nt.pd()');
  addText(s11, "✏️ 펜을 들면 이동해도 선이 안 그려져요!", 50, 320, 620, 18, COLORS.GRAY);

  // [Slide 12] 펜 설정
  var s12 = createHeaderSlide(deck, "펜 설정");
  createCodeBlock(s12, 50, 100, 620, 150, 't.pensize(5)  # 펜 굵기\nt.pencolor("red")  # 펜 색상\nt.speed(1)    # 속도 (1~10, 0=가장 빠름)');
  var tipBox12 = s12.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 280, 520, 80);
  tipBox12.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s12, "🎨 다양한 색상과 굵기로 그리기!", 150, 305, 420, 18, COLORS.DARK, true, true);

  // [Slide 13] 사용 가능한 색상
  var s13 = createHeaderSlide(deck, "사용 가능한 색상");
  createCodeBlock(s13, 50, 100, 620, 230, '# 영어 색상명\n"red", "blue", "green", "yellow",\n"purple", "orange", "pink", "black"\n\n# RGB 값 (0~1)\nt.pencolor(1, 0.5, 0)  # 주황색\n\n# 16진수\nt.pencolor("#FF5733")');

  // [Slide 14] 도형 채우기
  var s14 = createHeaderSlide(deck, "도형 채우기");
  createCodeBlock(s14, 50, 100, 620, 220, 't.fillcolor("yellow")\nt.begin_fill()  # 채우기 시작\n\n# 도형 그리기\nfor _ in range(4):\n    t.fd(100)\n    t.rt(90)\n\nt.end_fill()    # 채우기 끝');
  addText(s14, "🟡 begin_fill()과 end_fill() 사이의 도형이 채워져요!", 50, 340, 620, 16, COLORS.GRAY);

  // [Slide 15] 위치 이동
  var s15 = createHeaderSlide(deck, "위치 이동");
  createCodeBlock(s15, 50, 100, 620, 170, 't.goto(100, 50)   # (100, 50) 위치로\nt.home()          # 원점 (0, 0)으로\nt.setx(200)       # x좌표만 변경\nt.sety(100)       # y좌표만 변경');
  var tipBox15 = s15.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 290, 520, 70);
  tipBox15.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s15, "📍 좌표계: 화면 중앙이 (0, 0)", 150, 310, 420, 18, COLORS.DARK, true, true);

  // =====================================================
  // PART 4. 실습 A - 기본 도형 (Practice A) : 6장
  // =====================================================

  // [Slide 16] 실습 A 안내
  var s16 = createHeaderSlide(deck, "실습 A: 기본 도형 그리기");
  addText(s16, "🔷 삼각형, 사각형, 원을 그려봐요!", 50, 110, 620, 24, COLORS.DARK, true);
  var goalBox16 = s16.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 170, 520, 180);
  goalBox16.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s16, "🎯 목표:\n\n• 반복문으로 도형 그리기\n• 정다각형 공식 이해\n• 원 그리기", 130, 200, 460, 18, COLORS.DARK);

  // [Slide 17] 삼각형 그리기
  var s17 = createHeaderSlide(deck, "삼각형 그리기");
  createCodeBlock(s17, 50, 100, 620, 200, 'import turtle\nt = turtle.Turtle()\nt.speed(3)\n\nfor _ in range(3):\n    t.fd(100)\n    t.lt(120)  # 360 / 3 = 120\n\nturtle.done()');
  var tipBox17 = s17.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 320, 520, 50);
  tipBox17.getFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s17, "정삼각형: 외각 120도!", 150, 330, 420, 18, COLORS.DARK, true, true);

  // [Slide 18] 사각형 그리기
  var s18 = createHeaderSlide(deck, "사각형 그리기");
  createCodeBlock(s18, 50, 100, 620, 150, 'for _ in range(4):\n    t.fd(100)\n    t.lt(90)  # 360 / 4 = 90');
  var tipBox18 = s18.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 280, 520, 50);
  tipBox18.getFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s18, "정사각형: 외각 90도!", 150, 290, 420, 18, COLORS.DARK, true, true);

  // [Slide 19] 정다각형 공식
  var s19 = createHeaderSlide(deck, "정다각형 공식");
  var formulaBox = s19.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 80, 100, 560, 100);
  formulaBox.getFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s19, "외각 = 360 / 변의 개수", 150, 130, 420, 28, COLORS.DARK, true, true);
  addText(s19, "• 삼각형: 360/3 = 120도\n• 사각형: 360/4 = 90도\n• 오각형: 360/5 = 72도\n• 육각형: 360/6 = 60도", 100, 230, 520, 20, COLORS.DARK);

  // [Slide 20] 원 그리기
  var s20 = createHeaderSlide(deck, "원 그리기");
  createCodeBlock(s20, 50, 100, 620, 180, 't.circle(50)    # 반지름 50인 원\nt.circle(100)   # 반지름 100인 원\n\nt.circle(50, 180)  # 반원 (180도)\nt.circle(50, 90)   # 사분원 (90도)');
  addText(s20, "🔵 circle(반지름, 각도) - 각도 생략시 완전한 원!", 50, 300, 620, 16, COLORS.GRAY);

  // [Slide 21] 여러 도형 함께 그리기
  var s21 = createHeaderSlide(deck, "여러 도형 함께 그리기");
  createCodeBlock(s21, 40, 95, 640, 280, 'def draw_shape(sides, size):\n    angle = 360 / sides\n    for _ in range(sides):\n        t.fd(size)\n        t.lt(angle)\n\ndraw_shape(3, 80)  # 삼각형\nt.pu(); t.fd(150); t.pd()\n\ndraw_shape(4, 80)  # 사각형\nt.pu(); t.fd(150); t.pd()\n\ndraw_shape(6, 50)  # 육각형');

  // =====================================================
  // PART 5. 실습 B - 별 그리기 (Practice B) : 6장
  // =====================================================

  // [Slide 22] 실습 B 안내
  var s22 = createHeaderSlide(deck, "실습 B: 별 그리기");
  addText(s22, "⭐ 오각별을 그려봐요! 채우기까지!", 50, 110, 620, 24, COLORS.DARK, true);
  var goalBox22 = s22.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 170, 520, 180);
  goalBox22.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s22, "🎯 목표:\n\n• 별의 원리 이해\n• 오각별 그리기\n• 색상 채우기", 130, 200, 460, 18, COLORS.DARK);

  // [Slide 23] 별의 원리
  var s23 = createHeaderSlide(deck, "별의 원리");
  var conceptBox23 = s23.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 80, 110, 560, 180);
  conceptBox23.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s23, "⭐ 오각별: 144도씩 회전!", 120, 140, 480, 24, COLORS.DARK, true, true);
  addText(s23, "360 / 5 * 2 = 144\n\n선을 교차해서 그리기!", 120, 200, 480, 20, COLORS.DARK, false, true);

  // [Slide 24] 오각별 그리기
  var s24 = createHeaderSlide(deck, "오각별 그리기");
  createCodeBlock(s24, 40, 95, 640, 280, 'import turtle\nt = turtle.Turtle()\nt.speed(3)\n\nt.pencolor("gold")\nt.fillcolor("yellow")\n\nt.begin_fill()\nfor _ in range(5):\n    t.fd(100)\n    t.rt(144)  # 144도 회전\nt.end_fill()\n\nturtle.done()');

  // [Slide 25] 여러 개 별
  var s25 = createHeaderSlide(deck, "여러 개 별");
  createCodeBlock(s25, 40, 95, 640, 280, 'import random\n\ndef draw_star(size):\n    t.begin_fill()\n    for _ in range(5):\n        t.fd(size)\n        t.rt(144)\n    t.end_fill()\n\nfor _ in range(5):\n    x = random.randint(-200, 200)\n    y = random.randint(-200, 200)\n    t.pu()\n    t.goto(x, y)\n    t.pd()\n    draw_star(30)');

  // [Slide 26] 다양한 모양 별
  var s26 = createHeaderSlide(deck, "다양한 모양 별");
  createCodeBlock(s26, 50, 100, 620, 220, '# 6각별\nfor _ in range(6):\n    t.fd(100)\n    t.rt(120)  # 360/6*2 = 120\n\n# 8각별\nfor _ in range(8):\n    t.fd(80)\n    t.rt(135)  # 360/8*3 = 135');
  addText(s26, "💫 각도를 바꾸면 다양한 별 모양!", 50, 340, 620, 16, COLORS.GRAY);

  // [Slide 27] 실행 결과
  var s27 = createHeaderSlide(deck, "실행 결과");
  var resultBox = s27.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 120, 520, 200);
  resultBox.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s27, "⭐", W/2 - 50, 160, 100, 80, COLORS.HAEDAL_YELLOW, false, true);
  addText(s27, "🌟 멋진 별 완성!", W/2 - 150, 280, 300, 24, COLORS.DARK, true, true);

  // =====================================================
  // PART 6. 패턴 만들기 (Advanced) : 4장
  // =====================================================

  // [Slide 28] 사각형 패턴
  var s28 = createHeaderSlide(deck, "사각형 패턴");
  createCodeBlock(s28, 50, 100, 620, 180, 'for i in range(36):\n    for _ in range(4):\n        t.fd(100)\n        t.rt(90)\n    t.rt(10)  # 10도씩 회전');
  var tipBox28 = s28.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 300, 520, 60);
  tipBox28.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s28, "36번 반복 × 10도 = 360도!", 150, 315, 420, 18, COLORS.DARK, true, true);

  // [Slide 29] 컬러풀 원
  var s29 = createHeaderSlide(deck, "컬러풀 원");
  createCodeBlock(s29, 40, 95, 640, 260, 'import turtle\ncolors = ["red", "orange", "yellow", \n          "green", "blue", "purple"]\n\nt = turtle.Turtle()\nt.speed(0)\n\nfor i in range(36):\n    t.pencolor(colors[i % 6])\n    t.circle(100)\n    t.rt(10)');

  // [Slide 30] 크기 변화 패턴
  var s30 = createHeaderSlide(deck, "크기 변화 패턴");
  createCodeBlock(s30, 50, 100, 620, 150, 'for size in range(10, 200, 10):\n    t.circle(size)\n    t.rt(20)');
  addText(s30, "🌀 점점 커지는 원들!", 50, 280, 620, 20, COLORS.DARK, true);

  // [Slide 31] 나만의 패턴 만들기
  var s31 = createHeaderSlide(deck, "나만의 패턴 만들기");
  createCodeBlock(s31, 80, 110, 560, 140, '# 아이디어:\n# - 도형 종류 바꾸기\n# - 색상 바꾸기\n# - 크기 바꾸기\n# - 회전 각도 바꾸기');
  var ideaBox = s31.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 280, 520, 70);
  ideaBox.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s31, "🎨 자유롭게 실험해보세요!", 150, 300, 420, 20, COLORS.DARK, true, true);

  // =====================================================
  // PART 7. 마무리 (Finish) : 4장
  // =====================================================

  // [Slide 32] 도전 과제
  var s32 = createHeaderSlide(deck, "도전 과제!");
  var challengeBox = s32.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 80, 120, 560, 220);
  challengeBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s32, "🏆 집 그리기!", 120, 150, 480, 28, COLORS.DARK, true, true);
  addText(s32, "• 사각형 + 삼각형 지붕\n• 문과 창문 추가\n• 색상도 넣어보세요!", 120, 210, 480, 20, COLORS.DARK);

  // [Slide 33] 오늘 배운 것
  var s33 = createHeaderSlide(deck, "오늘 배운 것");
  var reviewBox = s33.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 80, 110, 560, 260);
  reviewBox.getFill().setSolidFill(COLORS.CREAM_BG);
  reviewBox.getBorder().setWeight(3).getLineFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s33, "✅ forward/backward: 이동\n\n✅ right/left: 회전\n\n✅ penup/pendown: 펜 제어\n\n✅ pencolor/fillcolor: 색상\n\n✅ circle: 원 그리기", 120, 140, 480, 18, COLORS.DARK);

  // [Slide 34] 예고
  var s34 = deck.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  s34.getBackground().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s34, "다음 시간에는...", W/2 - 200, H/2 - 100, 400, 28, COLORS.DARK, true, true);
  addText(s34, "🐢 turtle 응용!", W/2 - 200, H/2 - 30, 400, 24, COLORS.WHITE, true, true);
  addText(s34, "소용돌이, 마우스 추적 등\n더 재미있는 그림!", W/2 - 200, H/2 + 30, 400, 20, COLORS.WHITE, false, true);
  addText(s34, "14차시에서 만나요!", W/2 - 150, H/2 + 100, 300, 20, COLORS.DARK, true, true);

  // [Slide 35] 엔딩
  var s35 = deck.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  s35.getBackground().setSolidFill(COLORS.HAEDAL_YELLOW);
  var endBox = s35.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, W/2 - 250, H/2 - 120, 500, 240);
  endBox.getFill().setSolidFill(COLORS.WHITE);
  addText(s35, "수고했어요!", W/2 - 200, H/2 - 80, 400, 36, COLORS.DARK, true, true);
  addText(s35, "🐢 이제 코드로 그림을\n그릴 수 있어요!", W/2 - 200, H/2 - 20, 400, 20, COLORS.GRAY, false, true);
  addText(s35, "13차시 완료", W/2 - 100, H/2 + 60, 200, 24, COLORS.HAEDAL_YELLOW, true, true);

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
