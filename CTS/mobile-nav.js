var hamburger = document.getElementById('hamburger');
var mobileMenu = document.getElementById('navigation');

    hamburger.addEventListener("click", function() {
      hamburger.classList.toggle("is-active");
      mobileMenu.classList.toggle("open");

    }, false);


var closeMenu = document.getElementById('close-menu');

closeMenu.addEventListener("click", function() {
  mobileMenu.classList.toggle("open");
  hamburger.classList.toggle("is-active");
}, false);
