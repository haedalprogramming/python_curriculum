# ==========================================
# 텍스트 에디터 '실행 취소' 만들기
# ==========================================
# 스택(Stack)의 원리: LIFO (Last In, First Out)
# 파이썬 리스트의 append()가 Push, pop()이 Pop 역할을 합니다.

action_stack = []

print("📝 초간단 메모장 (명령어: 쓰기, 취소, 확인, 종료)")

while True:
    print("-" * 30)
    command = input("명령 입력 >> ")
    
    # 1. 쓰기 (Push): 스택에 데이터를 쌓음
    if command == "쓰기":
        word = input("적을 단어: ")
        action_stack.append(word)
        print(f"'{word}'을(를) 적었습니다.")
        
    # 2. 취소 (Pop): 스택의 맨 위(가장 최근) 데이터를 꺼냄
    elif command == "취소":
        # 주의! 스택이 비어있는데 끄집어내면 에러가 납니다.
        if len(action_stack) == 0:
            print("더 이상 취소할 작업이 없습니다! (스택 텅 빔)")
        else:
            deleted = action_stack.pop() # 맨 위 데이터 삭제
            print(f"실행 취소: '{deleted}' 삭제됨")
            
    # 3. 확인 (Peek): 현재 스택 상태 확인
    elif command == "확인":
        print(f"현재 메모장 상태: {action_stack}")
        
    elif command == "종료":
        break
    else:
        print("잘못된 명령어입니다.")

