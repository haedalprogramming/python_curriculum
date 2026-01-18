/**
 * [해달에듀] 파이썬 프로그래밍 3차시: 문자열 (String)
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
function createPythonLesson3() {
  var deck = SlidesApp.create("[해달에듀] 파이썬 3차시 - 문자열 마스터하기");
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
  addText(s01, "글자를 다뤄보자!", W/2 - 250, H/2 - 100, 500, 48, COLORS.DARK, true, true);
  addText(s01, "📿 문자열 마스터하기", W/2 - 250, H/2 - 20, 500, 24, COLORS.GRAY, false, true);
  addText(s01, "3차시 | 해달에듀", W/2 - 250, H/2 + 50, 500, 18, COLORS.GRAY, false, true);

  // [Slide 02] 질문 - 텍스트도 데이터?
  var s02 = createHeaderSlide(deck, "텍스트도 데이터?");
  createCard(s02, 50, 120, 200, 100, "🔤", "\"안녕하세요\"", COLORS.LIGHT_BG);
  createCard(s02, 270, 120, 200, 100, "💬", "\"Hello, World!\"", COLORS.LIGHT_BG);
  createCard(s02, 490, 120, 200, 100, "📝", "\"123\" ← 이것도!", COLORS.LIGHT_BG);
  var answerBox = s02.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 250, 520, 80);
  answerBox.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s02, "글자도 컴퓨터가 다룰 수 있어요!", 120, 270, 480, 20, COLORS.DARK, true, true);

  // [Slide 03] 미리보기
  var s03 = createHeaderSlide(deck, "오늘의 완성작!");
  createCard(s03, 100, 120, 250, 150, "📝", "문자열 슬라이싱", COLORS.CREAM_BG);
  createCard(s03, 380, 120, 250, 150, "🎨", "나만의 자기소개\n포맷팅", COLORS.CREAM_BG);

  // [Slide 04] 오늘의 미션
  var s04 = createHeaderSlide(deck, "오늘의 미션!");
  var goalBox = s04.insertShape(SlidesApp.ShapeType.RECTANGLE, 100, 120, 520, 260);
  goalBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  goalBox.getBorder().setDashStyle(SlidesApp.DashStyle.DASH).setWeight(2).getLineFill().setSolidFill(COLORS.GRAY);
  addText(s04, "☐ 1. 문자열이 뭔지 알기\n\n☐ 2. 인덱싱으로 글자 뽑기\n\n☐ 3. 슬라이싱으로 자르기\n\n☐ 4. 포맷팅으로 꾸미기", 140, 150, 440, 20, COLORS.DARK);

  // =====================================================
  // PART 2. 문자열 기초 (Concept 1) : 6장
  // =====================================================

  // [Slide 05] 문자열이란?
  var s05 = createHeaderSlide(deck, "문자열(String)이란?");
  addText(s05, "📿 글자들이 줄줄이 연결된 목걸이!", 50, 100, 620, 24, COLORS.DARK, true);
  var conceptBox = s05.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 150, 400, 100);
  conceptBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s05, "\"Hello\" = H-e-l-l-o 다섯 글자\nstr = string의 줄임말", 80, 170, 340, 18, COLORS.DARK, false, true);
  createImagePlaceholder(s05, 480, 120, 200, 150, "목걸이 비유\n그림");

  // [Slide 06] 문자열 만들기
  var s06 = createHeaderSlide(deck, "문자열 만들기");
  createCodeBlock(s06, 50, 110, 620, 120, 'msg1 = "안녕하세요"   # 큰따옴표\nmsg2 = \'반갑습니다\'   # 작은따옴표\nprint(msg1, msg2)');
  var tipBox = s06.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 260, 520, 60);
  tipBox.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s06, "큰따옴표, 작은따옴표 둘 다 OK!", 120, 275, 480, 18, COLORS.DARK, true, true);

  // [Slide 07] 여러 줄 문자열
  var s07 = createHeaderSlide(deck, "여러 줄 문자열");
  createCodeBlock(s07, 50, 110, 620, 130, 'poem = """장미는 빨갛고\n제비꽃은 파랗다"""\nprint(poem)');
  var tipBox7 = s07.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 260, 520, 60);
  tipBox7.getFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s07, "따옴표 3개 = 여러 줄 가능!", 120, 275, 480, 18, COLORS.DARK, true, true);

  // [Slide 08] 문자열 더하기
  var s08 = createHeaderSlide(deck, "문자열 더하기 (연결)");
  createCodeBlock(s08, 50, 110, 620, 120, 'first = "파이"\nsecond = "썬"\nprint(first + second)  # 파이썬');
  var explainBox = s08.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 260, 520, 60);
  explainBox.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s08, "+ = 문자열을 이어붙이기", 120, 275, 480, 18, COLORS.DARK, true, true);

  // [Slide 09] 문자열 곱하기
  var s09 = createHeaderSlide(deck, "문자열 곱하기 (반복)");
  createCodeBlock(s09, 50, 110, 620, 100, 'laugh = "하"\nprint(laugh * 3)  # 하하하');
  var explainBox9 = s09.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 240, 520, 60);
  explainBox9.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s09, "* = 문자열을 반복!", 120, 255, 480, 18, COLORS.DARK, true, true);

  // [Slide 10] 문자열 길이
  var s10 = createHeaderSlide(deck, "문자열 길이: len()");
  createCodeBlock(s10, 50, 110, 620, 100, 'word = "Python"\nprint(len(word))  # 6');
  var explainBox10 = s10.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 240, 520, 60);
  explainBox10.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s10, "len() = length(길이)!", 120, 255, 480, 18, COLORS.DARK, true, true);

  // =====================================================
  // PART 3. 인덱싱 (Concept 2) : 5장
  // =====================================================

  // [Slide 11] 인덱싱이란?
  var s11 = createHeaderSlide(deck, "인덱싱이란?");
  addText(s11, "🎫 좌석 번호처럼 각 글자에 번호가 있어요!", 50, 100, 620, 20, COLORS.DARK, true);
  var indexBox = s11.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 150, 620, 80);
  indexBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s11, "P  y  t  h  o  n\n0  1  2  3  4  5", 80, 165, 560, 18, COLORS.DARK, false, true);
  var warnBox11 = s11.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 260, 520, 60);
  warnBox11.getFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s11, "첫 번째 = 0번! (컴퓨터는 0부터 세요)", 120, 275, 480, 18, COLORS.DARK, true, true);

  // [Slide 12] 인덱싱 사용하기
  var s12 = createHeaderSlide(deck, "인덱싱 사용하기");
  createCodeBlock(s12, 50, 110, 620, 150, 'word = "Python"\nprint(word[0])  # P\nprint(word[2])  # t\nprint(word[5])  # n');
  addText(s12, "대괄호 [] 안에 번호!", 100, 280, 520, 18, COLORS.DARK, true, true);

  // [Slide 13] 음수 인덱스
  var s13 = createHeaderSlide(deck, "음수 인덱스");
  var indexTable = s13.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 100, 620, 120);
  indexTable.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s13, " P   y   t   h   o   n\n 0   1   2   3   4   5\n-6  -5  -4  -3  -2  -1", 100, 115, 520, 16, COLORS.DARK, false, true);
  var tipBox13 = s13.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 250, 520, 60);
  tipBox13.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s13, "뒤에서부터 세면 -1부터!", 120, 265, 480, 18, COLORS.DARK, true, true);

  // [Slide 14] 음수 인덱스 사용
  var s14 = createHeaderSlide(deck, "음수 인덱스 사용");
  createCodeBlock(s14, 50, 110, 620, 140, 'word = "Python"\nprint(word[-1])  # n (맨 뒤)\nprint(word[-2])  # o\nprint(word[-6])  # P');

  // [Slide 15] IndexError 주의
  var s15 = createHeaderSlide(deck, "⚠️ IndexError 주의!");
  createCodeBlock(s15, 50, 110, 620, 100, 'word = "Python"  # 길이 6\nprint(word[10])  # 에러!');
  var errorBox = s15.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 240, 520, 80);
  errorBox.getFill().setSolidFill(COLORS.RED_HIGHLIGHT);
  addText(s15, "범위를 벗어나면 에러 발생!", 120, 265, 480, 20, COLORS.WHITE, true, true);

  // =====================================================
  // PART 4. 슬라이싱 (Concept 3) : 5장
  // =====================================================

  // [Slide 16] 슬라이싱이란?
  var s16 = createHeaderSlide(deck, "슬라이싱이란?");
  addText(s16, "🍕 피자 자르듯 문자열을 자르기!", 50, 100, 620, 24, COLORS.DARK, true);
  var sliceBox = s16.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 160, 620, 80);
  sliceBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s16, "word[시작:끝]\n시작부터 끝-1까지 추출", 80, 180, 560, 18, COLORS.DARK, false, true);
  createImagePlaceholder(s16, 520, 100, 150, 100, "피자 슬라이스");

  // [Slide 17] 슬라이싱 기본
  var s17 = createHeaderSlide(deck, "슬라이싱 기본");
  createCodeBlock(s17, 50, 110, 620, 140, 'word = "Python"\nprint(word[0:2])  # Py\nprint(word[2:5])  # tho\nprint(word[0:6])  # Python');
  var tipBox17 = s17.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 270, 520, 50);
  tipBox17.getFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s17, "끝 번호는 포함 안 됨!", 120, 280, 480, 18, COLORS.DARK, true, true);

  // [Slide 18] 슬라이싱 생략
  var s18 = createHeaderSlide(deck, "슬라이싱 생략");
  createCodeBlock(s18, 50, 110, 620, 140, 'word = "Python"\nprint(word[:3])   # Pyt (처음부터)\nprint(word[3:])   # hon (끝까지)\nprint(word[:])    # Python (전체)');

  // [Slide 19] 스텝 지정
  var s19 = createHeaderSlide(deck, "스텝(간격) 지정");
  createCodeBlock(s19, 50, 110, 620, 140, 'word = "Python"\nprint(word[0:6:2])  # Pto (2칸씩)\nprint(word[::2])    # Pto\nprint(word[::-1])   # nohtyP (역순!)');
  var tipBox19 = s19.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 270, 520, 50);
  tipBox19.getFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s19, "[::-1] = 뒤집기!", 120, 280, 480, 18, COLORS.DARK, true, true);

  // [Slide 20] 슬라이싱 연습
  var s20 = createHeaderSlide(deck, "슬라이싱 연습");
  addText(s20, "\"Hello, World!\" 에서...", 50, 100, 620, 20, COLORS.DARK, true);
  var practiceBox = s20.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 140, 620, 180);
  practiceBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s20, "[:5]     → Hello\n[7:12]   → World\n[::-1]   → !dlroW ,olleH", 100, 170, 520, 20, COLORS.DARK);

  // =====================================================
  // PART 5. 문자열 메서드 (Concept 4) : 4장
  // =====================================================

  // [Slide 21] 문자열 메서드
  var s21 = createHeaderSlide(deck, "문자열 메서드");
  addText(s21, "문자열에게 명령하는 방법!", 50, 100, 620, 24, COLORS.DARK, true);
  var methodBox = s21.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 160, 620, 80);
  methodBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s21, "문자열.메서드() 형태로 사용", 80, 185, 560, 20, COLORS.DARK, false, true);

  // [Slide 22] 대소문자 변환
  var s22 = createHeaderSlide(deck, "대소문자 변환");
  createCodeBlock(s22, 50, 110, 620, 150, 'msg = "Hello World"\nprint(msg.upper())  # HELLO WORLD\nprint(msg.lower())  # hello world\nprint(msg.title())  # Hello World');

  // [Slide 23] 찾기와 바꾸기
  var s23 = createHeaderSlide(deck, "찾기와 바꾸기");
  createCodeBlock(s23, 50, 110, 620, 130, 'msg = "Hello World"\nprint(msg.find("World"))  # 6\nprint(msg.replace("World", "Python"))\n# Hello Python');

  // [Slide 24] 공백 처리
  var s24 = createHeaderSlide(deck, "공백 처리");
  createCodeBlock(s24, 50, 110, 620, 130, 'msg = "  Hello  "\nprint(msg.strip())   # "Hello"\nprint(msg.split())  # ["Hello"]');

  // =====================================================
  // PART 6. 포맷팅 (Practice) : 6장
  // =====================================================

  // [Slide 25] 포맷팅이란?
  var s25 = createHeaderSlide(deck, "포맷팅이란?");
  addText(s25, "📝 변수 값을 문자열에 끼워넣기!", 50, 100, 620, 24, COLORS.DARK, true);
  var formatBox = s25.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 160, 620, 100);
  formatBox.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s25, "\"제 이름은 ___입니다\"\n빈칸에 변수를!", 80, 185, 560, 20, COLORS.DARK, false, true);

  // [Slide 26] f-string
  var s26 = createHeaderSlide(deck, "f-string (추천!)");
  createCodeBlock(s26, 50, 110, 620, 130, 'name = "철수"\nage = 15\nprint(f"이름: {name}, 나이: {age}")\n# 이름: 철수, 나이: 15');
  var tipBox26 = s26.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 260, 520, 60);
  tipBox26.getFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s26, "f를 붙이고 {변수} 사용!", 120, 275, 480, 18, COLORS.DARK, true, true);

  // [Slide 27] f-string 안에서 계산
  var s27 = createHeaderSlide(deck, "f-string 안에서 계산");
  createCodeBlock(s27, 50, 110, 620, 130, 'price = 1000\ncount = 3\nprint(f"총액: {price * count}원")\n# 총액: 3000원');
  addText(s27, "중괄호 안에서 계산도 가능!", 100, 260, 520, 18, COLORS.DARK, true, true);

  // [Slide 28] 자기소개 만들기
  var s28 = createHeaderSlide(deck, "실습: 자기소개 만들기");
  createCodeBlock(s28, 50, 100, 620, 220, 'name = input("이름: ")\nage = int(input("나이: "))\nhobby = input("취미: ")\n\nprint(f"안녕하세요!")\nprint(f"저는 {name}이고,")\nprint(f"{age}살입니다.")\nprint(f"취미는 {hobby}입니다!")');

  // [Slide 29] 실행 결과
  var s29 = createHeaderSlide(deck, "실행 결과");
  var resultBox = s29.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 100, 620, 250);
  resultBox.getFill().setSolidFill(COLORS.CODE_BG);
  addText(s29, "이름: 영희\n나이: 14\n취미: 독서\n\n안녕하세요!\n저는 영희이고,\n14살입니다.\n취미는 독서입니다!", 80, 120, 560, 16, COLORS.CODE_WHITE);

  // [Slide 30] .format() 방식
  var s30 = createHeaderSlide(deck, ".format() 방식");
  createCodeBlock(s30, 50, 110, 620, 100, 'msg = "이름: {}, 나이: {}".format(name, age)\nprint(msg)');
  var tipBox30 = s30.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 240, 520, 60);
  tipBox30.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s30, "이 방식도 있지만 f-string이 더 편해요!", 110, 255, 500, 16, COLORS.DARK, true, true);

  // =====================================================
  // PART 7. 도전 과제 (Challenge) : 2장
  // =====================================================

  // [Slide 31] 도전 과제
  var s31 = createHeaderSlide(deck, "도전 과제!");
  var challengeBox = s31.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 80, 110, 560, 200);
  challengeBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s31, "🏆 이메일 주소에서 아이디만 추출하기!", 100, 130, 520, 20, COLORS.DARK, true, true);
  addText(s31, "입력: \"student@school.com\"\n출력: \"student\"\n\n힌트: find(\"@\")와 슬라이싱 사용!", 120, 180, 480, 18, COLORS.DARK, false, true);

  // [Slide 32] 정답 공개
  var s32 = createHeaderSlide(deck, "정답 공개!");
  createCodeBlock(s32, 50, 110, 620, 160, 'email = input("이메일: ")\nat_pos = email.find("@")\nuser_id = email[:at_pos]\nprint(f"아이디: {user_id}")');

  // =====================================================
  // PART 8. 마무리 (Finish) : 3장
  // =====================================================

  // [Slide 33] 오늘 배운 것
  var s33 = createHeaderSlide(deck, "오늘 배운 것");
  var reviewBox = s33.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 80, 110, 560, 230);
  reviewBox.getFill().setSolidFill(COLORS.CREAM_BG);
  reviewBox.getBorder().setWeight(3).getLineFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s33, "✅ 문자열 = 글자들의 목걸이\n\n✅ 인덱싱: word[0]\n\n✅ 슬라이싱: word[0:3]\n\n✅ f-string: f\"{변수}\"", 120, 140, 480, 20, COLORS.DARK);

  // [Slide 34] 예고
  var s34 = deck.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  s34.getBackground().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s34, "다음 시간에는...", W/2 - 200, H/2 - 100, 400, 28, COLORS.DARK, true, true);
  addText(s34, "📋 리스트와 튜플을 배워요!", W/2 - 200, H/2 - 30, 400, 24, COLORS.WHITE, true, true);
  addText(s34, "여러 데이터를 한 곳에 모아서 관리하기!", W/2 - 200, H/2 + 30, 400, 18, COLORS.DARK, false, true);

  // [Slide 35] 엔딩
  var s35 = deck.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  s35.getBackground().setSolidFill(COLORS.HAEDAL_YELLOW);
  var endBox = s35.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, W/2 - 250, H/2 - 120, 500, 240);
  endBox.getFill().setSolidFill(COLORS.WHITE);
  addText(s35, "수고했어요!", W/2 - 200, H/2 - 80, 400, 36, COLORS.DARK, true, true);
  addText(s35, "📿 이제 문자열을 자유자재로\n다룰 수 있어요!", W/2 - 200, H/2 - 20, 400, 20, COLORS.GRAY, false, true);
  addText(s35, "3차시 완료", W/2 - 100, H/2 + 60, 200, 24, COLORS.HAEDAL_YELLOW, true, true);

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
