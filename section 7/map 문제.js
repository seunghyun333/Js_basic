/*
초대자 명단 nmaeList 뒤에 "님"을 추가한 배열 return
*/

function solution(nameList) {
    return nameList.map((이름)=>`${이름}님`);
}