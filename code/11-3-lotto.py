import random

print("★ 이번 주 로또 행운의 번호 ★")

# random.sample(범위, 개수): 범위 내에서 중복 없이 개수만큼 뽑습니다.
# range(1, 46)은 1부터 45까지의 숫자를 의미합니다.
lotto = random.sample(range(1, 46), 6) # 중복 없이 6개 숫자 선택

# 뽑은 번호가 뒤죽박죽이니 보기 좋게 정렬(오름차순)합니다.
lotto.sort()

print("추천 번호:", lotto)