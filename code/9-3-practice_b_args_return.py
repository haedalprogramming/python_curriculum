# 실습 B: 매개변수와 반환값 연습
# 사용법: 실행 후 공백으로 구분한 숫자들을 입력하면 합계와 평균을 함수로 계산해 출력합니다.

# 합계와 평균을 계산하는 함수 (리스트를 받아서 반환)
def sum_and_average(numbers):
    # numbers는 숫자들이 담긴 리스트 (빈 리스트 예외 처리)
    if len(numbers) == 0:
        return 0, 0.0
    total = 0
    for n in numbers:
        total += n
    avg = total / len(numbers)
    return total, avg

# 입력 받기 (예: "10 20 30")
s = input("숫자들을 공백으로 구분해 입력하세요 (예: 10 20 30): ").strip()
if s == "":
    nums = []
else:
    parts = s.split()
    nums = []
    for p in parts:
        try:
            nums.append(float(p))
        except ValueError:
            print(f"'{p}'는 숫자가 아니므로 무시합니다.")

total, avg = sum_and_average(nums)
print(f"입력한 숫자: {nums}")
print(f"합계 = {total}, 평균 = {avg:.2f}")