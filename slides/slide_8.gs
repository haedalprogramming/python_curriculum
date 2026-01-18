/**
 * [해달에듀] 파이썬 프로그래밍 8차시: while 반복문
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
function createPythonLesson8() {
  var deck = SlidesApp.create("[해달에듀] 파이썬 8차시 - while 반복문");
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
  addText(s01, "조건이 참인 동안!", W/2 - 250, H/2 - 100, 500, 48, COLORS.DARK, true, true);
  addText(s01, "🔄 while 반복문", W/2 - 250, H/2 - 20, 500, 24, COLORS.GRAY, false, true);
  addText(s01, "8차시 | 해달에듀", W/2 - 250, H/2 + 50, 500, 18, COLORS.GRAY, false, true);

  // [Slide 02] 질문
  var s02 = createHeaderSlide(deck, "\"맞출 때까지\" 반복하려면?");
  createCard(s02, 50, 110, 200, 120, "🎯", "정답을 맞출\n때까지...", COLORS.LIGHT_BG);
  createCard(s02, 270, 110, 200, 120, "🔑", "비밀번호가\n맞을 때까지...", COLORS.LIGHT_BG);
  var questionBox = s02.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 490, 110, 200, 120);
  questionBox.getFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s02, "❓", 520, 130, 140, 28, COLORS.DARK, true, true);
  addText(s02, "횟수를 모를 때\n어떻게 하지?", 510, 165, 160, 14, COLORS.DARK, false, true);
  addText(s02, "for문은 횟수가 정해져야 해요!", 100, 270, 520, 18, COLORS.GRAY, true, true);

  // [Slide 03] 미리보기
  var s03 = createHeaderSlide(deck, "오늘의 완성작!");
  createCard(s03, 100, 120, 250, 150, "⏱️", "카운트다운\n프로그램", COLORS.CREAM_BG);
  createCard(s03, 380, 120, 250, 150, "🔐", "비밀번호 확인\n프로그램", COLORS.CREAM_BG);

  // [Slide 04] 오늘의 미션
  var s04 = createHeaderSlide(deck, "오늘의 미션!");
  var goalBox = s04.insertShape(SlidesApp.ShapeType.RECTANGLE, 100, 120, 520, 230);
  goalBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  goalBox.getBorder().setDashStyle(SlidesApp.DashStyle.DASH).setWeight(2).getLineFill().setSolidFill(COLORS.GRAY);
  addText(s04, "☐ 1. while 반복문 이해하기\n\n☐ 2. 무한 루프와 탈출\n\n☐ 3. while True 패턴\n\n☐ 4. 조건 반복 프로그램 만들기", 140, 150, 440, 20, COLORS.DARK);

  // =====================================================
  // PART 2. while 기초 (Concept 1) : 6장
  // =====================================================

  // [Slide 05] for vs while
  var s05 = createHeaderSlide(deck, "for vs while");
  var compareBox = s05.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 100, 620, 150);
  compareBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s05, "       │     for      │     while\n───────┼──────────────┼───────────────\n       │ 정해진 횟수 반복 │ 조건이 참인 동안 반복\n       │ \"10번 반복해\"  │ \"맞출 때까지 반복해\"", 70, 120, 580, 16, COLORS.DARK);
  var tipBox = s05.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 270, 520, 50);
  tipBox.getFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s05, "while = 조건 기반 반복!", 120, 283, 480, 18, COLORS.DARK, true, true);

  // [Slide 06] while문 구조
  var s06 = createHeaderSlide(deck, "while문 구조");
  createCodeBlock(s06, 50, 100, 620, 100, 'while 조건:\n    반복할 코드');
  var explainBox = s06.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 230, 520, 80);
  explainBox.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s06, "조건이 True인 동안 반복!\nFalse가 되면 탈출!", 120, 255, 480, 16, COLORS.DARK, false, true);

  // [Slide 07] while문 기본 예제
  var s07 = createHeaderSlide(deck, "while문 기본 예제");
  createCodeBlock(s07, 50, 100, 620, 180, 'count = 0\nwhile count < 5:\n    print(count)\n    count += 1  # 중요!\n\n# 0, 1, 2, 3, 4');
  addText(s07, "count가 5 미만인 동안 반복!", 100, 300, 520, 18, COLORS.DARK, true, true);

  // [Slide 08] 무한 루프 주의
  var s08 = createHeaderSlide(deck, "⚠️ 무한 루프 주의!");
  createCodeBlock(s08, 50, 100, 620, 140, 'count = 0\nwhile count < 5:\n    print(count)\n    # count += 1 빠짐!');
  var warnBox = s08.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 260, 520, 60);
  warnBox.getFill().setSolidFill(COLORS.RED_HIGHLIGHT);
  addText(s08, "조건이 영원히 True면 멈추지 않아요!\nCtrl+C로 강제 종료", 120, 275, 480, 16, COLORS.WHITE, true, true);

  // [Slide 09] 카운트다운
  var s09 = createHeaderSlide(deck, "카운트다운");
  createCodeBlock(s09, 50, 100, 620, 180, 'n = 5\nwhile n > 0:\n    print(n)\n    n -= 1\nprint("발사! 🚀")\n\n# 5, 4, 3, 2, 1, 발사! 🚀');

  // [Slide 10] for로 바꾸면?
  var s10 = createHeaderSlide(deck, "for로 바꾸면?");
  createCodeBlock(s10, 50, 100, 300, 160, '# while 버전\nn = 5\nwhile n > 0:\n    print(n)\n    n -= 1');
  createCodeBlock(s10, 370, 100, 300, 160, '# for 버전\nfor n in range(5, 0, -1):\n    print(n)');
  addText(s10, "같은 결과, 다른 방법!", 100, 280, 520, 18, COLORS.DARK, true, true);

  // =====================================================
  // PART 3. while True 패턴 (Concept 2) : 6장
  // =====================================================

  // [Slide 11] while True란?
  var s11 = createHeaderSlide(deck, "while True란?");
  createCodeBlock(s11, 50, 100, 620, 150, 'while True:\n    # 무한 반복!\n    if 탈출조건:\n        break  # 탈출!');
  addText(s11, "일단 무한 반복 → 조건 맞으면 break로 탈출!", 80, 270, 560, 18, COLORS.DARK, true, true);

  // [Slide 12] 비밀번호 확인
  var s12 = createHeaderSlide(deck, "비밀번호 확인");
  createCodeBlock(s12, 50, 90, 620, 230, 'password = "1234"\n\nwhile True:\n    pw = input("비밀번호: ")\n    if pw == password:\n        print("로그인 성공!")\n        break\n    print("틀렸습니다. 다시 시도하세요.")');

  // [Slide 13] 메뉴 선택
  var s13 = createHeaderSlide(deck, "메뉴 선택");
  createCodeBlock(s13, 50, 90, 620, 250, 'while True:\n    print("1. 게임 시작")\n    print("2. 설정")\n    print("3. 종료")\n    choice = input("선택: ")\n    \n    if choice == "3":\n        print("안녕히 가세요!")\n        break\n    elif choice == "1":\n        print("게임 시작!")\n    elif choice == "2":\n        print("설정 화면")');

  // [Slide 14] 왜 while True를 쓸까?
  var s14 = createHeaderSlide(deck, "왜 while True를 쓸까?");
  var reasonBox = s14.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 100, 620, 180);
  reasonBox.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s14, "✅ 반복 횟수를 모를 때\n✅ 사용자 입력을 계속 받을 때\n✅ 특정 조건이 만족될 때까지\n\n게임, 메뉴, 로그인 등에 많이 사용!", 80, 125, 560, 18, COLORS.DARK);

  // [Slide 15] 숫자 수집하기
  var s15 = createHeaderSlide(deck, "숫자 수집하기");
  createCodeBlock(s15, 50, 90, 620, 230, 'numbers = []\n\nwhile True:\n    num = input("숫자 입력 (q=종료): ")\n    if num == \'q\':\n        break\n    numbers.append(int(num))\n\nprint(f"입력한 숫자: {numbers}")\nprint(f"합계: {sum(numbers)}")');

  // [Slide 16] 연습: 양수만 받기
  var s16 = createHeaderSlide(deck, "연습: 양수만 받기");
  createCodeBlock(s16, 50, 100, 620, 180, 'while True:\n    n = int(input("양수를 입력: "))\n    if n > 0:\n        print(f"{n} 입력 완료!")\n        break\n    print("양수가 아닙니다. 다시!")');

  // =====================================================
  // PART 4. 실습 A - 카운트다운 (Practice A) : 5장
  // =====================================================

  // [Slide 17] 실습 A 안내
  var s17 = createHeaderSlide(deck, "실습 A: 카운트다운 타이머");
  addText(s17, "⏱️ 시작 숫자를 입력받아 카운트다운!", 50, 120, 620, 22, COLORS.DARK, true, true);
  addText(s17, "time 모듈로 1초씩 대기!", 50, 170, 620, 18, COLORS.GRAY, false, true);

  // [Slide 18] time.sleep() 소개
  var s18 = createHeaderSlide(deck, "time.sleep() 소개");
  createCodeBlock(s18, 50, 100, 620, 100, 'import time\ntime.sleep(1)  # 1초 대기');
  var tipBox18 = s18.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 230, 520, 60);
  tipBox18.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s18, "프로그램을 잠시 멈추는 함수", 120, 248, 480, 18, COLORS.DARK, true, true);

  // [Slide 19] 카운트다운 코드
  var s19 = createHeaderSlide(deck, "카운트다운 코드");
  createCodeBlock(s19, 50, 100, 620, 180, 'import time\n\nn = int(input("몇 초부터? "))\nwhile n > 0:\n    print(n)\n    time.sleep(1)\n    n -= 1\nprint("🎉 끝!")');

  // [Slide 20] 실행 결과
  var s20 = createHeaderSlide(deck, "실행 결과");
  var resultBox = s20.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 100, 520, 200);
  resultBox.getFill().setSolidFill(COLORS.CODE_BG);
  addText(s20, "몇 초부터? 5\n5\n4\n3\n2\n1\n🎉 끝!", 130, 120, 460, 18, COLORS.CODE_WHITE);
  addText(s20, "1초마다 숫자가 줄어요!", 100, 320, 520, 18, COLORS.DARK, true, true);

  // [Slide 21] 분:초 형태로 출력
  var s21 = createHeaderSlide(deck, "분:초 형태로 출력");
  createCodeBlock(s21, 50, 90, 620, 240, 'import time\n\nseconds = int(input("총 몇 초? "))\nwhile seconds > 0:\n    mins = seconds // 60\n    secs = seconds % 60\n    print(f"{mins:02d}:{secs:02d}")\n    time.sleep(1)\n    seconds -= 1\nprint("타이머 종료!")');

  // =====================================================
  // PART 5. 실습 B - 입력 수집 (Practice B) : 5장
  // =====================================================

  // [Slide 22] 실습 B 안내
  var s22 = createHeaderSlide(deck, "실습 B: 점수 입력기");
  addText(s22, "📝 학생들의 점수를 입력받아 통계 계산!", 50, 120, 620, 22, COLORS.DARK, true, true);
  addText(s22, "\"끝\"을 입력하면 종료", 50, 170, 620, 18, COLORS.GRAY, false, true);

  // [Slide 23] 1단계: 입력 수집
  var s23 = createHeaderSlide(deck, "1단계: 입력 수집");
  createCodeBlock(s23, 50, 100, 620, 180, 'scores = []\nprint("점수를 입력하세요 (끝: \'q\')")\n\nwhile True:\n    data = input("점수: ")\n    if data == \'q\':\n        break\n    scores.append(int(data))');

  // [Slide 24] 2단계: 통계 계산
  var s24 = createHeaderSlide(deck, "2단계: 통계 계산");
  createCodeBlock(s24, 50, 90, 620, 250, 'if len(scores) > 0:\n    print(f"\\n입력된 점수: {scores}")\n    print(f"학생 수: {len(scores)}명")\n    print(f"총점: {sum(scores)}점")\n    print(f"평균: {sum(scores)/len(scores):.1f}점")\n    print(f"최고점: {max(scores)}점")\n    print(f"최저점: {min(scores)}점")\nelse:\n    print("입력된 점수가 없습니다.")');

  // [Slide 25] 실행 결과
  var s25 = createHeaderSlide(deck, "실행 결과");
  var resultBox25 = s25.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 90, 620, 260);
  resultBox25.getFill().setSolidFill(COLORS.CODE_BG);
  addText(s25, "점수를 입력하세요 (끝: 'q')\n점수: 85\n점수: 92\n점수: 78\n점수: 95\n점수: q\n\n입력된 점수: [85, 92, 78, 95]\n학생 수: 4명\n총점: 350점\n평균: 87.5점\n최고점: 95점\n최저점: 78점", 80, 100, 560, 12, COLORS.CODE_WHITE);

  // [Slide 26] 에러 처리 추가
  var s26 = createHeaderSlide(deck, "확장: 에러 처리 추가");
  createCodeBlock(s26, 50, 90, 620, 250, 'while True:\n    data = input("점수: ")\n    if data == \'q\':\n        break\n    try:\n        score = int(data)\n        if 0 <= score <= 100:\n            scores.append(score)\n        else:\n            print("0~100 사이로 입력!")\n    except ValueError:\n        print("숫자를 입력하세요!")');

  // =====================================================
  // PART 6. 추가 개념 (Advanced) : 5장
  // =====================================================

  // [Slide 27] while-else
  var s27 = createHeaderSlide(deck, "while-else");
  createCodeBlock(s27, 50, 100, 620, 180, 'n = 3\nwhile n > 0:\n    print(n)\n    n -= 1\nelse:\n    print("정상 종료!")\n\n# 3, 2, 1, 정상 종료!');
  addText(s27, "break 없이 끝나면 else 실행!", 100, 300, 520, 18, COLORS.DARK, true, true);

  // [Slide 28] break vs else
  var s28 = createHeaderSlide(deck, "break vs else");
  createCodeBlock(s28, 50, 100, 620, 160, '# break로 끝나면 else 실행 안 됨\nwhile True:\n    if 조건:\n        break  # else 실행 X\nelse:\n    print("break 없이 종료됨")');

  // [Slide 29] continue 복습
  var s29 = createHeaderSlide(deck, "continue 복습");
  createCodeBlock(s29, 50, 100, 620, 180, 'n = 0\nwhile n < 5:\n    n += 1\n    if n == 3:\n        continue  # 3은 건너뛰기\n    print(n)\n\n# 1, 2, 4, 5');

  // [Slide 30] 홀수만 출력
  var s30 = createHeaderSlide(deck, "홀수만 출력");
  createCodeBlock(s30, 50, 100, 620, 180, 'n = 0\nwhile n < 10:\n    n += 1\n    if n % 2 == 0:  # 짝수면 건너뛰기\n        continue\n    print(n)\n\n# 1, 3, 5, 7, 9');

  // [Slide 31] for vs while 정리
  var s31 = createHeaderSlide(deck, "for vs while 정리");
  var tableBox = s31.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 100, 620, 180);
  tableBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s31, "         │    for     │    while\n─────────┼────────────┼─────────────\n특징     │ 횟수가 정해짐 │ 조건 기반\n활용     │ range(), 리스트 │ 조건식\n변수     │ 자동 증가   │ 직접 변경", 70, 120, 580, 16, COLORS.DARK);
  addText(s31, "상황에 맞게 선택!", 100, 300, 520, 18, COLORS.DARK, true, true);

  // =====================================================
  // PART 7. 마무리 (Finish) : 4장
  // =====================================================

  // [Slide 32] 도전 과제
  var s32 = createHeaderSlide(deck, "도전 과제!");
  var challengeBox = s32.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 80, 110, 560, 180);
  challengeBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s32, "🏆 숫자 맞추기 게임!\n\n1~10 사이 숫자를 맞출 때까지 반복!\n\n힌트: random.randint(1, 10)", 100, 140, 520, 18, COLORS.DARK, false, true);

  // [Slide 33] 오늘 배운 것
  var s33 = createHeaderSlide(deck, "오늘 배운 것");
  var reviewBox = s33.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 80, 110, 560, 200);
  reviewBox.getFill().setSolidFill(COLORS.CREAM_BG);
  reviewBox.getBorder().setWeight(3).getLineFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s33, "✅ while 조건: (조건이 참인 동안 반복)\n\n✅ while True + break (무한 루프 탈출)\n\n✅ 무한 루프 주의! (조건 변경 필수)\n\n✅ time.sleep() (시간 지연)", 100, 140, 520, 16, COLORS.DARK);

  // [Slide 34] 예고
  var s34 = deck.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  s34.getBackground().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s34, "다음 시간에는...", W/2 - 200, H/2 - 100, 400, 28, COLORS.DARK, true, true);
  addText(s34, "📝 함수를 배워요!", W/2 - 200, H/2 - 30, 400, 24, COLORS.WHITE, true, true);
  addText(s34, "코드를 정리하고 재사용하는 마법!", W/2 - 200, H/2 + 30, 400, 18, COLORS.DARK, false, true);

  // [Slide 35] 엔딩
  var s35 = deck.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  s35.getBackground().setSolidFill(COLORS.HAEDAL_YELLOW);
  var endBox = s35.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, W/2 - 250, H/2 - 120, 500, 240);
  endBox.getFill().setSolidFill(COLORS.WHITE);
  addText(s35, "수고했어요!", W/2 - 200, H/2 - 80, 400, 36, COLORS.DARK, true, true);
  addText(s35, "🔄 조건에 따른 반복도\n이제 할 수 있어요!", W/2 - 200, H/2 - 20, 400, 18, COLORS.GRAY, false, true);
  addText(s35, "8차시 완료", W/2 - 100, H/2 + 60, 200, 24, COLORS.HAEDAL_YELLOW, true, true);

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
