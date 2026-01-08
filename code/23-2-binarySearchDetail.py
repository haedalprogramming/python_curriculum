# 정렬된 데이터 필수!
data = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
target = 13

start = 0              # 시작 위치 (인덱스)
end = len(data) - 1    # 끝 위치 (인덱스)
count = 0

print(f"데이터: {data}")

while start <= end:
    count += 1
    mid = (start + end) // 2  # 중간 위치 계산 (정수 나누기)
    
    print(f"{count}회차 시도: 중간값은 {data[mid]}")
    
    if data[mid] == target:
        print(f"성공! {count}번 만에 찾음. 위치는 {mid}번 인덱스")
        break
    elif data[mid] < target:
        # 중간값이 정답보다 작으면? 오른쪽만 보면 됨 (시작점을 오른쪽으로 땡김)
        start = mid + 1
        print("UP! 오른쪽 탐색")
    else:
        # 중간값이 정답보다 크면? 왼쪽만 보면 됨 (끝점을 왼쪽으로 땡김)
        end = mid - 1
        print("DOWN! 왼쪽 탐색")
