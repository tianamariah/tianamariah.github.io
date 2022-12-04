/* Show + Closing Research Topics Start */
var researchMenuItems = document.getElementsByClassName('researchMenuItems');
var researchTopics = document.getElementsByClassName('researchMainBody');
var researchImages = document.getElementsByClassName('researchImg');

researchMenuItems[0].addEventListener("click", function() {
  researchTopics[0].style.display = "block";
  researchImages[0].style.display = "block";

  //hide other research images
  researchImages[1].style.display = "none";
  researchImages[2].style.display = "none";
  researchImages[3].style.display = "none";

  // hide all other topics
  researchTopics[1].style.display = "none";
  researchTopics[2].style.display = "none";
  researchTopics[3].style.display = "none";
  researchTopics[4].style.display = "none";
  researchTopics[5].style.display = "none";
  researchTopics[6].style.display = "none";
  researchTopics[7].style.display = "none";

});

researchMenuItems[1].addEventListener("click", function() {
  researchTopics[1].style.display = "block";
  researchImages[0].style.display = "block";

  //hide other research images
  researchImages[1].style.display = "none";
  researchImages[2].style.display = "none";
  researchImages[3].style.display = "none";


  // hide all other topics
  researchTopics[0].style.display = "none";
  researchTopics[2].style.display = "none";
  researchTopics[3].style.display = "none";
  researchTopics[4].style.display = "none";
  researchTopics[5].style.display = "none";
  researchTopics[6].style.display = "none";
  researchTopics[7].style.display = "none";

});

researchMenuItems[2].addEventListener("click", function() {
  researchTopics[2].style.display = "block";
  researchImages[0].style.display = "block";

  //hide other research images
  researchImages[1].style.display = "none";
  researchImages[2].style.display = "none";
  researchImages[3].style.display = "none";

  // hide all other topics
  researchTopics[0].style.display = "none";
  researchTopics[1].style.display = "none";
  researchTopics[3].style.display = "none";
  researchTopics[4].style.display = "none";
  researchTopics[5].style.display = "none";
  researchTopics[6].style.display = "none";
  researchTopics[7].style.display = "none";

});

researchMenuItems[3].addEventListener("click", function() {
  researchTopics[3].style.display = "block";
  researchImages[0].style.display = "block";

  //hide other research images
  researchImages[1].style.display = "none";
  researchImages[2].style.display = "none";
  researchImages[3].style.display = "none";

  // hide all other topics
  researchTopics[0].style.display = "none";
  researchTopics[1].style.display = "none";
  researchTopics[2].style.display = "none";
  researchTopics[4].style.display = "none";
  researchTopics[5].style.display = "none";
  researchTopics[6].style.display = "none";
  researchTopics[7].style.display = "none";

});

researchMenuItems[4].addEventListener("click", function() {
  researchTopics[4].style.display = "block";
  researchImages[0].style.display = "block";

  //hide other research images
  researchImages[1].style.display = "none";
  researchImages[2].style.display = "none";
  researchImages[3].style.display = "none";

  // hide all other topics
  researchTopics[0].style.display = "none";
  researchTopics[1].style.display = "none";
  researchTopics[2].style.display = "none";
  researchTopics[3].style.display = "none";
  researchTopics[5].style.display = "none";
  researchTopics[6].style.display = "none";
  researchTopics[7].style.display = "none";

});

researchMenuItems[5].addEventListener("click", function() {
  researchTopics[5].style.display = "block";
  researchImages[1].style.display = "block";

  //hide img1
  researchImages[0].style.display = "none";
  researchImages[2].style.display = "none";
  researchImages[3].style.display = "none";

  // hide all other topics
  researchTopics[0].style.display = "none";
  researchTopics[1].style.display = "none";
  researchTopics[2].style.display = "none";
  researchTopics[3].style.display = "none";
  researchTopics[4].style.display = "none";
  researchTopics[6].style.display = "none";
  researchTopics[7].style.display = "none";

});

researchMenuItems[6].addEventListener("click", function() {
  researchTopics[6].style.display = "block";
  researchImages[2].style.display = "block";

  //hide img1
  researchImages[0].style.display = "none";
  researchImages[1].style.display = "none";
  researchImages[3].style.display = "none";

  // hide all other topics
  researchTopics[0].style.display = "none";
  researchTopics[1].style.display = "none";
  researchTopics[2].style.display = "none";
  researchTopics[3].style.display = "none";
  researchTopics[4].style.display = "none";
  researchTopics[5].style.display = "none";
  researchTopics[7].style.display = "none";

});

researchMenuItems[7].addEventListener("click", function() {
  researchTopics[7].style.display = "block";
  researchImages[3].style.display = "block";

  //hide img1
  researchImages[0].style.display = "none";
  researchImages[1].style.display = "none";
  researchImages[2].style.display = "none";

  // hide all other topics
  researchTopics[0].style.display = "none";
  researchTopics[1].style.display = "none";
  researchTopics[2].style.display = "none";
  researchTopics[3].style.display = "none";
  researchTopics[4].style.display = "none";
  researchTopics[5].style.display = "none";
  researchTopics[6].style.display = "none";
});
/* Show + Closing Research Topics End */

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
