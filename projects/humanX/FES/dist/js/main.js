function numberWithCommas(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}function numCom(){setTimeout((function(){$("#counter .col span").each((function(){var e=numberWithCommas($(this).text());$(this).text(e)}))}),100)}if($(document).ready((function(){if($(window).scroll((function(){var e=$("header").offset().top;$("header").outerHeight(),$(window).height(),$(this).scrollTop();$(window).width()>1024&&(e>100?($("header .logo").addClass("active"),$("header .menu-wrap").addClass("active"),$("header .hamburger").addClass("active")):0==e&&($("header .logo").removeClass("active"),$("header .menu-wrap").removeClass("active"),$("header .hamburger").removeClass("active")))})),$(".hamburger").on("click tap",(function(){$(this).toggleClass("open"),$("header .menu-wrap").toggleClass("open"),$("header .hamburger-logo").toggleClass("active"),$("body").toggleClass("bodyOverflowHidden"),$(".overlay-body").toggleClass("active")})),$(window).width()<1025&&$("header .li-link").click((function(){$(this).siblings().removeClass("active"),$(this).toggleClass("active"),$(this).find(".dropdown").hasClass("active")||($(".dropdown").slideUp(),$(".link").removeClass("active")),$(this).find(".link").toggleClass("active"),$(".dropdown").removeClass("active"),$(this).find(".dropdown").slideToggle(),$(this).find(".dropdown").toggleClass("active")})),$(".sec-slider").length){var e,t=$("#homeBanner.owl-carousel");function o(){var a=document.getElementById("myVideo");a.currentTime==a.duration?(clearTimeout(e),$(".owl-dots .active").next().click(),t.trigger("play.owl.autoplay")):(t.trigger("stop.owl.autoplay"),e=setTimeout(o,500))}t.owlCarousel({loop:!0,nav:!0,dots:!0,dotsData:!1,items:1,smartSpeed:600,autoplaySpeed:600,autoplay:!0,autoplayTimeout:11e3,mouseDrag:!0,video:!0,onInitialized:function(e){$(document).on("keydown",(function(e){37==e.keyCode&&t.trigger("prev.owl"),39==e.keyCode&&t.trigger("next.owl")}))},onTranslate:function(e){var t,o;o={event:"command",func:"pauseVideo"},null!=(t=$(".owl-item.active").find(".ytplayer-wrap iframe").get(0))&&t.contentWindow.postMessage(JSON.stringify(o),"*")}}),o(),t.on("changed.owl.carousel",(function(a){console.log($(".owl-dots .active").index()),0==$(".owl-dots .active").index()?(document.getElementById("myVideo").play(),o()):(clearTimeout(e),document.getElementById("myVideo").pause(),document.getElementById("myVideo").currentTime=0,t.trigger("play.owl.autoplay"))}))}(window.addEventListener("scroll",(function(e){if($(".sec-partners").length){if(isOnScreen($("#partners")))$("#partners .owl-carousel").owlCarousel({margin:30,loop:!0,nav:!0,dots:!1,smartSpeed:250,slideTransition:"linear",mouseDrag:!1,lazyLoad:!0,autoplay:!0,autoplayTimeout:4e3,autoplayHoverPause:!0,responsive:{0:{center:!0,items:1,margin:0,nav:!1,stagePadding:80},361:{center:!0,items:1,margin:0,nav:!1,stagePadding:100},375:{center:!0,items:1,margin:0,nav:!1,stagePadding:70},481:{center:!0,items:1,margin:0,nav:!1,stagePadding:90},768:{items:3,slideBy:2},1200:{items:4,slideBy:3}}});if(isOnScreen($("#funders")))$("#funders .owl-carousel").owlCarousel({margin:30,loop:!0,nav:!0,dots:!1,smartSpeed:250,slideTransition:"linear",mouseDrag:!1,lazyLoad:!0,autoplay:!0,autoplayTimeout:4e3,autoplayHoverPause:!0,responsive:{0:{center:!0,items:1,margin:0,nav:!1,stagePadding:80},361:{center:!0,items:1,margin:0,nav:!1,stagePadding:100},375:{center:!0,items:1,margin:0,nav:!1,stagePadding:80},481:{center:!0,items:1,margin:0,nav:!1,stagePadding:90},768:{items:3,slideBy:2},1200:{items:4,slideBy:3}}})}})),$(".sec-news").length)&&$("#news .owl-carousel").owlCarousel({autoWidth:!0,loop:!1,nav:!0,dots:!1,smartSpeed:500,slideTransition:"linear",mouseDrag:!1,autoplay:!1,lazyLoad:!0,responsive:{0:{items:1,singleItem:!0,nav:!1},600:{items:2},768:{items:3}}});if($(".sec-testimonials").length){var a=$("#testimonials .owl-carousel");a.owlCarousel({navigation:!0,items:1,loop:!0,nav:!0,dots:!1,animateOut:"fadeOut",animateIn:"fadeIn",mouseDrag:!1,autoplayHoverPause:!0,smartSpeed:250,slideTransition:"linear",lazyLoad:!0,autoplay:!0,autoplayTimeout:9e3,onInitialized:function(e){$(document).on("keydown",(function(e){37==e.keyCode&&a.trigger("prev.owl"),39==e.keyCode&&a.trigger("next.owl")}))}}),a.on("changed.owl.carousel",(function(e){a.trigger("stop.owl.autoplay"),a.trigger("play.owl.autoplay")}))}if($("ul.tabs li.tab-link").click((function(){var e=$(this).index();$(".sec-abt-bn .content").show(),1!=e&&$(".sec-abt-bn .content").hide();var t=$(this).attr("data-tab"),o="https://prodigedigital.com/projects/humanx/FES/images/inner-banner/"+$(this).attr("data-link")+"-bn.jpg";$("ul.tabs li").removeClass("active"),$(".tab-content").removeClass("active"),$(".dots-line-wrap ul.ul-line li").removeClass("active"),$(".bgImg").css("background-image","url("+o+")"),$(this).addClass("active"),$(".dots-line-wrap ul.ul-line #line-"+t).addClass("active"),$("#"+t).addClass("active")})),$(window).width()<1025&&$("ul.tabs").on("click","li:not('.active') a",(function(e){$(this).closest("ul").removeClass("open"),$("span.arrow").removeClass("active")})).on("click","li.active a",(function(e){$(this).closest("ul").toggleClass("open"),$("span.arrow").toggleClass("active")})),$(".board-wrap").length){if($(window).width()>1024){var l='<div class="btn-read flex-wrap"><span>read more</span> <img src="images/circle-arrow.svg" alt=""></div>';$("p.more").each((function(){var e=$(this).html();if(e.length>350){var t=e.substr(0,350)+'<span class="moreellipses">...&nbsp;</span><span class="morecontent"><span>'+e.substr(350,e.length-350)+'</span>&nbsp;&nbsp;<a href="" class="morelink">'+l+"</a></span>";$(this).html(t)}})),$(".morelink").click((function(){return $(this).hasClass("less")?($(this).removeClass("less"),$(this).html(l)):($(this).addClass("less"),$(this).html('<div class="btn-read flex-wrap readLess"><span>read less</span> <img src="images/circle-arrow.svg" alt=""></div>')),$(this).parent().prev().toggle(),$(this).prev().toggle(),!1}))}$(".board-wrap ul.mobile-wrap li").on("click",(function(e){e.preventDefault(),$(this).find(".memberData").hasClass("active")||($(this).removeClass("active"),$(".memberData").removeClass("active"));var t;t=$(this).index(),$("body").toggleClass("active"),$("header").toggleClass("active"),$(".tab-drop-wrap").toggleClass("zindex"),$(".desktopPop-wrap").toggleClass("is-visible");var o=$(this).attr("data-mem");$(this).removeClass("active"),$(".memberData").removeClass("active").removeAttr("style"),$(this).addClass("active"),$("#"+o).fadeIn(500).addClass("active").removeAttr("style");var a=$("ul.desktopPop .memberData"),l=t;$(".btn-popup-group .btn-next").on("click",(function(){a.eq(l).removeClass("active").removeAttr("style"),l=l+1<a.length?l+1:0,a.eq(l).addClass("active")})),$(".btn-popup-group .btn-prev").on("click",(function(){a.eq(l).removeClass("active").removeAttr("style"),l=l>0?l-1:a.length-1,a.eq(l).addClass("active")}))})),$("ul.desktopPop .close").on("click",(function(e){e.preventDefault(),$("body").toggleClass("active"),$("header").toggleClass("active"),$(".tab-drop-wrap").toggleClass("zindex"),$(".desktopPop-wrap").toggleClass("is-visible"),$("ul.mobile-wrap li").removeClass("active").removeAttr("style"),$(".memberData").removeAttr("style").removeClass("active")}))}if($(".funders-block").length){function i(){window.onscroll=function(){},$("header").removeClass("active"),$(".tab-drop-wrap").removeClass("zindex"),$(".funders-container").removeClass("is-visible"),$("ul.itemList li").removeClass("active").removeAttr("style"),$(".funder-details").removeAttr("style").removeClass("active")}$(".funders-block ul.itemList li ").on("click",(function(e){e.preventDefault(),scrollTop=window.pageYOffset||document.documentElement.scrollTop,scrollLeft=window.pageXOffset||document.documentElement.scrollLeft,window.onscroll=function(){window.scrollTo(scrollLeft,scrollTop)},$(this).find("ul .funder-details").hasClass("active")||($(this).removeClass("active"),$(".funder-details").removeClass("active"));var t;t=$(this).index(),$("header").toggleClass("active"),$(".tab-drop-wrap").toggleClass("zindex"),$(".funders-container").toggleClass("is-visible");var o=$(this).attr("data-funder");$(this).removeClass("active"),$(".funder-details").removeClass("active").removeAttr("style"),$(this).addClass("active"),$("#"+o).fadeIn(500).addClass("active").removeAttr("style");var a=$("ul .funder-details"),l=t;$(".btn-popup-group .btn-next").on("click",(function(){a.eq(l).removeClass("active").removeAttr("style"),l=l+1<a.length?l+1:0,a.eq(l).addClass("active")})),$(".btn-popup-group .btn-prev").on("click",(function(){a.eq(l).removeClass("active").removeAttr("style"),l=l>0?l-1:a.length-1,a.eq(l).addClass("active")}))})),$("ul.funders-content .close").on("click",(function(e){e.preventDefault(),i($(this))})),$(document).bind("keydown",(function(e){27==e.which&&i($(this))}))}$(".sec-funders-tab").length&&$("[data-search]").on("keyup",(function(){var e=$(this).val(),t=$("[data-filter-item]");""!=e?(t.addClass("hidden"),$('[data-filter-item][data-filter-name*="'+e.toLowerCase()+'"]').removeClass("hidden")):t.removeClass("hidden")}))})),$(window).load((function(){$("ul.tabs li.tab-link").eq(0).addClass("active"),$(".tab-container .tab-content").eq(0).addClass("active");var e=window.location.href.split("?").pop();$("ul.tabs li.tab-link").each((function(){$(this).attr("data-link")==e&&$(this).click()}))})),$("#counter").length){var a=0;$(window).scroll((function(){var e=$("#counter").offset().top-window.innerHeight;0==a&&$(window).scrollTop()>e&&($(".counter-value").each((function(){var e=$(this),t=e.attr("data-count");$({countNum:e.text()}).animate({countNum:t},{duration:5e3,easing:"swing",step:function(){e.text(Math.floor(this.countNum))},complete:function(){e.text(this.countNum),numCom()}})})),a=1)}))}if($(".sec-map").length){var jsonData=[{id:"Group-19",firstBlockFigure:"10,25,188",firstBlockText:"Million acres restored",secondBlockFigure:"36,59,338",secondBlockText:"Million lives impacted",thirdBlockFigure:"4,474",thirdBlockText:"Villages strengthened",fourthBlockFigure:"Go to Rajasthan",fourthBlockText:"https://www.google.com/"},{id:"Group-20",firstBlockFigure:"75,489",firstBlockText:"Million acres restored",secondBlockFigure:"5,44,803",secondBlockText:"Million lives impacted",thirdBlockFigure:"919",thirdBlockText:"Villages strengthened",fourthBlockFigure:"Go to Gujarat",fourthBlockText:"https://www.google.com/"},{id:"Group-21",firstBlockFigure:"65311",firstBlockText:"Million acres restored",secondBlockFigure:"1,59,333",secondBlockText:"Million lives impacted",thirdBlockFigure:"163",thirdBlockText:"Villages strengthened",fourthBlockFigure:"Go to Maharashtra",fourthBlockText:"https://www.google.com/"},{id:"Group-24",firstBlockFigure:"1,061,981",firstBlockText:"Million acres restored",secondBlockFigure:"26,44,802",secondBlockText:"Million lives impacted",thirdBlockFigure:"3,636",thirdBlockText:"Villages strengthened",fourthBlockFigure:"Go to Andra Pradesh",fourthBlockText:"https://www.google.com/"},{id:"Group-25",firstBlockFigure:"29,50,313",firstBlockText:"Million acres restored",secondBlockFigure:"48,10,237",secondBlockText:"Million lives impacted",thirdBlockFigure:"11,243",thirdBlockText:"Villages strengthened",fourthBlockFigure:"Go to Odisha",fourthBlockText:"https://www.google.com/"},{id:"Group-42",firstBlockFigure:"92,236",firstBlockText:"Million acres restored",secondBlockFigure:"1,40,173",secondBlockText:"Million lives impacted",thirdBlockFigure:"110",thirdBlockText:"Villages strengthened",fourthBlockFigure:"Go to Nagaland",fourthBlockText:"https://www.google.com/"},{id:"Stroke-45",firstBlockFigure:"1,92,468",firstBlockText:"Million acres restored",secondBlockFigure:"7,54,390",secondBlockText:"Million lives impacted",thirdBlockFigure:"1,268",thirdBlockText:"Villages strengthened",fourthBlockFigure:"Go to Karnataka",fourthBlockText:"https://www.google.com/"},{id:"Stroke-7",firstBlockFigure:"29,455",firstBlockText:"Million acres restored",secondBlockFigure:"25,007",secondBlockText:"Million lives impacted",thirdBlockFigure:"88",thirdBlockText:"Villages strengthened",fourthBlockFigure:"Go to Uttaranchal",fourthBlockText:"https://www.google.com/"},{id:"Group-8",firstBlockFigure:"13,63,498",firstBlockText:"Million acres restored",secondBlockFigure:"1,23,625",secondBlockText:"Million lives impacted",thirdBlockFigure:"1,761",thirdBlockText:"Villages strengthened",fourthBlockFigure:"Go to Himachal",fourthBlockText:"https://www.google.com/"},{id:"Group-41",firstBlockFigure:"1,14,382",firstBlockText:"Million acres restored",secondBlockFigure:"1,49,461",secondBlockText:"Million lives impacted",thirdBlockFigure:"424",thirdBlockText:"Villages strengthened",fourthBlockFigure:"Go to Madhya Pradesh",fourthBlockText:"https://www.google.com/"}];window.onload=function(){var svgHotSpotId="";document.addEventListener("click",(function(e){if(-1==e.target.nodeName.indexOf("polygon")){if("Stroke-26"==e.target.id||"Combined-Shape"==e.target.id)return!1;document.querySelectorAll(".mapData")[0].style.opacity=0,document.querySelectorAll(".mapData")[0].style.zIndex="0"}})),document.querySelectorAll(".map-wrapper")[0].getElementsByTagName("svg")[0].addEventListener("click",(function(e){console.log(e.target.id+"|||"+e.target.parentNode.id);var targetId=e.target.parentNode.id;if(svgHotSpotId==targetId)return!1;svgHotSpotId=targetId;var hotspotClickData="";if(hotspotClickData=jsonData.filter((function(e){return e.id==targetId})),""==hotspotClickData)return document.querySelectorAll(".mapData")[0].style.opacity=0,!1;for(var i=1;i<=document.querySelectorAll(".mapData")[0].querySelectorAll(".flex-box")[0].children.length;i++){switch(i){case 1:val="firstBlock";break;case 2:val="secondBlock";break;case 3:val="thirdBlock";break;case 4:val="fourthBlock";break;default:val="unknown"}var jsonVal="hotspotClickData[0]."+val+"Figure",jsonText="hotspotClickData[0]."+val+"Text";"fourthBlock"!=val?(document.querySelectorAll(".mapData")[0].querySelectorAll("."+val)[0].getElementsByTagName("span")[0].innerHTML=eval(jsonVal),document.querySelectorAll(".mapData")[0].querySelectorAll("."+val)[0].getElementsByTagName("span")[1].innerHTML=eval(jsonText)):(document.querySelectorAll(".mapData")[0].querySelectorAll("."+val)[0].getElementsByTagName("span")[0].innerHTML=eval(jsonVal),document.querySelectorAll(".mapData")[0].querySelectorAll("."+val)[0].getElementsByTagName("a")[0].setAttribute("href",eval(jsonText)))}document.querySelectorAll(".mapData")[0].style.opacity=1,document.querySelectorAll(".mapData")[0].style.top=e.offsetY-document.querySelectorAll(".mapData")[0].clientHeight-15+"px";var winWidth=window.innerWidth,clientx=e.clientX,mapdataWidth=document.querySelectorAll(".mapData")[0].offsetWidth;winWidth-clientx>mapdataWidth?(document.querySelectorAll(".mapData")[0].style.left=e.offsetX-24+"px",document.querySelectorAll(".mapData")[0].style.zIndex="2",document.querySelectorAll(".mapData")[0].classList.remove("mystyle")):(document.querySelectorAll(".mapData")[0].style.left=e.offsetX-mapdataWidth+24+"px",document.querySelectorAll(".mapData")[0].style.zIndex="2",document.querySelectorAll(".mapData")[0].classList.add("mystyle"))}))}}function isOnScreen(e){var t=e.offset().top,o=t+e.outerHeight(),a=$(window).scrollTop(),l=a+$(window).height();return o>a&&t<l}