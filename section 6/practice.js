/*
각각의 직원들이 받은 투표의 결과가 

vote 배열에 사원 번호가 1번인 직원의 득표수부터 

순서대로 담겨 매개변수로 주어질 때,

가장 많은 표를 받은 직원의 사원 번호를 return 하는 solution 함수를 완성해 주세요.
*/

function solution(vote) {
    const 최다득표수 = Math.max(...vote);

    const 최다득표수_인덱스 = vote.indexOF(최다득표수);

    //배열의 인덱스는 0부터 시작하므로,
    const 직원번호 = 최다득표수_인덱스+1; 

    return 직원번호;
}