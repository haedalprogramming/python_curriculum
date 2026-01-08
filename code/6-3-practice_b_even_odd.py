# 실행 후 정수를 입력하면 양수/음수/0과 짝수/홀수를 알려줍니다.

print("숫자 판별기")
try:
    n = int(input("정수를 입력하세요: ").strip())
except ValueError:
    print("정수를 입력하세요.")
    exit()

# 부호 판별
if n > 0:
    sign = "양수"
elif n < 0:
    sign = "음수"
else:
    sign = "0"

# 짝수/홀수 판별 (0은 짝수로 처리)
if n % 2 == 0:
    parity = "짝수"
else:
    parity = "홀수"

print(f"입력값: {n} -> {sign}, {parity}")