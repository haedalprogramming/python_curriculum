# practice_b_receipt.py
# 실습 B: 영수증(영수증 스타일) 출력 연습
# 사용법: 아래 변수 값을 바꿔서 실행해보세요. (입력 대신 변수 사용)

store = "코딩마트"
item = "파이썬 책"
price = 19800    # 원 단위
qty = 2

total = price * qty

print("-" * 30)
print(f"{store:^30}")          # 상호명을 가운데 정렬
print("-" * 30)
# 항목: 왼쪽정렬 폭 15, 수량: 오른쪽정렬 폭 3, 단가: 오른쪽정렬 폭 8
print(f"{'상품':<15}{'수량':>3}{'단가':>8}")
print(f"{item:<15}{qty:>3}{price:>8,}")  # 단가에 천단위 콤마 표시
print("-" * 30)
print(f"{'합계':<15}{total:>15,}")       # 합계는 큰 폭으로 정렬
print("-" * 30)
print("감사합니다!")