/**
 * [해달에듀] 파이썬 프로그래밍 22차시: 선형 탐색
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
function createPythonLesson22() {
  var deck = SlidesApp.create("[해달에듀] 파이썬 22차시 - 선형 탐색");
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
  addText(s01, "하나씩 찾아보자!", W/2 - 250, H/2 - 100, 500, 48, COLORS.DARK, true, true);
  addText(s01, "🔍 선형 탐색 (Linear Search)", W/2 - 250, H/2 - 20, 500, 24, COLORS.GRAY, false, true);
  addText(s01, "22차시 | 해달에듀", W/2 - 250, H/2 + 50, 500, 18, COLORS.GRAY, false, true);

  // [Slide 02] 질문
  var s02 = createHeaderSlide(deck, "친구 100명 중에 철수 찾기?");
  addText(s02, "👥 처음부터 하나씩 확인!", 100, 120, 520, 22, COLORS.DARK, true);
  createCodeBlock(s02, 100, 170, 520, 120, '"너 철수야?" → "아니"\n"너 철수야?" → "아니"\n"너 철수야?" → "응!"');
  var answerBox = s02.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 310, 520, 60);
  answerBox.getFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s02, "이게 선형 탐색이에요!", 150, 325, 420, 22, COLORS.DARK, true, true);

  // [Slide 03] 미리보기
  var s03 = createHeaderSlide(deck, "오늘의 완성작!");
  createCard(s03, 80, 130, 260, 180, "🔍", "숫자 찾기\n프로그램", COLORS.CREAM_BG);
  createCard(s03, 380, 130, 260, 180, "📝", "학생 정보\n검색 시스템", COLORS.CREAM_BG);

  // [Slide 04] 오늘의 미션
  var s04 = createHeaderSlide(deck, "오늘의 미션!");
  var goalBox = s04.insertShape(SlidesApp.ShapeType.RECTANGLE, 100, 120, 520, 260);
  goalBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  goalBox.getBorder().setDashStyle(SlidesApp.DashStyle.DASH).setWeight(2).getLineFill().setSolidFill(COLORS.GRAY);
  addText(s04, "☐ 1. 탐색 알고리즘 이해\n\n☐ 2. 선형 탐색 구현\n\n☐ 3. 시간 복잡도 이해\n\n☐ 4. 검색 프로그램 만들기", 140, 140, 440, 20, COLORS.DARK);

  // =====================================================
  // PART 2. 탐색 알고리즘 (Concept 1) : 5장
  // =====================================================

  // [Slide 05] 탐색이란?
  var s05 = createHeaderSlide(deck, "탐색(Search)이란?");
  addText(s05, "🔍 데이터 중에서 원하는 값을 찾기!", 50, 100, 620, 24, COLORS.DARK, true);
  var exampleBox = s05.insertShape(SlidesApp.ShapeType.RECTANGLE, 80, 160, 560, 180);
  exampleBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s05, "• 리스트에서 특정 숫자 찾기\n• 학생 목록에서 이름 찾기\n• 사전에서 단어 찾기", 120, 200, 480, 20, COLORS.DARK);

  // [Slide 06] 탐색 알고리즘 종류
  var s06 = createHeaderSlide(deck, "탐색 알고리즘 종류");
  createCard(s06, 80, 120, 260, 130, "🔍 선형 탐색", "처음부터 끝까지\n하나씩 확인", COLORS.HAEDAL_YELLOW);
  createCard(s06, 380, 120, 260, 130, "🔍 이진 탐색", "반씩 나눠서\n빠르게 찾기", COLORS.LIGHT_BG);
  var tipBox = s06.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 280, 520, 70);
  tipBox.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s06, "오늘은 선형 탐색 먼저!", 150, 300, 420, 22, COLORS.DARK, true, true);

  // [Slide 07] 선형 탐색이란?
  var s07 = createHeaderSlide(deck, "선형 탐색이란?");
  addText(s07, "📋 리스트의 처음부터 끝까지 순서대로 확인!", 50, 100, 620, 20, COLORS.DARK, true);
  createCodeBlock(s07, 80, 150, 560, 140, "[5, 3, 8, 2, 7] 에서 8 찾기\n\n5 → 아니\n3 → 아니\n8 → 찾았다!");
  addText(s07, "차례대로 하나씩 비교!", 80, 310, 560, 18, COLORS.GRAY);

  // [Slide 08] 일상 속 선형 탐색
  var s08 = createHeaderSlide(deck, "일상 속 선형 탐색");
  createCard(s08, 40, 100, 200, 90, "📚", "책장에서\n책 찾기", COLORS.LIGHT_BG);
  createCard(s08, 260, 100, 200, 90, "👔", "옷장에서\n옷 찾기", COLORS.LIGHT_BG);
  createCard(s08, 480, 100, 200, 90, "📝", "출석부에서\n이름 찾기", COLORS.LIGHT_BG);
  addText(s08, "왼쪽부터 오른쪽으로, 위에서 아래로 하나씩!", 80, 230, 560, 18, COLORS.GRAY, false, true);
  createImagePlaceholder(s08, 150, 270, 420, 100, "선형 탐색 시각화 이미지");

  // [Slide 09] 선형 탐색의 특징
  var s09 = createHeaderSlide(deck, "선형 탐색의 특징");
  createCard(s09, 50, 100, 300, 90, "✅ 장점", "간단하고 이해하기 쉬움", COLORS.CREAM_BG);
  createCard(s09, 370, 100, 300, 90, "✅ 장점", "정렬 안 해도 됨", COLORS.CREAM_BG);
  createCard(s09, 210, 210, 300, 90, "❌ 단점", "데이터가 많으면 느림", COLORS.LIGHT_BG);

  // =====================================================
  // PART 3. 선형 탐색 구현 (Concept 2) : 6장
  // =====================================================

  // [Slide 10] 기본 선형 탐색
  var s10 = createHeaderSlide(deck, "기본 선형 탐색");
  createCodeBlock(s10, 40, 95, 640, 280, 'def linear_search(lst, target):\n    for i in range(len(lst)):\n        if lst[i] == target:\n            return i  # 찾은 위치 반환\n    return -1  # 못 찾으면 -1\n\nnumbers = [5, 3, 8, 2, 7]\nresult = linear_search(numbers, 8)\nprint(result)  # 2 (인덱스)');

  // [Slide 11] enumerate 버전
  var s11 = createHeaderSlide(deck, "enumerate 버전");
  createCodeBlock(s11, 50, 100, 620, 180, 'def linear_search(lst, target):\n    for index, value in enumerate(lst):\n        if value == target:\n            return index\n    return -1');
  var tipBox11 = s11.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 300, 520, 60);
  tipBox11.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s11, "enumerate로 인덱스와 값 동시에!", 130, 315, 460, 18, COLORS.DARK, true, true);

  // [Slide 12] in 연산자
  var s12 = createHeaderSlide(deck, "in 연산자 (간단)");
  createCodeBlock(s12, 50, 100, 620, 200, 'numbers = [5, 3, 8, 2, 7]\n\n# 존재 여부만 확인\nif 8 in numbers:\n    print("8이 있어요!")\n\n# 위치 찾기\nprint(numbers.index(8))  # 2');
  addText(s12, "파이썬 내장 기능!", 50, 320, 620, 16, COLORS.GRAY);

  // [Slide 13] index() 주의
  var s13 = createHeaderSlide(deck, "⚠️ index() 주의");
  createCodeBlock(s13, 50, 100, 620, 220, 'numbers = [5, 3, 8, 2, 7]\n\n# 없는 값은 에러!\nprint(numbers.index(10))  # ValueError!\n\n# 안전하게\ntry:\n    pos = numbers.index(10)\nexcept ValueError:\n    pos = -1');

  // [Slide 14] 모든 위치 찾기
  var s14 = createHeaderSlide(deck, "모든 위치 찾기");
  createCodeBlock(s14, 40, 95, 640, 280, 'def find_all(lst, target):\n    positions = []\n    for i, value in enumerate(lst):\n        if value == target:\n            positions.append(i)\n    return positions\n\nnumbers = [1, 3, 5, 3, 7, 3]\nresult = find_all(numbers, 3)\nprint(result)  # [1, 3, 5]');
  addText(s14, "같은 값이 여러 개일 때!", 40, 390, 640, 14, COLORS.GRAY);

  // [Slide 15] 조건으로 찾기
  var s15 = createHeaderSlide(deck, "조건으로 찾기");
  createCodeBlock(s15, 40, 95, 640, 280, 'def find_by_condition(lst, condition):\n    for i, value in enumerate(lst):\n        if condition(value):\n            return i\n    return -1\n\nnumbers = [4, 7, 2, 9, 5]\n\n# 5보다 큰 첫 번째 숫자 위치\nresult = find_by_condition(numbers, lambda x: x > 5)\nprint(result)  # 1 (7의 위치)');

  // =====================================================
  // PART 4. 시간 복잡도 (Concept 3) : 4장
  // =====================================================

  // [Slide 16] 시간 복잡도란?
  var s16 = createHeaderSlide(deck, "시간 복잡도란?");
  addText(s16, "⏱️ 알고리즘이 얼마나 걸리는지!", 50, 100, 620, 24, COLORS.DARK, true);
  var explainBox = s16.insertShape(SlidesApp.ShapeType.RECTANGLE, 80, 160, 560, 140);
  explainBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s16, "데이터 개수에 따른 연산 횟수\n\nN개의 데이터 → 최대 N번 확인", 120, 190, 480, 20, COLORS.DARK);
  addText(s16, "데이터가 많아지면 시간도 늘어남!", 80, 320, 560, 18, COLORS.GRAY);

  // [Slide 17] 빅오 표기법
  var s17 = createHeaderSlide(deck, "빅오 표기법 (Big-O)");
  addText(s17, "📊 O(N) = 데이터 N개일 때 최대 N번", 50, 100, 620, 22, COLORS.DARK, true);
  var exampleBox17 = s17.insertShape(SlidesApp.ShapeType.RECTANGLE, 80, 160, 560, 180);
  exampleBox17.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s17, "선형 탐색 = O(N)\n\n• 10개 → 최대 10번\n• 1000개 → 최대 1000번\n• 100만개 → 최대 100만번", 120, 180, 480, 18, COLORS.DARK);

  // [Slide 18] 최선/최악의 경우
  var s18 = createHeaderSlide(deck, "최선/최악의 경우");
  createCard(s18, 50, 100, 200, 100, "🎯 최선", "첫 번째에서 발견!\nO(1)", COLORS.HAEDAL_YELLOW);
  createCard(s18, 260, 100, 200, 100, "😅 최악", "마지막 또는 없음\nO(N)", COLORS.RED_HIGHLIGHT);
  createCard(s18, 470, 100, 200, 100, "📊 평균", "중간쯤\nO(N/2) ≈ O(N)", COLORS.LIGHT_BG);
  addText(s18, "보통 최악의 경우를 기준으로 성능을 판단해요!", 50, 240, 620, 18, COLORS.GRAY);

  // [Slide 19] 실제 시간 예시
  var s19 = createHeaderSlide(deck, "실제 시간 (예시)");
  var tableBox19 = s19.insertShape(SlidesApp.ShapeType.RECTANGLE, 80, 100, 560, 220);
  tableBox19.getFill().setSolidFill(COLORS.LIGHT_BG);
  tableBox19.getBorder().setWeight(2).getLineFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s19, "데이터 수         선형 탐색 (최악)", 100, 120, 520, 18, COLORS.DARK, true);
  addText(s19, "───────────────────────────────", 100, 145, 520, 14, COLORS.GRAY);
  addText(s19, "100개            100번 확인\n\n10,000개         10,000번 확인\n\n100만개          100만번 확인", 100, 170, 520, 18, COLORS.DARK);
  addText(s19, "데이터가 많아지면 느려짐!", 80, 340, 560, 18, COLORS.RED_HIGHLIGHT, true, true);

  // =====================================================
  // PART 5. 실습 A - 숫자 찾기 (Practice A) : 5장
  // =====================================================

  // [Slide 20] 실습 A 안내
  var s20 = createHeaderSlide(deck, "실습 A: 숫자 찾기 게임");
  addText(s20, "🔍 랜덤 숫자 리스트에서 특정 숫자 찾기!", 50, 100, 620, 22, COLORS.DARK, true);
  var goalBox20 = s20.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 160, 520, 140);
  goalBox20.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s20, "🎯 목표:\n\n몇 번째 확인에서 찾았는지 표시!", 130, 190, 460, 18, COLORS.DARK);

  // [Slide 21] 게임 코드
  var s21 = createHeaderSlide(deck, "게임 코드");
  createCodeBlock(s21, 20, 80, 680, 310, 'import random\n\ndef search_game():\n    # 랜덤 리스트 생성\n    numbers = [random.randint(1, 100) for _ in range(20)]\n    print(f"숫자 리스트: {numbers}")\n    target = int(input("\\n찾을 숫자: "))\n    \n    # 탐색 (과정 표시)\n    for i, num in enumerate(numbers):\n        print(f"{i+1}번째 확인: {num}", end="")\n        if num == target:\n            print(f" → 찾았다! 🎉")\n            print(f"\\n{i+1}번 만에 찾았습니다!")\n            return\n        print()\n    print(f"\\n{target}은(는) 없습니다.")\n\nsearch_game()');

  // [Slide 22] 실행 결과
  var s22 = createHeaderSlide(deck, "실행 결과");
  createCodeBlock(s22, 80, 100, 560, 200, '숫자 리스트: [45, 23, 78, 12, 56, ...]\n\n찾을 숫자: 78\n1번째 확인: 45\n2번째 확인: 23\n3번째 확인: 78 → 찾았다! 🎉\n\n3번 만에 찾았습니다!');

  // [Slide 23] 탐색 시간 측정
  var s23 = createHeaderSlide(deck, "탐색 시간 측정");
  createCodeBlock(s23, 50, 100, 620, 200, 'import time\n\nstart = time.time()\nresult = linear_search(big_list, target)\nend = time.time()\n\nprint(f"탐색 시간: {end-start:.6f}초")');
  addText(s23, "time 모듈로 실행 시간 측정!", 50, 320, 620, 16, COLORS.GRAY);

  // [Slide 24] 큰 데이터 테스트
  var s24 = createHeaderSlide(deck, "큰 데이터 테스트");
  createCodeBlock(s24, 50, 100, 620, 230, 'import random\nimport time\n\n# 100만 개 데이터\nbig_list = list(range(1000000))\ntarget = 999999  # 마지막에 있는 값\n\n# 시간 측정\nstart = time.time()\nlinear_search(big_list, target)\nprint(f"소요 시간: {time.time()-start:.3f}초")');

  // =====================================================
  // PART 6. 실습 B - 학생 검색 (Practice B) : 5장
  // =====================================================

  // [Slide 25] 실습 B 안내
  var s25 = createHeaderSlide(deck, "실습 B: 학생 정보 검색");
  addText(s25, "📝 학생 이름으로 정보 검색!", 50, 100, 620, 22, COLORS.DARK, true);
  var featureBox = s25.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 160, 520, 140);
  featureBox.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s25, "• 이름, 번호, 성적 조회\n• 점수 기준 검색", 130, 200, 460, 20, COLORS.DARK);

  // [Slide 26] 데이터 구조
  var s26 = createHeaderSlide(deck, "데이터 구조");
  createCodeBlock(s26, 50, 100, 620, 230, 'students = [\n    {"id": 1, "name": "김철수", "score": 85},\n    {"id": 2, "name": "이영희", "score": 92},\n    {"id": 3, "name": "박민수", "score": 78},\n    {"id": 4, "name": "정지수", "score": 95},\n    {"id": 5, "name": "최예진", "score": 88}\n]');

  // [Slide 27] 검색 함수
  var s27 = createHeaderSlide(deck, "검색 함수");
  createCodeBlock(s27, 30, 85, 660, 300, 'def search_by_name(students, name):\n    for student in students:\n        if student["name"] == name:\n            return student\n    return None\n\ndef search_by_score(students, min_score):\n    results = []\n    for student in students:\n        if student["score"] >= min_score:\n            results.append(student)\n    return results');

  // [Slide 28] 검색 시스템
  var s28 = createHeaderSlide(deck, "검색 시스템");
  createCodeBlock(s28, 20, 80, 680, 310, 'while True:\n    print("\\n=== 학생 검색 시스템 ===")\n    print("1. 이름으로 검색")\n    print("2. 점수 이상 검색")\n    print("3. 종료")\n    choice = input("선택: ")\n    \n    if choice == "1":\n        name = input("이름: ")\n        result = search_by_name(students, name)\n        if result:\n            print(f"학번: {result[\'id\']}, 점수: {result[\'score\']}")\n        else:\n            print("찾을 수 없습니다.")\n    elif choice == "2":\n        score = int(input("최소 점수: "))\n        results = search_by_score(students, score)\n        for s in results:\n            print(f"{s[\'name\']}: {s[\'score\']}점")');

  // [Slide 29] 실행 결과
  var s29 = createHeaderSlide(deck, "실행 결과");
  createCodeBlock(s29, 80, 100, 560, 220, '=== 학생 검색 시스템 ===\n1. 이름으로 검색\n2. 점수 이상 검색\n3. 종료\n선택: 1\n이름: 이영희\n학번: 2, 점수: 92');

  // =====================================================
  // PART 7. 마무리 (Finish) : 3장
  // =====================================================

  // [Slide 30] 오늘 배운 것
  var s30 = createHeaderSlide(deck, "오늘 배운 것");
  var reviewBox = s30.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 80, 110, 560, 260);
  reviewBox.getFill().setSolidFill(COLORS.CREAM_BG);
  reviewBox.getBorder().setWeight(3).getLineFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s30, "✅ 선형 탐색 = 처음부터 끝까지 확인\n\n✅ 시간 복잡도 O(N)\n\n✅ 간단하지만 데이터 많으면 느림\n\n✅ 정렬 안 해도 사용 가능", 120, 140, 480, 20, COLORS.DARK);

  // [Slide 31] 예고
  var s31 = deck.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  s31.getBackground().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s31, "다음 시간에는...", W/2 - 200, H/2 - 100, 400, 28, COLORS.DARK, true, true);
  addText(s31, "⚡ 이진 탐색!", W/2 - 200, H/2 - 30, 400, 24, COLORS.WHITE, true, true);
  addText(s31, "반씩 나눠서 훨씬 빠르게 찾기!\n선형 탐색보다 훨씬 빠르다!", W/2 - 200, H/2 + 20, 400, 18, COLORS.WHITE, false, true);
  addText(s31, "23차시에서 만나요!", W/2 - 150, H/2 + 100, 300, 20, COLORS.DARK, true, true);

  // [Slide 32] 엔딩
  var s32 = deck.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  s32.getBackground().setSolidFill(COLORS.HAEDAL_YELLOW);
  var endBox = s32.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, W/2 - 250, H/2 - 120, 500, 240);
  endBox.getFill().setSolidFill(COLORS.WHITE);
  addText(s32, "수고했어요!", W/2 - 200, H/2 - 80, 400, 36, COLORS.DARK, true, true);
  addText(s32, "🔍 선형 탐색 완전 정복!", W/2 - 200, H/2 - 20, 400, 20, COLORS.GRAY, false, true);
  addText(s32, "22차시 완료", W/2 - 100, H/2 + 60, 200, 24, COLORS.HAEDAL_YELLOW, true, true);

  Logger.log("슬라이드 생성 완료! (총 32장) URL: " + deck.getUrl());
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
