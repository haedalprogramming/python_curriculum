import turtle as t  # turtle을 매번 치기 귀찮으니 t라는 별명으로 부릅니다.

t.shape("turtle")   # 커서 모양을 거북이로 바꿉니다.
t.speed(3)          # 거북이 속도 (1:느림 ~ 10:빠름)
t.color("blue")     # 펜 색깔을 파란색으로 설정

# 1. 사각형 그리기 (4번 반복)
for i in range(4):
    t.forward(100)  # 앞으로 100만큼 전진
    t.left(90)      # 왼쪽으로 90도 회전 (직각)

# 2. 위치 이동 (그림 안 그려지게 펜 들고 이동)
t.up()              # 펜 들기
t.goto(200, 0)      # x좌표 200, y좌표 0 위치로 이동
t.down()            # 펜 내리기 (다시 그릴 준비)
t.color("red")      # 펜 색깔 빨간색으로 변경

# 3. 삼각형 그리기 (3번 반복)
for i in range(3):
    t.forward(100)
    t.left(120)     # 삼각형의 외각은 120도
