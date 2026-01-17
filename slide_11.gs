/**
 * [해달에듀] 파이썬 프로그래밍 11차시: random 모듈 - 운에 맡겨라!
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
  CODE_WHITE: '#D4D4D4'
};

// ==========================================
// 메인 실행 함수
// ==========================================
function createPythonLesson11() {
  var deck = SlidesApp.create("[해달에듀] 파이썬 11차시 - 운에 맡겨라!");
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
  addText(s01, "운에 맡겨라!", W/2 - 250, H/2 - 100, 500, 48, COLORS.DARK, true, true);
  addText(s01, "🎲 random 모듈 마스터하기", W/2 - 250, H/2 - 20, 500, 24, COLORS.GRAY, false, true);
  addText(s01, "11차시 | 해달에듀", W/2 - 250, H/2 + 50, 500, 18, COLORS.GRAY, false, true);

  // [Slide 02] Part 2 시작 안내
  var s02 = createHeaderSlide(deck, "Part 2. 파이썬 무기 창고 털기!");
  var part2Box = s02.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 80, 110, 560, 200);
  part2Box.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s02, "🗡️ 지금부터는 파이썬의\n강력한 도구들을 배워요!", 120, 150, 480, 24, COLORS.DARK, true, true);
  addText(s02, "첫 번째 무기: random 모듈", 120, 240, 480, 20, COLORS.HAEDAL_YELLOW, true, true);

  // [Slide 03] 미리보기
  var s03 = createHeaderSlide(deck, "오늘의 완성작!");
  createCard(s03, 80, 120, 280, 180, "🍜", "점심 메뉴 추천기\n오늘 뭐 먹지?", COLORS.LIGHT_BG);
  createCard(s03, 400, 120, 280, 180, "🎰", "로또 번호 생성기\n행운의 숫자!", COLORS.CREAM_BG);

  // [Slide 04] 오늘의 미션
  var s04 = createHeaderSlide(deck, "오늘의 미션!");
  var goalBox = s04.insertShape(SlidesApp.ShapeType.RECTANGLE, 100, 110, 520, 270);
  goalBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  goalBox.getBorder().setDashStyle(SlidesApp.DashStyle.DASH).setWeight(2).getLineFill().setSolidFill(COLORS.GRAY);
  addText(s04, "☐ 1. 모듈이 뭔지 알기\n\n☐ 2. random 모듈 사용법\n\n☐ 3. 점심 메뉴 추천기 만들기\n\n☐ 4. 로또 번호 생성기 만들기", 140, 140, 440, 20, COLORS.DARK);

  // =====================================================
  // PART 2. 모듈 개념 (Concept 1) : 4장
  // =====================================================

  // [Slide 05] 모듈(Module)이 뭐예요?
  var s05 = createHeaderSlide(deck, "모듈(Module)이 뭐예요?");
  addText(s05, "📦 누군가 미리 만들어둔 코드 꾸러미!", 50, 100, 620, 24, COLORS.DARK, true);
  var moduleBox = s05.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 160, 620, 150);
  moduleBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s05, "우리가 직접 안 만들어도\n가져다 쓸 수 있어요!\n\n마치 레고 블록처럼! 🧱", 80, 180, 560, 18, COLORS.DARK, false, true);

  // [Slide 06] 왜 모듈을 쓸까요?
  var s06 = createHeaderSlide(deck, "왜 모듈을 쓸까요?");
  var noBox = s06.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 100, 280, 80);
  noBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s06, "❌ 바퀴를 다시 발명할\n필요 없어요!", 70, 115, 240, 16, COLORS.DARK, true, true);
  createCard(s06, 50, 200, 200, 100, "✅", "전문가가 만든\n검증된 코드", COLORS.CREAM_BG);
  createCard(s06, 270, 200, 200, 100, "✅", "시간 절약", COLORS.CREAM_BG);
  createCard(s06, 490, 200, 200, 100, "✅", "더 강력한 기능", COLORS.CREAM_BG);

  // [Slide 07] 모듈 가져오기: import
  var s07 = createHeaderSlide(deck, "모듈 가져오기: import");
  createCodeBlock(s07, 50, 110, 620, 80,
    'import random  # random 모듈 가져오기');
  var importBox = s07.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 210, 620, 100);
  importBox.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s07, "\"import\" = \"가져오다\"\n코드 맨 위에 적어요!", 80, 235, 560, 20, COLORS.DARK, true, true);

  // [Slide 08] 파이썬 표준 라이브러리
  var s08 = createHeaderSlide(deck, "파이썬 표준 라이브러리");
  addText(s08, "파이썬에 기본으로 포함된 모듈들:", 50, 100, 620, 18, COLORS.DARK, true);
  createCard(s08, 50, 150, 150, 100, "🎲", "random\n무작위", COLORS.LIGHT_BG);
  createCard(s08, 220, 150, 150, 100, "⏰", "time\n시간", COLORS.LIGHT_BG);
  createCard(s08, 390, 150, 150, 100, "🔢", "math\n수학", COLORS.LIGHT_BG);
  createCard(s08, 560, 150, 130, 100, "🐢", "turtle\n그래픽", COLORS.LIGHT_BG);

  // =====================================================
  // PART 3. random 모듈 함수들 (Concept 2) : 8장
  // =====================================================

  // [Slide 09] random 모듈 = 주사위!
  var s09 = createHeaderSlide(deck, "random 모듈 = 주사위!");
  addText(s09, "🎲 컴퓨터가 무작위(랜덤) 숫자를 만들어요", 50, 100, 620, 22, COLORS.DARK, true);
  var useBox = s09.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 160, 620, 150);
  useBox.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s09, "게임, 추첨, 시뮬레이션에 필수!", 80, 200, 560, 24, COLORS.DARK, true, true);

  // [Slide 10] random.random()
  var s10 = createHeaderSlide(deck, "random.random()");
  createCodeBlock(s10, 50, 100, 620, 100,
    'import random\n' +
    'print(random.random())\n' +
    '# 0.7234823...');
  var tipBox10 = s10.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 220, 620, 80);
  tipBox10.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s10, "0.0 이상 1.0 미만의 실수\n매번 다른 값이 나와요!", 80, 240, 560, 18, COLORS.DARK, true, true);

  // [Slide 11] random.randint(a, b)
  var s11 = createHeaderSlide(deck, "random.randint(a, b)");
  createCodeBlock(s11, 50, 100, 620, 100,
    'import random\n' +
    'print(random.randint(1, 6))  # 주사위!');
  var tipBox11 = s11.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 220, 620, 80);
  tipBox11.getFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s11, "a 이상 b 이하의 정수 (양 끝 포함!)", 80, 245, 560, 20, COLORS.DARK, true, true);

  // [Slide 12] random.randrange(a, b)
  var s12 = createHeaderSlide(deck, "random.randrange(a, b)");
  createCodeBlock(s12, 50, 100, 620, 80,
    'print(random.randrange(1, 7))  # 1~6');
  addText(s12, "a 이상 b 미만의 정수 (b 미포함!)", 50, 200, 620, 18, COLORS.DARK, true);

  // [Slide 13] randint vs randrange
  var s13 = createHeaderSlide(deck, "⚠️ randint vs randrange");
  var compareBox = s13.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 100, 620, 200);
  compareBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s13, "randint(1, 6)\n→ 1, 2, 3, 4, 5, 6 (6 포함!)\n\nrandrange(1, 7)\n→ 1, 2, 3, 4, 5, 6 (7 미포함!)\n\n결과는 같지만 방식이 달라요!", 80, 120, 560, 18, COLORS.DARK);

  // [Slide 14] random.choice(리스트)
  var s14 = createHeaderSlide(deck, "random.choice(리스트)");
  createCodeBlock(s14, 50, 100, 620, 120,
    'menus = ["짜장면", "짬뽕", "볶음밥"]\n' +
    'print(random.choice(menus))\n' +
    '# 랜덤 선택!');
  var tipBox14 = s14.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 240, 620, 60);
  tipBox14.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s14, "🎯 리스트에서 하나를 무작위로 골라요!", 80, 255, 560, 18, COLORS.DARK, true, true);

  // [Slide 15] random.shuffle(리스트)
  var s15 = createHeaderSlide(deck, "random.shuffle(리스트)");
  createCodeBlock(s15, 50, 100, 620, 120,
    'cards = [1, 2, 3, 4, 5]\n' +
    'random.shuffle(cards)\n' +
    'print(cards)  # [3, 1, 5, 2, 4]');
  addText(s15, "🃏 리스트를 마구 섞어요! (카드 셔플)", 50, 240, 620, 20, COLORS.DARK, true);

  // [Slide 16] random.sample(리스트, 개수)
  var s16 = createHeaderSlide(deck, "random.sample(리스트, 개수)");
  createCodeBlock(s16, 50, 100, 620, 120,
    'nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\n' +
    'pick = random.sample(nums, 3)\n' +
    'print(pick)  # [7, 2, 9]');
  var tipBox16 = s16.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 240, 620, 60);
  tipBox16.getFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s16, "🎰 중복 없이 여러 개 뽑기!", 80, 255, 560, 18, COLORS.DARK, true, true);

  // =====================================================
  // PART 4. 실습 A - 점심 메뉴 추천기 : 6장
  // =====================================================

  // [Slide 17] 실습 A: 점심 메뉴 추천기
  var s17 = createHeaderSlide(deck, "실습 A: 점심 메뉴 추천기");
  var practiceBox = s17.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 100, 620, 120);
  practiceBox.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s17, "🍜 \"오늘 뭐 먹지?\" 고민 해결!\n메뉴 목록에서 랜덤으로 하나를 추천해줘요", 80, 130, 560, 20, COLORS.DARK, true, true);

  // [Slide 18] 1단계: 모듈 가져오기 & 메뉴 리스트
  var s18 = createHeaderSlide(deck, "1단계: 모듈 가져오기 & 메뉴 리스트");
  createCodeBlock(s18, 50, 100, 620, 140,
    'import random\n\n' +
    'menus = ["짜장면", "짬뽕", "김밥",\n' +
    '         "떡볶이", "피자", "햄버거"]');

  // [Slide 19] 2단계: 랜덤 선택
  var s19 = createHeaderSlide(deck, "2단계: 랜덤 선택");
  createCodeBlock(s19, 50, 100, 620, 80,
    'choice = random.choice(menus)');
  addText(s19, "💡 choice()는 리스트에서 하나를 랜덤으로 골라요!", 50, 200, 620, 18, COLORS.DARK, true);

  // [Slide 20] 3단계: 결과 출력
  var s20 = createHeaderSlide(deck, "3단계: 결과 출력");
  createCodeBlock(s20, 50, 100, 620, 100,
    'print("🍽️ 오늘의 추천 메뉴는...")\n' +
    'print(f"👉 {choice}!")');

  // [Slide 21] 완성 코드
  var s21 = createHeaderSlide(deck, "완성 코드");
  var completeBox = s21.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 45, 95, 630, 260);
  completeBox.getFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  createCodeBlock(s21, 50, 100, 620, 250,
    'import random\n\n' +
    'menus = ["짜장면", "짬뽕", "김밥",\n' +
    '         "떡볶이", "피자", "햄버거"]\n\n' +
    'choice = random.choice(menus)\n\n' +
    'print("🍽️ 오늘의 추천 메뉴는...")\n' +
    'print(f"👉 {choice}!")');

  // [Slide 22] 실행 결과
  var s22 = createHeaderSlide(deck, "실행 결과");
  createCodeBlock(s22, 50, 100, 620, 100,
    '🍽️ 오늘의 추천 메뉴는...\n' +
    '👉 떡볶이!');
  addText(s22, "🎲 실행할 때마다 다른 메뉴가 나와요!", 50, 230, 620, 20, COLORS.DARK, true, true);

  // =====================================================
  // PART 5. 실습 B - 로또 번호 생성기 : 7장
  // =====================================================

  // [Slide 23] 실습 B: 로또 번호 생성기
  var s23 = createHeaderSlide(deck, "실습 B: 로또 번호 생성기");
  var lottoBox = s23.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 100, 620, 100);
  lottoBox.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s23, "🎰 1~45 중에서 6개의 숫자를 뽑아요!\n중복 없이! 정렬해서!", 80, 125, 560, 20, COLORS.DARK, true, true);

  // [Slide 24] 로또 규칙
  var s24 = createHeaderSlide(deck, "로또 규칙");
  var ruleBox = s24.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 100, 520, 220);
  ruleBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s24, "1. 1부터 45까지 숫자 중\n\n2. 6개를 뽑는다\n\n3. 중복 없이!\n\n4. 오름차순 정렬", 140, 130, 440, 20, COLORS.DARK);

  // [Slide 25] 1단계: 1~45 숫자 리스트 만들기
  var s25 = createHeaderSlide(deck, "1단계: 1~45 숫자 리스트 만들기");
  createCodeBlock(s25, 50, 100, 620, 100,
    'import random\n\n' +
    'numbers = list(range(1, 46))  # 1~45');
  addText(s25, "💡 range(1, 46) = 1부터 45까지", 50, 220, 620, 18, COLORS.GRAY);

  // [Slide 26] 2단계: 6개 뽑기
  var s26 = createHeaderSlide(deck, "2단계: 6개 뽑기");
  createCodeBlock(s26, 50, 100, 620, 80,
    'lotto = random.sample(numbers, 6)');
  var tipBox26 = s26.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 200, 620, 60);
  tipBox26.getFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s26, "💡 sample()은 중복 없이 여러 개를 뽑아요!", 80, 215, 560, 18, COLORS.DARK, true, true);

  // [Slide 27] 3단계: 정렬하기
  var s27 = createHeaderSlide(deck, "3단계: 정렬하기");
  createCodeBlock(s27, 50, 100, 620, 80,
    'lotto.sort()  # 오름차순 정렬');
  addText(s27, "💡 작은 숫자부터 순서대로!", 50, 200, 620, 18, COLORS.GRAY);

  // [Slide 28] 완성 코드
  var s28 = createHeaderSlide(deck, "완성 코드");
  var completeBox28 = s28.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 45, 95, 630, 260);
  completeBox28.getFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  createCodeBlock(s28, 50, 100, 620, 250,
    'import random\n\n' +
    'numbers = list(range(1, 46))\n' +
    'lotto = random.sample(numbers, 6)\n' +
    'lotto.sort()\n\n' +
    'print("🎰 이번 주 행운의 번호는...")\n' +
    'print(lotto)');

  // [Slide 29] 실행 결과
  var s29 = createHeaderSlide(deck, "실행 결과");
  createCodeBlock(s29, 50, 100, 620, 100,
    '🎰 이번 주 행운의 번호는...\n' +
    '[7, 12, 23, 31, 38, 42]');
  addText(s29, "🍀 당첨되면 연락주세요! (농담)", 50, 230, 620, 18, COLORS.GRAY, false, true);

  // =====================================================
  // PART 6. 도전 과제 : 3장
  // =====================================================

  // [Slide 30] 도전 과제
  var s30 = createHeaderSlide(deck, "도전 과제!");
  var challengeBox = s30.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 100, 620, 200);
  challengeBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s30, "🏆 가위바위보 게임 만들기!\n\n1. 컴퓨터가 가위/바위/보 중 하나를 랜덤 선택\n2. 결과 출력\n\n힌트: choice() 사용!", 80, 130, 560, 18, COLORS.DARK);

  // [Slide 31] 힌트
  var s31 = createHeaderSlide(deck, "힌트");
  createCodeBlock(s31, 50, 100, 620, 140,
    'import random\n\n' +
    'hands = ["가위", "바위", "보"]\n' +
    'computer = random.choice(hands)\n' +
    'print(f"컴퓨터: {computer}")');

  // [Slide 32] 정답 공개
  var s32 = createHeaderSlide(deck, "정답 공개!");
  createCodeBlock(s32, 50, 100, 620, 180,
    'import random\n\n' +
    'hands = ["가위", "바위", "보"]\n' +
    'computer = random.choice(hands)\n\n' +
    'print("🎮 가위바위보 게임!")\n' +
    'print(f"컴퓨터가 낸 것: {computer}")');
  addText(s32, "(승패 판정은 조건문으로 확장 가능!)", 50, 300, 620, 16, COLORS.GRAY, false, true);

  // =====================================================
  // PART 7. 마무리 : 3장
  // =====================================================

  // [Slide 33] 오늘 배운 것
  var s33 = createHeaderSlide(deck, "오늘 배운 것");
  var reviewBox = s33.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 95, 620, 290);
  reviewBox.getFill().setSolidFill(COLORS.CREAM_BG);
  reviewBox.getBorder().setWeight(3).getLineFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s33, "✅ 모듈 = 미리 만들어진 코드 꾸러미\n\n✅ import random으로 가져오기\n\n✅ randint(): 정수 범위 랜덤\n\n✅ choice(): 리스트에서 하나 선택\n\n✅ sample(): 중복 없이 여러 개 선택\n\n✅ shuffle(): 리스트 섞기", 80, 115, 560, 17, COLORS.DARK);

  // [Slide 34] 예고
  var s34 = deck.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  s34.getBackground().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s34, "다음 시간에는...", W/2 - 200, H/2 - 100, 400, 28, COLORS.DARK, true, true);
  addText(s34, "⏰ 시간을 다뤄볼 거예요!", W/2 - 200, H/2 - 30, 400, 24, COLORS.WHITE, true, true);
  addText(s34, "카운트다운, D-Day 계산,\n타이머 만들기!", W/2 - 200, H/2 + 20, 400, 18, COLORS.WHITE, false, true);
  addText(s34, "12차시에서 만나요!", W/2 - 150, H/2 + 100, 300, 20, COLORS.DARK, true, true);

  // [Slide 35] 엔딩
  var s35 = deck.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  s35.getBackground().setSolidFill(COLORS.HAEDAL_YELLOW);
  var endBox = s35.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, W/2 - 250, H/2 - 120, 500, 240);
  endBox.getFill().setSolidFill(COLORS.WHITE);
  addText(s35, "수고했어요!", W/2 - 200, H/2 - 80, 400, 36, COLORS.DARK, true, true);
  addText(s35, "🎲 이제 운에 맡기는 프로그램을\n만들 수 있어요!", W/2 - 200, H/2 - 20, 400, 18, COLORS.GRAY, false, true);
  addText(s35, "11차시 완료", W/2 - 100, H/2 + 60, 200, 24, COLORS.HAEDAL_YELLOW, true, true);

  Logger.log("슬라이드 생성 완료! (총 35장) URL: " + deck.getUrl());
}

// =======================================================
// [Helper Functions]
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

function createCodeBlock(slide, x, y, w, h, code) {
  var codeBox = slide.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, x, y, w, h);
  codeBox.getFill().setSolidFill(COLORS.CODE_BG);
  codeBox.getBorder().setTransparent();
  var textBox = slide.insertTextBox(code, x + 20, y + 15, w - 40, h - 30);
  var style = textBox.getText().getTextStyle();
  style.setFontSize(15).setForegroundColor(COLORS.CODE_WHITE).setFontFamily("Consolas");
  return codeBox;
}
