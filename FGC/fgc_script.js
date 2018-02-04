jQuery(document).ready(function() {

var offset = 250;

var duration = 300;

jQuery(window).scroll(function() {

if (jQuery(this).scrollTop() > offset) {

jQuery(‘.back-to-top’).fadeIn(duration);

} else {

jQuery(‘.back-to-top’).fadeOut(duration);

}

});



jQuery(‘.back-to-top’).click(function(event) {

event.preventDefault();

jQuery(‘html, body’).animate({scrollTop: 0}, duration);

return false;

})

});




var questions = [ '<p id="questions" style="text-align: center;">Need extra help in the kitchen&#63;</p>', '<p id="questions" style="text-align: center;">Eating cereal for dinner&#63;</p>', '<p id="questions" style="text-align: center;">Spending too much on takeout&#63;</p>', '<p id="questions" style="text-align: center;">Simply, dislike cooking&#63;</p>', '<p id="questions" style="text-align: center;">Don&#39;t know how to cook&#63;</p>'];

var i = 0;  // the index of the current item to show

setInterval(function() {            // setInterval makes it run repeatedly
    document.getElementById('questions').innerHTML = questions[i++];    // get the item and increment i to move to the next
    if (i == questions.length) i = 0;   // reset to first element if you've reached the end
}, 6000);
