# [슬라이드 기획안] 21차시: 큐 (Queue)

## 1. 기획 개요

| 항목 | 내용 |
|------|------|
| **수업명** | [해달에듀] 파이썬 프로그래밍 21차시 - 큐 자료구조 |
| **대상** | 초중고 학생 (코딩 초보자) |
| **총 슬라이드** | 35장 |
| **학습 목표** | 큐의 개념과 동작 원리를 이해하고, 리스트와 deque로 큐를 구현할 수 있다 |
| **실습 코드** | `21-1-queue_concept.py`, `21-2-practice_restaurant.py` |
| **디자인 컨셉** | 메인 컬러: #FFD506, 줄 서기 비유 |

---

## 2. 상세 슬라이드 구성안

### PART 1. 도입 (Intro) : 4장

**목표: 흥미 유발 및 큐 소개**

| 번호 | 유형 | 화면 구성 및 내용 | 디자인/연출 포인트 |
|------|------|-------------------|-------------------|
| **01** | 표지 | **[제목] 줄 서기의 원리!** 🎫 큐(Queue) 자료구조 **[부제] 21차시 \| 해달에듀** | 배경: #FFD506, 줄 이모지 |
| **02** | 질문 | **은행이나 식당에서 줄을 서면?** 👥 먼저 온 사람이 먼저 서비스 받죠! 새치기 금지! **이게 바로 큐예요!** | 줄 서기 이미지 |
| **03** | 미리보기 | **오늘의 완성작!** 🍽️ 식당 예약/대기 시스템 구현! | 식당 대기 이미지 |
| **04** | 목표 | **오늘의 미션!** ☐ 1. 큐가 뭔지 이해하기 ☐ 2. enqueue와 dequeue 연산 ☐ 3. deque로 큐 구현 ☐ 4. 예약 시스템 만들기 | 점선 박스 |

---

### PART 2. 큐 개념 (Concept 1) : 6장

**목표: 큐의 개념과 원리 이해**

| 번호 | 유형 | 화면 구성 및 내용 | 디자인/연출 포인트 |
|------|------|-------------------|-------------------|
| **05** | 개념 | **큐(Queue)란?** 🎫 데이터가 줄을 서는 구조! - 새 데이터는 맨 뒤에 추가 - 꺼낼 때는 맨 앞에서 **FIFO: First In, First Out** (선입선출) | 줄 서기 그림 |
| **06** | 개념 | **FIFO 원리** 🚶 먼저 들어간 것이 먼저 나온다! ``` 넣기: A → B → C 빼기: A → B → C ``` A가 먼저 들어갔고 먼저 나옴! | FIFO 도식 |
| **07** | 비교 | **스택 vs 큐** | | 스택 | 큐 | |---|---|---| | LIFO | FIFO | | 후입선출 | 선입선출 | | 맨 위에서 추가/제거 | 뒤에 추가, 앞에서 제거 | | 접시 쌓기 | 줄 서기 | | 비교표 |
| **08** | 개념 | **일상 속 큐** 🏦 은행 대기표 🍽️ 식당 줄 서기 🎢 놀이공원 대기줄 🖨️ 프린터 인쇄 대기열 📱 메시지 전송 대기 | 일상 예시 |
| **09** | 개념 | **큐 연산** | 연산 | 의미 | |------|------| | **enqueue** | 맨 뒤에 추가 | | **dequeue** | 맨 앞에서 제거 & 반환 | | **front/peek** | 맨 앞 확인 (제거 안함) | | **isEmpty** | 비어있는지 확인 | | 연산 표 |
| **10** | 그림 | **큐 동작 시각화** ``` enqueue(A): [A] ← 뒤 (rear) enqueue(B): [A, B] enqueue(C): [A, B, C] dequeue(): [B, C] → 반환: A (앞: front) dequeue(): [C] → 반환: B ``` | 동작 그림 |

---

### PART 3. 리스트와 deque (Concept 2) : 6장

**목표: 파이썬으로 큐 구현하기**

| 번호 | 유형 | 화면 구성 및 내용 | 디자인/연출 포인트 |
|------|------|-------------------|-------------------|
| **11** | 코드 | **리스트로 큐 (비효율)** ```python queue = [] # enqueue queue.append("A") queue.append("B") queue.append("C") # dequeue first = queue.pop(0)  # 맨 앞 제거 print(first)  # A ``` `pop(0)`은 느려요! (모든 요소 이동) | 코드 + 경고 |
| **12** | 개념 | **왜 pop(0)이 느릴까?** 📋 맨 앞을 빼면 나머지가 다 이동! ``` [A, B, C, D] → pop(0) [B, C, D] ← B, C, D가 앞으로 이동 ``` 데이터가 많으면 매우 느림! | 이동 도식 |
| **13** | 개념 | **deque 소개** 🚀 collections 모듈의 deque! - Double-Ended Queue - 앞/뒤 모두 빠르게 추가/제거 - 큐 구현에 최적! | deque 소개 |
| **14** | 코드 | **deque 사용법** ```python from collections import deque queue = deque() # enqueue queue.append("A") queue.append("B") queue.append("C") print(queue)  # deque(['A', 'B', 'C']) # dequeue first = queue.popleft()  # 앞에서 제거 (빠름!) print(first)  # A print(queue)  # deque(['B', 'C']) ``` | 코드 블록 |
| **15** | 비교 | **리스트 vs deque** | | 리스트 | deque | |---|---|---| | enqueue | `append()` | `append()` | | dequeue | `pop(0)` 느림 | `popleft()` 빠름 | | 권장 | ❌ | ✅ | 큐는 deque를 쓰자! | 비교표 |
| **16** | 코드 | **큐 유틸리티** ```python from collections import deque queue = deque(["A", "B", "C"]) # front 확인 front = queue[0] print(front)  # A # 크기 확인 print(len(queue))  # 3 # 비어있는지 확인 print(len(queue) == 0)  # False ``` | 코드 블록 |

---

### PART 4. 실습 A - 프린터 대기열 (Practice A) : 5장

**목표: 프린터 작업 처리 시뮬레이션**

| 번호 | 유형 | 화면 구성 및 내용 | 디자인/연출 포인트 |
|------|------|-------------------|-------------------|
| **17** | 안내 | **실습 A: 프린터 대기열** 🖨️ 인쇄 작업이 순서대로 처리되는 시스템! 먼저 요청한 작업이 먼저 출력! | 프린터 이미지 |
| **18** | 실습 | **프린터 큐 구현** ```python from collections import deque print_queue = deque() def add_job(document):     print_queue.append(document)     print(f"📄 '{document}' 대기열에 추가")     print(f"   현재 대기: {len(print_queue)}개") def print_job():     if print_queue:         doc = print_queue.popleft()         print(f"🖨️ '{doc}' 인쇄 중...")         print(f"   남은 대기: {len(print_queue)}개")     else:         print("대기 중인 작업이 없습니다.") ``` | 코드 블록 |
| **19** | 실습 | **테스트** ```python add_job("보고서.pdf") add_job("이력서.docx") add_job("사진.jpg") print("\\n--- 인쇄 시작 ---") print_job() print_job() print_job() print_job()  # 대기 없음 ``` | 코드 블록 |
| **20** | 완료 | **실행 결과** ``` 📄 '보고서.pdf' 대기열에 추가    현재 대기: 1개 📄 '이력서.docx' 대기열에 추가    현재 대기: 2개 📄 '사진.jpg' 대기열에 추가    현재 대기: 3개 --- 인쇄 시작 --- 🖨️ '보고서.pdf' 인쇄 중...    남은 대기: 2개 🖨️ '이력서.docx' 인쇄 중...    남은 대기: 1개 ``` | 터미널 결과 |
| **21** | 확장 | **우선순위 표시** ```python def show_queue():     if print_queue:         print("\\n📋 인쇄 대기열:")         for i, doc in enumerate(print_queue, 1):             print(f"   {i}. {doc}")     else:         print("대기열이 비어있습니다.") ``` | 확장 코드 |

---

### PART 5. 실습 B - 식당 예약 (Practice B) : 6장

**목표: 식당 대기 시스템 구현**

| 번호 | 유형 | 화면 구성 및 내용 | 디자인/연출 포인트 |
|------|------|-------------------|-------------------|
| **22** | 안내 | **실습 B: 식당 예약 시스템** 🍽️ 손님이 대기하고 순서대로 입장! 대기 번호, 현재 대기 인원 표시! | 식당 대기 이미지 |
| **23** | 실습 | **변수 설정** ```python from collections import deque waiting_queue = deque() next_number = 1  # 다음 대기 번호 def show_status():     print(f"\\n현재 대기 인원: {len(waiting_queue)}명")     if waiting_queue:         print(f"다음 입장: {waiting_queue[0]}번") ``` | 코드 블록 |
| **24** | 실습 | **대기 등록** ```python def register(name):     global next_number     ticket = next_number     waiting_queue.append({"number": ticket, "name": name})     print(f"\\n🎫 {name}님, {ticket}번 대기표 발급!")     print(f"   현재 대기: {len(waiting_queue)}명")     next_number += 1     return ticket ``` | 코드 블록 |
| **25** | 실습 | **입장 처리** ```python def call_next():     if waiting_queue:         guest = waiting_queue.popleft()         print(f"\\n📢 {guest['number']}번 {guest['name']}님, 입장하세요!")         print(f"   남은 대기: {len(waiting_queue)}명")     else:         print("\\n대기 중인 손님이 없습니다.") def show_waiting():     print("\\n📋 대기 명단:")     if waiting_queue:         for guest in waiting_queue:             print(f"   {guest['number']}번 - {guest['name']}")     else:         print("   (없음)") ``` | 코드 블록 |
| **26** | 실습 | **테스트** ```python register("김철수") register("이영희") register("박민수") show_waiting() print("\\n--- 입장 ---") call_next() call_next() show_waiting() ``` | 코드 블록 |
| **27** | 완료 | **실행 결과** ``` 🎫 김철수님, 1번 대기표 발급!    현재 대기: 1명 🎫 이영희님, 2번 대기표 발급!    현재 대기: 2명 🎫 박민수님, 3번 대기표 발급!    현재 대기: 3명 📋 대기 명단:    1번 - 김철수    2번 - 이영희    3번 - 박민수 --- 입장 --- 📢 1번 김철수님, 입장하세요! 📢 2번 이영희님, 입장하세요! 📋 대기 명단:    3번 - 박민수 ``` | 터미널 결과 |

---

### PART 6. 큐 활용 (Advanced) : 4장

**목표: 다양한 큐 활용 사례**

| 번호 | 유형 | 화면 구성 및 내용 | 디자인/연출 포인트 |
|------|------|-------------------|-------------------|
| **28** | 개념 | **큐 활용 사례** 🖨️ 프린터 대기열 📱 메시지 큐 🎮 게임 이벤트 처리 🌐 네트워크 패킷 처리 🔍 너비 우선 탐색 (BFS) | 활용 사례 |
| **29** | 코드 | **회전 (rotate)** ```python from collections import deque q = deque([1, 2, 3, 4, 5]) # 오른쪽으로 회전 q.rotate(1) print(q)  # [5, 1, 2, 3, 4] # 왼쪽으로 회전 q.rotate(-2) print(q)  # [2, 3, 4, 5, 1] ``` deque의 특별 기능! | 코드 블록 |
| **30** | 코드 | **최대 크기 제한** ```python from collections import deque # 최대 3개까지만 recent = deque(maxlen=3) recent.append("A") recent.append("B") recent.append("C") recent.append("D")  # A가 자동 삭제 print(recent)  # deque(['B', 'C', 'D']) ``` 최근 N개만 유지! | 코드 블록 |
| **31** | 정리 | **스택 vs 큐 정리** | | 스택 | 큐 | |---|---|---| | 원리 | LIFO | FIFO | | 비유 | 접시 쌓기 | 줄 서기 | | 추가 | push (위) | enqueue (뒤) | | 제거 | pop (위) | dequeue (앞) | | 구현 | list | deque | | 정리표 |

---

### PART 7. 마무리 (Finish) : 4장

**목표: 정리 및 다음 차시 예고**

| 번호 | 유형 | 화면 구성 및 내용 | 디자인/연출 포인트 |
|------|------|-------------------|-------------------|
| **32** | 도전 | **도전 과제!** 🏆 핫식스 대기열 게임! - 랜덤으로 손님 추가 (enqueue) - 랜덤으로 서비스 (dequeue) - 10턴 후 남은 대기 인원? | 도전 문제 |
| **33** | 정리 | **오늘 배운 것** ✅ 큐 = 선입선출 (FIFO) ✅ enqueue (추가), dequeue (제거) ✅ deque의 append(), popleft() ✅ 프린터 대기열, 식당 예약 | 체크리스트 |
| **34** | 예고 | **다음 시간에는...** 🔍 선형 탐색! 데이터에서 원하는 값 찾기! | 배경: #FFD506, 탐색 이모지 |
| **35** | 엔딩 | **수고했어요!** 🎫 큐 자료구조 완전 정복! **21차시 완료** | 엔딩 로고 |

---

## 3. 제작 시 유의사항 (Checklist)

1. **줄 서기 비유**: FIFO 개념을 직관적으로 전달
2. **deque 권장**: 리스트 pop(0)의 비효율성 설명
3. **스택과 비교**: LIFO vs FIFO 차이 명확히
4. **실용적 예제**: 프린터, 식당 예약 등
5. **실습 코드**: `code/21-*.py` 파일과 일치 확인

---

## 4. 관련 코드 파일

| 파일명 | 내용 |
|--------|------|
| `21-1-queue_concept.py` | 큐 기초 개념 |
| `21-2-practice_printer.py` | 실습 A: 프린터 대기열 |
| `21-3-practice_restaurant.py` | 실습 B: 식당 예약 |
| `21-4-challenge.py` | 도전 과제 |
| `21-5-answer.py` | 도전 과제 정답 |
