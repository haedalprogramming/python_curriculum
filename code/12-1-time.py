# ==========================================
# 시간 도구 상자 3총사 정복하기
# ==========================================
import time
import datetime

# ------------------------------------------
# (1) time.sleep(초) : 잠깐 멈추기 (얼음!)
# ------------------------------------------
print("--- [1] 3초간 얼음! (sleep) ---")
print("3...")
time.sleep(1) # 1초 멈춤
print("2...")
time.sleep(1)
print("1...")
time.sleep(1)
print("땡! 다시 움직입니다.")


# ------------------------------------------
# (2) time.time() : 걸린 시간 재기 (스톱워치)
# ------------------------------------------
print("\n--- [2] 속도 측정 (time) ---")
input("엔터를 누르면 측정을 시작합니다.")

start_time = time.time() # 시작 시각 기록 (현재 시간을 숫자로)

# 파이썬에게 100만 번 숫자를 세게 시켜봅시다.
for i in range(1000000):
    pass 

end_time = time.time()   # 종료 시각 기록

result = end_time - start_time
print(f"100만 번 세는데 걸린 시간: {result:.5f}초")


# ------------------------------------------
# (3) datetime : 날짜 계산기 (D-Day)
# ------------------------------------------
print("\n--- [3] D-Day 계산 (datetime) ---")
# 오늘 날짜 구하기
today = datetime.date.today()

# 목표 날짜 설정 (예: 다가올 크리스마스)
christmas = datetime.date(2026, 12, 25)

# 날짜끼리 뺄셈
d_day = christmas - today

print(f"오늘 날짜: {today}")
print(f"크리스마스까지 남은 날: {d_day.days}일")
