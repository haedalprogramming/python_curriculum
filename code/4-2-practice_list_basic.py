# 문자열 리터럴: 작은따옴표(') 또는 큰따옴표(") 사용 가능
s1 = 'Hello'
s2 = "World"
print(s1, s2)

# 따옴표 포함, 이스케이프 문자
quote = "She said, \"Hello!\""   # 큰따옴표 안에 큰따옴표를 넣을 때 \ 사용
print(quote)
quote = 'hello "world!"'   # 작은 따옴표 안에 큰따옴표를 넣을 때는 그냥 넣어도됨
print(quote)
quote = "hello 'world!'"   # 큰 따옴표 안에 작은 따옴표를 넣을 때는 그냥 넣어도됨
print(quote)
path = "C:\\Users\\me"          # 백슬래시 쓸 때 이스케이프
print(path)

# 인덱싱 (0부터 시작) - 특정 문자 가져오기
txt = "Python"
print("첫 문자:", txt[0])   # 'P'
print("마지막 문자:", txt[-1])  # 'n' (역방향 인덱스)

# 슬라이싱: 부분 문자열 가져오기 (시작:끝:스텝)
s = "abcdefg"
print("s[1:4] ->", s[1:4])     # 인덱스 1부터 3까지 (bcd)
print("s[:3] ->", s[:3])       # 시작을 생략하면 0부터
print("s[3:] ->", s[3:])       # 끝을 생략하면 끝까지
print("s[::2] ->", s[::2])     # 한 칸씩 건너뛰기 (aceg)
print("전체 뒤집기 s[::-1] ->", s[::-1])  # 역순 문자열

# 문자열은 불변(immutable) - 글자 한 개를 대입으로 바꿀 수 없음
# s[0] = 'X'  # 오류 발생 (주석 처리)

# 연결과 반복
a = "Hi"
b = "!"
print("연결:", a + b)    # "Hi!"
print("반복:", a * 3)    # "HiHiHi"

# 길이와 형 변환
msg = "안녕하세요"
print("길이(len):", len(msg))
num = 123
print("문자열로 변환:", str(num))

# 포맷팅 (f-string과 format)
name = "지수"
age = 16
print(f"{name}님은 {age}살입니다.")         # f-string
print("{}님은 {}살입니다.".format(name, age))  # format

# 대소문자 변환, 찾기, 교체, 분할/합치기
s = "Hello Python"
print(s.upper())            # 대문자
print(s.lower())            # 소문자
print(s.find("Py"))         # 찾기 시작 인덱스 (없으면 -1)
print(s.replace("Python", "World"))  # 교체
words = s.split()           # 공백 기준 분할 -> 리스트
print("분할:", words)
print("합치기:", "-".join(words))  # 리스트를 문자열로 합치기