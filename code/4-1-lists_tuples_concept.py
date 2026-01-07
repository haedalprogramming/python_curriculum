# 군집 자료형: 리스트와 튜플의 기본 예제 (주석을 읽고 실행해보세요)

# 리스트(list): 대괄호로 만들며, 값을 변경(수정/추가/삭제)할 수 있음
fruits = ["사과", "바나나", "귤"]
print("초기 리스트:", fruits)
print("첫번째 요소:", fruits[0])   # 인덱싱
print("뒤에서 두번째:", fruits[-2])

# 리스트 추가/삽입/삭제
fruits.append("포도")     # 맨 뒤에 추가
print("append 후:", fruits)
fruits.insert(1, "딸기") # 인덱스 1에 삽입
print("insert 후:", fruits)
fruits.remove("귤")      # 값으로 삭제 (같은 값이 여러개면 첫번째만)
print("remove 후:", fruits)
popped = fruits.pop()    # 마지막 요소를 꺼내 반환
print("pop한 값:", popped, "남은 리스트:", fruits)

# 길이와 반복
print("리스트 길이:", len(fruits))
print("for 반복으로 출력:")
for item in fruits:
    print("-", item)

# 인덱스로 반복 출력 (인덱스와 함께)
for i in range(len(fruits)):
    print(f"{i}번: {fruits[i]}")

# 슬라이싱(부분 리스트)
numbers = [1, 2, 3, 4, 5]
print("numbers[1:4] ->", numbers[1:4])  # 인덱스 1~3

# 튜플(tuple): 소괄호로 만들며, 한 번 만들면 수정 불가(immutable)
coords = (10, 20)
print("튜플 좌표:", coords)
# coords[0] = 5  # 오류: 튜플은 수정할 수 없음

# 리스트와 튜플의 변환
t = tuple(fruits)   # 리스트 -> 튜플
l = list(coords)    # 튜플 -> 리스트
print("튜플화:", t, "리스트화:", l)

# 리스트 합치기 / 반복 / 멤버십
a = [1, 2]
b = [3, 4]
print("합치기 a + b:", a + b)
print("반복 a * 2:", a * 2)
print("멤버십: 2 in a ->", 2 in a)