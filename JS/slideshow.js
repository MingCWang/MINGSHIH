var slideIndex = [1,1];
var slideId = ["mySlides", "mySlides1"]
var dotsId = ["demo", "demo1"]
const mediaQuery = window.matchMedia("(max-width: 780px)")
showDivs(1, 0);
showDivs(1, 1);

function plusDivs(n, no) {
  showDivs(slideIndex[no] += n, no);
}

function currentDiv(n, no) {
  showDivs(slideIndex[no] = n, no);
}

function showDivs(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  var dots = document.getElementsByClassName(dotsId[no]);
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].style.backgroundColor = "transparent";
  }
  dots[slideIndex[no]-1].style.backgroundColor = " white";
  if (mediaQuery.matches){ 
    x[slideIndex[no]-1].style.display = "block";  
  }
  else {
    x[slideIndex[no]-1].style.display = "flex";  
  }
  mediaQuery.addEventListener('change', event => {
    if (event.matches){ 
      x[slideIndex[no]-1].style.display = "block";  
    }
    else {
      x[slideIndex[no]-1].style.display = "flex";  
    }
  })
}


 