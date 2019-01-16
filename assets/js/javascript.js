$(document).ready(function(){


    /////STICKY NAV BAR 

    // When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementsByClassName("section-navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    //navbar.classList.remove("sticky");
  }
}





    $(".services").click(function(){
        event.preventDefault();
        console.log("you clicked services!")
        $("html, body").animate({
            scrollTop: $("#scrollToServices").offset().top
        }, 750)
    })


    $(".about").click(function(){
        event.preventDefault();
        console.log("you clicked about!");
        $("html, body").animate({
            scrollTop: $("#scrollToAttorneyProfile").offset().top
        }, 750)

    })


    $(".contact").click(function(){
        event.preventDefault();
        console.log("you clicked contact!")
        $("html, body").animate({
            scrollTop: $("#scrollToContact").offset().top
        }, 750)
    })


})


