import time

input("엔터를 누르면 타이머가 시작됩니다!")
start = time.time()  # 현재 시간을 기록합니다. (시작점)

input("10초가 된 것 같으면 다시 엔터를 누르세요!")
end = time.time()    # 끝난 시간을 기록합니다. (종료점)

# 걸린 시간 = 끝난 시간 - 시작 시간
result = end - start

# 소수점 둘째 자리까지 출력하는 방법입니다.
print("걸린 시간: {:.2f}초".format(result))

# 오차가 0.5초 이내면 성공으로 인정! (9.5초 ~ 10.5초)
if 9.5 <= result <= 10.5:
    print("대단해요! 거의 정확합니다.")
else:
    print("아쉽네요. 다시 도전해보세요!")
