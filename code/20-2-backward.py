# 파이썬의 리스트는 스택처럼 쓸 수 있습니다.
# append(): 넣기 (Push)
# pop(): 빼기 (Pop)

history = []

print("--- 브라우저 탐색 시작 ---")
history.append("네이버")
print("현재 접속: 네이버")
history.append("구글")
print("현재 접속: 구글")
history.append("유튜브")
print("현재 접속: 유튜브")

print("방문 기록(스택):", history)

print("\n--- 뒤로 가기 버튼 클릭! ---")
last_site = history.pop()  # 가장 나중에 넣은 '유튜브'가 빠져나옴
print(f"빠져나온 사이트: {last_site}")
print(f"현재 보이는 화면: {history[-1]}")  # 리스트의 맨 마지막 요소

print("\n--- 뒤로 가기 버튼 또 클릭! ---")
history.pop()
print(f"현재 보이는 화면: {history[-1]}")
