// 비밀번호 만들기

//비밀번호를 생년월일에 회사 설립연도를 더한 숫자로 설정
//팀원 생년월일: birth,  설립연도: date
//retrun "비밀번호는 @@@@입니다."

function solution(birth,date) {
    const password = birth + date;
    return "비밀번호는 "+password+"입니다.";
}

//모범답
function solution(birth,date) {
    return '비밀번호는 ${birth+date}입니다.';
}