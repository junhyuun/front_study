// 객체(object) - 자바에서 Map과 유사
// key, value가 한쌍으로 구성
let user = {
  name: '홍길동',
  age: 20
  
}

console.log(user.name);
console.log(user.age);
console.log(user['age']);
console.log(user['math score']);


const member = {
  name : '홍길동',
  age : 20
}

console.log(user);
user = 10;
console.log(user);

// 당연히 상수니까 변경을 못함
// member = 10;

member.name = "김자바";
console.log(member);

console.log(member[key]);

let item = "사과";

let cart = {
  [item] : 5
}

console.log(cart);



// 10명의 회원정보가 각각 담긴 객체 10개를 생성
function makeUserObject(name, age) {
  let obj = {
    name : name,
    age : age
  };
  return obj;

}

let a = makeUserObject('홍길동', 20);
let b = makeUserObject('김자바', 11);
console.log(a,b);
// key, value 추가하기
a.addr = "강동구";
console.log(a);
// 삭제하기
delete a.addr;
console.log(a);

// name : '김자바' , age : 20

let {age, ...r}=a;

console.log(age);
console.log(r);

console.log({...r, age : 30})

// in연산자로 키가 있는지 없는지
console.log( "name" in a);
console.log("ㅁㄴㅇ"in a);

for(let key in a){
  console.log(``)
}