# [슬라이드 기획안] 10차시: 개념 복습 (Part 1 정리)

## 1. 기획 개요

| 항목 | 내용 |
|------|------|
| **수업명** | [해달에듀] 파이썬 프로그래밍 10차시 - Part 1 총정리 |
| **대상** | 초중고 학생 (코딩 초보자) |
| **총 슬라이드** | 30장 |
| **학습 목표** | 1~9차시에 배운 파이썬 기초 문법을 복습하고 정리한다 |
| **실습 코드** | `10-1-review_quiz.py`, `10-2-mini_project.py` |
| **디자인 컨셉** | 메인 컬러: #FFD506, 퀴즈/복습 느낌 |

---

## 2. 상세 슬라이드 구성안

### PART 1. 도입 (Intro) : 3장

**목표: 복습 시간 안내**

| 번호 | 유형 | 화면 구성 및 내용 | 디자인/연출 포인트 |
|------|------|-------------------|-------------------|
| **01** | 표지 | **[제목] Part 1 총정리!** 🎓 파이썬 기초 완전 정복 **[부제] 10차시 \| 해달에듀** | 배경: #FFD506, 졸업모자 이모지 |
| **02** | 안내 | **지금까지 배운 것** 1차시: 환경 설정, Hello World 2차시: 숫자, 변수 3차시: 문자열 4차시: 리스트, 튜플 5차시: 입출력 6차시: 조건문 7차시: for 반복문 8차시: while 반복문 9차시: 함수 | 차시 리스트 |
| **03** | 목표 | **오늘의 미션!** ☐ 1. 핵심 개념 빠르게 복습 ☐ 2. 퀴즈로 점검하기 ☐ 3. 미니 프로젝트 도전 | 점선 박스, 체크박스 |

---

### PART 2. 자료형 복습 (Review 1) : 5장

**목표: 숫자, 문자열, 리스트, 튜플 복습**

| 번호 | 유형 | 화면 구성 및 내용 | 디자인/연출 포인트 |
|------|------|-------------------|-------------------|
| **04** | 복습 | **숫자 자료형** ```python # 정수 (int) age = 15 # 실수 (float) height = 165.5 # 연산자 print(10 + 3)   # 13 print(10 / 3)   # 3.333... print(10 // 3)  # 3 (몫) print(10 % 3)   # 1 (나머지) print(2 ** 3)   # 8 (거듭제곱) ``` | 핵심 코드 정리 |
| **05** | 복습 | **문자열** ```python msg = "Hello, World!" # 인덱싱 print(msg[0])    # H print(msg[-1])   # ! # 슬라이싱 print(msg[0:5])  # Hello print(msg[::-1]) # 뒤집기 # f-string name = "철수" print(f"안녕, {name}!") ``` | 핵심 코드 정리 |
| **06** | 복습 | **리스트** ```python fruits = ["사과", "바나나", "오렌지"] # 조회, 수정 print(fruits[0])      # 사과 fruits[1] = "포도"    # 수정 # 메서드 fruits.append("딸기") # 추가 fruits.remove("사과") # 삭제 fruits.sort()         # 정렬 ``` | 핵심 코드 정리 |
| **07** | 복습 | **튜플** ```python point = (10, 20) # 조회 가능 print(point[0])  # 10 # 수정 불가! point[0] = 30    # 에러! ``` 리스트: [] 수정 가능 튜플: () 수정 불가 | 리스트 vs 튜플 |
| **08** | 퀴즈 | **🎯 퀴즈 1** ```python nums = [1, 2, 3, 4, 5] print(nums[1:4]) ``` 출력 결과는? A) [1, 2, 3, 4] B) [2, 3, 4] C) [2, 3, 4, 5] | 퀴즈 카드 |

---

### PART 3. 조건문/반복문 복습 (Review 2) : 6장

**목표: if, for, while 복습**

| 번호 | 유형 | 화면 구성 및 내용 | 디자인/연출 포인트 |
|------|------|-------------------|-------------------|
| **09** | 복습 | **조건문 if** ```python score = 85 if score >= 90:     grade = "A" elif score >= 80:     grade = "B" elif score >= 70:     grade = "C" else:     grade = "F" print(grade)  # B ``` | 핵심 코드 정리 |
| **10** | 복습 | **비교/논리 연산자** ```python # 비교 연산자 == != > < >= <= # 논리 연산자 and  # 둘 다 참 or   # 하나만 참 not  # 뒤집기 # 예시 if age >= 13 and age < 20:     print("청소년") ``` | 연산자 정리 |
| **11** | 복습 | **for 반복문** ```python # 리스트 반복 for fruit in ["사과", "바나나"]:     print(fruit) # range 사용 for i in range(5):  # 0,1,2,3,4     print(i) # 합계 구하기 total = 0 for i in range(1, 101):     total += i print(total)  # 5050 ``` | 핵심 코드 정리 |
| **12** | 복습 | **while 반복문** ```python # 조건이 참인 동안 반복 count = 0 while count < 5:     print(count)     count += 1 # while True + break while True:     answer = input("계속? (n=종료): ")     if answer == "n":         break ``` | 핵심 코드 정리 |
| **13** | 복습 | **break & continue** ```python # break: 반복 탈출 for i in range(10):     if i == 5:         break     print(i)  # 0,1,2,3,4 # continue: 건너뛰기 for i in range(5):     if i == 2:         continue     print(i)  # 0,1,3,4 ``` | 핵심 코드 정리 |
| **14** | 퀴즈 | **🎯 퀴즈 2** ```python for i in range(1, 6, 2):     print(i) ``` 출력 결과는? A) 1 2 3 4 5 B) 1 3 5 C) 2 4 6 | 퀴즈 카드 |

---

### PART 4. 함수/입출력 복습 (Review 3) : 5장

**목표: 함수, input, print 복습**

| 번호 | 유형 | 화면 구성 및 내용 | 디자인/연출 포인트 |
|------|------|-------------------|-------------------|
| **15** | 복습 | **함수 정의와 호출** ```python # 함수 정의 def greet(name):     return f"안녕, {name}!" # 함수 호출 msg = greet("철수") print(msg)  # 안녕, 철수! ``` | 핵심 코드 정리 |
| **16** | 복습 | **매개변수와 반환값** ```python # 매개변수: 입력 def add(a, b):     return a + b # 기본값 설정 def greet(name, msg="안녕"):     print(f"{name}님, {msg}!") greet("철수")          # 철수님, 안녕! greet("영희", "반가워")  # 영희님, 반가워! ``` | 핵심 코드 정리 |
| **17** | 복습 | **input과 형변환** ```python # input은 항상 문자열! name = input("이름: ")      # str age = int(input("나이: "))  # int로 변환 height = float(input("키: "))  # float ``` | 핵심 코드 정리 |
| **18** | 복습 | **print 옵션** ```python # 여러 값 출력 print("A", "B", "C")  # A B C # 구분자 변경 print("A", "B", sep="-")  # A-B # 줄바꿈 제거 print("Hello", end=" ") print("World")  # Hello World ``` | 핵심 코드 정리 |
| **19** | 퀴즈 | **🎯 퀴즈 3** ```python def test(a, b=10):     return a * b print(test(5)) ``` 출력 결과는? A) 5 B) 10 C) 50 | 퀴즈 카드 |

---

### PART 5. 종합 퀴즈 (Quiz) : 5장

**목표: 전체 개념 점검**

| 번호 | 유형 | 화면 구성 및 내용 | 디자인/연출 포인트 |
|------|------|-------------------|-------------------|
| **20** | 퀴즈 | **🎯 퀴즈 4: 빈칸 채우기** ```python numbers = [1, 2, 3, 4, 5] total = 0 for n in numbers:     total ____ n print(total) ``` 답: `+=` | 빈칸 퀴즈 |
| **21** | 퀴즈 | **🎯 퀴즈 5: 출력 예측** ```python fruits = ["사과", "바나나"] fruits.append("오렌지") print(len(fruits)) ``` 답: 3 | 출력 퀴즈 |
| **22** | 퀴즈 | **🎯 퀴즈 6: 오류 찾기** ```python def greeting(name)     print(f"안녕, {name}!") greeting("철수") ``` 오류: `def greeting(name):` ← 콜론 빠짐! | 오류 퀴즈 |
| **23** | 정답 | **퀴즈 정답** 퀴즈 1: B) [2, 3, 4] 퀴즈 2: B) 1 3 5 퀴즈 3: C) 50 퀴즈 4: += 퀴즈 5: 3 퀴즈 6: 콜론 누락 | 정답 목록 |
| **24** | 점검 | **자가 점검** ☐ 변수와 자료형 이해 ☐ 문자열 인덱싱/슬라이싱 ☐ 리스트 조작 (추가/삭제/정렬) ☐ 조건문 작성 (if/elif/else) ☐ 반복문 사용 (for/while) ☐ 함수 정의와 호출 모두 체크했다면 Part 1 완료! 🎉 | 체크리스트 |

---

### PART 6. 미니 프로젝트 (Mini Project) : 4장

**목표: 종합 실습**

| 번호 | 유형 | 화면 구성 및 내용 | 디자인/연출 포인트 |
|------|------|-------------------|-------------------|
| **25** | 안내 | **미니 프로젝트: 간단한 성적 관리** 📊 학생들의 점수를 입력받아 통계를 내는 프로그램! 지금까지 배운 모든 개념 활용! | 프로젝트 안내 |
| **26** | 코드 | **함수 정의** ```python def get_scores():     """점수 입력받아 리스트로 반환"""     scores = []     while True:         data = input("점수 (q=종료): ")         if data == 'q':             break         scores.append(int(data))     return scores def calc_stats(scores):     """통계 계산"""     if len(scores) == 0:         return None     total = sum(scores)     avg = total / len(scores)     return total, avg, max(scores), min(scores) ``` | 코드 블록 |
| **27** | 코드 | **메인 로직** ```python def get_grade(avg):     """평균으로 학점 반환"""     if avg >= 90: return "A"     elif avg >= 80: return "B"     elif avg >= 70: return "C"     elif avg >= 60: return "D"     else: return "F" # 실행 print("=== 성적 관리 프로그램 ===") scores = get_scores() if scores:     total, avg, max_s, min_s = calc_stats(scores)     grade = get_grade(avg)     print(f"\\n총점: {total}점")     print(f"평균: {avg:.1f}점")     print(f"최고: {max_s}점, 최저: {min_s}점")     print(f"학점: {grade}") ``` | 코드 블록 |
| **28** | 완료 | **실행 결과** ``` === 성적 관리 프로그램 === 점수 (q=종료): 85 점수 (q=종료): 92 점수 (q=종료): 78 점수 (q=종료): q 총점: 255점 평균: 85.0점 최고: 92점, 최저: 78점 학점: B ``` | 터미널 결과 |

---

### PART 7. 마무리 (Finish) : 2장

**목표: Part 1 마무리 및 Part 2 예고**

| 번호 | 유형 | 화면 구성 및 내용 | 디자인/연출 포인트 |
|------|------|-------------------|-------------------|
| **29** | 정리 | **Part 1 완료!** 🎓 파이썬 기초 문법 정복! - 변수와 자료형 - 문자열, 리스트, 튜플 - 입출력 (input, print) - 조건문 (if, elif, else) - 반복문 (for, while) - 함수 (def, return) **이제 진짜 프로그램을 만들 준비 완료!** | 축하 메시지 |
| **30** | 예고 | **다음은 Part 2!** 🛠️ 파이썬 무기 창고 털기 - random 모듈 - time/datetime 모듈 - turtle 그래픽 - 파일 입출력 - 미니 프로젝트 **더 재미있는 것들이 기다려요!** | 배경: #FFD506, Part 2 예고 |

---

## 3. 제작 시 유의사항 (Checklist)

1. **복습 형식**: 핵심만 간단히, 예제 코드 중심
2. **퀴즈 구성**: 다양한 형식 (객관식, 빈칸, 오류 찾기)
3. **미니 프로젝트**: 지금까지 배운 내용 모두 활용
4. **성취감**: Part 1 완료 축하, Part 2 기대감 유발
5. **실습 코드**: `code/10-*.py` 파일과 일치 확인

---

## 4. 관련 코드 파일

| 파일명 | 내용 |
|--------|------|
| `10-1-review_quiz.py` | 복습 퀴즈 코드 |
| `10-2-mini_project.py` | 미니 프로젝트 (성적 관리) |
