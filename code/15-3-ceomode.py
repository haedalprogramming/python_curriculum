import webbrowser
import time

# 내가 자주 가는 사이트 주소들을 리스트에 담습니다.
my_sites = [
    "https://www.naver.com",
    "https://www.youtube.com",
    "https://www.google.com"
]

print("업무 준비를 시작합니다. 사이트를 모두 엽니다.")

for site in my_sites:
    webbrowser.open(site)
    time.sleep(1)  # 너무 한꺼번에 열리면 렉 걸릴 수 있으니 1초씩 쉼

print("준비 완료!")
