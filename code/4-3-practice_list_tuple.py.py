# 실습 B: 리스트와 튜플의 차이와 간단한 활용 예시

# 리스트는 변경 가능
students = ["민수", "지수", "영희"]
print("학생 리스트:", students)
students[1] = "하늘"   # 이름 변경 가능
print("수정 후:", students)

# 튜플은 변경 불가, 변경하려면 다시 만들어야 함
point = (3, 5)
print("튜플 좌표:", point)
# point[0] = 10  # 이 줄의 주석을 해제하면 오류 발생 (튜플은 불변)

# 리스트와 튜플 변환
t = tuple(students)
print("튜플로 변환:", t)
new_list = list(t)
new_list.append("새학생")   # 다시 리스트로 바꾸면 수정 가능
print("다시 리스트로 변환 후 추가:", new_list)

# 다중 할당(unpacking) - 여러 변수를 한 번에 할당
a, b, c = students[:3]  # students의 처음 세 요소를 변수로 받기
print("a, b, c =", a, b, c)