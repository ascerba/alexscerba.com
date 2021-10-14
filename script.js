function stickyTopNav() {
  var nav = document.querySelector('.nav');
  if (document.body.scrollTop > 194 || document.documentElement.scrollTop > 194) {
    if (document.querySelector('.sticky') == null) {
      nav.classList.toggle('sticky');
    }
  } else {
    if (document.querySelector('.sticky') != null) {
      nav.classList.toggle('sticky');
    }
  }
};

window.onscroll = function() {
  stickyTopNav();
};

function actionToggle() {
  var action = document.querySelector('.action');
  action.classList.toggle('active')
}
