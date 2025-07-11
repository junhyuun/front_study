const btn = document.querySelector('.btn');

// addEventListener 함수를 이용해서 이벤트 설정을 함
// 이벤트핸들러 : 이벤트 발생 시 실행할 코드, 함수
// 요소.addEventListener(이벤트종류, 이벤트핸들러)

// 이벤트 삭제
// 요소.removeEventListener(이벤트종류, 이벤트핸들러)

btn.addEventListener( 'click', function(){
  alert('zzzzz');
})

function handler() {
  alert("이건 지울수 있음");
}

btn.addEventListener('click', handler);
btn.removeEventListener('click', handler);

const btn2 = document.querySelector('.btn');

// 이벤트 객체 : 이벤트가 발생할 때 생기는 모든 정보를 가지고 있음
btn2.addEventListener('click', function(e) {
  console.log(e.type);
  console.log(e.clientx);
  console.log(e.target);
});

