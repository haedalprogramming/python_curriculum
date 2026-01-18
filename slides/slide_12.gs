/**
 * [해달에듀] 파이썬 프로그래밍 12차시: time/datetime 모듈
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
function createPythonLesson12() {
  var deck = SlidesApp.create("[해달에듀] 파이썬 12차시 - 시간을 다뤄보자!");
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
  addText(s01, "시간을 다뤄보자!", W/2 - 250, H/2 - 100, 500, 48, COLORS.DARK, true, true);
  addText(s01, "⏰ time & datetime 모듈", W/2 - 250, H/2 - 20, 500, 24, COLORS.GRAY, false, true);
  addText(s01, "12차시 | 해달에듀", W/2 - 250, H/2 + 50, 500, 18, COLORS.GRAY, false, true);

  // [Slide 02] 질문 - 시간이 필요할 때
  var s02 = createHeaderSlide(deck, "프로그램에서 시간이 필요할 때?");
  createCard(s02, 50, 120, 200, 150, "⏱️", "타이머\n스톱워치", COLORS.LIGHT_BG);
  createCard(s02, 270, 120, 200, 150, "📅", "D-day\n계산기", COLORS.LIGHT_BG);
  createCard(s02, 490, 120, 200, 150, "🕐", "현재 시각\n표시", COLORS.LIGHT_BG);
  var answerBox = s02.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 300, 520, 80);
  answerBox.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s02, "파이썬으로 다 할 수 있어요!", 120, 320, 480, 20, COLORS.DARK, true, true);

  // [Slide 03] 미리보기 - 오늘의 완성작
  var s03 = createHeaderSlide(deck, "오늘의 완성작!");
  createCard(s03, 80, 130, 260, 200, "⏳", "카운트다운\n타이머", COLORS.CREAM_BG);
  createCard(s03, 380, 130, 260, 200, "🎯", "10초 맞추기\n게임", COLORS.CREAM_BG);

  // [Slide 04] 오늘의 미션
  var s04 = createHeaderSlide(deck, "오늘의 미션!");
  var goalBox = s04.insertShape(SlidesApp.ShapeType.RECTANGLE, 100, 120, 520, 260);
  goalBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  goalBox.getBorder().setDashStyle(SlidesApp.DashStyle.DASH).setWeight(2).getLineFill().setSolidFill(COLORS.GRAY);
  addText(s04, "☐ 1. time 모듈 사용법\n\n☐ 2. datetime으로 날짜 다루기\n\n☐ 3. 카운트다운 타이머 만들기\n\n☐ 4. 10초 맞추기 게임 만들기", 140, 140, 440, 20, COLORS.DARK);

  // =====================================================
  // PART 2. time 모듈 (Concept 1) : 6장
  // =====================================================

  // [Slide 05] time 모듈이란?
  var s05 = createHeaderSlide(deck, "time 모듈이란?");
  addText(s05, "⏰ 시간 관련 기능을 모아놓은 도구 상자!", 50, 100, 620, 24, COLORS.DARK, true);
  createCodeBlock(s05, 100, 160, 520, 70, "import time");
  var tipBox = s05.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 260, 520, 80);
  tipBox.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s05, "먼저 import 해야 사용 가능!", 150, 285, 420, 20, COLORS.DARK, true, true);

  // [Slide 06] time.sleep() - 잠시 멈추기
  var s06 = createHeaderSlide(deck, "time.sleep() - 잠시 멈추기");
  createCodeBlock(s06, 50, 100, 620, 150, 'import time\n\nprint("시작!")\ntime.sleep(3)  # 3초 대기\nprint("3초 지났어요!")');
  var explainBox = s06.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 280, 520, 70);
  explainBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s06, "💤 프로그램을 잠시 멈추는 기능!", 120, 300, 480, 20, COLORS.DARK, true, true);

  // [Slide 07] time.time() - 현재 시간
  var s07 = createHeaderSlide(deck, "time.time() - 현재 시간");
  createCodeBlock(s07, 50, 100, 620, 130, 'import time\n\nnow = time.time()\nprint(now)  # 1700000000.123456');
  var explainBox7 = s07.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 260, 520, 90);
  explainBox7.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s07, "1970년 1월 1일부터 지금까지\n흐른 초를 숫자로! (타임스탬프)", 120, 280, 480, 18, COLORS.DARK, false, true);

  // [Slide 08] 시간 측정하기
  var s08 = createHeaderSlide(deck, "시간 측정하기");
  createCodeBlock(s08, 50, 100, 620, 200, 'import time\n\nstart = time.time()\n# 여기에 측정할 코드\nfor i in range(1000000):\n    pass\nend = time.time()\n\nprint(f"걸린 시간: {end - start:.3f}초")');
  addText(s08, "⏱️ 코드 실행 시간 측정에 유용!", 50, 320, 620, 18, COLORS.GRAY);

  // [Slide 09] time.ctime() - 읽기 쉬운 시간
  var s09 = createHeaderSlide(deck, "time.ctime() - 읽기 쉬운 시간");
  createCodeBlock(s09, 50, 100, 620, 120, 'import time\n\nprint(time.ctime())\n# Sat Nov 18 15:30:45 2024');
  var explainBox9 = s09.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 250, 520, 80);
  explainBox9.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s09, "👀 사람이 읽기 쉬운 형태로 변환!", 120, 275, 480, 20, COLORS.DARK, true, true);

  // [Slide 10] time 모듈 정리
  var s10 = createHeaderSlide(deck, "time 모듈 정리");
  var tableBox = s10.insertShape(SlidesApp.ShapeType.RECTANGLE, 80, 110, 560, 250);
  tableBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  tableBox.getBorder().setWeight(2).getLineFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s10, "함수                      기능", 100, 130, 520, 18, COLORS.DARK, true);
  addText(s10, "─────────────────────────────", 100, 155, 520, 14, COLORS.GRAY);
  addText(s10, "time.sleep(초)          대기\n\ntime.time()             타임스탬프\n\ntime.ctime()            현재 시각 문자열", 100, 180, 520, 18, COLORS.DARK);

  // =====================================================
  // PART 3. datetime 모듈 (Concept 2) : 6장
  // =====================================================

  // [Slide 11] datetime 모듈
  var s11 = createHeaderSlide(deck, "datetime 모듈");
  addText(s11, "📅 날짜와 시간을 더 세밀하게!", 50, 100, 620, 24, COLORS.DARK, true);
  createCodeBlock(s11, 100, 160, 520, 80, "from datetime import datetime, date, timedelta");
  addText(s11, "time보다 더 다양한 기능 제공!", 100, 280, 520, 18, COLORS.GRAY, false, true);

  // [Slide 12] 현재 날짜/시간
  var s12 = createHeaderSlide(deck, "현재 날짜/시간");
  createCodeBlock(s12, 50, 100, 620, 230, 'from datetime import datetime\n\nnow = datetime.now()\nprint(now)  # 2024-11-18 15:30:45.123456\n\nprint(now.year)   # 2024\nprint(now.month)  # 11\nprint(now.day)    # 18\nprint(now.hour)   # 15\nprint(now.minute) # 30');

  // [Slide 13] 날짜 포맷팅
  var s13 = createHeaderSlide(deck, "날짜 포맷팅");
  createCodeBlock(s13, 50, 100, 620, 190, 'from datetime import datetime\nnow = datetime.now()\n\n# strftime = string format time\nprint(now.strftime("%Y년 %m월 %d일"))\n# 2024년 11월 18일\n\nprint(now.strftime("%H:%M:%S"))\n# 15:30:45');

  // [Slide 14] 주요 포맷 코드
  var s14 = createHeaderSlide(deck, "주요 포맷 코드");
  var tableBox14 = s14.insertShape(SlidesApp.ShapeType.RECTANGLE, 60, 100, 600, 270);
  tableBox14.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s14, "코드        의미              예시", 80, 120, 560, 16, COLORS.DARK, true);
  addText(s14, "───────────────────────────────────", 80, 145, 560, 12, COLORS.GRAY);
  addText(s14, "%Y          연도 (4자리)      2024\n\n%m          월                11\n\n%d          일                18\n\n%H          시 (24시간)       15\n\n%M          분                30\n\n%S          초                45", 80, 165, 560, 16, COLORS.DARK);

  // [Slide 15] 날짜 계산 (timedelta)
  var s15 = createHeaderSlide(deck, "날짜 계산 (timedelta)");
  createCodeBlock(s15, 50, 100, 620, 220, 'from datetime import datetime, timedelta\n\nnow = datetime.now()\n\n# 7일 후\nafter_week = now + timedelta(days=7)\nprint(after_week)\n\n# 100일 후 (D+100)\nd_day = now + timedelta(days=100)\nprint(d_day.strftime("%Y-%m-%d"))');

  // [Slide 16] D-day 계산
  var s16 = createHeaderSlide(deck, "D-day 계산");
  createCodeBlock(s16, 50, 100, 620, 180, 'from datetime import datetime\n\ntarget = datetime(2024, 12, 25)  # 크리스마스\nnow = datetime.now()\n\ndiff = target - now\nprint(f"크리스마스까지 {diff.days}일!")');
  var tipBox16 = s16.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 300, 520, 60);
  tipBox16.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s16, "🎄 두 날짜의 차이 계산!", 150, 315, 420, 18, COLORS.DARK, true, true);

  // =====================================================
  // PART 4. 실습 A - 카운트다운 (Practice A) : 6장
  // =====================================================

  // [Slide 17] 실습 A 안내
  var s17 = createHeaderSlide(deck, "실습 A: 카운트다운 타이머");
  addText(s17, "⏳ 분:초 형태로 카운트다운!", 50, 110, 620, 24, COLORS.DARK, true);
  var goalBox17 = s17.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 170, 520, 180);
  goalBox17.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s17, "🎯 목표:\n\n• 원하는 시간 입력\n• 1초씩 줄어드는 타이머\n• 00:00이 되면 알림!", 130, 200, 460, 18, COLORS.DARK);

  // [Slide 18] 실습 1단계
  var s18 = createHeaderSlide(deck, "1단계: 시간 입력");
  createCodeBlock(s18, 100, 130, 520, 100, 'total_seconds = int(input("몇 초? "))');
  addText(s18, "👆 사용자에게 타이머 시간 입력 받기", 100, 270, 520, 18, COLORS.GRAY, false, true);

  // [Slide 19] 실습 2단계
  var s19 = createHeaderSlide(deck, "2단계: 분:초 계산");
  createCodeBlock(s19, 50, 100, 620, 180, 'import time\n\nwhile total_seconds > 0:\n    mins = total_seconds // 60\n    secs = total_seconds % 60\n    print(f"\\r{mins:02d}:{secs:02d}", end="")\n    time.sleep(1)\n    total_seconds -= 1');
  var tipBox19 = s19.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 300, 520, 60);
  tipBox19.getFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s19, "\\r = 같은 줄에서 덮어쓰기!", 150, 315, 420, 18, COLORS.DARK, true, true);

  // [Slide 20] 실습 3단계 완성 코드
  var s20 = createHeaderSlide(deck, "3단계: 완성 코드");
  createCodeBlock(s20, 30, 90, 660, 290, 'import time\n\ndef countdown(total_seconds):\n    while total_seconds > 0:\n        mins = total_seconds // 60\n        secs = total_seconds % 60\n        print(f"\\r⏳ {mins:02d}:{secs:02d}", end="")\n        time.sleep(1)\n        total_seconds -= 1\n    print("\\r🔔 시간 끝!      ")\n\n# 입력 받기\nseconds = int(input("몇 초 타이머? "))\ncountdown(seconds)');

  // [Slide 21] 실행 결과
  var s21 = createHeaderSlide(deck, "실행 결과");
  createCodeBlock(s21, 80, 110, 560, 180, '몇 초 타이머? 10\n⏳ 00:10 → 00:09 → ... → 00:01\n🔔 시간 끝!');
  var celebBox = s21.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 310, 520, 60);
  celebBox.getFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s21, "🎉 카운트다운 타이머 완성!", 150, 325, 420, 20, COLORS.DARK, true, true);

  // [Slide 22] 확장
  var s22 = createHeaderSlide(deck, "확장: 분 단위 입력");
  createCodeBlock(s22, 80, 110, 560, 180, 'mins = int(input("몇 분? "))\nsecs = int(input("몇 초? "))\n\ntotal = mins * 60 + secs\ncountdown(total)');
  addText(s22, "💡 분과 초를 따로 입력 받아서 합치기!", 80, 320, 560, 18, COLORS.GRAY);

  // =====================================================
  // PART 5. 실습 B - 10초 맞추기 (Practice B) : 6장
  // =====================================================

  // [Slide 23] 실습 B 안내
  var s23 = createHeaderSlide(deck, "실습 B: 10초 맞추기 게임");
  addText(s23, "🎯 시계를 안 보고 정확히 10초를 맞춰보세요!", 50, 110, 620, 22, COLORS.DARK, true);
  var goalBox23 = s23.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 160, 520, 180);
  goalBox23.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s23, "🎮 게임 규칙:\n\n• 시작하면 10초를 세어보세요\n• 10초라고 생각되면 엔터!\n• 얼마나 정확한지 측정!", 130, 190, 460, 18, COLORS.DARK);

  // [Slide 24] 게임 로직
  var s24 = createHeaderSlide(deck, "게임 로직");
  createCodeBlock(s24, 50, 100, 620, 220, 'import time\n\nprint("🎮 10초 맞추기 게임!")\nprint("10초라고 생각되면 엔터를 누르세요!")\n\ninput("준비됐으면 엔터... ")\n\nstart = time.time()\ninput()  # 엔터 대기\nend = time.time()\n\nelapsed = end - start');

  // [Slide 25] 결과 판정
  var s25 = createHeaderSlide(deck, "결과 판정");
  createCodeBlock(s25, 30, 90, 660, 290, 'diff = abs(elapsed - 10)\n\nprint(f"\\n⏱️ 측정 시간: {elapsed:.2f}초")\nprint(f"📏 오차: {diff:.2f}초")\n\nif diff < 0.5:\n    print("🏆 대단해요! 거의 완벽!")\nelif diff < 1:\n    print("👍 아주 좋아요!")\nelif diff < 2:\n    print("😊 괜찮아요!")\nelse:\n    print("💪 다시 도전해보세요!")');

  // [Slide 26] 완성 코드
  var s26 = createHeaderSlide(deck, "완성 코드");
  createCodeBlock(s26, 30, 90, 660, 290, 'import time\n\ndef play_game():\n    print("\\n🎮 10초 맞추기 게임!")\n    input("준비됐으면 엔터...")\n    print("시작! 10초 뒤에 엔터를 누르세요!")\n    \n    start = time.time()\n    input()\n    end = time.time()\n    \n    elapsed = end - start\n    diff = abs(elapsed - 10)\n    print(f"\\n⏱️ 결과: {elapsed:.2f}초")\n    print(f"오차: {diff:.2f}초")\n    return diff\n\nplay_game()');

  // [Slide 27] 실행 결과
  var s27 = createHeaderSlide(deck, "실행 결과");
  createCodeBlock(s27, 80, 110, 560, 200, '🎮 10초 맞추기 게임!\n준비됐으면 엔터...\n시작! 10초 뒤에 엔터를 누르세요!\n\n⏱️ 결과: 10.23초\n오차: 0.23초\n🏆 대단해요! 거의 완벽!');

  // [Slide 28] 확장
  var s28 = createHeaderSlide(deck, "확장: 최고 기록 저장");
  createCodeBlock(s28, 50, 100, 620, 240, 'best = float(\'inf\')\n\nwhile True:\n    diff = play_game()\n    if diff < best:\n        best = diff\n        print(f"🎉 최고 기록 갱신! {best:.2f}초")\n    \n    again = input("다시? (y/n): ")\n    if again != \'y\':\n        break\n\nprint(f"최종 기록: {best:.2f}초")');

  // =====================================================
  // PART 6. 추가 활용 (Advanced) : 3장
  // =====================================================

  // [Slide 29] 디지털 시계
  var s29 = createHeaderSlide(deck, "디지털 시계");
  createCodeBlock(s29, 50, 100, 620, 200, 'import time\nfrom datetime import datetime\n\nwhile True:\n    now = datetime.now()\n    clock = now.strftime("%H:%M:%S")\n    print(f"\\r🕐 {clock}", end="")\n    time.sleep(1)');
  addText(s29, "⚠️ Ctrl+C로 종료", 50, 320, 620, 16, COLORS.GRAY);

  // [Slide 30] 코드 실행 시간 측정
  var s30 = createHeaderSlide(deck, "코드 실행 시간 측정");
  createCodeBlock(s30, 40, 95, 640, 280, 'import time\n\ndef measure_time(func):\n    start = time.time()\n    func()\n    end = time.time()\n    print(f"실행 시간: {end-start:.4f}초")\n\ndef slow_function():\n    total = 0\n    for i in range(10000000):\n        total += i\n\nmeasure_time(slow_function)');

  // [Slide 31] 나이 계산기
  var s31 = createHeaderSlide(deck, "나이 계산기");
  createCodeBlock(s31, 40, 95, 640, 280, 'from datetime import datetime\n\nbirth_year = int(input("태어난 연도: "))\nbirth_month = int(input("태어난 월: "))\nbirth_day = int(input("태어난 일: "))\n\nbirth = datetime(birth_year, birth_month, birth_day)\nnow = datetime.now()\n\nage = now.year - birth.year\nif (now.month, now.day) < (birth.month, birth.day):\n    age -= 1\n\nprint(f"만 {age}세입니다!")');

  // =====================================================
  // PART 7. 마무리 (Finish) : 4장
  // =====================================================

  // [Slide 32] 도전 과제
  var s32 = createHeaderSlide(deck, "도전 과제!");
  var challengeBox = s32.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 80, 120, 560, 220);
  challengeBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s32, "🏆 스톱워치 만들기!", 120, 150, 480, 28, COLORS.DARK, true, true);
  addText(s32, "• 엔터를 누르면 시작\n• 다시 엔터를 누르면 정지\n• 경과 시간을 표시!", 120, 210, 480, 20, COLORS.DARK);

  // [Slide 33] 오늘 배운 것
  var s33 = createHeaderSlide(deck, "오늘 배운 것");
  var reviewBox = s33.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 80, 110, 560, 260);
  reviewBox.getFill().setSolidFill(COLORS.CREAM_BG);
  reviewBox.getBorder().setWeight(3).getLineFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s33, "✅ time.sleep(): 대기\n\n✅ time.time(): 시간 측정\n\n✅ datetime.now(): 현재 날짜/시간\n\n✅ strftime(): 날짜 포맷팅\n\n✅ timedelta: 날짜 계산", 120, 140, 480, 18, COLORS.DARK);

  // [Slide 34] 예고
  var s34 = deck.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  s34.getBackground().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s34, "다음 시간에는...", W/2 - 200, H/2 - 100, 400, 28, COLORS.DARK, true, true);
  addText(s34, "🐢 turtle로 그림을 그려요!", W/2 - 200, H/2 - 30, 400, 24, COLORS.WHITE, true, true);
  addText(s34, "거북이를 움직여서 도형 그리기!", W/2 - 200, H/2 + 30, 400, 20, COLORS.WHITE, false, true);
  addText(s34, "13차시에서 만나요!", W/2 - 150, H/2 + 100, 300, 20, COLORS.DARK, true, true);

  // [Slide 35] 엔딩
  var s35 = deck.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  s35.getBackground().setSolidFill(COLORS.HAEDAL_YELLOW);
  var endBox = s35.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, W/2 - 250, H/2 - 120, 500, 240);
  endBox.getFill().setSolidFill(COLORS.WHITE);
  addText(s35, "수고했어요!", W/2 - 200, H/2 - 80, 400, 36, COLORS.DARK, true, true);
  addText(s35, "⏰ 이제 시간을 자유롭게\n다룰 수 있어요!", W/2 - 200, H/2 - 20, 400, 20, COLORS.GRAY, false, true);
  addText(s35, "12차시 완료", W/2 - 100, H/2 + 60, 200, 24, COLORS.HAEDAL_YELLOW, true, true);

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
