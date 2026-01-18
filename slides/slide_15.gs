/**
 * [해달에듀] 파이썬 프로그래밍 15차시: webbrowser 모듈
 * 자동 슬라이드 생성 스크립트 (32장)
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
function createPythonLesson15() {
  var deck = SlidesApp.create("[해달에듀] 파이썬 15차시 - 파이썬으로 웹 열기!");
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
  addText(s01, "파이썬으로 웹 열기!", W/2 - 250, H/2 - 100, 500, 44, COLORS.DARK, true, true);
  addText(s01, "🌐 webbrowser 모듈", W/2 - 250, H/2 - 20, 500, 24, COLORS.GRAY, false, true);
  addText(s01, "15차시 | 해달에듀", W/2 - 250, H/2 + 50, 500, 18, COLORS.GRAY, false, true);

  // [Slide 02] 질문
  var s02 = createHeaderSlide(deck, "파이썬으로 웹사이트를 열 수 있다면?");
  createCard(s02, 50, 120, 200, 150, "🔍", "자동 검색\n프로그램", COLORS.LIGHT_BG);
  createCard(s02, 270, 120, 200, 150, "📑", "여러 탭\n한 번에 열기", COLORS.LIGHT_BG);
  createCard(s02, 490, 120, 200, 150, "👔", "사장님 모드\n(빠른 화면 전환)", COLORS.LIGHT_BG);
  var answerBox = s02.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 300, 520, 60);
  answerBox.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s02, "가능합니다!", 120, 315, 480, 20, COLORS.DARK, true, true);

  // [Slide 03] 미리보기
  var s03 = createHeaderSlide(deck, "오늘의 완성작!");
  createCard(s03, 80, 130, 260, 200, "🔍", "구글\n자동 검색기", COLORS.CREAM_BG);
  createCard(s03, 380, 130, 260, 200, "👔", "사장님이\n오셨다!", COLORS.CREAM_BG);

  // [Slide 04] 오늘의 미션
  var s04 = createHeaderSlide(deck, "오늘의 미션!");
  var goalBox = s04.insertShape(SlidesApp.ShapeType.RECTANGLE, 100, 120, 520, 260);
  goalBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  goalBox.getBorder().setDashStyle(SlidesApp.DashStyle.DASH).setWeight(2).getLineFill().setSolidFill(COLORS.GRAY);
  addText(s04, "☐ 1. webbrowser 기본 사용법\n\n☐ 2. URL 열기와 검색\n\n☐ 3. 여러 탭 열기\n\n☐ 4. 재미있는 프로그램 만들기", 140, 140, 440, 20, COLORS.DARK);

  // =====================================================
  // PART 2. webbrowser 기초 (Concept 1) : 6장
  // =====================================================

  // [Slide 05] webbrowser 모듈이란?
  var s05 = createHeaderSlide(deck, "webbrowser 모듈이란?");
  addText(s05, "🌐 웹 브라우저를 제어하는 모듈!", 50, 100, 620, 24, COLORS.DARK, true);
  createCodeBlock(s05, 100, 160, 520, 70, "import webbrowser");
  var tipBox = s05.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 260, 520, 80);
  tipBox.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s05, "기본 브라우저에서 웹페이지 열기!", 150, 285, 420, 18, COLORS.DARK, true, true);

  // [Slide 06] 웹사이트 열기
  var s06 = createHeaderSlide(deck, "웹사이트 열기");
  createCodeBlock(s06, 50, 100, 620, 130, 'import webbrowser\n\nwebbrowser.open("https://www.google.com")');
  var resultBox = s06.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 260, 520, 80);
  resultBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s06, "→ 기본 브라우저로 구글이 열려요!", 150, 285, 420, 18, COLORS.DARK, true, true);

  // [Slide 07] 새 탭에서 열기
  var s07 = createHeaderSlide(deck, "새 탭에서 열기");
  createCodeBlock(s07, 50, 100, 620, 180, '# 새 탭에서 열기\nwebbrowser.open_new_tab("https://www.naver.com")\n\n# 새 창에서 열기\nwebbrowser.open_new("https://www.daum.net")');
  addText(s07, "💡 open_new_tab vs open_new 차이!", 50, 300, 620, 16, COLORS.GRAY);

  // [Slide 08] 여러 사이트 열기
  var s08 = createHeaderSlide(deck, "여러 사이트 열기");
  createCodeBlock(s08, 50, 100, 620, 200, 'sites = [\n    "https://www.google.com",\n    "https://www.youtube.com",\n    "https://www.github.com"\n]\n\nfor site in sites:\n    webbrowser.open_new_tab(site)');
  addText(s08, "🎉 한 번에 여러 탭 열기!", 50, 320, 620, 18, COLORS.DARK, true);

  // [Slide 09] URL 구조 이해
  var s09 = createHeaderSlide(deck, "URL 구조 이해");
  var urlBox = s09.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 100, 620, 80);
  urlBox.getFill().setSolidFill(COLORS.CODE_BG);
  addText(s09, "https://www.google.com/search?q=파이썬", 70, 125, 580, 18, COLORS.CODE_WHITE, false, true);
  addText(s09, "• https://           프로토콜\n• www.google.com    도메인\n• /search             경로\n• ?q=파이썬          검색어 (쿼리)", 80, 200, 560, 18, COLORS.DARK);

  // [Slide 10] 검색 URL 만들기
  var s10 = createHeaderSlide(deck, "검색 URL 만들기");
  createCodeBlock(s10, 50, 100, 620, 220, 'query = "파이썬 강좌"\n\n# 구글 검색\nurl = f"https://www.google.com/search?q={query}"\nwebbrowser.open(url)\n\n# 유튜브 검색\nurl = f"https://www.youtube.com/results?search_query={query}"\nwebbrowser.open(url)');

  // =====================================================
  // PART 3. URL 인코딩 (Concept 2) : 4장
  // =====================================================

  // [Slide 11] URL 인코딩이란?
  var s11 = createHeaderSlide(deck, "URL 인코딩이란?");
  addText(s11, "🔤 URL에 한글이나 특수문자가 있으면?", 50, 100, 620, 22, COLORS.DARK, true);
  var conceptBox = s11.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 80, 160, 560, 180);
  conceptBox.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s11, "컴퓨터가 이해할 수 있게 변환!\n\n\"파이썬\"\n→ \"%ED%8C%8C%EC%9D%B4%EC%8D%AC\"", 120, 190, 480, 18, COLORS.DARK, false, true);

  // [Slide 12] urllib.parse 사용
  var s12 = createHeaderSlide(deck, "urllib.parse 사용");
  createCodeBlock(s12, 50, 100, 620, 220, 'from urllib.parse import quote\n\nquery = "파이썬 프로그래밍"\nencoded = quote(query)\nprint(encoded)  # %ED%8C%8C%EC%9D%B4%EC%8D%AC%20...\n\nurl = f"https://www.google.com/search?q={encoded}"\nwebbrowser.open(url)');

  // [Slide 13] 검색 함수 만들기
  var s13 = createHeaderSlide(deck, "검색 함수 만들기");
  createCodeBlock(s13, 50, 100, 620, 200, 'from urllib.parse import quote\nimport webbrowser\n\ndef google_search(query):\n    encoded = quote(query)\n    url = f"https://www.google.com/search?q={encoded}"\n    webbrowser.open(url)\n\ngoogle_search("파이썬 문법")');

  // [Slide 14] 다양한 검색 엔진
  var s14 = createHeaderSlide(deck, "다양한 검색 엔진");
  createCodeBlock(s14, 30, 90, 660, 290, 'def search(query, engine="google"):\n    encoded = quote(query)\n    \n    if engine == "google":\n        url = f"https://www.google.com/search?q={encoded}"\n    elif engine == "naver":\n        url = f"https://search.naver.com/search.naver?query={encoded}"\n    elif engine == "youtube":\n        url = f"https://www.youtube.com/results?search_query={encoded}"\n    \n    webbrowser.open(url)');

  // =====================================================
  // PART 4. 실습 A - 자동 검색기 (Practice A) : 6장
  // =====================================================

  // [Slide 15] 실습 A 안내
  var s15 = createHeaderSlide(deck, "실습 A: 구글 자동 검색기");
  addText(s15, "🔍 검색어를 입력하면 자동으로 검색!", 50, 110, 620, 24, COLORS.DARK, true);
  var goalBox15 = s15.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 170, 520, 180);
  goalBox15.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s15, "🎯 목표:\n\n• 검색 함수 만들기\n• 메뉴 시스템 구현\n• 검색 엔진 선택 가능!", 130, 200, 460, 18, COLORS.DARK);

  // [Slide 16] 검색 함수
  var s16 = createHeaderSlide(deck, "검색 함수");
  createCodeBlock(s16, 30, 90, 660, 280, 'from urllib.parse import quote\nimport webbrowser\n\ndef search_google(query):\n    url = f"https://www.google.com/search?q={quote(query)}"\n    webbrowser.open(url)\n\ndef search_naver(query):\n    url = f"https://search.naver.com/search.naver?query={quote(query)}"\n    webbrowser.open(url)\n\ndef search_youtube(query):\n    url = f"https://www.youtube.com/results?search_query={quote(query)}"\n    webbrowser.open(url)');

  // [Slide 17] 메뉴 시스템
  var s17 = createHeaderSlide(deck, "메뉴 시스템");
  createCodeBlock(s17, 20, 85, 680, 300, 'while True:\n    print("\\n=== 검색 프로그램 ===")\n    print("1. 구글 검색")\n    print("2. 네이버 검색")\n    print("3. 유튜브 검색")\n    print("4. 종료")\n    \n    choice = input("선택: ")\n    \n    if choice == "4":\n        print("안녕!")\n        break\n    \n    query = input("검색어: ")\n    \n    if choice == "1":\n        search_google(query)\n    elif choice == "2":\n        search_naver(query)\n    elif choice == "3":\n        search_youtube(query)');

  // [Slide 18] 실행 결과
  var s18 = createHeaderSlide(deck, "실행 결과");
  createCodeBlock(s18, 80, 110, 560, 200, '=== 검색 프로그램 ===\n1. 구글 검색\n2. 네이버 검색\n3. 유튜브 검색\n4. 종료\n선택: 3\n검색어: 파이썬 강의');
  addText(s18, "→ 유튜브에서 \"파이썬 강의\" 검색!", 80, 330, 560, 18, COLORS.DARK, true, true);

  // [Slide 19] 여러 검색어 한 번에
  var s19 = createHeaderSlide(deck, "확장: 여러 검색어 한 번에");
  createCodeBlock(s19, 50, 100, 620, 180, 'queries = input("검색어들 (쉼표로 구분): ")\nquery_list = queries.split(",")\n\nfor q in query_list:\n    search_google(q.strip())');
  addText(s19, "🎉 한 번에 여러 탭 열기!", 50, 300, 620, 18, COLORS.GRAY);

  // [Slide 20] 이미지 검색
  var s20 = createHeaderSlide(deck, "확장: 이미지 검색");
  createCodeBlock(s20, 50, 100, 620, 150, 'def search_images(query):\n    encoded = quote(query)\n    url = f"https://www.google.com/search?q={encoded}&tbm=isch"\n    webbrowser.open(url)');
  var tipBox20 = s20.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 280, 520, 70);
  tipBox20.getFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s20, "&tbm=isch = 이미지 검색!", 150, 300, 420, 18, COLORS.DARK, true, true);

  // =====================================================
  // PART 5. 실습 B - 사장님 모드 (Practice B) : 6장
  // =====================================================

  // [Slide 21] 실습 B 안내
  var s21 = createHeaderSlide(deck, "실습 B: 사장님이 오셨다!");
  addText(s21, "👔 비상! 업무 화면으로 빠르게 전환!", 50, 110, 620, 24, COLORS.DARK, true);
  var goalBox21 = s21.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 170, 520, 180);
  goalBox21.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s21, "🎮 재미로 만드는 프로그램!\n\n• 엔터 누르면 업무 사이트 열기\n• 타이머 버전도 구현!", 130, 200, 460, 18, COLORS.DARK);

  // [Slide 22] 엔터키로 발동
  var s22 = createHeaderSlide(deck, "엔터키로 발동");
  createCodeBlock(s22, 30, 90, 660, 280, 'import webbrowser\n\nwork_sites = [\n    "https://docs.google.com",\n    "https://www.microsoft.com/excel",\n    "https://mail.google.com"\n]\n\nprint("👀 게임하는 중...")\nprint("사장님이 오시면 엔터를 누르세요!")\ninput()  # 엔터 대기\n\nprint("👔 사장님이 오셨다!")\nfor site in work_sites:\n    webbrowser.open_new_tab(site)');

  // [Slide 23] 타이머 버전
  var s23 = createHeaderSlide(deck, "타이머 버전");
  createCodeBlock(s23, 50, 100, 620, 220, 'import webbrowser\nimport time\n\nprint("5초 후에 업무 화면이 열립니다...")\n\nfor i in range(5, 0, -1):\n    print(f"{i}...")\n    time.sleep(1)\n\nprint("업무 모드 ON!")\nwebbrowser.open("https://docs.google.com")');

  // [Slide 24] 완성 코드
  var s24 = createHeaderSlide(deck, "완성 코드");
  createCodeBlock(s24, 20, 85, 680, 300, 'import webbrowser\n\ndef boss_mode():\n    """업무 관련 사이트 열기"""\n    sites = [\n        "https://docs.google.com",\n        "https://calendar.google.com",\n        "https://mail.google.com"\n    ]\n    for site in sites:\n        webbrowser.open_new_tab(site)\n    print("👔 업무 모드 활성화!")\n\ndef play_mode():\n    """놀이 관련 사이트 열기"""\n    sites = ["https://www.youtube.com", "https://www.twitch.tv"]\n    for site in sites:\n        webbrowser.open_new_tab(site)\n    print("🎮 놀이 모드 활성화!")\n\nprint("1. 업무 모드  2. 놀이 모드")\nchoice = input("선택: ")\nif choice == "1":\n    boss_mode()\nelse:\n    play_mode()');

  // [Slide 25] 실행 결과
  var s25 = createHeaderSlide(deck, "실행 결과");
  createCodeBlock(s25, 80, 110, 560, 160, '1. 업무 모드  2. 놀이 모드\n선택: 1\n👔 업무 모드 활성화!');
  addText(s25, "→ 업무 사이트들이 열림!", 80, 300, 560, 20, COLORS.DARK, true, true);

  // [Slide 26] 주의
  var s26 = createHeaderSlide(deck, "⚠️ 책임감 있게!");
  var warningBox = s26.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 80, 120, 560, 220);
  warningBox.getFill().setSolidFill(COLORS.RED_HIGHLIGHT);
  addText(s26, "🙅 주의사항", 150, 150, 420, 24, COLORS.WHITE, true, true);
  addText(s26, "이 프로그램은 재미로 만드는 것!\n\n실제로 수업/업무 시간에\n딴짓은 안 돼요!", 120, 200, 480, 20, COLORS.WHITE, false, true);

  // =====================================================
  // PART 6. 추가 활용 (Advanced) : 3장
  // =====================================================

  // [Slide 27] 아침 루틴
  var s27 = createHeaderSlide(deck, "아침 루틴");
  createCodeBlock(s27, 50, 100, 620, 220, 'import webbrowser\n\n# 아침에 확인할 사이트들\nmorning_sites = [\n    "https://weather.naver.com",\n    "https://news.naver.com",\n    "https://mail.google.com"\n]\n\nfor site in morning_sites:\n    webbrowser.open_new_tab(site)');
  addText(s27, "☀️ 매일 아침 실행!", 50, 340, 620, 16, COLORS.GRAY);

  // [Slide 28] 공부 모드
  var s28 = createHeaderSlide(deck, "공부 모드");
  createCodeBlock(s28, 50, 100, 620, 200, 'study_sites = [\n    "https://www.youtube.com/@코딩채널",\n    "https://www.python.org/doc",\n    "https://stackoverflow.com"\n]\n\nfor site in study_sites:\n    webbrowser.open_new_tab(site)');
  addText(s28, "📚 공부에 필요한 사이트 모음!", 50, 320, 620, 18, COLORS.GRAY);

  // [Slide 29] 랜덤 사이트
  var s29 = createHeaderSlide(deck, "랜덤 사이트");
  createCodeBlock(s29, 50, 100, 620, 220, 'import webbrowser\nimport random\n\nfun_sites = [\n    "https://theuselessweb.com",\n    "https://cat-bounce.com",\n    "https://pointerpointer.com"\n]\n\npick = random.choice(fun_sites)\nprint(f"오늘의 재미있는 사이트: {pick}")\nwebbrowser.open(pick)');

  // =====================================================
  // PART 7. 마무리 (Finish) : 3장
  // =====================================================

  // [Slide 30] 오늘 배운 것
  var s30 = createHeaderSlide(deck, "오늘 배운 것");
  var reviewBox = s30.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 80, 110, 560, 260);
  reviewBox.getFill().setSolidFill(COLORS.CREAM_BG);
  reviewBox.getBorder().setWeight(3).getLineFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s30, "✅ webbrowser.open(): URL 열기\n\n✅ open_new_tab(): 새 탭에서 열기\n\n✅ quote(): URL 인코딩\n\n✅ 검색 URL 구조 이해", 120, 150, 480, 20, COLORS.DARK);

  // [Slide 31] 예고
  var s31 = deck.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  s31.getBackground().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s31, "다음 시간에는...", W/2 - 200, H/2 - 100, 400, 28, COLORS.DARK, true, true);
  addText(s31, "📁 파일 입출력!", W/2 - 200, H/2 - 30, 400, 24, COLORS.WHITE, true, true);
  addText(s31, "파일 읽고 쓰기로 데이터 저장!", W/2 - 200, H/2 + 30, 400, 20, COLORS.WHITE, false, true);
  addText(s31, "16차시에서 만나요!", W/2 - 150, H/2 + 100, 300, 20, COLORS.DARK, true, true);

  // [Slide 32] 엔딩
  var s32 = deck.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  s32.getBackground().setSolidFill(COLORS.HAEDAL_YELLOW);
  var endBox = s32.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, W/2 - 250, H/2 - 120, 500, 240);
  endBox.getFill().setSolidFill(COLORS.WHITE);
  addText(s32, "수고했어요!", W/2 - 200, H/2 - 80, 400, 36, COLORS.DARK, true, true);
  addText(s32, "🌐 이제 파이썬으로\n웹을 다룰 수 있어요!", W/2 - 200, H/2 - 20, 400, 20, COLORS.GRAY, false, true);
  addText(s32, "15차시 완료", W/2 - 100, H/2 + 60, 200, 24, COLORS.HAEDAL_YELLOW, true, true);

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
