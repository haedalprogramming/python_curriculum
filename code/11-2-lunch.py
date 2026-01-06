import random  # 랜덤 기능을 쓰기 위해 도구를 가져옵니다.

# 메뉴 리스트를 만듭니다. (학생들이 좋아하는 메뉴로 바꿔보세요!)
menu_list = ["마라탕", "떡볶이", "돈까스", "삼겹살", "급식"]

# random.choice(리스트): 리스트 내용 중 하나를 무작위로 뽑습니다.
today_lunch = random.choice(menu_list)

print("오늘 점심은", today_lunch, "어때요?")