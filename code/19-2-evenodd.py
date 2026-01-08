# 목표: 1부터 10까지 숫자 중 '짝수'만 담은 리스트 만들기

print("--- 1. 일반적인 방법 (초보) ---")
even_numbers = []
for i in range(1, 11):
    if i % 2 == 0:
        even_numbers.append(i)
print(even_numbers)

print("\n--- 2. 리스트 컴프리헨션 (고수) ---")
# 해석: [i를 담아라 / 1~10 반복하면서 / 만약 i가 짝수라면]
magic_numbers = [i for i in range(1, 11) if i % 2 == 0]
print(magic_numbers)
