/**
 * [해달에듀] 파이썬 프로그래밍 19차시: 알고리즘적 사고
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
function createPythonLesson19() {
  var deck = SlidesApp.create("[해달에듀] 파이썬 19차시 - 개발자처럼 생각하기!");
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
  addText(s01, "개발자처럼 생각하기!", W/2 - 250, H/2 - 100, 500, 40, COLORS.DARK, true, true);
  addText(s01, "🧠 알고리즘적 사고", W/2 - 250, H/2 - 20, 500, 24, COLORS.GRAY, false, true);
  addText(s01, "19차시 | 해달에듀", W/2 - 250, H/2 + 50, 500, 18, COLORS.GRAY, false, true);

  // [Slide 02] Part 3 시작!
  var s02 = createHeaderSlide(deck, "Part 3 시작!");
  addText(s02, "🧠 개발자의 뇌 장착하기", 50, 100, 620, 28, COLORS.DARK, true);
  var partBox = s02.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 80, 150, 560, 200);
  partBox.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s02, "• 알고리즘적 사고\n• 자료구조 (스택, 큐)\n• 탐색과 정렬\n\n더 효율적인 코드를 짜봐요!", 120, 180, 480, 18, COLORS.DARK);

  // [Slide 03] 질문
  var s03 = createHeaderSlide(deck, "알고리즘이 뭘까요?");
  createCard(s03, 50, 120, 200, 150, "🍳", "라면 끓이기\n순서?", COLORS.LIGHT_BG);
  createCard(s03, 270, 120, 200, 150, "🗺️", "길 찾기\n방법?", COLORS.LIGHT_BG);
  createCard(s03, 490, 120, 200, 150, "📋", "문제 해결\n단계?", COLORS.LIGHT_BG);
  var answerBox = s03.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 300, 520, 60);
  answerBox.getFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s03, "정답: 다 맞아요!", 150, 315, 420, 20, COLORS.DARK, true, true);

  // [Slide 04] 오늘의 미션
  var s04 = createHeaderSlide(deck, "오늘의 미션!");
  var goalBox = s04.insertShape(SlidesApp.ShapeType.RECTANGLE, 100, 120, 520, 260);
  goalBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  goalBox.getBorder().setDashStyle(SlidesApp.DashStyle.DASH).setWeight(2).getLineFill().setSolidFill(COLORS.GRAY);
  addText(s04, "☐ 1. 알고리즘의 개념 이해\n\n☐ 2. 문제 분해 연습\n\n☐ 3. 리스트 컴프리헨션\n\n☐ 4. 효율적인 코드 작성", 140, 140, 440, 20, COLORS.DARK);

  // =====================================================
  // PART 2. 알고리즘이란 (Concept 1) : 6장
  // =====================================================

  // [Slide 05] 알고리즘(Algorithm)
  var s05 = createHeaderSlide(deck, "알고리즘(Algorithm)");
  addText(s05, "📋 문제를 해결하는 단계적 절차", 50, 100, 620, 24, COLORS.DARK, true);
  var stepBox = s05.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 80, 150, 560, 200);
  stepBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s05, "1. 문제 이해\n2. 계획 세우기\n3. 단계별 실행\n4. 결과 확인", 120, 180, 480, 22, COLORS.DARK);

  // [Slide 06] 일상 속 알고리즘
  var s06 = createHeaderSlide(deck, "일상 속 알고리즘");
  addText(s06, "🍳 라면 끓이기:", 50, 100, 620, 24, COLORS.DARK, true);
  var ramenBox = s06.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 80, 150, 560, 210);
  ramenBox.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s06, "1. 물 끓이기\n2. 면 넣기\n3. 스프 넣기\n4. 3분 기다리기\n5. 맛있게 먹기", 120, 175, 480, 20, COLORS.DARK);

  // [Slide 07] 컴퓨터 알고리즘
  var s07 = createHeaderSlide(deck, "컴퓨터 알고리즘");
  addText(s07, "💻 컴퓨터가 이해할 수 있도록\n명확하게 정의된 절차!", 50, 100, 620, 22, COLORS.DARK, true);
  var flowBox = s07.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 80, 200, 560, 120);
  flowBox.getFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s07, "입력 → 처리 → 출력\n\n애매함 없이 정확하게!", 120, 225, 480, 20, COLORS.DARK, false, true);

  // [Slide 08] 알고리즘의 특징
  var s08 = createHeaderSlide(deck, "알고리즘의 특징");
  createCard(s08, 50, 120, 160, 130, "✅", "명확성\n모호하지 않음", COLORS.LIGHT_BG);
  createCard(s08, 230, 120, 160, 130, "✅", "유한성\n끝이 있음", COLORS.LIGHT_BG);
  createCard(s08, 410, 120, 160, 130, "✅", "효율성\n빠르게", COLORS.LIGHT_BG);
  createCard(s08, 230, 270, 160, 100, "✅", "정확성\n올바른 결과", COLORS.CREAM_BG);

  // [Slide 09] 레시피와 알고리즘
  var s09 = createHeaderSlide(deck, "레시피와 알고리즘");
  addText(s09, "👨‍🍳 요리사 = 컴퓨터", 50, 110, 300, 20, COLORS.DARK, true);
  addText(s09, "📝 레시피 = 알고리즘", 50, 150, 300, 20, COLORS.DARK, true);
  addText(s09, "🥘 요리 = 결과", 50, 190, 300, 20, COLORS.DARK, true);
  var analogyBox = s09.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 240, 620, 100);
  analogyBox.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s09, "재료(입력)를 레시피(알고리즘)대로\n처리하면 요리(출력) 완성!", 80, 265, 560, 18, COLORS.DARK, false, true);

  // [Slide 10] 문제 분해 연습
  var s10 = createHeaderSlide(deck, "문제 분해 연습");
  addText(s10, '📋 "평균 구하기" 분해:', 50, 100, 620, 22, COLORS.DARK, true);
  var decomposeBox = s10.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 80, 150, 560, 200);
  decomposeBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s10, "1. 숫자들을 입력받는다\n2. 모든 숫자를 더한다\n3. 개수로 나눈다\n4. 결과를 출력한다", 120, 180, 480, 22, COLORS.DARK);

  // =====================================================
  // PART 3. 문제 해결 과정 (Concept 2) : 5장
  // =====================================================

  // [Slide 11] 문제 해결 4단계
  var s11 = createHeaderSlide(deck, "문제 해결 4단계");
  createCard(s11, 50, 120, 145, 130, "1️⃣", "이해\n문제가 뭐지?", COLORS.LIGHT_BG);
  createCard(s11, 210, 120, 145, 130, "2️⃣", "계획\n어떻게 풀지?", COLORS.LIGHT_BG);
  createCard(s11, 370, 120, 145, 130, "3️⃣", "실행\n코드로 구현!", COLORS.LIGHT_BG);
  createCard(s11, 530, 120, 145, 130, "4️⃣", "검토\n제대로 됐나?", COLORS.LIGHT_BG);

  // [Slide 12] 예시: 1~100 중 3의 배수 합
  var s12 = createHeaderSlide(deck, "예시: 1~100 중 3의 배수 합");
  addText(s12, "1️⃣ 이해: 3, 6, 9...99 더하기", 50, 110, 620, 18, COLORS.DARK, true);
  addText(s12, "2️⃣ 계획:\n   • 1~100 반복\n   • 3으로 나눠지면 더하기", 50, 150, 620, 18, COLORS.DARK);
  addText(s12, "3️⃣ 실행: 코드 작성", 50, 240, 620, 18, COLORS.DARK, true);
  addText(s12, "4️⃣ 검토: 결과 확인", 50, 280, 620, 18, COLORS.DARK, true);

  // [Slide 13] 코드로 구현
  var s13 = createHeaderSlide(deck, "코드로 구현");
  createCodeBlock(s13, 50, 100, 620, 180, 'total = 0\nfor i in range(1, 101):\n    if i % 3 == 0:\n        total += i\n\nprint(total)  # 1683');

  // [Slide 14] 의사코드 (Pseudocode)
  var s14 = createHeaderSlide(deck, "의사코드 (Pseudocode)");
  addText(s14, "📝 코드처럼 생긴 한글 설명!", 50, 100, 620, 22, COLORS.DARK, true);
  createCodeBlock(s14, 80, 150, 560, 150, '합계 = 0\n1부터 100까지 반복:\n    만약 숫자가 3의 배수면:\n        합계에 더하기\n합계 출력');
  addText(s14, "💡 먼저 생각을 정리!", 50, 320, 620, 18, COLORS.GRAY);

  // [Slide 15] 연습: 소수 찾기
  var s15 = createHeaderSlide(deck, "연습: 소수 찾기");
  addText(s15, "📋 의사코드로 먼저 작성:", 50, 100, 620, 20, COLORS.DARK, true);
  createCodeBlock(s15, 80, 150, 560, 180, '숫자 입력받기\n2부터 숫자-1까지 반복:\n    나눠떨어지면 소수 아님\n다 확인했는데 안 나눠졌으면 소수');

  // =====================================================
  // PART 4. 리스트 컴프리헨션 (Concept 3) : 6장
  // =====================================================

  // [Slide 16] 리스트 컴프리헨션이란?
  var s16 = createHeaderSlide(deck, "리스트 컴프리헨션이란?");
  addText(s16, "📋 리스트를 한 줄로 만드는 파이썬 문법!", 50, 100, 620, 24, COLORS.DARK, true);
  var benefitBox = s16.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 80, 160, 560, 180);
  benefitBox.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s16, "✅ 더 짧고\n✅ 더 읽기 쉽고\n✅ 더 빠름!", 150, 200, 400, 24, COLORS.DARK, false, true);

  // [Slide 17] 기존 방식 vs 컴프리헨션
  var s17 = createHeaderSlide(deck, "기존 방식 vs 컴프리헨션");
  createCodeBlock(s17, 50, 100, 620, 240, '# 기존 방식: 4줄\nsquares = []\nfor i in range(1, 6):\n    squares.append(i ** 2)\n\n# 컴프리헨션: 1줄!\nsquares = [i ** 2 for i in range(1, 6)]\n# [1, 4, 9, 16, 25]');

  // [Slide 18] 기본 문법
  var s18 = createHeaderSlide(deck, "기본 문법");
  createCodeBlock(s18, 80, 110, 560, 80, '[표현식 for 변수 in 반복가능]');
  var explainBox = s18.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 80, 210, 560, 140);
  explainBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s18, "• 표현식: 각 요소에 적용할 계산\n• 변수: 반복 변수\n• 반복가능: 리스트, range 등", 100, 235, 520, 18, COLORS.DARK);

  // [Slide 19] 다양한 예시
  var s19 = createHeaderSlide(deck, "다양한 예시");
  createCodeBlock(s19, 50, 100, 620, 240, '# 1~10의 제곱\n[x**2 for x in range(1, 11)]\n\n# 문자열 대문자로\n[s.upper() for s in ["a", "b", "c"]]\n\n# 길이 구하기\n[len(w) for w in ["hello", "world"]]');

  // [Slide 20] 조건 추가 (필터링)
  var s20 = createHeaderSlide(deck, "조건 추가 (필터링)");
  createCodeBlock(s20, 50, 100, 620, 200, '# 짝수만\n[x for x in range(10) if x % 2 == 0]\n# [0, 2, 4, 6, 8]\n\n# 3의 배수만\n[x for x in range(1, 31) if x % 3 == 0]\n# [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]');
  addText(s20, "💡 if로 조건 필터링!", 50, 320, 620, 18, COLORS.GRAY);

  // [Slide 21] 조건부 값 (삼항 연산)
  var s21 = createHeaderSlide(deck, "조건부 값 (삼항 연산)");
  createCodeBlock(s21, 50, 100, 620, 180, '# 짝수면 "짝", 홀수면 "홀"\n["짝" if x % 2 == 0 else "홀" for x in range(5)]\n# ["짝", "홀", "짝", "홀", "짝"]');
  addText(s21, "💡 if-else로 값 변환!", 50, 300, 620, 18, COLORS.GRAY);

  // =====================================================
  // PART 5. 실습 (Practice) : 6장
  // =====================================================

  // [Slide 22] 실습 1: FizzBuzz
  var s22 = createHeaderSlide(deck, "실습 1: FizzBuzz");
  addText(s22, "📋 1~30 출력하되:", 50, 100, 620, 20, COLORS.DARK, true);
  var ruleBox = s22.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 80, 150, 560, 200);
  ruleBox.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s22, "• 3의 배수면 \"Fizz\"\n• 5의 배수면 \"Buzz\"\n• 둘 다면 \"FizzBuzz\"", 120, 190, 480, 22, COLORS.DARK);

  // [Slide 23] FizzBuzz 코드
  var s23 = createHeaderSlide(deck, "FizzBuzz 코드");
  createCodeBlock(s23, 30, 90, 660, 290, 'result = []\nfor i in range(1, 31):\n    if i % 15 == 0:\n        result.append("FizzBuzz")\n    elif i % 3 == 0:\n        result.append("Fizz")\n    elif i % 5 == 0:\n        result.append("Buzz")\n    else:\n        result.append(i)\n\nprint(result)');

  // [Slide 24] 실습 2: 완전수 찾기
  var s24 = createHeaderSlide(deck, "실습 2: 완전수 찾기");
  addText(s24, "📋 약수의 합이 자기 자신인 수 (6 = 1+2+3)", 50, 100, 620, 18, COLORS.DARK, true);
  createCodeBlock(s24, 50, 150, 620, 200, 'def is_perfect(n):\n    divisors = [i for i in range(1, n) if n % i == 0]\n    return sum(divisors) == n\n\nperfects = [n for n in range(1, 1001) if is_perfect(n)]\nprint(perfects)  # [6, 28, 496]');

  // [Slide 25] 실습 3: 행렬 변환
  var s25 = createHeaderSlide(deck, "실습 3: 행렬 변환");
  createCodeBlock(s25, 50, 100, 620, 220, '# 2D 리스트 만들기\nmatrix = [[i*3+j for j in range(3)] for i in range(3)]\n# [[0, 1, 2], [3, 4, 5], [6, 7, 8]]\n\n# 평탄화 (2D → 1D)\nflat = [x for row in matrix for x in row]\n# [0, 1, 2, 3, 4, 5, 6, 7, 8]');

  // [Slide 26] 실습 4: 단어 필터링
  var s26 = createHeaderSlide(deck, "실습 4: 단어 필터링");
  createCodeBlock(s26, 40, 95, 640, 270, 'words = ["apple", "banana", "cat", "dog", "elephant"]\n\n# 5글자 이상 단어만\nlong_words = [w for w in words if len(w) >= 5]\nprint(long_words)\n# ["apple", "banana", "elephant"]\n\n# 각 단어의 첫 글자\ninitials = [w[0] for w in words]\nprint(initials)\n# ["a", "b", "c", "d", "e"]');

  // [Slide 27] 컴프리헨션 정리
  var s27 = createHeaderSlide(deck, "컴프리헨션 정리");
  var tableBox = s27.insertShape(SlidesApp.ShapeType.RECTANGLE, 50, 100, 620, 260);
  tableBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  tableBox.getBorder().setWeight(2).getLineFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s27, "패턴                             용도", 70, 120, 580, 16, COLORS.DARK, true);
  addText(s27, "────────────────────────────────────────", 70, 145, 580, 12, COLORS.GRAY);
  addText(s27, "[x for x in 리스트]              그대로 복사\n\n[f(x) for x in 리스트]           변환 적용\n\n[x for x in 리스트 if 조건]      필터링\n\n[a if 조건 else b for x]         조건부 값", 70, 170, 580, 16, COLORS.DARK);

  // =====================================================
  // PART 6. 효율성 생각하기 (Advanced) : 4장
  // =====================================================

  // [Slide 28] 같은 결과, 다른 효율
  var s28 = createHeaderSlide(deck, "같은 결과, 다른 효율");
  createCard(s28, 100, 130, 250, 180, "🐢", "느린 방법", COLORS.LIGHT_BG);
  createCard(s28, 380, 130, 250, 180, "🐇", "빠른 방법", COLORS.CREAM_BG);
  addText(s28, "어떻게 하면 더 빠를까?", W/2 - 150, 340, 300, 20, COLORS.DARK, true, true);

  // [Slide 29] 예시: 합계 구하기
  var s29 = createHeaderSlide(deck, "예시: 합계 구하기");
  createCodeBlock(s29, 50, 100, 620, 240, '# 방법 1: 반복문\ntotal = 0\nfor i in range(1, 101):\n    total += i\n\n# 방법 2: sum 함수\ntotal = sum(range(1, 101))\n\n# 방법 3: 수학 공식\ntotal = 100 * 101 // 2');
  addText(s29, "결과는 같지만 속도가 다름!", 50, 360, 620, 16, COLORS.GRAY);

  // [Slide 30] 왜 효율이 중요할까?
  var s30 = createHeaderSlide(deck, "왜 효율이 중요할까?");
  addText(s30, "📊 데이터가 많아지면...", 50, 100, 620, 24, COLORS.DARK, true);
  var dataBox = s30.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 80, 160, 560, 180);
  dataBox.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s30, "100개 → 1초\n10,000개 → 100초\n1,000,000개 → ?시간\n\n효율적인 코드가 필수!", 120, 190, 480, 20, COLORS.DARK, false, true);

  // [Slide 31] 다음 시간부터
  var s31 = createHeaderSlide(deck, "다음 시간부터");
  addText(s31, "📚 자료구조를 배워요!", 50, 110, 620, 28, COLORS.DARK, true);
  var nextBox = s31.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 80, 170, 560, 180);
  nextBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s31, "📚 스택: 쌓기/빼기\n🎫 큐: 줄 서기\n\n데이터를 효율적으로 관리!", 120, 200, 480, 22, COLORS.DARK);

  // =====================================================
  // PART 7. 마무리 (Finish) : 4장
  // =====================================================

  // [Slide 32] 도전 과제
  var s32 = createHeaderSlide(deck, "도전 과제!");
  var challengeBox = s32.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 80, 120, 560, 230);
  challengeBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s32, "🏆 리스트 컴프리헨션으로 한 줄 코드!", 120, 150, 480, 22, COLORS.DARK, true, true);
  addText(s32, "1. 1~100 중 7의 배수 리스트\n2. 문자열에서 모음만 추출\n3. 각 숫자의 자릿수 합 리스트", 120, 210, 480, 18, COLORS.DARK);

  // [Slide 33] 오늘 배운 것
  var s33 = createHeaderSlide(deck, "오늘 배운 것");
  var reviewBox = s33.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 80, 110, 560, 260);
  reviewBox.getFill().setSolidFill(COLORS.CREAM_BG);
  reviewBox.getBorder().setWeight(3).getLineFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s33, "✅ 알고리즘 = 문제 해결 절차\n\n✅ 문제 해결 4단계:\n   이해-계획-실행-검토\n\n✅ 리스트 컴프리헨션:\n   [표현식 for x in 리스트]\n\n✅ 조건 필터링: if 추가", 120, 140, 480, 18, COLORS.DARK);

  // [Slide 34] 예고
  var s34 = deck.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  s34.getBackground().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s34, "다음 시간에는...", W/2 - 200, H/2 - 100, 400, 28, COLORS.DARK, true, true);
  addText(s34, "📚 스택(Stack) 자료구조!", W/2 - 200, H/2 - 30, 400, 24, COLORS.WHITE, true, true);
  addText(s34, "브라우저 뒤로가기의 원리!", W/2 - 200, H/2 + 30, 400, 20, COLORS.WHITE, false, true);
  addText(s34, "20차시에서 만나요!", W/2 - 150, H/2 + 100, 300, 20, COLORS.DARK, true, true);

  // [Slide 35] 엔딩
  var s35 = deck.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  s35.getBackground().setSolidFill(COLORS.HAEDAL_YELLOW);
  var endBox = s35.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, W/2 - 250, H/2 - 120, 500, 240);
  endBox.getFill().setSolidFill(COLORS.WHITE);
  addText(s35, "수고했어요!", W/2 - 200, H/2 - 80, 400, 36, COLORS.DARK, true, true);
  addText(s35, "🧠 개발자처럼 생각하는\n첫 걸음!", W/2 - 200, H/2 - 20, 400, 20, COLORS.GRAY, false, true);
  addText(s35, "19차시 완료", W/2 - 100, H/2 + 60, 200, 24, COLORS.HAEDAL_YELLOW, true, true);

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

function createCodeBlock(slide, x, y, w, h, code) {
  var codeBox = slide.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, x, y, w, h);
  codeBox.getFill().setSolidFill(COLORS.CODE_BG);
  codeBox.getBorder().setTransparent();
  var textBox = slide.insertTextBox(code, x + 20, y + 15, w - 40, h - 30);
  var style = textBox.getText().getTextStyle();
  style.setFontSize(16).setForegroundColor(COLORS.CODE_WHITE).setFontFamily("Consolas");
  return codeBox;
}
