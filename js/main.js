(function($){
	'use strict';

// Main Menu
$('.pgbay-menu-icon i.fa-bars').on('click', function(){
	$('.pgbay-main-menu').slideDown();
	$('.pgbay-menu-icon i.fa-times').show();
	$(this).hide();
});

$('.pgbay-menu-icon i.fa-times').on('click', function(){
	$('.pgbay-main-menu').slideUp();
	$('.pgbay-menu-icon i.fa-bars').show();
	$(this).hide();
})

$(window).resize(function(){
	var screenSize = $(window).width();

	if (screenSize > 991) {
		$('.pgbay-main-menu').removeAttr('style');
	}

});
// venobox

new VenoBox();
// owl carousel
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:50,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        991:{
            items:2
        },
        574:{
            items:1
        },
        1000:{
            items:4
        }
    }
})
}) (jQuery);