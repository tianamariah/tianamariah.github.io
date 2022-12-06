/* Clicking on Research Links and Opening Correct Research Pages */
var researchMenuItems = document.getElementsByClassName('researchMenuItems');

researchMenuItems[0].addEventListener("click", function() {
  researchMenuItems[0].style.cursor = "pointer";
  window.open('research.html', '_self');
});

researchMenuItems[1].addEventListener("click", function() {
  researchMenuItems[1].style.cursor = "pointer";
  window.open('rt-one.html', '_self');
});

researchMenuItems[2].addEventListener("click", function() {
  researchMenuItems[2].style.cursor = "pointer";
  window.open('rt-two.html', '_self');
});

researchMenuItems[3].addEventListener("click", function() {
  researchMenuItems[3].style.cursor = "pointer";
  window.open('rt-three.html', '_self');
});

researchMenuItems[4].addEventListener("click", function() {
  researchMenuItems[4].style.cursor = "pointer";
  window.open('rt-four.html', '_self');
});

researchMenuItems[5].addEventListener("click", function() {
  researchMenuItems[5].style.cursor = "pointer";
  window.open('rt-five.html', '_self');
});

researchMenuItems[6].addEventListener("click", function() {
  researchMenuItems[6].style.cursor = "pointer";
  window.open('rt-six.html', '_self');
});

researchMenuItems[7].addEventListener("click", function() {
  researchMenuItems[7].style.cursor = "pointer";
  window.open('rt-seven.html', '_self');
});

/* Clicking on Research Links and Opening Correct Research Pages */

/* Hiding and Showing Divs in Intro Section */
function replace( hide, show ) {
  document.getElementById(hide).style.display="none";
  document.getElementById(show).style.display="block";
};
/* Hiding and Showing Divs in Intro Section End */

/* Toggle Menu Bar */
function toggleMainMenu() {
  document.getElementById("navMenu").classList.toggle("hideMainMenu");
  document.getElementById("navMenu2").classList.toggle("hideMainMenu");
};
/* Toggle Menu Bar End */
