print("\n--- 회문 판별기 ---")
word = input("단어를 입력하세요: ")

# 단어를 뒤집은 것과 원래 단어가 같은지 비교
if word == word[::-1]:
    print("O : 회문(팰린드롬)입니다!")
else:
    print("X : 회문이 아닙니다.")
