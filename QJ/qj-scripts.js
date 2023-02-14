/* Hovering over Tape Container */

const tapes = document.getElementsByClassName('t-c');
const innerTapes = document.getElementsByClassName('i-t-c');
const leftSide = document.getElementsByClassName('l-side');
const rightSide = document.getElementsByClassName('r-side');
const icon1 = document.getElementById('icon-1');
const icon2 = document.getElementById('icon-2');
const icon3 = document.getElementById('icon-3');
const icon4 = document.getElementById('icon-4');
const icon5 = document.getElementById('icon-5');
const icon6 = document.getElementById('icon-6');
const icon7 = document.getElementById('icon-7');
const icon8 = document.getElementById('icon-8');
const leftArrows = document.getElementsByClassName('left-arrow');

tapes[0].addEventListener('mouseover', function() {
  tapes[0].style.backgroundColor = '#FF0000';
  tapes[0].style.color = '#000';
  innerTapes[0].style.backgroundColor = '#000';
  innerTapes[0].style.color= '#fff';
  icon1.src = 'imgs/apple-music-icon-b.png';
  leftArrows[0].style.color = '#000';
  leftSide[0].style.borderRightColor = '#000';
  rightSide[0].style.borderLeftColor = '#000';
});

tapes[0].addEventListener('mouseout', function() {
  tapes[0].style.backgroundColor = 'transparent';
  tapes[0].style.color = '#FF0000';
  innerTapes[0].style.backgroundColor = '#fff';
  innerTapes[0].style.color= '#000';
  icon1.src = 'imgs/apple-music-icon-r.png';
  leftArrows[0].style.color = '#FF0000';
  leftSide[0].style.borderRightColor = '#FF0000';
  rightSide[0].style.borderLeftColor = '#FF0000';
});

tapes[1].addEventListener('mouseover', function() {
  tapes[1].style.backgroundColor = '#FF0000';
  tapes[1].style.color = '#000';
  innerTapes[1].style.backgroundColor = '#000';
  innerTapes[1].style.color= '#fff';
  icon2.src = 'imgs/spotify-icon-b.png';
  leftArrows[1].style.color = '#000';
  leftSide[1].style.borderRightColor = '#000';
  rightSide[1].style.borderLeftColor = '#000';
});

tapes[1].addEventListener('mouseout', function() {
  tapes[1].style.backgroundColor = 'transparent';
  tapes[1].style.color = '#FF0000';
  innerTapes[1].style.backgroundColor = '#fff';
  innerTapes[1].style.color= '#000';
  icon2.src = 'imgs/spotify-icon-r.png';
  leftArrows[1].style.color = '#FF0000';
  leftSide[1].style.borderRightColor = '#FF0000';
  rightSide[1].style.borderLeftColor = '#FF0000';
});

tapes[2].addEventListener('mouseover', function() {
  tapes[2].style.backgroundColor = '#FF0000';
  tapes[2].style.color = '#000';
  innerTapes[2].style.backgroundColor = '#000';
  innerTapes[2].style.color= '#fff';
  icon3.src = 'imgs/youtube-icon-b.png';
  leftArrows[2].style.color = '#000';
  leftSide[2].style.borderRightColor = '#000';
  rightSide[2].style.borderLeftColor = '#000';
});

tapes[2].addEventListener('mouseout', function() {
  tapes[2].style.backgroundColor = 'transparent';
  tapes[2].style.color = '#FF0000';
  innerTapes[2].style.backgroundColor = '#fff';
  innerTapes[2].style.color= '#000';
  icon3.src = 'imgs/youtube-icon-r.png';
  leftArrows[2].style.color = '#FF0000';
  leftSide[2].style.borderRightColor = '#FF0000';
  rightSide[2].style.borderLeftColor = '#FF0000';
});

tapes[3].addEventListener('mouseover', function() {
  tapes[3].style.backgroundColor = '#FF0000';
  tapes[3].style.color = '#000';
  innerTapes[3].style.backgroundColor = '#000';
  innerTapes[3].style.color= '#fff';
  icon4.src = 'imgs/soundcloud-icon-b.png';
  leftArrows[3].style.color = '#000';
  leftSide[3].style.borderRightColor = '#000';
  rightSide[3].style.borderLeftColor = '#000';
});

tapes[3].addEventListener('mouseout', function() {
  tapes[3].style.backgroundColor = 'transparent';
  tapes[3].style.color = '#FF0000';
  innerTapes[3].style.backgroundColor = '#fff';
  innerTapes[3].style.color= '#000';
  icon4.src = 'imgs/soundcloud-icon-r.png';
  leftArrows[3].style.color = '#FF0000';
  leftSide[3].style.borderRightColor = '#FF0000';
  rightSide[3].style.borderLeftColor = '#FF0000';
});

tapes[4].addEventListener('mouseover', function() {
  tapes[4].style.backgroundColor = '#FF0000';
  tapes[4].style.color = '#000';
  innerTapes[4].style.backgroundColor = '#000';
  innerTapes[4].style.color= '#fff';
  icon5.src = 'imgs/tidal-icon-b.png';
  leftArrows[4].style.color = '#000';
  leftSide[4].style.borderRightColor = '#000';
  rightSide[4].style.borderLeftColor = '#000';

});

tapes[4].addEventListener('mouseout', function() {
  tapes[4].style.backgroundColor = 'transparent';
  tapes[4].style.color = '#FF0000';
  innerTapes[4].style.backgroundColor = '#fff';
  innerTapes[4].style.color= '#000';
  icon5.src = 'imgs/tidal-icon-r.png';
  leftArrows[4].style.color = '#FF0000';
  leftSide[4].style.borderRightColor = '#FF0000';
  rightSide[4].style.borderLeftColor = '#FF0000';
});

tapes[5].addEventListener('mouseover', function() {
  tapes[5].style.backgroundColor = '#FF0000';
  tapes[5].style.color = '#000';
  innerTapes[5].style.backgroundColor = '#000';
  innerTapes[5].style.color= '#fff';
  icon6.src = 'imgs/tiktok-icon-b.png';
  leftArrows[5].style.color = '#000';
  leftSide[5].style.borderRightColor = '#000';
  rightSide[5].style.borderLeftColor = '#000';
});

tapes[5].addEventListener('mouseout', function() {
  tapes[5].style.backgroundColor = 'transparent';
  tapes[5].style.color = '#FF0000';
  innerTapes[5].style.backgroundColor = '#fff';
  innerTapes[5].style.color= '#000';
  icon6.src = 'imgs/tiktok-icon-r.png';
  leftArrows[5].style.color = '#FF0000';
  leftSide[5].style.borderRightColor = '#FF0000';
  rightSide[5].style.borderLeftColor = '#FF0000';
});

tapes[6].addEventListener('mouseover', function() {
  tapes[6].style.backgroundColor = '#FF0000';
  tapes[6].style.color = '#000';
  innerTapes[6].style.backgroundColor = '#000';
  innerTapes[6].style.color= '#fff';
  icon7.src = 'imgs/instagram-icon-b.png';
  leftArrows[6].style.color = '#000';
  leftSide[6].style.borderRightColor = '#000';
  rightSide[6].style.borderLeftColor = '#000';
});

tapes[6].addEventListener('mouseout', function() {
  tapes[6].style.backgroundColor = 'transparent';
  tapes[6].style.color = '#FF0000';
  innerTapes[6].style.backgroundColor = '#fff';
  innerTapes[6].style.color= '#000';
  icon7.src = 'imgs/instagram-icon-r.png';
  leftArrows[6].style.color = '#FF0000';
  leftSide[6].style.borderRightColor = '#FF0000';
  rightSide[6].style.borderLeftColor = '#FF0000';
});

tapes[7].addEventListener('mouseover', function() {
  tapes[7].style.backgroundColor = '#FF0000';
  tapes[7].style.color = '#000';
  innerTapes[7].style.backgroundColor = '#000';
  innerTapes[7].style.color= '#fff';
  icon8.src = 'imgs/facebook-icon-b.png';
  leftArrows[7].style.color = '#000';
  leftSide[7].style.borderRightColor = '#000';
  rightSide[7].style.borderLeftColor = '#000';
});

tapes[7].addEventListener('mouseout', function() {
  tapes[7].style.backgroundColor = 'transparent';
  tapes[7].style.color = '#FF0000';
  innerTapes[7].style.backgroundColor = '#fff';
  innerTapes[7].style.color= '#000';
  icon8.src = 'imgs/facebook-icon-r.png';
  leftArrows[7].style.color = '#FF0000';
  leftSide[7].style.borderRightColor = '#FF0000';
  rightSide[7].style.borderLeftColor = '#FF0000';
});
