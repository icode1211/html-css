console.log('Hello Javascript!');

// 한 줄 주석은 슬래시 2개로 표시합니다.
/*
* 여러 줄 주석을 달아주세요
* 자바스크립트 주석과 자바의 주석은 같습니다
* */


let num1 = 10;
let num2 = 5;

// AND 연산자 : 둘 다 true여야 true
if (num1 > 5 && num2 < 10) {
    console.log("num1는 5보다 크고, num2는 10보다 작습니다.");
}

/* OR 연산자 : 하나라도 true이면 true, 둘 다 false여야 false */
if (num1 === 10 || num2 === 10) {
    console.log("두 숫자 중 하나가 10입니다.");
}

/* NOT 연산자 : 논리를 반대로 변환 */
let isTrue = true;
console.log(!isTrue); // false

/* 삼항 연산자 */
// let result = (num1 > num2) ? "num1이 더 큽니다." : "num2가 더 크거나 같습니다.";

let num3 = 7;
// let result =  (num3 % 2) ? "홀수" : "짝수";
let result =  (num3 % 2 === 0) ? "짝수" : "홀수";
console.log(result);		// 홀수


/* 형 변환 */
let num4 = 10;
let strNum = "10";
if (String(num4) === strNum) { // 숫자인 num을 문자열로 변환 후 비교
    console.log('equals');
}

/* if 조건절 퀴즈
성인 여부 판단하기
- 나이가 18세 이상일 경우 "Adult" 출력
- 성인이 아니라면 "Minor" 출력
*/
let age = 20;
if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor")
}
