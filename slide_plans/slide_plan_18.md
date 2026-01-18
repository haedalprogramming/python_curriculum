# [슬라이드 기획안] 18차시: [미니 프로젝트 2] 영어 단어 타자 게임

## 1. 기획 개요

| 항목 | 내용 |
|------|------|
| **수업명** | [해달에듀] 파이썬 프로그래밍 18차시 - 영어 단어 타자 게임 |
| **대상** | 초중고 학생 (미니 프로젝트) |
| **총 슬라이드** | 30장 |
| **학습 목표** | 지금까지 배운 개념을 종합하여 타자 게임 프로그램을 완성한다 |
| **실습 코드** | `18-1-typing_basic.py`, `18-2-typing_complete.py` |
| **디자인 컨셉** | 메인 컬러: #FFD506, 게임/타자 느낌 |

---

## 2. 상세 슬라이드 구성안

### PART 1. 도입 (Intro) : 4장

**목표: 프로젝트 소개 및 동기 부여**

| 번호 | 유형 | 화면 구성 및 내용 | 디자인/연출 포인트 |
|------|------|-------------------|-------------------|
| **01** | 표지 | **[제목] 미니 프로젝트 2** ⌨️ 영어 단어 타자 게임 **[부제] 18차시 \| 해달에듀** | 배경: #FFD506, 타자 이모지 |
| **02** | 안내 | **두 번째 프로젝트!** 🎮 이번엔 타자 게임! `random` + `time` + `리스트` + `반복문` 실력을 측정하는 게임을 만들어요! | 사용할 개념들 |
| **03** | 미리보기 | **오늘의 완성작!** ``` ⌨️ 영어 단어 타자 게임! 단어: python 입력: python ✅ 정답! (0.82초) 단어: programming 입력: programming ✅ 정답! (1.23초) 📊 결과: 10문제 중 8개 정답! 📊 평균 시간: 1.15초 ``` | 게임 실행 미리보기 |
| **04** | 목표 | **오늘의 미션!** ☐ 1. 게임 기획하기 ☐ 2. 단계별로 코드 작성 ☐ 3. 시간 측정 기능 추가 ☐ 4. 나만의 기능 추가하기 | 점선 박스 |

---

### PART 2. 게임 기획 (Planning) : 4장

**목표: 게임 규칙과 필요한 기능 정리**

| 번호 | 유형 | 화면 구성 및 내용 | 디자인/연출 포인트 |
|------|------|-------------------|-------------------|
| **05** | 개념 | **게임 규칙** ⌨️ 1. 랜덤으로 영어 단어가 나온다 2. 정확하게 타이핑한다 3. 정답 여부와 시간 표시 4. 정해진 문제 수만큼 반복 5. 최종 점수와 평균 시간 계산 | 규칙 카드 |
| **06** | 개념 | **필요한 재료 (개념)** 📋 `리스트`: 영어 단어 목록 🎲 `random.choice`: 랜덤 단어 선택 ⏱️ `time`: 타이핑 시간 측정 🔁 `for`: 정해진 횟수 반복 | 개념 카드 |
| **07** | 개념 | **게임 흐름도** ``` [시작] → 단어 선택 → 화면에 표시 → 시간 시작 → 사용자 입력 → 시간 측정 → 정답 확인 → 결과 표시 → 반복? → YES → (다음 단어) → NO → [최종 결과] ``` | 순서도 |
| **08** | 개념 | **변수 설계** `words`: 단어 목록 리스트 `word`: 현재 출제된 단어 `answer`: 사용자 입력 `start_time`, `end_time`: 시간 측정 `score`: 맞은 개수 `times`: 시간 기록 리스트 | 변수 카드 |

---

### PART 3. 단계별 코딩 (Step by Step) : 10장

**목표: 게임을 단계별로 완성**

| 번호 | 유형 | 화면 구성 및 내용 | 디자인/연출 포인트 |
|------|------|-------------------|-------------------|
| **09** | 실습 | **STEP 1: 단어 목록 준비** ```python words = [     "python", "programming", "computer",     "keyboard", "developer", "software",     "algorithm", "function", "variable",     "string", "integer", "boolean" ] ``` 더 많은 단어 추가 가능! | 코드 블록 |
| **10** | 실습 | **STEP 2: 랜덤 단어 출제** ```python import random word = random.choice(words) print(f"단어: {word}") ``` 리스트에서 랜덤 선택! | 코드 블록 |
| **11** | 실습 | **STEP 3: 사용자 입력** ```python answer = input("입력: ") ``` 사용자가 타이핑한 내용 받기 | 코드 블록 |
| **12** | 실습 | **STEP 4: 정답 확인** ```python if answer == word:     print("✅ 정답!") else:     print(f"❌ 오답! 정답은 '{word}'") ``` 입력과 단어 비교! | 코드 블록 |
| **13** | 실습 | **STEP 5: 시간 측정** ```python import time start = time.time() answer = input("입력: ") end = time.time() elapsed = end - start print(f"⏱️ 시간: {elapsed:.2f}초") ``` 입력 전후 시간 차이! | 코드 블록 |
| **14** | 실습 | **STEP 6: 반복 (여러 문제)** ```python NUM_QUESTIONS = 5 score = 0 times = [] for i in range(NUM_QUESTIONS):     print(f"\\n[{i+1}/{NUM_QUESTIONS}]")     # 단어 출제, 입력, 시간 측정... ``` | 코드 블록 |
| **15** | 실습 | **STEP 7: 점수 계산** ```python if answer == word:     score += 1     times.append(elapsed) print(f"\\n📊 결과: {score}/{NUM_QUESTIONS}") if times:     avg = sum(times) / len(times)     print(f"📊 평균 시간: {avg:.2f}초") ``` | 코드 블록 |
| **16** | 완료 | **기본 완성 코드** ```python import random import time words = ["python", "programming", "computer", "keyboard"] NUM_QUESTIONS = 5 score = 0 times = [] print("⌨️ 영어 단어 타자 게임!\\n") for i in range(NUM_QUESTIONS):     word = random.choice(words)     print(f"[{i+1}] 단어: {word}")     start = time.time()     answer = input("입력: ")     end = time.time()     elapsed = end - start     if answer == word:         print(f"✅ 정답! ({elapsed:.2f}초)")         score += 1         times.append(elapsed)     else:         print(f"❌ 오답!") print(f"\\n📊 결과: {score}/{NUM_QUESTIONS}") if times:     print(f"📊 평균: {sum(times)/len(times):.2f}초") ``` | 전체 코드 |
| **17** | 완료 | **실행 결과** ``` ⌨️ 영어 단어 타자 게임! [1] 단어: python 입력: python ✅ 정답! (0.85초) [2] 단어: keyboard 입력: keybaord ❌ 오답! ... 📊 결과: 4/5 📊 평균: 1.02초 ``` | 터미널 결과 |
| **18** | 테스트 | **테스트 체크리스트** ☐ 단어가 랜덤으로 나오나요? ☐ 정답/오답 판정이 정확한가요? ☐ 시간이 제대로 측정되나요? ☐ 최종 결과가 맞나요? | 테스트 카드 |

---

### PART 4. 기능 추가하기 (Enhancement) : 6장

**목표: 게임을 더 재미있게 개선**

| 번호 | 유형 | 화면 구성 및 내용 | 디자인/연출 포인트 |
|------|------|-------------------|-------------------|
| **19** | 개념 | **추가할 수 있는 기능** 🌟 1. 난이도 선택 (쉬움/보통/어려움) 2. 최고 기록 저장 3. 대소문자 무시 4. 타이핑 속도 (WPM) 계산 | 기능 목록 |
| **20** | 실습 | **기능 1: 난이도 선택** ```python easy = ["cat", "dog", "sun", "cup"] normal = ["python", "keyboard", "computer"] hard = ["algorithm", "programming", "development"] print("난이도: 1.쉬움 2.보통 3.어려움") level = input("선택: ") if level == "1":     words = easy elif level == "2":     words = normal else:     words = hard ``` | 코드 블록 |
| **21** | 실습 | **기능 2: 대소문자 무시** ```python if answer.lower() == word.lower():     print("✅ 정답!") ``` `.lower()`로 소문자 변환 후 비교! | 코드 블록 |
| **22** | 실습 | **기능 3: WPM 계산** ```python # WPM = Words Per Minute # (글자수 / 5) / (시간 / 60) def calc_wpm(chars, seconds):     words = chars / 5     minutes = seconds / 60     return words / minutes if minutes > 0 else 0 wpm = calc_wpm(len(word), elapsed) print(f"속도: {wpm:.1f} WPM") ``` | 코드 블록 |
| **23** | 실습 | **기능 4: 파일로 기록 저장** ```python from datetime import datetime def save_record(score, avg_time):     with open("records.txt", "a", encoding="utf-8") as f:         now = datetime.now().strftime("%Y-%m-%d %H:%M")         f.write(f"{now} | 점수: {score} | 평균: {avg_time:.2f}초\\n") ``` | 코드 블록 |
| **24** | 실습 | **기능 5: 최고 기록 표시** ```python def show_best_record():     try:         with open("records.txt", "r", encoding="utf-8") as f:             records = f.readlines()         if records:             print("📜 이전 기록:")             for r in records[-5:]:  # 최근 5개                 print(f"  {r.strip()}")     except FileNotFoundError:         print("아직 기록이 없습니다.") ``` | 코드 블록 |

---

### PART 5. 도전 과제 (Challenge) : 3장

**목표: 나만의 게임으로 확장**

| 번호 | 유형 | 화면 구성 및 내용 | 디자인/연출 포인트 |
|------|------|-------------------|-------------------|
| **25** | 도전 | **도전 과제!** 🏆 나만의 기능을 추가해보세요! 아이디어: - 시간 제한 (10초 안에 입력) - 연속 정답 보너스 - 오타 힌트 ("1글자 틀렸어요!") - 랭킹 시스템 | 아이디어 카드 |
| **26** | 예시 | **시간 제한 구현 (심화)** ```python import threading import sys def timeout():     print("\\n⏰ 시간 초과!")     sys.exit() timer = threading.Timer(10.0, timeout) timer.start() answer = input("입력: ") timer.cancel()  # 입력 완료시 취소 ``` (참고용 - 난이도 높음) | 심화 코드 |
| **27** | 공유 | **친구들과 대결!** 🏁 같은 단어로 누가 더 빠른지! 타자 속도 대결을 해보세요! | 대결 이미지 |

---

### PART 6. 마무리 (Finish) : 3장

**목표: 프로젝트 정리 및 Part 2 마무리**

| 번호 | 유형 | 화면 구성 및 내용 | 디자인/연출 포인트 |
|------|------|-------------------|-------------------|
| **28** | 정리 | **오늘 만든 것** ✅ 영어 단어 타자 게임 완성! ✅ 사용한 개념: - 리스트와 random.choice() - time.time()으로 시간 측정 - for 반복문 - if 조건문 - 파일 입출력 (기록 저장) | 개념 정리 |
| **29** | 정리 | **Part 2 완료!** 🎓 파이썬 무기 창고 마스터! - random 모듈 - time/datetime 모듈 - turtle 그래픽 - webbrowser 모듈 - 파일 입출력 - 2개의 미니 프로젝트 **진짜 프로그램을 만들었어요!** | Part 2 정리 |
| **30** | 예고 | **다음은 Part 3!** 🧠 개발자의 뇌 장착하기! - 알고리즘적 사고 - 자료구조 (스택, 큐) - 탐색과 정렬 **더 똑똑한 코드를 짜봐요!** | 배경: #FFD506, Part 3 예고 |

---

## 3. 제작 시 유의사항 (Checklist)

1. **프로젝트 느낌**: 게임 개발 성취감 강조
2. **단계별 진행**: STEP별로 점진적 완성
3. **시간 측정**: time.time() 활용법 강조
4. **확장 가능성**: 기본 완성 후 추가 기능은 선택
5. **Part 2 마무리**: 배운 내용 종합 정리

---

## 4. 관련 코드 파일

| 파일명 | 내용 |
|--------|------|
| `18-1-typing_basic.py` | 기본 타자 게임 |
| `18-2-typing_complete.py` | 완성 코드 (모든 기능) |

---

## 5. 핵심 개념 복습 체크리스트

이 프로젝트에서 사용되는 개념들:

| 개념 | 차시 | 용도 |
|------|------|------|
| 리스트 | 4차시 | 단어 목록 저장 |
| `random.choice()` | 11차시 | 랜덤 단어 선택 |
| `time.time()` | 12차시 | 시간 측정 |
| `for` 반복문 | 7차시 | 여러 문제 반복 |
| `if` 조건문 | 6차시 | 정답 판정 |
| 파일 입출력 | 16차시 | 기록 저장 |
| 함수 | 9차시 | 코드 정리 |
