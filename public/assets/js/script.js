$(document).ready(function(){
	"use strict";


});

$(window).on('load', function(){
	"use strict";
	setTimeout(function(){
		$('.preloader').addClass('inactive');
	}, 500);
	
});






//nav//

$(document).ready(function(){
	"use strict";
	
	$('.plus').click(function () {
		if ($('#qty').val() < 10) {
			$('#qty').val(+$('#qty').val() + 1);
		}
	});
	$('.minus').click(function () {
		if ($('#qty').val() > 1) {
			if ($('#qty').val() > 1) $('#qty').val(+$('#qty').val() - 1);
		}
	});

	$('.product-image-slider .item').on('click', function(){
		var parent = $(this).parents('.product-image-slider');
		var image = $(this).find('img').attr('src');
		//console.log(image);
		parent.siblings('.product-image').find('img').attr('src',image);
	});

});
//banner owl//

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


            $("#owldemo2").owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>", "<i class='fa fa-angle-right' aria-hidden='true'></i>"],
        responsive: {
            0: {
                items: 3,
                dots: false,
                nav: false,
            },
            600: {
                items: 4,
                dots: false,
                nav: false,
            },
            1000: {
                items: 7,
                margin: 20,
                nav: true,
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
                items: 2,
                dots: false,
                nav: false,
            },
            1000: {
                items: 4,
                margin: 20,
                nav: true,
            }
        }
    })
      $("#owldemo4").owlCarousel({
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
    })
//$(window).on('load', function(){
//	"use strict";
//	setTimeout(function(){
//		$('.preloader').addClass('inactive');
//	}, 500);
//
//
//	$('.custom-tab .item-tablink').on('click', function(){
//		var parent = $(this).parents('[data-tab]');
//		var parent_tab = parent.data('tab');
//		var current_link = $(this).data('tablink');
//		var content = $('.custom-tab-content[data-tab-content="'+parent_tab+'"]');
//		parent.children('.item').removeClass('active');
//		$(this).parent('.item').addClass('active');
//		content.children('.item').fadeOut(0).removeClass('active');
//		content.children('.item[data-tabcontent="'+current_link+'"]').fadeIn(500);
//	});
//	
//});
//$(document).ready(function(){
//	"use strict";
//	
//	$('.plus').click(function () {
//		if ($('#qty').val() < 10) {
//			$('#qty').val(+$('#qty').val() + 1);
//		}
//	});
//	$('.minus').click(function () {
//		if ($('#qty').val() > 1) {
//			if ($('#qty').val() > 1) $('#qty').val(+$('#qty').val() - 1);
//		}
//	});
//
//	$('.product-image-slider .item').on('click', function(){
//		var parent = $(this).parents('.product-image-slider');
//		var image = $(this).find('img').attr('src');
//		//console.log(image);
//		parent.siblings('.product-image').find('img').attr('src',image);
//	});
//	
//
//});

//navigation
$('.btn-menu').on('click', function(){
    $('.header .navigation-wrap').addClass('active');
    $('.header .menu-overlay').addClass('active');
});
$('.header .menu-overlay').on('click', function(){
   $('.header .navigation-wrap').removeClass('active');
    $(this).removeClass('active');
});



//--------------------------SignUp Modal--------------------------//

var a = document.querySelector('.user-options').lastElementChild;
var b = document.querySelector('.signup-btn');
var c = document.querySelector('.Signin-btn');
var d = document.querySelector('.btn-fogot-password');


a.addEventListener('click',function(){
    $('.sign-up-inner,.forgot-inner').hide();
    $('.sign-in-inner').show();
});

b.addEventListener('click',function(){
    $('.sign-up-inner,.sign-in-inner').toggle();
});

c.addEventListener('click',function(){
    $('.sign-up-inner').toggle();
    $('.sign-in-inner').show();
});

d.addEventListener('click',function(){
    $('.forgot-inner,.sign-in-inner').toggle();
});
