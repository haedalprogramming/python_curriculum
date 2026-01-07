# ==========================================
# 게임 최고 점수 저장하기 (Save & Load)
# ==========================================

# 1. 파일 쓰기 (Save) - "w" 모드
# "w"는 Write의 약자. 파일이 없으면 만들고, 있으면 내용을 싹 지우고 새로 씁니다.
print("--- [1] 게임 종료! 점수 저장 중... ---")
score = 5000
name = "Mr.Kim"

# 파일 열기 (이름: score.txt, 모드: 쓰기, 인코딩: 한글깨짐방지)
f = open("score.txt", "w", encoding="utf-8")

# 파일에 내용 쓰기 (문자열만 가능하므로 str로 변환하거나 f-string 사용)
f.write(f"플레이어: {name}\n") # \n은 줄바꿈
f.write(f"점수: {score}\n")

f.close() # 중요! 파일을 닫아야 저장이 완료됩니다.
print("저장 완료! (score.txt 파일을 확인해보세요)")


# 2. 파일 읽기 (Load) - "r" 모드
# "r"은 Read의 약자. 있는 파일을 읽어옵니다.
print("\n--- [2] 게임 재시작! 점수 불러오는 중... ---")

try:
    f = open("score.txt", "r", encoding="utf-8")
    
    # 파일의 모든 내용을 읽어서 변수에 담기
    saved_data = f.read()
    
    print("[불러온 데이터]")
    print(saved_data)
    
    f.close()
    
except FileNotFoundError:
    print("저장된 점수 파일이 없습니다.")
