import time

print("게임을 시작합니다!")

# 3부터 1까지 거꾸로 셉니다. (-1은 1씩 줄어든다는 뜻)
for i in range(3, 0, -1):
    print(i)
    time.sleep(1)  # 1초 동안 아무것도 안 하고 멈춥니다.

print("시작!!!")
