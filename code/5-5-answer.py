print("성적표 계산기")
print("국어, 영어, 수학 점수를 차례로 입력하세요 (예: 85 또는 85.5)")

# 입력 받기 (숫자 형식이 아니면 종료)
try:
    kor = float(input("국어 점수: ").strip())
    eng = float(input("영어 점수: ").strip())
    math = float(input("수학 점수: ").strip())
except ValueError:
    print("점수는 숫자로 입력해야 합니다. 프로그램을 종료합니다.")
    exit()

# 음수나 100초과 같은 일반적이지 않은 값 간단 검사 (경고만)
for v, name in [(kor, "국어"), (eng, "영어"), (math, "수학")]:
    if v < 0 or v > 100:
        print(f"경고: {name} 점수({v})가 일반 범위(0~100)를 벗어났습니다.")

# 계산
total = kor + eng + math
average = total / 3

# 학점 결정 (평균 기준)
if average >= 90:
    grade = "A"
elif average >= 80:
    grade = "B"
elif average >= 70:
    grade = "C"
elif average >= 60:
    grade = "D"
else:
    grade = "F"

# 출력: 정렬된 표 형태로 보기 좋게 표시
print("\n" + "=" * 30)
print(f"{'과목':<10}{'점수':>8}")
print("-" * 30)
print(f"{'국어':<10}{kor:>8.1f}")
print(f"{'영어':<10}{eng:>8.1f}")
print(f"{'수학':<10}{math:>8.1f}")
print("-" * 30)
print(f"{'총점':<10}{total:>8.1f}")
print(f"{'평균':<10}{average:>8.2f}")
print(f"{'학점':<10}{grade:>8}")
print("=" * 30)