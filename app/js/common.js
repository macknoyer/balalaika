$(function() {
	$('.menu__humburger').on('click', function() {
		$(this).parent().find('.menu').slideToggle();
	});
	$('.raid_calendar-mobile').on('click', function() {
		$(this).toggleClass('open').next('.raid_calendar').slideToggle();
	});
	$('.raid_calendar-showall').on('click', function() {
		$(this).toggleClass('open').parents().find('.raid_calendar-hidden').slideToggle();
	});
	$(document).ready(function(){
	  $(".topbanner__slider").owlCarousel({
	  	items:1,
	  	nav:true,
	  	navText:false,
	  	dots:false,
	  	responsive: {
		    0 : {
		    	items: 1,
		    	nav: false
		    },
		    // breakpoint from 480 up
		    480 : {
		    	items: 1,
		    	nav: false
		    },
		    // breakpoint from 768 up
		    768 : {
		    	items: 1,
		    	nav: true
		    }	  		
	  	}
	  });
	  $(".trustpoint_review-mobile").owlCarousel({
	  	items:1,
	  	nav:true,
	  	navText:false,
	  	dots:false,
	  	responsive: {
		    0 : {
		    	items: 1,
		    	nav: false
		    },
		    // breakpoint from 480 up
		    480 : {
		    	items: 1,
		    	nav: false
		    },
		    // breakpoint from 768 up
		    768 : {
		    	items: 1,
		    	nav: false
		    }	  		
	  	}
	  });
	  $(".offers_slider").owlCarousel({
	  	items:4,
	  	nav:true,
	  	navText:false,
	  	dots:true,
	  	margin: 20,
	  	responsive: {
		    0 : {
		    	items: 1,
		    	nav: false
		    },
		    // breakpoint from 480 up
		    480 : {
		    	items: 1,
		    	nav: false
		    },
		    // breakpoint from 768 up
		    768 : {
		    	items: 4,
		    	nav: true
		    }	  		
	  	}
	  });
	  $('.select').select2();
	});
    $(window).on("load",function(){
        $(".raid_calendar-scroll").mCustomScrollbar({
        	theme:"dark"
        });
    });
	$('ul.tabs__list').on('click', 'li:not(.active)', function() {
	$(this).addClass('active').siblings().removeClass('active').parents().find('.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
		}); 
	$('.filter_title.open').on('click', function() {
		$(this).toggleClass('active').parent().find('.filter_block').slideToggle();
	}); 
});
