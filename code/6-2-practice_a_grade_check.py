# 실습 A: 성적 판정 (input 사용)
# 실행 후 점수를 입력하면 학점을 출력합니다. (100점 만점 기준)

print("성적 판정기")
try:
    score = float(input("점수를 입력하세요 (0-100): ").strip())
except ValueError:
    print("숫자를 입력해야 합니다.")
    exit()

if score < 0 or score > 100:
    print("점수 범위(0-100)를 벗어났습니다.")
else:
    if score >= 90:
        grade = "A"
    elif score >= 80:
        grade = "B"
    elif score >= 70:
        grade = "C"
    elif score >= 60:
        grade = "D"
    else:
        grade = "F"
    print(f"점수: {score:.1f} -> 학점: {grade}")