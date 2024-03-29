document.addEventListener('DOMContentLoaded', () => {
	// Custom JS

	// Скролл к id по клику на ссылку, и добавление ссылке класса active
	$('a[href^="#"]').on('click', function (e) {
		e.preventDefault();
		$(document).off("scroll");

		$(this).each(function () {
			$('a[href^="#"]').removeClass('active');

			$('#menu_ham.open').removeClass('open');
			$('.sm_menu_outer.active').removeClass('active');
			$('body.mmactive').removeClass('mmactive');
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



	//-----------------------------------------------
	//Добавление классов и атрибутов для WOW анимации
	//-----------------------------------------------
	var plus = 0;
	$('header').addClass('wow fadeInDown').each(function(i) {
		plus += 0.15;
    $(this).attr({'data-wow-delay': plus + 's' , 'data-wow-duration':'0.8s'});
	});


	$('h1').addClass('wow flipInX').each(function(i) {
	  plus += 0.15;
	  $(this).attr({'data-wow-delay': plus + 's' , 'data-wow-duration':'0.8s'});
	});
	$('h2').addClass('wow flipInY').each(function(i) {
	  plus += 0.15;
	  $(this).attr({'data-wow-delay': plus + 's' , 'data-wow-duration':'0.8s'});
	});
	$('main .btn').addClass('wow pulse').each(function(i) {
		// plus += 0.15;
    $(this).attr({'data-wow-delay': plus + 's' , 'data-wow-duration':'0.8s', 'data-wow-iteration':'3'});
	});


	var plus = 0;
	$('h3').addClass('wow fadeInRight').each(function(i) {
		// plus += 0.15;
		$(this).attr({'data-wow-duration':'0.5s'});
	});
	$('.about .desc p').addClass('wow zoomInRight').each(function(i) {
    plus += 0.15;
    $(this).attr({'data-wow-delay': plus + 's' , 'data-wow-duration':'0.5s'});
	});


	var plus = 0;
	$('.services__desc p').addClass('wow flipInX').each(function(i) {
		plus += 0.15;
		$(this).attr({'data-wow-delay': plus + 's' , 'data-wow-duration':'0.5s'});
	});
	$('.services__practice h4').addClass('wow fadeInRight').each(function(i) {
    plus += 0.15;
    $(this).attr({'data-wow-delay': plus + 's' , 'data-wow-duration':'0.5s'});
	});
	$('.services__practice li').addClass('wow fadeInRight').each(function(i) {
    plus += 0.15;
    $(this).attr({'data-wow-delay': plus + 's' , 'data-wow-duration':'0.5s'});
	});
	$('.services__img').addClass('wow fadeIn').each(function(i) {
    // plus += 0.15;
    $(this).attr({'data-wow-delay': .5 + 's' , 'data-wow-duration':'0.5s'});
	});
	var plus = 0;
	$('.services__experts li').addClass('wow bounceIn').each(function(i) {
    plus += 0.15;
    $(this).attr({'data-wow-delay': plus + 's' , 'data-wow-duration':'1s'});
	});

	var plus = 0;
	$('.benefit__list li:nth-child(odd)').addClass('wow backInLeft').each(function(i) {
    plus += 0.2;
    $(this).attr({'data-wow-delay': plus + 's' , 'data-wow-duration':'0.5s'});
	});
	$('.benefit__list li:nth-child(even)').addClass('wow backInRight').each(function(i) {
    plus += 0.3;
    $(this).attr({'data-wow-delay': plus + 's' , 'data-wow-duration':'0.5s'});
	});


	var plus = 0;
	$('.why h5').addClass('wow flipInX').each(function(i) {
    plus += 0.15;
    $(this).attr({'data-wow-delay': plus + 's' , 'data-wow-duration':'0.8s'});
	});
	$('.why__list li').addClass('wow flipInX').each(function(i) {
    plus += 0.15;
    $(this).attr({'data-wow-delay': plus + 's' , 'data-wow-duration':'0.8s'});
	});


	var plus = 0;
	$('.project__desc p, .project__desc span').addClass('wow zoomInRight').each(function(i) {
    // plus += 0.15;
    $(this).attr({'data-wow-delay': plus + 's' , 'data-wow-duration':'0.5s'});
	});

	$('.portfolio__list li:nth-child(odd) h4').addClass('wow fadeInRight').each(function(i) {
    // plus += 0.15;
    $(this).attr({'data-wow-delay': plus + 's' , 'data-wow-duration':'0.5s'});
	});
	$('.portfolio__list li:nth-child(even) h4').addClass('wow fadeInLeft').each(function(i) {
    // plus += 0.15;
    $(this).attr({'data-wow-delay': plus + 's' , 'data-wow-duration':'0.5s'});
	});

	$('.portfolio__list li:nth-child(odd) .project__img img').addClass('wow fadeInLeft').each(function(i) {
    // plus += 0.15;
    $(this).attr({'data-wow-delay': plus + 's' , 'data-wow-duration':'0.5s'});
	});
	$('.portfolio__list li:nth-child(even) .project__img img').addClass('wow fadeInRight').each(function(i) {
    // plus += 0.15;
    $(this).attr({'data-wow-delay': plus + 's' , 'data-wow-duration':'0.5s'});
	});


	var plus = 0;
	$('.articles__list li').addClass('wow flipInY').each(function(i) {
    plus += 0.15;
    $(this).attr({'data-wow-delay': plus + 's' , 'data-wow-duration':'0.5s'});
	});


	var plus = 0;
	$('.reviews h3').addClass('wow zoomIn').each(function(i) {
    plus += 0.15;
    $(this).attr({'data-wow-delay': plus + 's' , 'data-wow-duration':'0.5s'});
	});
	$('.reviews h4').addClass('wow flipInX').each(function(i) {
    plus += 0.15;
    $(this).attr({'data-wow-delay': plus + 's' , 'data-wow-duration':'0.5s'});
	});

	function afterSlider() {
		var img1 = '<div class="client client--1"></div>';
		var img2 = '<div class="client client--2"></div>';
		var img3 = '<div class="client client--3"></div>';
		var img4 = '<div class="client client--4"></div>';
		var img5 = '<div class="client client--5"></div>';
		var img6 = '<div class="client client--6"></div>';
		var img7 = '<div class="client client--7"></div>';
		$(".reviews .slider").append(img1, img2, img3, img4, img5, img6, img7);
	}afterSlider();

	$('.reviews .client').addClass('wow bounceIn').each(function(i) {
    plus += 0.25;
    $(this).attr({'data-wow-delay': plus + 's' , 'data-wow-duration':'0.6s'});
	});


	var plus = 0;
	$('.contacts h3').removeClass('fadeInRight').addClass('wow flipInX').each(function(i) {
    plus += 0.15;
    $(this).attr({'data-wow-delay': plus + 's' , 'data-wow-duration':'0.5s'});
	});
	$('.contacts__form>*').addClass('wow flipInX').each(function(i) {
    plus += 0.15;
    $(this).attr({'data-wow-delay': plus + 's' , 'data-wow-duration':'0.8s', 'data-wow-iteration':'1'});
	});

	
	var plus = 0;
	$('.footer').addClass('wow backInUp').each(function(i) {
    plus += 0.15;
    $(this).attr({'data-wow-delay': plus + 's' , 'data-wow-duration':'1s'});
	});
	



	//WOW анимационные эффекты
	var wow = new WOW(
		{		
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       50,          // distance to the element when triggering the animation (default is 0)
			mobile:       false,       // trigger animations on mobile devices (default is true)
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

	 // Hamburger
	 $(".mobile_menu").slideMobileMenu({

		// Hamburger Id
		"hamburgerId"   : "menu_ham", 
	
		// Menu Wrapper Class
		"wrapperClass"  : "sm_menu_outer", 
	
		// Submenu Class
		"submenuClass"  : "submenu", 
	
		// or 'accordion'
		"menuStyle": "slide",
	
		// Calls when menu loaded
		"onMenuLoad"    : function() { return true; }, 
	
		// Calls when menu open/close
		"onMenuToggle"  : function() { return true; } 
		
	});

})

/*
JQuery Simple MobileMenu
https://github.com/Position2/jQuery-Simple-MobileMenu
*/
!function(s){var e={hamburgerId:"menu_ham",wrapperClass:"sm_menu_outer",submenuClass:"submenu",onMenuLoad:function(){return!0},onMenuToggle:function(){return!0}};s.fn.slideMobileMenu=function(n){if(0===this.length)return this;var t={},a=s(this),i=function(){t.hamburger=s("<button/>",{id:t.settings.hamburgerId,html:"<span></span><span></span><span></span><span></span>"}),t.smmOuter=s("<div/>",{class:t.settings.wrapperClass}),a.appendTo(t.smmOuter),t.hamburger.add(t.smmOuter).appendTo(s("header .container"))},u=function(){t.smmOuter.find("ul."+t.settings.submenuClass).each(function(){var e=s(this),n=e.closest("li"),t=n.find("> a"),a=s("<li/>",{class:"back",html:"<a href='#'>"+t.text()+"</a>"});n.addClass("hasChild"),a.prependTo(e)})};t.settings=s.extend({},e,n),i(),u(),"function"==typeof t.settings.onMenuLoad&&t.settings.onMenuLoad(a),t.hamburger.click(function(e){s("#"+t.settings.hamburgerId).toggleClass("open"),s("."+t.settings.wrapperClass).toggleClass("active").find("li.active").removeClass("active"),s("body").toggleClass("mmactive"),"function"==typeof t.settings.onMenuToggle&&t.settings.onMenuToggle(a,s("#"+t.settings.hamburgerId).hasClass("open"))}),t.smmOuter.find("li.hasChild > a").click(function(e){e.preventDefault(),s("."+t.settings.wrapperClass).scrollTop(0),s(this).parent().addClass("active").siblings().removeClass("active")}),t.smmOuter.find("li.back a").click(function(e){e.preventDefault(),s(this).closest("ul."+t.settings.submenuClass).parent().removeClass("active")})}}(jQuery);