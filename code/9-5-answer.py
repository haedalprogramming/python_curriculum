# 함수 정의
def add(a, b):
    return a + b

def sub(a, b):
    return a - b

def mul(a, b):
    return a * b

def div(a, b):
    if b == 0:
        return None  # 나눗셈 불가 표시
    return a / b

# 입력 받기
s = input("두 수와 연산자 입력 (예: 12 3 /): ").strip()
parts = s.split()
if len(parts) != 3:
    print("입력 형식이 잘못되었습니다. 예: 12 3 /")
else:
    try:
        a = float(parts[0])
        b = float(parts[1])
    except ValueError:
        print("숫자를 정확히 입력하세요.")
        exit()

    op = parts[2]

    # 연산자에 따라 함수 호출
    if op == "+":
        res = add(a, b)
        print(f"{a} + {b} = {res}")
    elif op == "-":
        res = sub(a, b)
        print(f"{a} - {b} = {res}")
    elif op == "*":
        res = mul(a, b)
        print(f"{a} * {b} = {res}")
    elif op == "/":
        res = div(a, b)
        if res is None:
            print("오류: 0으로 나눌 수 없습니다.")
        else:
            print(f"{a} / {b} = {res}")
    else:
        print("지원하지 않는 연산자입니다. (+ - * /)")