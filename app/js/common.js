$(function() {

	$(document).ready(function(){
	  $(".topbanner__slider").owlCarousel({
	  	items:1,
	  	nav:true,
	  	navText:false,
	  	dots:false
	  });
	  $('.select').select2();
	});
    $(window).on("load",function(){
        $(".raid_calendar-scroll").mCustomScrollbar({
        	theme:"dark"
        });
    });
});
