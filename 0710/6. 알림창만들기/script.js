function showHide(state) {
  document.getElementById('ab').style.display = state;
  
// jQuery 문법
 $('#ab').css( 'display', state );

}

function showMsg(msg) {
  //JS문법
  document.querySelector('.alert').innerHTML = msg;

  // jQuery 문법
  $( '.alert' ).html(msg);
}