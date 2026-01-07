# 조건문 개념 예제 (주석을 보고 단계별로 실행해보세요)

# 비교 연산자 예시
a = 10
b = 7
print("a =", a, "b =", b)
print("a == b ?", a == b)   # 같음
print("a != b ?", a != b)   # 다름
print("a > b ?", a > b)
print("a >= b ?", a >= b)

# if 기본 구조
if a > b:
    print("a가 b보다 큽니다.")
else:
    print("a가 b보다 크지 않습니다.")

# elif 사용 (여러 조건 구분)
score = 85
if score >= 90:
    print("A학점")
elif score >= 80:
    print("B학점")
elif score >= 70:
    print("C학점")
else:
    print("D 또는 F 학점")

# 논리 연산자 and / or / not
age = 20
has_id = True
# 성인(19세 이상)이고 신분증이 있으면 입장 가능
if age >= 19 and has_id:
    print("입장 가능 (성인 & 신분증 있음)")
else:
    print("입장 불가")

# 중첩된 조건문 (필요할 때만 사용)
x = 5
if x > 0:
    print("양수입니다.")
    if x % 2 == 0:
        print("짝수입니다.")
    else:
        print("홀수입니다.")
else:
    print("0 또는 음수입니다.")

# 한 줄 조건식(삼항 연산자) - 간단할 때 사용
n = 8
parity = "짝수" if n % 2 == 0 else "홀수"
print(f"{n}은 {parity}입니다.")

# Truthy / Falsy 값
# 빈 문자열, 0, 빈 리스트 등은 False로 취급
if "":
    print("빈 문자열은 True")
else:
    print("빈 문자열은 False (조건문에서 거짓으로 취급)")

if []:
    print("빈 리스트는 True")
else:
    print("빈 리스트는 False")