/* NavBar Fixed on Scroll */
const navBar = document.getElementById('d-nav');
const mNavBar = document.getElementById('m-nav');
const logo = document.getElementById('logo');
const logoDiv = document.getElementById('logo-div');
const navItems = document.getElementsByClassName('nav');
const w = window.innerWidth;


if (w <= 950) {

    window.addEventListener("scroll", function () {
       mNavBar.style.width = "100%";
       mNavBar.style.position = "fixed";
       mNavBar.style.backgroundColor = "#ea64fe";
       mNavBar.style.boxShadow = "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px";
       mNavBar.style.zIndex = "5";
       mNavBar.style.paddingBottom = "15px";
       navItems[0].style.paddingTop = "5%";
       navItems[1].style.paddingTop = "5%";

    });

} else if (w >= 951) {

    window.addEventListener("scroll", function () {
        navBar.style.position = "fixed";
        navBar.style.backgroundColor = "#ea64fe";
        navBar.style.boxShadow = "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px";
        navBar.style.paddingBottom = "15px";
        navBar.style.zIndex = "5";
        logo.src = 'imgs/minimal-logo.png';
        logoDiv.style.marginTop = "20px";
        navItems[0].style.paddingTop = "5%";
        navItems[1].style.paddingTop = "5%";
    });
}


window.addEventListener('wheel', findScrollDirectionOtherBrowsers);

function findScrollDirectionOtherBrowsers(event) {
    var delta;
    if (event.wheelDelta) {
        delta = event.wheelDelta;
    } else {
        delta = -1 * event.deltaY;
    }
    if (delta < 0) {

        if (w <= 950) {

            window.addEventListener("scroll", function () {
                mNavBar.style.width = "100%";
                mNavBar.style.position = "fixed";
                mNavBar.style.backgroundColor = "#ea64fe";
                mNavBar.style.boxShadow = "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px";
                mNavBar.style.zIndex = "5";
                mNavBar.style.paddingBottom = "15px";
                logo.src = 'imgs/minimal-logo.png';
            });

        }

        else if (w >= 951) {

            window.addEventListener("scroll", function () {
                navBar.style.position = "fixed";
                navBar.style.backgroundColor = "#ea64fe";
                navBar.style.boxShadow = "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px";
                navBar.style.paddingBottom = "15px";
                navBar.style.zIndex = "5";
                logo.src = 'imgs/minimal-logo.png';
                navItems[0].style.paddingTop = "5%";
                navItems[1].style.paddingTop = "5%";
            });
        }



    } else if (delta > 0) {
        if (w <= 950) {

            window.addEventListener("scroll", function () {
                 mNavBar.style.width = "100%";
                 mNavBar.style.backgroundColor = "#ea64fe";
                 mNavBar.style.boxShadow = "none";
                 mNavBar.style.zIndex = "5";
            });

        }

        else if (w >= 951) {

            window.addEventListener("scroll", function () {
                navBar.style.backgroundColor = "#ea64fe";
                navBar.style.boxShadow = "none";
                navBar.style.zIndex = "5";
            });
        }

    }
}

/* NavBar Fixed on Scroll */


/* Opening & Closing Side Menu */

const sideMenu = document.getElementById('side-menu');
const rSide = document.getElementById('mnav-r-side');


function openMenu() {
    sideMenu.style.display = 'grid';
    sideMenu.style.zIndex = '6';
    rSide.style.display = 'none';
}

function closeMenu() {
    sideMenu.style.display = 'none';
    rSide.style.display = 'grid';
}

function closeMenuLink() {
  sideMenu.style.display = 'none';
  rSide.style.display = 'grid';
}

/* Opening & Closing Side Menu */


/* Switching Reviews */

const review1 = document.getElementById('reviews-box');
const review2 = document.getElementById('reviews-box-2');
const review3 = document.getElementById('reviews-box-3');

function nextQuote() {
  review1.style.display = 'none';
  review2.style.display = 'grid';
}

function nextQuote2() {
  review2.style.display = 'none';
  review3.style.display = 'grid';
}

function nextQuote3() {
  review3.style.display = 'none';
  review1.style.display = 'grid';
}

function prevQuote() {
  review1.style.display = 'none';
  review3.style.display = 'grid';
}

function prevQuote2() {
  review3.style.display = 'none';
  review2.style.display = 'grid';
}

function prevQuote3() {
  review2.style.display = 'none';
  review1.style.display = 'grid';
}
/* Switching Reviews */
