/**
 * [해달에듀] 파이썬 프로그래밍 16차시: 파일 입출력
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
function createPythonLesson16() {
  var deck = SlidesApp.create("[해달에듀] 파이썬 16차시 - 데이터를 저장하자!");
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
  addText(s01, "데이터를 저장하자!", W/2 - 250, H/2 - 100, 500, 44, COLORS.DARK, true, true);
  addText(s01, "📁 파일 입출력", W/2 - 250, H/2 - 20, 500, 24, COLORS.GRAY, false, true);
  addText(s01, "16차시 | 해달에듀", W/2 - 250, H/2 + 50, 500, 18, COLORS.GRAY, false, true);

  // [Slide 02] 질문
  var s02 = createHeaderSlide(deck, "프로그램을 껐다 키면 데이터가 사라진다?");
  var problemBox = s02.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 80, 110, 560, 150);
  problemBox.getFill().setSolidFill(COLORS.RED_HIGHLIGHT);
  addText(s02, "😱 변수에 저장한 것들...\n프로그램 종료 = 데이터 증발!", 120, 150, 480, 20, COLORS.WHITE, false, true);
  var solutionBox = s02.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 80, 280, 560, 80);
  solutionBox.getFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s02, "파일에 저장하면 영구 보관! 📁", 120, 305, 480, 20, COLORS.DARK, true, true);

  // [Slide 03] 미리보기
  var s03 = createHeaderSlide(deck, "오늘의 완성작!");
  createCard(s03, 80, 130, 260, 200, "📝", "나만의\n일기장", COLORS.CREAM_BG);
  createCard(s03, 380, 130, 260, 200, "📋", "메모 앱", COLORS.CREAM_BG);

  // [Slide 04] 오늘의 미션
  var s04 = createHeaderSlide(deck, "오늘의 미션!");
  var goalBox = s04.insertShape(SlidesApp.ShapeType.RECTANGLE, 100, 120, 520, 260);
  goalBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  goalBox.getBorder().setDashStyle(SlidesApp.DashStyle.DASH).setWeight(2).getLineFill().setSolidFill(COLORS.GRAY);
  addText(s04, "☐ 1. 파일 열기/닫기\n\n☐ 2. 파일 읽기 (read)\n\n☐ 3. 파일 쓰기 (write)\n\n☐ 4. 일기장 프로그램 만들기", 140, 140, 440, 20, COLORS.DARK);

  // =====================================================
  // PART 2. 파일 기초 (Concept 1) : 6장
  // =====================================================

  // [Slide 05] 파일 입출력이란?
  var s05 = createHeaderSlide(deck, "파일 입출력이란?");
  createCard(s05, 80, 120, 260, 150, "📁", "파일에서 읽기\n= 입력 (Input)", COLORS.LIGHT_BG);
  createCard(s05, 380, 120, 260, 150, "📁", "파일에 쓰기\n= 출력 (Output)", COLORS.LIGHT_BG);
  var tipBox = s05.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 300, 520, 60);
  tipBox.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s05, "파이썬으로 파일을 읽고 쓸 수 있어요!", 150, 315, 420, 18, COLORS.DARK, true, true);

  // [Slide 06] 파일 열기: open()
  var s06 = createHeaderSlide(deck, "파일 열기: open()");
  createCodeBlock(s06, 50, 100, 620, 150, 'file = open("test.txt", "r")\n\n# 파일 사용...\n\nfile.close()  # 사용 후 닫기!');
  var tipBox6 = s06.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 280, 520, 70);
  tipBox6.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s06, "open(파일명, 모드)", 150, 300, 420, 20, COLORS.DARK, true, true);

  // [Slide 07] 파일 모드
  var s07 = createHeaderSlide(deck, "파일 모드");
  var tableBox = s07.insertShape(SlidesApp.ShapeType.RECTANGLE, 50, 100, 620, 270);
  tableBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  tableBox.getBorder().setWeight(2).getLineFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s07, "모드      의미          설명", 70, 120, 580, 16, COLORS.DARK, true);
  addText(s07, "────────────────────────────────────", 70, 145, 580, 12, COLORS.GRAY);
  addText(s07, "\"r\"       read          읽기 (파일 없으면 에러)\n\n\"w\"       write         쓰기 (파일 새로 생성/덮어쓰기)\n\n\"a\"       append        추가 (파일 끝에 추가)\n\n\"r+\"      read+write    읽기+쓰기", 70, 165, 580, 16, COLORS.DARK);

  // [Slide 08] with 문 (권장!)
  var s08 = createHeaderSlide(deck, "with 문 (권장!)");
  createCodeBlock(s08, 50, 100, 620, 180, '# 자동으로 파일 닫아줌!\nwith open("test.txt", "r") as file:\n    content = file.read()\n    print(content)\n# 여기서 자동으로 close()');
  var tipBox8 = s08.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 300, 520, 60);
  tipBox8.getFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s08, "with를 쓰면 close() 자동!", 150, 315, 420, 18, COLORS.DARK, true, true);

  // [Slide 09] 파일 경로
  var s09 = createHeaderSlide(deck, "⚠️ 파일 경로");
  createCodeBlock(s09, 50, 100, 620, 200, '# 같은 폴더에 있으면\nopen("test.txt", "r")\n\n# 다른 폴더에 있으면 (절대경로)\nopen("C:/Users/user/test.txt", "r")\n\n# 상대 경로\nopen("./data/test.txt", "r")');

  // [Slide 10] 인코딩 (한글)
  var s10 = createHeaderSlide(deck, "⚠️ 인코딩 (한글)");
  createCodeBlock(s10, 50, 100, 620, 150, '# 한글 파일은 encoding 필수!\nwith open("한글.txt", "r", encoding="utf-8") as f:\n    content = f.read()');
  var warningBox = s10.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 280, 520, 70);
  warningBox.getFill().setSolidFill(COLORS.RED_HIGHLIGHT);
  addText(s10, 'encoding="utf-8" 잊지 마세요!', 150, 300, 420, 18, COLORS.WHITE, true, true);

  // =====================================================
  // PART 3. 파일 읽기 (Concept 2) : 5장
  // =====================================================

  // [Slide 11] 전체 읽기: read()
  var s11 = createHeaderSlide(deck, "전체 읽기: read()");
  createCodeBlock(s11, 50, 100, 620, 180, 'with open("test.txt", "r", encoding="utf-8") as f:\n    content = f.read()  # 전체 내용\n    print(content)');
  addText(s11, "📖 파일 전체를 하나의 문자열로!", 50, 300, 620, 18, COLORS.GRAY);

  // [Slide 12] 한 줄씩 읽기: readline()
  var s12 = createHeaderSlide(deck, "한 줄씩 읽기: readline()");
  createCodeBlock(s12, 50, 100, 620, 200, 'with open("test.txt", "r", encoding="utf-8") as f:\n    line1 = f.readline()  # 첫 번째 줄\n    line2 = f.readline()  # 두 번째 줄\n    print(line1)\n    print(line2)');

  // [Slide 13] 모든 줄 리스트로: readlines()
  var s13 = createHeaderSlide(deck, "모든 줄 리스트로: readlines()");
  createCodeBlock(s13, 50, 100, 620, 180, 'with open("test.txt", "r", encoding="utf-8") as f:\n    lines = f.readlines()  # [\'첫줄\\n\', \'둘째줄\\n\', ...]\n    print(lines)');
  addText(s13, "📋 각 줄이 리스트 요소로!", 50, 300, 620, 18, COLORS.GRAY);

  // [Slide 14] for문으로 읽기 (권장!)
  var s14 = createHeaderSlide(deck, "for문으로 읽기 (권장!)");
  createCodeBlock(s14, 50, 100, 620, 180, 'with open("test.txt", "r", encoding="utf-8") as f:\n    for line in f:\n        print(line.strip())  # 줄바꿈 제거');
  var tipBox14 = s14.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 300, 520, 60);
  tipBox14.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s14, "✨ 메모리 효율적!", 150, 315, 420, 18, COLORS.DARK, true, true);

  // [Slide 15] 읽기 방법 정리
  var s15 = createHeaderSlide(deck, "읽기 방법 정리");
  var tableBox15 = s15.insertShape(SlidesApp.ShapeType.RECTANGLE, 80, 110, 560, 250);
  tableBox15.getFill().setSolidFill(COLORS.LIGHT_BG);
  tableBox15.getBorder().setWeight(2).getLineFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s15, "메서드              반환값", 100, 130, 520, 18, COLORS.DARK, true);
  addText(s15, "───────────────────────────────", 100, 155, 520, 14, COLORS.GRAY);
  addText(s15, "read()              전체 문자열\n\nreadline()          한 줄 문자열\n\nreadlines()         줄 리스트\n\nfor line in f       한 줄씩 반복", 100, 180, 520, 18, COLORS.DARK);

  // =====================================================
  // PART 4. 파일 쓰기 (Concept 3) : 5장
  // =====================================================

  // [Slide 16] 새 파일 쓰기: write()
  var s16 = createHeaderSlide(deck, "새 파일 쓰기: write()");
  createCodeBlock(s16, 50, 100, 620, 180, 'with open("new.txt", "w", encoding="utf-8") as f:\n    f.write("안녕하세요!\\n")\n    f.write("파이썬으로 파일 쓰기!\\n")');
  addText(s16, '"w" 모드: 파일 새로 생성/덮어쓰기', 50, 300, 620, 18, COLORS.GRAY);

  // [Slide 17] "w" 모드 주의!
  var s17 = createHeaderSlide(deck, '⚠️ "w" 모드 주의!');
  var warningBox17 = s17.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 80, 120, 560, 220);
  warningBox17.getFill().setSolidFill(COLORS.RED_HIGHLIGHT);
  addText(s17, "\"w\" 모드는 기존 내용을 지우고 새로 씀!", 120, 160, 480, 20, COLORS.WHITE, true, true);
  addText(s17, "⚠️ 기존 파일이 있으면\n내용이 사라져요!\n\n추가하려면 \"a\" 모드 사용!", 120, 220, 480, 18, COLORS.WHITE, false, true);

  // [Slide 18] 내용 추가하기: append
  var s18 = createHeaderSlide(deck, "내용 추가하기: append");
  createCodeBlock(s18, 50, 100, 620, 150, 'with open("log.txt", "a", encoding="utf-8") as f:\n    f.write("새로운 줄 추가!\\n")');
  var tipBox18 = s18.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 280, 520, 70);
  tipBox18.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s18, '"a" 모드: 파일 끝에 추가!', 150, 300, 420, 18, COLORS.DARK, true, true);

  // [Slide 19] 여러 줄 쓰기: writelines()
  var s19 = createHeaderSlide(deck, "여러 줄 쓰기: writelines()");
  createCodeBlock(s19, 50, 100, 620, 180, 'lines = ["첫 번째 줄\\n", "두 번째 줄\\n", "세 번째 줄\\n"]\n\nwith open("test.txt", "w", encoding="utf-8") as f:\n    f.writelines(lines)');
  addText(s19, "📝 리스트를 한 번에 쓰기!", 50, 300, 620, 18, COLORS.GRAY);

  // [Slide 20] 리스트 데이터 저장
  var s20 = createHeaderSlide(deck, "리스트 데이터 저장");
  createCodeBlock(s20, 50, 100, 620, 180, 'scores = [95, 87, 92, 78, 85]\n\nwith open("scores.txt", "w", encoding="utf-8") as f:\n    for score in scores:\n        f.write(f"{score}\\n")');

  // =====================================================
  // PART 5. 실습 A - 일기장 (Practice A) : 6장
  // =====================================================

  // [Slide 21] 실습 A 안내
  var s21 = createHeaderSlide(deck, "실습 A: 나만의 일기장");
  addText(s21, "📝 날짜별로 일기를 쓰고 저장!", 50, 110, 620, 24, COLORS.DARK, true);
  var goalBox21 = s21.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 170, 520, 180);
  goalBox21.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s21, "🎯 목표:\n\n• 일기 쓰기 기능\n• 일기 읽기 기능\n• 나중에 다시 읽을 수 있어요!", 130, 200, 460, 18, COLORS.DARK);

  // [Slide 22] 일기 쓰기 함수
  var s22 = createHeaderSlide(deck, "일기 쓰기 함수");
  createCodeBlock(s22, 20, 85, 680, 300, 'from datetime import datetime\n\ndef write_diary():\n    today = datetime.now().strftime("%Y-%m-%d")\n    print(f"📝 {today} 일기 쓰기")\n    content = input("오늘 하루 어땠나요?\\n>>> ")\n    \n    with open(f"diary_{today}.txt", "w", encoding="utf-8") as f:\n        f.write(f"📅 날짜: {today}\\n")\n        f.write("-" * 30 + "\\n")\n        f.write(content + "\\n")\n    \n    print("✅ 일기가 저장되었습니다!")');

  // [Slide 23] 일기 읽기 함수
  var s23 = createHeaderSlide(deck, "일기 읽기 함수");
  createCodeBlock(s23, 30, 90, 660, 280, 'def read_diary():\n    date = input("읽을 일기 날짜 (YYYY-MM-DD): ")\n    filename = f"diary_{date}.txt"\n    \n    try:\n        with open(filename, "r", encoding="utf-8") as f:\n            print("\\n" + f.read())\n    except FileNotFoundError:\n        print("❌ 해당 날짜의 일기가 없습니다.")');

  // [Slide 24] 메인 메뉴
  var s24 = createHeaderSlide(deck, "메인 메뉴");
  createCodeBlock(s24, 30, 90, 660, 280, 'while True:\n    print("\\n=== 📓 나의 일기장 ===")\n    print("1. 일기 쓰기")\n    print("2. 일기 읽기")\n    print("3. 종료")\n    \n    choice = input("선택: ")\n    \n    if choice == "1":\n        write_diary()\n    elif choice == "2":\n        read_diary()\n    elif choice == "3":\n        print("안녕! 👋")\n        break');

  // [Slide 25] 실행 결과
  var s25 = createHeaderSlide(deck, "실행 결과");
  createCodeBlock(s25, 60, 100, 600, 230, '=== 📓 나의 일기장 ===\n1. 일기 쓰기\n2. 일기 읽기\n3. 종료\n선택: 1\n📝 2024-11-18 일기 쓰기\n오늘 하루 어땠나요?\n>>> 오늘 파이썬으로 일기장을 만들었다!\n✅ 일기가 저장되었습니다!');

  // [Slide 26] 확장
  var s26 = createHeaderSlide(deck, "확장: 일기 목록");
  createCodeBlock(s26, 50, 100, 620, 200, 'import os\n\ndef list_diaries():\n    files = os.listdir(".")\n    diaries = [f for f in files if f.startswith("diary_")]\n    \n    print("\\n📚 저장된 일기:")\n    for d in diaries:\n        print(f"  - {d}")');
  addText(s26, "os.listdir()로 파일 목록!", 50, 320, 620, 16, COLORS.GRAY);

  // =====================================================
  // PART 6. 실습 B - 메모 앱 (Practice B) : 5장
  // =====================================================

  // [Slide 27] 실습 B 안내
  var s27 = createHeaderSlide(deck, "실습 B: 간단 메모 앱");
  addText(s27, "📋 메모를 추가하고 확인! 삭제도 가능!", 50, 110, 620, 24, COLORS.DARK, true);
  var goalBox27 = s27.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 170, 520, 180);
  goalBox27.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s27, "🎯 목표:\n\n• 메모 추가\n• 메모 보기\n• 메모 삭제", 130, 200, 460, 18, COLORS.DARK);

  // [Slide 28] 메모 추가
  var s28 = createHeaderSlide(deck, "메모 추가");
  createCodeBlock(s28, 50, 100, 620, 180, 'def add_memo():\n    memo = input("메모 내용: ")\n    \n    with open("memos.txt", "a", encoding="utf-8") as f:\n        f.write(memo + "\\n")\n    \n    print("✅ 메모 추가됨!")');

  // [Slide 29] 메모 보기
  var s29 = createHeaderSlide(deck, "메모 보기");
  createCodeBlock(s29, 20, 85, 680, 300, 'def show_memos():\n    try:\n        with open("memos.txt", "r", encoding="utf-8") as f:\n            memos = f.readlines()\n        \n        if memos:\n            print("\\n📋 메모 목록:")\n            for i, memo in enumerate(memos, 1):\n                print(f"  {i}. {memo.strip()}")\n        else:\n            print("메모가 없습니다.")\n    except FileNotFoundError:\n        print("메모가 없습니다.")');

  // [Slide 30] 메모 삭제
  var s30 = createHeaderSlide(deck, "메모 삭제");
  createCodeBlock(s30, 30, 90, 660, 280, 'def delete_memo():\n    show_memos()\n    num = int(input("삭제할 번호: "))\n    \n    with open("memos.txt", "r", encoding="utf-8") as f:\n        memos = f.readlines()\n    \n    del memos[num - 1]\n    \n    with open("memos.txt", "w", encoding="utf-8") as f:\n        f.writelines(memos)\n    \n    print("✅ 삭제됨!")');

  // [Slide 31] 실행 결과
  var s31 = createHeaderSlide(deck, "실행 결과");
  createCodeBlock(s31, 80, 110, 560, 180, '📋 메모 목록:\n  1. 파이썬 공부하기\n  2. 숙제하기\n  3. 운동하기\n삭제할 번호: 2\n✅ 삭제됨!');

  // =====================================================
  // PART 7. 마무리 (Finish) : 4장
  // =====================================================

  // [Slide 32] 도전 과제
  var s32 = createHeaderSlide(deck, "도전 과제!");
  var challengeBox = s32.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 80, 120, 560, 220);
  challengeBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s32, "🏆 간단한 가계부 만들기!", 120, 150, 480, 28, COLORS.DARK, true, true);
  addText(s32, "• 수입/지출 입력\n• 총 잔액 계산\n• 파일에 저장", 120, 210, 480, 20, COLORS.DARK);

  // [Slide 33] 오늘 배운 것
  var s33 = createHeaderSlide(deck, "오늘 배운 것");
  var reviewBox = s33.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 80, 110, 560, 260);
  reviewBox.getFill().setSolidFill(COLORS.CREAM_BG);
  reviewBox.getBorder().setWeight(3).getLineFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s33, "✅ open(파일, 모드): 파일 열기\n\n✅ \"r\", \"w\", \"a\" 모드\n\n✅ with문: 자동 close\n\n✅ read(), readline(), readlines()\n\n✅ write(), writelines()", 120, 140, 480, 18, COLORS.DARK);

  // [Slide 34] 예고
  var s34 = deck.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  s34.getBackground().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s34, "다음 시간에는...", W/2 - 200, H/2 - 100, 400, 28, COLORS.DARK, true, true);
  addText(s34, "🎮 미니 프로젝트 1!", W/2 - 200, H/2 - 30, 400, 24, COLORS.WHITE, true, true);
  addText(s34, "지금까지 배운 모든 것을 총동원!\nUp/Down 게임 만들기!", W/2 - 200, H/2 + 30, 400, 20, COLORS.WHITE, false, true);
  addText(s34, "17차시에서 만나요!", W/2 - 150, H/2 + 100, 300, 20, COLORS.DARK, true, true);

  // [Slide 35] 엔딩
  var s35 = deck.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  s35.getBackground().setSolidFill(COLORS.HAEDAL_YELLOW);
  var endBox = s35.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, W/2 - 250, H/2 - 120, 500, 240);
  endBox.getFill().setSolidFill(COLORS.WHITE);
  addText(s35, "수고했어요!", W/2 - 200, H/2 - 80, 400, 36, COLORS.DARK, true, true);
  addText(s35, "📁 이제 데이터를\n영구 저장할 수 있어요!", W/2 - 200, H/2 - 20, 400, 20, COLORS.GRAY, false, true);
  addText(s35, "16차시 완료", W/2 - 100, H/2 + 60, 200, 24, COLORS.HAEDAL_YELLOW, true, true);

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
