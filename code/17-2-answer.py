import random

# 1. 컴퓨터가 1~100 사이 숫자를 하나 생각함
computer_num = random.randint(1, 100)
count = 0 # 시도 횟수를 셀 변수

print("★ 1부터 100 사이의 숫자를 맞춰보세요! ★")

while True:
    # 2. 사용자 입력 받기 (숫자가 아닌 거 입력했을 때 에러 방지)
    try:
        user_input = int(input("숫자 입력: "))
    except ValueError:
        print("문자 말고 숫자를 입력해주세요!")
        continue
    
    count = count + 1 # 시도 횟수 증가

    # 3. 정답 확인 로직
    if user_input < computer_num:
        print("UP! (더 큰 숫자입니다)")
    elif user_input > computer_num:
        print("DOWN! (더 작은 숫자입니다)")
    else:
        print("정답입니다!!", computer_num)
        print("축하합니다.", count, "번 만에 맞췄습니다.")
        break # 정답을 맞췄으니 반복문 종료