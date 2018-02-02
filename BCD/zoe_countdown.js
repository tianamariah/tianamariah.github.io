/*
Filename: zoe_countdown.js
Author: Tiana Mangual
Date: 9/28/17

*/


var countDownDate = new Date("January 21, 2020").getTime();
var x = setInterval(function() {
var now = new Date().getTime();
var distance = countDownDate - now;
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById("dys").innerHTML = days + "<p class='h3' id='title'> days</p>";
document.getElementById("hrs").innerHTML =  hours + "<p class='h3' id='title'> hours</p>";
document.getElementById("mins").innerHTML =  minutes + "<p class='h3' id='title'> mintues</p>";
document.getElementById("secs").innerHTML = seconds + "<p class='h3' id='title'> seconds</p>";

// If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countDown").innerHTML = "She has arrived!";
  }
}, 0025);


$(function () {
  $('[data-toggle="tooltip"]').tooltip()
              })



  function reset() {
   document.getElementById('inputItems').reset();
   document.getElementById('textArea').reset();
  }
