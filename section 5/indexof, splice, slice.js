 //벌레 퇴치

 /*
배열 feature에는 문자열 'code' 또는 'bug'가 담겨있습니다.
feature에 'bug'가 담겨 있다면 제거한 베열을 return 하는 함수 solution을 완성하시오
*/

/*
제한사항
bug의 개수는 0또는 1개
배열 feature의 길이는 1 이상 10 이하
*/

function solution(feature) {
    //1. 버그의 위치
    const 버그의_인덱스 = feature.indexOf('bug');
    if(버그의_인덱스 === -1) {
        return feature;
    }

    //2. 버그 제거한 배열 구하기 - splice
    return feature.splice(버그의_인덱스, 1);

    //2. 버그 제거한 배열 구하기 - slice
    const arr1 = feature.slice(0, 버그의_인덱스);
    const arr2 = feature.slice(버그의_인덱스+1); //끝까지 구할 땐 뒷 자리 비워둠

    return arr1.concat(arr2); // 이어 붙이기 concat
    //return [..arr1, ..arr2];
}