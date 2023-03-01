$(document).ready(function () {
    showPopup();
  });


  function showPopup() {
    if (localStorage.getItem('YesBtn') !== 1) {
      setTimeout(() => {
        $('#joinlist').modal('show');
        $('.close-modal').on('click', function () {
          localStorage.setItem('YesBtn', 1);
          $('#joinlist').modal('hide');
        })
      }, 5000);
    }
  }