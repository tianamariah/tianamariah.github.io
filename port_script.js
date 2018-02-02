function changeColor1() {
  document.getElementById('body').style.backgroundColor = "rgba(228, 203, 206, 0.3)";
}

function changeColor2() {
  document.getElementById('body').style.backgroundColor = "rgba(205, 181, 69, 0.5)";
}

function changeColor3() {
  document.getElementById('body').style.backgroundColor = "rgba(151, 174, 204, 0.5)";
}


var hobbies = [ 'listening to music <i class="fa fa-headphones" aria-hidden="true"></i>', 'traveling <i class="fa fa-globe" aria-hidden="true"></i>', 'reading <i class="fa fa-book" aria-hidden="true"></i>', 'thrift shopping <i class="fa fa-shopping-bag" aria-hidden="true"></i>', 'historical documentaries <i class="fa fa-television" aria-hidden="true"></i>', 'painting <i class="fa fa-paint-brush" aria-hidden="true"></i>', 'drinking tea <i class="fa fa-coffee" aria-hidden="true"></i>'];

var i = 0;  // the index of the current item to show

setInterval(function() {            // setInterval makes it run repeatedly
    document.getElementById('hobbies').innerHTML = hobbies[i++];    // get the item and increment i to move to the next
    if (i == hobbies.length) i = 0;   // reset to first element if you've reached the end
}, 3000);
