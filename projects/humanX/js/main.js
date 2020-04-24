$(document).ready(function () {

    
    $(window).scroll(function() {
        var hT = $('header').offset().top,
        hH = $('header').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
        // console.log(hH);

        if ($(window).width() > 1024){
            if (hT > 100){
                // alert('you have scrolled top!');
                //console.log('you have scrolled down!');
                $('header .logo').addClass('active');
                $('header .menu-wrap').addClass('active');
                $('header .hamburger').addClass('active');
            } else if (hT == 0){
                //console.log('you have scrolled top!');
                $('header .logo').removeClass('active');
                $('header .menu-wrap').removeClass('active');
                $('header .hamburger').removeClass('active');
            }
        }

    });


    $('.hamburger').on("click tap", function () {
        $(this).toggleClass('open');
        $('header .menu-wrap').toggleClass('open');
        $('header .hamburger-logo').toggleClass('active');
        $('body').toggleClass('bodyOverflowHidden');
        $('.overlay-body').toggleClass('active');
        //alert('hi');
    });


    $('section.sec-testimonials .btn-wrap').on("click tap", function () {
        $('section.sec-testimonials .other-item').slideToggle('slow');
        $('.btn-wrap .btn-read img').toggleClass('active');
    });


    if ($(window).width() < 1025){

        $('header .li-link .link').click(function() {
            if(!$(this).parent().find('.dropdown').hasClass('active')) {
                $('.dropdown').slideUp();
                $('.link').removeClass('active');
                // console.log('hi ====');
                
            }
            // console.log('hello ====');
            // $(this).addClass('active');
            $(this).toggleClass('active');
            $('.dropdown').removeClass('active');
            $(this).parent().find('.dropdown').slideToggle();
            $(this).parent().find('.dropdown').toggleClass('active');
            // console.log('exit ====');
        });
    }

    


    if ($('.sec-slider').length) {
        var owlHomeBanner = $('#homeBanner.owl-carousel');
        owlHomeBanner.owlCarousel({
            loop: true,
            nav: true,
            dots: true,
            dotsData: false,
            smartSpeed: 600,
            autoPlaySpeed: 600,
            // autoPlayTimeout: 5000,
            slideTransition: 'linear',
            mouseDrag: true,
            autoplay: false,
            lazyLoad:true,
            //autoplay: 6000,
            items: 1,
            video: true,

            onInitialized: function (event) {
                // listen for keyboard input
                $(document).on('keydown', function( event ) { //attach event listener
                    if(event.keyCode == 37) {
                        owlHomeBanner.trigger('prev.owl');
                        // console.log('prev owl owlHomeBanner');
                    }
                    if(event.keyCode == 39) {
                        owlHomeBanner.trigger('next.owl');
                        // console.log('prev owl owlHomeBanner');
                    }
                });
            },
            
            onTranslate: function(event) {
                var currentSlide, player, command;
                currentSlide = $('.owl-item.active');
                player = currentSlide.find(".ytplayer-wrap iframe").get(0);
                command = {
                    "event": "command",
                    "func": "pauseVideo"
                };
                if (player != undefined) {
                    player.contentWindow.postMessage(JSON.stringify(command), "*");        
                }        
            }


        });

        
        // owlHomeBanner.on('changed.owl.carousel', function(event) {
        //     console.log("test");
            // selecting the current active item
            //var item = event.item.index-2;
            // first removing animation for all captions
           // console.log(item, 'item ===');
            
            // $('h1').removeClass('wow fadeInUp saif');
            // $('.owl-item').not('.cloned').eq(item).find('h1').addClass('wow fadeInUp saif');

        //});

        
        
    }

    
    if ($('.sec-partners').length) {
        var owlPartners = $('#partners .owl-carousel');
        owlPartners.owlCarousel({
            margin: 30,
            loop:true,
            nav: true,
            dots: false,
            smartSpeed: 250,
            slideTransition: 'linear',
            mouseDrag: false,
            lazyLoad: true,
            autoplay:true,
            autoplayTimeout:5000,
            autoplayHoverPause:true,
            responsive: {
                0: {
                    center: true,
                    items: 1,
                    margin: 0,
                    nav: false,
                    stagePadding: 80
                },
                361: {
                    center: true,
                    items: 1,
                    margin: 0,
                    nav: false,
                    stagePadding: 100
                },
                375: {
                    center: true,
                    items: 1,
                    margin: 0,
                    nav: false,
                    stagePadding: 70
                },
                481: {
                    center: true,
                    items: 1,
                    margin: 0,
                    nav: false,
                    stagePadding: 90
                },
                768: {
                    items: 3,
                    slideBy: 2
                },
                1200: {
                    items: 4,
                    slideBy: 3
                }
            },
        });

        var owlFunders = $('#funders .owl-carousel');
        owlFunders.owlCarousel({
            margin: 30,
            loop: true,
            nav: true,
            dots: false,
            smartSpeed: 250,
            slideTransition: 'linear',
            mouseDrag: false,
            lazyLoad: true,
            autoplay:true,
            autoplayTimeout:5000,
            autoplayHoverPause:true,
            responsive: {
                0: {
                    center: true,
                    items: 1,
                    margin: 0,
                    nav: false,
                    stagePadding: 80
                },
                361: {
                    center: true,
                    items: 1,
                    margin: 0,
                    nav: false,
                    stagePadding: 100
                },
                375: {
                    center: true,
                    items: 1,
                    margin: 0,
                    nav: false,
                    stagePadding: 80
                },
                481: {
                    center: true,
                    items: 1,
                    margin: 0,
                    nav: false,
                    stagePadding: 90
                },
                768: {
                    items: 3,
                    slideBy: 2
                },
                1200: {
                    items: 4,
                    slideBy: 3
                }
            },
        });
    }    

    if ($('.sec-news').length) {
        var owlNews = $('#news .owl-carousel');
        owlNews.owlCarousel({
            autoWidth:true,
            // margin: 60,
            loop: false,
            nav: true,
            dots: false,
            smartSpeed: 500,
            slideTransition: 'linear',
            mouseDrag: false,
            autoplay: false,
            lazyLoad: true,
            responsive: {
                0: {
                    items: 1,
                    singleItem:true,
                    // center:true,
                    nav: false
                },
                600: {
                    items: 2
                },
                768: {
                    items: 3
                }
            },
        });
    }

    if ($('.sec-testimonials').length) {
        var owlTestimonials = $('#testimonials .owl-carousel');
        owlTestimonials.owlCarousel({
            navigation : true,
            items : 1, 
            loop:true,
            nav:true,
            dots: false,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            mouseDrag: false,
            autoplayHoverPause:true,
            smartSpeed: 250,
            slideTransition: 'linear',
            lazyLoad: true,
            autoplay:true,
            autoplayTimeout:9000

            // onInitialized: function (event) {
            //     // listen for keyboard input
            //     $(document).on('keydown', function( event ) { //attach event listener
            //         if(event.keyCode == 37) {
            //             owlHomeBanner.trigger('prev.owl');
            //             console.log('prev owl testimonials');
                        
            //         }
            //         if(event.keyCode == 39) {
            //             owlTestimonials.trigger('next.owl');
            //             console.log('next owl testimonials');
            //         }
            //     });
            // },
        });
    }

   

    var num = $("ul.tabs").find("li").length;
    // console.log(num);

    $('ul.tabs li').click(function () {
        var tab_id = $(this).attr('data-tab');      

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');
        
        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
 
        // var index = $( "ul.tabs li" ).index( this );
        // console.log(index);       

    });

});


(function($) {
    $('.t1').click(function() {
        $(".bgImg").css("background-image", "url('../../images/slider.jpg')");
    });
    $('.t2').click(function() {
        $(".bgImg").css("background-image", "url('../../images/slider-2.jpg')");      
    });
    $('.t3').click(function() {
        $(".bgImg").css("background-image", "url('../../images/slider-3.jpg')");
    });
    $('.t4').click(function() {
        $(".bgImg").css("background-image", "url('../../images/slider-4.jpg')");
    });


})(jQuery);





// Number Counter
if ($('#counter').length) {
    var a = 0;
    $(window).scroll(function () {
    
        var oTop = $('#counter').offset().top - window.innerHeight;
        // console.log(oTop);
    
        if (a == 0 && $(window).scrollTop() > oTop) {
            $('.counter-value').each(function () {
                var $this = $(this),
                    countTo = $this.attr('data-count');
                $({
                    countNum: $this.text()
                }).animate({
                    countNum: countTo
                }, {
                        duration: 7000,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function () {
                            $this.text(this.countNum);
                            //alert('finished');
                        }
    
                    });
            });
            a = 1;
        }
    
    });
}


if ($('.sec-map').length) {
    var jsonData = [
        {
            //'id': 'Path-2',
            'id': 'Group-19',
            'firstBlockFigure': '10,25,188',
            'firstBlockText': 'Million acres restored',
            'secondBlockFigure': '36,59,338',
            'secondBlockText': 'Million lives impacted',
            'thirdBlockFigure': '4,474',
            'thirdBlockText': 'Villages strengthened',
            'fourthBlockFigure': 'Go to Rajasthan',
            'fourthBlockText': 'https://www.google.com/',
        },
        {
            //'id': 'Path-5',
            'id': 'Group-20',
            'firstBlockFigure': '75,489',
            'firstBlockText': 'Million acres restored',
            'secondBlockFigure': '5,44,803',
            'secondBlockText': 'Million lives impacted',
            'thirdBlockFigure': '919',
            'thirdBlockText': 'Villages strengthened',
            'fourthBlockFigure': 'Go to Gujarat',
            'fourthBlockText': 'https://www.google.com/',
        },
        {
            //'id': 'Path-6',
            'id': 'Group-21',
            'firstBlockFigure': '65311',
            'firstBlockText': 'Million acres restored',
            'secondBlockFigure': '1,59,333',
            'secondBlockText': 'Million lives impacted',
            'thirdBlockFigure': '163',
            'thirdBlockText': 'Villages strengthened',
            'fourthBlockFigure': 'Go to Maharashtra',
            'fourthBlockText': 'https://www.google.com/',
        },
        {
            //'id': 'Path-12',
            'id': 'Group-24',
            'firstBlockFigure': '1,061,981',
            'firstBlockText': 'Million acres restored',
            'secondBlockFigure': '26,44,802',
            'secondBlockText': 'Million lives impacted',
            'thirdBlockFigure': '3,636',
            'thirdBlockText': 'Villages strengthened',
            'fourthBlockFigure': 'Go to Andra Pradesh',
            'fourthBlockText': 'https://www.google.com/',
        },
        {
            //'id': 'Path-15',
            'id': 'Group-25',
            'firstBlockFigure': '29,50,313',
            'firstBlockText': 'Million acres restored',
            'secondBlockFigure': '48,10,237',
            'secondBlockText': 'Million lives impacted',
            'thirdBlockFigure': '11,243',
            'thirdBlockText': 'Villages strengthened',
            'fourthBlockFigure': 'Go to Odisha',
            'fourthBlockText': 'https://www.google.com/',
        },
        {
            //'id': 'Path-16',
            'id': 'Group-42',
            'firstBlockFigure': '92,236',
            'firstBlockText': 'Million acres restored',
            'secondBlockFigure': '1,40,173',
            'secondBlockText': 'Million lives impacted',
            'thirdBlockFigure': '110',
            'thirdBlockText': 'Villages strengthened',
            'fourthBlockFigure': 'Go to Nagaland',
            'fourthBlockText': 'https://www.google.com/',
        },
        {
            'id': 'Stroke-45',
            'firstBlockFigure': '1,92,468',
            'firstBlockText': 'Million acres restored',
            'secondBlockFigure': '7,54,390',
            'secondBlockText': 'Million lives impacted',
            'thirdBlockFigure': '1,268',
            'thirdBlockText': 'Villages strengthened',
            'fourthBlockFigure': 'Go to Karnataka',
            'fourthBlockText': 'https://www.google.com/',
        },
    
        {
            'id': 'Stroke-7',
            'firstBlockFigure': '29,455',
            'firstBlockText': 'Million acres restored',
            'secondBlockFigure': '25,007',
            'secondBlockText': 'Million lives impacted',
            'thirdBlockFigure': '88',
            'thirdBlockText': 'Villages strengthened',
            'fourthBlockFigure': 'Go to Uttaranchal',
            'fourthBlockText': 'https://www.google.com/',
        },
    
        {
            'id': 'Group-8',
            'firstBlockFigure': '13,63,498',
            'firstBlockText': 'Million acres restored',
            'secondBlockFigure': '1,23,625',
            'secondBlockText': 'Million lives impacted',
            'thirdBlockFigure': '1,761',
            'thirdBlockText': 'Villages strengthened',
            'fourthBlockFigure': 'Go to Himachal',
            'fourthBlockText': 'https://www.google.com/',
        },
        
        {
            //'id': 'Stroke-26',
            'id': 'Group-41',
            'firstBlockFigure': '1,14,382',
            'firstBlockText': 'Million acres restored',
            'secondBlockFigure': '1,49,461',
            'secondBlockText': 'Million lives impacted',
            'thirdBlockFigure': '424',
            'thirdBlockText': 'Villages strengthened',
            'fourthBlockFigure': 'Go to Madhya Pradesh',
            'fourthBlockText': 'https://www.google.com/',
        }
    ]
    
    window.onload = function() {
        var svgHotSpotId = "";
        document.addEventListener("click", function(e){
            var getParentNode = e.target.nodeName;
            
            if(getParentNode.indexOf("polygon") == -1) {
                if(e.target.id == "Stroke-26" || e.target.id == "Combined-Shape") {
                    return false;
                }
                document.querySelectorAll(".mapData")[0].style.opacity = 0;            
                document.querySelectorAll(".mapData")[0].style.zIndex = "0";
            }
        });
    
        document.querySelectorAll(".map-wrapper")[0].getElementsByTagName("svg")[0].addEventListener("click", function(e) {
            console.log(e.target.id + "|||" + e.target.parentNode.id);
            var targetId = e.target.parentNode.id;
            if(svgHotSpotId != targetId) 
            {
                svgHotSpotId = targetId;
            }
            else {
                return false;
            }
            // console.log(svgHotSpotId);
            //console.log(targetId);
            //console.log(e.clientX);
            var hotspotClickData = "";
            hotspotClickData = jsonData.filter(function(i) {
                return i.id == targetId;
            });
    // console.log(hotspotClickData);
            if(hotspotClickData == "") {
                document.querySelectorAll(".mapData")[0].style.opacity = 0;
                return false;
            }
    
            for(var i=1; i<=document.querySelectorAll(".mapData")[0].querySelectorAll(".flex-box")[0].children.length; i++) {
                switch(i) {
                    case 1:
                    val = "firstBlock"
                    break;
                    case 2:
                    val = "secondBlock"
                    break;
                    case 3:
                    val = "thirdBlock"
                    break;
                    case 4:
                    val = "fourthBlock"
                    break;
                    default:
                    val = "unknown"
                }
                var jsonVal = "hotspotClickData[0]." + val + "Figure";
                var jsonText = "hotspotClickData[0]." + val + "Text";
                
                if(val != 'fourthBlock') {
                    document.querySelectorAll(".mapData")[0].querySelectorAll("."+val)[0].getElementsByTagName("span")[0].innerHTML = eval(jsonVal);
                    document.querySelectorAll(".mapData")[0].querySelectorAll("."+val)[0].getElementsByTagName("span")[1].innerHTML = eval(jsonText);
                }
                else {
                    document.querySelectorAll(".mapData")[0].querySelectorAll("."+val)[0].getElementsByTagName("span")[0].innerHTML = eval(jsonVal);
                    document.querySelectorAll(".mapData")[0].querySelectorAll("."+val)[0].getElementsByTagName("a")[0].setAttribute('href', eval(jsonText));
                }
                
            }
    
            // console.log(e);
            document.querySelectorAll(".mapData")[0].style.opacity = 1;
            document.querySelectorAll(".mapData")[0].style.top = e.offsetY - document.querySelectorAll(".mapData")[0].clientHeight - 15 + "px";
            // console.log(e);
            // console.log(window.innerWidth + "||||" + e.clientX + "|||" + document.querySelectorAll(".mapData")[0].offsetWidth);
    
            var winWidth = window.innerWidth;
            var clientx = e.clientX;
            var mapdataWidth = document.querySelectorAll(".mapData")[0].offsetWidth;
    
            if((winWidth - clientx) > mapdataWidth){
                document.querySelectorAll(".mapData")[0].style.left = e.offsetX - 24 + "px";
                document.querySelectorAll(".mapData")[0].style.zIndex = "2";
                document.querySelectorAll(".mapData")[0].classList.remove("mystyle");
            } else {
                document.querySelectorAll(".mapData")[0].style.left = (e.offsetX - mapdataWidth) +24  + "px";
                document.querySelectorAll(".mapData")[0].style.zIndex = "2";
                document.querySelectorAll(".mapData")[0].classList.add("mystyle");
            }
    
        });
    }
}


