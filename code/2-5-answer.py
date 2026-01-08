# 아주 간단한 잔돈 계산기
# 사용법: 아래 price(물건값)와 paid(지불액) 값을 바꿔서 실행하세요.

price = 13580    # 물건값(원) -> 여기 값을 바꿔보세요
paid = 20000     # 지불액(원) -> 여기 값을 바꿔보세요

# 지불액이 부족한지 확인
if paid < price:
    print("지불액이 부족합니다.")
else:
    change = paid - price  # 잔돈 총액
    print("잔돈:", change, "원")

    # 큰 단위부터 하나씩 계산 (몫 //, 나머지 % 사용)
    n50000 = change // 50000
    change = change % 50000

    n10000 = change // 10000
    change = change % 10000

    n5000 = change // 5000
    change = change % 5000

    n1000 = change // 1000
    change = change % 1000

    n500 = change // 500
    change = change % 500

    n100 = change // 100
    change = change % 100

    n50 = change // 50
    change = change % 50

    n10 = change // 10
    change = change % 10  # 10원 미만 남음 (계산 불가 소액)

    # 결과 출력 (0개인 단위는 ��너뛰기)
    if n50000:
        print("50000원:", n50000, "개")
    if n10000:
        print("10000원:", n10000, "개")
    if n5000:
        print("5000원:", n5000, "개")
    if n1000:
        print("1000원:", n1000, "개")
    if n500:
        print("500원:", n500, "개")
    if n100:
        print("100원:", n100, "개")
    if n50:
        print("50원:", n50, "개")
    if n10:
        print("10원:", n10, "개")
    if change:
        print("남은 금액 (10원 미만):", change, "원")