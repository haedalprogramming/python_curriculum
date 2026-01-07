# 실습 A: 인덱싱과 슬라이싱 연습 (변수의 값을 바꿔가며 실습하세요)
# 사용법: 아래 text 변수 값을 바꿔서 실행해보세요.

text = "Hello, Korea!"   # 실습용 문자열

# 1) 첫 문자와 마지막 문자 출력
first_char = text[0]
last_char = text[-1]
print("첫 문자:", first_char)
print("마지막 문자:", last_char)

# 2) 앞에서 5글자, 뒤에서 6글자 슬라이스
front5 = text[:5]
back6 = text[-6:]
print("앞에서 5글자:", front5)
print("뒤에서 6글자:", back6)

# 3) 한 글자씩 건너뛰어 출력 (스텝 슬라이싱)
skip_one = text[::2]
print("한 글자씩 건너뛰기:", skip_one)

# 4) 전체 문자열을 역순으로 출력
reversed_text = text[::-1]
print("역순:", reversed_text)