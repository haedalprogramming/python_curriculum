# practice_calc.py
# 사용법: 아래 a, b, op 값을 직접 바꿔서 실행해보세요.
# 지원 연산자: +, -, *, /

# 예시: 값을 바꿔서 여러 번 실험하세요.
a = 10        # 첫 번째 숫자 (예: 10)
b = 3         # 두 번째 숫자 (예: 3)
op = "/"      # 연산자: "+", "-", "*", "/"

# 계산 (조건문으로 연산자 처리)
if op == "+":
    result = a + b
    print(result)
elif op == "-":
    result = a - b
    print(result)
elif op == "*":
    result = a * b
    print(result)
elif op == "/":
    if b == 0:
        print("오류: 0으로 나눌 수 없습니다.")
    else:
        result = a/b
        print(result)
else:
    print("지원하지 않는 연산자입니다. 연산자를 +, -, *, / 중에서 선택하세요.")