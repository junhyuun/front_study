const btn = document.querySelector('.btn-mode');
const body = document.body;
let isDark = false;

btn.addEventListener('click', () => {

  if(isDark) {
    body.style.background = 'white';
    body.style.color = 'black';
    btn.value = '다크모드';
    isDark = !isDark;
  }else {
    body.style.background = 'black';
    body.style.color = 'white';
    btn.value = '라이트모드';
    isDark = !isDark;
  }
  
});


btn.addEventListener('click', () => {
  // 다크도므이면 true, 아니면 false
  let isDark = false;

});
