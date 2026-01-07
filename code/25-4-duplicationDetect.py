#문제: 숫자가 마구잡이로 들어있고 중복된 숫자도 많은 리스트가 있습니다. 여기서 중복을 제거하고, 오름차순으로 깔끔하게 정렬된 새로운 리스트를 만드세요.



# 엉망진창 데이터 (중복된 숫자가 많음)
dirty_data = [1, 5, 2, 1, 3, 5, 4, 2, 1, 6]

print(f"청소 전 데이터: {dirty_data}")

# 1. 중복 제거 알고리즘
clean_data = [] # 깨끗한 데이터를 담을 빈 리스트

for num in dirty_data:
    # 핵심 로직: "만약 이 숫자가 깨끗한 리스트에 '없다면' 넣는다"
    # 이미 있으면? 안 넣는다(무시한다).
    if num not in clean_data:
        clean_data.append(num)

print(f"중복 제거 후: {clean_data}")

# 2. 정렬 알고리즘 (마무리 정리)
clean_data.sort()

print("-" * 30)
print(f"✨ 최종 결과: {clean_data}")
