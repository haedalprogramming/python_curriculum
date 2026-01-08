import random

secret = random.randint(1, 100)
print("숫자 맞추기(1~100). 최대 10번 시도. 시작!")

attempt = 1
max_attempts = 10

while attempt <= max_attempts:
    try:
        guess = int(input(f"{attempt}번째 시도 - 숫자 입력: ").strip())
    except ValueError:
        print("정수를 입력하세요.")
        continue  # 시도 횟수는 소비하지 않음

    if guess < 1 or guess > 100:
        print("1에서 100 사이의 숫자를 입력하세요.")
        continue

    if guess == secret:
        print(f"정답! {attempt}번 만에 맞혔습니다.")
        break
    elif guess < secret:
        print("Up")
    else:
        print("Down")

    attempt = attempt + 1

else:
    # while가 조건으로 끝나고 break하지 않았을 때 실행되는 블록
    print(f"시도 횟수 초과. 정답은 {secret}였습니다. 다음 기회에 도전하세요!")