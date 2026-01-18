# [슬라이드 기획안] 22차시: 선형 탐색

## 1. 기획 개요

| 항목 | 내용 |
|------|------|
| **수업명** | [해달에듀] 파이썬 프로그래밍 22차시 - 선형 탐색 |
| **대상** | 초중고 학생 (코딩 초보자) |
| **총 슬라이드** | 32장 |
| **학습 목표** | 선형 탐색의 개념을 이해하고 직접 구현할 수 있다 |
| **실습 코드** | `22-1-linear_search.py`, `22-2-practice_find.py` |
| **디자인 컨셉** | 메인 컬러: #FFD506, 하나씩 확인하기 비유 |

---

## 2. 상세 슬라이드 구성안

### PART 1. 도입 (Intro) : 4장

**목표: 흥미 유발 및 탐색 소개**

| 번호 | 유형 | 화면 구성 및 내용 | 디자인/연출 포인트 |
|------|------|-------------------|-------------------|
| **01** | 표지 | **[제목] 하나씩 찾아보자!** 🔍 선형 탐색 (Linear Search) **[부제] 22차시 \| 해달에듀** | 배경: #FFD506, 돋보기 이모지 |
| **02** | 질문 | **친구 100명 중에 철수 찾기?** 👥 처음부터 하나씩 확인! "너 철수야?" "아니" "너 철수야?" "응!" **이게 선형 탐색이에요!** | 줄 서있는 사람들 |
| **03** | 미리보기 | **오늘의 완성작!** 🔍 숫자 찾기 프로그램 📝 학생 정보 검색 시스템 | 완성작 미리보기 |
| **04** | 목표 | **오늘의 미션!** ☐ 1. 탐색 알고리즘 이해 ☐ 2. 선형 탐색 구현 ☐ 3. 시간 복잡도 이해 ☐ 4. 검색 프로그램 만들기 | 점선 박스 |

---

### PART 2. 탐색 알고리즘 (Concept 1) : 5장

**목표: 탐색의 개념과 필요성**

| 번호 | 유형 | 화면 구성 및 내용 | 디자인/연출 포인트 |
|------|------|-------------------|-------------------|
| **05** | 개념 | **탐색(Search)이란?** 🔍 데이터 중에서 원하는 값을 찾기! - 리스트에서 특정 숫자 찾기 - 학생 목록에서 이름 찾기 - 사전에서 단어 찾기 | 탐색 개념 |
| **06** | 개념 | **탐색 알고리즘 종류** 🔍 **선형 탐색**: 처음부터 끝까지 하나씩 🔍 **이진 탐색**: 반씩 나눠서 빠르게 오늘은 선형 탐색 먼저! | 탐색 종류 |
| **07** | 개념 | **선형 탐색이란?** 📋 리스트의 처음부터 끝까지 순서대로 확인! ``` [5, 3, 8, 2, 7] 에서 8 찾기 5 → 아니 3 → 아니 8 → 찾았다! ``` | 선형 탐색 과정 |
| **08** | 비유 | **일상 속 선형 탐색** 📚 책장에서 책 찾기 (왼쪽부터 오른쪽) 👔 옷장에서 옷 찾기 (하나씩) 📝 출석부에서 이름 찾기 (위에서 아래로) | 일상 예시 |
| **09** | 개념 | **선형 탐색의 특징** ✅ 장점: 간단하고 이해하기 쉬움 ✅ 장점: 정렬 안 해도 됨 ❌ 단점: 데이터가 많으면 느림 | 장단점 |

---

### PART 3. 선형 탐색 구현 (Concept 2) : 6장

**목표: 파이썬으로 선형 탐색 구현**

| 번호 | 유형 | 화면 구성 및 내용 | 디자인/연출 포인트 |
|------|------|-------------------|-------------------|
| **10** | 코드 | **기본 선형 탐색** ```python def linear_search(lst, target):     for i in range(len(lst)):         if lst[i] == target:             return i  # 찾은 위치 반환     return -1  # 못 찾으면 -1 numbers = [5, 3, 8, 2, 7] result = linear_search(numbers, 8) print(result)  # 2 (인덱스) ``` | 코드 + 결과 |
| **11** | 코드 | **enumerate 버전** ```python def linear_search(lst, target):     for index, value in enumerate(lst):         if value == target:             return index     return -1 ``` `enumerate`로 인덱스와 값 동시에! | 코드 블록 |
| **12** | 코드 | **in 연산자 (간단)** ```python numbers = [5, 3, 8, 2, 7] # 존재 여부만 확인 if 8 in numbers:     print("8이 있어요!") # 위치 찾기 print(numbers.index(8))  # 2 ``` 파이썬 내장 기능! | 코드 블록 |
| **13** | 주의 | **⚠️ index() 주의** ```python numbers = [5, 3, 8, 2, 7] # 없는 값은 에러! print(numbers.index(10))  # ValueError! # 안전하게 try:     pos = numbers.index(10) except ValueError:     pos = -1 ``` | 에러 처리 |
| **14** | 코드 | **모든 위치 찾기** ```python def find_all(lst, target):     positions = []     for i, value in enumerate(lst):         if value == target:             positions.append(i)     return positions numbers = [1, 3, 5, 3, 7, 3] result = find_all(numbers, 3) print(result)  # [1, 3, 5] ``` 같은 값이 여러 개일 때! | 코드 블록 |
| **15** | 코드 | **조건으로 찾기** ```python def find_by_condition(lst, condition):     for i, value in enumerate(lst):         if condition(value):             return i     return -1 numbers = [4, 7, 2, 9, 5] # 5보다 큰 첫 번째 숫자 위치 result = find_by_condition(numbers, lambda x: x > 5) print(result)  # 1 (7의 위치) ``` | 조건 탐색 |

---

### PART 4. 시간 복잡도 (Concept 3) : 4장

**목표: 알고리즘 효율성 이해**

| 번호 | 유형 | 화면 구성 및 내용 | 디자인/연출 포인트 |
|------|------|-------------------|-------------------|
| **16** | 개념 | **시간 복잡도란?** ⏱️ 알고리즘이 얼마나 걸리는지! 데이터 개수에 따른 연산 횟수 N개의 데이터 → 최대 N번 확인 | 시간 복잡도 개념 |
| **17** | 개념 | **빅오 표기법 (Big-O)** 📊 O(N) = 데이터 N개일 때 최대 N번 선형 탐색 = O(N) - 10개 → 최대 10번 - 1000개 → 최대 1000번 - 100만개 → 최대 100만번 | O(N) 설명 |
| **18** | 개념 | **최선/최악의 경우** 🎯 최선: 첫 번째에서 발견! → O(1) 😅 최악: 마지막에서 발견 또는 없음 → O(N) 📊 평균: 중간쯤 → O(N/2) ≈ O(N) | 경우 설명 |
| **19** | 비교 | **실제 시간 (예시)** | 데이터 수 | 선형 탐색 (최악) | |----------|------------------| | 100개 | 100번 확인 | | 10,000개 | 10,000번 확인 | | 100만개 | 100만번 확인 | 데이터가 많아지면 느려짐! | 시간 비교표 |

---

### PART 5. 실습 A - 숫자 찾기 (Practice A) : 5장

**목표: 선형 탐색 게임 만들기**

| 번호 | 유형 | 화면 구성 및 내용 | 디자인/연출 포인트 |
|------|------|-------------------|-------------------|
| **20** | 안내 | **실습 A: 숫자 찾기 게임** 🔍 랜덤 숫자 리스트에서 특정 숫자 찾기! 몇 번째 확인에서 찾았는지 표시! | 게임 안내 |
| **21** | 실습 | **게임 코드** ```python import random def search_game():     # 랜덤 리스트 생성     numbers = [random.randint(1, 100) for _ in range(20)]     print(f"숫자 리스트: {numbers}")     target = int(input("\\n찾을 숫자: "))     # 탐색 (과정 표시)     for i, num in enumerate(numbers):         print(f"{i+1}번째 확인: {num}", end="")         if num == target:             print(f" → 찾았다! 🎉")             print(f"\\n{i+1}번 만에 찾았습니다!")             return         print()     print(f"\\n{target}은(는) 없습니다.") search_game() ``` | 코드 블록 |
| **22** | 완료 | **실행 결과** ``` 숫자 리스트: [45, 23, 78, 12, 56, ...] 찾을 숫자: 78 1번째 확인: 45 2번째 확인: 23 3번째 확인: 78 → 찾았다! 🎉 3번 만에 찾았습니다! ``` | 터미널 결과 |
| **23** | 확장 | **탐색 시간 측정** ```python import time start = time.time() result = linear_search(big_list, target) end = time.time() print(f"탐색 시간: {end-start:.6f}초") ``` | 시간 측정 |
| **24** | 확장 | **큰 데이터 테스트** ```python import random # 100만 개 데이터 big_list = list(range(1000000)) target = 999999  # 마지막에 있는 값 # 시간 측정 import time start = time.time() linear_search(big_list, target) print(f"소요 시간: {time.time()-start:.3f}초") ``` | 성능 테스트 |

---

### PART 6. 실습 B - 학생 검색 (Practice B) : 5장

**목표: 실용적인 검색 시스템**

| 번호 | 유형 | 화면 구성 및 내용 | 디자인/연출 포인트 |
|------|------|-------------------|-------------------|
| **25** | 안내 | **실습 B: 학생 정보 검색** 📝 학생 이름으로 정보 검색! 이름, 번호, 성적 조회! | 검색 시스템 |
| **26** | 실습 | **데이터 구조** ```python students = [     {"id": 1, "name": "김철수", "score": 85},     {"id": 2, "name": "이영희", "score": 92},     {"id": 3, "name": "박민수", "score": 78},     {"id": 4, "name": "정지수", "score": 95},     {"id": 5, "name": "최예진", "score": 88} ] ``` | 코드 블록 |
| **27** | 실습 | **검색 함수** ```python def search_by_name(students, name):     for student in students:         if student["name"] == name:             return student     return None def search_by_score(students, min_score):     results = []     for student in students:         if student["score"] >= min_score:             results.append(student)     return results ``` | 코드 블록 |
| **28** | 실습 | **검색 시스템** ```python while True:     print("\\n=== 학생 검색 시스템 ===")     print("1. 이름으로 검색")     print("2. 점수 이상 검색")     print("3. 종료")     choice = input("선택: ")     if choice == "1":         name = input("이름: ")         result = search_by_name(students, name)         if result:             print(f"학번: {result['id']}, 점수: {result['score']}")         else:             print("찾을 수 없습니다.")     elif choice == "2":         score = int(input("최소 점수: "))         results = search_by_score(students, score)         for s in results:             print(f"{s['name']}: {s['score']}점")     elif choice == "3":         break ``` | 코드 블록 |
| **29** | 완료 | **실행 결과** ``` === 학생 검색 시스템 === 1. 이름으로 검색 2. 점수 이상 검색 3. 종료 선택: 1 이름: 이영희 학번: 2, 점수: 92 ``` | 터미널 결과 |

---

### PART 7. 마무리 (Finish) : 3장

**목표: 정리 및 다음 차시 예고**

| 번호 | 유형 | 화면 구성 및 내용 | 디자인/연출 포인트 |
|------|------|-------------------|-------------------|
| **30** | 정리 | **오늘 배운 것** ✅ 선형 탐색 = 처음부터 끝까지 확인 ✅ 시간 복잡도 O(N) ✅ 간단하지만 데이터 많으면 느림 ✅ 정렬 안 해도 사용 가능 | 체크리스트 |
| **31** | 예고 | **다음 시간에는...** ⚡ 이진 탐색! 반씩 나눠서 훨씬 빠르게 찾기! 선형 탐색보다 훨씬 빠르다! | 배경: #FFD506, 이진 탐색 |
| **32** | 엔딩 | **수고했어요!** 🔍 선형 탐색 완전 정복! **22차시 완료** | 엔딩 로고 |

---

## 3. 제작 시 유의사항 (Checklist)

1. **하나씩 확인 비유**: 선형 탐색의 직관적 이해
2. **시간 복잡도**: O(N) 개념 간단히 소개
3. **실용적 예제**: 학생 검색 등 실생활 활용
4. **이진 탐색과 비교 예고**: 다음 차시 연결
5. **실습 코드**: `code/22-*.py` 파일과 일치 확인

---

## 4. 관련 코드 파일

| 파일명 | 내용 |
|--------|------|
| `22-1-linear_search.py` | 선형 탐색 기초 |
| `22-2-practice_find.py` | 실습 A: 숫자 찾기 게임 |
| `22-3-practice_student.py` | 실습 B: 학생 검색 |
