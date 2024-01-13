/*

개발자 원두는 랜덤으로 바코드 숫자를 만들어주는 기능을 개발하고 있습니다.

바코드는 0부터 9까지의 숫자 13자리로 이루어져 있습니다.

바코드에 들어갈 숫자들이 담긴 배열이 주어질 때

모든 0을 배열의 끝으로, 나머지는 순서를 유지한 배열을 return하는 함수 solution을 완성해주세요.
*/

function solution(barcode) {
    const 영모음 = [];
    const 나머지 =[];

    barcode.map((el) => {
        if (el === 0) {
            영모음.push(el);
        } else {
            나머지.push(el);
        }
    }
    
    );

    return [...나머지, ...영모음];
}