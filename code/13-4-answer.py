#  ==========================================
# [정답 코드] 도전 과제: 도형 마스터
#  ==========================================
import turtle as t

t.shape("turtle")
t.speed(5)
t.width(3)

# --- [미션 1] 정오각형 그리기 ---
t.color("purple")
t.up()
t.goto(-200, 0) # 왼쪽으로 이동
t.down()

print("오각형을 그립니다.")
for i in range(5):
    t.forward(100)
    t.left(72)  # 360 / 5 = 72도

# --- [미션 2] 별 그리기 ---
t.color("gold")
t.up()
t.goto(100, 0) # 오른쪽으로 이동
t.down()

print("별을 그립니다.")
for i in range(5):
    t.forward(150)
    t.right(144) # 별은 144도씩 꺾어야 뾰족해집니다.

t.hideturtle() # 다 그리면 거북이 숨기기
t.mainloop()
