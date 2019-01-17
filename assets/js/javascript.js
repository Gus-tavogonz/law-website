$(document).ready(function(){


    /////STICKY NAV BAR 

    var navbar = $(".navbar");
        stickyDiv = "sticky";
        header = $(".navbar").height();

        $(window).scroll(function() {
            if ( $(this).scrollTop() > header){
                navbar.addClass(stickyDiv);
            } else {
                navbar.removeClass(stickyDiv)
            }
        })


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


