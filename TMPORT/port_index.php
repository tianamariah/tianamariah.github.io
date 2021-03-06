<!--
Filename: port_index.php
Author: Tiana Mangual
Date: 10/5/17
-->

<?php

if($_POST["submit"]) {
  $subject="New Message";
  $sender=$_POST["fName"];
  $senderEmail=$_POST["userEmail"];
  $message=$_POST["message"];

  $mailBody="Name: $sender\nEmail: $senderEmail\n\n$message";

  mail("tmm010316@gmail.com", $subject, $mailBody, "From: $sender <$senderEmail>");

  $thankYou="<br><h6>Awesome! Your message has been sent, successfully! I will be in contact.</h6>";
}

?>

<!doctype html>
<html lang="en">
<head>
	<!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="Tiana Mangual is a Front End Web Developer well versed in HTML5, CSS3, JavaScript, Bootstrap, Responsive Design and Agile Development.">
  <meta name="keywords" content="Front End Developer, Brooklyn, NY, BK, E-Commerce, Web Designer, Web Designer, Freelance Web Developer. ">
  <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
  <title>Tiana Mangual | Front-End Developer</title>
	<link href="port_styles.css" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Kavivanar|Nothing+You+Could+Do|Quicksand:300,400,500,700" rel="stylesheet">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
	<script src="https://use.fontawesome.com/75fc4c42c3.js"></script>
</head>

<body class="container-fluid" id="body">
	<div class="container-fluid rounded" id="main">
    <div id="navigation">
      <nav class="navbar navbar-light" style="background-color: #ffffff;">
        <a class="navbar-brand" href="port_index.html"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" id="toggleToggle">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul class="nav justify-content-center">
            <li class="nav-item">
              <a class="nav-link" href="#one">Resume</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#two">Projects</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#three">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>

		<header>
          <p class="display-4" id="name">Tiana Mangual</p>
          <p id="jobTitle">Web Designer &amp; Front End Developer</p>
          <br>
          <p><img src="img/tmm.jpg" alt="Photo of author" class="rounded-circle img-fluid img-thumbnail" width="100" height="100" id="photo"/></p>

          <br>
		</header>
    <div class="container-fluid" id="intro">
      <p> Hey, there!</p>
      <p>My name is Tiana and I enjoy designing and building functional websites.
       I also enjoy...</p>
      <p><span id="hobbies">drinking tea <i class="fa fa-coffee" aria-hidden="true"></i></span></p>
      <p> You can <a href="tiana_mangual_resume_2018.pdf" download="Mangual_Tiana_Resume_2018">download my resume here</a>.</p>
      <p> If you'd like to get in touch, please check the contact section.</p>
    </div>

		<div class="container-fluid" id="mainAccordion" role="tablist">
	  	<div class="card">
	    	<div class="card-header" role="tab" id="headingOne">
	      	<p class="mb-0">
	        	<a data-toggle="collapse" href="#collapseOne" aria-expanded="false" aria-controls="collapseOne" onclick="changeColor1()">
	          	<span class="accordionTitles" id="one">Resume</span>
	        	</a>
	      	</p>
	    	</div>
				<div id="collapseOne" class="collapse show" role="tabpanel" aria-labelledby="headingOne" data-parent="#mainAccordion">
          <div class="row" id="resumeSection">
            <div class="col-lg">
              <hr>
              <h5 class="resumeHeadings">Expertise</h5>
              <hr>
                <div class="row">
                  <div class="col">
                    <p>HTML5</p>
                    <p>CSS3</p>
                    <p>JavaScript</p>
                    <p>jQuery</p>
                    <p>Bootstrap</p>
                    <p>GitHub</p>
                    <p>Google Sheets</p>
                  </div>
                  <div class="col">
                    <p>Atom</p>
                    <p>Photoshop</p>
                    <p>Illustrator</p>
                    <p>Microsoft Suite</p>
                    <p>Google Docs</p>
                    <p>Responsive Design</p>
                    <p>Trello</p>
                  </div>
                </div>
              </div>
            <div class="col-sm">
              <hr>
              <h5 class="resumeHeadings">Education</h5>
              <hr>
              <h6><strong>Tidewater Community College</strong></h6>
              <p>Web Development Specialist Certificate -  December 2017</p>
              <h6><strong>Certified Internet Web Professional</strong></h6>
              <p>Site Development Associate Certificate -  December 2016</p>
              <h6><strong>Worcester State University</strong></h6>
              <p>Bachelor of Arts -  Spring 2013</p>
            </div>
            <div class="col-sm">
              <hr>
              <h5 class="resumeHeadings">Career History</h5>
              <hr>
              <h6><strong>Old Dominion University</strong></h6>
              <p>Enrollment Manager - 2015 - 2018</p>
              <h6><strong>Indique Hair</strong></h6>
              <p>Customer Care Liaison - 2013 - 2015</p>
              <h6><strong>Worcester State University</strong></h6>
              <p>Office Manager - 2013 - 2014</p>
              <h6><strong>Seven Hills Charter Public School</strong></h6>
              <p>Administrative Assistant - Program Secretary - 2008 - 2013</p>
            </div>

          </div>
	      </div>
  		 </div>

			<div class="card">
	    	<div class="card-header" role="tab" id="headingTwo">
	      	<p class="mb-0">
	        	<a class="collapsed" data-toggle="collapse" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" onclick="changeColor2()">
	          	<span class="accordionTitles" id="two">Projects</span>
	        	</a>
	      	</p>
	    	</div>
				<div id="collapseTwo" class="collapses show" role="tabpanel" aria-labelledby="headingTwo" data-parent="#mainAccordion">
	      	<div class="card-body">
						<div class="row">
	  					<div class="col-lg">
                <hr>
                <h5 class="card-title">Everything I've Learned</h5>
                <hr>
                <div class="card" style="width: 18rem;" id="cardProjects">
                  <img class="card-img-top" src="img/img_eil.png" alt="Card image cap">
                  <div class="card-body">
                    <br>
                    <p class="card-text">An overview of the material covered in Professor Barbieri's course, ITP 140- Client-Side Scripting.</p>
                    <p class="card-text">Using HTML5, CSS3, JavaScript & Bootstrap, I developed a tutorial-like experience covering topics learned in ITP 140.</p>
                    <br>
	        					<p><a href="https://tianamariah.github.io/index.html" target="_blank" class="btn btn-outline-light"  id="btnProjects">View Project</a></p>
                  </div>
                </div>
              </div>
              <div class="col-lg">
                <hr>
                <h5 class="card-title" href="http://www.tidewaterconcertband.net/" target="_blank">Tidewater Concert Band</h5>
                <hr>
                  <div class="card" style="width: 18rem;" id="cardProjects">
                    <img class="card-img-top" src="img/img_tcb.png" alt="Card image cap">
                    <div class="card-body">
                      <p class="card-text"> I worked in a team of three to develop a modern site for TCB that was appealing to the eye, responsive and user-oriented.</p>
                      <p class="card-text">Project Contributions: Site Layout, Responsive Design, Bootstrap Carousel </p>
                        <br>
                      <a href="http://www.tidewaterconcertband.net/" class="btn btn-outline-light"  target="_blank" id="btnProjects">View Project</a>
                    </div>
                  </div>
  	  					</div>
                <div class="col-lg">
                  <hr>
                  <h5 class="card-title" href="http://www.tidewaterconcertband.net/" target="_blank">Countdown til' Baby Template</h5>
                  <hr>
                    <div class="card card-dark" style="width: 18rem;" id="cardProjects">
                      <img class="card-img-top" src="img/img_countDown.png"alt="Card image cap">
                      <div class="card-body">
                        <p class="card-text"> A responsive countdown template created for expecting mothers using HTML5, CSS, JavaScript and Bootstrap.</p>
                        <p class="card-text"> This was a personal project used to show my skills in responsive design.</p>
                        <br><br>
                        <a href="https://github.com/tianamariah/Countdown" class="btn btn-outline-light"  target="_blank" id="btnProjects">View Project</a>
                      </div>
                    </div>
                  </div>
	  					</div>
						</div>
	      	</div>
	    	</div>

  		<div class="card">
	    	<div class="card-header" role="tab" id="headingThree">
	      	<p class="mb-0">
	        	<a class="collapsed" data-toggle="collapse" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree" onclick="changeColor3()">
	          	<span class="accordionTitles" id="three">Contact</span>
	        	</a>
	      	</p>
	    	</div>
				<div id="collapseThree" class="collapse show" role="tabpanel" aria-labelledby="headingThree" data-parent="#mainAccordion">
        <div class="row">
         <div class="col-sm">
	      	<div class="card-body" id="contactSection">
            <h5><span style="font-family:'Nothing You Could Do', cursive;
            text-shadow: .5px .5px #ececec;">Like what you see?</span></h5><br>
            <p>If you feel like getting in touch, please fill out the contact form below.</p>
            <p>If contact forms are not your thing, you can reach out to me on <a href="mailto:tianamangual08@gmail.com" title="Email me">tianamangual08@gmail.com</a></p>
          </div>
        </div>
        <div class="col-sm">
          <div class="container-fluid" id="contactForm">
          <form action="port_index.php" method="post">
            <div class="form-group" id="inputItems">
              <p>
                <input type="text" class="form-control" placeholder="Name" name="fName" required>
              </p>
              <p>
                <input type="text" class="form-control" name="userEmail" placeholder="Email" required>
              </p>
            </div>
            <div class="form-group">
              <textarea class="form-control" id="textArea" rows="8" name="message" placeholder="Your Message..."></textarea>
            </div>
            <input type="submit" name="submit" class="btn btn-outline-light"  id="contactButton">
            <button type="button" class="btn btn-outline-light" onclick="reset()" id="contactButton">Reset</button>
          </form>
          <?=$thankYou ?>
        </div>
        </div>
        </div>
	    	</div>
  		</div>
    </div>

    <div class="container-fluid" id="closing">

    </div>

      <div class="container-fluid row" id="icons">
      <div class="col-lg">
        <p><a href="https://github.com/tianamariah"><i class="fa fa-github-square" aria-hidden="true"></i>&nbsp;github.com/tianamariah</a></p>
      </div>
      <div class="col-lg">
        <p><a href="mailto:tianamangual08@gmail.com"><i class="fa fa-envelope" aria-hidden="true"></i>&nbsp;tianamangual08@gmail.com</a></p>
      </div>
      <div class="col-lg">
        <p><a><i class="fa fa-map-marker" aria-hidden="true"></i></a>&nbsp;Brooklyn, NY 11213</p>
      </div>
    </div>

  </div>

  <script src="port_script.js"></script>
	<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ" crossorigin="anonymous"></script>
</body>
</html>
