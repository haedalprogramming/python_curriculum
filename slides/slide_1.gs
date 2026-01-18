/**
 * [해달에듀] 파이썬 프로그래밍 1차시: 파이썬의 이해와 설치
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
function createPythonLesson1() {
  var deck = SlidesApp.create("[해달에듀] 파이썬 1차시 - 파이썬과 첫 만남!");
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
  addText(s01, "파이썬과 첫 만남!", W/2 - 250, H/2 - 100, 500, 48, COLORS.DARK, true, true);
  addText(s01, "🐍 개발 환경 세팅하기", W/2 - 250, H/2 - 20, 500, 24, COLORS.GRAY, false, true);
  addText(s01, "1차시 | 해달에듀", W/2 - 250, H/2 + 50, 500, 18, COLORS.GRAY, false, true);

  // [Slide 02] 질문 - 프로그래밍이 뭘까요?
  var s02 = createHeaderSlide(deck, "프로그래밍이 뭘까요?");
  createCard(s02, 50, 120, 200, 150, "🎮", "게임 만들기", COLORS.LIGHT_BG);
  createCard(s02, 270, 120, 200, 150, "🤖", "로봇 조종", COLORS.LIGHT_BG);
  createCard(s02, 490, 120, 200, 150, "💬", "채팅봇", COLORS.LIGHT_BG);
  var answerBox = s02.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 300, 520, 80);
  answerBox.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s02, "정답: 다 맞아요! 컴퓨터에게 명령을 내리는 것!", 120, 320, 480, 18, COLORS.DARK, true, true);

  // [Slide 03] 미리보기 - 오늘의 완성작
  var s03 = createHeaderSlide(deck, "오늘의 완성작!");
  createCodeBlock(s03, 100, 120, 520, 100, 'print("Hello, World!")');
  var resultBox = s03.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 240, 520, 80);
  resultBox.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s03, "→ 화면에 글자가 짠! 나타나요 🎉", 120, 260, 480, 20, COLORS.DARK, true, true);

  // [Slide 04] 오늘의 미션
  var s04 = createHeaderSlide(deck, "오늘의 미션!");
  var goalBox = s04.insertShape(SlidesApp.ShapeType.RECTANGLE, 100, 120, 520, 260);
  goalBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  goalBox.getBorder().setDashStyle(SlidesApp.DashStyle.DASH).setWeight(2).getLineFill().setSolidFill(COLORS.GRAY);
  addText(s04, "☐ 1. 파이썬이 뭔지 알기\n\n☐ 2. VS Code 설치하기\n\n☐ 3. 첫 번째 코드 실행하기", 140, 150, 440, 20, COLORS.DARK);

  // =====================================================
  // PART 2. 파이썬 소개 (Concept) : 6장
  // =====================================================

  // [Slide 05] 파이썬이 뭐예요?
  var s05 = createHeaderSlide(deck, "파이썬(Python)이 뭐예요?");
  addText(s05, "🐍 뱀 이름이 아니에요!", 50, 100, 620, 24, COLORS.DARK, true);
  var conceptBox = s05.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 150, 350, 200);
  conceptBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s05, "코미디 그룹\n'몬티 파이썬'에서\n따온 이름이에요", 80, 190, 290, 18, COLORS.DARK, false, true);
  addText(s05, "💬 컴퓨터와 대화하는 언어", 420, 220, 260, 18, COLORS.DARK, true, true);

  // [Slide 06] 왜 파이썬을 배울까요?
  var s06 = createHeaderSlide(deck, "왜 파이썬을 배울까요?");
  createCard(s06, 50, 120, 200, 150, "📝", "문법이 쉬워요\n(영어처럼 읽혀요)", COLORS.LIGHT_BG);
  createCard(s06, 270, 120, 200, 150, "🛠️", "할 수 있는 게\n엄청 많아요", COLORS.LIGHT_BG);
  createCard(s06, 490, 120, 200, 150, "🌍", "전 세계에서\n가장 인기 있어요", COLORS.LIGHT_BG);

  // [Slide 07] 파이썬으로 뭘 만들 수 있을까?
  var s07 = createHeaderSlide(deck, "파이썬으로 뭘 만들 수 있을까?");
  createCard(s07, 50, 120, 150, 130, "🎮", "게임", COLORS.CREAM_BG);
  createCard(s07, 220, 120, 150, 130, "🤖", "인공지능", COLORS.CREAM_BG);
  createCard(s07, 390, 120, 150, 130, "📊", "데이터 분석", COLORS.CREAM_BG);
  createCard(s07, 560, 120, 130, 130, "🌐", "웹사이트", COLORS.CREAM_BG);
  addText(s07, "(마인크래프트 모드, ChatGPT 등!)", 50, 280, 620, 16, COLORS.GRAY, false, true);

  // [Slide 08] 파이썬 vs 다른 언어
  var s08 = createHeaderSlide(deck, "파이썬 vs 다른 언어");
  addText(s08, "C언어:", 50, 110, 100, 16, COLORS.GRAY, true);
  createCodeBlock(s08, 150, 100, 500, 40, 'printf("Hello");');
  addText(s08, "Java:", 50, 165, 100, 16, COLORS.GRAY, true);
  createCodeBlock(s08, 150, 155, 500, 40, 'System.out.println("Hello");');
  addText(s08, "Python:", 50, 225, 100, 16, COLORS.HAEDAL_YELLOW, true);
  createCodeBlock(s08, 150, 215, 500, 50, 'print("Hello")');
  var winnerBox = s08.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 150, 280, 500, 50);
  winnerBox.getFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s08, "← 제일 간단! 🏆", 200, 290, 400, 20, COLORS.DARK, true, true);

  // [Slide 09] 파이썬 핵심 정리
  var s09 = createHeaderSlide(deck, "파이썬 핵심 정리");
  var summaryBox = s09.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 80, 120, 560, 250);
  summaryBox.getFill().setSolidFill(COLORS.CREAM_BG);
  summaryBox.getBorder().setWeight(3).getLineFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s09, "📝 컴퓨터와 대화하는 언어\n\n📝 쉽고 강력함\n\n📝 게임, AI, 웹 다 가능!", 120, 160, 480, 20, COLORS.DARK);

  // [Slide 10] 전환
  var s10 = createHeaderSlide(deck, "자, 이제 파이썬을 설치해볼까요?");
  addText(s10, "🛠️", W/2 - 40, 180, 80, 80, COLORS.DARK, false, true);
  addText(s10, "도구를 준비합시다!", W/2 - 150, 300, 300, 24, COLORS.DARK, true, true);

  // =====================================================
  // PART 3. 파이썬 설치 (Setup 1) : 6장
  // =====================================================

  // [Slide 11] 파이썬 설치하기
  var s11 = createHeaderSlide(deck, "파이썬 설치하기");
  addText(s11, "🌐 python.org 접속", 50, 100, 350, 24, COLORS.DARK, true);
  createImagePlaceholder(s11, 50, 150, 350, 220, "python.org 웹사이트\n메인 화면 스크린샷");
  var urlBox = s11.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 420, 200, 260, 60);
  urlBox.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s11, "https://python.org", 440, 215, 220, 18, COLORS.DARK, true, true);

  // [Slide 12] 다운로드 버튼 클릭
  var s12 = createHeaderSlide(deck, "다운로드 버튼 클릭!");
  addText(s12, "[Download Python 3.x] 버튼을 찾아서 클릭", 50, 100, 350, 18, COLORS.DARK, true);
  createImagePlaceholder(s12, 50, 140, 620, 230, "다운로드 버튼\n(빨간 박스 강조)");

  // [Slide 13] 설치 프로그램 실행 - PATH 중요!
  var s13 = createHeaderSlide(deck, "설치 프로그램 실행");
  var warningBox = s13.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 100, 350, 80);
  warningBox.getFill().setSolidFill(COLORS.RED_HIGHLIGHT);
  addText(s13, "⚠️ 중요!\n\"Add Python to PATH\" 체크 필수!", 70, 115, 310, 16, COLORS.WHITE, true);
  createImagePlaceholder(s13, 420, 100, 260, 270, "설치 화면\n(PATH 체크박스\n빨간 박스 강조)");

  // [Slide 14] Install Now 클릭
  var s14 = createHeaderSlide(deck, "Install Now 클릭");
  addText(s14, "설치가 진행됩니다... 잠시만 기다려주세요 ⏳", 50, 100, 620, 20, COLORS.DARK, true);
  createImagePlaceholder(s14, 100, 150, 520, 220, "설치 진행 화면\n(프로그레스 바)");

  // [Slide 15] 설치 완료
  var s15 = createHeaderSlide(deck, "설치 완료!");
  var successBox = s15.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 120, 520, 100);
  successBox.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s15, "✅ \"Setup was successful\"\n메시지가 나오면 성공!", 150, 145, 420, 20, COLORS.DARK, true, true);
  createImagePlaceholder(s15, 100, 240, 520, 130, "설치 완료 화면");

  // [Slide 16] 설치 확인하기
  var s16 = createHeaderSlide(deck, "설치 확인하기");
  addText(s16, "명령 프롬프트에서 확인:", 50, 100, 620, 18, COLORS.DARK, true);
  createCodeBlock(s16, 50, 140, 620, 60, "python --version");
  var resultBox16 = s16.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 220, 620, 80);
  resultBox16.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s16, "Python 3.x.x 가 나오면 성공! 🎉", 100, 245, 520, 20, COLORS.DARK, true, true);

  // =====================================================
  // PART 4. VS Code 설치 (Setup 2) : 6장
  // =====================================================

  // [Slide 17] VS Code가 뭐예요?
  var s17 = createHeaderSlide(deck, "VS Code가 뭐예요?");
  addText(s17, "📝 코드를 작성하는 메모장\n(근데 엄청 똑똑한!)", 50, 100, 400, 20, COLORS.DARK, true);
  var vsBox = s17.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 180, 400, 100);
  vsBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s17, "Visual Studio Code\n= 마이크로소프트가 만든 무료 에디터", 80, 200, 340, 16, COLORS.DARK, false, true);
  createImagePlaceholder(s17, 480, 120, 200, 200, "VS Code\n로고");

  // [Slide 18] VS Code 다운로드
  var s18 = createHeaderSlide(deck, "VS Code 다운로드");
  addText(s18, "🌐 code.visualstudio.com 접속", 50, 100, 400, 20, COLORS.DARK, true);
  addText(s18, "[Download] 버튼 클릭", 50, 140, 400, 18, COLORS.DARK);
  createImagePlaceholder(s18, 50, 180, 620, 200, "VS Code 다운로드 페이지\n(Download 버튼 빨간 박스 강조)");

  // [Slide 19] 설치 프로그램 실행
  var s19 = createHeaderSlide(deck, "설치 프로그램 실행");
  addText(s19, "약관 동의 → 다음 → 다음 → 설치", 50, 100, 620, 20, COLORS.DARK, true);
  createImagePlaceholder(s19, 100, 150, 520, 220, "VS Code 설치 과정\n스크린샷");

  // [Slide 20] VS Code 실행
  var s20 = createHeaderSlide(deck, "VS Code 실행!");
  addText(s20, "처음 실행하면 이런 화면이 나와요", 50, 100, 620, 18, COLORS.DARK);
  createImagePlaceholder(s20, 50, 140, 620, 240, "VS Code 시작 화면\n스크린샷");

  // [Slide 21] Python 확장 설치
  var s21 = createHeaderSlide(deck, "Python 확장 설치");
  var stepBox21 = s21.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 100, 350, 200);
  stepBox21.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s21, "1. 왼쪽 블록 아이콘\n   (Extensions) 클릭\n\n2. \"Python\" 검색\n\n3. 첫 번째 항목\n   [Install] 클릭", 80, 120, 290, 16, COLORS.DARK);
  createImagePlaceholder(s21, 420, 100, 260, 280, "Extensions 화면\n(Python 확장\n빨간 박스 강조)");

  // [Slide 22] 개발 환경 완성!
  var s22 = createHeaderSlide(deck, "개발 환경 완성!");
  var completeBox = s22.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 130, 520, 200);
  completeBox.getFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s22, "🎉", W/2 - 30, 160, 60, 60, COLORS.DARK, false, true);
  addText(s22, "이제 코딩할 준비가 됐어요!", W/2 - 180, 250, 360, 24, COLORS.DARK, true, true);

  // =====================================================
  // PART 5. 첫 코드 작성 (Practice) : 8장
  // =====================================================

  // [Slide 23] 드디어 첫 코드!
  var s23 = createHeaderSlide(deck, "드디어 첫 코드!");
  addText(s23, "🚀 프로그래머의 전통:", 50, 100, 620, 24, COLORS.DARK, true);
  var helloBox = s23.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 160, 520, 120);
  helloBox.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s23, "첫 코드는 항상\n\"Hello, World!\"", 150, 190, 420, 28, COLORS.DARK, true, true);

  // [Slide 24] 새 파일 만들기
  var s24 = createHeaderSlide(deck, "새 파일 만들기");
  var stepBox24 = s24.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 100, 350, 150);
  stepBox24.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s24, "1. File → New File\n\n2. 파일 이름: hello.py", 80, 130, 290, 18, COLORS.DARK);
  var pyBox = s24.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 270, 350, 60);
  pyBox.getFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s24, ".py = 파이썬 파일!", 80, 285, 290, 18, COLORS.DARK, true, true);
  createImagePlaceholder(s24, 420, 100, 260, 230, "새 파일 만들기\n스크린샷");

  // [Slide 25] 코드 입력하기
  var s25 = createHeaderSlide(deck, "코드 입력하기");
  createCodeBlock(s25, 50, 120, 620, 80, 'print("Hello, World!")');
  addText(s25, "💡 따옴표 안에 원하는 말을 써요!", 50, 230, 620, 20, COLORS.DARK, true);
  addText(s25, "print = 화면에 출력해줘!", 50, 280, 620, 18, COLORS.GRAY);

  // [Slide 26] print()가 뭐예요?
  var s26 = createHeaderSlide(deck, "print()가 뭐예요?");
  addText(s26, "📢 화면에 글자를 \"출력\"하는 명령어", 50, 100, 620, 22, COLORS.DARK, true);
  var printBox = s26.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 150, 350, 200);
  printBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s26, "print = 인쇄하다\n\n괄호 안의 내용을\n화면에 보여줘요!", 80, 180, 290, 18, COLORS.DARK, false, true);
  addText(s26, "🖨️", 500, 200, 80, 60, COLORS.DARK, false, true);

  // [Slide 27] 코드 실행하기
  var s27 = createHeaderSlide(deck, "코드 실행하기");
  var methodBox1 = s27.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 100, 300, 100);
  methodBox1.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s27, "방법 1:\n오른쪽 위 ▶️ 버튼 클릭", 80, 120, 240, 16, COLORS.DARK, true);
  var methodBox2 = s27.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 370, 100, 310, 100);
  methodBox2.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s27, "방법 2: 터미널에서\npython hello.py 입력", 400, 120, 250, 16, COLORS.DARK, true);
  createImagePlaceholder(s27, 50, 220, 620, 160, "실행 버튼 위치\n(빨간 박스 강조)");

  // [Slide 28] 결과 확인
  var s28 = createHeaderSlide(deck, "짠! 결과 확인");
  createCodeBlock(s28, 50, 110, 620, 60, "Hello, World!");
  var celebBox = s28.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 200, 520, 100);
  celebBox.getFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s28, "🎉 축하해요! 첫 코드 성공!", 150, 230, 420, 24, COLORS.DARK, true, true);

  // [Slide 29] 나만의 메시지 출력하기
  var s29 = createHeaderSlide(deck, "나만의 메시지 출력하기");
  createCodeBlock(s29, 50, 110, 620, 120, 'print("안녕하세요!")\nprint("나는 파이썬을 배우고 있어요")');
  addText(s29, "💡 여러 줄도 가능해요!", 50, 260, 620, 20, COLORS.DARK, true);

  // [Slide 30] 따라해 보세요!
  var s30 = createHeaderSlide(deck, "따라해 보세요!");
  createCodeBlock(s30, 50, 120, 620, 80, 'print("내 이름은 ___입니다")');
  var practiceBox = s30.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 230, 520, 80);
  practiceBox.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s30, "👆 빈칸에 자기 이름을 넣어보세요!", 150, 255, 420, 20, COLORS.DARK, true, true);

  // =====================================================
  // PART 6. 마무리 (Finish) : 5장
  // =====================================================

  // [Slide 31] 오늘 배운 것
  var s31 = createHeaderSlide(deck, "오늘 배운 것");
  var reviewBox = s31.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 80, 110, 560, 270);
  reviewBox.getFill().setSolidFill(COLORS.CREAM_BG);
  reviewBox.getBorder().setWeight(3).getLineFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s31, "✅ 파이썬 = 컴퓨터와 대화하는 언어\n\n✅ 파이썬 + VS Code 설치 완료\n\n✅ print()로 화면에 출력하기", 120, 150, 480, 20, COLORS.DARK);

  // [Slide 32] SOS
  var s32 = deck.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  s32.getBackground().setSolidFill(COLORS.DARK_BG);
  addText(s32, "🆘 도와주세요!", 50, 30, 620, 28, COLORS.HAEDAL_YELLOW, true);
  var sos1 = s32.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 30, 90, 220, 150);
  sos1.getFill().setSolidFill("#5A5A5A");
  addText(s32, "설치가 안 돼요", 50, 110, 180, 16, COLORS.WHITE, true);
  addText(s32, "→ 선생님께\n화면 공유하기", 50, 150, 180, 14, COLORS.LIGHT_BG);
  var sos2 = s32.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 265, 90, 220, 150);
  sos2.getFill().setSolidFill("#5A5A5A");
  addText(s32, "코드가 안 돼요", 285, 110, 180, 16, COLORS.WHITE, true);
  addText(s32, "→ 따옴표, 괄호\n확인!", 285, 150, 180, 14, COLORS.LIGHT_BG);
  var sos3 = s32.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 500, 90, 200, 150);
  sos3.getFill().setSolidFill("#5A5A5A");
  addText(s32, "영어가 어려워요", 520, 110, 160, 16, COLORS.WHITE, true);
  addText(s32, "→ 복붙해도\n괜찮아요!", 520, 150, 160, 14, COLORS.LIGHT_BG);

  // [Slide 33] 도전 과제
  var s33 = createHeaderSlide(deck, "도전 과제");
  var challengeBox = s33.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 80, 120, 560, 200);
  challengeBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s33, "🏆 print()를 5번 써서\n자기소개 만들기!", 120, 150, 480, 24, COLORS.DARK, true, true);
  addText(s33, "이름, 나이, 좋아하는 것 등...", 120, 250, 480, 18, COLORS.GRAY, false, true);

  // [Slide 34] 예고
  var s34 = deck.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  s34.getBackground().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s34, "다음 시간에는...", W/2 - 200, H/2 - 100, 400, 28, COLORS.DARK, true, true);
  addText(s34, "🔢 숫자를 다뤄볼 거예요!", W/2 - 200, H/2 - 30, 400, 24, COLORS.WHITE, true, true);
  addText(s34, "계산기도 만들고,\n변수라는 신기한 상자도 배워요!", W/2 - 200, H/2 + 20, 400, 20, COLORS.WHITE, false, true);
  addText(s34, "2차시에서 만나요!", W/2 - 150, H/2 + 100, 300, 20, COLORS.DARK, true, true);

  // [Slide 35] 엔딩
  var s35 = deck.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  s35.getBackground().setSolidFill(COLORS.HAEDAL_YELLOW);
  var endBox = s35.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, W/2 - 250, H/2 - 120, 500, 240);
  endBox.getFill().setSolidFill(COLORS.WHITE);
  addText(s35, "수고했어요!", W/2 - 200, H/2 - 80, 400, 36, COLORS.DARK, true, true);
  addText(s35, "🐍 파이썬 마스터가 되는\n첫 걸음을 뗐어요!", W/2 - 200, H/2 - 20, 400, 20, COLORS.GRAY, false, true);
  addText(s35, "1차시 완료", W/2 - 100, H/2 + 60, 200, 24, COLORS.HAEDAL_YELLOW, true, true);

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
