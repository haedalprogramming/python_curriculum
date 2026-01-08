# for 반복문 개념 예제 (초보용, 주석 읽고 한 줄씩 실행해보세요)

# 1) 리스트 순회
fruits = ["사과", "바나나", "포도"]
print("리스트 순회:")
for f in fruits:
    print("-", f)

# 2) 문자열 순회 (문자 하나씩)
word = "Python"
print("\n문자열 순회:")
for ch in word:
    print(ch, end=" ")
print()

# 3) range() 사용: 0부터 4까지
print("\nrange(5) 순회:")
for i in range(5):
    print(i, end=" ")
print()

# 4) 시작과 끝 지정: 1부터 5까지
print("\nrange(1, 6) -> 1~5:")
for i in range(1, 6):
    print(i, end=" ")
print()

# 5) 스텝 지정: 0,2,4,...
print("\nrange(0, 10, 2) -> 짝수 출력:")
for i in range(0, 10, 2):
    print(i, end=" ")
print()

# 6) 합계 계산 예시: 1부터 10까지 합
total = 0
for i in range(1, 11):
    total = total + i   # total += i 와 동일
print("\n\n1부터 10까지 합:", total)

# 7) enumerate로 인덱스와 값 함께 받기
print("\nenumerate 예시:")
for idx, val in enumerate(fruits):
    print(idx, ":", val)

# 8) break / continue
print("\nbreak / continue 예시:")
for i in range(1, 10):
    if i == 5:
        print("5를 만나서 반복문 종료(break).")
        break
    if i % 2 == 0:
        continue  # 짝수는 건너뜀
    print("홀수:", i)

# 9) 이중 반복문 (구구단 일부)
print("\n구구단 2~4단:")
for a in range(2, 5):        # 2,3,4단
    for b in range(1, 10):   # 1~9
        print(f"{a}x{b}={a*b}", end="  ")
    print()  # 다음 단으로 줄바꿈