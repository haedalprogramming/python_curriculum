# mini_quiz.py
# 종합 챌린지 1: 간단 퀴즈/성적 처리 (입출력 사용)
# 사용법: 실행 후 이름과 3과목 점수를 입력하세요.

print("=== Mini Quiz: 성적 계산 & 약어 만들기 ===")
name = input("이름(예: 홍 길 동 또는 Hong Gil Dong): ").strip()

# 세 과목 점수 입력
try:
    kor = float(input("국어 점수: ").strip())
    eng = float(input("영어 점수: ").strip())
    math = float(input("수학 점수: ").strip())
except ValueError:
    print("점수는 숫자로 입력해야 합니다. 종료합니다.")
    exit()

# 리스트로 다루기
scores = [kor, eng, math]
total = scores[0] + scores[1] + scores[2]
avg = total / 3

# 학점 계산
if avg >= 90:
    grade = "A"
elif avg >= 80:
    grade = "B"
elif avg >= 70:
    grade = "C"
elif avg >= 60:
    grade = "D"
else:
    grade = "F"

# 이름으로 약어(Acronym) 만들기: 공백으로 분할 후 각 단어의 첫 글자 대문자
parts = name.split()
acro = ""
for p in parts:
    if p:  # 빈 문자열 방지
        acro += p[0].upper()

# 출력
print("\n=== 결과 ===")
print(f"이름: {name}  (약어: {acro})")
print(f"점수: {scores}")
print(f"총점: {total:.1f}  평균: {avg:.2f}  학점: {grade}")

# 간단한 추가: 평균이 정수면 정수로, 아니면 소수로 보이게
if avg == int(avg):
    print("평균(정수 표기):", int(avg))
else:
    print("평균(소수 표기):", round(avg, 2))