$(document).ready(function(){


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


