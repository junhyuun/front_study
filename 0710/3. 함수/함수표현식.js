// 함수 선언문
function hello() {
  console.log('hello');
}
// 함수 표현식
let hi = function() {
  console.log('hi');
}

// 콜백 함수

function yes() {
  console.log("예");
}


let no = function(){
  console.log("아니오");
}

no = function() {

}

function check(question, ok, cancle) {
  if(question === 'y')
    ok();
  else
    cancle();

}

check('ay', yes, no);

function buy(item, price, stock, callback) {
  console.log(`${item}`)
}

function pay(n) {
  console.log(`총 금액 : ${n}`);
}

function pay2(n) {
  console.log(`총 금액(할인적용) : ${n * 0.9}`);
}

if(할인적용여부 === 'y'){
  buy("컴퓨터", 100, 2, pay2);
}else {
  buy("컴퓨터", 100,2 ,pay);
}



//setUnterval(콜백함수, 시간)
setInterval(console.log('a'),1000);


// 