 //배열 자르기

 /*
cosnt arr = [0, 1, 2, 3, 4]
arr.splice(시작인덱스, 개수);

arr.splice(1,2); // arr: [0,3,4]
cosnt 자른거 = arr.splice(1,2);

자른거: [1,2]
arr: [0,3,4]
*/

/*
const arr = [0,1,2,3,4]
arr.slice(시작인덱스, 끝인덱스); // 끝인덱스 직전인덱스까지 잘라줌

arr.slice(1,3);
=> arr: [0,1,2,3,4]
슬라이스는 원본 배열은 건드리지 않고 결과만 반환

const 자른거 = arr.slice(1,3);
자른거 : [1,2]
arr: [0,1,2,3,4]

*/