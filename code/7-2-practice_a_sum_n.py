# 실습 A: 1부터 n까지 합 구하기 (input 사용)
# 사용법: 실행 후 n 값을 입력하세요 (정수).

try:
    n = int(input("정수 n을 입력하세요 (예: 10): ").strip())
except ValueError:
    print("정수를 입력해야 합니다. 프로그램을 종료합니다.")
    exit()

if n <= 0:
    print("1 이상의 정수를 입력하세요.")
else:
    total = 0
    for i in range(1, n + 1):
        total += i
    print(f"1부터 {n}까지의 합은 {total}입니다.")