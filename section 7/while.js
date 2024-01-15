// 반복문 while

//while (조건) {명령문}

let 나이 = 16;
while (나이 < 16) {
    console.log(나이, "입장불가");
    if(나이 === 19) continue;
   //if(나이 === 19) break; return을 써도 됨
    나이 = 나이+1;
}
console.log("끝");