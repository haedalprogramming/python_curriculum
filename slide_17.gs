/**
 * [해달에듀] 파이썬 프로그래밍 17차시: [미니 프로젝트 1] Up/Down 숫자 맞추기 게임
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
  CODE_WHITE: '#D4D4D4',
  SUCCESS_GREEN: '#4CAF50'
};

// ==========================================
// 메인 실행 함수
// ==========================================
function createPythonLesson17() {
  var deck = SlidesApp.create("[해달에듀] 파이썬 17차시 - Up/Down 게임!");
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
  addText(s01, "미니 프로젝트 1", W/2 - 250, H/2 - 120, 500, 28, COLORS.GRAY, true, true);
  addText(s01, "🎮 Up/Down 게임!", W/2 - 250, H/2 - 60, 500, 44, COLORS.DARK, true, true);
  addText(s01, "숫자 맞추기 게임 만들기", W/2 - 250, H/2 + 20, 500, 20, COLORS.GRAY, false, true);
  addText(s01, "17차시 | 해달에듀", W/2 - 250, H/2 + 70, 500, 18, COLORS.GRAY, false, true);

  // [Slide 02] 드디어 프로젝트!
  var s02 = createHeaderSlide(deck, "드디어 프로젝트!");
  var projectBox = s02.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 100, 620, 120);
  projectBox.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s02, "🚀 지금까지 배운 모든 것을 총동원!", 80, 120, 560, 22, COLORS.DARK, true, true);
  addText(s02, "random + input + 조건문 + 반복문", 80, 160, 560, 18, COLORS.GRAY, false, true);
  createCard(s02, 100, 250, 150, 80, "🎲", "random", COLORS.LIGHT_BG);
  createCard(s02, 270, 250, 150, 80, "⌨️", "input", COLORS.LIGHT_BG);
  createCard(s02, 440, 250, 150, 80, "🔀", "if/while", COLORS.LIGHT_BG);

  // [Slide 03] 미리보기 - 게임 화면
  var s03 = createHeaderSlide(deck, "오늘의 완성작!");
  createCodeBlock(s03, 50, 100, 620, 230,
    '🎯 1~100 중 숫자를 맞춰보세요!\n\n' +
    '입력: 50\n' +
    '⬆️ UP! 더 큰 숫자예요\n\n' +
    '입력: 75\n' +
    '⬇️ DOWN! 더 작은 숫자예요\n\n' +
    '입력: 63\n' +
    '🎉 정답! 3번 만에 맞췄어요!');

  // [Slide 04] 오늘의 미션
  var s04 = createHeaderSlide(deck, "오늘의 미션!");
  var goalBox = s04.insertShape(SlidesApp.ShapeType.RECTANGLE, 100, 110, 520, 260);
  goalBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  goalBox.getBorder().setDashStyle(SlidesApp.DashStyle.DASH).setWeight(2).getLineFill().setSolidFill(COLORS.GRAY);
  addText(s04, "☐ 1. 게임 기획하기\n\n☐ 2. 단계별로 코드 작성\n\n☐ 3. 테스트 & 개선\n\n☐ 4. 나만의 기능 추가하기", 140, 140, 440, 20, COLORS.DARK);

  // =====================================================
  // PART 2. 게임 기획 (Planning) : 4장
  // =====================================================

  // [Slide 05] 게임 규칙
  var s05 = createHeaderSlide(deck, "게임 규칙");
  var ruleBox = s05.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 80, 100, 560, 270);
  ruleBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s05, "🎯 1. 컴퓨터가 1~100 사이 숫자를 하나 정함\n\n2. 플레이어가 숫자를 추측해서 입력\n\n3. 컴퓨터가 힌트를 줌 (UP/DOWN)\n\n4. 정답을 맞출 때까지 반복!", 110, 130, 500, 20, COLORS.DARK);

  // [Slide 06] 필요한 재료 (개념)
  var s06 = createHeaderSlide(deck, "필요한 재료 (개념)");
  createCard(s06, 30, 100, 165, 110, "🎲", "random\n정답 만들기", COLORS.LIGHT_BG);
  createCard(s06, 205, 100, 165, 110, "📝", "input\n입력 받기", COLORS.LIGHT_BG);
  createCard(s06, 380, 100, 165, 110, "🔀", "if/elif\n판단하기", COLORS.CREAM_BG);
  createCard(s06, 555, 100, 145, 110, "🔁", "while\n반복하기", COLORS.CREAM_BG);

  // [Slide 07] 게임 흐름도
  var s07 = createHeaderSlide(deck, "게임 흐름도");
  var flowBox = s07.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 100, 620, 270);
  flowBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s07, "[시작]\n    ↓\n컴퓨터가 숫자 선택\n    ↓\n플레이어 입력 → 비교\n    ↓\n정답? → YES → [축하!]\n    ↓ NO\nUP/DOWN 힌트 → (다시 입력)", 80, 110, 560, 16, COLORS.DARK, false, true);

  // [Slide 08] 변수 설계
  var s08 = createHeaderSlide(deck, "변수 설계");
  createCard(s08, 50, 110, 200, 120, "answer", "컴퓨터가 정한\n정답", COLORS.CREAM_BG);
  createCard(s08, 270, 110, 200, 120, "guess", "플레이어가\n입력한 숫자", COLORS.LIGHT_BG);
  createCard(s08, 490, 110, 200, 120, "count", "시도 횟수", COLORS.LIGHT_BG);

  // =====================================================
  // PART 3. 단계별 코딩 (Step by Step) : 12장
  // =====================================================

  // [Slide 09] STEP 1: 정답 만들기
  var s09 = createHeaderSlide(deck, "STEP 1: 정답 만들기");
  createCodeBlock(s09, 50, 100, 620, 120,
    'import random\n\n' +
    'answer = random.randint(1, 100)\n' +
    'print(f"(테스트용) 정답: {answer}")');
  addText(s09, "💡 1~100 사이 랜덤 숫자! 나중에 테스트용 print는 지울 거예요", 50, 240, 620, 16, COLORS.GRAY);

  // [Slide 10] STEP 2: 시작 메시지
  var s10 = createHeaderSlide(deck, "STEP 2: 시작 메시지");
  createCodeBlock(s10, 50, 100, 620, 100,
    'print("🎮 Up/Down 게임!")\n' +
    'print("1~100 사이의 숫자를 맞춰보세요!")');
  addText(s10, "💡 게임 분위기를 내봐요!", 50, 220, 620, 18, COLORS.GRAY);

  // [Slide 11] STEP 3: 시도 횟수 변수
  var s11 = createHeaderSlide(deck, "STEP 3: 시도 횟수 변수");
  createCodeBlock(s11, 50, 100, 620, 80,
    'count = 0  # 몇 번 시도했는지 세기');
  addText(s11, "💡 나중에 \"N번 만에 맞췄어요!\" 출력용", 50, 200, 620, 18, COLORS.GRAY);

  // [Slide 12] STEP 4: 무한 반복 (while True)
  var s12 = createHeaderSlide(deck, "STEP 4: 무한 반복 (while True)");
  createCodeBlock(s12, 50, 100, 620, 100,
    'while True:\n' +
    '    # 여기에 게임 로직이 들어감\n' +
    '    pass');
  var whileBox = s12.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 220, 620, 60);
  whileBox.getFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s12, "while True = 무한 반복! 정답 맞출 때까지 계속!", 80, 235, 560, 18, COLORS.DARK, true, true);

  // [Slide 13] STEP 5: 플레이어 입력
  var s13 = createHeaderSlide(deck, "STEP 5: 플레이어 입력");
  createCodeBlock(s13, 50, 100, 620, 100,
    'while True:\n' +
    '    guess = int(input("숫자를 입력하세요: "))\n' +
    '    count += 1  # 시도 횟수 증가');
  addText(s13, "💡 input으로 숫자 받고, 시도 횟수 +1", 50, 220, 620, 18, COLORS.GRAY);

  // [Slide 14] STEP 6: 정답 비교 - 작을 때
  var s14 = createHeaderSlide(deck, "STEP 6: 정답 비교 - 작을 때");
  createCodeBlock(s14, 50, 100, 620, 80,
    '    if guess < answer:\n' +
    '        print("⬆️ UP! 더 큰 숫자예요")');
  addText(s14, "⬆️ 입력한 숫자가 정답보다 작으면 UP!", 50, 200, 620, 20, COLORS.DARK, true);

  // [Slide 15] STEP 7: 정답 비교 - 클 때
  var s15 = createHeaderSlide(deck, "STEP 7: 정답 비교 - 클 때");
  createCodeBlock(s15, 50, 100, 620, 80,
    '    elif guess > answer:\n' +
    '        print("⬇️ DOWN! 더 작은 숫자예요")');
  addText(s15, "⬇️ 입력한 숫자가 정답보다 크면 DOWN!", 50, 200, 620, 20, COLORS.DARK, true);

  // [Slide 16] STEP 8: 정답일 때
  var s16 = createHeaderSlide(deck, "STEP 8: 정답일 때");
  createCodeBlock(s16, 50, 100, 620, 100,
    '    else:\n' +
    '        print(f"🎉 정답! {count}번 만에 맞췄어요!")\n' +
    '        break  # 반복 탈출!');
  var breakBox = s16.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 220, 620, 60);
  breakBox.getFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s16, "break = while 반복에서 탈출!", 80, 235, 560, 18, COLORS.DARK, true, true);

  // [Slide 17] 완성 코드 (기본)
  var s17 = createHeaderSlide(deck, "완성 코드 (기본)");
  var completeBox = s17.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 45, 90, 630, 305);
  completeBox.getFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  createCodeBlock(s17, 50, 95, 620, 295,
    'import random\n\n' +
    'answer = random.randint(1, 100)\n' +
    'print("🎮 Up/Down 게임!")\n' +
    'print("1~100 사이의 숫자를 맞춰보세요!")\n' +
    'count = 0\n\n' +
    'while True:\n' +
    '    guess = int(input("숫자를 입력하세요: "))\n' +
    '    count += 1\n' +
    '    if guess < answer:\n' +
    '        print("⬆️ UP! 더 큰 숫자예요")\n' +
    '    elif guess > answer:\n' +
    '        print("⬇️ DOWN! 더 작은 숫자예요")\n' +
    '    else:\n' +
    '        print(f"🎉 정답! {count}번 만에 맞췄어요!")\n' +
    '        break');

  // [Slide 18] 실행 결과
  var s18 = createHeaderSlide(deck, "실행 결과");
  createCodeBlock(s18, 50, 95, 620, 230,
    '🎮 Up/Down 게임!\n' +
    '1~100 사이의 숫자를 맞춰보세요!\n' +
    '숫자를 입력하세요: 50\n' +
    '⬆️ UP! 더 큰 숫자예요\n' +
    '숫자를 입력하세요: 75\n' +
    '⬇️ DOWN! 더 작은 숫자예요\n' +
    '숫자를 입력하세요: 63\n' +
    '🎉 정답! 3번 만에 맞췄어요!');
  addText(s18, "🎉 축하합니다!", 280, 340, 200, 24, COLORS.DARK, true, true);

  // [Slide 19] 테스트해보기
  var s19 = createHeaderSlide(deck, "테스트해보기!");
  var testBox = s19.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 80, 100, 560, 250);
  testBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s19, "🧪 직접 실행해서 게임해보세요!\n\n체크리스트:\n☐ UP/DOWN이 제대로 나오나요?\n☐ 정답을 맞추면 축하 메시지가 나오나요?\n☐ 시도 횟수가 정확한가요?", 110, 130, 500, 18, COLORS.DARK);

  // [Slide 20] 버그 해결 가이드
  var s20 = createHeaderSlide(deck, "🐛 버그 해결 가이드");
  s20.getBackground().setSolidFill(COLORS.DARK_BG);
  var bug1 = s20.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 80, 300, 130);
  bug1.getFill().setSolidFill("#5A5A5A");
  addText(s20, "숫자가 아닌 걸\n입력하면 에러!", 80, 100, 240, 16, COLORS.WHITE, true);
  addText(s20, "→ 나중에 예외처리로\n해결 (심화)", 80, 150, 240, 14, COLORS.LIGHT_BG);
  var bug2 = s20.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 370, 80, 300, 130);
  bug2.getFill().setSolidFill("#5A5A5A");
  addText(s20, "1~100 밖의 숫자도\n입력됨", 400, 100, 240, 16, COLORS.WHITE, true);
  addText(s20, "→ 조건문으로\n검사 추가 가능", 400, 150, 240, 14, COLORS.LIGHT_BG);

  // =====================================================
  // PART 4. 기능 추가하기 (Enhancement) : 6장
  // =====================================================

  // [Slide 21] 게임을 더 재미있게!
  var s21 = createHeaderSlide(deck, "게임을 더 재미있게!");
  var enhanceBox = s21.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 100, 620, 220);
  enhanceBox.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s21, "🌟 추가할 수 있는 기능들:\n\n1. 시도 횟수 제한 (7번 안에 맞추기!)\n\n2. 난이도 선택 (쉬움/보통/어려움)\n\n3. 입력 검증 (1~100만 허용)\n\n4. 다시 하기 기능", 80, 120, 560, 18, COLORS.DARK);

  // [Slide 22] 기능 1: 시도 횟수 제한
  var s22 = createHeaderSlide(deck, "기능 1: 시도 횟수 제한");
  createCodeBlock(s22, 50, 100, 620, 180,
    'MAX_TRIES = 7\n' +
    'count = 0\n\n' +
    'while count < MAX_TRIES:\n' +
    '    # 게임 로직\n' +
    '    count += 1\n' +
    'else:\n' +
    '    print(f"💀 실패! 정답은 {answer}였어요")');
  addText(s22, "💡 7번 안에 못 맞추면 게임 오버!", 50, 300, 620, 18, COLORS.DARK, true);

  // [Slide 23] 기능 2: 난이도 선택
  var s23 = createHeaderSlide(deck, "기능 2: 난이도 선택");
  createCodeBlock(s23, 50, 95, 620, 260,
    'print("난이도를 선택하세요:")\n' +
    'print("1. 쉬움 (1~50)")\n' +
    'print("2. 보통 (1~100)")\n' +
    'print("3. 어려움 (1~500)")\n' +
    'level = int(input("선택: "))\n\n' +
    'if level == 1:\n' +
    '    answer = random.randint(1, 50)\n' +
    'elif level == 2:\n' +
    '    answer = random.randint(1, 100)\n' +
    'else:\n' +
    '    answer = random.randint(1, 500)');

  // [Slide 24] 기능 3: 입력 검증
  var s24 = createHeaderSlide(deck, "기능 3: 입력 검증");
  createCodeBlock(s24, 50, 100, 620, 180,
    'while True:\n' +
    '    guess = int(input("숫자: "))\n' +
    '    if guess < 1 or guess > 100:\n' +
    '        print("⚠️ 1~100 사이로 입력해주세요!")\n' +
    '        continue  # 다시 입력받기\n' +
    '    # 게임 로직...');
  var continueBox = s24.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 300, 620, 50);
  continueBox.getFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s24, "continue = 반복 처음으로 돌아가기", 80, 310, 560, 18, COLORS.DARK, true, true);

  // [Slide 25] 기능 4: 다시 하기
  var s25 = createHeaderSlide(deck, "기능 4: 다시 하기");
  createCodeBlock(s25, 50, 100, 620, 180,
    'while True:\n' +
    '    # 게임 코드...\n' +
    '    \n' +
    '    again = input("다시 하시겠습니까? (y/n): ")\n' +
    '    if again.lower() != \'y\':\n' +
    '        print("게임을 종료합니다. 안녕!")\n' +
    '        break');

  // [Slide 26] 최종 완성 코드 안내
  var s26 = createHeaderSlide(deck, "최종 완성 코드 (심화)");
  var finalBox = s26.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 80, 100, 560, 200);
  finalBox.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s26, "📄 전체 코드는\n17-2-answer.py 참고\n\n모든 기능이 추가된 버전!\n• 난이도 선택\n• 시도 횟수 제한\n• 입력 검증\n• 다시 하기", 120, 130, 480, 18, COLORS.DARK, true, true);

  // =====================================================
  // PART 5. 도전 과제 (Challenge) : 3장
  // =====================================================

  // [Slide 27] 도전 과제
  var s27 = createHeaderSlide(deck, "도전 과제!");
  var challengeBox = s27.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 100, 620, 220);
  challengeBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s27, "🏆 나만의 기능을 추가해보세요!\n\n아이디어:\n• 힌트 기능 (정답과의 거리 알려주기)\n• 점수 시스템 (적게 시도할수록 높은 점수)\n• 2인 대전 모드", 80, 130, 560, 18, COLORS.DARK);

  // [Slide 28] 힌트 예시
  var s28 = createHeaderSlide(deck, "힌트 예시: 거리 알려주기");
  createCodeBlock(s28, 50, 95, 620, 220,
    'diff = abs(guess - answer)\n\n' +
    'if diff <= 5:\n' +
    '    print("🔥 아주 가까워요!")\n' +
    'elif diff <= 10:\n' +
    '    print("😊 거의 다 왔어요!")\n' +
    'elif diff <= 30:\n' +
    '    print("🤔 조금 멀어요")\n' +
    'else:\n' +
    '    print("😅 많이 멀어요...")');
  addText(s28, "💡 abs() = 절댓값 (차이)", 50, 330, 620, 16, COLORS.GRAY);

  // [Slide 29] 공유하기
  var s29 = createHeaderSlide(deck, "친구들과 공유하기!");
  var shareBox = s29.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 80, 110, 560, 180);
  shareBox.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s29, "📤 완성한 게임을\n친구들에게 보여주세요!\n\n누가 더 적은 횟수로 맞추는지\n대결해봐요! 🎮", 120, 140, 480, 20, COLORS.DARK, true, true);

  // =====================================================
  // PART 6. 마무리 (Finish) : 3장
  // =====================================================

  // [Slide 30] 오늘 만든 것
  var s30 = createHeaderSlide(deck, "오늘 만든 것");
  var reviewBox = s30.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 95, 620, 290);
  reviewBox.getFill().setSolidFill(COLORS.CREAM_BG);
  reviewBox.getBorder().setWeight(3).getLineFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s30, "✅ Up/Down 숫자 맞추기 게임 완성!\n\n✅ 사용한 개념 복습:\n• random.randint(): 정답 만들기\n• while True: 무한 반복\n• if/elif/else: 조건 분기\n• break: 반복 탈출\n• input/print: 입출력", 80, 115, 560, 17, COLORS.DARK);

  // [Slide 31] 예고
  var s31 = deck.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  s31.getBackground().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s31, "다음 시간에는...", W/2 - 200, H/2 - 100, 400, 28, COLORS.DARK, true, true);
  addText(s31, "⌨️ 영어 단어 타자 게임!", W/2 - 200, H/2 - 30, 400, 24, COLORS.WHITE, true, true);
  addText(s31, "랜덤으로 나오는 단어를 빠르게 입력!\ntime 모듈로 속도도 측정해요!", W/2 - 200, H/2 + 20, 400, 16, COLORS.WHITE, false, true);
  addText(s31, "18차시에서 만나요!", W/2 - 150, H/2 + 100, 300, 20, COLORS.DARK, true, true);

  // [Slide 32] 엔딩
  var s32 = deck.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  s32.getBackground().setSolidFill(COLORS.HAEDAL_YELLOW);
  var endBox = s32.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, W/2 - 280, H/2 - 140, 560, 280);
  endBox.getFill().setSolidFill(COLORS.WHITE);
  addText(s32, "축하해요!", W/2 - 200, H/2 - 100, 400, 40, COLORS.DARK, true, true);
  addText(s32, "🎮 첫 번째 미니 프로젝트 완료!", W/2 - 200, H/2 - 40, 400, 22, COLORS.GRAY, true, true);
  addText(s32, "진짜 게임을 만들어냈어요!", W/2 - 200, H/2 + 10, 400, 18, COLORS.GRAY, false, true);
  addText(s32, "🏆", W/2 - 30, H/2 + 50, 60, 48, COLORS.HAEDAL_YELLOW, false, true);
  addText(s32, "17차시 완료", W/2 - 100, H/2 + 110, 200, 20, COLORS.HAEDAL_YELLOW, true, true);

  Logger.log("슬라이드 생성 완료! (총 32장) URL: " + deck.getUrl());
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
  addText(slide, title, x + 10, y + 8, w - 20, 22, COLORS.DARK, true, true);
  addText(slide, content, x + 10, y + 45, w - 20, 12, COLORS.GRAY, false, true);
}

function createCodeBlock(slide, x, y, w, h, code) {
  var codeBox = slide.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, x, y, w, h);
  codeBox.getFill().setSolidFill(COLORS.CODE_BG);
  codeBox.getBorder().setTransparent();
  var textBox = slide.insertTextBox(code, x + 20, y + 12, w - 40, h - 24);
  var style = textBox.getText().getTextStyle();
  style.setFontSize(13).setForegroundColor(COLORS.CODE_WHITE).setFontFamily("Consolas");
  return codeBox;
}
