students = []  # 학생 목록: 각 항목은 ['이름', [kor, eng, math]]

def calc_grade(avg):
    if avg >= 90:
        return "A"
    elif avg >= 80:
        return "B"
    elif avg >= 70:
        return "C"
    elif avg >= 60:
        return "D"
    else:
        return "F"

print("=== 학생 성적 관리자 ===")
while True:
    print("\n메뉴: 1)추가  2)목록  3)전체평균  4)종료")
    choice = input("선택(1-4): ").strip()

    if choice == "1":
        name = input("학생 이름: ").strip()
        try:
            kor = float(input("국어: ").strip())
            eng = float(input("영어: ").strip())
            math = float(input("수학: ").strip())
        except ValueError:
            print("점수는 숫자로 입력하세요. 추가 취소.")
            continue
        students.append([name, [kor, eng, math]])
        print(f"{name} 추가되었습니다.")

    elif choice == "2":
        if not students:
            print("등록된 학생이 없습니다.")
            continue
        print("\n학생 목록:")
        for idx, entry in enumerate(students, start=1):
            name, scores = entry[0], entry[1]
            total = scores[0] + scores[1] + scores[2]
            avg = total / 3
            grade = calc_grade(avg)
            print(f"{idx}. {name} - 점수: {scores} 총점:{total:.1f} 평균:{avg:.2f} 학점:{grade}")

    elif choice == "3":
        if not students:
            print("학생이 없습니다.")
            continue
        sum_avg = 0
        for entry in students:
            scores = entry[1]
            sum_avg += sum(scores) / 3
        class_avg = sum_avg / len(students)
        print(f"클래스 전체 평균: {class_avg:.2f}")

    elif choice == "4":
        print("프로그램을 종료합니다.")
        break

    else:
        print("잘못된 입력입니다. 1~4 중 선택하세요.")