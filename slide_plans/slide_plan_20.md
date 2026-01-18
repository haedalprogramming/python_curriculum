# [슬라이드 기획안] 20차시: 스택 (Stack)

## 1. 기획 개요

| 항목 | 내용 |
|------|------|
| **수업명** | [해달에듀] 파이썬 프로그래밍 20차시 - 스택 자료구조 |
| **대상** | 초중고 학생 (코딩 초보자) |
| **총 슬라이드** | 35장 |
| **학습 목표** | 스택의 개념과 동작 원리를 이해하고, 리스트로 스택을 구현할 수 있다 |
| **실습 코드** | `20-1-stack_concept.py`, `20-2-practice_browser.py` |
| **디자인 컨셉** | 메인 컬러: #FFD506, 접시 쌓기 비유 |

---

## 2. 상세 슬라이드 구성안

### PART 1. 도입 (Intro) : 4장

**목표: 흥미 유발 및 스택 소개**

| 번호 | 유형 | 화면 구성 및 내용 | 디자인/연출 포인트 |
|------|------|-------------------|-------------------|
| **01** | 표지 | **[제목] 쌓고 빼기!** 📚 스택(Stack) 자료구조 **[부제] 20차시 \| 해달에듀** | 배경: #FFD506, 책 쌓기 이모지 |
| **02** | 질문 | **접시를 쌓으면?** 🍽️ 새 접시는 맨 위에 올리고 쓸 때는 맨 위에서 빼죠! **이게 바로 스택이에요!** | 접시 쌓기 이미지 |
| **03** | 미리보기 | **오늘의 완성작!** ⏪ 브라우저 뒤로가기/앞으로가기 구현! | 브라우저 이미지 |
| **04** | 목표 | **오늘의 미션!** ☐ 1. 스택이 뭔지 이해하기 ☐ 2. push와 pop 연산 ☐ 3. 리스트로 스택 구현 ☐ 4. 브라우저 히스토리 만들기 | 점선 박스 |

---

### PART 2. 스택 개념 (Concept 1) : 6장

**목표: 스택의 개념과 원리 이해**

| 번호 | 유형 | 화면 구성 및 내용 | 디자인/연출 포인트 |
|------|------|-------------------|-------------------|
| **05** | 개념 | **스택(Stack)이란?** 📚 데이터를 쌓아 올리는 구조! - 새 데이터는 맨 위에 추가 - 꺼낼 때도 맨 위에서 **LIFO: Last In, First Out** (후입선출) | 책 쌓기 그림 |
| **06** | 개념 | **LIFO 원리** 📚 마지막에 들어간 것이 먼저 나온다! ``` 넣기: A → B → C 빼기: C → B → A ``` C가 마지막에 들어갔지만 먼저 나옴! | LIFO 도식 |
| **07** | 개념 | **일상 속 스택** 🍽️ 접시 쌓기 📚 책 쌓기 ⏪ 브라우저 뒤로가기 ↩️ Ctrl+Z (되돌리기) 🥞 팬케이크 쌓기 | 일상 예시 |
| **08** | 개념 | **스택 연산** | 연산 | 의미 | |------|------| | **push** | 맨 위에 추가 | | **pop** | 맨 위에서 제거 & 반환 | | **peek/top** | 맨 위 확인 (제거 안함) | | **isEmpty** | 비어있는지 확인 | | 연산 표 |
| **09** | 그림 | **스택 동작 시각화** ``` push(A): [A] push(B): [A, B] push(C): [A, B, C] pop(): [A, B] → 반환: C pop(): [A] → 반환: B ``` | 동작 그림 |
| **10** | 주의 | **⚠️ 빈 스택에서 pop?** 스택이 비어있는데 pop하면 에러! 항상 비어있는지 확인하고 pop! | 에러 주의 |

---

### PART 3. 리스트로 스택 구현 (Concept 2) : 6장

**목표: 파이썬 리스트로 스택 만들기**

| 번호 | 유형 | 화면 구성 및 내용 | 디자인/연출 포인트 |
|------|------|-------------------|-------------------|
| **11** | 개념 | **파이썬 리스트 = 스택!** 🐍 리스트가 이미 스택 기능을 제공! - `append()` = push - `pop()` = pop 추가 구현 없이 바로 사용! | 리스트-스택 연결 |
| **12** | 코드 | **기본 스택 사용** ```python stack = []  # 빈 스택 # push stack.append("A") stack.append("B") stack.append("C") print(stack)  # ["A", "B", "C"] # pop top = stack.pop() print(top)    # C print(stack)  # ["A", "B"] ``` | 코드 + 결과 |
| **13** | 코드 | **peek 구현** ```python stack = ["A", "B", "C"] # 맨 위 확인 (제거 안함) top = stack[-1] print(top)    # C print(stack)  # ["A", "B", "C"] (그대로) ``` `[-1]`로 마지막 요소 확인! | 코드 블록 |
| **14** | 코드 | **isEmpty 확인** ```python stack = [] # 방법 1: len() 사용 if len(stack) == 0:     print("스택이 비어있음") # 방법 2: 직접 비교 if not stack:     print("스택이 비어있음") ``` | 코드 블록 |
| **15** | 코드 | **안전한 pop** ```python def safe_pop(stack):     if stack:  # 비어있지 않으면         return stack.pop()     else:         print("스택이 비어있습니다!")         return None stack = [] result = safe_pop(stack)  # 스택이 비어있습니다! ``` | 안전한 pop |
| **16** | 코드 | **스택 클래스** ```python class Stack:     def __init__(self):         self.items = []     def push(self, item):         self.items.append(item)     def pop(self):         if self.items:             return self.items.pop()         return None     def peek(self):         if self.items:             return self.items[-1]         return None     def is_empty(self):         return len(self.items) == 0     def size(self):         return len(self.items) ``` | 클래스 버전 |

---

### PART 4. 실습 A - 괄호 검사 (Practice A) : 5장

**목표: 스택으로 괄호 짝 맞추기**

| 번호 | 유형 | 화면 구성 및 내용 | 디자인/연출 포인트 |
|------|------|-------------------|-------------------|
| **17** | 안내 | **실습 A: 괄호 검사기** 📝 괄호가 올바르게 짝지어졌는지 확인! "(())" ✅ "(()(" ❌ | 괄호 예시 |
| **18** | 개념 | **괄호 검사 원리** 1. 여는 괄호 `(` → push 2. 닫는 괄호 `)` → pop 3. 끝났을 때 스택이 비어있으면 OK! | 원리 설명 |
| **19** | 실습 | **괄호 검사 코드** ```python def check_brackets(text):     stack = []     for char in text:         if char == "(":             stack.append(char)         elif char == ")":             if not stack:                 return False  # 짝이 없음             stack.pop()     return len(stack) == 0  # 스택이 비어야 OK # 테스트 print(check_brackets("(())"))    # True print(check_brackets("(()"))     # False print(check_brackets(")("))      # False ``` | 코드 블록 |
| **20** | 확장 | **여러 종류 괄호** ```python def check_all_brackets(text):     stack = []     pairs = {")": "(", "]": "[", "}": "{"}     for char in text:         if char in "([{":             stack.append(char)         elif char in ")]}":             if not stack:                 return False             if stack.pop() != pairs[char]:                 return False     return len(stack) == 0 print(check_all_brackets("{[()]}"))  # True print(check_all_brackets("{[(])}"))  # False ``` | 확장 코드 |
| **21** | 완료 | **실행 결과** ``` "(())" → True "(()" → False "{[()]}" → True "{[(])}" → False ``` 괄호 검사기 완성! | 터미널 결과 |

---

### PART 5. 실습 B - 브라우저 히스토리 (Practice B) : 6장

**목표: 뒤로가기/앞으로가기 구현**

| 번호 | 유형 | 화면 구성 및 내용 | 디자인/연출 포인트 |
|------|------|-------------------|-------------------|
| **22** | 안내 | **실습 B: 브라우저 히스토리** ⏪ 뒤로가기, ⏩ 앞으로가기 2개의 스택으로 구현! | 브라우저 버튼 |
| **23** | 개념 | **2개의 스택** 📚 back_stack: 이전 페이지들 📚 forward_stack: 앞으로 갈 페이지들 - 새 페이지 방문: 현재를 back에 push - 뒤로가기: back에서 pop, forward에 push - 앞으로가기: forward에서 pop, back에 push | 2스택 구조 |
| **24** | 실습 | **변수 설정** ```python current = "홈" back_stack = [] forward_stack = [] def show_status():     print(f"\\n현재 페이지: {current}")     print(f"뒤로: {back_stack}")     print(f"앞으로: {forward_stack}") ``` | 코드 블록 |
| **25** | 실습 | **기능 구현** ```python def visit(page):     global current     back_stack.append(current)     current = page     forward_stack.clear()  # 새 페이지 가면 앞으로 초기화 def go_back():     global current     if back_stack:         forward_stack.append(current)         current = back_stack.pop() def go_forward():     global current     if forward_stack:         back_stack.append(current)         current = forward_stack.pop() ``` | 코드 블록 |
| **26** | 실습 | **테스트** ```python visit("구글") show_status() visit("유튜브") show_status() go_back() print("\\n뒤로가기!") show_status() go_forward() print("\\n앞으로가기!") show_status() ``` | 코드 블록 |
| **27** | 완료 | **실행 결과** ``` 현재 페이지: 구글 뒤로: ['홈'] 앞으로: [] 현재 페이지: 유튜브 뒤로: ['홈', '구글'] 앞으로: [] 뒤로가기! 현재 페이지: 구글 뒤로: ['홈'] 앞으로: ['유튜브'] ``` | 터미널 결과 |

---

### PART 6. 스택 활용 (Advanced) : 4장

**목표: 다양한 스택 활용 사례**

| 번호 | 유형 | 화면 구성 및 내용 | 디자인/연출 포인트 |
|------|------|-------------------|-------------------|
| **28** | 개념 | **스택 활용 사례** ⏪ 브라우저 뒤로가기 ↩️ Ctrl+Z (되돌리기) 📝 수식 계산기 🔍 미로 탐색 📚 함수 호출 스택 | 활용 사례 |
| **29** | 코드 | **문자열 뒤집기** ```python def reverse_string(s):     stack = list(s)  # 문자를 스택에 push     result = ""     while stack:         result += stack.pop()  # 하나씩 pop     return result print(reverse_string("hello"))  # olleh ``` | 코드 블록 |
| **30** | 코드 | **되돌리기 기능** ```python history = [] current_text = "" def type_text(text):     global current_text     history.append(current_text)  # 이전 상태 저장     current_text = text def undo():     global current_text     if history:         current_text = history.pop() type_text("Hello") type_text("Hello World") print(current_text)  # Hello World undo() print(current_text)  # Hello ``` | 되돌리기 구현 |
| **31** | 정리 | **스택 정리** ✅ LIFO (후입선출) ✅ push: 맨 위에 추가 ✅ pop: 맨 위에서 제거 ✅ 리스트로 쉽게 구현 | 정리 카드 |

---

### PART 7. 마무리 (Finish) : 4장

**목표: 정리 및 다음 차시 예고**

| 번호 | 유형 | 화면 구성 및 내용 | 디자인/연출 포인트 |
|------|------|-------------------|-------------------|
| **32** | 도전 | **도전 과제!** 🏆 계산기 만들기: 후위 표기법 계산! "3 4 + 2 *" = (3+4)*2 = 14 힌트: 숫자는 push, 연산자면 pop 2개 → 계산 → push | 도전 문제 |
| **33** | 정리 | **오늘 배운 것** ✅ 스택 = 후입선출 (LIFO) ✅ push (추가), pop (제거) ✅ 리스트의 append(), pop() ✅ 괄호 검사, 브라우저 히스토리 | 체크리스트 |
| **34** | 예고 | **다음 시간에는...** 🎫 큐(Queue) 자료구조! 줄 서기의 원리! 먼저 온 사람이 먼저! | 배경: #FFD506, 큐 이모지 |
| **35** | 엔딩 | **수고했어요!** 📚 스택 자료구조 완전 정복! **20차시 완료** | 엔딩 로고 |

---

## 3. 제작 시 유의사항 (Checklist)

1. **접시 쌓기 비유**: LIFO 개념을 직관적으로 전달
2. **리스트와 연결**: 파이썬 리스트가 스택 역할
3. **빈 스택 주의**: pop 전에 isEmpty 확인
4. **실용적 예제**: 괄호 검사, 브라우저 뒤로가기
5. **실습 코드**: `code/20-*.py` 파일과 일치 확인

---

## 4. 관련 코드 파일

| 파일명 | 내용 |
|--------|------|
| `20-1-stack_concept.py` | 스택 기초 개념 |
| `20-2-practice_brackets.py` | 실습 A: 괄호 검사 |
| `20-3-practice_browser.py` | 실습 B: 브라우저 히스토리 |
| `20-4-challenge.py` | 도전 과제 (후위 계산기) |
| `20-5-answer.py` | 도전 과제 정답 |
