
  /* SlideShow */
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
  /* SlideShow End */

  /* Video Slideshow */
  function displayNextVideo() {
    vidCount = (vidCount === video.length - 1) ? 0 : vidCount + 1;
    document.getElementById("pi-vid").src = video[vidCount];
    console.log(video[vidCount]);
  };

  function changeVideo() {
    setInterval(displayNextVideo, 5000);
  };
  /* Video SlideShow End */
