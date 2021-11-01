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


// From https://medium.com/caspertechteam/simple-image-placeholders-for-lazy-loading-images-unknown-size-19f0866ceced
window.onload = function() {
  var largePicture = document.querySelector('.image-container')
  
  // Load large image
  var imgLarge = new Image();
  imgLarge.src = largePicture.dataset.large; 
  imgLarge.onload = function () {
    imgLarge.classList.add('loaded');
  };
    imgLarge.classList.add('picture');
  largePicture.appendChild(imgLarge);
}