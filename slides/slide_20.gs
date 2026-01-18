/**
 * [해달에듀] 파이썬 프로그래밍 20차시: 스택 (Stack)
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
function createPythonLesson20() {
  var deck = SlidesApp.create("[해달에듀] 파이썬 20차시 - 스택 자료구조");
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
  addText(s01, "쌓고 빼기!", W/2 - 250, H/2 - 100, 500, 48, COLORS.DARK, true, true);
  addText(s01, "📚 스택(Stack) 자료구조", W/2 - 250, H/2 - 20, 500, 24, COLORS.GRAY, false, true);
  addText(s01, "20차시 | 해달에듀", W/2 - 250, H/2 + 50, 500, 18, COLORS.GRAY, false, true);

  // [Slide 02] 질문 - 접시 쌓기
  var s02 = createHeaderSlide(deck, "접시를 쌓으면?");
  addText(s02, "🍽️ 새 접시는 맨 위에 올리고", 100, 120, 520, 22, COLORS.DARK, true);
  addText(s02, "쓸 때는 맨 위에서 빼죠!", 100, 160, 520, 22, COLORS.DARK, true);
  createImagePlaceholder(s02, 150, 200, 420, 120, "접시 쌓기 이미지");
  var answerBox = s02.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 340, 520, 50);
  answerBox.getFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s02, "이게 바로 스택이에요!", 150, 350, 420, 22, COLORS.DARK, true, true);

  // [Slide 03] 미리보기
  var s03 = createHeaderSlide(deck, "오늘의 완성작!");
  createCard(s03, 120, 130, 480, 180, "⏪", "브라우저 뒤로가기/앞으로가기 구현!", COLORS.CREAM_BG);
  addText(s03, "스택으로 히스토리를 관리해요!", 120, 330, 480, 18, COLORS.GRAY, false, true);

  // [Slide 04] 오늘의 미션
  var s04 = createHeaderSlide(deck, "오늘의 미션!");
  var goalBox = s04.insertShape(SlidesApp.ShapeType.RECTANGLE, 100, 120, 520, 260);
  goalBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  goalBox.getBorder().setDashStyle(SlidesApp.DashStyle.DASH).setWeight(2).getLineFill().setSolidFill(COLORS.GRAY);
  addText(s04, "☐ 1. 스택이 뭔지 이해하기\n\n☐ 2. push와 pop 연산\n\n☐ 3. 리스트로 스택 구현\n\n☐ 4. 브라우저 히스토리 만들기", 140, 140, 440, 20, COLORS.DARK);

  // =====================================================
  // PART 2. 스택 개념 (Concept 1) : 6장
  // =====================================================

  // [Slide 05] 스택이란?
  var s05 = createHeaderSlide(deck, "스택(Stack)이란?");
  addText(s05, "📚 데이터를 쌓아 올리는 구조!", 50, 100, 620, 24, COLORS.DARK, true);
  createCard(s05, 50, 150, 300, 100, "", "새 데이터는 맨 위에 추가", COLORS.LIGHT_BG);
  createCard(s05, 370, 150, 300, 100, "", "꺼낼 때도 맨 위에서!", COLORS.LIGHT_BG);
  var lifoBox = s05.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 280, 520, 70);
  lifoBox.getFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s05, "LIFO: Last In, First Out (후입선출)", 120, 300, 480, 22, COLORS.DARK, true, true);

  // [Slide 06] LIFO 원리
  var s06 = createHeaderSlide(deck, "LIFO 원리");
  addText(s06, "📚 마지막에 들어간 것이 먼저 나온다!", 50, 100, 620, 22, COLORS.DARK, true);
  createCodeBlock(s06, 100, 150, 520, 120, "넣기: A → B → C\n\n빼기: C → B → A\n\nC가 마지막에 들어갔지만 먼저 나옴!");
  addText(s06, "📦 나중에 넣은 것을 먼저 꺼내요!", 100, 300, 520, 18, COLORS.GRAY);

  // [Slide 07] 일상 속 스택
  var s07 = createHeaderSlide(deck, "일상 속 스택");
  createCard(s07, 40, 100, 200, 90, "🍽️", "접시 쌓기", COLORS.LIGHT_BG);
  createCard(s07, 260, 100, 200, 90, "📚", "책 쌓기", COLORS.LIGHT_BG);
  createCard(s07, 480, 100, 200, 90, "⏪", "브라우저\n뒤로가기", COLORS.LIGHT_BG);
  createCard(s07, 150, 210, 200, 90, "↩️", "Ctrl+Z\n되돌리기", COLORS.CREAM_BG);
  createCard(s07, 370, 210, 200, 90, "🥞", "팬케이크\n쌓기", COLORS.CREAM_BG);
  addText(s07, "모두 LIFO 원리로 동작해요!", 100, 330, 520, 18, COLORS.GRAY, true, true);

  // [Slide 08] 스택 연산
  var s08 = createHeaderSlide(deck, "스택 연산");
  var tableBox8 = s08.insertShape(SlidesApp.ShapeType.RECTANGLE, 80, 100, 560, 260);
  tableBox8.getFill().setSolidFill(COLORS.LIGHT_BG);
  tableBox8.getBorder().setWeight(2).getLineFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s08, "연산              의미", 100, 120, 520, 20, COLORS.DARK, true);
  addText(s08, "───────────────────────────────", 100, 145, 520, 14, COLORS.GRAY);
  addText(s08, "push            맨 위에 추가\n\npop             맨 위에서 제거 & 반환\n\npeek/top        맨 위 확인 (제거 안함)\n\nisEmpty         비어있는지 확인", 100, 170, 520, 18, COLORS.DARK);

  // [Slide 09] 스택 동작 시각화
  var s09 = createHeaderSlide(deck, "스택 동작 시각화");
  createCodeBlock(s09, 60, 100, 600, 200, "push(A):  [A]\npush(B):  [A, B]\npush(C):  [A, B, C]\n\npop():    [A, B]    → 반환: C\npop():    [A]       → 반환: B");
  addText(s09, "맨 위(오른쪽)에서 추가/제거!", 60, 320, 600, 18, COLORS.GRAY);

  // [Slide 10] 빈 스택 주의
  var s10 = createHeaderSlide(deck, "⚠️ 빈 스택에서 pop?");
  addText(s10, "스택이 비어있는데 pop하면 에러!", 50, 100, 620, 22, COLORS.RED_HIGHLIGHT, true);
  createCodeBlock(s10, 80, 150, 560, 110, "stack = []\nstack.pop()  # IndexError!");
  var warningBox = s10.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 290, 520, 70);
  warningBox.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s10, "💡 항상 비어있는지 확인하고 pop!", 130, 310, 460, 20, COLORS.DARK, true, true);

  // =====================================================
  // PART 3. 리스트로 스택 구현 (Concept 2) : 6장
  // =====================================================

  // [Slide 11] 파이썬 리스트 = 스택
  var s11 = createHeaderSlide(deck, "파이썬 리스트 = 스택!");
  addText(s11, "🐍 리스트가 이미 스택 기능을 제공!", 50, 100, 620, 22, COLORS.DARK, true);
  var methodBox = s11.insertShape(SlidesApp.ShapeType.RECTANGLE, 80, 150, 560, 120);
  methodBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s11, "append() = push\n\npop() = pop", 120, 170, 480, 20, COLORS.DARK, true);
  var tipBox11 = s11.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 300, 520, 60);
  tipBox11.getFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s11, "추가 구현 없이 바로 사용!", 150, 315, 420, 20, COLORS.DARK, true, true);

  // [Slide 12] 기본 스택 사용
  var s12 = createHeaderSlide(deck, "기본 스택 사용");
  createCodeBlock(s12, 40, 95, 640, 280, 'stack = []  # 빈 스택\n\n# push\nstack.append("A")\nstack.append("B")\nstack.append("C")\nprint(stack)  # ["A", "B", "C"]\n\n# pop\ntop = stack.pop()\nprint(top)    # C\nprint(stack)  # ["A", "B"]');

  // [Slide 13] peek 구현
  var s13 = createHeaderSlide(deck, "peek 구현");
  createCodeBlock(s13, 50, 100, 620, 200, 'stack = ["A", "B", "C"]\n\n# 맨 위 확인 (제거 안함)\ntop = stack[-1]\nprint(top)    # C\nprint(stack)  # ["A", "B", "C"] (그대로)');
  var tipBox13 = s13.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 320, 520, 50);
  tipBox13.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s13, "[-1]로 마지막 요소 확인!", 150, 330, 420, 20, COLORS.DARK, true, true);

  // [Slide 14] isEmpty 확인
  var s14 = createHeaderSlide(deck, "isEmpty 확인");
  createCodeBlock(s14, 50, 100, 620, 220, 'stack = []\n\n# 방법 1: len() 사용\nif len(stack) == 0:\n    print("스택이 비어있음")\n\n# 방법 2: 직접 비교\nif not stack:\n    print("스택이 비어있음")');
  addText(s14, "빈 리스트는 False로 평가됨!", 50, 340, 620, 16, COLORS.GRAY);

  // [Slide 15] 안전한 pop
  var s15 = createHeaderSlide(deck, "안전한 pop");
  createCodeBlock(s15, 40, 95, 640, 260, 'def safe_pop(stack):\n    if stack:  # 비어있지 않으면\n        return stack.pop()\n    else:\n        print("스택이 비어있습니다!")\n        return None\n\nstack = []\nresult = safe_pop(stack)\n# 스택이 비어있습니다!');

  // [Slide 16] 스택 클래스
  var s16 = createHeaderSlide(deck, "스택 클래스");
  createCodeBlock(s16, 25, 85, 670, 300, 'class Stack:\n    def __init__(self):\n        self.items = []\n    \n    def push(self, item):\n        self.items.append(item)\n    \n    def pop(self):\n        if self.items:\n            return self.items.pop()\n        return None\n    \n    def peek(self):\n        if self.items:\n            return self.items[-1]\n        return None\n    \n    def is_empty(self):\n        return len(self.items) == 0');

  // =====================================================
  // PART 4. 실습 A - 괄호 검사 (Practice A) : 5장
  // =====================================================

  // [Slide 17] 실습 A 안내
  var s17 = createHeaderSlide(deck, "실습 A: 괄호 검사기");
  addText(s17, "📝 괄호가 올바르게 짝지어졌는지 확인!", 50, 100, 620, 22, COLORS.DARK, true);
  var exampleBox = s17.insertShape(SlidesApp.ShapeType.RECTANGLE, 100, 150, 520, 120);
  exampleBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s17, '"(())" → ✅ 올바름\n\n"(()("  → ❌ 짝이 안맞음', 150, 175, 420, 20, COLORS.DARK);
  addText(s17, "스택으로 해결할 수 있어요!", 100, 310, 520, 18, COLORS.GRAY, true, true);

  // [Slide 18] 괄호 검사 원리
  var s18 = createHeaderSlide(deck, "괄호 검사 원리");
  createCard(s18, 40, 100, 200, 80, "1️⃣", '여는 괄호 ( → push', COLORS.LIGHT_BG);
  createCard(s18, 260, 100, 200, 80, "2️⃣", '닫는 괄호 ) → pop', COLORS.LIGHT_BG);
  createCard(s18, 480, 100, 200, 80, "3️⃣", '끝났을 때\n스택 비어있으면 OK', COLORS.LIGHT_BG);
  createImagePlaceholder(s18, 100, 200, 520, 150, "괄호 검사 과정 시각화");

  // [Slide 19] 괄호 검사 코드
  var s19 = createHeaderSlide(deck, "괄호 검사 코드");
  createCodeBlock(s19, 30, 85, 660, 300, 'def check_brackets(text):\n    stack = []\n    for char in text:\n        if char == "(":\n            stack.append(char)\n        elif char == ")":\n            if not stack:\n                return False  # 짝이 없음\n            stack.pop()\n    return len(stack) == 0  # 스택이 비어야 OK\n\n# 테스트\nprint(check_brackets("(())"))   # True\nprint(check_brackets("(()"))    # False\nprint(check_brackets(")("))     # False');

  // [Slide 20] 여러 종류 괄호
  var s20 = createHeaderSlide(deck, "여러 종류 괄호");
  createCodeBlock(s20, 25, 85, 670, 300, 'def check_all_brackets(text):\n    stack = []\n    pairs = {")": "(", "]": "[", "}": "{"}\n    \n    for char in text:\n        if char in "([{":\n            stack.append(char)\n        elif char in ")]}":\n            if not stack:\n                return False\n            if stack.pop() != pairs[char]:\n                return False\n    return len(stack) == 0\n\nprint(check_all_brackets("{[()]}"))  # True\nprint(check_all_brackets("{[(])}"))  # False');

  // [Slide 21] 실행 결과
  var s21 = createHeaderSlide(deck, "실행 결과");
  createCodeBlock(s21, 100, 110, 520, 180, '"(())"      → True\n"(()"       → False\n"{[()]}"    → True\n"{[(])}"    → False');
  var successBox = s21.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 310, 520, 60);
  successBox.getFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s21, "🎉 괄호 검사기 완성!", 150, 325, 420, 22, COLORS.DARK, true, true);

  // =====================================================
  // PART 5. 실습 B - 브라우저 히스토리 (Practice B) : 6장
  // =====================================================

  // [Slide 22] 실습 B 안내
  var s22 = createHeaderSlide(deck, "실습 B: 브라우저 히스토리");
  addText(s22, "⏪ 뒤로가기, ⏩ 앞으로가기", 50, 100, 620, 24, COLORS.DARK, true);
  var hintBox = s22.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 160, 520, 100);
  hintBox.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s22, "💡 2개의 스택으로 구현!\n   back_stack + forward_stack", 130, 185, 460, 20, COLORS.DARK);
  createImagePlaceholder(s22, 100, 280, 520, 90, "브라우저 뒤로/앞으로 버튼 이미지");

  // [Slide 23] 2개의 스택
  var s23 = createHeaderSlide(deck, "2개의 스택");
  createCard(s23, 50, 100, 280, 120, "📚 back_stack", "이전 페이지들", COLORS.LIGHT_BG);
  createCard(s23, 380, 100, 280, 120, "📚 forward_stack", "앞으로 갈 페이지들", COLORS.LIGHT_BG);
  addText(s23, "• 새 페이지 방문: 현재를 back에 push\n• 뒤로가기: back에서 pop, forward에 push\n• 앞으로가기: forward에서 pop, back에 push", 50, 250, 620, 18, COLORS.DARK);

  // [Slide 24] 변수 설정
  var s24 = createHeaderSlide(deck, "변수 설정");
  createCodeBlock(s24, 50, 100, 620, 240, 'current = "홈"\nback_stack = []\nforward_stack = []\n\ndef show_status():\n    print(f"\\n현재 페이지: {current}")\n    print(f"뒤로: {back_stack}")\n    print(f"앞으로: {forward_stack}")');

  // [Slide 25] 기능 구현
  var s25 = createHeaderSlide(deck, "기능 구현");
  createCodeBlock(s25, 25, 85, 670, 300, 'def visit(page):\n    global current\n    back_stack.append(current)\n    current = page\n    forward_stack.clear()  # 새 페이지 가면 앞으로 초기화\n\ndef go_back():\n    global current\n    if back_stack:\n        forward_stack.append(current)\n        current = back_stack.pop()\n\ndef go_forward():\n    global current\n    if forward_stack:\n        back_stack.append(current)\n        current = forward_stack.pop()');

  // [Slide 26] 테스트
  var s26 = createHeaderSlide(deck, "테스트");
  createCodeBlock(s26, 50, 100, 620, 250, 'visit("구글")\nshow_status()\n\nvisit("유튜브")\nshow_status()\n\ngo_back()\nprint("\\n뒤로가기!")\nshow_status()\n\ngo_forward()\nprint("\\n앞으로가기!")\nshow_status()');

  // [Slide 27] 실행 결과
  var s27 = createHeaderSlide(deck, "실행 결과");
  createCodeBlock(s27, 60, 95, 600, 290, "현재 페이지: 구글\n뒤로: ['홈']\n앞으로: []\n\n현재 페이지: 유튜브\n뒤로: ['홈', '구글']\n앞으로: []\n\n뒤로가기!\n현재 페이지: 구글\n뒤로: ['홈']\n앞으로: ['유튜브']");

  // =====================================================
  // PART 6. 스택 활용 (Advanced) : 4장
  // =====================================================

  // [Slide 28] 스택 활용 사례
  var s28 = createHeaderSlide(deck, "스택 활용 사례");
  createCard(s28, 40, 100, 200, 80, "⏪", "브라우저\n뒤로가기", COLORS.LIGHT_BG);
  createCard(s28, 260, 100, 200, 80, "↩️", "Ctrl+Z\n되돌리기", COLORS.LIGHT_BG);
  createCard(s28, 480, 100, 200, 80, "📝", "수식\n계산기", COLORS.LIGHT_BG);
  createCard(s28, 150, 200, 200, 80, "🔍", "미로\n탐색", COLORS.CREAM_BG);
  createCard(s28, 370, 200, 200, 80, "📚", "함수 호출\n스택", COLORS.CREAM_BG);

  // [Slide 29] 문자열 뒤집기
  var s29 = createHeaderSlide(deck, "문자열 뒤집기");
  createCodeBlock(s29, 50, 100, 620, 220, 'def reverse_string(s):\n    stack = list(s)  # 문자를 스택에 push\n    result = ""\n    while stack:\n        result += stack.pop()  # 하나씩 pop\n    return result\n\nprint(reverse_string("hello"))  # olleh');
  addText(s29, "스택의 LIFO 특성 활용!", 50, 340, 620, 16, COLORS.GRAY);

  // [Slide 30] 되돌리기 기능
  var s30 = createHeaderSlide(deck, "되돌리기 기능");
  createCodeBlock(s30, 40, 95, 640, 280, 'history = []\ncurrent_text = ""\n\ndef type_text(text):\n    global current_text\n    history.append(current_text)  # 이전 상태 저장\n    current_text = text\n\ndef undo():\n    global current_text\n    if history:\n        current_text = history.pop()\n\ntype_text("Hello")\ntype_text("Hello World")\nprint(current_text)  # Hello World\nundo()\nprint(current_text)  # Hello');

  // [Slide 31] 스택 정리
  var s31 = createHeaderSlide(deck, "스택 정리");
  var summaryBox = s31.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 80, 110, 560, 250);
  summaryBox.getFill().setSolidFill(COLORS.CREAM_BG);
  summaryBox.getBorder().setWeight(3).getLineFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s31, "✅ LIFO (후입선출)\n\n✅ push: 맨 위에 추가\n\n✅ pop: 맨 위에서 제거\n\n✅ 리스트로 쉽게 구현\n\n✅ append(), pop() 사용", 120, 140, 480, 18, COLORS.DARK);

  // =====================================================
  // PART 7. 마무리 (Finish) : 4장
  // =====================================================

  // [Slide 32] 도전 과제
  var s32 = createHeaderSlide(deck, "도전 과제!");
  var challengeBox = s32.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 80, 120, 560, 220);
  challengeBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s32, "🏆 후위 표기법 계산기!", 120, 150, 480, 28, COLORS.DARK, true, true);
  addText(s32, '"3 4 + 2 *" = (3+4)*2 = 14\n\n힌트: 숫자는 push\n연산자면 pop 2개 → 계산 → push', 120, 210, 480, 18, COLORS.DARK);

  // [Slide 33] 오늘 배운 것
  var s33 = createHeaderSlide(deck, "오늘 배운 것");
  var reviewBox = s33.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 80, 110, 560, 260);
  reviewBox.getFill().setSolidFill(COLORS.CREAM_BG);
  reviewBox.getBorder().setWeight(3).getLineFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s33, "✅ 스택 = 후입선출 (LIFO)\n\n✅ push (추가), pop (제거)\n\n✅ 리스트의 append(), pop()\n\n✅ 괄호 검사, 브라우저 히스토리", 120, 140, 480, 20, COLORS.DARK);

  // [Slide 34] 예고
  var s34 = deck.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  s34.getBackground().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s34, "다음 시간에는...", W/2 - 200, H/2 - 100, 400, 28, COLORS.DARK, true, true);
  addText(s34, "🎫 큐(Queue) 자료구조!", W/2 - 200, H/2 - 30, 400, 24, COLORS.WHITE, true, true);
  addText(s34, "줄 서기의 원리! 먼저 온 사람이 먼저!", W/2 - 200, H/2 + 30, 400, 18, COLORS.WHITE, false, true);
  addText(s34, "21차시에서 만나요!", W/2 - 150, H/2 + 100, 300, 20, COLORS.DARK, true, true);

  // [Slide 35] 엔딩
  var s35 = deck.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  s35.getBackground().setSolidFill(COLORS.HAEDAL_YELLOW);
  var endBox = s35.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, W/2 - 250, H/2 - 120, 500, 240);
  endBox.getFill().setSolidFill(COLORS.WHITE);
  addText(s35, "수고했어요!", W/2 - 200, H/2 - 80, 400, 36, COLORS.DARK, true, true);
  addText(s35, "📚 스택 자료구조 완전 정복!", W/2 - 200, H/2 - 20, 400, 20, COLORS.GRAY, false, true);
  addText(s35, "20차시 완료", W/2 - 100, H/2 + 60, 200, 24, COLORS.HAEDAL_YELLOW, true, true);

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
