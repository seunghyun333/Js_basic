// 반복문 while

/*
예약된 손님 리스트 list
수용 가능한 예약자 수 limit
새로 예약 신청된 손님의 수 reports가 매개변수로 주어질 때
새로 예약을 신청한 손님을 받을 수 있는지 boolean으로 return 
*/

function solution(list, limit, reports) {
    let 총합 = 0 ;
    let 인덱스 = 0;
    while(list.length) {
        총합 = 총합 + list.splite(인덱스);
        인덱스 = 인덱스 +1;
    }

    return 총합 + reports <= limit;
    
}