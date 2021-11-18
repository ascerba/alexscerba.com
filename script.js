function stickyTopNav() {
  var nav = document.querySelector('.nav');
  var header = document.querySelector('.header');
  if (document.body.scrollTop > 194 || document.documentElement.scrollTop > 194) {
    if (document.querySelector('.sticky') == null) {
      nav.classList.toggle('sticky');
      header.classList.toggle('sticky');
    }
  } else {
    if (document.querySelector('.sticky') != null) {
      nav.classList.toggle('sticky');
      header.classList.toggle('sticky');
    }
  }
};

window.onscroll = function() {
  stickyTopNav();
};

window.onload = function() {
  stickyTopNav();
};

function actionToggle() {
  var action = document.querySelector('.action');
  action.classList.toggle('active')
}

/*// https://stackoverflow.com/questions/17534661/make-anchor-link-go-some-pixels-above-where-its-linked-to

// The function actually applying the offset
function offsetAnchor() {
  if (location.hash.length !== 0) {
    window.scrollTo(window.scrollX, window.scrollY - 69);
  }
}

// Captures click events of all <a> elements with href starting with #
document.addEventListener('click', 'a[href^="#"]', function(event) {
  // Click events are captured before hashchanges. Timeout
  // causes offsetAnchor to be called after the page jump.
  window.setTimeout(function() {
    offsetAnchor();
  }, 0);
});

// Set the offset when entering page with hash present in the url
window.setTimeout(offsetAnchor, 0);*/