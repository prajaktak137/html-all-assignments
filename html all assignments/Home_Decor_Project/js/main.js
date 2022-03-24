var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("ImageSlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// Customer registration form validation

function valid(){
  var ename=document.getElementById("fullname").value;
  var mobile=document.getElementById("mobile").value;
  var email=document.getElementById("email").value;
 
  var regEname=/^[a-zA-Z ]{2,50}$/;
  var regMobile=/^[6-9][0-9]{9}$/;
  var regEmail=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if(!regEname.test(ename))
  {
      alert("Only alphabate allow in name field");
      document.getElementById("fullname").focus();
      return false;
  }
  else if(!regMobile.test(mobile)){
      alert("10 Digit mobile number allow");
      document.getElementById("mobile").focus();
      return false;
  }
  else if(!regEmail.test(email)){
      alert("Email Format Incorrect");
      document.getElementById("email").focus();
      return false;
  }
  
  else {
      return true;
  }
}