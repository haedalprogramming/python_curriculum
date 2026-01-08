from collections import deque
# 리스트로도 큐를 만들 수 있지만, 데이터가 많으면 느려집니다.
# 그래서 'deque(덱)'이라는 전문 도구를 씁니다.

wait_list = deque()

print("--- 손님 대기 중 ---")
wait_list.append("철수")  # 줄 서기
print("철수 도착")
wait_list.append("영희")
print("영희 도착")
wait_list.append("민수")
print("민수 도착")

print("현재 대기열:", list(wait_list))

print("\n--- 식당 입장 시작 ---")
# popleft(): 왼쪽(앞)에서 데이터를 뺍니다. (스택의 pop은 오른쪽)
guest = wait_list.popleft()
print(f"{guest}님 입장하세요!")

guest = wait_list.popleft()
print(f"{guest}님 입장하세요!")

print("남은 대기열:", list(wait_list))
