const btnBoard = document.querySelector('#open');

const modalBox = document.querySelector('.black-bg');


  // js문법
  btnBoard.addEventListener( 'click', () => {
  modalBox.classList.add('show');
  });

  // jQuery
  // $('#open').on( 'click' , () => {
  //   $('.block-bg').addClass('show');
  // })

const btnClose = document.querySelector('#close');

btnClose.addEventListener( 'click', function () {

  modalBox.classList.remove('show');
  

});

