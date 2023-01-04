/* Keeping 1st Section Fixed on Scroll */
const fSec = document.getElementById('firstSection');
const sSec = document.getElementById('secondSection');
const hpSSec = document.getElementsByClassName('bg-img');
const sSec2 = document.getElementsByClassName('showOnTimer');
const mSec = document.getElementById('mobileSecSection');
const nNames = document.getElementsByClassName('navName');
const w = window.innerWidth;

console.log(hpSSec);

if (w <= 768) {
    window.addEventListener("scroll", function () {
        mSec.style.marginTop = "108px";
        fSec.style.position = "fixed";
        fSec.style.width = "100%";
        fSec.style.zIndex = "2";
        sSec.style.marginTop = "107px";
        sSec2[0].style.marginTop = "107px";
        nNames[0].style.display = "none";
        nNames[1].style.display = "none";
        nNames[2].style.display = "none";
        nNames[3].style.display = "none";
        nNames[10].style.display = "none";
        nNames[5].style.display = "none";
        nNames[6].style.display = "none";
        nNames[7].style.display = "none";
    });
}
else if (w > 768 && w <= 1024) {
    window.addEventListener("scroll", function () {
        fSec.style.position = "fixed";
        fSec.style.width = "100%";
        fSec.style.zIndex = "2";
        sSec.style.marginTop = "80px";
        sSec2[0].style.marginTop = "80px";
        nNames[0].style.display = "none";
        nNames[1].style.display = "none";
        nNames[2].style.display = "none";
        nNames[3].style.display = "none";
        nNames[10].style.display = "none";
        nNames[5].style.display = "none";
        nNames[6].style.display = "none";
        nNames[7].style.display = "none";
    });
}
else if (w > 1024 && w <= 1440) {
    window.addEventListener("scroll", function () {
        fSec.style.position = "fixed";
        fSec.style.width = "100%";
        fSec.style.zIndex = "2";
        sSec.style.marginTop = "140px";
        hpSSec[0].style.marginTop = "140px";
        sSec2[0].style.marginTop = "140px";
        nNames[0].style.display = "none";
        nNames[1].style.display = "none";
        nNames[2].style.display = "none";
        nNames[3].style.display = "none";
        nNames[10].style.display = "none";
        nNames[5].style.display = "none";
        nNames[6].style.display = "none";
        nNames[7].style.display = "none";
    });
}
else if (w > 1440 && w <= 2560) {
    window.addEventListener("scroll", function () {
        fSec.style.position = "fixed";
        fSec.style.width = "100%";
        fSec.style.zIndex = "2";
        sSec.style.marginTop = "145px";
        sSec2[0].style.marginTop = "145px";
        nNames[0].style.display = "none";
        nNames[1].style.display = "none";
        nNames[2].style.display = "none";
        nNames[3].style.display = "none";
        nNames[10].style.display = "none";
        nNames[5].style.display = "none";
        nNames[6].style.display = "none";
        nNames[7].style.display = "none";
    });
}
/* Keeping 1st Section Fixed on Scroll */



/* Toggle Menu Bar */
function toggleMainMenu() {
    document.getElementById("navMenu").classList.toggle("hideMainMenu");
    document.getElementById("navMenu2").classList.toggle("hideMainMenu");
};
/* Toggle Menu Bar End */