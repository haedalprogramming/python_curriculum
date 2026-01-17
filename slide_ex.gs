/**
 * [해달에듀] 옥토스튜디오 1차시: 10분 만에 내 얼굴이 춤춘다! (기본편)
 * 자동 슬라이드 생성 스크립트 (36장)
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

  // 옥토스튜디오 블록 컬러
  BLOCK_GREEN: '#9CCC65',
  BLOCK_YELLOW: '#FFEE58',
  BLOCK_ORANGE: '#FFA726',
  BLOCK_PURPLE: '#AB47BC',
  BLOCK_BLUE: '#42A5F5',
  BLOCK_RED: '#EF5350'
};

// ==========================================
// 메인 실행 함수
// ==========================================
function createHaedalLessonDeck() {
  var deck = SlidesApp.create("[해달에듀] 옥토스튜디오 1차시 - 내 얼굴이 둥둥!");
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
  addText(s01, "내 얼굴이 둥둥!", W/2 - 250, H/2 - 100, 500, 48, COLORS.DARK, true, true);
  addText(s01, "10분 만에 춤추는 앱 만들기 🕺", W/2 - 250, H/2 - 20, 500, 24, COLORS.GRAY, false, true);
  addText(s01, "1차시 | 해달에듀", W/2 - 250, H/2 + 50, 500, 18, COLORS.GRAY, false, true);

  // [Slide 02] 스마트폰의 변신
  var s02 = createHeaderSlide(deck, "스마트폰의 변신");
  addText(s02, "여러분의 스마트폰은 무엇인가요?", 50, 100, 620, 24, COLORS.DARK, true);
  createCard(s02, 50, 160, 280, 200, "📱 게임기/TV", "유튜브 보고\n게임만 하는 기계", COLORS.LIGHT_BG);
  var vsShape = s02.insertShape(SlidesApp.ShapeType.ELLIPSE, W/2 - 30, 240, 60, 60);
  vsShape.getFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s02, "VS", W/2 - 30, 255, 60, 24, COLORS.DARK, true, true);
  createCard(s02, 390, 160, 280, 200, "🪄 마법 지팡이", "상상을 현실로\n만드는 도구!", COLORS.CREAM_BG);

  // [Slide 03] 오늘의 완성작!
  var s03 = createHeaderSlide(deck, "오늘의 완성작!");
  addText(s03, "내 얼굴이 둥둥 떠다니는 앱을 만들어볼 거예요!", 50, 100, 620, 20, COLORS.DARK, true);
  createImagePlaceholder(s03, W/2 - 180, 150, 360, 200, "완성 작품 미리보기 GIF\n(내 얼굴이 둥둥 떠다니는 모습)");
  var previewBorder = s03.insertShape(SlidesApp.ShapeType.RECTANGLE, W/2 - 185, 145, 370, 210);
  previewBorder.getFill().setTransparent();
  previewBorder.getBorder().setWeight(4).getLineFill().setSolidFill(COLORS.HAEDAL_YELLOW);

  // [Slide 04] 오늘의 미션!
  var s04 = createHeaderSlide(deck, "오늘의 미션!");
  addText(s04, "딱 10분 만에 완성해요!", 50, 100, 620, 24, COLORS.DARK, true);
  var goalBox = s04.insertShape(SlidesApp.ShapeType.RECTANGLE, 100, 160, 520, 220);
  goalBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  goalBox.getBorder().setDashStyle(SlidesApp.DashStyle.DASH).setWeight(2).getLineFill().setSolidFill(COLORS.GRAY);
  addText(s04, "☐ 1. 옥토 스튜디오 설치하기\n\n☐ 2. 내 얼굴로 주인공 만들기\n\n☐ 3. 무대(배경) 만들기\n\n☐ 4. 코딩으로 둥둥 춤추게 하기", 140, 180, 440, 18, COLORS.DARK);

  // =====================================================
  // PART 2. 준비하기 (STEP 0) : 3장
  // =====================================================

  // [Slide 05] 마법 도구 꺼내기!
  var s05 = createHeaderSlide(deck, "마법 도구 꺼내기!");
  var leftBox5 = s05.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 120, 350, 260);
  leftBox5.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s05, "🐙 문어 모양 아이콘을 찾아요!", 70, 140, 310, 18, COLORS.DARK, true);
  addText(s05, "앱스토어/플레이스토어에서\n'옥토 스튜디오' 검색!", 70, 200, 310, 16, COLORS.DARK);
  createImagePlaceholder(s05, 100, 280, 100, 80, "QR코드");
  createImagePlaceholder(s05, 420, 120, 260, 260, "앱스토어 검색 화면\n(옥토 스튜디오\n빨간 박스 강조)");

  // [Slide 06] 문어 친구가 물어봐요!
  var s06 = createHeaderSlide(deck, "문어 친구가 물어봐요!");
  var permBox = s06.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 120, 350, 260);
  permBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s06, "\"카메라 켜도 될까?\" → [허용] 꾹!", 70, 160, 310, 16, COLORS.DARK, true);
  addText(s06, "\"마이크 켜도 될까?\" → [허용] 꾹!", 70, 210, 310, 16, COLORS.DARK, true);
  addText(s06, "💡 허용해야 내 얼굴을 찍을 수 있어요!", 70, 280, 310, 14, COLORS.GRAY);
  createImagePlaceholder(s06, 420, 120, 260, 260, "권한 요청 팝업\n(허용 버튼\n빨간 박스 강조)");

  // [Slide 07] 부모님, 여기서 딱 한 번만 도와주세요!
  var s07 = createHeaderSlide(deck, "부모님, 여기서 딱 한 번만 도와주세요!");
  s07.getBackground().setSolidFill(COLORS.CREAM_BG);
  var parentBox = s07.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, W/2 - 250, 150, 500, 200);
  parentBox.getFill().setSolidFill(COLORS.WHITE);
  addText(s07, "📱", W/2 - 30, 180, 60, 48, COLORS.DARK, false, true);
  addText(s07, "권한 설정이 어려우면\n부모님께 도움을 요청하세요", W/2 - 200, 250, 400, 20, COLORS.DARK, true, true);

  // =====================================================
  // PART 3. 주인공 만들기 (STEP 1) : 6장
  // =====================================================

  // [Slide 08] 주인공은 바로... 나!
  var s08 = createHeaderSlide(deck, "주인공은 바로... 나!");
  var spriteBox = s08.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 120, 300, 180);
  spriteBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s08, "스프라이트 (Sprite)", 70, 140, 260, 20, COLORS.DARK, true);
  addText(s08, "= 배우 / 주인공", 70, 180, 260, 16, COLORS.GRAY);
  addText(s08, "오늘은 내 얼굴이 주인공이에요!", 70, 240, 260, 14, COLORS.DARK, true);
  addText(s08, "😀", 450, 180, 100, 80, COLORS.DARK, false, true);

  // [Slide 09] 새 프로젝트 시작!
  var s09 = createHeaderSlide(deck, "새 프로젝트 시작!");
  var stepBox9 = s09.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 120, 350, 180);
  stepBox9.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s09, "1. 옥토 스튜디오 실행", 70, 160, 310, 18, COLORS.DARK);
  addText(s09, "2. [새 프로젝트] 버튼 터치!", 70, 210, 310, 18, COLORS.DARK, true);
  createImagePlaceholder(s09, 420, 120, 260, 260, "앱 실행 화면\n(새 프로젝트 버튼\n빨간 박스 강조)");

  // [Slide 10] 카메라를 켜요!
  var s10 = createHeaderSlide(deck, "카메라를 켜요!");
  var stepBox10 = s10.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 120, 350, 180);
  stepBox10.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s10, "1. [+] 버튼 터치", 70, 160, 310, 18, COLORS.DARK);
  addText(s10, "2. [카메라] 버튼 선택", 70, 210, 310, 18, COLORS.DARK, true);
  createImagePlaceholder(s10, 420, 120, 260, 260, "스프라이트 추가 화면\n(카메라 버튼\n빨간 박스 강조)");

  // [Slide 11] 찰칵! 셀카 타임!
  var s11 = createHeaderSlide(deck, "찰칵! 셀카 타임!");
  addText(s11, "가장 웃긴 표정을 지어보세요!", 50, 100, 620, 24, COLORS.DARK, true);
  var faceBox = s11.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 80, 160, 250, 200);
  faceBox.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s11, "👀 눈을 크게!", 110, 200, 190, 20, COLORS.DARK, true);
  addText(s11, "👃 콧구멍 벌렁벌렁!", 110, 260, 190, 20, COLORS.DARK, true);
  createImagePlaceholder(s11, 380, 130, 280, 240, "셀카 모드 화면\n(호스트 예시 이미지)");

  // [Slide 12] 손가락 가위로 오려요!
  var s12 = createHeaderSlide(deck, "손가락 가위로 오려요!");
  addText(s12, "✂️ 내 얼굴 테두리를 따라 스윽~ 그려주세요", 50, 100, 620, 20, COLORS.DARK, true);
  var cutBox = s12.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 150, 350, 220);
  cutBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s12, "배경은 펑! 사라지고\n내 얼굴만 남아요!", 80, 220, 290, 18, COLORS.DARK, true, true);
  createImagePlaceholder(s12, 420, 120, 260, 260, "누끼 따기 화면\n(손가락 제스처 안내)");

  // [Slide 13] 짠! 주인공 탄생!
  var s13 = createHeaderSlide(deck, "짠! 주인공 탄생!");
  createImagePlaceholder(s13, W/2 - 150, 130, 300, 200, "완성된 캐릭터 이미지\n('뿅' 효과 표시)");
  addText(s13, "이게 바로 오늘의 주인공,\n나만의 스프라이트예요!", W/2 - 200, 350, 400, 18, COLORS.DARK, true, true);

  // =====================================================
  // PART 4. 무대 만들기 (STEP 2) : 4장
  // =====================================================

  // [Slide 14] 무대가 깜깜해요!
  var s14 = createHeaderSlide(deck, "무대가 깜깜해요!");
  addText(s14, "주인공은 있는데 세상이 온통 깜깜하네요?", 50, 100, 620, 20, COLORS.DARK, true);
  var darkBg = s14.insertShape(SlidesApp.ShapeType.RECTANGLE, W/2 - 150, 150, 300, 180);
  darkBg.getFill().setSolidFill(COLORS.DARK);
  addText(s14, "😀", W/2 - 30, 200, 60, 48, COLORS.WHITE, false, true);
  addText(s14, "무대(배경)를 만들어줍시다!", 50, 360, 620, 20, COLORS.DARK, true, true);

  // [Slide 15] 배경 버튼을 눌러요!
  var s15 = createHeaderSlide(deck, "배경 버튼을 눌러요!");
  var stepBox15 = s15.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 120, 350, 150);
  stepBox15.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s15, "[배경] 탭 선택", 70, 160, 310, 18, COLORS.DARK);
  addText(s15, "→ [카메라] 버튼 터치", 70, 200, 310, 18, COLORS.DARK, true);
  createImagePlaceholder(s15, 420, 120, 260, 260, "배경 탭 선택 화면\n(카메라 버튼\n빨간 박스 강조)");

  // [Slide 16] 어디를 찍을까요?
  var s16 = createHeaderSlide(deck, "어디를 찍을까요?");
  addText(s16, "✨ 꿀팁!", 50, 100, 620, 24, COLORS.HAEDAL_YELLOW, true);
  createCard(s16, 50, 150, 150, 100, "🏠", "우리 집 거실", COLORS.LIGHT_BG);
  createCard(s16, 220, 150, 150, 100, "📚", "내 책상 위", COLORS.LIGHT_BG);
  createCard(s16, 390, 150, 150, 100, "👵", "할머니 댁", COLORS.LIGHT_BG);
  createCard(s16, 560, 150, 130, 100, "🏠", "인형의 집 앞", COLORS.LIGHT_BG);
  addText(s16, "원하는 곳을 배경으로 찍어보세요!", 50, 280, 620, 20, COLORS.DARK, true, true);

  // [Slide 17] 위치와 크기 조절!
  var s17 = createHeaderSlide(deck, "위치와 크기 조절!");
  var gestureBox = s17.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 120, 350, 260);
  gestureBox.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s17, "☝️ 손가락으로 캐릭터를 잡고\n쓱~ 옮겨요!", 80, 180, 290, 18, COLORS.DARK, true);
  addText(s17, "✌️ 두 손가락으로\n크기도 조절!", 80, 280, 290, 18, COLORS.DARK, true);
  createImagePlaceholder(s17, 420, 120, 260, 260, "캐릭터 이동/크기 조절\n제스처 안내");

  // =====================================================
  // PART 5. 코딩하기 (STEP 3) : 10장 ★ 핵심 파트
  // =====================================================

  // [Slide 18] 마법을 부려볼 시간!
  var s18 = createHeaderSlide(deck, "마법을 부려볼 시간!");
  addText(s18, "지금은 내 얼굴이 가만히 멈춰 있죠?", 50, 100, 620, 20, COLORS.DARK, true);
  var codeBox = s18.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 150, 520, 180);
  codeBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s18, "코딩 = 명령을 내리는 것!", 150, 180, 420, 24, COLORS.DARK, true, true);
  addText(s18, "🚂 블록을 기차처럼 연결해요!", 150, 240, 420, 20, COLORS.GRAY, false, true);

  // [Slide 19] 첫 번째: 시작 신호!
  var s19 = createHeaderSlide(deck, "첫 번째: 시작 신호!");
  addText(s19, "초록색 깃발 블록 = '출발!' 신호", 50, 100, 350, 18, COLORS.DARK, true);
  drawBlock(s19, 80, 180, "▶ 시작하기(재생 버튼)", COLORS.BLOCK_YELLOW, 260, 60);
  addText(s19, "[시작하기] 블록을 꺼내요", 80, 280, 280, 16, COLORS.GRAY);
  createImagePlaceholder(s19, 420, 120, 260, 260, "시작 블록 확대 이미지\n블록 팔레트 스크린샷");

  // [Slide 20] 두 번째: 위로 점프!
  var s20 = createHeaderSlide(deck, "두 번째: 위로 점프!");
  addText(s20, "[동작] 탭에서 [위로 이동] 블록을\n시작 블록 뒤에 딸깍!", 50, 100, 350, 16, COLORS.DARK, true);
  drawBlock(s20, 80, 180, "▶ 시작하기", COLORS.BLOCK_YELLOW, 200, 50);
  drawBlock(s20, 80, 235, "⬆ 위로 이동", COLORS.BLOCK_GREEN, 200, 50);
  addText(s20, "딸깍!", 300, 220, 80, 20, COLORS.HAEDAL_YELLOW, true);
  createImagePlaceholder(s20, 420, 120, 260, 260, "이동 블록 연결 과정");

  // [Slide 21] 세 번째: 아래로 착지!
  var s21 = createHeaderSlide(deck, "세 번째: 아래로 착지!");
  addText(s21, "[동작] 탭에서 [아래로 이동] 블록도 딸깍!", 50, 100, 350, 16, COLORS.DARK, true);
  drawBlock(s21, 80, 160, "▶ 시작하기", COLORS.BLOCK_YELLOW, 200, 50);
  drawBlock(s21, 80, 215, "⬆ 위로 이동", COLORS.BLOCK_GREEN, 200, 50);
  drawBlock(s21, 80, 270, "⬇ 아래로 이동", COLORS.BLOCK_GREEN, 200, 50);
  createImagePlaceholder(s21, 420, 120, 260, 260, "블록 3개 연결된 모습\n확대 표시");

  // [Slide 22] 재생 버튼을 눌러볼까요?
  var s22 = createHeaderSlide(deck, "재생 버튼을 눌러볼까요?");
  addText(s22, "▶️ 터치!", 50, 100, 200, 28, COLORS.DARK, true);
  var questionBox = s22.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 160, 520, 180);
  questionBox.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s22, "...어? 한 번 움찔하고\n멈춰버렸어요!", W/2 - 150, 210, 300, 24, COLORS.DARK, true, true);
  addText(s22, "❓", W/2 + 150, 200, 60, 48, COLORS.GRAY, false, true);

  // [Slide 23] 도돌이표 마법이 필요해요!
  var s23 = createHeaderSlide(deck, "도돌이표 마법이 필요해요!");
  var repeatBox = s23.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, W/2 - 200, 130, 400, 200);
  repeatBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  repeatBox.getBorder().setWeight(4).getLineFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s23, "🔁 무한 반복 블록", W/2 - 150, 160, 300, 28, COLORS.DARK, true, true);
  addText(s23, "= 도돌이표 마법!", W/2 - 150, 210, 300, 24, COLORS.HAEDAL_YELLOW, true, true);
  addText(s23, "계속 춤추게 하려면 이 블록이 필요해요!", W/2 - 200, 280, 400, 16, COLORS.GRAY, false, true);
  addText(s23, "✨", W/2 + 130, 140, 40, 32, COLORS.HAEDAL_YELLOW);

  // [Slide 24] 샌드위치처럼 감싸요!
  var s24 = createHeaderSlide(deck, "샌드위치처럼 감싸요!");
  addText(s24, "[제어] 탭 → [무한 반복] 블록으로\n위, 아래 이동 블록을 와앙! 감싸주세요", 50, 95, 350, 14, COLORS.DARK, true);
  // 무한 반복 블록 (감싸는 형태)
  var loopOuter = s24.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 80, 160, 240, 180);
  loopOuter.getFill().setSolidFill(COLORS.BLOCK_RED);
  addText(s24, "🔁 무한 반복", 100, 170, 200, 14, COLORS.WHITE, true);
  drawBlock(s24, 100, 210, "⬆ 위로 이동", COLORS.BLOCK_GREEN, 180, 45);
  drawBlock(s24, 100, 260, "⬇ 아래로 이동", COLORS.BLOCK_GREEN, 180, 45);
  createImagePlaceholder(s24, 420, 120, 260, 260, "블록 감싸는 과정\n단계별 이미지");

  // [Slide 25] 다시 재생!
  var s25 = createHeaderSlide(deck, "다시 재생!");
  addText(s25, "▶️ 터치!", 50, 100, 200, 28, COLORS.DARK, true);
  var successBox = s25.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 160, 520, 180);
  successBox.getFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s25, "우와! 내 캐릭터가\n둥실둥실~ 끝없이 춤을 춰요!", W/2 - 180, 200, 360, 24, COLORS.DARK, true, true);
  addText(s25, "🎉 성공!", W/2 - 60, 280, 120, 20, COLORS.DARK, true, true);

  // [Slide 26] 오늘의 코딩 공식
  var s26 = createHeaderSlide(deck, "오늘의 코딩 공식");
  var formulaBox = s26.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 80, 120, 560, 260);
  formulaBox.getFill().setSolidFill(COLORS.CREAM_BG);
  formulaBox.getBorder().setWeight(3).getLineFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s26, "🟢 시작: [재생 버튼을 눌렀을 때]", 120, 150, 480, 18, COLORS.DARK, true);
  addText(s26, "🔁 반복: [무한 반복] 블록 안에 넣기", 120, 210, 480, 18, COLORS.DARK, true);
  addText(s26, "⬆️⬇️ 동작: [위로 가기] + [아래로 가기]", 120, 270, 480, 18, COLORS.DARK, true);
  createImagePlaceholder(s26, 500, 150, 120, 200, "완성된\n블록 코드");

  // [Slide 27] SOS (어두운 배경)
  var s27 = deck.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  s27.getBackground().setSolidFill(COLORS.DARK_BG);
  addText(s27, "🆘 선생님, 도와주세요!", 50, 30, 620, 28, COLORS.HAEDAL_YELLOW, true);
  var sos1 = s27.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 100, 300, 200);
  sos1.getFill().setSolidFill("#5A5A5A");
  addText(s27, "캐릭터가 너무 빨라요!", 80, 130, 240, 18, COLORS.WHITE, true);
  addText(s27, "→ 이동 블록의 숫자를\n줄여보세요", 80, 180, 240, 14, COLORS.LIGHT_BG);
  var sos2 = s27.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 370, 100, 300, 200);
  sos2.getFill().setSolidFill("#5A5A5A");
  addText(s27, "블록이 안 붙어요!", 400, 130, 240, 18, COLORS.WHITE, true);
  addText(s27, "→ 자석처럼 '착' 붙을 때까지\n가까이!", 400, 180, 240, 14, COLORS.LIGHT_BG);

  // =====================================================
  // PART 6. 마무리 미션 (Finish) : 8장
  // =====================================================

  // 공통 마무리 미션 레이아웃 생성 함수
  function createFinishSlide(currentStep, screenshotDesc) {
    var slide = createHeaderSlide(deck, "오늘의 탐험 완료!");

    // 왼쪽 미션 리스트
    var missionBox = slide.insertShape(SlidesApp.ShapeType.RECTANGLE, 50, 120, 350, 200);
    missionBox.getFill().setSolidFill(COLORS.WHITE);
    missionBox.getBorder().setWeight(2).getLineFill().setSolidFill(COLORS.DARK);

    addText(slide, "📝 마무리 미션", 80, 140, 290, 22, COLORS.DARK, true);

    var step1Style = (currentStep === 1) ? true : false;
    var step2Style = (currentStep === 2) ? true : false;

    var step1Color = (currentStep === 1) ? COLORS.DARK : COLORS.GRAY;
    var step2Color = (currentStep === 2) ? COLORS.DARK : COLORS.GRAY;

    var step1Check = (currentStep > 1) ? "✅ " : "";
    var step2Check = "";

    addText(slide, step1Check + "1. 프로젝트 파일 저장", 80, 190, 290, 16, step1Color, step1Style);
    addText(slide, step2Check + "2. 내 작품 녹화하기", 80, 230, 290, 16, step2Color, step2Style);

    // 오른쪽 스크린샷
    createImagePlaceholder(slide, 420, 120, 260, 260, screenshotDesc);

    return slide;
  }

  // 6-1. 프로젝트 파일 저장 (4장)
  createFinishSlide(1, "앱 화면\n(공유 버튼\n빨간 박스 강조)");
  createFinishSlide(1, "공유하기 팝업\n(프로젝트 파일 보내기\n빨간 박스 강조)");
  createFinishSlide(1, "프로젝트 파일 보내기\n(이름 입력 + 저장 버튼\n빨간 박스 강조)");
  createFinishSlide(1, "저장 위치 선택\n(다운로드 폴더\n빨간 박스 강조)");

  // 6-2. 영상 녹화하기 (4장)
  createFinishSlide(2, "공유하기 팝업\n(영상 녹화하기\n빨간 박스 강조)");
  createFinishSlide(2, "영상 녹화 화면\n(녹화 시작하기 버튼\n빨간 박스 강조)");
  createFinishSlide(2, "영상 미리보기\n(앨범에 저장하기\n빨간 박스 강조)");
  createFinishSlide(2, "저장 완료!\n(앨범에 저장했어요!\n체크 표시)");

  // =====================================================
  // PART 7. 예고 (Closing) : 1장
  // =====================================================

  // [Slide 36] 다음 시간에는...
  var s36 = deck.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  s36.getBackground().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s36, "다음 시간에는...", W/2 - 200, H/2 - 100, 400, 28, COLORS.DARK, true, true);
  addText(s36, "🎤 내 목소리를 넣고", W/2 - 200, H/2 - 40, 400, 24, COLORS.WHITE, true, true);
  addText(s36, "📱 핸드폰을 흔들면\n복주머니가 쏟아져요!", W/2 - 200, H/2 + 10, 400, 24, COLORS.WHITE, true, true);
  addText(s36, "2차시에서 만나요!", W/2 - 150, H/2 + 100, 300, 20, COLORS.DARK, true, true);

  Logger.log("슬라이드 생성 완료! (총 36장) URL: " + deck.getUrl());
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
  addText(slide, title, x + 20, y + 15, w - 40, 20, COLORS.DARK, true, true);
  addText(slide, content, x + 20, y + 50, w - 40, 14, COLORS.GRAY, false, true);
}

function createImagePlaceholder(slide, x, y, w, h, altText) {
  var placeholder = slide.insertShape(SlidesApp.ShapeType.RECTANGLE, x, y, w, h);
  placeholder.getFill().setSolidFill('#E0E0E0');
  placeholder.getBorder().setDashStyle(SlidesApp.DashStyle.DASH).setWeight(2).getLineFill().setSolidFill(COLORS.GRAY);
  addText(slide, "📷 " + altText, x + 10, y + h/2 - 30, w - 20, 11, COLORS.GRAY, false, true);
}

function drawBlock(slide, x, y, text, color, w, h) {
  var width = w || 200;
  var height = h || 50;
  var block = slide.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, x, y, width, height);
  block.getFill().setSolidFill(color);
  block.getBorder().setTransparent();
  var txt = block.getText();
  txt.setText(text);
  var style = txt.getTextStyle();
  var textColor = (color === COLORS.BLOCK_YELLOW) ? COLORS.DARK : COLORS.WHITE;
  style.setForegroundColor(textColor).setFontSize(14).setBold(true);
  txt.getParagraphStyle().setParagraphAlignment(SlidesApp.ParagraphAlignment.CENTER);
}

function addCallout(slide, x, y, text, color) {
  var callout = slide.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, x, y, 160, 80);
  callout.getFill().setSolidFill(color);
  callout.getBorder().setTransparent();
  var t = callout.getText();
  t.setText(text);
  var style = t.getTextStyle();
  var textColor = (color === COLORS.HAEDAL_YELLOW || color === COLORS.BLOCK_YELLOW) ? COLORS.DARK : COLORS.WHITE;
  style.setForegroundColor(textColor).setFontSize(12).setBold(true);
  t.getParagraphStyle().setParagraphAlignment(SlidesApp.ParagraphAlignment.CENTER);
}
