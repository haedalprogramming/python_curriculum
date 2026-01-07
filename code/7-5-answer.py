try:
    n = int(input("삼각형 높이 n을 입력하세요 (예: 4): ").strip())
except ValueError:
    print("정수를 입력하세요.")
    exit()

if n <= 0:
    print("양수를 입력하세요.")
else:
    for row in range(1, n + 1):
        spaces = n - row
        stars = row
        print(" " * spaces + "*" * stars)