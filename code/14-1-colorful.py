import turtle as t
import random

t.shape("turtle")
t.speed(0)          # 0은 최고 속도입니다.
t.bgcolor("black")  # 배경을 검은색으로

colors = ["red", "yellow", "blue", "green", "white", "orange"]

# 300번 반복해서 선을 긋습니다.
for i in range(300):
    # 펜 색깔을 리스트에서 랜덤으로 고릅니다.
    t.color(random.choice(colors))
    
    # i 값은 0부터 299까지 점점 커집니다.
    t.forward(i)    # 처음엔 조금 가고, 갈수록 많이 갑니다.
    t.left(91)      # 90도가 아니라 91도를 돌면 조금씩 비틀어집니다.

t.mainloop()
