//Adding Meta El to Head
let head = document.getElementsByTagName("head");
let newMetaEl = document.createElement('meta');
newMetaEl.name = "viewport";
newMetaEl.content = "width=device-width, initial-scale=1";
head[0].appendChild(newMetaEl);
console.log(head);


//Scroll Functionality for Sticky Nav
let fSec = document.getElementById('firstSection');
let heder = document.getElementById('header');
let sSec = document.getElementById('secondSection');
let title = document.getElementById('title');
let tagLine = document.getElementById('tagline');
let btnLinks = document.getElementsByClassName('btnLink');
const w = window.innerWidth;

if (w <= 768 ) {

  fSec.style.display = "none";

  window.addEventListener("scroll", function() {
    header.style.animationName = "none";
    btnLinks[1].style.animationName = "none";
    fSec.style.display = "block";
    fSec.style.position = "fixed";
    fSec.style.width = "100%";
    fSec.style.zIndex = "10";
    fSec.style.boxShadow = "rgb(0 0 0 / 19%) 0px 10px 20px, rgb(0 0 0 / 23%) 0px 6px 6px";
    fSec.style.backgroundColor = "rgba(0,0,0,.5)";
    sSec.style.marginTop = "104px";
    navItems[0].style.backgroundColor = "rgba(255,255,255,.6)";
    navItems[1].style.backgroundColor = "rgba(255,255,255,.6)";
    navItems[2].style.backgroundColor = "rgba(255,255,255,.6)";
    navItems[3].style.backgroundColor = "rgba(255,255,255,.6)";
    navItems[4].style.backgroundColor = "rgba(255,255,255,.6)";
    navItems[7].style.backgroundColor = "rgba(255,255,255,.6)";
    navItems[6].style.backgroundColor = "rgba(255,255,255,.6)";
    navItems[7].style.backgroundColor = "rgba(255,255,255,.6)";
  });

}

else if (w <= 960) {

  window.addEventListener("scroll", function() {
    header.style.animationName = "none";
    btnLinks[1].style.animationName = "none";
    fSec.style.position = "fixed";
    fSec.style.width = "100%";
    fSec.style.zIndex = "10";
    fSec.style.boxShadow = "rgb(0 0 0 / 19%) 0px 10px 20px, rgb(0 0 0 / 23%) 0px 6px 6px";
    fSec.style.backgroundColor = "rgba(0,0,0,.5)";
    sSec.style.marginTop = "0px";
    navItems[0].style.backgroundColor = "rgba(255,255,255,.6)";
    navItems[1].style.backgroundColor = "rgba(255,255,255,.6)";
    navItems[2].style.backgroundColor = "rgba(255,255,255,.6)";
    navItems[3].style.backgroundColor = "rgba(255,255,255,.6)";
    navItems[4].style.backgroundColor = "rgba(255,255,255,.6)";
    navItems[7].style.backgroundColor = "rgba(255,255,255,.6)";
    navItems[6].style.backgroundColor = "rgba(255,255,255,.6)";
    navItems[7].style.backgroundColor = "rgba(255,255,255,.6)";
  });
}
else if (w > 960 ) {

  window.addEventListener("scroll", function() {
    header.style.animationName = "none";
    btnLinks[1].style.animationName = "none";
    fSec.style.position = "fixed";
    fSec.style.width = "100%";
    fSec.style.zIndex = "10";
    fSec.style.boxShadow = "rgb(0 0 0 / 19%) 0px 10px 20px, rgb(0 0 0 / 23%) 0px 6px 6px";
    fSec.style.backgroundColor = "rgba(0,0,0,.5)";
    navItems[0].style.backgroundColor = "rgba(255,255,255,.6)";
    navItems[1].style.backgroundColor = "rgba(255,255,255,.6)";
    navItems[2].style.backgroundColor = "rgba(255,255,255,.6)";
    navItems[3].style.backgroundColor = "rgba(255,255,255,.6)";
    navItems[4].style.backgroundColor = "rgba(255,255,255,.6)";
    navItems[7].style.backgroundColor = "rgba(255,255,255,.6)";
    navItems[6].style.backgroundColor = "rgba(255,255,255,.6)";
    navItems[7].style.backgroundColor = "rgba(255,255,255,.6)";
  });
};

// Navigation Event Listeners
let navItems = document.getElementsByClassName('navItem');
let navLinks = document.getElementsByClassName('navLink');

navItems[0].addEventListener("mouseover", function() {
  navItems[0].style.backgroundColor = "#fff";
  navItems[0].style.cursor = "pointer";
  navItems[0].style.boxShadow = "0px 3px 8px rgba(0, 0, 0, 0.24)";
  navLinks[0].style.fontWeight = "400";
  navLinks[0].style.color = "#000";
});

navItems[0].addEventListener("mouseout", function() {
  navItems[0].style.backgroundColor = "rgba(255,255,255,.6)";
  navItems[0].style.boxShadow = "none";
  navLinks[0].style.fontWeight = "400";
  navLinks[0].style.color = "#fff";
});

navItems[1].addEventListener("mouseover", function() {
  navItems[1].style.backgroundColor = "#fff";
  navItems[1].style.cursor = "pointer";
  navItems[1].style.boxShadow = "0px 3px 8px rgba(0, 0, 0, 0.24)";
  navLinks[1].style.fontWeight = "400";
  navLinks[1].style.color = "#000";
});

navItems[1].addEventListener("mouseout", function() {
  navItems[1].style.backgroundColor = "rgba(255,255,255,.6)";
  navItems[1].style.boxShadow = "none";
  navLinks[1].style.fontWeight = "400";
  navLinks[1].style.color = "#fff";
});

navItems[2].addEventListener("mouseover", function() {
  navItems[2].style.backgroundColor = "#fff";
  navItems[2].style.cursor = "pointer";
  navItems[2].style.boxShadow = "0px 3px 8px rgba(0, 0, 0, 0.24)";
  navLinks[2].style.fontWeight = "400";
  navLinks[2].style.color = "#000";
});

navItems[2].addEventListener("mouseout", function() {
  navItems[2].style.backgroundColor = "rgba(255,255,255,.6)";
  navItems[2].style.boxShadow = "none";
  navLinks[2].style.fontWeight = "400";
  navLinks[2].style.color = "#fff";
});

navItems[3].addEventListener("mouseover", function() {
  navItems[3].style.backgroundColor = "#fff";
  navItems[3].style.cursor = "pointer";
  navItems[3].style.boxShadow = "0px 3px 8px rgba(0, 0, 0, 0.24)";
  navLinks[3].style.fontWeight = "400";
  navLinks[3].style.color = "#000";
});

navItems[3].addEventListener("mouseout", function() {
  navItems[3].style.backgroundColor = "rgba(255,255,255,.6)";
  navItems[3].style.boxShadow = "none";
  navLinks[3].style.fontWeight = "400";
  navLinks[3].style.color = "#fff";
});

navItems[4].addEventListener("mouseover", function() {
  navItems[4].style.backgroundColor = "#fff";
  navItems[4].style.cursor = "pointer";
  navItems[4].style.boxShadow = "0px 3px 8px rgba(0, 0, 0, 0.24)";
  navLinks[4].style.fontWeight = "400";
  navLinks[4].style.color = "#000";
});

navItems[4].addEventListener("mouseout", function() {
  navItems[4].style.backgroundColor = "rgba(255,255,255,.6)";
  navItems[4].style.boxShadow = "none";
  navLinks[4].style.fontWeight = "400";
  navLinks[4].style.color = "#fff";
});

navItems[5].addEventListener("mouseover", function() {
  navItems[5].style.backgroundColor = "#fff";
  navItems[5].style.cursor = "pointer";
  navItems[5].style.boxShadow = "0px 3px 8px rgba(0, 0, 0, 0.24)";
  navLinks[5].style.fontWeight = "400";
  navLinks[5].style.color = "#000";
});

navItems[5].addEventListener("mouseout", function() {
  navItems[5].style.backgroundColor = "rgba(255,255,255,.6)";
  navItems[5].style.boxShadow = "none";
  navLinks[5].style.fontWeight = "400";
  navLinks[5].style.color = "#fff";
});

navItems[6].addEventListener("mouseover", function() {
  navItems[6].style.backgroundColor = "#fff";
  navItems[6].style.cursor = "pointer";
  navItems[6].style.boxShadow = "0px 3px 8px rgba(0, 0, 0, 0.24)";
  navLinks[6].style.fontWeight = "400";
  navLinks[6].style.color = "#000";
});

navItems[6].addEventListener("mouseout", function() {
  navItems[6].style.backgroundColor = "rgba(255,255,255,.6)";
  navItems[6].style.boxShadow = "none";
  navLinks[6].style.fontWeight = "400";
  navLinks[6].style.color = "#fff";
});

navItems[7].addEventListener("mouseover", function() {
  navItems[7].style.backgroundColor = "#fff";
  navItems[7].style.cursor = "pointer";
  navItems[7].style.boxShadow = "0px 3px 8px rgba(0, 0, 0, 0.24)";
  navLinks[7].style.fontWeight = "400";
  navLinks[7].style.color = "#000";
});

navItems[7].addEventListener("mouseout", function() {
  navItems[7].style.backgroundColor = "rgba(255,255,255,.6)";
  navItems[7].style.boxShadow = "none";
  navLinks[7].style.fontWeight = "400";
  navLinks[7].style.color = "#fff";
});




//Hover over serviceBox'
let sBoxs = document.getElementsByClassName('serviceBox');
let sParas = document.getElementsByClassName('sdP');
let sImgs = document.getElementsByClassName('sdI');

sBoxs[0].addEventListener("mouseover", function() {
  sBoxs[0].style.backgroundColor = "rgba(250,216,255, .8)";
  sBoxs[0].style.boxShadow = "rgb(0 0 0 / 19%) 0px 10px 20px, rgb(0 0 0 / 23%) 0px 6px 6px";
  sParas[0].style.fontWeight = "500";
  sImgs[0].style.transform = "rotate(20deg)";
});

sBoxs[0].addEventListener("mouseout", function() {
  sBoxs[0].style.backgroundColor = "rgb(250,216,255)";
  sBoxs[0].style.boxShadow = "none";
  sParas[0].style.fontWeight = "300";
  sImgs[0].style.transform = "none";
});

sBoxs[1].addEventListener("mouseover", function() {
  sBoxs[1].style.backgroundColor = "rgba(248,196,255, .8)";
  sBoxs[1].style.boxShadow = "rgb(0 0 0 / 19%) 0px 10px 20px, rgb(0 0 0 / 23%) 0px 6px 6px";
  sParas[1].style.fontWeight = "500";
  sImgs[1].style.transform = "rotate(20deg)";
});

sBoxs[1].addEventListener("mouseout", function() {
  sBoxs[1].style.backgroundColor = "rgb(248,196,255)";
  sBoxs[1].style.boxShadow = "none";
  sParas[1].style.fontWeight = "300";
  sImgs[1].style.transform = "none";
});

sBoxs[2].addEventListener("mouseover", function() {
  sBoxs[2].style.backgroundColor = "rgba(246,177,255, .8)";
  sBoxs[2].style.boxShadow = "rgb(0 0 0 / 19%) 0px 10px 20px, rgb(0 0 0 / 23%) 0px 6px 6px";
  sParas[2].style.fontWeight = "500";
  sImgs[2].style.transform = "rotate(20deg)";
});

sBoxs[2].addEventListener("mouseout", function() {
  sBoxs[2].style.backgroundColor = "rgb(246,177,255)";
  sBoxs[2].style.boxShadow = "none";
  sParas[2].style.fontWeight = "300";
  sImgs[2].style.transform = "none";
});

sBoxs[3].addEventListener("mouseover", function() {
  sBoxs[3].style.backgroundColor = "rgba(243,157,255, .8)";
  sBoxs[3].style.boxShadow = "rgb(0 0 0 / 19%) 0px 10px 20px, rgb(0 0 0 / 23%) 0px 6px 6px";
  sParas[3].style.fontWeight = "500";
  sImgs[3].style.transform = "rotate(20deg)";
});

sBoxs[3].addEventListener("mouseout", function() {
  sBoxs[3].style.backgroundColor = "rgb(243,157,255)";
  sBoxs[3].style.boxShadow = "none";
  sParas[3].style.fontWeight = "300";
  sImgs[3].style.transform = "none";
});

sBoxs[4].addEventListener("mouseover", function() {
  sBoxs[4].style.backgroundColor = "rgba(241,137,255, .8)";
  sBoxs[4].style.boxShadow = "rgb(0 0 0 / 19%) 0px 10px 20px, rgb(0 0 0 / 23%) 0px 6px 6px";
  sParas[4].style.fontWeight = "500";
  sImgs[4].style.transform = "rotate(20deg)";
});

sBoxs[4].addEventListener("mouseout", function() {
  sBoxs[4].style.backgroundColor = "rgb(241,137,255)";
  sBoxs[4].style.boxShadow = "none";
  sParas[4].style.fontWeight = "300";
  sImgs[4].style.transform = "none";
});

sBoxs[5].addEventListener("mouseover", function() {
  sBoxs[5].style.backgroundColor = "rgba(239,118,255, .8)";
  sBoxs[5].style.boxShadow = "rgb(0 0 0 / 19%) 0px 10px 20px, rgb(0 0 0 / 23%) 0px 6px 6px";
  sParas[5].style.fontWeight = "500";
  sImgs[5].style.transform = "rotate(20deg)";
});

sBoxs[5].addEventListener("mouseout", function() {
  sBoxs[5].style.backgroundColor = "rgb(239,118,255)";
  sBoxs[5].style.boxShadow = "none";
  sParas[5].style.fontWeight = "300";
  sImgs[5].style.transform = "none";
});
