/**
 * [해달에듀] 파이썬 프로그래밍 24차시: 정렬 알고리즘
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
function createPythonLesson24() {
  var deck = SlidesApp.create("[해달에듀] 파이썬 24차시 - 정렬 알고리즘");
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
  addText(s01, "순서대로 정리하기!", W/2 - 250, H/2 - 100, 500, 44, COLORS.DARK, true, true);
  addText(s01, "📊 정렬 알고리즘", W/2 - 250, H/2 - 20, 500, 24, COLORS.GRAY, false, true);
  addText(s01, "24차시 | 해달에듀", W/2 - 250, H/2 + 50, 500, 18, COLORS.GRAY, false, true);

  // [Slide 02] 왜 정렬이 필요할까요?
  var s02 = createHeaderSlide(deck, "왜 정렬이 필요할까요?");
  createCard(s02, 40, 100, 200, 100, "📚", "책장 정리\n(가나다순)", COLORS.LIGHT_BG);
  createCard(s02, 260, 100, 200, 100, "📞", "연락처 검색\n(이름순)", COLORS.LIGHT_BG);
  createCard(s02, 480, 100, 200, 100, "🏆", "순위표\n(점수순)", COLORS.LIGHT_BG);
  var answerBox = s02.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 230, 520, 70);
  answerBox.getFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s02, "정렬 = 데이터를 순서대로!", 150, 250, 420, 24, COLORS.DARK, true, true);

  // [Slide 03] 미리보기
  var s03 = createHeaderSlide(deck, "오늘의 완성작!");
  createCard(s03, 80, 130, 260, 180, "🫧", "버블 정렬\n직접 구현", COLORS.CREAM_BG);
  createCard(s03, 380, 130, 260, 180, "📊", "다양한\n정렬 활용", COLORS.CREAM_BG);

  // [Slide 04] 오늘의 미션
  var s04 = createHeaderSlide(deck, "오늘의 미션!");
  var goalBox = s04.insertShape(SlidesApp.ShapeType.RECTANGLE, 100, 120, 520, 260);
  goalBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  goalBox.getBorder().setDashStyle(SlidesApp.DashStyle.DASH).setWeight(2).getLineFill().setSolidFill(COLORS.GRAY);
  addText(s04, "☐ 1. 정렬의 개념 이해\n\n☐ 2. 버블 정렬 구현\n\n☐ 3. 파이썬 내장 정렬\n\n☐ 4. 다양한 정렬 활용", 140, 140, 440, 20, COLORS.DARK);

  // =====================================================
  // PART 2. 정렬 개념 (Concept 1) : 5장
  // =====================================================

  // [Slide 05] 정렬이란?
  var s05 = createHeaderSlide(deck, "정렬(Sorting)이란?");
  addText(s05, "📊 데이터를 특정 순서로 배열하기!", 50, 100, 620, 22, COLORS.DARK, true);
  createCard(s05, 80, 160, 260, 90, "오름차순", "작은 것 → 큰 것", COLORS.LIGHT_BG);
  createCard(s05, 380, 160, 260, 90, "내림차순", "큰 것 → 작은 것", COLORS.LIGHT_BG);
  createCodeBlock(s05, 100, 280, 520, 70, "[3, 1, 4, 1, 5] → [1, 1, 3, 4, 5]");

  // [Slide 06] 정렬 알고리즘 종류
  var s06 = createHeaderSlide(deck, "정렬 알고리즘 종류");
  var tableBox6 = s06.insertShape(SlidesApp.ShapeType.RECTANGLE, 60, 100, 600, 250);
  tableBox6.getFill().setSolidFill(COLORS.LIGHT_BG);
  tableBox6.getBorder().setWeight(2).getLineFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s06, "알고리즘           특징", 80, 120, 560, 18, COLORS.DARK, true);
  addText(s06, "───────────────────────────────", 80, 145, 560, 12, COLORS.GRAY);
  addText(s06, "버블 정렬          간단, 느림\n\n선택 정렬          간단, 느림\n\n삽입 정렬          간단, 거의 정렬 시 빠름\n\n퀵 정렬            빠름, 복잡\n\n병합 정렬          빠름, 안정적", 80, 165, 560, 16, COLORS.DARK);
  addText(s06, "오늘은 버블 정렬!", 200, 365, 320, 18, COLORS.GRAY, true, true);

  // [Slide 07] 정렬의 필요성
  var s07 = createHeaderSlide(deck, "정렬의 필요성");
  createCard(s07, 80, 110, 260, 130, "📚 정리 안 된 책장", "매번 다 뒤져야 함", COLORS.LIGHT_BG);
  createCard(s07, 380, 110, 260, 130, "📚 가나다순 책장", "바로 찾음!", COLORS.HAEDAL_YELLOW);
  var tipBox = s07.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 270, 520, 80);
  tipBox.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s07, "정렬 → 이진 탐색 가능!\n검색이 빨라진다!", 130, 290, 460, 18, COLORS.DARK, true, true);

  // [Slide 08] 안정성
  var s08 = createHeaderSlide(deck, "안정성(Stable)");
  addText(s08, "📊 같은 값의 원래 순서 유지?", 50, 100, 620, 20, COLORS.DARK, true);
  createCodeBlock(s08, 80, 150, 560, 100, "[3a, 2, 3b, 1] 정렬 후:\n\n안정:   [1, 2, 3a, 3b]  ← 순서 유지\n불안정: [1, 2, 3b, 3a]  ← 순서 바뀜");
  addText(s08, "같은 값(3)의 상대적 순서가 유지되는지!", 80, 280, 560, 16, COLORS.GRAY);

  // [Slide 09] 정렬 특성
  var s09 = createHeaderSlide(deck, "정렬 특성");
  var featureBox = s09.insertShape(SlidesApp.ShapeType.RECTANGLE, 80, 110, 560, 200);
  featureBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s09, "• 오름차순 / 내림차순\n\n• 제자리(in-place) / 추가 메모리\n\n• 안정 / 불안정", 120, 150, 480, 22, COLORS.DARK);
  addText(s09, "상황에 따라 적절한 정렬 선택!", 80, 330, 560, 16, COLORS.GRAY, true, true);

  // =====================================================
  // PART 3. 버블 정렬 (Concept 2) : 7장
  // =====================================================

  // [Slide 10] 버블 정렬이란?
  var s10 = createHeaderSlide(deck, "버블 정렬이란?");
  addText(s10, "🫧 거품처럼 큰 값이 위로 떠오름!", 50, 100, 620, 22, COLORS.DARK, true);
  var explainBox = s10.insertShape(SlidesApp.ShapeType.RECTANGLE, 80, 160, 560, 90);
  explainBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s10, "인접한 두 요소를 비교하며 교환!", 110, 190, 500, 18, COLORS.DARK, true, true);
  createCodeBlock(s10, 100, 280, 520, 80, "[5, 3, 8, 2] → [3, 5, 8, 2] → [3, 5, 2, 8]");

  // [Slide 11] 버블 정렬 과정
  var s11 = createHeaderSlide(deck, "버블 정렬 과정");
  createCodeBlock(s11, 50, 90, 620, 300, '[5, 3, 8, 2]\n\n1회전: 5>3 교환 [3, 5, 8, 2]\n       5<8 그대로 [3, 5, 8, 2]\n       8>2 교환 [3, 5, 2, 8] → 8 확정\n\n2회전: [3, 5, 2, 8] → [3, 2, 5, 8] → 5 확정\n\n3회전: [3, 2, 5, 8] → [2, 3, 5, 8] → 완료!');

  // [Slide 12] 버블 정렬 구현
  var s12 = createHeaderSlide(deck, "버블 정렬 구현 (기본)");
  createCodeBlock(s12, 40, 95, 640, 280, 'def bubble_sort(lst):\n    n = len(lst)\n    \n    for i in range(n - 1):\n        for j in range(n - 1 - i):\n            if lst[j] > lst[j + 1]:\n                # 교환\n                lst[j], lst[j+1] = lst[j+1], lst[j]\n    \n    return lst\n\nnums = [5, 3, 8, 2, 7]\nprint(bubble_sort(nums))  # [2, 3, 5, 7, 8]');

  // [Slide 13] 코드 설명
  var s13 = createHeaderSlide(deck, "코드 설명");
  var explainBox13 = s13.insertShape(SlidesApp.ShapeType.RECTANGLE, 60, 100, 600, 260);
  explainBox13.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s13, "• 바깥 반복: n-1번 반복 (회전)\n\n• 안쪽 반복: 비교 & 교환\n\n• n-1-i: 이미 정렬된 부분 제외\n\n• 교환: 파이썬 스왑\n        a, b = b, a", 100, 130, 520, 18, COLORS.DARK);

  // [Slide 14] 과정 출력 버전
  var s14 = createHeaderSlide(deck, "과정 출력 버전");
  createCodeBlock(s14, 30, 85, 660, 300, 'def bubble_sort_verbose(lst):\n    n = len(lst)\n    \n    for i in range(n - 1):\n        print(f"\\n{i+1}회전:")\n        for j in range(n - 1 - i):\n            if lst[j] > lst[j + 1]:\n                lst[j], lst[j+1] = lst[j+1], lst[j]\n                print(f"  교환: {lst}")\n            else:\n                print(f"  유지: {lst}")\n    \n    return lst');

  // [Slide 15] 최적화 버전
  var s15 = createHeaderSlide(deck, "최적화 버전");
  createCodeBlock(s15, 30, 85, 660, 300, 'def bubble_sort_optimized(lst):\n    n = len(lst)\n    \n    for i in range(n - 1):\n        swapped = False\n        for j in range(n - 1 - i):\n            if lst[j] > lst[j + 1]:\n                lst[j], lst[j+1] = lst[j+1], lst[j]\n                swapped = True\n        \n        if not swapped:  # 교환 없으면 이미 정렬됨\n            break\n    \n    return lst');
  addText(s15, "이미 정렬되면 조기 종료!", 100, 395, 520, 14, COLORS.GRAY);

  // [Slide 16] 시간 복잡도
  var s16 = createHeaderSlide(deck, "버블 정렬 시간 복잡도");
  createCard(s16, 80, 100, 260, 100, "⏱️ 최악", "O(N²)\nN개 × N번 비교", COLORS.LIGHT_BG);
  createCard(s16, 380, 100, 260, 100, "⏱️ 최선", "O(N)\n이미 정렬 (최적화)", COLORS.HAEDAL_YELLOW);
  var exampleBox = s16.insertShape(SlidesApp.ShapeType.RECTANGLE, 100, 230, 520, 110);
  exampleBox.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s16, "📊 100개 → 최대 10,000번 비교\n📊 1000개 → 최대 1,000,000번 비교", 130, 265, 460, 18, COLORS.DARK);

  // =====================================================
  // PART 4. 파이썬 내장 정렬 (Concept 3) : 5장
  // =====================================================

  // [Slide 17] sort() 메서드
  var s17 = createHeaderSlide(deck, "sort() 메서드");
  createCodeBlock(s17, 50, 100, 620, 200, 'nums = [5, 3, 8, 2, 7]\n\nnums.sort()  # 원본 수정\nprint(nums)  # [2, 3, 5, 7, 8]\n\n# 내림차순\nnums.sort(reverse=True)\nprint(nums)  # [8, 7, 5, 3, 2]');
  var warningBox = s17.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 320, 520, 50);
  warningBox.getFill().setSolidFill(COLORS.RED_HIGHLIGHT);
  addText(s17, "⚠️ 원본 리스트가 바뀜!", 150, 330, 420, 20, COLORS.WHITE, true, true);

  // [Slide 18] sorted() 함수
  var s18 = createHeaderSlide(deck, "sorted() 함수");
  createCodeBlock(s18, 50, 100, 620, 200, 'nums = [5, 3, 8, 2, 7]\n\nnew_nums = sorted(nums)  # 새 리스트 반환\n\nprint(nums)      # [5, 3, 8, 2, 7] (원본 유지)\nprint(new_nums)  # [2, 3, 5, 7, 8]');
  var tipBox18 = s18.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 320, 520, 50);
  tipBox18.getFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s18, "✅ 원본 유지, 새 리스트 반환!", 150, 330, 420, 20, COLORS.DARK, true, true);

  // [Slide 19] sort() vs sorted()
  var s19 = createHeaderSlide(deck, "sort() vs sorted()");
  var tableBox19 = s19.insertShape(SlidesApp.ShapeType.RECTANGLE, 60, 100, 600, 250);
  tableBox19.getFill().setSolidFill(COLORS.LIGHT_BG);
  tableBox19.getBorder().setWeight(2).getLineFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s19, "              sort()           sorted()", 80, 120, 560, 18, COLORS.DARK, true);
  addText(s19, "───────────────────────────────────────", 80, 145, 560, 12, COLORS.GRAY);
  addText(s19, "타입          메서드           함수\n\n반환          None            새 리스트\n\n원본          수정됨           유지됨\n\n대상          리스트만         모든 반복 가능", 80, 165, 560, 18, COLORS.DARK);

  // [Slide 20] key 매개변수
  var s20 = createHeaderSlide(deck, "key 매개변수");
  createCodeBlock(s20, 40, 95, 640, 280, 'words = ["banana", "apple", "Cherry"]\n\n# 기본 (대소문자 구분)\nprint(sorted(words))  # [\'Cherry\', \'apple\', \'banana\']\n\n# 소문자 기준\nprint(sorted(words, key=str.lower))\n# [\'apple\', \'banana\', \'Cherry\']\n\n# 길이 기준\nprint(sorted(words, key=len))\n# [\'apple\', \'Cherry\', \'banana\']');

  // [Slide 21] 복잡한 정렬
  var s21 = createHeaderSlide(deck, "복잡한 정렬");
  createCodeBlock(s21, 30, 85, 660, 300, 'students = [\n    {"name": "철수", "score": 85},\n    {"name": "영희", "score": 92},\n    {"name": "민수", "score": 78}\n]\n\n# 점수순 정렬\nby_score = sorted(students, key=lambda x: x["score"])\n\n# 점수 내림차순\nby_score_desc = sorted(students, \n                       key=lambda x: x["score"], \n                       reverse=True)');

  // =====================================================
  // PART 5. 실습 (Practice) : 6장
  // =====================================================

  // [Slide 22] 실습 안내
  var s22 = createHeaderSlide(deck, "실습: 성적 관리 시스템");
  addText(s22, "📊 학생 점수를 다양한 기준으로 정렬!", 50, 110, 620, 22, COLORS.DARK, true);
  var featureBox = s22.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 160, 520, 140);
  featureBox.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s22, "• 이름순 정렬\n• 총점순 정렬\n• 과목별 정렬", 130, 200, 460, 20, COLORS.DARK);

  // [Slide 23] 데이터 준비
  var s23 = createHeaderSlide(deck, "데이터 준비");
  createCodeBlock(s23, 30, 85, 660, 300, 'students = [\n    {"name": "김철수", "kor": 85, "eng": 90, "math": 78},\n    {"name": "이영희", "kor": 92, "eng": 88, "math": 95},\n    {"name": "박민수", "kor": 78, "eng": 85, "math": 82},\n    {"name": "정지수", "kor": 88, "eng": 92, "math": 90},\n    {"name": "최예진", "kor": 95, "eng": 78, "math": 88}\n]\n\n# 총점 계산\nfor s in students:\n    s["total"] = s["kor"] + s["eng"] + s["math"]');

  // [Slide 24] 다양한 정렬
  var s24 = createHeaderSlide(deck, "다양한 정렬");
  createCodeBlock(s24, 30, 85, 660, 300, '# 이름순\nby_name = sorted(students, key=lambda x: x["name"])\n\n# 총점 순위 (내림차순)\nby_total = sorted(students, \n                  key=lambda x: x["total"], \n                  reverse=True)\n\n# 수학 점수순\nby_math = sorted(students, \n                 key=lambda x: x["math"], \n                 reverse=True)\n\nprint("총점 순위:")\nfor i, s in enumerate(by_total, 1):\n    print(f"{i}위: {s[\'name\']} ({s[\'total\']}점)")');

  // [Slide 25] 실행 결과
  var s25 = createHeaderSlide(deck, "실행 결과");
  createCodeBlock(s25, 100, 100, 520, 220, '총점 순위:\n1위: 이영희 (275점)\n2위: 정지수 (270점)\n3위: 최예진 (261점)\n4위: 김철수 (253점)\n5위: 박민수 (245점)');

  // [Slide 26] 다중 기준 정렬
  var s26 = createHeaderSlide(deck, "다중 기준 정렬");
  createCodeBlock(s26, 40, 95, 640, 220, '# 수학 점수 같으면 국어 점수순\nsorted_students = sorted(students, \n                         key=lambda x: (-x["math"], -x["kor"]))\n\n# 튜플로 여러 기준\nsorted_students = sorted(students, \n                         key=lambda x: (x["total"], x["name"]), \n                         reverse=True)');
  addText(s26, "여러 기준으로 정렬할 수 있어요!", 40, 340, 640, 16, COLORS.GRAY);

  // [Slide 27] 정렬 시각화
  var s27 = createHeaderSlide(deck, "정렬 시각화");
  createCodeBlock(s27, 30, 85, 660, 300, 'import random\n\nnums = [random.randint(1, 50) for _ in range(10)]\nprint("정렬 전:", nums)\n\nfor i in range(len(nums)):\n    for j in range(len(nums) - 1 - i):\n        if nums[j] > nums[j + 1]:\n            nums[j], nums[j+1] = nums[j+1], nums[j]\n    \n    # 막대 그래프로 시각화\n    bars = " ".join("█" * (n // 5) for n in nums)\n    print(f"{i+1}회전: {bars}")');

  // =====================================================
  // PART 6. 정렬 비교 (Advanced) : 4장
  // =====================================================

  // [Slide 28] 정렬 알고리즘 비교
  var s28 = createHeaderSlide(deck, "정렬 알고리즘 비교");
  var tableBox28 = s28.insertShape(SlidesApp.ShapeType.RECTANGLE, 30, 95, 660, 280);
  tableBox28.getFill().setSolidFill(COLORS.LIGHT_BG);
  tableBox28.getBorder().setWeight(2).getLineFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s28, "알고리즘      평균         최악       안정", 50, 115, 620, 16, COLORS.DARK, true);
  addText(s28, "─────────────────────────────────────────", 50, 138, 620, 10, COLORS.GRAY);
  addText(s28, "버블          O(N²)       O(N²)      ✅\n\n선택          O(N²)       O(N²)      ❌\n\n삽입          O(N²)       O(N²)      ✅\n\n퀵            O(N log N)  O(N²)      ❌\n\n병합          O(N log N)  O(N log N) ✅\n\n파이썬        O(N log N)  O(N log N) ✅", 50, 155, 620, 16, COLORS.DARK);

  // [Slide 29] 성능 비교
  var s29 = createHeaderSlide(deck, "성능 비교");
  createCodeBlock(s29, 40, 95, 640, 270, 'import time\nimport random\n\ndata = [random.randint(1, 10000) for _ in range(5000)]\n\n# 버블 정렬\nstart = time.time()\nbubble_sort(data.copy())\nbubble_time = time.time() - start\n\n# 파이썬 정렬\nstart = time.time()\nsorted(data)\npython_time = time.time() - start\n\nprint(f"버블 정렬: {bubble_time:.4f}초")\nprint(f"파이썬 정렬: {python_time:.6f}초")');

  // [Slide 30] 실전 팁
  var s30 = createHeaderSlide(deck, "실전 팁");
  var tipBox30 = s30.insertShape(SlidesApp.ShapeType.RECTANGLE, 80, 100, 560, 260);
  tipBox30.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s30, "💡 직접 구현: 학습용으로만!\n\n💡 실제 사용: sort(), sorted()\n\n💡 key 활용: 복잡한 정렬 기준\n\n💡 reverse=True: 내림차순", 120, 130, 480, 20, COLORS.DARK);

  // [Slide 31] 정렬 선택 가이드
  var s31 = createHeaderSlide(deck, "정렬 선택 가이드");
  var guideBox = s31.insertShape(SlidesApp.ShapeType.RECTANGLE, 60, 100, 600, 260);
  guideBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s31, "• 작은 데이터, 학습: 버블/선택/삽입\n\n• 큰 데이터, 실전: 파이썬 내장\n\n• 안정성 필요: 병합, 파이썬 내장\n\n• 메모리 제한: 제자리 정렬", 100, 140, 520, 20, COLORS.DARK);

  // =====================================================
  // PART 7. 마무리 (Finish) : 4장
  // =====================================================

  // [Slide 32] 도전 과제
  var s32 = createHeaderSlide(deck, "도전 과제!");
  var challengeBox = s32.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 80, 120, 560, 220);
  challengeBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s32, "🏆 선택 정렬 구현하기!", 120, 150, 480, 28, COLORS.DARK, true, true);
  addText(s32, "가장 작은 값을 찾아\n앞으로 보내기!", 120, 210, 480, 18, COLORS.DARK);

  // [Slide 33] 오늘 배운 것
  var s33 = createHeaderSlide(deck, "오늘 배운 것");
  var reviewBox = s33.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 80, 100, 560, 280);
  reviewBox.getFill().setSolidFill(COLORS.CREAM_BG);
  reviewBox.getBorder().setWeight(3).getLineFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s33, "✅ 버블 정렬: 인접 요소 비교 & 교환\n\n✅ 시간 복잡도: O(N²)\n\n✅ sort(): 원본 수정\n\n✅ sorted(): 새 리스트 반환\n\n✅ key: 정렬 기준 지정", 120, 130, 480, 18, COLORS.DARK);

  // [Slide 34] 예고
  var s34 = deck.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  s34.getBackground().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s34, "다음 시간에는...", W/2 - 200, H/2 - 100, 400, 28, COLORS.DARK, true, true);
  addText(s34, "🏆 종합 챌린지!", W/2 - 200, H/2 - 30, 400, 24, COLORS.WHITE, true, true);
  addText(s34, "지금까지 배운 모든 것 총동원!", W/2 - 200, H/2 + 30, 400, 18, COLORS.WHITE, false, true);
  addText(s34, "25차시에서 만나요!", W/2 - 150, H/2 + 100, 300, 20, COLORS.DARK, true, true);

  // [Slide 35] 엔딩
  var s35 = deck.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  s35.getBackground().setSolidFill(COLORS.HAEDAL_YELLOW);
  var endBox = s35.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, W/2 - 250, H/2 - 120, 500, 240);
  endBox.getFill().setSolidFill(COLORS.WHITE);
  addText(s35, "수고했어요!", W/2 - 200, H/2 - 80, 400, 36, COLORS.DARK, true, true);
  addText(s35, "📊 정렬 알고리즘 완전 정복!", W/2 - 200, H/2 - 20, 400, 20, COLORS.GRAY, false, true);
  addText(s35, "24차시 완료", W/2 - 100, H/2 + 60, 200, 24, COLORS.HAEDAL_YELLOW, true, true);

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
