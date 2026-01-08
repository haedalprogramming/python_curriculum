# io_concept.py
# 문자 입출력 개념 예제 (초보용, 주석을 읽고 실행해보세요)

# 1) 기본 출력
print("Hello, Python!")          # 한 줄 출력
print("안녕", "하세요")          # 쉼표로 여러 값 연결 (공백 자동 삽입)

# 2) print의 옵션: sep(구분자), end(끝문자)
print("2026", "01", "07", sep="-")   # sep="!" 구분자 변경
print("줄바꿈 없이 출력", end=" ... ")
print("계속 출력")                   # end를 바꿔서 줄바꿈 대신 이어쓰기

# 3) 입력 받기 (input) - 실행 시 키보드 입력 필요
name = input("이름을 입력하세요: ")
print("안녕하세요,", name, "님!")   # input 사용 예시 (주석 해제 후 사용)

# 4) input은 항상 문자열을 반환 -> 숫자로 바꾸려면 int/float 사용
# 예: 나이 입력 후 나이+1 출력
age_str = input("나이를 입력하세요: ")
age = int(age_str)
print("내년 나이:", age + 1)

# 5) 문자열 연결과 형 변환
num = 7
print("숫자 연결 예시: " + str(num))  # 숫자는 str()로 변환해야 연결 가능

# 6) 포맷팅 방법들
name = "지수"
score = 92.34567

# (a) 옛 방식: % 포맷
print("(옛날 포맷) %s님의 점수: %.1f" %(name, score))

# (b) str.format()
print("(format) {}님의 점수: {:.2f}".format(name, score))

# (c) f-string (파이썬 3.6+ 권장)
print(f"(f-string) {name}님의 점수: {score:.2f}")

# 7) 숫자 폭(width), 정렬, 천단위 구분기호 예시
val = 12345.6789
print(f"기본: {val}")
print(f"소수 둘째 자리: {val:.2f}")
print(f"폭 10, 소수 두 자리 정렬: {val:10.2f}")    # 전체 폭 10에 오른쪽 정렬
print(f"왼쪽 정렬: {val:<10.2f}")                 # 왼쪽 정렬
print(f"천단위 구분: {val:,.2f}")                 # 천단위 콤마

# 8) 여러 줄 출력(여러 값 포맷해서 보기 좋게)
name_list = ["민수", "지수", "영희"]
score_list = [88, 92, 79]
print("\n이름   점수")
print("----------------")
for i in range(len(name_list)):
    # 이름은 왼쪽 정렬 폭 4, 점수는 오른쪽 정렬 폭 3
    print(f"{name_list[i]:<4} {score_list[i]:>3}")