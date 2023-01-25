/* Why Bamboo FAQ Hover over Boxes */

const blueBoxes = document.getElementsByClassName('blue');
const titles = document.getElementsByClassName('title');

blueBoxes[0].addEventListener("mouseover", function () {
    titles[0].style.fontWeight = '700';
    titles[0].style.fontSize = '20px';
    titles[0].style.color = '#85a2a3';
    blueBoxes[0].style.backgroundColor = 'transparent';
    blueBoxes[0].style.border = '.5px solid #85a2a3';
    blueBoxes[0].style.boxShadow = 'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px';
});

blueBoxes[0].addEventListener("mouseout", function () {
    titles[0].style.fontWeight = '400';
    titles[0].style.fontSize = '16px';
    titles[0].style.color = '#fff';
    blueBoxes[0].style.backgroundColor = '#85a2a3';
    blueBoxes[0].style.border = 'none';
    blueBoxes[0].style.opacity = '10';
    blueBoxes[0].style.boxShadow = 'none';
});


blueBoxes[1].addEventListener("mouseover", function () {
    titles[1].style.fontWeight = '700';
    titles[1].style.fontSize = '20px';
    titles[1].style.color = '#85a2a3';
    blueBoxes[1].style.backgroundColor = 'transparent';
    blueBoxes[1].style.border = '.5px solid #85a2a3';
    blueBoxes[1].style.boxShadow = 'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px';
});

blueBoxes[1].addEventListener("mouseout", function () {
    titles[1].style.fontWeight = '400';
    titles[1].style.fontSize = '16px';
    titles[1].style.color = '#fff';
    blueBoxes[1].style.backgroundColor = '#85a2a3';
    blueBoxes[1].style.border = 'none';
    blueBoxes[1].style.opacity = '10';
    blueBoxes[1].style.boxShadow = 'none';
});

blueBoxes[2].addEventListener("mouseover", function () {
    titles[2].style.fontWeight = '700';
    titles[2].style.fontSize = '20px';
    titles[2].style.color = '#85a2a3';
    blueBoxes[2].style.backgroundColor = 'transparent';
    blueBoxes[2].style.border = '.5px solid #85a2a3';
    blueBoxes[2].style.boxShadow = 'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px';
});

blueBoxes[2].addEventListener("mouseout", function () {
    titles[2].style.fontWeight = '400';
    titles[2].style.fontSize = '16px';
    titles[2].style.color = '#fff';
    blueBoxes[2].style.backgroundColor = '#85a2a3';
    blueBoxes[2].style.border = 'none';
    blueBoxes[2].style.opacity = '10';
    blueBoxes[2].style.boxShadow = 'none';
});

blueBoxes[3].addEventListener("mouseover", function () {
    titles[3].style.fontWeight = '700';
    titles[3].style.fontSize = '20px';
    titles[3].style.color = '#85a2a3';
    blueBoxes[3].style.backgroundColor = 'transparent';
    blueBoxes[3].style.border = '.5px solid #85a2a3';
    blueBoxes[3].style.boxShadow = 'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px';
});

blueBoxes[3].addEventListener("mouseout", function () {
    titles[3].style.fontWeight = '400';
    titles[3].style.fontSize = '16px';
    titles[3].style.color = '#fff';
    blueBoxes[3].style.backgroundColor = '#85a2a3';
    blueBoxes[3].style.border = 'none';
    blueBoxes[3].style.opacity = '10';
    blueBoxes[3].style.boxShadow = 'none';
});

blueBoxes[4].addEventListener("mouseover", function () {
    titles[4].style.fontWeight = '700';
    titles[4].style.fontSize = '20px';
    titles[4].style.color = '#85a2a3';
    blueBoxes[4].style.backgroundColor = 'transparent';
    blueBoxes[4].style.border = '.5px solid #85a2a3';
    blueBoxes[4].style.boxShadow = 'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px';
});

blueBoxes[4].addEventListener("mouseout", function () {
    titles[4].style.fontWeight = '400';
    titles[4].style.fontSize = '16px';
    titles[4].style.color = '#fff';
    blueBoxes[4].style.backgroundColor = '#85a2a3';
    blueBoxes[4].style.border = 'none';
    blueBoxes[4].style.opacity = '10';
    blueBoxes[4].style.boxShadow = 'none';
});

/* Hovering Over Topic Titles */

const topics = document.getElementsByClassName('topic');
const topicTitles = document.getElementsByClassName('topic-title');
const icons = document.getElementsByClassName('dropdown-icon');

topics[0].addEventListener("mouseover", function () {
    topics[0].style.cursor = 'pointer';
    topicTitles[0].style.fontWeight = '700';
    topicTitles[0].style.textDecoration = 'underline';
    icons[0].style.color = '#807c4e';
});

topics[0].addEventListener("mouseout", function () {
    topicTitles[0].style.fontWeight = '400';
    topicTitles[0].style.textDecoration = 'none';
    icons[0].style.color = 'transparent';
});

topics[1].addEventListener("mouseover", function () {
    topicTitles[0].style.fontWeight = '400';
    icons[0].style.color = 'transparent';
    topics[1].style.cursor = 'pointer';
    topicTitles[1].style.fontWeight = '700';
    icons[1].style.color = '#807c4e';
});

topics[1].addEventListener("mouseout", function () {
    topicTitles[1].style.fontWeight = '400';
    icons[1].style.color = 'transparent';
});

topics[2].addEventListener("mouseover", function () {
    topicTitles[0].style.fontWeight = '400';
    icons[0].style.color = 'transparent';
    topics[2].style.cursor = 'pointer';
    topicTitles[2].style.fontWeight = '700';
    icons[2].style.color = '#807c4e';
});

topics[2].addEventListener("mouseout", function () {
    topicTitles[2].style.fontWeight = '400';
    icons[2].style.color = 'transparent';
});

topics[3].addEventListener("mouseover", function () {
    topicTitles[0].style.fontWeight = '400';
    icons[0].style.color = 'transparent';
    topics[3].style.cursor = 'pointer';
    topicTitles[3].style.fontWeight = '700';
    icons[3].style.color = '#807c4e';
});

topics[3].addEventListener("mouseout", function () {
    topicTitles[3].style.fontWeight = '400';
    icons[3].style.color = 'transparent';
});

topics[4].addEventListener("mouseover", function () {
    topicTitles[0].style.fontWeight = '400';
    icons[0].style.color = 'transparent';
    topics[4].style.cursor = 'pointer';
    topicTitles[4].style.fontWeight = '700';
    icons[4].style.color = '#807c4e';
});

topics[4].addEventListener("mouseout", function () {
    topicTitles[4].style.fontWeight = '400';
    icons[4].style.color = 'transparent';
});

/* Toggle Between Topic and Paras */

const paras = document.getElementsByClassName('faq-para');
const upIcon0 = document.getElementById('dropup-icon');

topics[0].addEventListener("click", function () {
    paras[0].classList.toggle('show');
    icons[0].classList.toggle('up');
});

topics[1].addEventListener("click", function () {
    paras[1].classList.toggle('show-grid');
    icons[1].classList.toggle('up');
});

topics[2].addEventListener("click", function () {
    paras[2].classList.toggle('show');
    icons[2].classList.toggle('up');
});

topics[3].addEventListener("click", function () {
    paras[3].classList.toggle('show');
    icons[3].classList.toggle('up');
});

topics[4].addEventListener("click", function () {
    paras[4].classList.toggle('show');
    icons[4].classList.toggle('up');
});







