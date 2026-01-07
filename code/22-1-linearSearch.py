# ==========================================
# 선형 탐색 (Linear Search) 원리
# ==========================================
import time

# 범인(찾는 숫자)이 숨어있는 아파트 (정렬 안 된 리스트)
apt = [10, 5, 33, 2, 7, 100, 42, 9]
target = 7  # 찾고 싶은 범인 번호

print(f"아파트 입주민: {apt}")
print(f"찾는 범인: {target}")
print("-" * 30)

# 탐색 시작 (처음부터 끝까지)
found = False # 찾았는지 표시하는 깃발 (Flag 변수)

for i in range(len(apt)):
    # 탐색 과정 시각화 (천천히 보여주기)
    print(f"🔎 {i}번 방 확인 중... (주민: {apt[i]})")
    time.sleep(0.5)
    
    # 범인을 찾았다!
    if apt[i] == target:
        print(f"🎉 잡았다! {target}은 {i}번 인덱스에 있습니다.")
        found = True
        break # 찾았으면 더 이상 고생할 필요 없음 (반복 종료)

# 끝까지 다 뒤졌는데 깃발이 안 올라갔다면?
if found == False:
    print("😭 범인을 찾지 못했습니다. (리스트에 없음)")