$(document).ready((function(){$("#homeBanner .owl-carousel").owlCarousel({loop:!1,nav:!0,dots:!0,smartSpeed:500,slideTransition:"linear",mouseDrag:!0,autoplay:!1,items:1,video:!0,onInitialized:function(e){$(".active .owl-video-play-icon").trigger("click")}}),$("#partners .owl-carousel").owlCarousel({margin:30,loop:!1,nav:!0,dots:!1,smartSpeed:500,slideTransition:"linear",mouseDrag:!1,autoplay:!1,responsive:{0:{items:1},480:{items:2},768:{items:3},1170:{items:4}}}),$("#funders .owl-carousel").owlCarousel({margin:30,loop:!1,nav:!0,dots:!1,smartSpeed:500,slideTransition:"linear",mouseDrag:!1,autoplay:!1,responsive:{0:{items:1},480:{items:2},768:{items:3},1170:{items:4}}}),$("#news .owl-carousel").owlCarousel({autoWidth:!0,loop:!1,nav:!0,dots:!1,smartSpeed:500,slideTransition:"linear",mouseDrag:!1,autoplay:!1,responsive:{0:{items:1},480:{items:2},768:{items:3}}}),$(".play-btn").magnificPopup({type:"iframe",mainClass:"mfp-fade",removalDelay:160,preloader:!1,fixedContentPos:!1})}));