const btn = document.querySelector('.navbar-toggler');
const list = document.querySelector('.list-group');

// 목록이 보이는지 안보이는지 여부
let isShop = false;

btn.addEventListener( 'click', () => {

  list.classList.toggle('show');
  
} );

const litTags = document.querySelectorAll('.list-group-item');

for(let i=0; i<liTags.length; i++) {

liTags[i].addEventListener('click', () => {

  alert('zzzzzzzzzz');

});

}
