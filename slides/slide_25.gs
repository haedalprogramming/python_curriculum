/**
 * [해달에듀] 파이썬 프로그래밍 25차시: 종합 챌린지
 * 자동 슬라이드 생성 스크립트 (30장)
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
function createPythonLesson25() {
  var deck = SlidesApp.create("[해달에듀] 파이썬 25차시 - 종합 챌린지");
  var slides = deck.getSlides();
  if (slides.length > 0) slides[0].remove();

  var W = deck.getPageWidth();
  var H = deck.getPageHeight();

  // =====================================================
  // PART 1. 도입 (Intro) : 3장
  // =====================================================

  // [Slide 01] 표지
  var s01 = deck.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  s01.getBackground().setSolidFill(COLORS.HAEDAL_YELLOW);
  var coverBox = s01.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, W/2 - 300, H/2 - 180, 600, 360);
  coverBox.getFill().setSolidFill(COLORS.WHITE);
  coverBox.getBorder().setTransparent();
  addText(s01, "최종 챌린지!", W/2 - 250, H/2 - 100, 500, 48, COLORS.DARK, true, true);
  addText(s01, "🏆 종합 문제 해결", W/2 - 250, H/2 - 20, 500, 24, COLORS.GRAY, false, true);
  addText(s01, "25차시 | 해달에듀", W/2 - 250, H/2 + 50, 500, 18, COLORS.GRAY, false, true);

  // [Slide 02] 25차시 전체 복습
  var s02 = createHeaderSlide(deck, "25차시 전체 복습!");
  addText(s02, "🎓 지금까지 배운 모든 것 총동원!", 50, 100, 620, 22, COLORS.DARK, true);
  var reviewBox = s02.insertShape(SlidesApp.ShapeType.RECTANGLE, 60, 150, 600, 160);
  reviewBox.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s02, "• 자료형, 변수, 연산자\n• 조건문, 반복문\n• 함수, 모듈\n• 자료구조, 알고리즘", 100, 175, 520, 18, COLORS.DARK);
  var cheerBox = s02.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 150, 330, 420, 50);
  cheerBox.getFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s02, "마지막까지 화이팅!", 200, 340, 320, 22, COLORS.DARK, true, true);

  // [Slide 03] 오늘의 미션
  var s03 = createHeaderSlide(deck, "오늘의 미션!");
  var goalBox = s03.insertShape(SlidesApp.ShapeType.RECTANGLE, 100, 120, 520, 260);
  goalBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  goalBox.getBorder().setDashStyle(SlidesApp.DashStyle.DASH).setWeight(2).getLineFill().setSolidFill(COLORS.GRAY);
  addText(s03, "☐ 1. 369 게임\n\n☐ 2. 팰린드롬 검사\n\n☐ 3. 간단한 게임 만들기\n\n☐ 4. 파이썬 마스터 인증!", 140, 140, 440, 20, COLORS.DARK);

  // =====================================================
  // PART 2. 챌린지 1 - 369 게임 (Challenge 1) : 6장
  // =====================================================

  // [Slide 04] 챌린지 1 안내
  var s04 = createHeaderSlide(deck, "챌린지 1: 369 게임");
  addText(s04, "👏 3, 6, 9가 들어가면 \"짝!\"", 50, 100, 620, 22, COLORS.DARK, true);
  var ruleBox = s04.insertShape(SlidesApp.ShapeType.RECTANGLE, 80, 160, 560, 120);
  ruleBox.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s04, "숫자에 3, 6, 9가 여러 개면 그만큼 짝!\n\n13 → \"짝\", 33 → \"짝짝\"", 120, 195, 480, 18, COLORS.DARK);

  // [Slide 05] 문제 분석
  var s05 = createHeaderSlide(deck, "문제 분석");
  addText(s05, "📋 필요한 개념:", 50, 100, 620, 20, COLORS.DARK, true);
  var conceptBox = s05.insertShape(SlidesApp.ShapeType.RECTANGLE, 80, 150, 560, 160);
  conceptBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s05, "• 숫자를 문자열로 변환\n• 각 자리 확인\n• 3, 6, 9 개수 세기", 120, 185, 480, 20, COLORS.DARK);

  // [Slide 06] 힌트
  var s06 = createHeaderSlide(deck, "힌트");
  createCodeBlock(s06, 80, 110, 560, 150, '# 숫자를 문자열로\nstr(123)  # "123"\n\n# 문자열에서 특정 문자 개수\n"333".count("3")  # 3');
  addText(s06, "이 함수들을 활용해보세요!", 80, 290, 560, 16, COLORS.GRAY);

  // [Slide 07] 정답
  var s07 = createHeaderSlide(deck, "정답");
  createCodeBlock(s07, 40, 90, 640, 290, 'def game_369(n):\n    s = str(n)\n    count = s.count("3") + s.count("6") + s.count("9")\n    \n    if count > 0:\n        return "짝" * count\n    return str(n)\n\n# 1부터 30까지 369 게임\nfor i in range(1, 31):\n    print(game_369(i), end=" ")\n\n# 1 2 짝 4 5 짝 7 8 짝 10 11 12 짝 14 ...');

  // [Slide 08] 확장
  var s08 = createHeaderSlide(deck, "확장: 100까지 테스트");
  createCodeBlock(s08, 80, 100, 560, 180, 'for i in range(1, 101):\n    result = game_369(i)\n    if "짝" in result:\n        print(f"{i}: {result}")');
  addText(s08, "3, 6, 9가 들어간 숫자만 출력!", 80, 310, 560, 18, COLORS.GRAY);

  // [Slide 09] 사용한 개념
  var s09 = createHeaderSlide(deck, "사용한 개념");
  var conceptBox9 = s09.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 80, 110, 560, 240);
  conceptBox9.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s09, "✅ str(): 숫자 → 문자열 변환\n\n✅ count(): 특정 문자 개수\n\n✅ 문자열 반복: \"짝\" * n\n\n✅ 조건문: if/else", 120, 150, 480, 20, COLORS.DARK);

  // =====================================================
  // PART 3. 챌린지 2 - 팰린드롬 (Challenge 2) : 6장
  // =====================================================

  // [Slide 10] 챌린지 2 안내
  var s10 = createHeaderSlide(deck, "챌린지 2: 팰린드롬 검사");
  addText(s10, "🔄 앞뒤가 같은 단어/문장!", 50, 100, 620, 22, COLORS.DARK, true);
  var exampleBox = s10.insertShape(SlidesApp.ShapeType.RECTANGLE, 80, 160, 560, 150);
  exampleBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s10, '"기러기", "토마토", "스위스"\n\n"Was it a car or a cat I saw?"', 120, 200, 480, 20, COLORS.DARK);

  // [Slide 11] 문제 분석
  var s11 = createHeaderSlide(deck, "문제 분석");
  addText(s11, "📋 필요한 개념:", 50, 100, 620, 20, COLORS.DARK, true);
  var conceptBox11 = s11.insertShape(SlidesApp.ShapeType.RECTANGLE, 80, 150, 560, 160);
  conceptBox11.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s11, "• 문자열 뒤집기\n• 대소문자 무시\n• 공백/특수문자 제거", 120, 185, 480, 20, COLORS.DARK);

  // [Slide 12] 간단한 버전
  var s12 = createHeaderSlide(deck, "간단한 버전");
  createCodeBlock(s12, 50, 100, 620, 200, 'def is_palindrome_simple(s):\n    return s == s[::-1]\n\nprint(is_palindrome_simple("기러기"))  # True\nprint(is_palindrome_simple("파이썬"))  # False');
  var tipBox12 = s12.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 320, 520, 50);
  tipBox12.getFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s12, "문자열 뒤집기: [::-1]", 150, 330, 420, 20, COLORS.DARK, true, true);

  // [Slide 13] 고급 버전
  var s13 = createHeaderSlide(deck, "고급 버전");
  createCodeBlock(s13, 30, 85, 660, 300, 'def is_palindrome(s):\n    # 소문자로 변환, 알파벳/숫자만 추출\n    cleaned = ""\n    for char in s.lower():\n        if char.isalnum():  # 알파벳 또는 숫자\n            cleaned += char\n    \n    return cleaned == cleaned[::-1]\n\n# 테스트\nprint(is_palindrome("A man a plan a canal Panama"))\n# True');

  // [Slide 14] 리스트 컴프리헨션 버전
  var s14 = createHeaderSlide(deck, "리스트 컴프리헨션 버전");
  createCodeBlock(s14, 80, 120, 560, 120, 'def is_palindrome(s):\n    cleaned = [c for c in s.lower() if c.isalnum()]\n    return cleaned == cleaned[::-1]');
  addText(s14, "한 줄로 정리!", 80, 280, 560, 18, COLORS.GRAY, true, true);

  // [Slide 15] 사용한 개념
  var s15 = createHeaderSlide(deck, "사용한 개념");
  var conceptBox15 = s15.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 80, 110, 560, 250);
  conceptBox15.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s15, "✅ 슬라이싱: [::-1] 뒤집기\n\n✅ lower(): 소문자 변환\n\n✅ isalnum(): 알파벳/숫자 확인\n\n✅ 리스트 컴프리헨션", 120, 150, 480, 20, COLORS.DARK);

  // =====================================================
  // PART 4. 챌린지 3 - 숫자 야구 (Challenge 3) : 8장
  // =====================================================

  // [Slide 16] 챌린지 3 안내
  var s16 = createHeaderSlide(deck, "챌린지 3: 숫자 야구 게임");
  addText(s16, "⚾ 3자리 숫자 맞추기!", 50, 100, 620, 22, COLORS.DARK, true);
  var ruleBox16 = s16.insertShape(SlidesApp.ShapeType.RECTANGLE, 60, 160, 600, 150);
  ruleBox16.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s16, "• 스트라이크: 숫자와 위치 모두 일치\n• 볼: 숫자만 일치\n• 아웃: 모두 불일치\n\n예: 정답 123, 추측 132 → 1S 2B", 90, 185, 540, 16, COLORS.DARK);

  // [Slide 17] 필요한 기능
  var s17 = createHeaderSlide(deck, "필요한 기능");
  var featureBox = s17.insertShape(SlidesApp.ShapeType.RECTANGLE, 80, 100, 560, 250);
  featureBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s17, "📋 1. 랜덤 3자리 숫자 생성 (중복 없이)\n\n📋 2. 사용자 입력 받기\n\n📋 3. 스트라이크/볼 계산\n\n📋 4. 결과 출력\n\n📋 5. 정답까지 반복", 110, 130, 500, 18, COLORS.DARK);

  // [Slide 18] 숫자 생성
  var s18 = createHeaderSlide(deck, "숫자 생성");
  createCodeBlock(s18, 40, 95, 640, 280, 'import random\n\ndef generate_number():\n    digits = list(range(10))\n    random.shuffle(digits)\n    \n    # 첫 자리는 0이 아니어야 함\n    if digits[0] == 0:\n        digits[0], digits[1] = digits[1], digits[0]\n    \n    return digits[:3]\n\nsecret = generate_number()\nprint(secret)  # 예: [3, 5, 7]');

  // [Slide 19] 스트라이크/볼 계산
  var s19 = createHeaderSlide(deck, "스트라이크/볼 계산");
  createCodeBlock(s19, 50, 100, 620, 230, 'def check_guess(secret, guess):\n    strike = 0\n    ball = 0\n    \n    for i in range(3):\n        if guess[i] == secret[i]:\n            strike += 1\n        elif guess[i] in secret:\n            ball += 1\n    \n    return strike, ball');

  // [Slide 20] 게임 루프
  var s20 = createHeaderSlide(deck, "게임 루프");
  createCodeBlock(s20, 15, 80, 690, 310, 'def play_game():\n    secret = generate_number()\n    attempts = 0\n    print("⚾ 숫자 야구 게임!")\n    print("3자리 숫자를 맞춰보세요! (중복 없음)\\n")\n    \n    while True:\n        guess_str = input("추측: ")\n        if len(guess_str) != 3 or not guess_str.isdigit():\n            print("3자리 숫자를 입력하세요!")\n            continue\n        \n        guess = [int(d) for d in guess_str]\n        attempts += 1\n        s, b = check_guess(secret, guess)\n        \n        if s == 3:\n            print(f"🎉 정답! {attempts}번 만에 맞췄습니다!")\n            break\n        elif s == 0 and b == 0:\n            print("아웃!")\n        else:\n            print(f"{s}스트라이크 {b}볼")');

  // [Slide 21] 실행 결과
  var s21 = createHeaderSlide(deck, "실행 결과");
  createCodeBlock(s21, 80, 100, 560, 230, '⚾ 숫자 야구 게임!\n3자리 숫자를 맞춰보세요! (중복 없음)\n\n추측: 123\n1스트라이크 0볼\n추측: 145\n0스트라이크 1볼\n추측: 167\n2스트라이크 0볼\n추측: 187\n🎉 정답! 4번 만에 맞췄습니다!');

  // [Slide 22] 확장 아이디어
  var s22 = createHeaderSlide(deck, "확장 아이디어");
  var ideaBox = s22.insertShape(SlidesApp.ShapeType.RECTANGLE, 80, 110, 560, 220);
  ideaBox.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s22, "• 힌트 기능\n\n• 시도 횟수 제한\n\n• 기록 저장\n\n• 2인 대전 모드", 120, 150, 480, 20, COLORS.DARK);

  // [Slide 23] 사용한 개념
  var s23 = createHeaderSlide(deck, "사용한 개념");
  var conceptBox23 = s23.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 80, 100, 560, 270);
  conceptBox23.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s23, "✅ random.shuffle(): 섞기\n\n✅ 리스트 조작\n\n✅ while True + break\n\n✅ 함수 분리\n\n✅ 입력 검증", 120, 140, 480, 18, COLORS.DARK);

  // =====================================================
  // PART 5. 전체 복습 (Review) : 4장
  // =====================================================

  // [Slide 24] Part 1 복습
  var s24 = createHeaderSlide(deck, "Part 1 복습: 기초 문법");
  var review1Box = s24.insertShape(SlidesApp.ShapeType.RECTANGLE, 60, 95, 600, 290);
  review1Box.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s24, "✅ 변수와 자료형 (int, float, str)\n\n✅ 연산자 (+, -, *, /, //, %, **)\n\n✅ 문자열 (인덱싱, 슬라이싱, f-string)\n\n✅ 리스트와 튜플\n\n✅ 입출력 (input, print)\n\n✅ 조건문 (if, elif, else)\n\n✅ 반복문 (for, while)\n\n✅ 함수 (def, return)", 90, 120, 540, 16, COLORS.DARK);

  // [Slide 25] Part 2 복습
  var s25 = createHeaderSlide(deck, "Part 2 복습: 무기 창고");
  var review2Box = s25.insertShape(SlidesApp.ShapeType.RECTANGLE, 60, 95, 600, 280);
  review2Box.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s25, "✅ random 모듈 (randint, choice, shuffle)\n\n✅ time/datetime 모듈\n\n✅ turtle 그래픽\n\n✅ webbrowser 모듈\n\n✅ 파일 입출력 (open, read, write)\n\n✅ 미니 프로젝트 (Up/Down, 타자게임)", 90, 125, 540, 18, COLORS.DARK);

  // [Slide 26] Part 3 복습
  var s26 = createHeaderSlide(deck, "Part 3 복습: 개발자의 뇌");
  var review3Box = s26.insertShape(SlidesApp.ShapeType.RECTANGLE, 60, 95, 600, 280);
  review3Box.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s26, "✅ 알고리즘적 사고\n\n✅ 리스트 컴프리헨션\n\n✅ 스택 (LIFO, push, pop)\n\n✅ 큐 (FIFO, enqueue, dequeue)\n\n✅ 선형 탐색 O(N)\n\n✅ 이진 탐색 O(log N)\n\n✅ 정렬 (버블, sort, sorted)", 90, 120, 540, 18, COLORS.DARK);

  // [Slide 27] 자가 점검
  var s27 = createHeaderSlide(deck, "자가 점검 체크리스트");
  var checkBox = s27.insertShape(SlidesApp.ShapeType.RECTANGLE, 60, 95, 600, 260);
  checkBox.getFill().setSolidFill(COLORS.CREAM_BG);
  checkBox.getBorder().setWeight(3).getLineFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s27, "☐ 변수와 자료형을 이해했다\n☐ 조건문으로 분기할 수 있다\n☐ 반복문으로 루프를 만들 수 있다\n☐ 함수를 정의하고 호출할 수 있다\n☐ 파일을 읽고 쓸 수 있다\n☐ 자료구조를 활용할 수 있다\n☐ 탐색과 정렬을 이해했다", 90, 120, 540, 16, COLORS.DARK);
  addText(s27, "모두 체크했다면 파이썬 마스터! 🎓", 60, 365, 600, 18, COLORS.HAEDAL_YELLOW, true, true);

  // =====================================================
  // PART 6. 마무리 (Finish) : 3장
  // =====================================================

  // [Slide 28] 축하
  var s28 = deck.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  s28.getBackground().setSolidFill(COLORS.HAEDAL_YELLOW);
  var congratsBox = s28.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, W/2 - 280, H/2 - 160, 560, 320);
  congratsBox.getFill().setSolidFill(COLORS.WHITE);
  addText(s28, "🎉 축하합니다! 🎉", W/2 - 230, H/2 - 120, 460, 36, COLORS.DARK, true, true);
  addText(s28, "파이썬 프로그래밍 마스터!", W/2 - 230, H/2 - 50, 460, 28, COLORS.HAEDAL_YELLOW, true, true);
  addText(s28, "25차시의 여정을 완주했어요!\n이제 여러분은 진짜 프로그래머예요!", W/2 - 230, H/2 + 20, 460, 18, COLORS.GRAY, false, true);

  // [Slide 29] 앞으로의 여정
  var s29 = createHeaderSlide(deck, "앞으로의 여정");
  addText(s29, "🚀 더 배울 것들:", 50, 100, 620, 22, COLORS.DARK, true);
  var futureBox = s29.insertShape(SlidesApp.ShapeType.RECTANGLE, 60, 150, 600, 180);
  futureBox.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s29, "• 객체지향 프로그래밍 (클래스)\n• 웹 개발 (Django, Flask)\n• 데이터 분석 (Pandas, NumPy)\n• 인공지능 (TensorFlow, PyTorch)\n• 게임 개발 (Pygame)", 100, 175, 520, 16, COLORS.DARK);
  addText(s29, "파이썬의 세계는 무한해요!", 50, 350, 620, 20, COLORS.HAEDAL_YELLOW, true, true);

  // [Slide 30] 최종 엔딩
  var s30 = deck.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  s30.getBackground().setSolidFill(COLORS.HAEDAL_YELLOW);
  var finalBox = s30.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, W/2 - 280, H/2 - 180, 560, 360);
  finalBox.getFill().setSolidFill(COLORS.WHITE);
  addText(s30, "수고했어요!", W/2 - 230, H/2 - 140, 460, 40, COLORS.DARK, true, true);
  addText(s30, "🐍 파이썬 프로그래밍 마스터", W/2 - 230, H/2 - 70, 460, 22, COLORS.GRAY, false, true);
  addText(s30, "25차시 과정 완료!", W/2 - 230, H/2 - 30, 460, 20, COLORS.HAEDAL_YELLOW, true, true);
  addText(s30, "[해달에듀]와 함께해서 즐거웠습니다!", W/2 - 230, H/2 + 30, 460, 18, COLORS.GRAY, false, true);
  addText(s30, "🎉 Happy Coding! 🎉", W/2 - 230, H/2 + 90, 460, 28, COLORS.HAEDAL_YELLOW, true, true);

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
  if (!text) return null;  // 빈 문자열이면 스킵
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
  if (title) {
    addText(slide, title, x + 20, y + 15, w - 40, 24, COLORS.DARK, true, true);
    addText(slide, content, x + 10, y + 55, w - 20, 14, COLORS.GRAY, false, true);
  } else {
    addText(slide, content, x + 10, y + h/2 - 15, w - 20, 14, COLORS.GRAY, false, true);
  }
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
  style.setFontSize(14).setForegroundColor(COLORS.CODE_WHITE).setFontFamily("Consolas");
  return codeBox;
}
