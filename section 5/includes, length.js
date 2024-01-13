/* 오점뭐

기존에 적어둔 메뉴 목록 배열 menuList
오늘 먹은 점심 메뉴 today

오늘 먹은 메뉴가 추가되는 새로운 메뉴 목록을 return 하는 solution 함수

조건: 이미 먹은 메뉴는 추가하지 않음, 10이 넘어가면 추가 안 함

*/

/* 첫 번째 답 (조건을 생각하지 않음)
function soluction(menuList, today) {
    return menuList.push(today);
}
*/

function soluction(menuList, today) {
    if(menuList.includes(today)) {
        return menuList;
    }

    if(menuList.length > 10) {
        return menuList;
    }

    return menuList.push(today);
}
