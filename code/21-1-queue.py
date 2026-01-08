# 큐(Queue)란?

# 한쪽 끝에서는 데이터가 계속 들어오고, 반대쪽 끝에서는 데이터가 나가는 구조입니다.

# 비유 1: 놀이공원 줄 서기

# 줄을 가장 먼저 선 사람이, 놀이기구를 가장 먼저 탑니다.

# 새치기는 없습니다. 나중에 온 사람은 무조건 맨 뒤에 섭니다.

# 비유 2: 프린터 인쇄

# "인쇄" 버튼을 5번 연타했다고 칩시다.

# 컴퓨터는 가장 먼저 누른 문서부터 순서대로 인쇄해줍니다. 나중에 누른 건 기다려야 합니다.

# 이것을 FIFO (First In, First Out), 우리말로는 선입선출(먼저 들어간 게 먼저 나온다)이라고 부릅니다.

# 파이썬에서 큐 만들기 (deque)

# 중요: 파이썬 리스트(list)로도 흉내는 낼 수 있지만, 데이터가 많아지면 엄청나게 느려집니다.

# 그래서 파이썬 고수들은 collections 모듈의 deque(데크)라는 도구를 사용합니다. 속도가 훨씬 빠릅니다.

# append(): 줄 맨 뒤에 서기 (Enqueue)

# popleft(): 줄 맨 앞사람 나가기 (Dequeue) - 리스트의 pop(0)과 같습니다.
# ==========================================
# 프린터 인쇄 대기열 (Queue 구현)
# ==========================================
from collections import deque
import time

# 1. 큐 생성 (빈 대기열)
print_queue = deque()

# 2. 인쇄 요청 (Enqueue -> append)
print("--- 🖨️ 문서 인쇄 요청 중... ---")
print_queue.append("수학 숙제.hwp")
print("대기 1번: 수학 숙제 추가됨")

print_queue.append("영어 단어장.pdf")
print("대기 2번: 영어 단어장 추가됨")

print_queue.append("아이돌 사진.jpg")
print("대기 3번: 아이돌 사진 추가됨")

print(f"\n현재 대기 목록: {list(print_queue)}")
print("-" * 30)

# 3. 인쇄 처리 (Dequeue -> popleft)
# pop(0)을 써도 되지만, deque의 popleft()가 훨씬 빠릅니다.
print("--- 🖨️ 인쇄 시작! ---")

while len(print_queue) > 0:
    # 맨 앞에서 꺼내기 (FIFO)
    doc = print_queue.popleft() 
    
    print(f"징~ 지잉~... '{doc}' 인쇄 중...")
    time.sleep(1) # 인쇄하는 척 시간 끌기
    print(f"✅ '{doc}' 인쇄 완료! (남은 대기: {len(print_queue)}개)")

print("-" * 30)
print("모든 문서가 인쇄되었습니다.")
