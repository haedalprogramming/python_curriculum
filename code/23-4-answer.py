import random

# 1. 1부터 1000까지 정렬된 데이터 준비
data = list(range(1, 1001)) 
target = random.randint(1, 1000) # 숨겨진 숫자

print(f"🎯 목표 숫자: {target}")
print("-" * 40)

# --- [선수 1] 거북이 (선형 탐색) ---
turtle_count = 0
for num in data:
    turtle_count += 1
    if num == target:
        break

print(f"🐢 거북이(선형) 기록: {turtle_count}번 시도")


# --- [선수 2] 토끼 (이진 탐색) ---
rabbit_count = 0
start = 0
end = len(data) - 1

while start <= end:
    rabbit_count += 1
    mid = (start + end) // 2
    
    if data[mid] == target:
        break
    elif data[mid] < target:
        start = mid + 1
    else:
        end = mid - 1

print(f"🐇 토끼(이진) 기록  : {rabbit_count}번 시도")

# --- 결과 발표 ---
print("-" * 40)
diff = turtle_count - rabbit_count
print(f"결과: 토끼가 거북이보다 {diff}번 덜 질문하고 맞췄습니다!")
print("💡 데이터가 많을수록 이진 탐색이 훨씬 빠릅니다.")
