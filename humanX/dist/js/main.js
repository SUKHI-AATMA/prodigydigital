$(document).ready((function(){$("#homeBanner .owl-carousel").owlCarousel({loop:!0,nav:!0,dots:!0,dotsData:!1,smartSpeed:600,autoPlaySpeed:600,slideTransition:"linear",mouseDrag:!0,autoplay:!1,lazyLoad:!0,items:1,video:!0,onTranslate:function(e){var t,o;o={event:"command",func:"pauseVideo"},null!=(t=$(".owl-item.active").find(".ytplayer-wrap iframe").get(0))&&t.contentWindow.postMessage(JSON.stringify(o),"*")}}),$("#partners .owl-carousel").owlCarousel({margin:30,loop:!0,nav:!0,dots:!1,smartSpeed:500,slideTransition:"linear",mouseDrag:!1,autoplay:!1,lazyLoad:!0,autoplay:!0,autoplayTimeout:3e3,autoplayHoverPause:!0,responsive:{0:{center:!0,items:1,margin:0,nav:!1,stagePadding:80},361:{center:!0,items:1,margin:0,nav:!1,stagePadding:100},375:{center:!0,items:1,margin:0,nav:!1,stagePadding:70},481:{center:!0,items:1,margin:0,nav:!1,stagePadding:90},768:{items:3},1200:{items:4}}}),$("#funders .owl-carousel").owlCarousel({margin:30,loop:!0,nav:!0,dots:!1,smartSpeed:500,slideTransition:"linear",mouseDrag:!1,autoplay:!1,lazyLoad:!0,autoplay:!0,autoplayTimeout:3e3,autoplayHoverPause:!0,responsive:{0:{center:!0,items:1,margin:0,nav:!1,stagePadding:80},361:{center:!0,items:1,margin:0,nav:!1,stagePadding:100},375:{center:!0,items:1,margin:0,nav:!1,stagePadding:80},481:{center:!0,items:1,margin:0,nav:!1,stagePadding:90},768:{items:3},1200:{items:4}}}),$("#news .owl-carousel").owlCarousel({autoWidth:!0,loop:!1,nav:!0,dots:!1,smartSpeed:500,slideTransition:"linear",mouseDrag:!1,autoplay:!1,lazyLoad:!0,responsive:{0:{items:1,singleItem:!0,nav:!1},600:{items:2},768:{items:3}}}),$(window).scroll((function(){var e=$("header").offset().top;$("header").outerHeight(),$(window).height(),$(this).scrollTop();$(window).width()>1025&&(e>100?($("header .logo").addClass("active"),$("header .menu-wrap").addClass("active"),$("header .hamburger").addClass("active")):0==e&&($("header .logo").removeClass("active"),$("header .menu-wrap").removeClass("active"),$("header .hamburger").removeClass("active")))})),$(".hamburger").on("click tap",(function(){$(this).toggleClass("open"),$("header .menu-wrap").toggleClass("open"),$("header .hamburger-logo").toggleClass("active"),$("body").toggleClass("bodyOverflowHidden"),$(".overlay-body").toggleClass("active")})),$("section.sec-testimonials .btn-wrap").on("click tap",(function(){$("section.sec-testimonials .other-item").slideToggle("slow"),$(".btn-wrap .btn-read img").toggleClass("active")})),$(window).width()<769&&$("header .li-link .link").click((function(){$(this).parent().find(".dropdown").hasClass("active")||($(".dropdown").slideUp(),$(".link").removeClass("active"),console.log("hi ====")),console.log("hello ===="),$(this).toggleClass("active"),$(".dropdown").removeClass("active"),$(this).parent().find(".dropdown").slideToggle(),$(this).parent().find(".dropdown").toggleClass("active"),console.log("exit ====")}))}));var a=0;$(window).scroll((function(){var e=$("#counter").offset().top-window.innerHeight;0==a&&$(window).scrollTop()>e&&($(".counter-value").each((function(){var e=$(this),t=e.attr("data-count");$({countNum:e.text()}).animate({countNum:t},{duration:7e3,easing:"swing",step:function(){e.text(Math.floor(this.countNum))},complete:function(){e.text(this.countNum)}})})),a=1)}));var jsonData=[{id:"Group-19",firstBlockFigure:"10,25,188",firstBlockText:"Million acres restored",secondBlockFigure:"36,59,338",secondBlockText:"Million lives impacted",thirdBlockFigure:"4,474",thirdBlockText:"Villages strengthened",fourthBlockFigure:"Go to Rajasthan",fourthBlockText:"https://www.google.com/"},{id:"Group-20",firstBlockFigure:"75,489",firstBlockText:"Million acres restored",secondBlockFigure:"5,44,803",secondBlockText:"Million lives impacted",thirdBlockFigure:"919",thirdBlockText:"Villages strengthened",fourthBlockFigure:"Go to Gujarat",fourthBlockText:"https://www.google.com/"},{id:"Group-21",firstBlockFigure:"65311",firstBlockText:"Million acres restored",secondBlockFigure:"1,59,333",secondBlockText:"Million lives impacted",thirdBlockFigure:"163",thirdBlockText:"Villages strengthened",fourthBlockFigure:"Go to Maharashtra",fourthBlockText:"https://www.google.com/"},{id:"Group-24",firstBlockFigure:"1,061,981",firstBlockText:"Million acres restored",secondBlockFigure:"26,44,802",secondBlockText:"Million lives impacted",thirdBlockFigure:"3,636",thirdBlockText:"Villages strengthened",fourthBlockFigure:"Go to Andra Pradesh",fourthBlockText:"https://www.google.com/"},{id:"Group-25",firstBlockFigure:"29,50,313",firstBlockText:"Million acres restored",secondBlockFigure:"48,10,237",secondBlockText:"Million lives impacted",thirdBlockFigure:"11,243",thirdBlockText:"Villages strengthened",fourthBlockFigure:"Go to Odisha",fourthBlockText:"https://www.google.com/"},{id:"Group-42",firstBlockFigure:"92,236",firstBlockText:"Million acres restored",secondBlockFigure:"1,40,173",secondBlockText:"Million lives impacted",thirdBlockFigure:"110",thirdBlockText:"Villages strengthened",fourthBlockFigure:"Go to Nagaland",fourthBlockText:"https://www.google.com/"},{id:"Stroke-45",firstBlockFigure:"1,92,468",firstBlockText:"Million acres restored",secondBlockFigure:"7,54,390",secondBlockText:"Million lives impacted",thirdBlockFigure:"1,268",thirdBlockText:"Villages strengthened",fourthBlockFigure:"Go to Karnataka",fourthBlockText:"https://www.google.com/"},{id:"Stroke-7",firstBlockFigure:"29,455",firstBlockText:"Million acres restored",secondBlockFigure:"25,007",secondBlockText:"Million lives impacted",thirdBlockFigure:"88",thirdBlockText:"Villages strengthened",fourthBlockFigure:"Go to Uttaranchal",fourthBlockText:"https://www.google.com/"},{id:"Group-8",firstBlockFigure:"13,63,498",firstBlockText:"Million acres restored",secondBlockFigure:"1,23,625",secondBlockText:"Million lives impacted",thirdBlockFigure:"1,761",thirdBlockText:"Villages strengthened",fourthBlockFigure:"Go to Himachal",fourthBlockText:"https://www.google.com/"},{id:"Group-41",firstBlockFigure:"1,14,382",firstBlockText:"Million acres restored",secondBlockFigure:"1,49,461",secondBlockText:"Million lives impacted",thirdBlockFigure:"424",thirdBlockText:"Villages strengthened",fourthBlockFigure:"Go to Madhya Pradesh",fourthBlockText:"https://www.google.com/"}];window.onload=function(){var svgHotSpotId="";document.addEventListener("click",(function(e){if(-1==e.target.nodeName.indexOf("polygon")){if("Stroke-26"==e.target.id||"Combined-Shape"==e.target.id)return!1;document.querySelectorAll(".mapData")[0].style.opacity=0,document.querySelectorAll(".mapData")[0].style.zIndex="0"}})),document.querySelectorAll(".map-wrapper")[0].getElementsByTagName("svg")[0].addEventListener("click",(function(e){console.log(e.target.id+"|||"+e.target.parentNode.id);var targetId=e.target.parentNode.id;if(svgHotSpotId==targetId)return!1;svgHotSpotId=targetId;var hotspotClickData="";if(hotspotClickData=jsonData.filter((function(e){return e.id==targetId})),""==hotspotClickData)return document.querySelectorAll(".mapData")[0].style.opacity=0,!1;for(var i=1;i<=document.querySelectorAll(".mapData")[0].querySelectorAll(".flex-box")[0].children.length;i++){switch(i){case 1:val="firstBlock";break;case 2:val="secondBlock";break;case 3:val="thirdBlock";break;case 4:val="fourthBlock";break;default:val="unknown"}var jsonVal="hotspotClickData[0]."+val+"Figure",jsonText="hotspotClickData[0]."+val+"Text";"fourthBlock"!=val?(document.querySelectorAll(".mapData")[0].querySelectorAll("."+val)[0].getElementsByTagName("span")[0].innerHTML=eval(jsonVal),document.querySelectorAll(".mapData")[0].querySelectorAll("."+val)[0].getElementsByTagName("span")[1].innerHTML=eval(jsonText)):(document.querySelectorAll(".mapData")[0].querySelectorAll("."+val)[0].getElementsByTagName("span")[0].innerHTML=eval(jsonVal),document.querySelectorAll(".mapData")[0].querySelectorAll("."+val)[0].getElementsByTagName("a")[0].setAttribute("href",eval(jsonText)))}document.querySelectorAll(".mapData")[0].style.opacity=1,document.querySelectorAll(".mapData")[0].style.top=e.offsetY-document.querySelectorAll(".mapData")[0].clientHeight-15+"px";var winWidth=window.innerWidth,clientx=e.clientX,mapdataWidth=document.querySelectorAll(".mapData")[0].offsetWidth;winWidth-clientx>mapdataWidth?(document.querySelectorAll(".mapData")[0].style.left=e.offsetX-24+"px",document.querySelectorAll(".mapData")[0].style.zIndex="2",document.querySelectorAll(".mapData")[0].classList.remove("mystyle")):(document.querySelectorAll(".mapData")[0].style.left=e.offsetX-mapdataWidth+24+"px",document.querySelectorAll(".mapData")[0].style.zIndex="2",document.querySelectorAll(".mapData")[0].classList.add("mystyle"))}))};