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
