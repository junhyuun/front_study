const btns = document.querySelectorAll('.tab-button');
const contents = document.querySelectorAll('.tab-content');

function clearClassList() {
  for(let i=0; i<btns.length; i++){
    btns[i].classList.remove('selected');
    contents[i].classList.remove('show');
  }
}

btns[0].addEventListener('click', () => {
  clearClassList();

  btns[0].classList.add('selected');
  contents[0].classList.add('show');
});

btns[1].addEventListener('click', () => {
  clearClassList();

  btns[1].classList.add('selected');
  contents[1].classList.add('show');
});

btns[2].addEventListener('click', () => {
  clearClassList();

  btns[2].classList.add('selected');
  contents[2].classList.add('show');
});


