/* 
거래처 사장님께는 100만원짜리 상품권번호를 전달하고 나머지 임원은 50만원을 전달해야함.
입력값이 name으로 주어질 때 사장님이라면 100만원짜리 번호를, 아니면 50만원 리턴
*/

function soluction(name){

    if (name === "나사장") {
        return "code100";
    } else {
        return "code50";
    }
}

//return name ==="나사장" ? "code100" : "code50";