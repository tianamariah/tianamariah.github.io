/* NavBar Fixed on Scroll */
const navBar = document.getElementById('navigation');
const lSide = document.getElementById('nav-left-side');
const rSide = document.getElementById('nav-right-side');
const logo = document.getElementById('h-logo');
const menuIcon = document.getElementById('menu-icon');
const menuText = document.getElementById('menu-text');
const w = window.innerWidth;


if (w <= 500) {

    window.addEventListener("scroll", function () {
        navBar.style.position = "fixed";
        navBar.style.backgroundColor = "#296767";
        navBar.style.boxShadow = "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px";
        navBar.style.zIndex = "5";
        navBar.style.paddingBottom = "15px";
        navBar.style.height = "30px";
        lSide.style.paddingTop = "0px";
        rSide.style.paddingTop = "0px";
        logo.style.color = "#DBEAB7";
        logo.style.fontSize = "40px";
        rSide.style.color = "#DBEAB7";
        menuIcon.style.fontSize = "30px";
        menuText.style.fontSize = "12px";
    });

} else if (w >= 501) {

    window.addEventListener("scroll", function () {
        navBar.style.position = "fixed";
        navBar.style.backgroundColor = "#296767";
        navBar.style.boxShadow = "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px";
        navBar.style.paddingBottom = "15px";
        navBar.style.zIndex = "5";
        navBar.style.height = "30px";
        lSide.style.paddingTop = "0px";
        rSide.style.paddingTop = "0px";
        logo.style.color = "#DBEAB7";
        logo.style.fontSize = "40px";
        rSide.style.color = "#DBEAB7";
        menuIcon.style.fontSize = "30px";
        menuText.style.fontSize = "12px";
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

        if (w <= 500) {

            window.addEventListener("scroll", function () {
                navBar.style.position = "fixed";
                navBar.style.backgroundColor = "#296767";
                navBar.style.boxShadow = "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px";
                navBar.style.zIndex = "5";
                navBar.style.paddingBottom = "15px";
                navBar.style.height = "30px";
                lSide.style.paddingTop = "0px";
                rSide.style.paddingTop = "0px";
                logo.style.color = "#DBEAB7";
                logo.style.fontSize = "40px";
                rSide.style.color = "#DBEAB7";
                menuIcon.style.fontSize = "30px";
                menuText.style.fontSize = "12px";
            });
        
        }
        
        else if (w >= 501) {

            window.addEventListener("scroll", function () {
                navBar.style.position = "fixed";
                navBar.style.backgroundColor = "#296767";
                navBar.style.boxShadow = "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px";
                navBar.style.paddingBottom = "15px";
                navBar.style.zIndex = "5";
                navBar.style.height = "30px";
                lSide.style.paddingTop = "0px";
                rSide.style.paddingTop = "0px";
                logo.style.color = "#DBEAB7";
                logo.style.fontSize = "40px";
                rSide.style.color = "#DBEAB7";
                menuIcon.style.fontSize = "30px";
                menuText.style.fontSize = "12px";
            });
        }



    } else if (delta > 0) {
        if (w <= 500) {

            window.addEventListener("scroll", function () {
                navBar.style.backgroundColor = "rgba(0,0,0,.3)";
                navBar.style.boxShadow = "none";
                navBar.style.zIndex = "5";
                logo.style.color = "#DBEAB7";
                rSide.style.color = "#DBEAB7";
                navBar.style.height = "auto";
                lSide.style.paddingTop = "10px";
                rSide.style.paddingTop = "10px";
                logo.style.fontSize = "44px";
                menuIcon.style.fontSize = "40px";
                menuText.style.fontSize = "14px";
            });

        }
        
        else if (w >= 501) {

            window.addEventListener("scroll", function () {
                navBar.style.backgroundColor = "transparent";
                navBar.style.boxShadow = "none";
                navBar.style.zIndex = "5";
                logo.style.color = "#00422C";
                rSide.style.color = "#00422C";
                navBar.style.height = "auto";
                lSide.style.paddingTop = "10px";
                rSide.style.paddingTop = "10px";
                logo.style.fontSize = "44px";
                menuIcon.style.fontSize = "40px";
                menuText.style.fontSize = "14px";
            });
        }

    }
}

/* NavBar Fixed on Scroll */




/* Opening & Closing Side Menu */

const sideMenu = document.getElementById('side-menu');


function openMenu() {
    sideMenu.style.display = 'grid';
    sideMenu.style.zIndex = '6';
    rSide.style.display = 'none';
}

function closeMenu() {
    sideMenu.style.display = 'none';
    rSide.style.display = 'grid';
}

/* Opening & Closing Side Menu */