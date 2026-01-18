# [슬라이드 기획안] 15차시: webbrowser 모듈

## 1. 기획 개요

| 항목 | 내용 |
|------|------|
| **수업명** | [해달에듀] 파이썬 프로그래밍 15차시 - webbrowser 모듈 |
| **대상** | 초중고 학생 (코딩 초보자) |
| **총 슬라이드** | 32장 |
| **학습 목표** | webbrowser 모듈을 활용하여 웹사이트를 자동으로 열고 검색하는 프로그램을 만들 수 있다 |
| **실습 코드** | `15-1-webbrowser_concept.py`, `15-2-practice_search.py`, `15-3-practice_boss.py` |
| **디자인 컨셉** | 메인 컬러: #FFD506, 웹/브라우저 비유 |

---

## 2. 상세 슬라이드 구성안

### PART 1. 도입 (Intro) : 4장

**목표: 흥미 유발 및 webbrowser 소개**

| 번호 | 유형 | 화면 구성 및 내용 | 디자인/연출 포인트 |
|------|------|-------------------|-------------------|
| **01** | 표지 | **[제목] 파이썬으로 웹 열기!** 🌐 webbrowser 모듈 **[부제] 15차시 \| 해달에듀** | 배경: #FFD506, 웹 이모지 |
| **02** | 질문 | **파이썬으로 웹사이트를 열 수 있다면?** 🔍 자동 검색 프로그램 📑 여러 탭 한 번에 열기 👔 사장님 모드 (빠른 화면 전환) **가능합니다!** | 웹 관련 아이콘 |
| **03** | 미리보기 | **오늘의 완성작!** 🔍 구글 자동 검색기 👔 사장님이 오셨다! (비상 모드) | 2개 완성작 미리보기 |
| **04** | 목표 | **오늘의 미션!** ☐ 1. webbrowser 기본 사용법 ☐ 2. URL 열기와 검색 ☐ 3. 여러 탭 열기 ☐ 4. 재미있는 프로그램 만들기 | 점선 박스, 체크박스 |

---

### PART 2. webbrowser 기초 (Concept 1) : 6장

**목표: webbrowser 기본 사용법**

| 번호 | 유형 | 화면 구성 및 내용 | 디자인/연출 포인트 |
|------|------|-------------------|-------------------|
| **05** | 개념 | **webbrowser 모듈이란?** 🌐 웹 브라우저를 제어하는 모듈! ```python import webbrowser ``` 기본 브라우저에서 웹페이지 열기 | 브라우저 아이콘 |
| **06** | 코드 | **웹사이트 열기** ```python import webbrowser webbrowser.open("https://www.google.com") ``` 기본 브라우저로 구글이 열려요! | 코드 + 결과 |
| **07** | 코드 | **새 탭에서 열기** ```python # 새 탭에서 열기 webbrowser.open_new_tab("https://www.naver.com") # 새 창에서 열기 webbrowser.open_new("https://www.daum.net") ``` | 코드 + 차이점 |
| **08** | 코드 | **여러 사이트 열기** ```python sites = [     "https://www.google.com",     "https://www.youtube.com",     "https://www.github.com" ] for site in sites:     webbrowser.open_new_tab(site) ``` 한 번에 여러 탭 열기! | 코드 + 리스트 |
| **09** | 개념 | **URL 구조 이해** ``` https://www.google.com/search?q=파이썬 ``` - `https://` : 프로토콜 - `www.google.com` : 도메인 - `/search` : 경로 - `?q=파이썬` : 검색어 (쿼리) | URL 구조 도식 |
| **10** | 코드 | **검색 URL 만들기** ```python query = "파이썬 강좌" # 구글 검색 url = f"https://www.google.com/search?q={query}" webbrowser.open(url) # 유튜브 검색 url = f"https://www.youtube.com/results?search_query={query}" webbrowser.open(url) ``` | 코드 + 검색 원리 |

---

### PART 3. URL 인코딩 (Concept 2) : 4장

**목표: 한글/특수문자 처리**

| 번호 | 유형 | 화면 구성 및 내용 | 디자인/연출 포인트 |
|------|------|-------------------|-------------------|
| **11** | 개념 | **URL 인코딩이란?** 🔤 URL에 한글이나 특수문자가 있으면? 컴퓨터가 이해할 수 있게 변환! "파이썬" → "%ED%8C%8C%EC%9D%B4%EC%8D%AC" | 인코딩 개념 |
| **12** | 코드 | **urllib.parse 사용** ```python from urllib.parse import quote query = "파이썬 프로그래밍" encoded = quote(query) print(encoded) # %ED%8C%8C%EC%9D%B4%EC%8D%AC%20... url = f"https://www.google.com/search?q={encoded}" webbrowser.open(url) ``` | 코드 + quote 함수 |
| **13** | 코드 | **검색 함수 만들기** ```python from urllib.parse import quote import webbrowser def google_search(query):     encoded = quote(query)     url = f"https://www.google.com/search?q={encoded}"     webbrowser.open(url) google_search("파이썬 문법") ``` | 함수화 |
| **14** | 코드 | **다양한 검색 엔진** ```python def search(query, engine="google"):     encoded = quote(query)     if engine == "google":         url = f"https://www.google.com/search?q={encoded}"     elif engine == "naver":         url = f"https://search.naver.com/search.naver?query={encoded}"     elif engine == "youtube":         url = f"https://www.youtube.com/results?search_query={encoded}"     webbrowser.open(url) ``` | 다양한 검색 |

---

### PART 4. 실습 A - 자동 검색기 (Practice A) : 6장

**목표: 검색어 자동 검색 프로그램**

| 번호 | 유형 | 화면 구성 및 내용 | 디자인/연출 포인트 |
|------|------|-------------------|-------------------|
| **15** | 안내 | **실습 A: 구글 자동 검색기** 🔍 검색어를 입력하면 자동으로 검색! 검색 엔진도 선택 가능! | 검색 이미지 |
| **16** | 실습 | **검색 함수** ```python from urllib.parse import quote import webbrowser def search_google(query):     url = f"https://www.google.com/search?q={quote(query)}"     webbrowser.open(url) def search_naver(query):     url = f"https://search.naver.com/search.naver?query={quote(query)}"     webbrowser.open(url) def search_youtube(query):     url = f"https://www.youtube.com/results?search_query={quote(query)}"     webbrowser.open(url) ``` | 코드 블록 |
| **17** | 실습 | **메뉴 시스템** ```python while True:     print("\\n=== 검색 프로그램 ===")     print("1. 구글 검색")     print("2. 네이버 검색")     print("3. 유튜브 검색")     print("4. 종료")     choice = input("선택: ")     if choice == "4":         print("안녕!")         break     query = input("검색어: ")     if choice == "1":         search_google(query)     elif choice == "2":         search_naver(query)     elif choice == "3":         search_youtube(query) ``` | 코드 블록 |
| **18** | 완료 | **실행 결과** ``` === 검색 프로그램 === 1. 구글 검색 2. 네이버 검색 3. 유튜브 검색 4. 종료 선택: 3 검색어: 파이썬 강의 ``` → 유튜브에서 "파이썬 강의" 검색! | 터미널 결과 |
| **19** | 확장 | **여러 검색어 한 번에** ```python queries = input("검색어들 (쉼표로 구분): ") query_list = queries.split(",") for q in query_list:     search_google(q.strip()) ``` 한 번에 여러 탭 열기! | 확장 코드 |
| **20** | 확장 | **이미지 검색** ```python def search_images(query):     encoded = quote(query)     url = f"https://www.google.com/search?q={encoded}&tbm=isch"     webbrowser.open(url) ``` `&tbm=isch` = 이미지 검색! | 이미지 검색 |

---

### PART 5. 실습 B - 사장님 모드 (Practice B) : 6장

**목표: 비상 화면 전환 프로그램**

| 번호 | 유형 | 화면 구성 및 내용 | 디자인/연출 포인트 |
|------|------|-------------------|-------------------|
| **21** | 안내 | **실습 B: 사장님이 오셨다!** 👔 비상! 업무 화면으로 빠르게 전환! (재미로 만드는 프로그램) | 사장님 이미지 |
| **22** | 실습 | **엔터키로 발동** ```python import webbrowser work_sites = [     "https://docs.google.com",     "https://www.microsoft.com/excel",     "https://mail.google.com" ] print("👀 게임하는 중...") print("사장님이 오시면 엔터를 누르세요!") input()  # 엔터 대기 print("👔 사장님이 오셨다!") for site in work_sites:     webbrowser.open_new_tab(site) ``` | 코드 블록 |
| **23** | 실습 | **타이머 버전** ```python import webbrowser import time print("5초 후에 업무 화면이 열립니다...") for i in range(5, 0, -1):     print(f"{i}...")     time.sleep(1) print("업무 모드 ON!") webbrowser.open("https://docs.google.com") ``` | 코드 블록 |
| **24** | 실습 | **완성 코드** ```python import webbrowser import time def boss_mode():     """업무 관련 사이트 열기"""     sites = [         "https://docs.google.com",         "https://calendar.google.com",         "https://mail.google.com"     ]     for site in sites:         webbrowser.open_new_tab(site)     print("👔 업무 모드 활성화!") def play_mode():     """놀이 관련 사이트 열기"""     sites = [         "https://www.youtube.com",         "https://www.twitch.tv"     ]     for site in sites:         webbrowser.open_new_tab(site)     print("🎮 놀이 모드 활성화!") # 실행 print("1. 업무 모드  2. 놀이 모드") choice = input("선택: ") if choice == "1":     boss_mode() else:     play_mode() ``` | 전체 코드 |
| **25** | 완료 | **실행 결과** ``` 1. 업무 모드  2. 놀이 모드 선택: 1 👔 업무 모드 활성화! ``` → 업무 사이트들이 열림! | 터미널 결과 |
| **26** | 주의 | **⚠️ 책임감 있게!** 이 프로그램은 재미로 만드는 것! 실제로 수업/업무 시간에 딴짓은 안 돼요! 🙅 | 경고 메시지 |

---

### PART 6. 추가 활용 (Advanced) : 3장

**목표: 다양한 활용 아이디어**

| 번호 | 유형 | 화면 구성 및 내용 | 디자인/연출 포인트 |
|------|------|-------------------|-------------------|
| **27** | 코드 | **아침 루틴** ```python import webbrowser # 아침에 확인할 사이트들 morning_sites = [     "https://weather.naver.com",     "https://news.naver.com",     "https://mail.google.com" ] for site in morning_sites:     webbrowser.open_new_tab(site) ``` 매일 아침 실행! | 아침 루틴 |
| **28** | 코드 | **공부 모드** ```python study_sites = [     "https://www.youtube.com/@코딩채널",     "https://www.python.org/doc",     "https://stackoverflow.com" ] for site in study_sites:     webbrowser.open_new_tab(site) ``` 공부에 필요한 사이트 모음! | 공부 모드 |
| **29** | 코드 | **랜덤 사이트** ```python import webbrowser import random fun_sites = [     "https://theuselessweb.com",     "https://cat-bounce.com",     "https://pointerpointer.com" ] pick = random.choice(fun_sites) print(f"오늘의 재미있는 사이트: {pick}") webbrowser.open(pick) ``` | 랜덤 사이트 |

---

### PART 7. 마무리 (Finish) : 3장

**목표: 정리 및 다음 차시 예고**

| 번호 | 유형 | 화면 구성 및 내용 | 디자인/연출 포인트 |
|------|------|-------------------|-------------------|
| **30** | 정리 | **오늘 배운 것** ✅ webbrowser.open(): URL 열기 ✅ open_new_tab(): 새 탭에서 열기 ✅ quote(): URL 인코딩 ✅ 검색 URL 구조 이해 | 체크리스트 |
| **31** | 예고 | **다음 시간에는...** 📁 파일 입출력! 파일 읽고 쓰기로 데이터 저장! | 배경: #FFD506, 파일 이모지 |
| **32** | 엔딩 | **수고했어요!** 🌐 이제 파이썬으로 웹을 다룰 수 있어요! **15차시 완료** | 엔딩 로고 |

---

## 3. 제작 시 유의사항 (Checklist)

1. **URL 구조**: 쿼리스트링 개념 간단히 설명
2. **인코딩 필요성**: 한글 검색어 처리
3. **책임감**: 사장님 모드는 재미 요소로만
4. **다양한 활용**: 실생활 활용 아이디어 제시
5. **실습 코드**: `code/15-*.py` 파일과 일치 확인

---

## 4. 관련 코드 파일

| 파일명 | 내용 |
|--------|------|
| `15-1-webbrowser_concept.py` | webbrowser 기초 |
| `15-2-practice_search.py` | 실습 A: 자동 검색기 |
| `15-3-practice_boss.py` | 실습 B: 사장님 모드 |
| `15-4-useful.py` | 유용한 활용 예제 |
