var clList=[".fadeIn, .fadeUp, .fadeDown"];function animateClass(){setTimeout((function(){clList.forEach((function(e,t){for(var o=document.querySelectorAll(e),a=0,s=o.length;a<s;a++){var n=o[a],i=n.getBoundingClientRect();i.top-window.innerHeight<0&&i.bottom>-50?n.classList.add("animate"):n.classList.remove("animate")}}))}),100)}animateClass(),$(document).ready((function(){null==localStorage.getItem("loader")?(localStorage.setItem("loader",!0),setTimeout((function(){$(".loader").addClass("animate")}),1e3),setTimeout((function(){$(".loader").addClass("hide"),$("body").addClass("loaderFinished")}),3e3)):($(".loader").remove(),$("body").addClass("loaderFinished")),$("body").removeClass("active"),$(".nav-toggler").on("click",(function(){$("header").toggleClass("nav-open")})),$(".projects-carousel").slick({arrows:!1}),$(".project-titles a").on("mouseover",(function(){$(this).addClass("active").siblings().removeClass("active");var e=$(this).attr("data-slide");$(".projects-carousel").slick("slickGoTo",e-1)})).on("click",(function(e){e.preventDefault(),$(this).addClass("active").siblings().removeClass("active").parents(".project-titles").addClass("select"),linkUrl=$(this).attr("href"),setTimeout((function(){window.open(linkUrl,"_blank")}),2e3)})),$("#carousel").slick({arrows:!1,dots:!0,centerMode:!0,infinite:!0,slidesToShow:1,slidesToScroll:1}),$(".counter").each((function(){var e=$(this),t=e.attr("data-count");e.addClass("start"),$({countNum:e.text()}).animate({countNum:t},{duration:2e3,easing:"linear",step:function(){e.text(Math.floor(this.countNum))},complete:function(){e.text(this.countNum+"+")}})})),$(".CookieBar-btn").on("click",(function(){if(0==(document.cookie.match("(^|;)\\s*Opened\\s*=\\s*([^;]+)")?.pop()||"")){var e=new Date,t=t||365;e.setTime(+e+864e5*t),window.document.cookie="Opened=true; expires="+e.toGMTString()+"; path=/",$(".CookieBar").addClass("cookie-leave-to")}})),"true"==(document.cookie.match("(^|;)\\s*Opened\\s*=\\s*([^;]+)")?.pop()||"")&&$(".CookieBar").addClass("cookie-leave-to"),$("header a").on("click",(function(e){console.log($(this).attr("target"));if($(this).attr("target") != '_blank'){e.preventDefault(),$("body").addClass("active");var t=$(this).attr("href");setTimeout((function(){window.location.href=t}),500)};}))})),$(window).on("scroll",(function(){$(document).scrollTop()>50?($("header").addClass("scrolled"),$("#downArrow").hide()):($("header").removeClass("scrolled"),$("#downArrow").show())}));