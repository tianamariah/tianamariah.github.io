/* Scroll Animation on Team Members Page */
function showImages(el) {
  var windowHeight = jQuery( window ).height();
  $(el).each(function(){
      var thisPos = $(this).offset().top;

      var topOfWindow = $(window).scrollTop();
      if (topOfWindow + windowHeight - 200 > thisPos ) {
          $(this).addClass("fadeIn");
      }
  });
}

// if the image in the window of browser when the page is loaded, show that image
$(document).ready(function(){
  showImages('.scholarImg');
});

// if the image in the window of browser when scrolling the page, show that image
$(window).scroll(function() {
  showImages('.scholarImg');
});
/* Scroll Animation on Team Members Page  */

/* Show + Closing Research Topics Start */

var researchMenuItems = document.getElementsByClassName('researchMenuItems');
var researchTopics = document.getElementsByClassName('researchMainBody');
var researchImages = document.getElementsByClassName('researchImg');

 researchMenuItems[0].addEventListener("mousedown", function() {
    researchTopics[0].style.display = "block";
    researchImages[0].style.display = "block";
    researchImages[0].

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

    researchMenuItems[1].addEventListener("mousedown", function() {
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

       researchMenuItems[2].addEventListener("mousedown", function() {
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

          researchMenuItems[3].addEventListener("mousedown", function() {
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

             researchMenuItems[4].addEventListener("mousedown", function() {
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

                researchMenuItems[5].addEventListener("mousedown", function() {
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

                   researchMenuItems[6].addEventListener("mousedown", function() {
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

                         researchMenuItems[7].addEventListener("mousedown", function() {
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

/* Showing + Closing Bios */
document.getElementById("overLayOne").addEventListener("click", function() {
 var getModalBox =document.getElementsByClassName("modalBoxOne");
 getModalBox[0].style.display = 'block';
});

document.getElementById("closeOne").addEventListener("click", function() {
   var getModalBox =document.getElementsByClassName("modalBoxOne");
   getModalBox[0].style.display= 'none';

});

document.getElementById("overLayTwo").addEventListener("click", function() {
 var getModalBox =document.getElementsByClassName("modalBoxTwo");
 getModalBox[0].style.display = 'block';
});

document.getElementById("closeTwo").addEventListener("click", function() {
   var getModalBox =document.getElementsByClassName("modalBoxTwo");
   getModalBox[0].style.display= 'none';

});

document.getElementById("overLayThree").addEventListener("click", function() {
 var getModalBox = document.getElementsByClassName("modalBoxThree");
 getModalBox[0].style.display = 'block';
});

document.getElementById("closeThree").addEventListener("click", function() {
   var getModalBox = document.getElementsByClassName("modalBoxThree");
   getModalBox[0].style.display= 'none';

});

document.getElementById("overLayFour").addEventListener("click", function() {
 var getModalBox = document.getElementsByClassName("modalBoxFour");
 getModalBox[0].style.display = 'block';
});

document.getElementById("closeFour").addEventListener("click", function() {
   var getModalBox = document.getElementsByClassName("modalBoxFour");
   getModalBox[0].style.display= 'none';

});

document.getElementById("overLayFive").addEventListener("click", function() {
 var getModalBox = document.getElementsByClassName("modalBoxFive");
 getModalBox[0].style.display = 'block';
});

document.getElementById("closeFive").addEventListener("click", function() {
   var getModalBox = document.getElementsByClassName("modalBoxFive");
   getModalBox[0].style.display= 'none';

});

document.getElementById("overLaySix").addEventListener("click", function() {
 var getModalBox = document.getElementsByClassName("modalBoxSix");
 getModalBox[0].style.display = 'block';
});

document.getElementById("closeSix").addEventListener("click", function() {
   var getModalBox = document.getElementsByClassName("modalBoxSix");
   getModalBox[0].style.display= 'none';

});

document.getElementById("overLaySeven").addEventListener("click", function() {
 var getModalBox = document.getElementsByClassName("modalBoxSeven");
 getModalBox[0].style.display = 'block';
});

document.getElementById("closeSeven").addEventListener("click", function() {
   var getModalBox = document.getElementsByClassName("modalBoxSeven");
   getModalBox[0].style.display= 'none';

});

document.getElementById("overLayEight").addEventListener("click", function() {
 var getModalBox = document.getElementsByClassName("modalBoxEight");
 getModalBox[0].style.display = 'block';
});

document.getElementById("closeEight").addEventListener("click", function() {
   var getModalBox = document.getElementsByClassName("modalBoxEight");
   getModalBox[0].style.display= 'none';

});

document.getElementById("overLayNine").addEventListener("click", function() {
 var getModalBox = document.getElementsByClassName("modalBoxNine");
 getModalBox[0].style.display = 'block';
});

document.getElementById("closeNine").addEventListener("click", function() {
   var getModalBox = document.getElementsByClassName("modalBoxNine");
   getModalBox[0].style.display= 'none';

});

document.getElementById("overLayTen").addEventListener("click", function() {
 var getModalBox = document.getElementsByClassName("modalBoxTen");
 getModalBox[0].style.display = 'block';
});

document.getElementById("closeTen").addEventListener("click", function() {
   var getModalBox = document.getElementsByClassName("modalBoxTen");
   getModalBox[0].style.display= 'none';

});

document.getElementById("overLayEleven").addEventListener("click", function() {
 var getModalBox = document.getElementsByClassName("modalBoxEleven");
 getModalBox[0].style.display = 'block';
});

document.getElementById("closeEleven").addEventListener("click", function() {
   var getModalBox = document.getElementsByClassName("modalBoxEleven");
   getModalBox[0].style.display= 'none';

});

document.getElementById("overLayTwelve").addEventListener("click", function() {
 var getModalBox = document.getElementsByClassName("modalBoxTwelve");
 getModalBox[0].style.display = 'block';
});

document.getElementById("closeTwelve").addEventListener("click", function() {
   var getModalBox = document.getElementsByClassName("modalBoxTwelve");
   getModalBox[0].style.display= 'none';

});

document.getElementById("overLayThirteen").addEventListener("click", function() {
 var getModalBox = document.getElementsByClassName("modalBoxThirteen");
 getModalBox[0].style.display = 'block';
});

document.getElementById("closeThirteen").addEventListener("click", function() {
   var getModalBox = document.getElementsByClassName("modalBoxThirteen");
   getModalBox[0].style.display= 'none';

});
/* Showing + Closing Bios End */

/* Clicking on Conference Divs */





/* Clicking on Conference Divs End */


function replace( hide, show ) {
  document.getElementById(hide).style.display="none";
  document.getElementById(show).style.display="block";
}

var images = [], imgCount = -1;
images[0] = "img/thl-4.jpg";
images[1] = "img/thl-5.jpg";
images[2] = "img/thl-6.jpg";
images[3] = "img/thl-7.jpg";
images[4] = "img/thl-8.jpg";
images[5] = "img/thl-9.jpg";
images[6] = "img/thl-10.jpg";
images[7] = "img/thl-11.jpg";
images[8] = "img/thl-12.jpg";
images[9] = "img/thl-13.jpg";
images[10] = "img/thl-14.jpg";
images[11] = "img/thl-15.jpg";
images[12] = "img/thl-16.jpg";
images[13] = "img/thl-17.jpg";
images[14] = "img/thl-18.jpg";
images[15] = "img/thl-19.jpg";
images[16] = "img/thl-20.jpg";
images[17] = "img/thl-21.jpg";
images[18] = "img/thl-22.jpg";
images[19] = "img/thl-23.jpg";


var video = [], vidCount = -1;
  video[0] = "https://www.youtube.com/embed/XxfGSuQe9Fg";
  video[1] = "https://www.youtube.com/embed/RBqUfMuCQXI";
  video[2] = "https://www.youtube.com/embed/rQ0HItHPS0Q";
  video[3] = "https://www.youtube.com/embed/NpmBww5zVlM";


  // Toggle Menu Bar
    function toggleMainMenu(){
      document.getElementById("navMenu").classList.toggle("hideMainMenu");
    }
  // Toggle Menu Bar End


// SlideShow //
function displayNextImage() {

    imgCount = (imgCount === images.length - 1) ? 0 : imgCount + 1;
        document.getElementById("img").src = images[imgCount];

    imgCount = (imgCount === images.length - 1) ? 0 : imgCount + 1;
        document.getElementById("img2").src = images[imgCount];

    imgCount = (imgCount === images.length - 1) ? 0 : imgCount + 1;
      document.getElementById("img3").src = images[imgCount];
  };

    function changeImage() {
        setInterval(displayNextImage, 9000);
    };
// SlideShow End //


// Video Slideshow//
function displayNextVideo() {
    vidCount = (vidCount === video.length - 1) ? 0 : vidCount + 1;
    document.getElementById("pi-vid").src = video[vidCount];
    console.log(video[vidCount]);
};

function changeVideo() {
    setInterval(displayNextVideo, 5000);
};
// Video SlideShow//
