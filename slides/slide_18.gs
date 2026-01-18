/**
 * [해달에듀] 파이썬 프로그래밍 18차시: [미니 프로젝트 2] 영어 단어 타자 게임
 * 자동 슬라이드 생성 스크립트 (30장)
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
function createPythonLesson18() {
  var deck = SlidesApp.create("[해달에듀] 파이썬 18차시 - 영어 단어 타자 게임");
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
  addText(s01, "미니 프로젝트 2", W/2 - 250, H/2 - 110, 500, 28, COLORS.GRAY, true, true);
  addText(s01, "⌨️ 영어 단어 타자 게임", W/2 - 250, H/2 - 50, 500, 36, COLORS.DARK, true, true);
  addText(s01, "18차시 | 해달에듀", W/2 - 250, H/2 + 50, 500, 18, COLORS.GRAY, false, true);

  // [Slide 02] 안내
  var s02 = createHeaderSlide(deck, "두 번째 프로젝트!");
  addText(s02, "🎮 이번엔 타자 게임!", 50, 100, 620, 28, COLORS.DARK, true);
  var conceptBox = s02.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 80, 160, 560, 180);
  conceptBox.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s02, "사용할 개념들:\n\n• random + time + 리스트 + 반복문\n\n실력을 측정하는 게임을 만들어요!", 120, 190, 480, 18, COLORS.DARK);

  // [Slide 03] 미리보기
  var s03 = createHeaderSlide(deck, "오늘의 완성작!");
  createCodeBlock(s03, 60, 100, 600, 260, '⌨️ 영어 단어 타자 게임!\n\n단어: python\n입력: python\n✅ 정답! (0.82초)\n\n단어: programming\n입력: programming\n✅ 정답! (1.23초)\n\n📊 결과: 10문제 중 8개 정답!\n📊 평균 시간: 1.15초');

  // [Slide 04] 오늘의 미션
  var s04 = createHeaderSlide(deck, "오늘의 미션!");
  var goalBox = s04.insertShape(SlidesApp.ShapeType.RECTANGLE, 100, 120, 520, 260);
  goalBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  goalBox.getBorder().setDashStyle(SlidesApp.DashStyle.DASH).setWeight(2).getLineFill().setSolidFill(COLORS.GRAY);
  addText(s04, "☐ 1. 게임 기획하기\n\n☐ 2. 단계별로 코드 작성\n\n☐ 3. 시간 측정 기능 추가\n\n☐ 4. 나만의 기능 추가하기", 140, 140, 440, 20, COLORS.DARK);

  // =====================================================
  // PART 2. 게임 기획 (Planning) : 4장
  // =====================================================

  // [Slide 05] 게임 규칙
  var s05 = createHeaderSlide(deck, "게임 규칙");
  addText(s05, "⌨️ 영어 단어 타자 게임 규칙", 50, 100, 620, 24, COLORS.DARK, true);
  var ruleBox = s05.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 80, 150, 560, 200);
  ruleBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s05, "1. 랜덤으로 영어 단어가 나온다\n2. 정확하게 타이핑한다\n3. 정답 여부와 시간 표시\n4. 정해진 문제 수만큼 반복\n5. 최종 점수와 평균 시간 계산", 100, 170, 520, 18, COLORS.DARK);

  // [Slide 06] 필요한 재료
  var s06 = createHeaderSlide(deck, "필요한 재료 (개념)");
  createCard(s06, 50, 120, 160, 130, "📋", "리스트\n단어 목록", COLORS.LIGHT_BG);
  createCard(s06, 230, 120, 160, 130, "🎲", "random\n랜덤 선택", COLORS.LIGHT_BG);
  createCard(s06, 410, 120, 160, 130, "⏱️", "time\n시간 측정", COLORS.LIGHT_BG);
  createCard(s06, 130, 270, 200, 100, "🔁", "for\n정해진 횟수 반복", COLORS.CREAM_BG);
  createCard(s06, 380, 270, 200, 100, "❓", "if\n정답 확인", COLORS.CREAM_BG);

  // [Slide 07] 게임 흐름도
  var s07 = createHeaderSlide(deck, "게임 흐름도");
  createCodeBlock(s07, 50, 100, 620, 250, '[시작]\n  ↓\n단어 선택 → 화면에 표시\n  ↓\n시간 시작 → 사용자 입력 → 시간 측정\n  ↓\n정답 확인 → 결과 표시\n  ↓\n반복? → YES → (다음 단어)\n       → NO → [최종 결과]');

  // [Slide 08] 변수 설계
  var s08 = createHeaderSlide(deck, "변수 설계");
  var varBox = s08.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 80, 110, 560, 250);
  varBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s08, "words         단어 목록 리스트\n\nword          현재 출제된 단어\n\nanswer        사용자 입력\n\nstart_time    시작 시간\nend_time      종료 시간\n\nscore         맞은 개수\ntimes         시간 기록 리스트", 100, 130, 520, 16, COLORS.DARK);

  // =====================================================
  // PART 3. 단계별 코딩 (Step by Step) : 10장
  // =====================================================

  // [Slide 09] STEP 1: 단어 목록 준비
  var s09 = createHeaderSlide(deck, "STEP 1: 단어 목록 준비");
  createCodeBlock(s09, 50, 100, 620, 200, 'words = [\n    "python", "programming", "computer",\n    "keyboard", "developer", "software",\n    "algorithm", "function", "variable",\n    "string", "integer", "boolean"\n]');
  addText(s09, "💡 더 많은 단어 추가 가능!", 50, 320, 620, 18, COLORS.GRAY);

  // [Slide 10] STEP 2: 랜덤 단어 출제
  var s10 = createHeaderSlide(deck, "STEP 2: 랜덤 단어 출제");
  createCodeBlock(s10, 50, 100, 620, 150, 'import random\n\nword = random.choice(words)\nprint(f"단어: {word}")');
  var tipBox10 = s10.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 280, 520, 70);
  tipBox10.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s10, "리스트에서 랜덤 선택!", 150, 300, 420, 18, COLORS.DARK, true, true);

  // [Slide 11] STEP 3: 사용자 입력
  var s11 = createHeaderSlide(deck, "STEP 3: 사용자 입력");
  createCodeBlock(s11, 50, 120, 620, 100, 'answer = input("입력: ")');
  addText(s11, "👆 사용자가 타이핑한 내용 받기", 50, 260, 620, 20, COLORS.GRAY);

  // [Slide 12] STEP 4: 정답 확인
  var s12 = createHeaderSlide(deck, "STEP 4: 정답 확인");
  createCodeBlock(s12, 50, 100, 620, 180, 'if answer == word:\n    print("✅ 정답!")\nelse:\n    print(f"❌ 오답! 정답은 \'{word}\'")');
  addText(s12, "입력과 단어 비교!", 50, 300, 620, 18, COLORS.GRAY);

  // [Slide 13] STEP 5: 시간 측정
  var s13 = createHeaderSlide(deck, "STEP 5: 시간 측정");
  createCodeBlock(s13, 50, 100, 620, 200, 'import time\n\nstart = time.time()\nanswer = input("입력: ")\nend = time.time()\n\nelapsed = end - start\nprint(f"⏱️ 시간: {elapsed:.2f}초")');
  addText(s13, "⏱️ 입력 전후 시간 차이!", 50, 320, 620, 16, COLORS.GRAY);

  // [Slide 14] STEP 6: 반복 (여러 문제)
  var s14 = createHeaderSlide(deck, "STEP 6: 반복 (여러 문제)");
  createCodeBlock(s14, 50, 100, 620, 200, 'NUM_QUESTIONS = 5\nscore = 0\ntimes = []\n\nfor i in range(NUM_QUESTIONS):\n    print(f"\\n[{i+1}/{NUM_QUESTIONS}]")\n    # 단어 출제, 입력, 시간 측정...');

  // [Slide 15] STEP 7: 점수 계산
  var s15 = createHeaderSlide(deck, "STEP 7: 점수 계산");
  createCodeBlock(s15, 50, 100, 620, 200, 'if answer == word:\n    score += 1\n    times.append(elapsed)\n\nprint(f"\\n📊 결과: {score}/{NUM_QUESTIONS}")\n\nif times:\n    avg = sum(times) / len(times)\n    print(f"📊 평균 시간: {avg:.2f}초")');

  // [Slide 16] 기본 완성 코드
  var s16 = createHeaderSlide(deck, "기본 완성 코드");
  createCodeBlock(s16, 15, 80, 690, 310, 'import random\nimport time\n\nwords = ["python", "programming", "computer", "keyboard"]\nNUM_QUESTIONS = 5\nscore = 0\ntimes = []\n\nprint("⌨️ 영어 단어 타자 게임!\\n")\n\nfor i in range(NUM_QUESTIONS):\n    word = random.choice(words)\n    print(f"[{i+1}] 단어: {word}")\n    start = time.time()\n    answer = input("입력: ")\n    end = time.time()\n    elapsed = end - start\n    if answer == word:\n        print(f"✅ 정답! ({elapsed:.2f}초)")\n        score += 1\n        times.append(elapsed)\n    else:\n        print(f"❌ 오답!")\n\nprint(f"\\n📊 결과: {score}/{NUM_QUESTIONS}")\nif times:\n    print(f"📊 평균: {sum(times)/len(times):.2f}초")');

  // [Slide 17] 실행 결과
  var s17 = createHeaderSlide(deck, "실행 결과");
  createCodeBlock(s17, 60, 100, 600, 260, '⌨️ 영어 단어 타자 게임!\n\n[1] 단어: python\n입력: python\n✅ 정답! (0.85초)\n\n[2] 단어: keyboard\n입력: keybaord\n❌ 오답!\n\n...\n\n📊 결과: 4/5\n📊 평균: 1.02초');

  // [Slide 18] 테스트 체크리스트
  var s18 = createHeaderSlide(deck, "테스트 체크리스트");
  var checkBox = s18.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 80, 120, 560, 230);
  checkBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s18, "☐ 단어가 랜덤으로 나오나요?\n\n☐ 정답/오답 판정이 정확한가요?\n\n☐ 시간이 제대로 측정되나요?\n\n☐ 최종 결과가 맞나요?", 110, 150, 500, 18, COLORS.DARK);

  // =====================================================
  // PART 4. 기능 추가하기 (Enhancement) : 6장
  // =====================================================

  // [Slide 19] 추가할 수 있는 기능
  var s19 = createHeaderSlide(deck, "추가할 수 있는 기능");
  addText(s19, "🌟 게임을 더 재미있게!", 50, 100, 620, 24, COLORS.DARK, true);
  var featureBox = s19.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 80, 150, 560, 200);
  featureBox.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s19, "1. 난이도 선택 (쉬움/보통/어려움)\n\n2. 최고 기록 저장\n\n3. 대소문자 무시\n\n4. 타이핑 속도 (WPM) 계산", 110, 180, 500, 18, COLORS.DARK);

  // [Slide 20] 기능 1: 난이도 선택
  var s20 = createHeaderSlide(deck, "기능 1: 난이도 선택");
  createCodeBlock(s20, 30, 90, 660, 280, 'easy = ["cat", "dog", "sun", "cup"]\nnormal = ["python", "keyboard", "computer"]\nhard = ["algorithm", "programming", "development"]\n\nprint("난이도: 1.쉬움 2.보통 3.어려움")\nlevel = input("선택: ")\n\nif level == "1":\n    words = easy\nelif level == "2":\n    words = normal\nelse:\n    words = hard');

  // [Slide 21] 기능 2: 대소문자 무시
  var s21 = createHeaderSlide(deck, "기능 2: 대소문자 무시");
  createCodeBlock(s21, 50, 100, 620, 150, 'if answer.lower() == word.lower():\n    print("✅ 정답!")');
  var tipBox21 = s21.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 280, 520, 70);
  tipBox21.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s21, ".lower()로 소문자 변환 후 비교!", 150, 300, 420, 18, COLORS.DARK, true, true);

  // [Slide 22] 기능 3: WPM 계산
  var s22 = createHeaderSlide(deck, "기능 3: WPM 계산");
  createCodeBlock(s22, 50, 100, 620, 220, '# WPM = Words Per Minute\n# (글자수 / 5) / (시간 / 60)\n\ndef calc_wpm(chars, seconds):\n    words = chars / 5\n    minutes = seconds / 60\n    return words / minutes if minutes > 0 else 0\n\nwpm = calc_wpm(len(word), elapsed)\nprint(f"속도: {wpm:.1f} WPM")');

  // [Slide 23] 기능 4: 파일로 기록 저장
  var s23 = createHeaderSlide(deck, "기능 4: 파일로 기록 저장");
  createCodeBlock(s23, 30, 90, 660, 280, 'from datetime import datetime\n\ndef save_record(score, avg_time):\n    with open("records.txt", "a", encoding="utf-8") as f:\n        now = datetime.now().strftime("%Y-%m-%d %H:%M")\n        f.write(f"{now} | 점수: {score} | 평균: {avg_time:.2f}초\\n")');

  // [Slide 24] 기능 5: 최고 기록 표시
  var s24 = createHeaderSlide(deck, "기능 5: 최고 기록 표시");
  createCodeBlock(s24, 30, 90, 660, 280, 'def show_best_record():\n    try:\n        with open("records.txt", "r", encoding="utf-8") as f:\n            records = f.readlines()\n        \n        if records:\n            print("📜 이전 기록:")\n            for r in records[-5:]:  # 최근 5개\n                print(f"  {r.strip()}")\n    except FileNotFoundError:\n        print("아직 기록이 없습니다.")');

  // =====================================================
  // PART 5. 도전 과제 (Challenge) : 3장
  // =====================================================

  // [Slide 25] 도전 과제
  var s25 = createHeaderSlide(deck, "도전 과제!");
  var challengeBox = s25.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 80, 120, 560, 230);
  challengeBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s25, "🏆 나만의 기능을 추가해보세요!", 120, 150, 480, 24, COLORS.DARK, true, true);
  addText(s25, "아이디어:\n• 시간 제한 (10초 안에 입력)\n• 연속 정답 보너스\n• 오타 힌트 (\"1글자 틀렸어요!\")\n• 랭킹 시스템", 120, 200, 480, 16, COLORS.DARK);

  // [Slide 26] 시간 제한 구현 (심화)
  var s26 = createHeaderSlide(deck, "시간 제한 구현 (심화)");
  createCodeBlock(s26, 50, 100, 620, 200, 'import threading\nimport sys\n\ndef timeout():\n    print("\\n⏰ 시간 초과!")\n    sys.exit()\n\ntimer = threading.Timer(10.0, timeout)\ntimer.start()\nanswer = input("입력: ")\ntimer.cancel()  # 입력 완료시 취소');
  addText(s26, "(참고용 - 난이도 높음)", 50, 320, 620, 14, COLORS.GRAY);

  // [Slide 27] 친구들과 대결
  var s27 = createHeaderSlide(deck, "친구들과 대결!");
  var battleBox = s27.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 80, 120, 560, 220);
  battleBox.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s27, "🏁 같은 단어로 누가 더 빠른지!", 120, 160, 480, 24, COLORS.DARK, true, true);
  addText(s27, "타자 속도 대결을 해보세요!\n\n👫 친구와 번갈아 플레이\n📊 기록 비교", 120, 220, 480, 18, COLORS.DARK, false, true);

  // =====================================================
  // PART 6. 마무리 (Finish) : 3장
  // =====================================================

  // [Slide 28] 오늘 만든 것
  var s28 = createHeaderSlide(deck, "오늘 만든 것");
  var reviewBox = s28.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 80, 110, 560, 260);
  reviewBox.getFill().setSolidFill(COLORS.CREAM_BG);
  reviewBox.getBorder().setWeight(3).getLineFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s28, "✅ 영어 단어 타자 게임 완성!\n\n사용한 개념:\n• 리스트와 random.choice()\n• time.time()으로 시간 측정\n• for 반복문\n• if 조건문\n• 파일 입출력 (기록 저장)", 120, 140, 480, 16, COLORS.DARK);

  // [Slide 29] Part 2 완료!
  var s29 = createHeaderSlide(deck, "Part 2 완료!");
  addText(s29, "🎓 파이썬 무기 창고 마스터!", 50, 100, 620, 28, COLORS.DARK, true);
  var summaryBox = s29.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 80, 150, 560, 200);
  summaryBox.getFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s29, "• random 모듈\n• time/datetime 모듈\n• turtle 그래픽\n• webbrowser 모듈\n• 파일 입출력\n• 2개의 미니 프로젝트", 120, 175, 480, 16, COLORS.DARK);
  addText(s29, "진짜 프로그램을 만들었어요! 🎉", 80, 370, 560, 18, COLORS.DARK, true, true);

  // [Slide 30] 예고 - Part 3
  var s30 = deck.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  s30.getBackground().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s30, "다음은 Part 3!", W/2 - 200, H/2 - 120, 400, 32, COLORS.DARK, true, true);
  addText(s30, "🧠 개발자의 뇌 장착하기!", W/2 - 200, H/2 - 50, 400, 24, COLORS.WHITE, true, true);
  addText(s30, "• 알고리즘적 사고\n• 자료구조 (스택, 큐)\n• 탐색과 정렬", W/2 - 200, H/2 + 10, 400, 18, COLORS.WHITE, false, true);
  addText(s30, "더 똑똑한 코드를 짜봐요!", W/2 - 150, H/2 + 100, 300, 20, COLORS.DARK, true, true);

  Logger.log("슬라이드 생성 완료! (총 30장) URL: " + deck.getUrl());
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
