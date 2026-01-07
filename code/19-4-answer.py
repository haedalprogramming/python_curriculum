words = ["apple", "banana", "cat", "dog", "elephant", "fox"]

print(f"원래 단어들: {words}")

# --- [미션] 4글자 이상인 단어만 대문자로 변환하기 ---

# 1. 일반적인 방법으로 푼다면? (비교용)
temp_list = []
for w in words:
    if len(w) >= 4:
        temp_list.append(w.upper())
print(f"일반 풀이: {temp_list}")

# 2. 리스트 컴프리헨션으로 푼다면? (정답)
# [ (모양바꾸기) for (변수) in (리스트) if (조건) ]
final_list = [w.upper() for w in words if len(w) >= 4]

print("-" * 30)
print(f"정답 결과: {final_list}") 
# 결과: ['APPLE', 'BANANA', 'ELEPHANT']
