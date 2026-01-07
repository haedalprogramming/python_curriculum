sentence = "Python is Fun"   # 예: "Python is Fun"

# 약어 만들기: 각 단어의 첫 글자만 대문자로 이어붙이기
words = sentence.split()     # 공백으로 분할
acro = ""
for w in words:
    acro = acro + w[0].upper()
print("문장:", sentence)
print("약어(Acronym):", acro)  # 예: PIF