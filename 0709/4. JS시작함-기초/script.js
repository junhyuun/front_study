// 알림창 띄우기
// alert("자바스크립트 파일만듬");

// 출력문 - 콘솔창에 띄움
console.log("콘솔창에 내용띄우기");

// html에 출력해주기
document.write("문서에 쓰기");

// 변수만들기
var 변수명; // 옛날거
let 변수이름;

let msg = 'hello';
console.log(msg);
msg = 20;
console.log(msg);

// 상수
const COLOR = 'red';
// COLOR = 'blue';

let n = 12.345;

console.log( typeof(n) );
console.log( typeof n );

// 실제로 나누기 0은 불가능하지만
// JS 수학적 연산은 전부 처리가 됨
// 대신 결과가 안나오는건 특수 숫자 값으로 처리
console.log( n / 0 );

console.log( "abc" / 2 );
console.log( typeof NaN);

// 문자
// js에서는 문자(열)은 쌍따옴표, 작은따옴표, 빽틱
let str1 = "abc";
let str2 = 'abc';
let str3 = `abc`;

// let result = Number( prompt('나이 입력해라') );
// console.log( typeof result );
// result = result + 1;
// console.log(result);

//confirm 메세지를 출력해주고 확인, 취소버튼이 있음
let re = confirm("메세지");
console.log(re);


