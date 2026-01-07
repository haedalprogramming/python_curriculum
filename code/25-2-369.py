# 문제: 1부터 20까지 숫자를 세는데, 3, 6, 9가 들어가는 숫자에서는 박수("짝!")를 쳐야 합니다.
# 힌트: 숫자를 문자열(str)로 바꾸면 '3'이 들어있는지 검사하기 쉽습니다.
print("--- 369 게임 시작 ---")

for i in range(1, 21):
    # 숫자를 문자로 변환 (예: 13 -> "13")
    s_num = str(i)
    
    # 박수 칠 횟수 계산 (3, 6, 9가 몇 개 있는지)
    clap_count = s_num.count('3') + s_num.count('6') + s_num.count('9')
    
    if clap_count > 0:
        print("짝!" * clap_count)
    else:
        print(i)
