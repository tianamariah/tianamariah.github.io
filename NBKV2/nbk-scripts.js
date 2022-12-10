// Navigation Event Listeners

let navItems = document.getElementsByClassName('navItem');
let navLinks = document.getElementsByClassName('navLink');

navItems[0].addEventListener("mouseover", function() {
  navItems[0].style.cursor = "pointer";
  navItems[0].style.backgroundColor = "#fdffb6";
  navItems[0].style.borderWidth = "1px";
  navLinks[0].style.color = "#000";
  navLinks[0].style.fontWeight = "300";
});

navItems[0].addEventListener("mouseout", function() {
  navItems[0].style.backgroundColor = "#fff";
  navLinks[0].style.color = "#000";
  navLinks[0].style.fontWeight = "100";
});

navItems[1].addEventListener("mouseover", function() {
  navItems[1].style.cursor = "pointer";
  navItems[1].style.backgroundColor = "#fdffb6";
  navItems[1].style.borderWidth = "1px";
  navLinks[1].style.color = "#000";
  navLinks[1].style.fontWeight = "300";
});

navItems[1].addEventListener("mouseout", function() {
  navItems[1].style.backgroundColor = "#fff";
  navLinks[1].style.color = "#000";
  navLinks[1].style.fontWeight = "100";
});

navItems[2].addEventListener("mouseover", function() {
  navItems[2].style.cursor = "pointer";
  navItems[2].style.backgroundColor = "#fdffb6";
  navItems[2].style.borderWidth = "1px";
  navLinks[2].style.color = "#000";
  navLinks[2].style.fontWeight = "300";
});

navItems[2].addEventListener("mouseout", function() {
  navItems[2].style.backgroundColor = "#fff";
  navLinks[2].style.color = "#000";
  navLinks[2].style.fontWeight = "100";
});

navItems[3].addEventListener("mouseover", function() {
  navItems[3].style.cursor = "pointer";
  navItems[3].style.backgroundColor = "#fdffb6";
  navItems[3].style.borderWidth = "1px";
  navLinks[3].style.color = "#000";
  navLinks[3].style.fontWeight = "300";
});

navItems[3].addEventListener("mouseout", function() {
  navItems[3].style.backgroundColor = "#fff";
  navLinks[3].style.color = "#000";
  navLinks[3].style.fontWeight = "100";
});


//Scroll Functionality for Sticky Nav
var fSec = document.getElementById('firstSection');
var sSec = document.getElementById('secondSection');
var w = window.innerWidth;

if (w < 960) {
  window.addEventListener("scroll", function() {
    sSec.style.marginTop = "189px";
    fSec.style.position = "fixed";
    fSec.style.width = "100%";
    fSec.style.zIndex = "2";
  });
}
else if (w > 960 ) {
  window.addEventListener("scroll", function() {
    sSec.style.marginTop = "90px";
    fSec.style.position = "fixed";
    fSec.style.width = "100%";
    fSec.style.zIndex = "2";
  });
}
