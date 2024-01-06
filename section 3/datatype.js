// 자바스크립트 데이터 타입


/*
  Boolean 참, 거짓
  Null 존재하지 않음
  Undefined 값을 할당하지 않은 변수의 값
  Number숫자
  BigInt 큰 정수
  String 문자
  Symbol 고유한 값
  Object 객체

​*/

/*
어떤 타입인지 알아내는 연산자: typeof
괄호 안에 넣기 or 한 칸 띄고 적기
알고리즘 문제를 풀 때 자주 사용되는 유용한 연산자 
*/

typeof("문자열") === 'string'
typeof 123 === 'number'

/*
타입을 변환하는 메서드 
*/

//문자열을 숫자로 바꾸기
Number("123") === 123

//숫자를 문자열로 바꾸기
String(123) === "123"