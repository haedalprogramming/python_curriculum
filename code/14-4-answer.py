# ==========================================
# [정답 코드] 도전 과제: 마우스 따라다니기
# ==========================================
import turtle as t
import random

t.shape("turtle")
t.speed(5)
t.width(3)
t.color("green")

# --- 클릭했을 때 실행할 함수(기능) 정의 ---
# 이 함수는 마우스가 클릭된 위치의 x, y 좌표를 자동으로 받습니다.
def move_to_mouse(x, y):
    print(f"클릭 감지! 좌표: ({x}, {y})")
    
    # 1. 펜 색깔 랜덤 변경
    t.color(random.choice(["red", "blue", "green", "purple", "orange"]))
    
    # 2. 클릭한 위치로 이동
    # 선을 긋고 싶으면 t.down() 상태 유지, 
    # 선 없이 이동만 하려면 t.up() -> t.goto() -> t.down()
    t.goto(x, y)
    
    # 3. 도장 찍기 (발자국 남기기)
    t.stamp() 

# --- 메인 실행 부분 ---
print("화면의 아무 곳이나 클릭해보세요!")

# 화면(screen)을 클릭하면 move_to_mouse 함수를 실행해라! (괄호 없음 주의)
t.onscreenclick(move_to_mouse)

t.mainloop()
