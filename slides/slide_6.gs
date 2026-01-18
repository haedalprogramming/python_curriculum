/**
 * [해달에듀] 파이썬 프로그래밍 6차시: 조건문 (if, elif, else)
 * 자동 슬라이드 생성 스크립트 (38장)
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
function createPythonLesson6() {
  var deck = SlidesApp.create("[해달에듀] 파이썬 6차시 - 만약에... 그러면!");
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
  addText(s01, "만약에... 그러면!", W/2 - 250, H/2 - 100, 500, 48, COLORS.DARK, true, true);
  addText(s01, "🔀 조건문 마스터하기", W/2 - 250, H/2 - 20, 500, 24, COLORS.GRAY, false, true);
  addText(s01, "6차시 | 해달에듀", W/2 - 250, H/2 + 50, 500, 18, COLORS.GRAY, false, true);

  // [Slide 02] 선택의 순간!
  var s02 = createHeaderSlide(deck, "선택의 순간!");
  createCard(s02, 80, 110, 250, 180, "🚪 문 A", "보물이 있다", COLORS.LIGHT_BG);
  createCard(s02, 400, 110, 250, 180, "🚪 문 B", "괴물이 있다", COLORS.CREAM_BG);
  var choiceBox = s02.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 80, 310, 570, 60);
  choiceBox.getFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s02, "이런 선택을 코드로 표현할 수 있어요!", 100, 325, 530, 18, COLORS.DARK, true, true);

  // [Slide 03] 미리보기
  var s03 = createHeaderSlide(deck, "오늘의 완성작!");
  createCard(s03, 80, 120, 280, 180, "📝", "성적 판별기\nA/B/C/D/F 학점!", COLORS.LIGHT_BG);
  createCard(s03, 400, 120, 280, 180, "🔢", "홀짝 판별기\n홀수? 짝수?", COLORS.CREAM_BG);

  // [Slide 04] 오늘의 미션
  var s04 = createHeaderSlide(deck, "오늘의 미션!");
  var goalBox = s04.insertShape(SlidesApp.ShapeType.RECTANGLE, 100, 110, 520, 270);
  goalBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  goalBox.getBorder().setDashStyle(SlidesApp.DashStyle.DASH).setWeight(2).getLineFill().setSolidFill(COLORS.GRAY);
  addText(s04, "☐ 1. 비교 연산자 알기\n\n☐ 2. if, elif, else 사용법\n\n☐ 3. 논리 연산자 (and, or, not)\n\n☐ 4. 성적 판별기 만들기", 140, 140, 440, 20, COLORS.DARK);

  // =====================================================
  // PART 2. 비교 연산자 (Concept 1) : 5장
  // =====================================================

  // [Slide 05] 비교 연산자란?
  var s05 = createHeaderSlide(deck, "비교 연산자란?");
  addText(s05, "🤔 두 값을 비교해서", 50, 100, 620, 24, COLORS.DARK, true);
  createCard(s05, 120, 160, 200, 100, "True", "참 (맞아!)", COLORS.CREAM_BG);
  addText(s05, "또는", 340, 195, 60, 20, COLORS.GRAY, false, true);
  createCard(s05, 410, 160, 200, 100, "False", "거짓 (아니야!)", COLORS.LIGHT_BG);
  addText(s05, "마치 \"맞아? 틀려?\" 물어보는 것!", 50, 290, 620, 20, COLORS.DARK, true, true);

  // [Slide 06] 비교 연산자 6가지
  var s06 = createHeaderSlide(deck, "비교 연산자 6가지");
  createCard(s06, 30, 100, 110, 80, "==", "같다", COLORS.CREAM_BG);
  createCard(s06, 150, 100, 110, 80, "!=", "다르다", COLORS.LIGHT_BG);
  createCard(s06, 270, 100, 110, 80, ">", "크다", COLORS.LIGHT_BG);
  createCard(s06, 390, 100, 110, 80, "<", "작다", COLORS.LIGHT_BG);
  createCard(s06, 510, 100, 100, 80, ">=", "크거나 같다", COLORS.LIGHT_BG);
  createCard(s06, 620, 100, 90, 80, "<=", "작거나 같다", COLORS.LIGHT_BG);
  var warnBox = s06.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 30, 200, 230, 60);
  warnBox.getFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s06, "⚠️ 같다는 등호 2개!", 50, 215, 190, 16, COLORS.DARK, true, true);

  // [Slide 07] 비교 연산자 실습
  var s07 = createHeaderSlide(deck, "비교 연산자 실습");
  createCodeBlock(s07, 50, 100, 620, 180,
    'a = 10\n' +
    'b = 5\n' +
    'print(a == b)   # False\n' +
    'print(a != b)   # True\n' +
    'print(a > b)    # True\n' +
    'print(a >= 10)  # True');

  // [Slide 08] 주의! = vs ==
  var s08 = createHeaderSlide(deck, "⚠️ 주의! = vs ==");
  var compareBox = s08.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 100, 620, 120);
  compareBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s08, "=  저장하기 (대입)\n==  비교하기 (같은지 확인)", 80, 130, 560, 22, COLORS.DARK, true);
  createCodeBlock(s08, 50, 240, 620, 100,
    'x = 5     # x에 5를 저장\n' +
    'x == 5    # x가 5와 같은지 비교 → True');

  // [Slide 09] 문자열도 비교 가능!
  var s09 = createHeaderSlide(deck, "문자열도 비교 가능!");
  createCodeBlock(s09, 50, 100, 620, 140,
    'name = "철수"\n' +
    'print(name == "철수")  # True\n' +
    'print(name == "영희")  # False');

  // =====================================================
  // PART 3. if 조건문 (Concept 2) : 8장
  // =====================================================

  // [Slide 10] if문이란?
  var s10 = createHeaderSlide(deck, "if문이란?");
  addText(s10, "🔀 \"만약 ~라면, ~해라\"", 50, 100, 620, 28, COLORS.DARK, true);
  addText(s10, "갈림길에서 방향을 정하는 것!", 50, 150, 620, 20, COLORS.GRAY);
  createCodeBlock(s10, 50, 200, 620, 100,
    'if 조건:\n' +
    '    실행할 코드');
  addText(s10, "↗️ 조건이 맞으면 이 코드가 실행!", 50, 320, 620, 16, COLORS.GRAY);

  // [Slide 11] if문 기본 예제
  var s11 = createHeaderSlide(deck, "if문 기본 예제");
  createCodeBlock(s11, 50, 100, 620, 120,
    'age = 15\n' +
    'if age >= 13:\n' +
    '    print("청소년입니다!")');
  var tipBox11 = s11.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 240, 620, 60);
  tipBox11.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s11, "💡 조건이 True면 들여쓰기된 코드 실행!", 80, 255, 560, 18, COLORS.DARK, true, true);

  // [Slide 12] 들여쓰기가 중요해요!
  var s12 = createHeaderSlide(deck, "⚠️ 들여쓰기가 중요해요!");
  createCodeBlock(s12, 50, 100, 620, 100,
    'if age >= 13:\n' +
    '    print("OK")  # 들여쓰기 4칸!');
  var indentBox = s12.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 220, 620, 100);
  indentBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s12, "• 탭(Tab) 또는 스페이스 4칸\n• 들여쓰기 없으면 에러!", 80, 245, 560, 18, COLORS.DARK);

  // [Slide 13] if-else: 둘 중 하나
  var s13 = createHeaderSlide(deck, "if-else: 둘 중 하나");
  createCodeBlock(s13, 50, 100, 620, 140,
    'if 조건:\n' +
    '    # 조건이 참이면\n' +
    'else:\n' +
    '    # 조건이 거짓이면');
  addText(s13, "\"만약 ~라면... 아니면...\"", 50, 260, 620, 20, COLORS.DARK, true, true);

  // [Slide 14] if-else 예제
  var s14 = createHeaderSlide(deck, "if-else 예제");
  createCodeBlock(s14, 50, 100, 620, 150,
    'score = 75\n\n' +
    'if score >= 60:\n' +
    '    print("합격!")\n' +
    'else:\n' +
    '    print("불합격...")');
  addText(s14, "60점 이상이면 합격, 아니면 불합격", 50, 270, 620, 18, COLORS.GRAY);

  // [Slide 15] elif: 여러 조건 검사
  var s15 = createHeaderSlide(deck, "elif: 여러 조건 검사");
  createCodeBlock(s15, 50, 100, 620, 220,
    'if 조건1:\n' +
    '    # 조건1이 참\n' +
    'elif 조건2:\n' +
    '    # 조건2가 참\n' +
    'elif 조건3:\n' +
    '    # 조건3이 참\n' +
    'else:\n' +
    '    # 모두 거짓');

  // [Slide 16] elif 예제: 학점 판별
  var s16 = createHeaderSlide(deck, "elif 예제: 학점 판별");
  createCodeBlock(s16, 50, 95, 620, 220,
    'score = 85\n\n' +
    'if score >= 90:\n' +
    '    print("A")\n' +
    'elif score >= 80:\n' +
    '    print("B")\n' +
    'elif score >= 70:\n' +
    '    print("C")\n' +
    'else:\n' +
    '    print("F")');
  addText(s16, "→ 결과: B", 500, 330, 150, 20, COLORS.DARK, true);

  // [Slide 17] 조건 검사 순서가 중요!
  var s17 = createHeaderSlide(deck, "조건 검사 순서가 중요!");
  var orderBox = s17.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 100, 620, 200);
  orderBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s17, "⬇️ 위에서 아래로 순서대로 검사\n\n⬇️ 먼저 True가 되면 나머지는 검사 안 함!\n\n⬇️ 90 이상? → A 먼저 확인\n⬇️ A가 아니면 → 80 이상인지 확인...", 80, 120, 560, 18, COLORS.DARK);

  // =====================================================
  // PART 4. 논리 연산자 (Concept 3) : 4장
  // =====================================================

  // [Slide 18] 논리 연산자
  var s18 = createHeaderSlide(deck, "논리 연산자");
  addText(s18, "조건을 합치거나 뒤집을 때 사용!", 50, 100, 620, 20, COLORS.DARK, true);
  createCard(s18, 50, 150, 200, 120, "and", "그리고\n(둘 다 참이면 참)", COLORS.LIGHT_BG);
  createCard(s18, 270, 150, 200, 120, "or", "또는\n(하나만 참이면 참)", COLORS.LIGHT_BG);
  createCard(s18, 490, 150, 200, 120, "not", "부정\n(참↔거짓 뒤집기)", COLORS.CREAM_BG);

  // [Slide 19] and 예제
  var s19 = createHeaderSlide(deck, "and 예제");
  createCodeBlock(s19, 50, 100, 620, 140,
    'age = 20\n' +
    'has_id = True\n\n' +
    'if age >= 19 and has_id:\n' +
    '    print("입장 가능!")');
  addText(s19, "19세 이상 그리고 신분증이 있어야 입장", 50, 260, 620, 18, COLORS.GRAY);

  // [Slide 20] or 예제
  var s20 = createHeaderSlide(deck, "or 예제");
  createCodeBlock(s20, 50, 100, 620, 120,
    'day = "토요일"\n\n' +
    'if day == "토요일" or day == "일요일":\n' +
    '    print("주말이다!")');
  addText(s20, "토요일 또는 일요일이면 주말", 50, 240, 620, 18, COLORS.GRAY);

  // [Slide 21] not 예제
  var s21 = createHeaderSlide(deck, "not 예제");
  createCodeBlock(s21, 50, 100, 620, 120,
    'is_raining = False\n\n' +
    'if not is_raining:\n' +
    '    print("산책 가자!")');
  addText(s21, "비가 오지 않으면 산책", 50, 240, 620, 18, COLORS.GRAY);

  // =====================================================
  // PART 5. 실습 A - 성적 판별기 : 6장
  // =====================================================

  // [Slide 22] 실습 A: 성적 판별기
  var s22 = createHeaderSlide(deck, "실습 A: 성적 판별기");
  var practiceBox = s22.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 100, 620, 80);
  practiceBox.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s22, "📝 점수를 입력하면 학점을 알려주는 프로그램!", 80, 120, 560, 20, COLORS.DARK, true, true);
  var gradeBox = s22.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 200, 620, 100);
  gradeBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s22, "90↑: A | 80↑: B | 70↑: C | 60↑: D | 나머지: F", 80, 235, 560, 18, COLORS.DARK, true, true);

  // [Slide 23] 1단계: 점수 입력받기
  var s23 = createHeaderSlide(deck, "1단계: 점수 입력받기");
  createCodeBlock(s23, 50, 120, 620, 80,
    'score = int(input("점수를 입력하세요: "))');

  // [Slide 24] 2단계: 조건문 작성
  var s24 = createHeaderSlide(deck, "2단계: 조건문 작성");
  createCodeBlock(s24, 50, 95, 620, 260,
    'if score >= 90:\n' +
    '    grade = "A"\n' +
    'elif score >= 80:\n' +
    '    grade = "B"\n' +
    'elif score >= 70:\n' +
    '    grade = "C"\n' +
    'elif score >= 60:\n' +
    '    grade = "D"\n' +
    'else:\n' +
    '    grade = "F"');

  // [Slide 25] 3단계: 결과 출력
  var s25 = createHeaderSlide(deck, "3단계: 결과 출력");
  createCodeBlock(s25, 50, 120, 620, 80,
    'print(f"당신의 학점은 {grade}입니다!")');
  addText(s25, "💡 f-string으로 변수값 넣기!", 50, 220, 620, 18, COLORS.GRAY);

  // [Slide 26] 완성 코드
  var s26 = createHeaderSlide(deck, "완성 코드");
  var completeBox = s26.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 45, 90, 630, 300);
  completeBox.getFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  createCodeBlock(s26, 50, 95, 620, 290,
    'score = int(input("점수를 입력하세요: "))\n\n' +
    'if score >= 90:\n' +
    '    grade = "A"\n' +
    'elif score >= 80:\n' +
    '    grade = "B"\n' +
    'elif score >= 70:\n' +
    '    grade = "C"\n' +
    'elif score >= 60:\n' +
    '    grade = "D"\n' +
    'else:\n' +
    '    grade = "F"\n\n' +
    'print(f"당신의 학점은 {grade}입니다!")');

  // [Slide 27] 실행 결과
  var s27 = createHeaderSlide(deck, "실행 결과");
  createCodeBlock(s27, 50, 120, 620, 100,
    '점수를 입력하세요: 85\n' +
    '당신의 학점은 B입니다!');
  addText(s27, "🎉 성적 판별기 완성!", 250, 260, 200, 24, COLORS.DARK, true, true);

  // =====================================================
  // PART 6. 실습 B - 홀짝 판별기 : 5장
  // =====================================================

  // [Slide 28] 실습 B: 홀짝 판별기
  var s28 = createHeaderSlide(deck, "실습 B: 홀짝 판별기");
  var oddEvenBox = s28.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 100, 620, 80);
  oddEvenBox.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s28, "🔢 숫자가 홀수인지 짝수인지 알려주는 프로그램!", 80, 120, 560, 20, COLORS.DARK, true, true);
  addText(s28, "💡 힌트: 2로 나눈 나머지가 0이면?", 50, 200, 620, 20, COLORS.DARK, true);

  // [Slide 29] 나머지 연산자 복습
  var s29 = createHeaderSlide(deck, "나머지 연산자 복습");
  createCodeBlock(s29, 50, 100, 620, 100,
    'print(4 % 2)  # 0 (짝수)\n' +
    'print(5 % 2)  # 1 (홀수)');
  var tipBox29 = s29.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 220, 620, 60);
  tipBox29.getFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s29, "💡 2로 나눈 나머지가 0이면 짝수!", 80, 235, 560, 18, COLORS.DARK, true, true);

  // [Slide 30] 완성 코드
  var s30 = createHeaderSlide(deck, "완성 코드");
  createCodeBlock(s30, 50, 100, 620, 180,
    'num = int(input("숫자를 입력하세요: "))\n\n' +
    'if num % 2 == 0:\n' +
    '    print(f"{num}은(는) 짝수입니다!")\n' +
    'else:\n' +
    '    print(f"{num}은(는) 홀수입니다!")');

  // [Slide 31] 실행 결과
  var s31 = createHeaderSlide(deck, "실행 결과");
  createCodeBlock(s31, 50, 120, 620, 100,
    '숫자를 입력하세요: 7\n' +
    '7은(는) 홀수입니다!');

  // [Slide 32] 0은 짝수? 홀수?
  var s32 = createHeaderSlide(deck, "0은 짝수? 홀수?");
  var zeroBox = s32.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 120, 520, 180);
  zeroBox.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s32, "0 % 2 = 0 이므로...", 150, 160, 420, 24, COLORS.DARK, true, true);
  addText(s32, "0은 짝수! ✅", 150, 220, 420, 28, COLORS.HAEDAL_YELLOW, true, true);
  addText(s32, "수학적으로도 0은 짝수로 분류해요", 100, 320, 520, 16, COLORS.GRAY, false, true);

  // =====================================================
  // PART 7. 도전 과제 : 3장
  // =====================================================

  // [Slide 33] 도전 과제
  var s33 = createHeaderSlide(deck, "도전 과제!");
  var challengeBox = s33.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 100, 620, 220);
  challengeBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s33, "🏆 나이를 입력받아 요금을 알려주는 프로그램\n\n• 7세 이하: 무료\n• 8~13세: 500원\n• 14~19세: 1000원\n• 20세 이상: 2000원", 80, 130, 560, 18, COLORS.DARK);

  // [Slide 34] 힌트
  var s34 = createHeaderSlide(deck, "힌트");
  createCodeBlock(s34, 50, 100, 620, 180,
    'age = int(input("나이: "))\n\n' +
    'if age <= 7:\n' +
    '    # 무료\n' +
    'elif age <= 13:\n' +
    '    # 500원\n' +
    '# ...');

  // [Slide 35] 정답 공개
  var s35 = createHeaderSlide(deck, "정답 공개!");
  createCodeBlock(s35, 50, 95, 620, 280,
    'age = int(input("나이를 입력하세요: "))\n\n' +
    'if age <= 7:\n' +
    '    price = 0\n' +
    'elif age <= 13:\n' +
    '    price = 500\n' +
    'elif age <= 19:\n' +
    '    price = 1000\n' +
    'else:\n' +
    '    price = 2000\n\n' +
    'print(f"요금: {price}원")');

  // =====================================================
  // PART 8. 마무리 : 3장
  // =====================================================

  // [Slide 36] 오늘 배운 것
  var s36 = createHeaderSlide(deck, "오늘 배운 것");
  var reviewBox = s36.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 100, 620, 280);
  reviewBox.getFill().setSolidFill(COLORS.CREAM_BG);
  reviewBox.getBorder().setWeight(3).getLineFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s36, "✅ 비교 연산자: == != > < >= <=\n\n✅ if, elif, else로 조건 분기\n\n✅ 논리 연산자: and, or, not\n\n✅ 들여쓰기가 중요!", 80, 130, 560, 20, COLORS.DARK);

  // [Slide 37] 예고
  var s37 = deck.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  s37.getBackground().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s37, "다음 시간에는...", W/2 - 200, H/2 - 100, 400, 28, COLORS.DARK, true, true);
  addText(s37, "🔁 반복문을 배워요!", W/2 - 200, H/2 - 30, 400, 24, COLORS.WHITE, true, true);
  addText(s37, "같은 코드를 100번 쓰지 않고\n한 번에 반복!", W/2 - 200, H/2 + 20, 400, 18, COLORS.WHITE, false, true);
  addText(s37, "7차시에서 만나요!", W/2 - 150, H/2 + 100, 300, 20, COLORS.DARK, true, true);

  // [Slide 38] 엔딩
  var s38 = deck.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  s38.getBackground().setSolidFill(COLORS.HAEDAL_YELLOW);
  var endBox = s38.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, W/2 - 250, H/2 - 120, 500, 240);
  endBox.getFill().setSolidFill(COLORS.WHITE);
  addText(s38, "수고했어요!", W/2 - 200, H/2 - 80, 400, 36, COLORS.DARK, true, true);
  addText(s38, "🔀 조건에 따라 다르게 동작하는\n프로그램을 만들 수 있어요!", W/2 - 200, H/2 - 20, 400, 18, COLORS.GRAY, false, true);
  addText(s38, "6차시 완료", W/2 - 100, H/2 + 60, 200, 24, COLORS.HAEDAL_YELLOW, true, true);

  Logger.log("슬라이드 생성 완료! (총 38장) URL: " + deck.getUrl());
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
  addText(slide, title, x + 10, y + 10, w - 20, 22, COLORS.DARK, true, true);
  addText(slide, content, x + 10, y + 45, w - 20, 13, COLORS.GRAY, false, true);
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
