/* 좋은 질문? 지적? 아무튼 감사합니다.

지난 번 발표한 사람들의 닉네임이 순서대론 담긴 배열 prev 와
새로 참여한 사람의 닉네임이 문자열 join으로 주어질 때
이번 스터디의 발표 순서가 담긴 배열을 return하는 함수 solution을 완성하기

조건:
join 은 길이 1 이상 10 이하인 문자열
배열 prev는 길이 2 이상 10 이하 


*/

/* 첫 번째 답 (조건을 생각하지 않음)
function soluction(prev, join) {
    const last = prev.pop();
    return prev.pop().shift(join).push(last);
}
*/

// shift : 배열에서 맨 처음 요소를 제거해주고 그 제거한 요소를 결과로 반환해주는 매서드 
// 스프레드 문법: 배열앞에 ...을 붙여 배열의 요소 꺼내오기

function solution(prev, join) {
    // [join, 나머지, 지난번_처음 발표자]
    const 지난발표자 = prev.shift();
    return [join, ...prev, 지난발표자];
}
