//선택자를 이용해서 요소를 선택할수 있음
const box2 = document.querySelector('#box');
box2.style.color = 'white'


// 선택자에 해당하는 요소 중 첫번째꺼 하나만
// const bg = document.querySelector('.bg');
// bg.style.background = 'pink';

// 선택자에 해당하는 모든 요소들을 가져옴
const bg = document.querySelector('.bg');
// bg[0].style.background = 'pink'
// bg[1].style.background = 'pink'

// for(let i=0; i<bg.lenght; i++) {
//   bg[i].style.background = 'pink';
// }

// for ... in : object반복할때

for(let b of bg) {
  b.style.background = 'pink';
}

const li = document.querySelectorAll('ul > li');
