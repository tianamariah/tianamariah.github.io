/* Alternating Facts History Sec */
const hF1 = document.getElementById('facts-slider-box-1');
const hF2 = document.getElementById('facts-slider-box-2');



function nextFact() {
  hF1.style.display = 'none';
  hF2.style.display = 'block';
}

function prevFact() {
  hF1.style.display = 'none';
  hF2.style.display = 'block';
}

function nextFact2() {
  hF1.style.display = 'block';
  hF2.style.display = 'none';
}

function prevFact2() {
  hF1.style.display = 'block';
  hF2.style.display = 'none';
}
