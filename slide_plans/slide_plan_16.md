# [슬라이드 기획안] 16차시: 파일 입출력

## 1. 기획 개요

| 항목 | 내용 |
|------|------|
| **수업명** | [해달에듀] 파이썬 프로그래밍 16차시 - 파일 입출력 |
| **대상** | 초중고 학생 (코딩 초보자) |
| **총 슬라이드** | 35장 |
| **학습 목표** | 파일을 읽고 쓰는 방법을 이해하고, 데이터를 파일에 저장하는 프로그램을 만들 수 있다 |
| **실습 코드** | `16-1-file_concept.py`, `16-2-practice_diary.py`, `16-3-practice_memo.py` |
| **디자인 컨셉** | 메인 컬러: #FFD506, 파일/저장 비유 |

---

## 2. 상세 슬라이드 구성안

### PART 1. 도입 (Intro) : 4장

**목표: 흥미 유발 및 파일 입출력 소개**

| 번호 | 유형 | 화면 구성 및 내용 | 디자인/연출 포인트 |
|------|------|-------------------|-------------------|
| **01** | 표지 | **[제목] 데이터를 저장하자!** 📁 파일 입출력 **[부제] 16차시 \| 해달에듀** | 배경: #FFD506, 파일 이모지 |
| **02** | 질문 | **프로그램을 껐다 키면 데이터가 사라진다?** 😱 변수에 저장한 것들... 프로그램 종료 = 데이터 증발! **파일에 저장하면 영구 보관!** | 휘발성 vs 영구 저장 |
| **03** | 미리보기 | **오늘의 완성작!** 📝 나만의 일기장 📋 메모 앱 | 2개 완성작 미리보기 |
| **04** | 목표 | **오늘의 미션!** ☐ 1. 파일 열기/닫기 ☐ 2. 파일 읽기 (read) ☐ 3. 파일 쓰기 (write) ☐ 4. 일기장 프로그램 만들기 | 점선 박스, 체크박스 |

---

### PART 2. 파일 기초 (Concept 1) : 6장

**목표: 파일 열기, 닫기, 모드 이해**

| 번호 | 유형 | 화면 구성 및 내용 | 디자인/연출 포인트 |
|------|------|-------------------|-------------------|
| **05** | 개념 | **파일 입출력이란?** 📁 파일에서 읽기 = 입력 (Input) 📁 파일에 쓰기 = 출력 (Output) 파이썬으로 파일을 읽고 쓸 수 있어요! | I/O 개념 |
| **06** | 코드 | **파일 열기: open()** ```python file = open("test.txt", "r") # 파일 사용... file.close()  # 사용 후 닫기! ``` `open(파일명, 모드)` | 코드 + 설명 |
| **07** | 개념 | **파일 모드** | 모드 | 의미 | 설명 | |------|------|------| | "r" | read | 읽기 (파일 없으면 에러) | | "w" | write | 쓰기 (파일 새로 생성/덮어쓰기) | | "a" | append | 추가 (파일 끝에 추가) | | "r+" | read+write | 읽기+쓰기 | | 모드 표 |
| **08** | 코드 | **with 문 (권장!)** ```python # 자동으로 파일 닫아줌! with open("test.txt", "r") as file:     content = file.read()     print(content) # 여기서 자동으로 close() ``` `with`를 쓰면 close() 자동! | 코드 + with 강조 |
| **09** | 주의 | **⚠️ 파일 경로** ```python # 같은 폴더에 있으면 open("test.txt", "r") # 다른 폴더에 있으면 (절대경로) open("C:/Users/user/test.txt", "r") # 상대 경로 open("./data/test.txt", "r") ``` | 경로 설명 |
| **10** | 주의 | **⚠️ 인코딩 (한글)** ```python # 한글 파일은 encoding 필수! with open("한글.txt", "r", encoding="utf-8") as f:     content = f.read() ``` `encoding="utf-8"` 잊지 마세요! | 인코딩 강조 |

---

### PART 3. 파일 읽기 (Concept 2) : 5장

**목표: 다양한 방법으로 파일 읽기**

| 번호 | 유형 | 화면 구성 및 내용 | 디자인/연출 포인트 |
|------|------|-------------------|-------------------|
| **11** | 코드 | **전체 읽기: read()** ```python with open("test.txt", "r", encoding="utf-8") as f:     content = f.read()  # 전체 내용     print(content) ``` 파일 전체를 하나의 문자열로! | 코드 + 결과 |
| **12** | 코드 | **한 줄씩 읽기: readline()** ```python with open("test.txt", "r", encoding="utf-8") as f:     line1 = f.readline()  # 첫 번째 줄     line2 = f.readline()  # 두 번째 줄     print(line1)     print(line2) ``` | 코드 + 결과 |
| **13** | 코드 | **모든 줄 리스트로: readlines()** ```python with open("test.txt", "r", encoding="utf-8") as f:     lines = f.readlines()  # ['첫줄\n', '둘째줄\n', ...]     print(lines) ``` 각 줄이 리스트 요소로! | 코드 + 결과 |
| **14** | 코드 | **for문으로 읽기 (권장!)** ```python with open("test.txt", "r", encoding="utf-8") as f:     for line in f:         print(line.strip())  # 줄바꿈 제거 ``` 메모리 효율적! | 코드 + strip 설명 |
| **15** | 정리 | **읽기 방법 정리** | 메서드 | 반환값 | |--------|--------| | `read()` | 전체 문자열 | | `readline()` | 한 줄 문자열 | | `readlines()` | 줄 리스트 | | `for line in f` | 한 줄씩 반복 | | 메서드 표 |

---

### PART 4. 파일 쓰기 (Concept 3) : 5장

**목표: 파일에 데이터 쓰기**

| 번호 | 유형 | 화면 구성 및 내용 | 디자인/연출 포인트 |
|------|------|-------------------|-------------------|
| **16** | 코드 | **새 파일 쓰기: write()** ```python with open("new.txt", "w", encoding="utf-8") as f:     f.write("안녕하세요!\\n")     f.write("파이썬으로 파일 쓰기!\\n") ``` `"w"` 모드: 파일 새로 생성/덮어쓰기 | 코드 + 주의 |
| **17** | 주의 | **⚠️ "w" 모드 주의!** "w" 모드는 기존 내용을 지우고 새로 씀! 기존 파일이 있으면 내용이 사라져요! 추가하려면 "a" 모드 사용! | 경고 박스 |
| **18** | 코드 | **내용 추가하기: append** ```python with open("log.txt", "a", encoding="utf-8") as f:     f.write("새로운 줄 추가!\\n") ``` `"a"` 모드: 파일 끝에 추가 | 코드 + 차이 |
| **19** | 코드 | **여러 줄 쓰기: writelines()** ```python lines = ["첫 번째 줄\\n", "두 번째 줄\\n", "세 번째 줄\\n"] with open("test.txt", "w", encoding="utf-8") as f:     f.writelines(lines) ``` 리스트를 한 번에 쓰기! | 코드 블록 |
| **20** | 코드 | **리스트 데이터 저장** ```python scores = [95, 87, 92, 78, 85] with open("scores.txt", "w", encoding="utf-8") as f:     for score in scores:         f.write(f"{score}\\n") ``` | 코드 블록 |

---

### PART 5. 실습 A - 일기장 (Practice A) : 6장

**목표: 일기 쓰기/읽기 프로그램**

| 번호 | 유형 | 화면 구성 및 내용 | 디자인/연출 포인트 |
|------|------|-------------------|-------------------|
| **21** | 안내 | **실습 A: 나만의 일기장** 📝 날짜별로 일기를 쓰고 저장! 나중에 다시 읽을 수 있어요! | 일기장 이미지 |
| **22** | 실습 | **일기 쓰기 함수** ```python from datetime import datetime def write_diary():     today = datetime.now().strftime("%Y-%m-%d")     print(f"📝 {today} 일기 쓰기")     content = input("오늘 하루 어땠나요?\\n>>> ")     with open(f"diary_{today}.txt", "w", encoding="utf-8") as f:         f.write(f"📅 날짜: {today}\\n")         f.write("-" * 30 + "\\n")         f.write(content + "\\n")     print("✅ 일기가 저장되었습니다!") ``` | 코드 블록 |
| **23** | 실습 | **일기 읽기 함수** ```python def read_diary():     date = input("읽을 일기 날짜 (YYYY-MM-DD): ")     filename = f"diary_{date}.txt"     try:         with open(filename, "r", encoding="utf-8") as f:             print("\\n" + f.read())     except FileNotFoundError:         print("❌ 해당 날짜의 일기가 없습니다.") ``` | 코드 블록 |
| **24** | 실습 | **메인 메뉴** ```python while True:     print("\\n=== 📓 나의 일기장 ===")     print("1. 일기 쓰기")     print("2. 일기 읽기")     print("3. 종료")     choice = input("선택: ")     if choice == "1":         write_diary()     elif choice == "2":         read_diary()     elif choice == "3":         print("안녕! 👋")         break ``` | 코드 블록 |
| **25** | 완료 | **실행 결과** ``` === 📓 나의 일기장 === 1. 일기 쓰기 2. 일기 읽기 3. 종료 선택: 1 📝 2024-11-18 일기 쓰기 오늘 하루 어땠나요? >>> 오늘 파이썬으로 일기장을 만들었다! ✅ 일기가 저장되었습니다! ``` | 터미널 결과 |
| **26** | 확장 | **확장: 일기 목록** ```python import os def list_diaries():     files = os.listdir(".")     diaries = [f for f in files if f.startswith("diary_")]     print("\\n📚 저장된 일기:")     for d in diaries:         print(f"  - {d}") ``` `os.listdir()`로 파일 목록! | 확장 코드 |

---

### PART 6. 실습 B - 메모 앱 (Practice B) : 5장

**목표: 간단한 메모 앱**

| 번호 | 유형 | 화면 구성 및 내용 | 디자인/연출 포인트 |
|------|------|-------------------|-------------------|
| **27** | 안내 | **실습 B: 간단 메모 앱** 📋 메모를 추가하고 확인! 삭제도 가능! | 메모 앱 이미지 |
| **28** | 실습 | **메모 추가** ```python def add_memo():     memo = input("메모 내용: ")     with open("memos.txt", "a", encoding="utf-8") as f:         f.write(memo + "\\n")     print("✅ 메모 추가됨!") ``` | 코드 블록 |
| **29** | 실습 | **메모 보기** ```python def show_memos():     try:         with open("memos.txt", "r", encoding="utf-8") as f:             memos = f.readlines()         if memos:             print("\\n📋 메모 목록:")             for i, memo in enumerate(memos, 1):                 print(f"  {i}. {memo.strip()}")         else:             print("메모가 없습니다.")     except FileNotFoundError:         print("메모가 없습니다.") ``` | 코드 블록 |
| **30** | 실습 | **메모 삭제** ```python def delete_memo():     show_memos()     num = int(input("삭제할 번호: "))     with open("memos.txt", "r", encoding="utf-8") as f:         memos = f.readlines()     del memos[num - 1]     with open("memos.txt", "w", encoding="utf-8") as f:         f.writelines(memos)     print("✅ 삭제됨!") ``` | 코드 블록 |
| **31** | 완료 | **실행 결과** ``` 📋 메모 목록:   1. 파이썬 공부하기   2. 숙제하기   3. 운동하기 삭제할 번호: 2 ✅ 삭제됨! ``` | 터미널 결과 |

---

### PART 7. 마무리 (Finish) : 4장

**목표: 정리 및 다음 차시 예고**

| 번호 | 유형 | 화면 구성 및 내용 | 디자인/연출 포인트 |
|------|------|-------------------|-------------------|
| **32** | 도전 | **도전 과제!** 🏆 간단한 가계부 만들기! - 수입/지출 입력 - 총 잔액 계산 - 파일에 저장 | 도전 문제 |
| **33** | 정리 | **오늘 배운 것** ✅ open(파일, 모드): 파일 열기 ✅ "r", "w", "a" 모드 ✅ with문: 자동 close ✅ read(), readline(), readlines() ✅ write(), writelines() | 체크리스트 |
| **34** | 예고 | **다음 시간에는...** 🎮 미니 프로젝트 1! 지금까지 배운 모든 것을 총동원! Up/Down 게임 만들기! | 배경: #FFD506, 게임 이모지 |
| **35** | 엔딩 | **수고했어요!** 📁 이제 데이터를 영구 저장할 수 있어요! **16차시 완료** | 엔딩 로고 |

---

## 3. 제작 시 유의사항 (Checklist)

1. **with문 강조**: 자동 close()로 안전한 파일 처리
2. **인코딩 필수**: 한글 파일은 encoding="utf-8"
3. **"w" 모드 주의**: 덮어쓰기 위험성 강조
4. **try-except**: FileNotFoundError 처리
5. **실습 코드**: `code/16-*.py` 파일과 일치 확인

---

## 4. 관련 코드 파일

| 파일명 | 내용 |
|--------|------|
| `16-1-file_concept.py` | 파일 입출력 기초 |
| `16-2-practice_diary.py` | 실습 A: 일기장 |
| `16-3-practice_memo.py` | 실습 B: 메모 앱 |
| `16-4-challenge.py` | 도전 과제 (가계부) |
| `16-5-answer.py` | 도전 과제 정답 |
