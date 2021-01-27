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

})
