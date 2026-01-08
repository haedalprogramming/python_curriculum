print("입장료 계산기")
try:
    age = int(input("나이 입력: ").strip())
except ValueError:
    print("나이는 정수로 입력하세요.")
    exit()

student_input = input("학생인가요? (y/n): ").strip().lower()
is_student = (student_input == "y")

base_price = 15000

# 연령별 할인 결정
if age <= 12:
    price = 0
    reason = "어린이 무료"
elif age <= 18:
    price = base_price * 0.5
    reason = "청소년 50% 할인"
elif age <= 64:
    price = base_price
    reason = "성인 정상 요금"
else:  # 65 이상
    price = base_price * 0.7
    reason = "노인 30% 할인"

# 학생 추가 할인 (무료면 적용 안 함)
if price > 0 and is_student:
    price = price * 0.9
    reason += " + 학생 10% 추가 할인"

# 최종 가격은 정수 원 단위로 반올림
final_price = int(round(price))

print("\n결과")
print("나이:", age)
print("학생 여부:", "예" if is_student else "아니오")
print("할인 내역:", reason)
print("결제할 금액:", f"{final_price:,d}원")