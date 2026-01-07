# 뒤죽박죽 섞인 숫자 카드
cards = [7, 2, 9, 4, 3, 1, 5]
target = 9  # 찾고 싶은 숫자

print(f"카드 목록: {cards}")
print(f"찾는 숫자: {target}")

found = False
count = 0

# 처음부터 끝까지 하나씩 확인 (for문)
for i in range(len(cards)):
    count += 1  # 확인 횟수 증가
    print(f"{count}번째 확인 중... (값: {cards[i]})")
    
    if cards[i] == target:
        print(f"찾았다! {i}번 인덱스에 있네요.")
        found = True
        break

if not found:
    print("찾는 숫자가 없습니다.")