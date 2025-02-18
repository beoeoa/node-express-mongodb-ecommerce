(function ($) {
    $("#owldemo").owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>", "<i class='fa fa-angle-right' aria-hidden='true'></i>"],
        dots: false,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            600: {
                items: 2,
                nav: false,
            },
            1000: {
                items: 3,
                margin: 20,
                nav: true,
            }
        }
    });
    $("#owldemo1").owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>", "<i class='fa fa-angle-right' aria-hidden='true'></i>"],
        responsive: {
            0: {
                items: 1,
                dots: false,
                nav: false,
            },
            600: {
                items: 2,
                dots: false,
                nav: false,
            },
            1000: {
                items: 2,
                margin: 20,
                nav: true,
            }
        }
    });
    $("#owldemo2").owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        items: 1,
        dots: false,
        nav: false,
        responsive: {
            1000: {
                margin: 20,
            }
        }
    });
    $("#owldemo3").owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>", "<i class='fa fa-angle-right' aria-hidden='true'></i>"],
        responsive: {
            0: {
                items: 1,
                dots: false,
                nav: false,
            },
            600: {
                items: 1,
                dots: false,
                nav: false,
            },
            1000: {
                items: 1,
                margin: 20,
                nav: true,
            }
        }
    });
    $("#owldemo4").owlCarousel({
        loop: true,
        animateOut: 'fadeOut',
        animateIn: 'bounceInUp',
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        dots: false,
        nav: false,
        items: 1,
    });
})(jQuery);
