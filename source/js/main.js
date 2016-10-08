require([], function (){

	var isMobileInit = false;
	var loadMobile = function(){
		require(['/js/mobile.js'], function(mobile){
			mobile.init();
			isMobileInit = true;
		});
	}
	var isPCInit = false;
	var loadPC = function(){
		require(['/js/pc.js'], function(pc){
			pc.init();
			isPCInit = true;
		});
	}

	require(['/js/particles.js'], function(particlesJS) {
		window.particlesJS('particles-js',
		  
		  {
		    "particles": {
		      "number": {
		        "value": 80,
		        "density": {
		          "enable": true,
		          "value_area": 800
		        }
		      },
		      "color": {
		        "value": "#cccccc"
		      },
		      "shape": {
		        "type": "circle",
		        "stroke": {
		          "width": 0,
		          "color": "#000000"
		        },
		        "polygon": {
		          "nb_sides": 5
		        },
		        "image": {
		          "src": "img/github.svg",
		          "width": 100,
		          "height": 100
		        }
		      },
		      "opacity": {
		        "value": 0.5,
		        "random": false,
		        "anim": {
		          "enable": false,
		          "speed": 1,
		          "opacity_min": 0.1,
		          "sync": false
		        }
		      },
		      "size": {
		        "value": 5,
		        "random": true,
		        "anim": {
		          "enable": false,
		          "speed": 40,
		          "size_min": 0.1,
		          "sync": false
		        }
		      },
		      "line_linked": {
		        "enable": true,
		        "distance": 150,
		        "color": "#ffffff",
		        "opacity": 0.4,
		        "width": 1
		      },
		      "move": {
		        "enable": true,
		        "speed": 6,
		        "direction": "none",
		        "random": false,
		        "straight": false,
		        "out_mode": "out",
		        "attract": {
		          "enable": false,
		          "rotateX": 600,
		          "rotateY": 1200
		        }
		      }
		    },
		    "interactivity": {
		      "detect_on": "canvas",
		      "events": {
		        "onhover": {
		          "enable": true,
		          "mode": "repulse"
		        },
		        "onclick": {
		          "enable": true,
		          "mode": "push"
		        },
		        "resize": true
		      },
		      "modes": {
		        "grab": {
		          "distance": 400,
		          "line_linked": {
		            "opacity": 1
		          }
		        },
		        "bubble": {
		          "distance": 400,
		          "size": 40,
		          "duration": 2,
		          "opacity": 8,
		          "speed": 3
		        },
		        "repulse": {
		          "distance": 200
		        },
		        "push": {
		          "particles_nb": 4
		        },
		        "remove": {
		          "particles_nb": 2
		        }
		      }
		    },
		    "retina_detect": true,
		    "config_demo": {
		      "hide_card": false,
		      "background_color": "#b61924",
		      "background_image": "",
		      "background_position": "50% 50%",
		      "background_repeat": "no-repeat",
		      "background_size": "cover"
		    }
		  }

		);
	});
	var browser={
	    versions:function(){
	    var u = window.navigator.userAgent;
	    return {
	        trident: u.indexOf('Trident') > -1, //IE内核
	        presto: u.indexOf('Presto') > -1, //opera内核
	        webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
	        gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
	        mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
	        ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
	        android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
	        iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者安卓QQ浏览器
	        iPad: u.indexOf('iPad') > -1, //是否为iPad
	        webApp: u.indexOf('Safari') == -1 ,//是否为web应用程序，没有头部与底部
	        weixin: u.indexOf('MicroMessenger') == -1 //是否为微信浏览器
	        };
	    }()
	}

	$(window).bind("resize", function(){
		if(isMobileInit && isPCInit){
			$(window).unbind("resize");
			return;
		}
		var w = $(window).width();
		if(w >= 700){
			loadPC();
		}else{
			loadMobile();
		}
	});

	if(browser.versions.mobile === true || $(window).width() < 700){
		loadMobile();
	}else{
		loadPC();
	}

	//是否使用fancybox
	if(yiliaConfig.fancybox === true){
		require(['/fancybox/jquery.fancybox.js'], function(pc){
			var isFancy = $(".isFancy");
			if(isFancy.length != 0){
				var imgArr = $(".article-inner img");
				for(var i=0,len=imgArr.length;i<len;i++){
					var src = imgArr.eq(i).attr("src");
					var title = imgArr.eq(i).attr("alt");
					imgArr.eq(i).replaceWith("<a href='"+src+"' title='"+title+"' rel='fancy-group' class='fancy-ctn fancybox'><img src='"+src+"' title='"+title+"'></a>");
				}
				$(".article-inner .fancy-ctn").fancybox();
			}
		});
		
	}
	//是否开启动画
	if(yiliaConfig.animate === true){

		require(['/js/jquery.lazyload.js'], function(){
			//avatar
			$(".js-avatar").attr("src", $(".js-avatar").attr("lazy-src"));
			$(".js-avatar")[0].onload = function(){
				$(".js-avatar").addClass("show");
			}
		});
		
		if(yiliaConfig.isHome === true){
			//content
			function showArticle(){
				$(".article").each(function(){
					if( $(this).offset().top <= $(window).scrollTop()+$(window).height() && !($(this).hasClass('show')) ) {
						$(this).removeClass("hidden").addClass("show");
						$(this).addClass("is-hiddened");
					}else{
						if(!$(this).hasClass("is-hiddened")){
							$(this).addClass("hidden");
						}
					}
				});
			}
			$(window).on('scroll', function(){
				showArticle();
			});
			showArticle();
		}
		
	}
	
	//是否新窗口打开链接
	if(yiliaConfig.open_in_new == true){
		$(".article a[href]").attr("target", "_blank")
	}
	
});