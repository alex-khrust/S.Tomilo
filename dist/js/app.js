document.addEventListener('DOMContentLoaded', () => {

	// Custom JS

	// //Добавление стилей в html
	// [ 'https://alex-khrust.github.io/S.Tomilo/app/css/app.min.css',
	// ].forEach(function(href) {
	// 	var link = document.createElement('link');
	// 	link.rel  = 'stylesheet';
  //   link.type = 'text/css';
	// 	link.href = href;
	// 	link.async = false;
	// 	document.head.appendChild(link);
	// });
	// //Добавление скриптов в html
	[ 'https://alex-khrust.github.io/S.Tomilo/app/js/libs.min.js',
	].forEach(function(src) {
		var script = document.createElement('script');
		script.src = src;
		script.async = false;
		document.head.appendChild(script);
	});
	// [ 'https://alex-khrust.github.io/S.Tomilo/app/js/app.js',
	// ].forEach(function(src) {
	// 	var script = document.createElement('script');
	// 	script.src = src;
	// 	script.async = false;
	// 	document.body.appendChild(script);
	// });

	// Скролл к id по клику на ссылку, и добавление ссылке класса aktive
	$('a[href^="#"]').on('click', function (e) {
		e.preventDefault();
		$(document).off("scroll");

		$(this).each(function () {
			$('a[href^="#"]').removeClass('active');
		});
		$(this).addClass('active');

		var target = this.hash;
		$target = $(target);
		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
		}, 500, 'swing', function () {
			window.location.hash = target;
			$(document).on("scroll", onScroll);
		});
	});

	//Слайдер Swiper
	var swiper = new Swiper('.swiper-container', {
		// Optional parameters
		loop: true,
		spaceBetween: 30,
		observer: true, 
		observeParents: true,

		autoplay: {
			delay: 10000,
			disableOnInteraction: false,
		},
	
		// Navigation arrows
		navigation: {
			nextEl: '.swiper-btn-next',
			prevEl: '.swiper-btn-prev',
		}
	})

	//popups
	$(".consultation-btn").click(function () {
		$(".popups, .consultation__popup").addClass("show");
		$('body').addClass('locked');
	});
	
	$(".send-btn, .contacts .btn").click(function () {
		$(".popups, .consultation__popup").removeClass("show");	
		$(".popups, .send-ok__popup").addClass("show");
		$('body').addClass('locked');
	});
	
  $(".popup-overlay, .popup .close-btn").click(function () {
		$(".popups, .popup").removeClass("show");
		$('body').removeClass('locked');
	});
	

	//Добавление классов и атрибутов для WOW анимации
	var plus = 0;
	// $('h2').addClass('wow bounceIn').each(function(i) {
  //   plus += 0.15;
  //   $(this).attr({'data-wow-delay': plus + 's' , 'data-wow-duration':'0.5s'});
	// });
	$('main .btn').addClass('wow pulse').each(function(i) {
		// plus += 0.15;
    $(this).attr({'data-wow-delay': plus + 's' , 'data-wow-duration':'0.8s', 'data-wow-iteration':'3'});
	});
	
	$('h3').addClass('wow fadeInRight').each(function(i) {
		// plus += 0.15;
		$(this).attr({'data-wow-delay': plus + 's' , 'data-wow-duration':'0.5s'});
	});

	$('.about .desc p').addClass('wow zoomInRight').each(function(i) {
    plus += 0.15;
    $(this).attr({'data-wow-delay': plus + 's' , 'data-wow-duration':'0.5s'});
	});

	var plus = 0;
	$('.services__practice li').addClass('wow fadeInRight').each(function(i) {
    plus += 0.15;
    $(this).attr({'data-wow-delay': plus + 's' , 'data-wow-duration':'0.5s'});
	});
	$('.services__img').addClass('wow fadeIn').each(function(i) {
    // plus += 0.15;
    $(this).attr({'data-wow-delay': plus + 's' , 'data-wow-duration':'0.5s'});
	});
	var plus = 0;
	$('.services__experts li').addClass('wow bounceIn').each(function(i) {
    plus += 0.15;
    $(this).attr({'data-wow-delay': plus + 's' , 'data-wow-duration':'1s'});
	});
	
	//WOW анимационные эффекты
	var wow = new WOW(
		{		
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       50,          // distance to the element when triggering the animation (default is 0)
			mobile:       true,       // trigger animations on mobile devices (default is true)
			live:         true,       // act on asynchronously loaded content (default is true)
			callback:     function(box) {
				// the callback is fired every time an animation is started
				// the argument that is passed in is the DOM node being animated
			},
			scrollContainer: null,    // optional scroll container selector, otherwise use window,
			resetAnimation: true,     // reset animation on end (default is true)
		}
	);
	wow.init();

})
