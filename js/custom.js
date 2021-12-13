jQuery(document).ready(function () {

	/* ---------------------------------------------------------------------- */
	/*	Resume
	/* ---------------------------------------------------------------------- */

	// Rating bars
	$(".skills .rating").each((_, e) => {
		let rat = $(e).attr("data-rat");		
		// Append points
		for (let i = 0; i < 7; i++) {
			let point = $("<span />");
			if (i < rat) {
				$(point).css({opacity: 1});
			}
			$(e).append(point);
		}
	});

	/* ---------------------------------------------------------------------- */
	/*	Menu
	/* ---------------------------------------------------------------------- */

	// Needed variables
	var $content = $("#content");

	// Run easytabs
	$content.easytabs({
		animate: true,
		updateHash: false,
		transitionIn: 'slideDown',
		transitionOut: 'slideUp',
		animationSpeed: 600,
		tabs: ".tmenu",
		tabActiveClass: 'active',
	});

	/* ---------------------------------------------------------------------- */
	/*	Cats Filter
	/* ---------------------------------------------------------------------- */

	var $catsfilter = $('.cats-filter');

	// Copy categories to item classes
	$catsfilter.find('a').click(function () {
		var currentOption = $(this).attr('data-filter');
		$(this).parent().parent().find('a').removeClass('current');
		$(this).addClass('current');
	});

	/* ---------------------------------------------------------------------- */
	/*	Portfolio
	/* ---------------------------------------------------------------------- */

	// Needed variables
	var $plist = $('#projects-list');
	var $pfilter = $('#projects-filter');

	// Run Isotope  
	$plist.isotope({
		filter: '*',
		layoutMode: 'masonry',
		animationOptions: {
			duration: 750,
			easing: 'linear'
		}
	});

	// Isotope Filter 
	$pfilter.find('a').click(function () {
		var selector = $(this).attr('data-filter');
		$plist.isotope({
			filter: selector,
			animationOptions: {
				duration: 750,
				easing: 'linear',
				queue: false,
			}
		});
		return false;
	});

	// Portfolio image animation 
	$plist.find('img').adipoli({
		'startEffect': 'transparent',
		'hoverEffect': 'boxRandom',
		'imageOpacity': 0.6,
		'animSpeed': 100,
	});

	/* ---------------------------------------------------------------------- */
	/*	prettyPhoto
	/* ---------------------------------------------------------------------- */

	$("a[rel^='projects']").prettyPhoto({
		animation_speed: 'fast', /* fast/slow/normal */
		social_tools: '',
		theme: 'pp_default',
		horizontal_padding: 5,
	});
	
});
