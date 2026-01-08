import time

# --- 1단계: 일기 쓰기 (저장) ---
print("--- 오늘의 일기를 작성하세요 (종료하려면 q 입력) ---")

# "a"는 append(추가) 모드입니다. 기존 내용 뒤에 이어 씁니다.
# encoding="utf-8"은 한글이 깨지지 않게 해줍니다.
f = open("diary.txt", "a", encoding="utf-8")

while True:
    data = input("내용: ")
    if data == "q":
        break
    
    # 파일에 쓸 내용 정리 (날짜 + 내용 + 줄바꿈)
    # strftime은 날짜를 예쁘게 문자열로 바꿔줍니다.
    now = time.strftime("%Y-%m-%d %H:%M")
    f.write("[" + now + "] " + data + "\n")

f.close() # 파일을 닫아야 저장이 완료됩니다.

print("\n--- 저장된 일기 읽어오기 ---")

# --- 2단계: 일기 읽기 (불러오기) ---
try:
    f = open("diary.txt", "r", encoding="utf-8") # "r"은 read(읽기) 모드
    print(f.read()) # 파일의 모든 내용을 읽어서 출력
    f.close()
except FileNotFoundError:
    print("아직 작성된 일기가 없습니다.")
