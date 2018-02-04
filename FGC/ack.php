<?php
if (isset($_POST['send']))

{
  $subject = $_POST["subject"];
  $sender = $_POST["name"];
  $senderEmail = $_POST["email"];
  $message = $_POST["message"];

  $mailBody = "Name: $sender\nEmail: $senderEmail\n\n$message";

  mail("hi@fairygoodcook.com", $subject, $mailBody, "From: $sender <$senderEmail>");

  $thankYou="<h5>Thank you, your message has been sent!<br><br>I will be in contact within the next 48hrs.</h5>";
}
?>


<!doctype html>
<html lang="en">
<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="Fairy Good Cook is a personal chef service offering delicious meals cooked in your home. Chef Nilda Rodriguez makes food savory and memorable.">
  <meta name="keywords" content="Personal Chef, Private Chef, Queens, Maspeth, New York, Food, Cooking, Pre-cooked meals, Made to Order, Boutique Private Chef, Food Services, For the love of food, Seasoned Food, Savory Food, Delicious Meals Made to Order.">

  <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
  <title>Fairy Good Cook | Contact </title>
	<link href="fgc_styles.css" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Arima+Madurai:300,400,500,700,800,900|Raleway:300,400,500,600,700,800" rel="stylesheet">

  <!-- Font Awesome -->
  <script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"></script>
  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/css/bootstrap.min.css" integrity="sha384-Zug+QiDoJOrZ5t4lssLdxGhVrurbmBWopoEl+M6BdEfwnCJZtKxi1KgxUyJq13dy" crossorigin="anonymous">
</head>
<body id="body">
  <div class="container" id="main">
  <header>
    <!-- Navigation -->
    <ul class="nav nav-pills nav-fill">
      <li class="nav-item">
        <a class="nav-link" href="home.html"><i class="fas fa-home"></i></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="services.html">Services</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="gallery.html">Gallery</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Contact</a>
      </li>
    </ul>
    <div id="bar"></div>
    <div id="bar2"></div>
  </header>

  <div class="jumbotron" id="jumbo1">
    <div class="container-fluid">
      <a href="home.html"><p id="title">Fairy Good Cook</p></a>
      <p id="tagline">A Personal Chef Service</p>
      <p id="tagline2">By Chef Nilda.</p>
    </div>
  </div>

  <div class="container" id="contactForm">
    <?=$thankYou ?>
  </div>

  <footer>
    <address><p><a href="https://www.instagram.com/fairygoodcook/"><i class="fab fa-instagram fa-2x"></i></a></p><p>Copyright &#169; 2018  Fairy Good Cook | Developer: <a href="http://www.tianamariah.com">Tiana Mariah</a><p></address>
  </footer>
