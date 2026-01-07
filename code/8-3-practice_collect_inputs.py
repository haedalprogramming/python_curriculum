# 사용법: 문자열을 입력하고, 종료하려면 q 입력

print("문자 입력을 계속 받습니다. 종료하려면 'q'만 입력하세요.")
collected = []   # 빈 리스트로 모을 예정
while True:
    s = input("입력: ").strip()
    if s == "q":
        print("입력 종료")
        break
    collected.append(s)
    print("현재 모인 항목:", collected)

print("최종 수집:", collected)