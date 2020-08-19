$(document).ready(function() {



    $('.slide_banner').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true

    });

    $('.slide_destination').slick({
        arrows: false,
        centerMode: true,
        centerPadding: '90px',
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        dots: true,
        responsive: [{
                breakpoint: 769,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '60px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });

    $(".menu").click(function() {
        $("nav").slideToggle();
    });



    var menu = $("nav");
    jQuery(window).on('resize', function() {
        if (!jQuery(".menu").is(":visible") && !menu.is(':visible')) {
            menu.css({ 'display': '' });
        }
    });

    if (window.matchMedia('screen and (min-width: 1199px)').matches) {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 500) {
                $('#header').css("box-shadow", "2px 2px 8px #000000").css("position", "fixed").css("min-height", "63px");
                $('nav ul li').css("margin-top", "22px ").css("margin-bottom", "22px ");
                $('nav ul li:nth-child(4)').css("padding-left", "166px ");

                $('.logo').css("height", "40px").css("width", "100px").css("transform", "translateX(-73%)")

            } else {
                $('#header').css("box-shadow", "none").css("position", "relative").css("min-height", "100px");
                $('nav ul li').css("margin-top", "45px").css("margin-bottom", "45px");
                $('nav ul li:nth-child(4)').css("padding-left", "250px");

                $('.logo').css("height", "89px").css("width", "200px").css("transform", "translateX(-60%)")
            }
        });

    };
    if (window.matchMedia('screen and (max-width: 1199px)').matches) {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 136) {
                $('#header').css("box-shadow", "2px 2px 8px #000000").css("position", "fixed");


            } else {
                $('#header').css("box-shadow", "none").css("position", "relative");

            }
        });
        $("nav ul li").click(function() {
            $("nav").slideUp();

        });
    };


    //menu toggle

    $('.menu').click(function() {
        var checkbox = $(this).find('input[type=checkbox]');
        checkbox.prop("checked", !checkbox.prop("checked"));
    });
    $('nav ul li').click(function() {
        var checkbox = $('.menu').find('input[type=checkbox]');
        checkbox.prop("checked", !checkbox.prop("checked"));
    });
    $('input[type=checkbox]').click(function(e) {
        e.stopPropagation();
        return true;
    });
    $(".menu").hover(function(e) {
        if (!$(".burger").is(":checked"))
            $(".label").addClass("hover");
    }, function() {
        !$(".label").removeClass("hover");
    });
    $(".menu").click(function() {
        $(".label").removeClass("hover");
    });
    // scroll menu
    $('a').click(
        function(event) {
            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 500);
            event.preventDefault();
        });


    //animation wow
    wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: false,
        live: true
    })
    wow.init();


    //scroll nav
    if (window.matchMedia('screen and (min-width: 1199px)').matches) {
        var prevScrollpos = window.pageYOffset;
        window.onscroll = function() {
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                document.getElementById("header").style.top = "0";
            } else {
                document.getElementById("header").style.top = "-68px";
            }
            prevScrollpos = currentScrollPos;
        }
    }

});




// form dang ky mobile
var modal = document.getElementById("registration_mobile_ID");


var btn = document.getElementById("link_registration");


var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//video custom

document.addEventListener('DOMContentLoaded', () => {

    const player = new Plyr('#player');


    window.player = player;

    function on(selector, type, callback) {
        document.querySelector(selector).addEventListener(type, callback, false);
    }


});