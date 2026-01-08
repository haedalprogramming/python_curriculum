import random
import time

# 문제 은행 (리스트)
words = ["python", "variable", "function", "list", "keyboard", "coding", "school", "teacher", "student"]
score = 0 # 점수

print("준비하시고... (엔터를 누르면 시작)")
input()

start_time = time.time() # 시작 시간 기록

# 5문제를 출제합니다.
for i in range(1, 6):
    question = random.choice(words) # 랜덤 단어 선택
    print("\n문제", i, ":", question)
    
    answer = input("입력: ")
    
    if answer == question:
        print("통과!")
        score = score + 1
    else:
        print("오타! ㅠㅠ")

end_time = time.time() # 종료 시간 기록
total_time = end_time - start_time

print("----------------결과----------------")
print("총 걸린 시간: {:.2f}초".format(total_time))
print("맞은 개수: {} / 5".format(score))

if score == 5:
    print("완벽합니다! 타자왕 인정!")
else:
    print("조금 더 연습해보세요!")