/* 프로젝트 명세서

프로젝트에서 사용된 기술 스택의 이름이 배열 stacks 으로 주어질 때
내림차순으로 정렬하여 return하는 함수 solution 완성하기

조건:
stacks의 길이는 1 이상 10 이하
stacks의 각 단어의 길이는 1 이상 10 이하의 문자열
stacks의 단어들은 영문 소문자로만 이루어져 있음

*/

/* 첫 번째 답 (조건을 생각하지 않음)
function soluction(stacks) {
    return stakcs.sort();
}
*/

// sort() 오름차순
// reverse() 반대로

function solution(stacks) {
    return stacks.sort().reverse();
}
