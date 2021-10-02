function stickyTopNav() {
  var fixed_block_nav = document.getElementById("fixed-block-navigation").style;
  var content = document.getElementById("header");
  if (content.clientWidth > 510 && (document.body.scrollTop > 175 || document.documentElement.scrollTop > 175)) {
    fixed_block_nav.display = "inline-block";

  } else {
    fixed_block_nav.display = "none";
  }
};

function stickySideNav() {
  var side_nav = document.getElementById("side-navigation").style;
  var main_w_aside = document.getElementById("main-w-aside").style;
  if (document.body.scrollTop > 175 || document.documentElement.scrollTop > 175) {
    side_nav.position = "fixed";
    side_nav.left = "0";
    side_nav.top = "79px";
    main_w_aside.marginLeft = "17%";    
  } else {
    side_nav.position = "relative";
    side_nav.left = "auto";
    side_nav.top = "auto";
    main_w_aside.marginLeft = "0";
  }
};

window.onscroll = function() {
  stickyTopNav();
};

function navToggle() {
  document.getElementById("dropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropdown_button')) {
    var dropdowns = document.getElementsByClassName("dropdown_content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}