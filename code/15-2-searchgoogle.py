import webbrowser

# 사용자에게 검색하고 싶은 내용을 입력받습니다.
keyword = input("구글에서 검색할 내용을 입력하세요: ")

# 구글 검색 주소 형식에 검색어를 붙입니다.
url = "https://www.google.com/search?q=" + keyword

print(keyword, "(으)로 검색을 시작합니다...")
webbrowser.open(url)
