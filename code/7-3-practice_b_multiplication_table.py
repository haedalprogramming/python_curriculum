# 실습 B: 특정 단의 구구단 출력 (input 사용)
# 사용법: 실행 후 단(2~9 중) 숫자를 입력하세요. 값 대신 변수로 실습해도 됩니다.

try:
    dan = int(input("출력할 단을 입력하세요 (2~9): ").strip())
except ValueError:
    print("정수를 입력하세요.")
    exit()

if dan < 2 or dan > 9:
    print("2에서 9 사이의 숫자를 입력하세요.")
else:
    print(f"\n{dan}단 결과")
    for i in range(1, 10):
        print(f"{dan} x {i} = {dan * i}")