/**
 * [해달에듀] 파이썬 프로그래밍 21차시: 큐 (Queue)
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
function createPythonLesson21() {
  var deck = SlidesApp.create("[해달에듀] 파이썬 21차시 - 큐 자료구조");
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
  addText(s01, "줄 서기의 원리!", W/2 - 250, H/2 - 100, 500, 48, COLORS.DARK, true, true);
  addText(s01, "🎫 큐(Queue) 자료구조", W/2 - 250, H/2 - 20, 500, 24, COLORS.GRAY, false, true);
  addText(s01, "21차시 | 해달에듀", W/2 - 250, H/2 + 50, 500, 18, COLORS.GRAY, false, true);

  // [Slide 02] 질문 - 줄 서기
  var s02 = createHeaderSlide(deck, "은행이나 식당에서 줄을 서면?");
  addText(s02, "👥 먼저 온 사람이 먼저 서비스 받죠!", 100, 120, 520, 22, COLORS.DARK, true);
  addText(s02, "새치기 금지!", 100, 160, 520, 22, COLORS.RED_HIGHLIGHT, true);
  createImagePlaceholder(s02, 150, 200, 420, 120, "줄 서기 이미지");
  var answerBox = s02.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 340, 520, 50);
  answerBox.getFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s02, "이게 바로 큐예요!", 150, 350, 420, 22, COLORS.DARK, true, true);

  // [Slide 03] 미리보기
  var s03 = createHeaderSlide(deck, "오늘의 완성작!");
  createCard(s03, 120, 130, 480, 180, "🍽️", "식당 예약/대기 시스템 구현!", COLORS.CREAM_BG);
  addText(s03, "큐로 대기 순번을 관리해요!", 120, 330, 480, 18, COLORS.GRAY, false, true);

  // [Slide 04] 오늘의 미션
  var s04 = createHeaderSlide(deck, "오늘의 미션!");
  var goalBox = s04.insertShape(SlidesApp.ShapeType.RECTANGLE, 100, 120, 520, 260);
  goalBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  goalBox.getBorder().setDashStyle(SlidesApp.DashStyle.DASH).setWeight(2).getLineFill().setSolidFill(COLORS.GRAY);
  addText(s04, "☐ 1. 큐가 뭔지 이해하기\n\n☐ 2. enqueue와 dequeue 연산\n\n☐ 3. deque로 큐 구현\n\n☐ 4. 예약 시스템 만들기", 140, 140, 440, 20, COLORS.DARK);

  // =====================================================
  // PART 2. 큐 개념 (Concept 1) : 6장
  // =====================================================

  // [Slide 05] 큐란?
  var s05 = createHeaderSlide(deck, "큐(Queue)란?");
  addText(s05, "🎫 데이터가 줄을 서는 구조!", 50, 100, 620, 24, COLORS.DARK, true);
  createCard(s05, 50, 150, 300, 100, "", "새 데이터는 맨 뒤에 추가", COLORS.LIGHT_BG);
  createCard(s05, 370, 150, 300, 100, "", "꺼낼 때는 맨 앞에서!", COLORS.LIGHT_BG);
  var fifoBox = s05.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 280, 520, 70);
  fifoBox.getFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s05, "FIFO: First In, First Out (선입선출)", 120, 300, 480, 22, COLORS.DARK, true, true);

  // [Slide 06] FIFO 원리
  var s06 = createHeaderSlide(deck, "FIFO 원리");
  addText(s06, "🚶 먼저 들어간 것이 먼저 나온다!", 50, 100, 620, 22, COLORS.DARK, true);
  createCodeBlock(s06, 100, 150, 520, 120, "넣기: A → B → C\n\n빼기: A → B → C\n\nA가 먼저 들어갔고 먼저 나옴!");
  addText(s06, "📦 먼저 넣은 것을 먼저 꺼내요!", 100, 300, 520, 18, COLORS.GRAY);

  // [Slide 07] 스택 vs 큐
  var s07 = createHeaderSlide(deck, "스택 vs 큐");
  var tableBox7 = s07.insertShape(SlidesApp.ShapeType.RECTANGLE, 60, 100, 600, 250);
  tableBox7.getFill().setSolidFill(COLORS.LIGHT_BG);
  tableBox7.getBorder().setWeight(2).getLineFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s07, "              스택           큐", 80, 120, 560, 18, COLORS.DARK, true);
  addText(s07, "─────────────────────────────────────", 80, 145, 560, 12, COLORS.GRAY);
  addText(s07, "원리          LIFO          FIFO\n\n의미          후입선출        선입선출\n\n추가/제거     맨 위에서       뒤에 추가, 앞에서 제거\n\n비유          접시 쌓기       줄 서기", 80, 165, 560, 18, COLORS.DARK);

  // [Slide 08] 일상 속 큐
  var s08 = createHeaderSlide(deck, "일상 속 큐");
  createCard(s08, 40, 100, 200, 90, "🏦", "은행 대기표", COLORS.LIGHT_BG);
  createCard(s08, 260, 100, 200, 90, "🍽️", "식당 줄 서기", COLORS.LIGHT_BG);
  createCard(s08, 480, 100, 200, 90, "🎢", "놀이공원\n대기줄", COLORS.LIGHT_BG);
  createCard(s08, 150, 210, 200, 90, "🖨️", "프린터\n인쇄 대기열", COLORS.CREAM_BG);
  createCard(s08, 370, 210, 200, 90, "📱", "메시지\n전송 대기", COLORS.CREAM_BG);
  addText(s08, "모두 FIFO 원리로 동작해요!", 100, 330, 520, 18, COLORS.GRAY, true, true);

  // [Slide 09] 큐 연산
  var s09 = createHeaderSlide(deck, "큐 연산");
  var tableBox9 = s09.insertShape(SlidesApp.ShapeType.RECTANGLE, 80, 100, 560, 260);
  tableBox9.getFill().setSolidFill(COLORS.LIGHT_BG);
  tableBox9.getBorder().setWeight(2).getLineFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s09, "연산               의미", 100, 120, 520, 20, COLORS.DARK, true);
  addText(s09, "───────────────────────────────", 100, 145, 520, 14, COLORS.GRAY);
  addText(s09, "enqueue          맨 뒤에 추가\n\ndequeue          맨 앞에서 제거 & 반환\n\nfront/peek       맨 앞 확인 (제거 안함)\n\nisEmpty          비어있는지 확인", 100, 170, 520, 18, COLORS.DARK);

  // [Slide 10] 큐 동작 시각화
  var s10 = createHeaderSlide(deck, "큐 동작 시각화");
  createCodeBlock(s10, 60, 100, 600, 200, "enqueue(A): [A]           ← 뒤 (rear)\nenqueue(B): [A, B]\nenqueue(C): [A, B, C]\n\ndequeue():  [B, C]    → 반환: A (앞: front)\ndequeue():  [C]       → 반환: B");
  addText(s10, "뒤에서 추가, 앞에서 제거!", 60, 320, 600, 18, COLORS.GRAY);

  // =====================================================
  // PART 3. 리스트와 deque (Concept 2) : 6장
  // =====================================================

  // [Slide 11] 리스트로 큐 (비효율)
  var s11 = createHeaderSlide(deck, "리스트로 큐 (비효율)");
  createCodeBlock(s11, 50, 100, 620, 180, 'queue = []\n\n# enqueue\nqueue.append("A")\nqueue.append("B")\nqueue.append("C")\n\n# dequeue\nfirst = queue.pop(0)  # 맨 앞 제거\nprint(first)  # A');
  var warningBox = s11.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 300, 520, 60);
  warningBox.getFill().setSolidFill(COLORS.RED_HIGHLIGHT);
  addText(s11, "⚠️ pop(0)은 느려요!", 150, 315, 420, 20, COLORS.WHITE, true, true);

  // [Slide 12] 왜 pop(0)이 느릴까?
  var s12 = createHeaderSlide(deck, "왜 pop(0)이 느릴까?");
  addText(s12, "📋 맨 앞을 빼면 나머지가 다 이동!", 50, 100, 620, 20, COLORS.DARK, true);
  createCodeBlock(s12, 80, 150, 560, 120, "[A, B, C, D] → pop(0)\n\n[B, C, D] ← B, C, D가 앞으로 이동");
  var tipBox = s12.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 300, 520, 60);
  tipBox.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s12, "데이터가 많으면 매우 느림!", 150, 315, 420, 18, COLORS.DARK, true, true);

  // [Slide 13] deque 소개
  var s13 = createHeaderSlide(deck, "deque 소개");
  addText(s13, "🚀 collections 모듈의 deque!", 50, 100, 620, 24, COLORS.DARK, true);
  var featureBox = s13.insertShape(SlidesApp.ShapeType.RECTANGLE, 80, 160, 560, 150);
  featureBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s13, "• Double-Ended Queue (덱)\n• 앞/뒤 모두 빠르게 추가/제거\n• 큐 구현에 최적!", 120, 185, 480, 20, COLORS.DARK);
  var tipBox13 = s13.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 330, 520, 50);
  tipBox13.getFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s13, "큐를 만들 때는 deque를 쓰자!", 150, 340, 420, 20, COLORS.DARK, true, true);

  // [Slide 14] deque 사용법
  var s14 = createHeaderSlide(deck, "deque 사용법");
  createCodeBlock(s14, 40, 95, 640, 280, 'from collections import deque\n\nqueue = deque()\n\n# enqueue\nqueue.append("A")\nqueue.append("B")\nqueue.append("C")\nprint(queue)  # deque([\'A\', \'B\', \'C\'])\n\n# dequeue\nfirst = queue.popleft()  # 앞에서 제거 (빠름!)\nprint(first)  # A\nprint(queue)  # deque([\'B\', \'C\'])');

  // [Slide 15] 리스트 vs deque
  var s15 = createHeaderSlide(deck, "리스트 vs deque");
  var tableBox15 = s15.insertShape(SlidesApp.ShapeType.RECTANGLE, 60, 100, 600, 220);
  tableBox15.getFill().setSolidFill(COLORS.LIGHT_BG);
  tableBox15.getBorder().setWeight(2).getLineFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s15, "              리스트           deque", 80, 120, 560, 18, COLORS.DARK, true);
  addText(s15, "─────────────────────────────────────", 80, 145, 560, 12, COLORS.GRAY);
  addText(s15, "enqueue       append()        append()\n\ndequeue       pop(0) 느림     popleft() 빠름\n\n권장          ❌              ✅", 80, 165, 560, 18, COLORS.DARK);
  var conclusionBox = s15.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 340, 520, 50);
  conclusionBox.getFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s15, "큐는 deque를 쓰자!", 150, 350, 420, 20, COLORS.DARK, true, true);

  // [Slide 16] 큐 유틸리티
  var s16 = createHeaderSlide(deck, "큐 유틸리티");
  createCodeBlock(s16, 50, 100, 620, 240, 'from collections import deque\n\nqueue = deque(["A", "B", "C"])\n\n# front 확인\nfront = queue[0]\nprint(front)  # A\n\n# 크기 확인\nprint(len(queue))  # 3\n\n# 비어있는지 확인\nprint(len(queue) == 0)  # False');

  // =====================================================
  // PART 4. 실습 A - 프린터 대기열 (Practice A) : 5장
  // =====================================================

  // [Slide 17] 실습 A 안내
  var s17 = createHeaderSlide(deck, "실습 A: 프린터 대기열");
  addText(s17, "🖨️ 인쇄 작업이 순서대로 처리되는 시스템!", 50, 100, 620, 22, COLORS.DARK, true);
  var goalBox17 = s17.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 160, 520, 120);
  goalBox17.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s17, "🎯 먼저 요청한 작업이 먼저 출력!\n   FIFO 원리를 그대로 구현!", 130, 195, 460, 18, COLORS.DARK);
  createImagePlaceholder(s17, 150, 300, 420, 70, "프린터 대기열 이미지");

  // [Slide 18] 프린터 큐 구현
  var s18 = createHeaderSlide(deck, "프린터 큐 구현");
  createCodeBlock(s18, 30, 85, 660, 300, 'from collections import deque\n\nprint_queue = deque()\n\ndef add_job(document):\n    print_queue.append(document)\n    print(f"📄 \'{document}\' 대기열에 추가")\n    print(f"   현재 대기: {len(print_queue)}개")\n\ndef print_job():\n    if print_queue:\n        doc = print_queue.popleft()\n        print(f"🖨️ \'{doc}\' 인쇄 중...")\n        print(f"   남은 대기: {len(print_queue)}개")\n    else:\n        print("대기 중인 작업이 없습니다.")');

  // [Slide 19] 테스트
  var s19 = createHeaderSlide(deck, "테스트");
  createCodeBlock(s19, 50, 100, 620, 240, 'add_job("보고서.pdf")\nadd_job("이력서.docx")\nadd_job("사진.jpg")\n\nprint("\\n--- 인쇄 시작 ---")\nprint_job()\nprint_job()\nprint_job()\nprint_job()  # 대기 없음');

  // [Slide 20] 실행 결과
  var s20 = createHeaderSlide(deck, "실행 결과");
  createCodeBlock(s20, 60, 95, 600, 290, "📄 '보고서.pdf' 대기열에 추가\n   현재 대기: 1개\n📄 '이력서.docx' 대기열에 추가\n   현재 대기: 2개\n📄 '사진.jpg' 대기열에 추가\n   현재 대기: 3개\n\n--- 인쇄 시작 ---\n🖨️ '보고서.pdf' 인쇄 중...\n   남은 대기: 2개\n🖨️ '이력서.docx' 인쇄 중...\n   남은 대기: 1개");

  // [Slide 21] 확장
  var s21 = createHeaderSlide(deck, "확장: 우선순위 표시");
  createCodeBlock(s21, 50, 100, 620, 230, 'def show_queue():\n    if print_queue:\n        print("\\n📋 인쇄 대기열:")\n        for i, doc in enumerate(print_queue, 1):\n            print(f"   {i}. {doc}")\n    else:\n        print("대기열이 비어있습니다.")');
  addText(s21, "대기 순서를 보여주는 기능 추가!", 50, 350, 620, 16, COLORS.GRAY);

  // =====================================================
  // PART 5. 실습 B - 식당 예약 (Practice B) : 6장
  // =====================================================

  // [Slide 22] 실습 B 안내
  var s22 = createHeaderSlide(deck, "실습 B: 식당 예약 시스템");
  addText(s22, "🍽️ 손님이 대기하고 순서대로 입장!", 50, 100, 620, 22, COLORS.DARK, true);
  var featureBox22 = s22.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 160, 520, 120);
  featureBox22.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s22, "• 대기 번호 발급\n• 현재 대기 인원 표시\n• 순서대로 호출", 130, 185, 460, 18, COLORS.DARK);
  createImagePlaceholder(s22, 150, 300, 420, 70, "식당 대기표 이미지");

  // [Slide 23] 변수 설정
  var s23 = createHeaderSlide(deck, "변수 설정");
  createCodeBlock(s23, 50, 100, 620, 240, 'from collections import deque\n\nwaiting_queue = deque()\nnext_number = 1  # 다음 대기 번호\n\ndef show_status():\n    print(f"\\n현재 대기 인원: {len(waiting_queue)}명")\n    if waiting_queue:\n        print(f"다음 입장: {waiting_queue[0][\'number\']}번")');

  // [Slide 24] 대기 등록
  var s24 = createHeaderSlide(deck, "대기 등록");
  createCodeBlock(s24, 40, 95, 640, 280, 'def register(name):\n    global next_number\n    ticket = next_number\n    waiting_queue.append({"number": ticket, "name": name})\n    print(f"\\n🎫 {name}님, {ticket}번 대기표 발급!")\n    print(f"   현재 대기: {len(waiting_queue)}명")\n    next_number += 1\n    return ticket');

  // [Slide 25] 입장 처리
  var s25 = createHeaderSlide(deck, "입장 처리");
  createCodeBlock(s25, 25, 85, 670, 300, 'def call_next():\n    if waiting_queue:\n        guest = waiting_queue.popleft()\n        print(f"\\n📢 {guest[\'number\']}번 {guest[\'name\']}님, 입장하세요!")\n        print(f"   남은 대기: {len(waiting_queue)}명")\n    else:\n        print("\\n대기 중인 손님이 없습니다.")\n\ndef show_waiting():\n    print("\\n📋 대기 명단:")\n    if waiting_queue:\n        for guest in waiting_queue:\n            print(f"   {guest[\'number\']}번 - {guest[\'name\']}")\n    else:\n        print("   (없음)")');

  // [Slide 26] 테스트
  var s26 = createHeaderSlide(deck, "테스트");
  createCodeBlock(s26, 50, 100, 620, 250, 'register("김철수")\nregister("이영희")\nregister("박민수")\n\nshow_waiting()\n\nprint("\\n--- 입장 ---")\ncall_next()\ncall_next()\n\nshow_waiting()');

  // [Slide 27] 실행 결과
  var s27 = createHeaderSlide(deck, "실행 결과");
  createCodeBlock(s27, 50, 90, 620, 300, "🎫 김철수님, 1번 대기표 발급!\n   현재 대기: 1명\n🎫 이영희님, 2번 대기표 발급!\n   현재 대기: 2명\n🎫 박민수님, 3번 대기표 발급!\n   현재 대기: 3명\n\n📋 대기 명단:\n   1번 - 김철수\n   2번 - 이영희\n   3번 - 박민수\n\n--- 입장 ---\n📢 1번 김철수님, 입장하세요!");

  // =====================================================
  // PART 6. 큐 활용 (Advanced) : 4장
  // =====================================================

  // [Slide 28] 큐 활용 사례
  var s28 = createHeaderSlide(deck, "큐 활용 사례");
  createCard(s28, 40, 100, 200, 80, "🖨️", "프린터\n대기열", COLORS.LIGHT_BG);
  createCard(s28, 260, 100, 200, 80, "📱", "메시지\n큐", COLORS.LIGHT_BG);
  createCard(s28, 480, 100, 200, 80, "🎮", "게임 이벤트\n처리", COLORS.LIGHT_BG);
  createCard(s28, 150, 200, 200, 80, "🌐", "네트워크\n패킷 처리", COLORS.CREAM_BG);
  createCard(s28, 370, 200, 200, 80, "🔍", "너비 우선\n탐색 (BFS)", COLORS.CREAM_BG);

  // [Slide 29] rotate
  var s29 = createHeaderSlide(deck, "회전 (rotate)");
  createCodeBlock(s29, 50, 100, 620, 220, 'from collections import deque\n\nq = deque([1, 2, 3, 4, 5])\n\n# 오른쪽으로 회전\nq.rotate(1)\nprint(q)  # [5, 1, 2, 3, 4]\n\n# 왼쪽으로 회전\nq.rotate(-2)\nprint(q)  # [2, 3, 4, 5, 1]');
  addText(s29, "deque의 특별 기능!", 50, 340, 620, 16, COLORS.GRAY);

  // [Slide 30] 최대 크기 제한
  var s30 = createHeaderSlide(deck, "최대 크기 제한");
  createCodeBlock(s30, 50, 100, 620, 220, 'from collections import deque\n\n# 최대 3개까지만\nrecent = deque(maxlen=3)\n\nrecent.append("A")\nrecent.append("B")\nrecent.append("C")\nrecent.append("D")  # A가 자동 삭제\n\nprint(recent)  # deque([\'B\', \'C\', \'D\'])');
  addText(s30, "최근 N개만 유지하고 싶을 때!", 50, 340, 620, 16, COLORS.GRAY);

  // [Slide 31] 스택 vs 큐 정리
  var s31 = createHeaderSlide(deck, "스택 vs 큐 정리");
  var tableBox31 = s31.insertShape(SlidesApp.ShapeType.RECTANGLE, 50, 100, 620, 260);
  tableBox31.getFill().setSolidFill(COLORS.CREAM_BG);
  tableBox31.getBorder().setWeight(3).getLineFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s31, "              스택             큐", 70, 120, 580, 18, COLORS.DARK, true);
  addText(s31, "───────────────────────────────────────", 70, 145, 580, 12, COLORS.GRAY);
  addText(s31, "원리          LIFO            FIFO\n\n비유          접시 쌓기        줄 서기\n\n추가          push (위)       enqueue (뒤)\n\n제거          pop (위)        dequeue (앞)\n\n구현          list            deque", 70, 165, 580, 18, COLORS.DARK);

  // =====================================================
  // PART 7. 마무리 (Finish) : 4장
  // =====================================================

  // [Slide 32] 도전 과제
  var s32 = createHeaderSlide(deck, "도전 과제!");
  var challengeBox = s32.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 80, 120, 560, 220);
  challengeBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s32, "🏆 핫식스 대기열 게임!", 120, 150, 480, 28, COLORS.DARK, true, true);
  addText(s32, "• 랜덤으로 손님 추가 (enqueue)\n• 랜덤으로 서비스 (dequeue)\n• 10턴 후 남은 대기 인원?", 120, 210, 480, 18, COLORS.DARK);

  // [Slide 33] 오늘 배운 것
  var s33 = createHeaderSlide(deck, "오늘 배운 것");
  var reviewBox = s33.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 80, 110, 560, 260);
  reviewBox.getFill().setSolidFill(COLORS.CREAM_BG);
  reviewBox.getBorder().setWeight(3).getLineFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s33, "✅ 큐 = 선입선출 (FIFO)\n\n✅ enqueue (추가), dequeue (제거)\n\n✅ deque의 append(), popleft()\n\n✅ 프린터 대기열, 식당 예약", 120, 140, 480, 20, COLORS.DARK);

  // [Slide 34] 예고
  var s34 = deck.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  s34.getBackground().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s34, "다음 시간에는...", W/2 - 200, H/2 - 100, 400, 28, COLORS.DARK, true, true);
  addText(s34, "🔍 선형 탐색!", W/2 - 200, H/2 - 30, 400, 24, COLORS.WHITE, true, true);
  addText(s34, "데이터에서 원하는 값 찾기!", W/2 - 200, H/2 + 30, 400, 18, COLORS.WHITE, false, true);
  addText(s34, "22차시에서 만나요!", W/2 - 150, H/2 + 100, 300, 20, COLORS.DARK, true, true);

  // [Slide 35] 엔딩
  var s35 = deck.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  s35.getBackground().setSolidFill(COLORS.HAEDAL_YELLOW);
  var endBox = s35.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, W/2 - 250, H/2 - 120, 500, 240);
  endBox.getFill().setSolidFill(COLORS.WHITE);
  addText(s35, "수고했어요!", W/2 - 200, H/2 - 80, 400, 36, COLORS.DARK, true, true);
  addText(s35, "🎫 큐 자료구조 완전 정복!", W/2 - 200, H/2 - 20, 400, 20, COLORS.GRAY, false, true);
  addText(s35, "21차시 완료", W/2 - 100, H/2 + 60, 200, 24, COLORS.HAEDAL_YELLOW, true, true);

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
