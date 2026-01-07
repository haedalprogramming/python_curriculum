import time

print("🍜 친절한 라면 타이머 🍜")

# 정수로 입력받기
minute = int(input("몇 분 기다리시겠습니까? : "))
total_seconds = minute * 60

print(f"지금부터 {total_seconds}초 카운트다운을 시작합니다!")
print("-" * 30)

# 1초씩 줄어들면서 출력하기
# range(시작, 끝, -1) -> 거꾸로 세기
for i in range(total_seconds, 0, -1):
    print(f"{i}초 남았습니다...")
    time.sleep(1) # 1초 쉬기

print("-" * 30)
print("완성! 꼬들꼬들한 라면이 되었습니다. 호로록! 😋")
