
  function showHairBundles() {
    document.getElementById('allProducts').style.display = "none";
    document.getElementById('hairProducts').style.display = "none";
    document.getElementById('hairBundles').style.display = "block";
  };

  function showHairProducts() {
    document.getElementById('allProducts').style.display = "none";
    document.getElementById('hairBundles').style.display = "none";
    document.getElementById('hairProducts').style.display = "block";
  };

  function showAllProducts() {
    document.getElementById('hairBundles').style.display = "none";
    document.getElementById('hairProducts').style.display = "none";
    document.getElementById('allProducts').style.display = "block";
  };

  function showItem1() {

    document.getElementById('cart.html/#col1').style.display = "block";

  };

  $(document).ready(function(){
    $("#item1").click(function(){
      $("p").append(" <b>Appended text</b>.");
    });

    $("#btn2").click(function(){
      $("ol").append("<li>Appended item</li>");
    });
  });
