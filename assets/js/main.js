// Scroll Y
let UP = document.getElementById("UP");

window.onscroll = function(){

  if (scrollY >= 100) {
    UP.style.display = 'block';
  } else {
    UP.style.display = 'none';
  }
}

UP.onclick = function () {
  scroll ({
    left : 0,
    top : 0,
    behavior : 'smooth'
  })
}


// Chang Background Navbar With scrollY
let header = document.getElementById('header');


$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 300) {
	    $("header").css("background" , "antiquewhite");
	  }

	  else{
		  $("header").css("background" , "#fff");  	
	  }
  })
})

// ******************************************

// Chang backgroundColor Body

// *********************************************
window.addEventListener('scroll', () => {
  const verticalScrollPx = window.scrollY || window.pageYOffset;

  if (verticalScrollPx < 500) {
    document.body.style.backgroundColor = '#adb5bd';
  } else if (verticalScrollPx > 500 && verticalScrollPx < 1000) {
    document.body.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
  } else {
    document.body.style.backgroundColor = '#fff';
  }
});
// ***********************************************************************


























AOS.init({
    offset: 400,
    duration: 1000
  });