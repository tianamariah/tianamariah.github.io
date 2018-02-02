var questions = [ '<p id="questions">Need extra help in the kitchen&#63;</p>', '<p id="questions">Eating cereal for dinner&#63;</p>', '<p id="questions">Spending too much on takeout&#63;</p>', '<p id="questions">Simply, dislike cooking&#63;</p>', '<p id="questions">Don&#39;t know how to cook&#63;</p>'];

var i = 0;  // the index of the current item to show

setInterval(function() {            // setInterval makes it run repeatedly
    document.getElementById('questions').innerHTML = questions[i++];    // get the item and increment i to move to the next
    if (i == questions.length) i = 0;   // reset to first element if you've reached the end
}, 6000);
