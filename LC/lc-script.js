var navigation = document.getElementById('mainGrid');
var mainSection = document.getElementById('sectionGridOne');
const w = window.innerWidth;

if (w >= 1025 ) {
  window.addEventListener("scroll", function() {
    navigation.style.position = "fixed";
    navigation.style.zIndex = "3";
    navigation.style.background = "rgba(163,66,255, .4)";
    mainSection.style.marginTop = '90px';
  });
}
