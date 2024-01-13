// 이번 달 신작이 나왔잖아? 

/*

피규어의 가격 57,000원
상여금 money원이 매개변수로 주어질 때 최대로 살 수 있는 피규어의 수 return 

*/

function solution(money) {
    return Math.floor(money / 57000); // 내림 처리
}