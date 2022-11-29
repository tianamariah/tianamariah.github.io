/* Making Header Sticky on Scroll */
window.onscroll = function() {myFunction()};

var header = document.getElementById("firstSection");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
};

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


/* Showing + Closing Bios */

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
  video[1] = "http://www.youtube.com/embed/RBqUfMuCQXI";
  video[2] = "https://www.youtube.com/embed/rQ0HItHPS0Q";
  video[3] = "https://www.youtube.com/embed/NpmBww5zVlM";


  // Toggle Menu Bar
    function toggleMobileMenu() {
      document.getElementById("navMobileMenu").classList.toggle("show");
    };

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
