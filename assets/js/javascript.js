$(document).ready(function(){


    /////STICKY NAV BAR 

    var navbar = $(".navbar");
        stickyDiv = "sticky";
        header = -1;

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

        var servicesDiv = $("#scrollToServices");
        var offsetPadding = "offset-padding";
        servicesDiv.addClass(offsetPadding);
    })


    $(".about").click(function(){
        event.preventDefault();
        console.log("you clicked about!");
        $("html, body").animate({
            scrollTop: $("#scrollToAttorneyProfile").offset().top
        }, 750)

        var attorneyDiv = $("#scrollToAttorneyProfile");
        var offsetPadding = "offset-padding";
        attorneyDiv.addClass(offsetPadding);

    })


    $(".contact").click(function(){
        event.preventDefault();
        console.log("you clicked contact!")
        $("html, body").animate({
            scrollTop: $("#scrollToContact").offset().top
        }, 750)

        var contactDiv = $("#scrollToContact");
        var offsetPadding = "offset-padding";
        contactDiv.addClass(offsetPadding);
    })


})


