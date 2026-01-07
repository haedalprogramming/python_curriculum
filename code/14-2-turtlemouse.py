import turtle as t

t.shape("turtle")
t.color("green")
t.speed(3)

# 마우스를 클릭했을 때 실행될 함수(기능)를 만듭니다.
def move_to_click(x, y):
    print("클릭한 위치:", x, y)  # 콘솔에 좌표 출력
    t.goto(x, y)                 # 거북이를 클릭한 곳으로 이동

# 화면(Screen)을 클릭하면 move_to_click 함수를 실행하라고 명령합니다.
t.onscreenclick(move_to_click)

t.mainloop()
