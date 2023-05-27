//Scroll Functionality for Sticky Nav

const nav = document.getElementById("nav");
const banner = document.getElementById("mainBanner");

nav.style.position = "fixed";
nav.style.width = "500px";
banner.style.marginTop = "20%";

//Scroll Functionality for Sticky Nav

// Keeping 500px on Larger Screen Sizes
const w = window.innerWidth;
const site = document.getElementsByTagName("body");

if (w === 425) {
  nav.style.width = "425px";
  banner.style.width = "425px";
}

if (w === 375) {
  nav.style.width = "375px";
  banner.style.width = "375px";
}

if (w === 320) {
  nav.style.width = "320px";
  banner.style.width = "320px";
}
