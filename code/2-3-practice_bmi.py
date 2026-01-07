# practice_bmi.py
# 실습 2: BMI 계산기
# 키(cm)와 몸무게(kg)를 입력받아 BMI를 계산하고 판정 결과를 출력합니다.
# 포인트: 변수, 실수 연산, 거듭제곱(**), 반올림(round) 사용


print("BMI 계산기")

weight = 70 #몸무게(kg)
height_cm = 174 #키(cm)

# 키를 미터 단위로 변환
height_m = height_cm / 100.0

# BMI = weight / (height_m ** 2)
bmi = weight / (height_m*height_m)

print(bmi)

# BMI 판정
if bmi < 18.5:
    print("판정: 저체중")
elif bmi < 24.9:
    print("판정: 정상")
elif bmi < 29.9:
    print("판정: 과체중")
else:
    print("판정: 비만")
