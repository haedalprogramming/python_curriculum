# ==========================================
# [정답 코드] 도전 과제: ToDo 리스트 관리
# ==========================================
import time

filename = "todo.txt"

print("📝 나만의 할 일 목록 (ToDo List)")
print("-" * 30)

# --- [1단계] 기존 목록 불러오기 (Read) ---
try:
    f = open(filename, "r", encoding="utf-8")
    content = f.read()
    
    if content == "":
        print("할 일이 없습니다. 새로 추가해주세요!")
    else:
        print(content)
        
    f.close()
except FileNotFoundError:
    print("아직 저장된 목록이 없습니다.")

print("-" * 30)

# --- [2단계] 새로운 할 일 추가하기 (Append) ---
print("새로운 할 일을 입력하세요. (종료하려면 q)")

# 이어 쓰기 모드("a")로 열기
f = open(filename, "a", encoding="utf-8")

while True:
    task = input(">>> ")
    
    if task == "q":
        print("저장하고 종료합니다.")
        break
    
    # 파일에 예쁘게 저장하기 ( - 할일 )
    f.write(f"- {task}\n")

f.close() # 저장 완료
