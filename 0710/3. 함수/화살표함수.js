// 화살표함수 : 자바에 람다와 유사함
// 함수작성하는 코드를 간결하게 만들 수 있음


//let sum = function(a,b){
// return a+ b;
// }



let sum = (a,b) => a+b;
let sum2 = (a,b) => {
  return a + b;
}

let a = () => {
  console.log('aaaa');
}

sum(10, 5);
a();