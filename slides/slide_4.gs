/**
 * [해달에듀] 파이썬 프로그래밍 4차시: 리스트와 튜플
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
function createPythonLesson4() {
  var deck = SlidesApp.create("[해달에듀] 파이썬 4차시 - 리스트와 튜플");
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
  addText(s01, "여러 개를 한 곳에!", W/2 - 250, H/2 - 100, 500, 48, COLORS.DARK, true, true);
  addText(s01, "📋 리스트와 튜플", W/2 - 250, H/2 - 20, 500, 24, COLORS.GRAY, false, true);
  addText(s01, "4차시 | 해달에듀", W/2 - 250, H/2 + 50, 500, 18, COLORS.GRAY, false, true);

  // [Slide 02] 질문
  var s02 = createHeaderSlide(deck, "친구 5명의 이름을 저장하려면?");
  var oldWay = s02.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 100, 300, 150);
  oldWay.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s02, "😅 이렇게?", 70, 110, 260, 18, COLORS.GRAY, true);
  addText(s02, "friend1 = \"철수\"\nfriend2 = \"영희\"\nfriend3 = ...", 70, 150, 260, 14, COLORS.DARK);
  var newWay = s02.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 380, 100, 300, 150);
  newWay.getFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s02, "😎 더 좋은 방법!", 400, 110, 260, 18, COLORS.DARK, true);
  addText(s02, "리스트 하나로 OK!", 400, 170, 260, 20, COLORS.DARK, true, true);

  // [Slide 03] 미리보기
  var s03 = createHeaderSlide(deck, "오늘의 완성작!");
  createCard(s03, 100, 120, 250, 150, "📋", "친구 목록\n관리 프로그램", COLORS.CREAM_BG);
  createCard(s03, 380, 120, 250, 150, "🎲", "랜덤 점심\n메뉴 뽑기", COLORS.CREAM_BG);

  // [Slide 04] 오늘의 미션
  var s04 = createHeaderSlide(deck, "오늘의 미션!");
  var goalBox = s04.insertShape(SlidesApp.ShapeType.RECTANGLE, 100, 120, 520, 260);
  goalBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  goalBox.getBorder().setDashStyle(SlidesApp.DashStyle.DASH).setWeight(2).getLineFill().setSolidFill(COLORS.GRAY);
  addText(s04, "☐ 1. 리스트 만들고 다루기\n\n☐ 2. 튜플 이해하기\n\n☐ 3. 인덱싱, 슬라이싱 복습\n\n☐ 4. 리스트 메서드 사용하기", 140, 150, 440, 20, COLORS.DARK);

  // =====================================================
  // PART 2. 리스트 기초 (Concept 1) : 6장
  // =====================================================

  // [Slide 05] 리스트란?
  var s05 = createHeaderSlide(deck, "리스트(List)란?");
  addText(s05, "📋 출석부처럼 여러 데이터를 순서대로 저장!", 50, 100, 620, 20, COLORS.DARK, true);
  var listBox = s05.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 150, 620, 80);
  listBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s05, "[값1, 값2, 값3, ...]\n대괄호 [] 로 감싸요", 80, 165, 560, 18, COLORS.DARK, false, true);
  createImagePlaceholder(s05, 520, 100, 150, 100, "출석부 비유");

  // [Slide 06] 리스트 만들기
  var s06 = createHeaderSlide(deck, "리스트 만들기");
  createCodeBlock(s06, 50, 100, 620, 160, 'fruits = ["사과", "바나나", "오렌지"]\nnumbers = [1, 2, 3, 4, 5]\nmixed = [1, "hello", 3.14, True]');
  var tipBox6 = s06.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 280, 520, 50);
  tipBox6.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s06, "어떤 자료형이든 OK! 섞어도 OK!", 120, 290, 480, 18, COLORS.DARK, true, true);

  // [Slide 07] 리스트 인덱싱
  var s07 = createHeaderSlide(deck, "리스트 인덱싱");
  createCodeBlock(s07, 50, 100, 620, 160, 'fruits = ["사과", "바나나", "오렌지"]\nprint(fruits[0])   # 사과\nprint(fruits[1])   # 바나나\nprint(fruits[-1])  # 오렌지');
  addText(s07, "문자열처럼 인덱스 사용!", 100, 280, 520, 18, COLORS.DARK, true, true);

  // [Slide 08] 리스트 슬라이싱
  var s08 = createHeaderSlide(deck, "리스트 슬라이싱");
  createCodeBlock(s08, 50, 100, 620, 160, 'nums = [10, 20, 30, 40, 50]\nprint(nums[1:4])   # [20, 30, 40]\nprint(nums[:3])    # [10, 20, 30]\nprint(nums[::2])   # [10, 30, 50]');
  addText(s08, "문자열 슬라이싱과 똑같아요!", 100, 280, 520, 18, COLORS.DARK, true, true);

  // [Slide 09] 리스트 길이와 포함 확인
  var s09 = createHeaderSlide(deck, "리스트 길이와 포함 확인");
  createCodeBlock(s09, 50, 100, 620, 160, 'fruits = ["사과", "바나나", "오렌지"]\nprint(len(fruits))        # 3\nprint("사과" in fruits)   # True\nprint("포도" in fruits)   # False');

  // [Slide 10] 리스트 수정하기
  var s10 = createHeaderSlide(deck, "리스트 수정하기");
  createCodeBlock(s10, 100, 100, 520, 140, 'fruits = ["사과", "바나나", "오렌지"]\nfruits[1] = "포도"  # 바나나 → 포도\nprint(fruits)\n# ["사과", "포도", "오렌지"]');
  var tipBox10 = s10.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 260, 520, 50);
  tipBox10.getFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s10, "인덱스로 값 변경 가능!", 120, 272, 480, 18, COLORS.DARK, true, true);

  // =====================================================
  // PART 3. 리스트 메서드 (Concept 2) : 6장
  // =====================================================

  // [Slide 11] 리스트 메서드 소개
  var s11 = createHeaderSlide(deck, "리스트 메서드 소개");
  addText(s11, "리스트에게 명령하는 방법!", 50, 100, 620, 24, COLORS.DARK, true);
  var methodBox = s11.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 160, 620, 80);
  methodBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s11, "리스트.메서드() 형태로 사용", 80, 185, 560, 20, COLORS.DARK, false, true);

  // [Slide 12] 추가: append(), insert()
  var s12 = createHeaderSlide(deck, "추가: append(), insert()");
  createCodeBlock(s12, 50, 100, 620, 200, 'fruits = ["사과", "바나나"]\nfruits.append("오렌지")  # 맨 뒤에 추가\nprint(fruits)  # ["사과", "바나나", "오렌지"]\n\nfruits.insert(1, "포도")  # 1번 위치에 삽입\nprint(fruits)  # ["사과", "포도", "바나나", "오렌지"]');

  // [Slide 13] 삭제: remove(), pop()
  var s13 = createHeaderSlide(deck, "삭제: remove(), pop()");
  createCodeBlock(s13, 50, 100, 620, 200, 'fruits = ["사과", "바나나", "오렌지"]\nfruits.remove("바나나")  # 값으로 삭제\nprint(fruits)  # ["사과", "오렌지"]\n\nlast = fruits.pop()  # 맨 뒤 빼기\nprint(last)    # 오렌지\nprint(fruits)  # ["사과"]');

  // [Slide 14] 정렬: sort(), reverse()
  var s14 = createHeaderSlide(deck, "정렬: sort(), reverse()");
  createCodeBlock(s14, 50, 100, 620, 180, 'nums = [3, 1, 4, 1, 5]\nnums.sort()     # 오름차순 정렬\nprint(nums)     # [1, 1, 3, 4, 5]\n\nnums.reverse()  # 순서 뒤집기\nprint(nums)     # [5, 4, 3, 1, 1]');

  // [Slide 15] 기타 유용한 메서드
  var s15 = createHeaderSlide(deck, "기타 유용한 메서드");
  createCodeBlock(s15, 50, 100, 620, 180, 'nums = [1, 2, 3, 2, 1]\nprint(nums.count(2))  # 2 (2가 몇 개?)\nprint(nums.index(3))  # 2 (3의 위치)\n\nnums.clear()          # 모두 삭제\nprint(nums)           # []');

  // [Slide 16] 리스트 메서드 정리
  var s16 = createHeaderSlide(deck, "리스트 메서드 정리");
  var tableBox = s16.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 100, 620, 220);
  tableBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s16, "추가  │ append(), insert()\n────────────────────────────\n삭제  │ remove(), pop(), clear()\n────────────────────────────\n정렬  │ sort(), reverse()\n────────────────────────────\n기타  │ count(), index()", 80, 120, 560, 16, COLORS.DARK);

  // =====================================================
  // PART 4. 튜플 (Concept 3) : 4장
  // =====================================================

  // [Slide 17] 튜플이란?
  var s17 = createHeaderSlide(deck, "튜플(Tuple)이란?");
  addText(s17, "🔒 수정 불가능한 리스트!", 50, 100, 620, 24, COLORS.DARK, true);
  var tupleBox = s17.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 150, 400, 100);
  tupleBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s17, "(값1, 값2, 값3)\n소괄호 () 로 감싸요\n한 번 만들면 변경 불가!", 80, 170, 340, 16, COLORS.DARK, false, true);
  createImagePlaceholder(s17, 480, 130, 180, 120, "자물쇠 비유");

  // [Slide 18] 튜플 만들기
  var s18 = createHeaderSlide(deck, "튜플 만들기");
  createCodeBlock(s18, 50, 100, 620, 180, 'colors = ("빨강", "파랑", "초록")\npoint = (10, 20)      # 좌표\nsingle = (42,)        # 요소 1개일 때 쉼표 필수!\n\nprint(colors[0])      # 빨강 (인덱싱 OK)');

  // [Slide 19] 튜플은 수정 불가
  var s19 = createHeaderSlide(deck, "⚠️ 튜플은 수정 불가!");
  createCodeBlock(s19, 50, 100, 620, 100, 'colors = ("빨강", "파랑")\ncolors[0] = "노랑"  # 에러! TypeError!');
  var warnBox = s19.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 220, 520, 80);
  warnBox.getFill().setSolidFill(COLORS.RED_HIGHLIGHT);
  addText(s19, "바꾸고 싶으면 리스트를 사용하세요!", 120, 245, 480, 18, COLORS.WHITE, true, true);

  // [Slide 20] 리스트 vs 튜플
  var s20 = createHeaderSlide(deck, "리스트 vs 튜플");
  var compareBox = s20.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 100, 620, 180);
  compareBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s20, "        │ 리스트   │ 튜플\n────────┼──────────┼──────────\n기호    │   []     │   ()\n수정    │ 가능 ✅  │ 불가 ❌\n용도    │ 변할 수  │ 변하면 안\n        │ 있는 데이터│ 되는 데이터", 80, 115, 560, 16, COLORS.DARK);
  addText(s20, "좌표, 색상 코드 등은 튜플 추천!", 100, 290, 520, 18, COLORS.DARK, true, true);

  // =====================================================
  // PART 5. 실습 A - 친구 목록 (Practice A) : 5장
  // =====================================================

  // [Slide 21] 실습 A 안내
  var s21 = createHeaderSlide(deck, "실습 A: 친구 목록 관리");
  addText(s21, "📋 친구 목록을 만들고 추가/삭제해봐요!", 50, 120, 620, 24, COLORS.DARK, true, true);
  createImagePlaceholder(s21, 150, 180, 420, 150, "친구 목록 이미지");

  // [Slide 22] 1단계: 리스트 만들기
  var s22 = createHeaderSlide(deck, "1단계: 리스트 만들기");
  createCodeBlock(s22, 50, 100, 620, 120, 'friends = ["철수", "영희", "민수"]\nprint(f"내 친구들: {friends}")\nprint(f"총 {len(friends)}명")');

  // [Slide 23] 2단계: 친구 추가
  var s23 = createHeaderSlide(deck, "2단계: 친구 추가");
  createCodeBlock(s23, 50, 100, 620, 120, 'new_friend = input("새 친구 이름: ")\nfriends.append(new_friend)\nprint(f"친구 추가 완료: {friends}")');

  // [Slide 24] 3단계: 친구 삭제
  var s24 = createHeaderSlide(deck, "3단계: 친구 삭제");
  createCodeBlock(s24, 50, 100, 620, 180, 'bye_friend = input("삭제할 친구: ")\nif bye_friend in friends:\n    friends.remove(bye_friend)\n    print(f"{bye_friend} 삭제 완료!")\nelse:\n    print("그런 친구 없어요...")');

  // [Slide 25] 실행 결과
  var s25 = createHeaderSlide(deck, "실행 결과");
  var resultBox = s25.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 100, 620, 230);
  resultBox.getFill().setSolidFill(COLORS.CODE_BG);
  addText(s25, "내 친구들: ['철수', '영희', '민수']\n총 3명\n새 친구 이름: 지수\n친구 추가 완료: ['철수', '영희', '민수', '지수']\n삭제할 친구: 민수\n민수 삭제 완료!", 80, 120, 560, 16, COLORS.CODE_WHITE);

  // =====================================================
  // PART 6. 실습 B - 랜덤 메뉴 (Practice B) : 4장
  // =====================================================

  // [Slide 26] 실습 B 안내
  var s26 = createHeaderSlide(deck, "실습 B: 점심 메뉴 룰렛");
  addText(s26, "🎲 오늘 점심 뭐 먹지?", 50, 120, 620, 28, COLORS.DARK, true, true);
  addText(s26, "랜덤으로 정해주는 프로그램!", 50, 180, 620, 20, COLORS.GRAY, false, true);

  // [Slide 27] random.choice()
  var s27 = createHeaderSlide(deck, "random.choice()");
  createCodeBlock(s27, 50, 100, 620, 160, 'import random\n\nmenu = ["김밥", "라면", "피자", "햄버거"]\npick = random.choice(menu)\nprint(f"오늘의 메뉴: {pick}")');
  var tipBox27 = s27.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 280, 520, 50);
  tipBox27.getFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s27, "choice() = 리스트에서 랜덤 선택!", 120, 292, 480, 18, COLORS.DARK, true, true);

  // [Slide 28] 완성 코드
  var s28 = createHeaderSlide(deck, "완성 코드");
  createCodeBlock(s28, 50, 100, 620, 200, 'import random\n\nmenus = ["김밥", "라면", "피자", "햄버거", "떡볶이"]\nprint("🎲 점심 메뉴 룰렛!")\nprint(f"후보: {menus}")\ninput("엔터를 누르면 메뉴가 정해져요!")\npick = random.choice(menus)\nprint(f"🍽️ 오늘의 메뉴: {pick}")');

  // [Slide 29] 실행 결과
  var s29 = createHeaderSlide(deck, "실행 결과");
  var resultBox29 = s29.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 100, 620, 200);
  resultBox29.getFill().setSolidFill(COLORS.CODE_BG);
  addText(s29, "🎲 점심 메뉴 룰렛!\n후보: ['김밥', '라면', '피자', '햄버거', '떡볶이']\n엔터를 누르면 메뉴가 정해져요!\n🍽️ 오늘의 메뉴: 피자", 80, 130, 560, 18, COLORS.CODE_WHITE);

  // =====================================================
  // PART 7. 도전 과제 (Challenge) : 3장
  // =====================================================

  // [Slide 30] 도전 과제
  var s30 = createHeaderSlide(deck, "도전 과제!");
  var challengeBox = s30.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 80, 110, 560, 150);
  challengeBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s30, "🏆 숫자 5개를 입력받아 리스트에 저장하고,\n합계와 평균을 구해보세요!\n\n힌트: sum() 함수 사용", 100, 140, 520, 18, COLORS.DARK, false, true);

  // [Slide 31] 힌트
  var s31 = createHeaderSlide(deck, "힌트");
  createCodeBlock(s31, 50, 100, 620, 180, 'nums = []\nfor i in range(5):\n    n = int(input(f"{i+1}번째 숫자: "))\n    nums.append(n)\n\ntotal = sum(nums)\naverage = total / len(nums)');

  // [Slide 32] 정답 공개
  var s32 = createHeaderSlide(deck, "정답 공개!");
  createCodeBlock(s32, 50, 100, 620, 200, 'nums = []\nfor i in range(5):\n    n = int(input(f"{i+1}번째 숫자: "))\n    nums.append(n)\n\nprint(f"입력한 숫자: {nums}")\nprint(f"합계: {sum(nums)}")\nprint(f"평균: {sum(nums)/len(nums)}")');

  // =====================================================
  // PART 8. 마무리 (Finish) : 3장
  // =====================================================

  // [Slide 33] 오늘 배운 것
  var s33 = createHeaderSlide(deck, "오늘 배운 것");
  var reviewBox = s33.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 80, 110, 560, 230);
  reviewBox.getFill().setSolidFill(COLORS.CREAM_BG);
  reviewBox.getBorder().setWeight(3).getLineFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s33, "✅ 리스트 []: 수정 가능, 순서 있음\n\n✅ 튜플 (): 수정 불가, 순서 있음\n\n✅ 메서드: append, remove, pop, sort 등\n\n✅ random.choice(): 랜덤 선택", 110, 140, 500, 18, COLORS.DARK);

  // [Slide 34] 예고
  var s34 = deck.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  s34.getBackground().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s34, "다음 시간에는...", W/2 - 200, H/2 - 100, 400, 28, COLORS.DARK, true, true);
  addText(s34, "📝 입력과 출력을 더 다뤄봐요!", W/2 - 200, H/2 - 30, 400, 24, COLORS.WHITE, true, true);
  addText(s34, "input(), print()를 마스터하기!", W/2 - 200, H/2 + 30, 400, 18, COLORS.DARK, false, true);

  // [Slide 35] 엔딩
  var s35 = deck.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  s35.getBackground().setSolidFill(COLORS.HAEDAL_YELLOW);
  var endBox = s35.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, W/2 - 250, H/2 - 120, 500, 240);
  endBox.getFill().setSolidFill(COLORS.WHITE);
  addText(s35, "수고했어요!", W/2 - 200, H/2 - 80, 400, 36, COLORS.DARK, true, true);
  addText(s35, "📋 이제 여러 데이터를 한 곳에\n모아서 관리할 수 있어요!", W/2 - 200, H/2 - 20, 400, 18, COLORS.GRAY, false, true);
  addText(s35, "4차시 완료", W/2 - 100, H/2 + 60, 200, 24, COLORS.HAEDAL_YELLOW, true, true);

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
