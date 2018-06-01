/*-----------------------------------------------------------------------------------*/
/*	WORDPRESS STUFF
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function(){
"use strict";

	/**
	 * Turn linked images into lightbox images
	 */
	jQuery("a[href$='jpg'], a[href$='jpeg'], a[href$='gif'], a[href$='png']").each(function(){
		if( jQuery(this).parent().hasClass('icn-enlarge') || jQuery(this).hasClass('fancybox-media') )
			return;
		jQuery(this).addClass('fancybox-media').attr('data-rel','portfolio').wrap('<figure class="icon-overlay icn-enlarge" />');
	});
	
	jQuery('img.alignright').parents('figure.icon-overlay.icn-enlarge').addClass('alignright');
	jQuery('img.alignleft').parents('figure.icon-overlay.icn-enlarge').addClass('alignleft');
	jQuery('img.aligncenter').parents('figure.icon-overlay.icn-enlarge').addClass('aligncenter');
	
	/**
	 * Basic gallery images resizing
	 */
	var $windowHeight = jQuery(window).height() - 120;
	jQuery('.basic-gallery img').each(function(){
		jQuery(this).css({
			'max-height' : $windowHeight,
			'width' : 'auto',
			'height' : 'auto'
		});
	});
	
	jQuery('.full-layout-link a, .box-layout-link a').click(function(){
		jQuery('body').toggleClass('full-layout').toggleClass('box-layout');
		return false;
	});

});
jQuery(window).load(function(){
"use strict";
	
	/**
	 * Dynamic header sizing
	 */
	jQuery('.offset').height( jQuery('.navbar').height() );

});
/*-----------------------------------------------------------------------------------*/
/*	VIDEO
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function () {
"use strict";
    jQuery('.player').fitVids();
});
/*-----------------------------------------------------------------------------------*/
/*	FANCYBOX
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function () {
    jQuery(".fancybox-media").fancybox({
        arrows: true,
        padding: 0,
        closeBtn: true,
        openEffect: 'fade',
        closeEffect: 'fade',
        prevEffect: 'fade',
        nextEffect: 'fade',
        helpers: {
            media: {},
            overlay: {
                locked: false
            },
            buttons: false,
            thumbs: {
                width: 50,
                height: 50
            },
            title: {
                type: 'inside'
            }
        },
        beforeLoad: function () {
            var el, id = jQuery(this.element).data('title-id');
            if (id) {
                el = jQuery('#' + id);
                if (el.length) {
                    this.title = el.html();
                }
            }
        }
    });
});
/*-----------------------------------------------------------------------------------*/
/*	DATA REL
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function () {
"use strict";

	jQuery('a[data-rel]').each(function () {
	    jQuery(this).attr('rel', jQuery(this).data('rel'));
	});

});
/*-----------------------------------------------------------------------------------*/
/*	TOOLTIP
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function () {
    if (jQuery("[rel=tooltip]").length) {
        jQuery("[rel=tooltip]").tooltip();
    }
});
/*-----------------------------------------------------------------------------------*/
/*	ISOTOPE
/*-----------------------------------------------------------------------------------*/
jQuery( function() {
  // init Isotope
  var $container = jQuery('.fix-portfolio .isotope');
  
  $container.isotope({
    itemSelector: '.item',
    transitionDuration: '0.6s',
    masonry: { columnWidth: $container.width() / 12 },
    layoutMode: 'masonry'
  });
  
  jQuery(window).resize(function(){
  	$container.isotope({
  		masonry: { columnWidth: $container.width() / 12 }
  	});
  });
  // bind filter button click
  jQuery('.fix-portfolio #filters').on( 'click', 'button', function() {
    var filterValue = jQuery( this ).attr('data-filter');
    $container.isotope({ filter: filterValue });
  });
  // change is-checked class on buttons
  jQuery('.fix-portfolio .button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = jQuery( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      jQuery( this ).addClass('is-checked');
    });
  });
  // layout Isotope again after all images have loaded
$container.imagesLoaded( function() {
  $container.isotope('layout');
});
});


jQuery( function() {
  // init Isotope
  var $container = jQuery('.full-portfolio .isotope').isotope({
    itemSelector: '.item',
    transitionDuration: '0.6s',
    masonry: {
      columnWidth: '.grid-sizer'
    }
  });
  // bind filter button click
  jQuery('.full-portfolio #filters').on( 'click', 'button', function() {
    var filterValue = jQuery( this ).attr('data-filter');
    $container.isotope({ filter: filterValue });
  });
  // change is-checked class on buttons
  jQuery('.full-portfolio .button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = jQuery( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      jQuery( this ).addClass('is-checked');
    });
  });
    // layout Isotope again after all images have loaded
$container.imagesLoaded( function() {
  $container.isotope('layout');
});
});

jQuery( function() {
  // init Isotope
  var $container = jQuery('.classic-masonry .isotope');
  
  $container.isotope({
    itemSelector: '.item',
    transitionDuration: '0.6s',
    masonry: { columnWidth: $container.width() / 12 },
    layoutMode: 'masonry'
  });
  
  jQuery(window).resize(function(){
  	$container.isotope({
  		masonry: { columnWidth: $container.width() / 12 }
  	});
  });
  // bind filter button click
  jQuery('.classic-masonry #filters').on( 'click', 'button', function() {
    var filterValue = jQuery( this ).attr('data-filter');
    $container.isotope({ filter: filterValue });
  });
  // change is-checked class on buttons
  jQuery('.classic-masonry .button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = jQuery( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      jQuery( this ).addClass('is-checked');
    });
  });
  // layout Isotope again after all images have loaded
$container.imagesLoaded( function() {
  $container.isotope('layout');
});
});
/*-----------------------------------------------------------------------------------*/
/*	IMAGE ICON HOVER
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function () {
    jQuery('.icon-overlay a').prepend('<span class="icn-more"></span>');
});
/*-----------------------------------------------------------------------------------*/
/*	OWL CAROUSEL
/*-----------------------------------------------------------------------------------*/ 
jQuery(document).ready(function() {
	
	jQuery('.testimonials').owlCarousel({
		items: 1,
		nav:true,
		navText: ['<i class="icon-left-open-1"></i>','<i class="icon-right-open-1"></i>'],
		dots: false,
		autoHeight: true,
		loop: true,
		margin: 0,
	});

	jQuery('.owl-gallery').owlCarousel({
	    loop:false,
	    margin:10,
	    nav:true,
	    navText: ['<i class="icon-left-open-1"></i>','<i class="icon-right-open-1"></i>'],
	    dots: false,
	    items:4,
	    responsive:{
	        0:{
	            items:1
	        },
	        1000:{
	            items:3
	        },
	        1200:{
	            items:4
	        }
	    }
	});

	jQuery('.owl-blog').owlCarousel({
	    loop:false,
	    margin:30,
	    nav:true,
	    navText: ['<i class="icon-left-open-1"></i>','<i class="icon-right-open-1"></i>'],
	    dots: false,
	    items:3,
	    responsive:{
	        0:{
	            items:1
	        },
	        1000:{
	            items:3
	        }
	    }
	});

	jQuery('.image-slider').owlCarousel({
		items: 1,
		nav:true,
		navText: ['<i class="icon-left-open-1"></i>','<i class="icon-right-open-1"></i>'],
		dots: true,
		autoHeight: false,
		loop: true,
		margin: 0,
		navContainerClass: 'owl-slider-nav',
		navClass: [ 'owl-slider-prev', 'owl-slider-next' ],
		controlsClass: 'owl-slider-controls'
	});

});
/*-----------------------------------------------------------------------------------*/
/*	DIVAS SLIDER
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function(){
	jQuery(".divas-wrapper").divas({
		slideTransitionClass: "divas-slide-transition-left",
		titleTransitionClass: "divas-title-transition-left",
		titleTransitionParameter: "left",
		titleTransitionStartValue: "-999px",
		titleTransitionStopValue: "0px",
		startFrom: "left",
		wingsOverlayColor: "rgba(20, 20, 20, 0.75)"
	});
});
/*-----------------------------------------------------------------------------------*/
/*	STICKY HEADER
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function () {

    var menu = jQuery('.navbar'),
        pos = menu.offset();

    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > pos.top + menu.height() && menu.hasClass('default') && jQuery(this).scrollTop() > 300) {
            menu.fadeOut('fast', function () {
                jQuery(this).removeClass('default').addClass('fixed').fadeIn('fast');
            });
        } else if (jQuery(this).scrollTop() <= pos.top + 300 && menu.hasClass('fixed')) {
            menu.fadeOut(0, function () {
                jQuery(this).removeClass('fixed').addClass('default').fadeIn(0);
            });
        }
    });

});
/*-----------------------------------------------------------------------------------*/
/*	MENU
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function () {
    jQuery('.js-activated').dropdownHover({
        instantlyCloseOthers: false,
        delay: 0
    }).dropdown();


    jQuery('.dropdown-menu a, .social .dropdown-menu, .social .dropdown-menu input').click(function (e) {
        e.stopPropagation();
    });

});
jQuery('.btn.responsive-menu').on('click', function() {
    jQuery(this).toggleClass('opn');
});
/*-----------------------------------------------------------------------------------*/
/*	RETINA
/*-----------------------------------------------------------------------------------*/
jQuery(function() {
	jQuery('.retina').retinise();
});
/*-----------------------------------------------------------------------------------*/
/*	PRETTIFY
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function () {
    window.prettyPrint && prettyPrint()
});
/*-----------------------------------------------------------------------------------*/
/*	PARALLAX MOBILE
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function () {
    if (navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/BlackBerry/i)) {
        jQuery('.parallax').addClass('mobile');
    }
});
/*-----------------------------------------------------------------------------------*/
/*	SWIPER
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function () {
	jQuery('.swiper-container.gallery').each(function(){
		jQuery(this).swiper({
			grabCursor: true,
			slidesPerView: 'auto',
			wrapperClass: 'swiper',
			slideClass: 'item',
			offsetPxBefore: 0,
			offsetPxAfter: 0
		});
	
		var $swipers = jQuery(this);
	
		$swipers.siblings('.arrow-left').click(function(){
			$swipers.data('swiper').swipeTo($swipers.data('swiper').activeIndex-1);
			return false;
		});
		
		$swipers.siblings('.arrow-right').click(function(){
			$swipers.data('swiper').swipeTo($swipers.data('swiper').activeIndex+1);
			return false;
		});
	});
});
/*-----------------------------------------------------------------------------------*/
/*	PRELOADER
/*-----------------------------------------------------------------------------------*/
jQuery(window).load(function() {
"use strict";
		
	jQuery('#status').fadeOut();
	jQuery('#preloader').delay(350).fadeOut(1000);
	jQuery(window).trigger('resize');
	
	jQuery('a:not([target="_blank"]):not([href*=#]):not([href^=mailto]):not(.fancybox-media):not(.btn.responsive-menu):not(a[href$="jpg"]):not([href$="jpeg"]):not(a[href$="gif"]):not(a[href$="png"]):not(.colour-switcher a):not(a.chosen-single):not(a.add_to_cart_button)').click(function(){
		var href = jQuery(this).attr('href');
		jQuery('#preloader, #status').fadeIn(600);
		setTimeout(function(){
			window.location = href;
		}, 650);
		return false;
	});
	
});
window.onpageshow = function(event) {
    if (event.persisted) {
        jQuery('#status').fadeOut();
        jQuery('#preloader').delay(350).fadeOut(1000);
    }
};
window.blockFotoramaData = true;