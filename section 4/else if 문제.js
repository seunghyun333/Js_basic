/* 
0-3세: "분유스틱
4-7세: "초콜릿과 사탕"
나머지: "쿠키"
*/

function soluction(age){

    if (age < 4) {
        return "분유스틱";
    } else if(age <8){
        return "초콜릿과 사탕";
    } else {
        return "쿠키";
    }
}

