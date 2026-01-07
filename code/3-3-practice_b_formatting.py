# 실습 B: 문자열 연결과 포맷 연습 (변수 변경해보기)

# 학생 정보를 변수로 설정
student_name = "민수"
grade = 2
score = 87.456

# 1) 간단한 연결(+)으로 메시지 만들기
msg1 = student_name + "의 성적은 " + str(score) + "점 입니다."
print(msg1)

# 2) f-string으로 소수 둘째자리까지 포맷해서 출력
msg2 = f"{student_name} (학년 {grade}) - 성적: {score:.2f}점"
print(msg2)

# 3) format() 사용 예시
msg3 = "{}님의 성적: {:.1f}점".format(student_name, score)
print(msg3)