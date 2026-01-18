/**
 * [해달에듀] 파이썬 프로그래밍 23차시: 이진 탐색
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
function createPythonLesson23() {
  var deck = SlidesApp.create("[해달에듀] 파이썬 23차시 - 이진 탐색");
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
  addText(s01, "반으로 나눠서 찾기!", W/2 - 250, H/2 - 100, 500, 44, COLORS.DARK, true, true);
  addText(s01, "⚡ 이진 탐색 (Binary Search)", W/2 - 250, H/2 - 20, 500, 24, COLORS.GRAY, false, true);
  addText(s01, "23차시 | 해달에듀", W/2 - 250, H/2 + 50, 500, 18, COLORS.GRAY, false, true);

  // [Slide 02] 질문 - Up/Down 게임
  var s02 = createHeaderSlide(deck, "Up/Down 게임 기억나요?");
  addText(s02, '🎮 "50!" → "UP!" → "75!" → "DOWN!" → "62!" → "정답!"', 50, 110, 620, 18, COLORS.DARK, true);
  createImagePlaceholder(s02, 120, 160, 480, 130, "Up/Down 게임 이미지");
  var answerBox = s02.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 310, 520, 60);
  answerBox.getFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s02, "반씩 줄여가며 찾는 게 이진 탐색!", 130, 325, 460, 20, COLORS.DARK, true, true);

  // [Slide 03] 선형 vs 이진 탐색
  var s03 = createHeaderSlide(deck, "선형 vs 이진 탐색");
  addText(s03, "100만 개 데이터에서 찾기:", 50, 100, 620, 20, COLORS.DARK, true);
  createCard(s03, 80, 150, 260, 120, "🐢 선형 탐색", "최대 100만 번", COLORS.LIGHT_BG);
  createCard(s03, 380, 150, 260, 120, "⚡ 이진 탐색", "최대 20번!", COLORS.HAEDAL_YELLOW);
  var diffBox = s03.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 150, 300, 420, 60);
  diffBox.getFill().setSolidFill(COLORS.RED_HIGHLIGHT);
  addText(s03, "50,000배 차이!", 200, 315, 320, 24, COLORS.WHITE, true, true);

  // [Slide 04] 오늘의 미션
  var s04 = createHeaderSlide(deck, "오늘의 미션!");
  var goalBox = s04.insertShape(SlidesApp.ShapeType.RECTANGLE, 100, 120, 520, 260);
  goalBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  goalBox.getBorder().setDashStyle(SlidesApp.DashStyle.DASH).setWeight(2).getLineFill().setSolidFill(COLORS.GRAY);
  addText(s04, "☐ 1. 이진 탐색 원리 이해\n\n☐ 2. 직접 구현하기\n\n☐ 3. 선형 탐색과 비교\n\n☐ 4. 숫자 맞추기 게임 분석", 140, 140, 440, 20, COLORS.DARK);

  // =====================================================
  // PART 2. 이진 탐색 원리 (Concept 1) : 6장
  // =====================================================

  // [Slide 05] 이진 탐색이란?
  var s05 = createHeaderSlide(deck, "이진 탐색이란?");
  addText(s05, "⚡ 정렬된 데이터를 반씩 나눠가며 찾기!", 50, 100, 620, 22, COLORS.DARK, true);
  var stepsBox = s05.insertShape(SlidesApp.ShapeType.RECTANGLE, 80, 160, 560, 150);
  stepsBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s05, "1. 중간값 확인\n\n2. 찾는 값과 비교\n\n3. 반을 버리고 나머지에서 반복", 120, 180, 480, 18, COLORS.DARK);

  // [Slide 06] 필수 조건: 정렬
  var s06 = createHeaderSlide(deck, "⚠️ 필수 조건: 정렬!");
  addText(s06, "이진 탐색은 정렬된 데이터에서만 가능!", 50, 100, 620, 20, COLORS.RED_HIGHLIGHT, true);
  createCard(s06, 80, 160, 260, 100, "❌ 안됨", "[5, 2, 8, 1, 9]\n비정렬", COLORS.LIGHT_BG);
  createCard(s06, 380, 160, 260, 100, "✅ 됨", "[1, 2, 5, 8, 9]\n정렬됨", COLORS.HAEDAL_YELLOW);
  var tipBox = s06.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 290, 520, 70);
  tipBox.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s06, "정렬 안 되어 있으면 선형 탐색 사용!", 130, 310, 460, 18, COLORS.DARK, true, true);

  // [Slide 07] 이진 탐색 과정
  var s07 = createHeaderSlide(deck, "이진 탐색 과정");
  createCodeBlock(s07, 50, 95, 620, 280, '[1, 3, 5, 7, 9, 11, 13] 에서 9 찾기\n\n1단계: 중간(7) < 9 → 오른쪽만 확인\n        [9, 11, 13]\n\n2단계: 중간(11) > 9 → 왼쪽만 확인\n        [9]\n\n3단계: 중간(9) == 9 → 찾았다!\n\n3번 만에 발견!');

  // [Slide 08] 사전에서 단어 찾기
  var s08 = createHeaderSlide(deck, "사전에서 단어 찾기");
  addText(s08, '📖 "Python"을 찾을 때:', 50, 100, 620, 20, COLORS.DARK, true);
  var stepsBox8 = s08.insertShape(SlidesApp.ShapeType.RECTANGLE, 80, 150, 560, 160);
  stepsBox8.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s08, "1. 책 중간을 펼침 → M... P는 더 뒤\n\n2. 뒷부분 중간 펼침 → R... P는 더 앞\n\n3. 앞부분 중간 펼침 → P 발견!", 110, 175, 500, 18, COLORS.DARK);
  addText(s08, "우리도 이미 이진 탐색을 쓰고 있어요!", 80, 330, 560, 18, COLORS.GRAY, true, true);

  // [Slide 09] 왜 빠를까?
  var s09 = createHeaderSlide(deck, "왜 빠를까?");
  addText(s09, "📊 매번 절반씩 줄어듦!", 50, 100, 620, 22, COLORS.DARK, true);
  var explainBox = s09.insertShape(SlidesApp.ShapeType.RECTANGLE, 80, 155, 560, 180);
  explainBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s09, "N개 데이터:\n\n• 1번: N/2개 남음\n• 2번: N/4개 남음\n• 3번: N/8개 남음\n• ... log₂N번: 1개 남음", 120, 175, 480, 16, COLORS.DARK);

  // [Slide 10] 시간 복잡도 비교
  var s10 = createHeaderSlide(deck, "시간 복잡도 비교");
  var tableBox10 = s10.insertShape(SlidesApp.ShapeType.RECTANGLE, 60, 100, 600, 260);
  tableBox10.getFill().setSolidFill(COLORS.LIGHT_BG);
  tableBox10.getBorder().setWeight(2).getLineFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s10, "              선형 탐색        이진 탐색", 80, 120, 560, 18, COLORS.DARK, true);
  addText(s10, "───────────────────────────────────────", 80, 145, 560, 12, COLORS.GRAY);
  addText(s10, "복잡도        O(N)           O(log N)\n\n1000개        1000번          10번\n\n100만개       100만번         20번\n\n10억개        10억번          30번", 80, 165, 560, 18, COLORS.DARK);

  // =====================================================
  // PART 3. 이진 탐색 구현 (Concept 2) : 6장
  // =====================================================

  // [Slide 11] 이진 탐색 구현
  var s11 = createHeaderSlide(deck, "이진 탐색 구현");
  createCodeBlock(s11, 30, 85, 660, 300, 'def binary_search(lst, target):\n    left = 0\n    right = len(lst) - 1\n    \n    while left <= right:\n        mid = (left + right) // 2\n        \n        if lst[mid] == target:\n            return mid  # 찾았다!\n        elif lst[mid] < target:\n            left = mid + 1  # 오른쪽 탐색\n        else:\n            right = mid - 1  # 왼쪽 탐색\n    \n    return -1  # 못 찾음');

  // [Slide 12] 변수 설명
  var s12 = createHeaderSlide(deck, "변수 설명");
  var varBox = s12.insertShape(SlidesApp.ShapeType.RECTANGLE, 80, 110, 560, 230);
  varBox.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s12, "• left: 탐색 범위의 왼쪽 끝\n\n• right: 탐색 범위의 오른쪽 끝\n\n• mid: 중간 위치\n        (left + right) // 2", 120, 145, 480, 20, COLORS.DARK);
  createImagePlaceholder(s12, 150, 350, 420, 30, "left, mid, right 시각화");

  // [Slide 13] 동작 과정 시각화
  var s13 = createHeaderSlide(deck, "동작 과정 시각화");
  createCodeBlock(s13, 80, 100, 560, 200, '[1, 3, 5, 7, 9] 에서 7 찾기\n\nleft=0, right=4, mid=2: 5 < 7\n→ left = 3\n\nleft=3, right=4, mid=3: 7 == 7\n→ 찾음! (인덱스 3)');
  addText(s13, "중간값과 비교하며 범위를 좁힘!", 80, 320, 560, 16, COLORS.GRAY);

  // [Slide 14] 테스트
  var s14 = createHeaderSlide(deck, "테스트");
  createCodeBlock(s14, 50, 100, 620, 230, 'numbers = [1, 3, 5, 7, 9, 11, 13, 15]\n\nprint(binary_search(numbers, 7))   # 3\nprint(binary_search(numbers, 1))   # 0\nprint(binary_search(numbers, 15))  # 7\nprint(binary_search(numbers, 4))   # -1');
  addText(s14, "정렬된 리스트에서만 사용!", 50, 350, 620, 14, COLORS.GRAY);

  // [Slide 15] 과정 출력 버전
  var s15 = createHeaderSlide(deck, "과정 출력 버전");
  createCodeBlock(s15, 20, 80, 680, 310, 'def binary_search_verbose(lst, target):\n    left, right = 0, len(lst) - 1\n    step = 1\n    \n    while left <= right:\n        mid = (left + right) // 2\n        print(f"{step}단계: [{left}:{right}] 중간값 {lst[mid]}")\n        \n        if lst[mid] == target:\n            print(f"→ 찾았다! (인덱스 {mid})")\n            return mid\n        elif lst[mid] < target:\n            print(f"→ {lst[mid]} < {target}, 오른쪽 탐색")\n            left = mid + 1\n        else:\n            print(f"→ {lst[mid]} > {target}, 왼쪽 탐색")\n            right = mid - 1\n        step += 1\n    return -1');

  // [Slide 16] bisect 모듈
  var s16 = createHeaderSlide(deck, "bisect 모듈");
  createCodeBlock(s16, 50, 100, 620, 220, 'import bisect\n\nnumbers = [1, 3, 5, 7, 9]\n\n# 삽입 위치 찾기\npos = bisect.bisect_left(numbers, 6)\nprint(pos)  # 3 (5와 7 사이)\n\n# 정렬 유지하며 삽입\nbisect.insort(numbers, 6)\nprint(numbers)  # [1, 3, 5, 6, 7, 9]');
  addText(s16, "파이썬 내장 이진 탐색!", 50, 340, 620, 16, COLORS.GRAY);

  // =====================================================
  // PART 4. 실습 A - 성능 비교 (Practice A) : 5장
  // =====================================================

  // [Slide 17] 실습 A 안내
  var s17 = createHeaderSlide(deck, "실습 A: 성능 비교");
  addText(s17, "⏱️ 같은 데이터에서 두 탐색 방법의 시간 비교!", 50, 110, 620, 20, COLORS.DARK, true);
  createCard(s17, 80, 170, 260, 120, "🐢 선형 탐색", "처음부터 끝까지", COLORS.LIGHT_BG);
  createCard(s17, 380, 170, 260, 120, "⚡ 이진 탐색", "반씩 나눠서", COLORS.HAEDAL_YELLOW);
  addText(s17, "어떤 게 더 빠를까요?", 200, 320, 320, 20, COLORS.GRAY, true, true);

  // [Slide 18] 비교 코드
  var s18 = createHeaderSlide(deck, "비교 코드");
  createCodeBlock(s18, 20, 80, 680, 310, 'import time\n\n# 100만 개 정렬된 데이터\ndata = list(range(1000000))\ntarget = 999999  # 최악의 경우\n\n# 선형 탐색 시간\nstart = time.time()\nfor i, v in enumerate(data):\n    if v == target:\n        break\nlinear_time = time.time() - start\n\n# 이진 탐색 시간\nstart = time.time()\nbinary_search(data, target)\nbinary_time = time.time() - start\n\nprint(f"선형 탐색: {linear_time:.6f}초")\nprint(f"이진 탐색: {binary_time:.6f}초")\nprint(f"속도 차이: {linear_time/binary_time:.0f}배!")');

  // [Slide 19] 실행 결과
  var s19 = createHeaderSlide(deck, "실행 결과");
  createCodeBlock(s19, 100, 120, 520, 160, '선형 탐색: 0.123456초\n이진 탐색: 0.000012초\n\n속도 차이: 10000배!');
  var resultBox = s19.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 300, 520, 70);
  resultBox.getFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s19, "⚡ 이진 탐색이 훨씬 빠름!", 150, 320, 420, 24, COLORS.DARK, true, true);

  // [Slide 20] 다양한 크기 테스트
  var s20 = createHeaderSlide(deck, "다양한 크기 테스트");
  createCodeBlock(s20, 50, 100, 620, 220, 'for size in [1000, 10000, 100000, 1000000]:\n    data = list(range(size))\n    target = size - 1\n    \n    # 시간 측정...\n    print(f"데이터 {size}개:")\n    print(f"  선형: {linear_time:.6f}초")\n    print(f"  이진: {binary_time:.6f}초")');

  // [Slide 21] 결론
  var s21 = createHeaderSlide(deck, "결론");
  addText(s21, "📊 데이터가 많을수록 차이가 커짐!", 50, 100, 620, 22, COLORS.DARK, true);
  createCard(s21, 80, 160, 260, 100, "작은 데이터", "큰 차이 없음", COLORS.LIGHT_BG);
  createCard(s21, 380, 160, 260, 100, "큰 데이터", "이진 탐색 필수!", COLORS.HAEDAL_YELLOW);
  var warningBox = s21.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 290, 520, 70);
  warningBox.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s21, "⚠️ 단, 정렬된 데이터에서만 사용!", 130, 310, 460, 20, COLORS.DARK, true, true);

  // =====================================================
  // PART 5. 실습 B - Up/Down 분석 (Practice B) : 6장
  // =====================================================

  // [Slide 22] 실습 B 안내
  var s22 = createHeaderSlide(deck, "실습 B: Up/Down 게임 분석");
  addText(s22, "🎮 17차시에 만든 Up/Down 게임!", 50, 100, 620, 22, COLORS.DARK, true);
  var connectionBox = s22.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 160, 520, 100);
  connectionBox.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s22, "사실 이건 이진 탐색의 원리예요!\n최적의 전략을 분석해봅시다!", 130, 185, 460, 18, COLORS.DARK, false, true);

  // [Slide 23] 최적의 전략
  var s23 = createHeaderSlide(deck, "최적의 전략");
  addText(s23, "1~100 사이 숫자 맞추기:", 50, 100, 620, 20, COLORS.DARK, true);
  var strategyBox = s23.insertShape(SlidesApp.ShapeType.RECTANGLE, 80, 150, 560, 140);
  strategyBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s23, "1. 50 추측 → UP/DOWN\n2. 범위 반으로 줄임\n3. 다시 중간값 추측", 120, 175, 480, 18, COLORS.DARK);
  var resultBox23 = s23.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 310, 520, 60);
  resultBox23.getFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s23, "이렇게 하면 최대 7번에 맞출 수 있어요! (log₂100 ≈ 7)", 110, 325, 500, 16, COLORS.DARK, true, true);

  // [Slide 24] 컴퓨터 자동 플레이
  var s24 = createHeaderSlide(deck, "컴퓨터 자동 플레이");
  createCodeBlock(s24, 25, 85, 670, 300, 'def auto_guess(answer, low=1, high=100):\n    attempts = 0\n    \n    while low <= high:\n        attempts += 1\n        guess = (low + high) // 2\n        print(f"{attempts}번째: {guess} 추측")\n        \n        if guess == answer:\n            print(f"정답! {attempts}번 만에 맞춤")\n            return attempts\n        elif guess < answer:\n            print("→ UP!")\n            low = guess + 1\n        else:\n            print("→ DOWN!")\n            high = guess - 1\n\nauto_guess(73)');

  // [Slide 25] 실행 결과
  var s25 = createHeaderSlide(deck, "실행 결과");
  createCodeBlock(s25, 100, 100, 520, 240, '1번째: 50 추측\n→ UP!\n2번째: 75 추측\n→ DOWN!\n3번째: 62 추측\n→ UP!\n4번째: 68 추측\n→ UP!\n5번째: 71 추측\n→ UP!\n6번째: 73 추측\n정답! 6번 만에 맞춤');

  // [Slide 26] 평균 횟수 계산
  var s26 = createHeaderSlide(deck, "평균 횟수 계산");
  createCodeBlock(s26, 80, 100, 560, 200, 'def auto_guess_silent(answer):\n    # 조용히 실행하는 버전\n    ...\n\ntotal = 0\nfor answer in range(1, 101):\n    attempts = auto_guess_silent(answer)\n    total += attempts\n\navg = total / 100\nprint(f"평균 시도 횟수: {avg:.2f}번")\n# 약 5.8번');
  addText(s26, "평균 6번 이하로 맞출 수 있어요!", 80, 320, 560, 18, COLORS.GRAY, true, true);

  // [Slide 27] 게임과 알고리즘
  var s27 = createHeaderSlide(deck, "게임과 알고리즘");
  var connectionBox27 = s27.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 80, 110, 560, 180);
  connectionBox27.getFill().setSolidFill(COLORS.CREAM_BG);
  connectionBox27.getBorder().setWeight(3).getLineFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s27, "🎮 Up/Down 게임 = 이진 탐색 응용!\n\n재미있는 게임이\n사실은 효율적인 알고리즘!", 120, 145, 480, 22, COLORS.DARK, false, true);
  addText(s27, "알고리즘은 우리 주변에 숨어있어요!", 80, 320, 560, 18, COLORS.GRAY, true, true);

  // =====================================================
  // PART 6. 이진 탐색 응용 (Advanced) : 4장
  // =====================================================

  // [Slide 28] 이진 탐색 활용
  var s28 = createHeaderSlide(deck, "이진 탐색 활용");
  createCard(s28, 40, 100, 200, 80, "📖", "사전에서\n단어 찾기", COLORS.LIGHT_BG);
  createCard(s28, 260, 100, 200, 80, "📞", "전화번호부\n검색", COLORS.LIGHT_BG);
  createCard(s28, 480, 100, 200, 80, "🔢", "정렬된\n데이터 검색", COLORS.LIGHT_BG);
  createCard(s28, 210, 200, 300, 80, "🎮", "게임 AI\n(가장 좋은 수 찾기)", COLORS.CREAM_BG);

  // [Slide 29] 범위 내 첫 번째 찾기
  var s29 = createHeaderSlide(deck, "범위 내 첫 번째 찾기");
  createCodeBlock(s29, 30, 85, 660, 300, 'def first_occurrence(lst, target):\n    left, right = 0, len(lst) - 1\n    result = -1\n    \n    while left <= right:\n        mid = (left + right) // 2\n        if lst[mid] == target:\n            result = mid\n            right = mid - 1  # 더 왼쪽 탐색\n        elif lst[mid] < target:\n            left = mid + 1\n        else:\n            right = mid - 1\n    \n    return result\n\n# [1, 2, 2, 2, 3]에서 2의 첫 위치 = 1');

  // [Slide 30] 제곱근 구하기
  var s30 = createHeaderSlide(deck, "제곱근 구하기");
  createCodeBlock(s30, 40, 95, 640, 270, 'def sqrt_binary(n):\n    left, right = 0, n\n    \n    while left <= right:\n        mid = (left + right) // 2\n        if mid * mid == n:\n            return mid\n        elif mid * mid < n:\n            left = mid + 1\n        else:\n            right = mid - 1\n    \n    return right  # 정수 부분\n\nprint(sqrt_binary(16))  # 4\nprint(sqrt_binary(10))  # 3');

  // [Slide 31] 선형 vs 이진 정리
  var s31 = createHeaderSlide(deck, "선형 vs 이진 정리");
  var tableBox31 = s31.insertShape(SlidesApp.ShapeType.RECTANGLE, 50, 100, 620, 260);
  tableBox31.getFill().setSolidFill(COLORS.CREAM_BG);
  tableBox31.getBorder().setWeight(3).getLineFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s31, "              선형 탐색         이진 탐색", 70, 120, 580, 18, COLORS.DARK, true);
  addText(s31, "───────────────────────────────────────", 70, 145, 580, 12, COLORS.GRAY);
  addText(s31, "정렬 필요     ❌               ✅\n\n시간 복잡도   O(N)           O(log N)\n\n구현          쉬움           중간\n\n언제 사용     작은 데이터     큰 데이터\n              비정렬         정렬", 70, 165, 580, 18, COLORS.DARK);

  // =====================================================
  // PART 7. 마무리 (Finish) : 4장
  // =====================================================

  // [Slide 32] 도전 과제
  var s32 = createHeaderSlide(deck, "도전 과제!");
  var challengeBox = s32.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 80, 120, 560, 220);
  challengeBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s32, "🏆 이진 탐색으로 숫자 야구 힌트 분석기!", 100, 150, 520, 22, COLORS.DARK, true, true);
  addText(s32, "가능한 숫자 범위를 좁혀가며\n정답을 찾아보세요!", 120, 210, 480, 18, COLORS.DARK);

  // [Slide 33] 오늘 배운 것
  var s33 = createHeaderSlide(deck, "오늘 배운 것");
  var reviewBox = s33.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 80, 110, 560, 260);
  reviewBox.getFill().setSolidFill(COLORS.CREAM_BG);
  reviewBox.getBorder().setWeight(3).getLineFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s33, "✅ 이진 탐색 = 반으로 나눠서 찾기\n\n✅ 시간 복잡도 O(log N)\n\n✅ 정렬된 데이터에서만 사용\n\n✅ Up/Down 게임 = 이진 탐색!", 120, 140, 480, 20, COLORS.DARK);

  // [Slide 34] 예고
  var s34 = deck.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  s34.getBackground().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s34, "다음 시간에는...", W/2 - 200, H/2 - 100, 400, 28, COLORS.DARK, true, true);
  addText(s34, "📊 정렬 알고리즘!", W/2 - 200, H/2 - 30, 400, 24, COLORS.WHITE, true, true);
  addText(s34, "데이터를 순서대로 정리하는 방법!", W/2 - 200, H/2 + 30, 400, 18, COLORS.WHITE, false, true);
  addText(s34, "24차시에서 만나요!", W/2 - 150, H/2 + 100, 300, 20, COLORS.DARK, true, true);

  // [Slide 35] 엔딩
  var s35 = deck.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  s35.getBackground().setSolidFill(COLORS.HAEDAL_YELLOW);
  var endBox = s35.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, W/2 - 250, H/2 - 120, 500, 240);
  endBox.getFill().setSolidFill(COLORS.WHITE);
  addText(s35, "수고했어요!", W/2 - 200, H/2 - 80, 400, 36, COLORS.DARK, true, true);
  addText(s35, "⚡ 이진 탐색 완전 정복!", W/2 - 200, H/2 - 20, 400, 20, COLORS.GRAY, false, true);
  addText(s35, "23차시 완료", W/2 - 100, H/2 + 60, 200, 24, COLORS.HAEDAL_YELLOW, true, true);

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
