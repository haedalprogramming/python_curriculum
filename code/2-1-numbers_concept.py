# numbers_concept.py
# 수치 자료형과 변수: 개념 예제 (주석을 자세히 달아 교육용으로 사용하세요)

# 정수(int) 예시
a = 10          # a는 정수 10
b = -3          # 음수도 정수
print("a =", a, "타입:", type(a))  # type()으로 자료형 확인

# 실수(float) 예시
pi = 3.14159    # 소수점 있는 숫자 -> float
print("pi =", pi, "타입:", type(pi))

# 산술 연산자
x = 7
y = 2
print("\n산술 연산 예시 (x=7, y=2):")
print("더하기 x + y =", x + y)
print("빼기   x - y =", x - y)
print("곱하기 x * y =", x * y)
print("나누기 (실수) x / y =", x / y)      # 결과는 float (3.5)
print("정수 몫 x // y =", x // y)         # 몫 (3)
print("나머지 x % y =", x % y)            # 나머지 (1)
print("거듭제곱 x ** y =", x ** y)        # 7의 2제곱 = 49

# 연산 우선순위
expr1 = 2 + 3 * 4        # 곱셈이 먼저 -> 2 + 12 = 14
expr2 = (2 + 3) * 4      # 괄호로 우선순위 변경 -> 5 * 4 = 20
print("\n우선순위 예시: expr1 =", expr1, ", expr2 =", expr2)

# 복합 할당과 여러 변수 대입
n = 5
n += 2   # n = n + 2
print("\n복합 할당 n += 2 ->", n)

# 여러 변수 동시에 대입
x, y, z = 1, 2, 3
print("동시 대입: x, y, z =", x, y, z)

# 형 변환 (casting) - 주의: int로 바꾸면 소수 부분이 없어짐
f = 3.9
print("\n형 변환 예시: float->int", int(f), "(소수점 이하는 버려짐)")

# 내장 수치 함수
print("\n내장 함수 예시:")
print("abs(-7) =", abs(-7))
print("divmod(7, 2) =", divmod(7, 2))  # (몫, 나머지)
print("round(3.14159, 2) =", round(3.14159, 2))  # 소수 둘째 자리 반올림

# 숫자 포맷팅 (출력)
value = 1234.56789
print("\n포맷팅 예시:")
print("기본:", value)
print("소수 둘째 자리까지: {:.2f}".format(value))  # 포맷 문자열 사용
print(f"포맷 f-string: {value:.3f}")               # f-string 사용

# 진수 표기 (참고)
print("\n진수 표기 예시:")
print("이진 0b1010 == ", 0b1010)  # 10
print("16진 0xFF == ", 0xFF)      # 255