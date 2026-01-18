/**
 * [해달에듀] 파이썬 프로그래밍 10차시: Part 1 총정리
 * 자동 슬라이드 생성 스크립트 (30장)
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
function createPythonLesson10() {
  var deck = SlidesApp.create("[해달에듀] 파이썬 10차시 - Part 1 총정리");
  var slides = deck.getSlides();
  if (slides.length > 0) slides[0].remove();

  var W = deck.getPageWidth();
  var H = deck.getPageHeight();

  // =====================================================
  // PART 1. 도입 (Intro) : 3장
  // =====================================================

  // [Slide 01] 표지
  var s01 = deck.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  s01.getBackground().setSolidFill(COLORS.HAEDAL_YELLOW);
  var coverBox = s01.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, W/2 - 300, H/2 - 180, 600, 360);
  coverBox.getFill().setSolidFill(COLORS.WHITE);
  coverBox.getBorder().setTransparent();
  addText(s01, "Part 1 총정리!", W/2 - 250, H/2 - 100, 500, 48, COLORS.DARK, true, true);
  addText(s01, "🎓 파이썬 기초 완전 정복", W/2 - 250, H/2 - 20, 500, 24, COLORS.GRAY, false, true);
  addText(s01, "10차시 | 해달에듀", W/2 - 250, H/2 + 50, 500, 18, COLORS.GRAY, false, true);

  // [Slide 02] 지금까지 배운 것
  var s02 = createHeaderSlide(deck, "지금까지 배운 것");
  var lessonBox = s02.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 100, 620, 230);
  lessonBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s02, "1차시: 환경 설정, Hello World\n2차시: 숫자, 변수\n3차시: 문자열\n4차시: 리스트, 튜플\n5차시: 입출력\n6차시: 조건문\n7차시: for 반복문\n8차시: while 반복문\n9차시: 함수", 80, 115, 560, 14, COLORS.DARK);

  // [Slide 03] 오늘의 미션
  var s03 = createHeaderSlide(deck, "오늘의 미션!");
  var goalBox = s03.insertShape(SlidesApp.ShapeType.RECTANGLE, 100, 120, 520, 180);
  goalBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  goalBox.getBorder().setDashStyle(SlidesApp.DashStyle.DASH).setWeight(2).getLineFill().setSolidFill(COLORS.GRAY);
  addText(s03, "☐ 1. 핵심 개념 빠르게 복습\n\n☐ 2. 퀴즈로 점검하기\n\n☐ 3. 미니 프로젝트 도전", 140, 150, 440, 20, COLORS.DARK);

  // =====================================================
  // PART 2. 자료형 복습 (Review 1) : 5장
  // =====================================================

  // [Slide 04] 숫자 자료형
  var s04 = createHeaderSlide(deck, "복습: 숫자 자료형");
  createCodeBlock(s04, 50, 90, 620, 250, '# 정수 (int)\nage = 15\n\n# 실수 (float)\nheight = 165.5\n\n# 연산자\nprint(10 + 3)   # 13\nprint(10 / 3)   # 3.333...\nprint(10 // 3)  # 3 (몫)\nprint(10 % 3)   # 1 (나머지)\nprint(2 ** 3)   # 8 (거듭제곱)');

  // [Slide 05] 문자열
  var s05 = createHeaderSlide(deck, "복습: 문자열");
  createCodeBlock(s05, 50, 90, 620, 250, 'msg = "Hello, World!"\n\n# 인덱싱\nprint(msg[0])    # H\nprint(msg[-1])   # !\n\n# 슬라이싱\nprint(msg[0:5])  # Hello\nprint(msg[::-1]) # 뒤집기\n\n# f-string\nname = "철수"\nprint(f"안녕, {name}!")');

  // [Slide 06] 리스트
  var s06 = createHeaderSlide(deck, "복습: 리스트");
  createCodeBlock(s06, 50, 90, 620, 250, 'fruits = ["사과", "바나나", "오렌지"]\n\n# 조회, 수정\nprint(fruits[0])      # 사과\nfruits[1] = "포도"    # 수정\n\n# 메서드\nfruits.append("딸기") # 추가\nfruits.remove("사과") # 삭제\nfruits.sort()         # 정렬');

  // [Slide 07] 튜플
  var s07 = createHeaderSlide(deck, "복습: 튜플");
  createCodeBlock(s07, 50, 100, 620, 140, 'point = (10, 20)\n\n# 조회 가능\nprint(point[0])  # 10\n\n# 수정 불가!\npoint[0] = 30    # 에러!');
  var compareBox = s07.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 260, 520, 60);
  compareBox.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s07, "리스트: [] 수정 가능 | 튜플: () 수정 불가", 120, 278, 480, 16, COLORS.DARK, true, true);

  // [Slide 08] 퀴즈 1
  var s08 = createHeaderSlide(deck, "🎯 퀴즈 1");
  createCodeBlock(s08, 50, 100, 620, 100, 'nums = [1, 2, 3, 4, 5]\nprint(nums[1:4])');
  addText(s08, "출력 결과는?", 50, 220, 620, 20, COLORS.DARK, true);
  var optionBox = s08.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 260, 520, 80);
  optionBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s08, "A) [1, 2, 3, 4]    B) [2, 3, 4]    C) [2, 3, 4, 5]", 120, 288, 480, 16, COLORS.DARK, false, true);

  // =====================================================
  // PART 3. 조건문/반복문 복습 (Review 2) : 6장
  // =====================================================

  // [Slide 09] 조건문 if
  var s09 = createHeaderSlide(deck, "복습: 조건문 if");
  createCodeBlock(s09, 50, 90, 620, 250, 'score = 85\n\nif score >= 90:\n    grade = "A"\nelif score >= 80:\n    grade = "B"\nelif score >= 70:\n    grade = "C"\nelse:\n    grade = "F"\n\nprint(grade)  # B');

  // [Slide 10] 비교/논리 연산자
  var s10 = createHeaderSlide(deck, "복습: 비교/논리 연산자");
  createCodeBlock(s10, 50, 100, 300, 160, '# 비교 연산자\n==  # 같다\n!=  # 다르다\n>   # 크다\n<   # 작다\n>=  # 크거나 같다\n<=  # 작거나 같다');
  createCodeBlock(s10, 370, 100, 300, 160, '# 논리 연산자\nand  # 둘 다 참\nor   # 하나만 참\nnot  # 뒤집기\n\n# 예시\nif age >= 13 and age < 20:\n    print("청소년")');

  // [Slide 11] for 반복문
  var s11 = createHeaderSlide(deck, "복습: for 반복문");
  createCodeBlock(s11, 50, 90, 620, 250, '# 리스트 반복\nfor fruit in ["사과", "바나나"]:\n    print(fruit)\n\n# range 사용\nfor i in range(5):  # 0,1,2,3,4\n    print(i)\n\n# 합계 구하기\ntotal = 0\nfor i in range(1, 101):\n    total += i\nprint(total)  # 5050');

  // [Slide 12] while 반복문
  var s12 = createHeaderSlide(deck, "복습: while 반복문");
  createCodeBlock(s12, 50, 90, 620, 250, '# 조건이 참인 동안 반복\ncount = 0\nwhile count < 5:\n    print(count)\n    count += 1\n\n# while True + break\nwhile True:\n    answer = input("계속? (n=종료): ")\n    if answer == "n":\n        break');

  // [Slide 13] break & continue
  var s13 = createHeaderSlide(deck, "복습: break & continue");
  createCodeBlock(s13, 50, 100, 300, 180, '# break: 반복 탈출\nfor i in range(10):\n    if i == 5:\n        break\n    print(i)\n# 0,1,2,3,4');
  createCodeBlock(s13, 370, 100, 300, 180, '# continue: 건너뛰기\nfor i in range(5):\n    if i == 2:\n        continue\n    print(i)\n# 0,1,3,4');

  // [Slide 14] 퀴즈 2
  var s14 = createHeaderSlide(deck, "🎯 퀴즈 2");
  createCodeBlock(s14, 50, 100, 620, 100, 'for i in range(1, 6, 2):\n    print(i)');
  addText(s14, "출력 결과는?", 50, 220, 620, 20, COLORS.DARK, true);
  var optionBox14 = s14.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 260, 520, 80);
  optionBox14.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s14, "A) 1 2 3 4 5    B) 1 3 5    C) 2 4 6", 120, 288, 480, 16, COLORS.DARK, false, true);

  // =====================================================
  // PART 4. 함수/입출력 복습 (Review 3) : 5장
  // =====================================================

  // [Slide 15] 함수 정의와 호출
  var s15 = createHeaderSlide(deck, "복습: 함수 정의와 호출");
  createCodeBlock(s15, 50, 100, 620, 180, '# 함수 정의\ndef greet(name):\n    return f"안녕, {name}!"\n\n# 함수 호출\nmsg = greet("철수")\nprint(msg)  # 안녕, 철수!');

  // [Slide 16] 매개변수와 반환값
  var s16 = createHeaderSlide(deck, "복습: 매개변수와 반환값");
  createCodeBlock(s16, 50, 90, 620, 250, '# 매개변수: 입력\ndef add(a, b):\n    return a + b\n\n# 기본값 설정\ndef greet(name, msg="안녕"):\n    print(f"{name}님, {msg}!")\n\ngreet("철수")          # 철수님, 안녕!\ngreet("영희", "반가워")  # 영희님, 반가워!');

  // [Slide 17] input과 형변환
  var s17 = createHeaderSlide(deck, "복습: input과 형변환");
  createCodeBlock(s17, 50, 100, 620, 160, '# input은 항상 문자열!\nname = input("이름: ")      # str\nage = int(input("나이: "))  # int로 변환\nheight = float(input("키: "))  # float');

  // [Slide 18] print 옵션
  var s18 = createHeaderSlide(deck, "복습: print 옵션");
  createCodeBlock(s18, 50, 100, 620, 180, '# 여러 값 출력\nprint("A", "B", "C")  # A B C\n\n# 구분자 변경\nprint("A", "B", sep="-")  # A-B\n\n# 줄바꿈 제거\nprint("Hello", end=" ")\nprint("World")  # Hello World');

  // [Slide 19] 퀴즈 3
  var s19 = createHeaderSlide(deck, "🎯 퀴즈 3");
  createCodeBlock(s19, 50, 100, 620, 100, 'def test(a, b=10):\n    return a * b\n\nprint(test(5))');
  addText(s19, "출력 결과는?", 50, 220, 620, 20, COLORS.DARK, true);
  var optionBox19 = s19.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 260, 520, 80);
  optionBox19.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s19, "A) 5    B) 10    C) 50", 120, 288, 480, 16, COLORS.DARK, false, true);

  // =====================================================
  // PART 5. 종합 퀴즈 (Quiz) : 5장
  // =====================================================

  // [Slide 20] 퀴즈 4: 빈칸 채우기
  var s20 = createHeaderSlide(deck, "🎯 퀴즈 4: 빈칸 채우기");
  createCodeBlock(s20, 50, 100, 620, 140, 'numbers = [1, 2, 3, 4, 5]\ntotal = 0\nfor n in numbers:\n    total ____ n\nprint(total)');
  addText(s20, "빈칸에 들어갈 연산자는?", 100, 270, 520, 20, COLORS.DARK, true, true);

  // [Slide 21] 퀴즈 5: 출력 예측
  var s21 = createHeaderSlide(deck, "🎯 퀴즈 5: 출력 예측");
  createCodeBlock(s21, 50, 100, 620, 120, 'fruits = ["사과", "바나나"]\nfruits.append("오렌지")\nprint(len(fruits))');
  addText(s21, "출력 결과는?", 100, 250, 520, 20, COLORS.DARK, true, true);

  // [Slide 22] 퀴즈 6: 오류 찾기
  var s22 = createHeaderSlide(deck, "🎯 퀴즈 6: 오류 찾기");
  createCodeBlock(s22, 50, 100, 620, 120, 'def greeting(name)\n    print(f"안녕, {name}!")\n\ngreeting("철수")');
  addText(s22, "어디에 오류가 있을까요?", 100, 250, 520, 20, COLORS.DARK, true, true);

  // [Slide 23] 퀴즈 정답
  var s23 = createHeaderSlide(deck, "퀴즈 정답");
  var answerBox = s23.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 100, 620, 220);
  answerBox.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s23, "퀴즈 1: B) [2, 3, 4]\n퀴즈 2: B) 1 3 5\n퀴즈 3: C) 50\n퀴즈 4: +=\n퀴즈 5: 3\n퀴즈 6: def greeting(name): ← 콜론 누락!", 80, 125, 560, 16, COLORS.DARK);

  // [Slide 24] 자가 점검
  var s24 = createHeaderSlide(deck, "자가 점검");
  var checkBox = s24.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 100, 620, 220);
  checkBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s24, "☐ 변수와 자료형 이해\n☐ 문자열 인덱싱/슬라이싱\n☐ 리스트 조작 (추가/삭제/정렬)\n☐ 조건문 작성 (if/elif/else)\n☐ 반복문 사용 (for/while)\n☐ 함수 정의와 호출\n\n모두 체크했다면 Part 1 완료! 🎉", 80, 120, 560, 14, COLORS.DARK);

  // =====================================================
  // PART 6. 미니 프로젝트 (Mini Project) : 4장
  // =====================================================

  // [Slide 25] 미니 프로젝트 안내
  var s25 = createHeaderSlide(deck, "미니 프로젝트: 성적 관리");
  addText(s25, "📊 학생들의 점수를 입력받아 통계를 내는 프로그램!", 50, 110, 620, 20, COLORS.DARK, true, true);
  addText(s25, "지금까지 배운 모든 개념 활용!", 50, 160, 620, 18, COLORS.GRAY, false, true);
  var featureBox = s25.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 200, 520, 120);
  featureBox.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s25, "• 리스트로 점수 저장\n• while문으로 입력 반복\n• 함수로 통계 계산\n• 조건문으로 학점 판정", 130, 220, 460, 14, COLORS.DARK);

  // [Slide 26] 함수 정의
  var s26 = createHeaderSlide(deck, "코드 1: 함수 정의");
  createCodeBlock(s26, 50, 80, 620, 270, 'def get_scores():\n    """점수 입력받아 리스트로 반환"""\n    scores = []\n    while True:\n        data = input("점수 (q=종료): ")\n        if data == \'q\':\n            break\n        scores.append(int(data))\n    return scores\n\ndef calc_stats(scores):\n    """통계 계산"""\n    if len(scores) == 0:\n        return None\n    total = sum(scores)\n    avg = total / len(scores)\n    return total, avg, max(scores), min(scores)');

  // [Slide 27] 메인 로직
  var s27 = createHeaderSlide(deck, "코드 2: 메인 로직");
  createCodeBlock(s27, 50, 80, 620, 270, 'def get_grade(avg):\n    """평균으로 학점 반환"""\n    if avg >= 90: return "A"\n    elif avg >= 80: return "B"\n    elif avg >= 70: return "C"\n    elif avg >= 60: return "D"\n    else: return "F"\n\n# 실행\nprint("=== 성적 관리 프로그램 ===")\nscores = get_scores()\nif scores:\n    total, avg, max_s, min_s = calc_stats(scores)\n    grade = get_grade(avg)\n    print(f"\\n총점: {total}점")\n    print(f"평균: {avg:.1f}점")\n    print(f"최고: {max_s}점, 최저: {min_s}점")\n    print(f"학점: {grade}")');

  // [Slide 28] 실행 결과
  var s28 = createHeaderSlide(deck, "실행 결과");
  var resultBox = s28.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 90, 620, 260);
  resultBox.getFill().setSolidFill(COLORS.CODE_BG);
  addText(s28, "=== 성적 관리 프로그램 ===\n점수 (q=종료): 85\n점수 (q=종료): 92\n점수 (q=종료): 78\n점수 (q=종료): q\n\n총점: 255점\n평균: 85.0점\n최고: 92점, 최저: 78점\n학점: B", 80, 105, 560, 14, COLORS.CODE_WHITE);

  // =====================================================
  // PART 7. 마무리 (Finish) : 2장
  // =====================================================

  // [Slide 29] Part 1 완료
  var s29 = createHeaderSlide(deck, "🎓 Part 1 완료!");
  var completionBox = s29.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 100, 620, 230);
  completionBox.getFill().setSolidFill(COLORS.CREAM_BG);
  completionBox.getBorder().setWeight(3).getLineFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s29, "파이썬 기초 문법 정복!\n\n• 변수와 자료형\n• 문자열, 리스트, 튜플\n• 입출력 (input, print)\n• 조건문 (if, elif, else)\n• 반복문 (for, while)\n• 함수 (def, return)\n\n이제 진짜 프로그램을 만들 준비 완료!", 80, 115, 560, 14, COLORS.DARK);

  // [Slide 30] Part 2 예고
  var s30 = deck.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  s30.getBackground().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s30, "다음은 Part 2!", W/2 - 200, H/2 - 120, 400, 32, COLORS.DARK, true, true);
  addText(s30, "🛠️ 파이썬 무기 창고 털기", W/2 - 200, H/2 - 60, 400, 24, COLORS.WHITE, true, true);
  var part2Box = s30.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, W/2 - 180, H/2 - 20, 360, 150);
  part2Box.getFill().setSolidFill(COLORS.WHITE);
  addText(s30, "• random 모듈\n• time/datetime 모듈\n• turtle 그래픽\n• 파일 입출력\n• 미니 프로젝트", W/2 - 160, H/2, 320, 14, COLORS.DARK);
  addText(s30, "더 재미있는 것들이 기다려요!", W/2 - 200, H/2 + 150, 400, 18, COLORS.DARK, true, true);

  Logger.log("슬라이드 생성 완료! (총 30장) URL: " + deck.getUrl());
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
