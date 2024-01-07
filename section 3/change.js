// 덧셈 계산기



/*
문자열 타입으로 된 숫자를 입력해도 제대로 작동하도록 고치기
입력값 num1, num2
num1과 num2의 합을 return
*/

function solution(num1, num2) {
  return Number(num1) + Number(num2);
}

//문자열을 숫자로 바꾸기
Number("123") === 123

//숫자를 문자열로 바꾸기
String(123) === "123"