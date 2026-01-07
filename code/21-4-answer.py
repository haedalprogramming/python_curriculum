from collections import deque
import time

# 준비된 좌석 수
MAX_SEATS = 3
current_seats = MAX_SEATS

# 대기자 명단 (7명)
people = ["철수", "영희", "민수", "지수", "준호", "현우", "나연"]

# 1. 대기줄(큐) 만들기
ticketing_queue = deque(people)

print(f"🎫 티켓팅 시작! (남은 좌석: {current_seats}석)")
print(f"대기 줄: {list(ticketing_queue)}")
print("-" * 30)

# 2. 한 명씩 입장 처리
while len(ticketing_queue) > 0:
    # 줄 맨 앞 사람 입장
    person = ticketing_queue.popleft()
    
    # 좌석 확인
    if current_seats > 0:
        current_seats -= 1 # 좌석 감소
        print(f"🎉 {person}님 예매 성공! (남은 좌석: {current_seats})")
    else:
        print(f"😭 {person}님 예매 실패... (매진되었습니다)")
    
    time.sleep(0.5) # 긴장감 조성

print("-" * 30)
print("티켓팅 종료")
