# 함수 개념 예제 (주석을 읽고 하나씩 실행해보세요)

# 1) 기본 함수 정의와 호출 (매개변수 없음, 반환값 없음)
def say_hello():
    """인사를 출력하는 간단한 함수"""
    print("안녕하세요! 함수 호출 테스트입니다.")

# 함수 호출
say_hello()


# 2) 매개변수가 있는 함수 (인자 전달)
def greet(name):
    """이름을 받아 인사 메시지 출력"""
    print(f"안녕하세요, {name}님!")

greet("민수")
greet("지수")


# 3) 반환값이 있는 함수 (return 사용)
def add(a, b):
    """두 수를 더해 결과를 반환"""
    return a + b

result = add(3, 5)
print("add(3, 5) =", result)


# 4) 기본값(default argument)과 키워드 인자
def power(base, exp=2):
    """거듭제곱: exp 기본값은 2 (제곱)"""
    return base ** exp

print("power(3) =", power(3))       # 3의 제곱
print("power(2, 3) =", power(2, 3)) # 2의 세제곱


# 5) 여러 값을 반환하는 함수 (튜플 반환)
def div_mod(a, b):
    """몫과 나머지를 같이 반환"""
    q = a // b
    r = a % b
    return q, r

q, r = div_mod(17, 5)  # 튜플 언패킹
print("몫:", q, "나머지:", r)


# 6) 지역 변수와 전역 변수 (간단한 범위 예시)
x = 10  # 전역 변수

def scope_example():
    x = 5  # 지역 변수 (함수 안에서만 유효)
    print("함수 안의 x =", x)

scope_example()
print("함수 밖의 x =", x)