jQuery(document).ready(function () {

	/* ---------------------------------------------------------------------- */
	/*	Resume
	/* ---------------------------------------------------------------------- */

	// Rating bars
	$(".skills .rating").each((_, e) => {
		const rat = $(e).attr("data-rat");		
		// Append points
		for (let i = 0; i < 7; i++) {
			const point = $("<span />");
			if (i < rat) {
				$(point).css({opacity: 1});
			}
			$(e).append(point);
		}
	});

	/* ---------------------------------------------------------------------- */
	/*	Menu
	/* ---------------------------------------------------------------------- */

	// Run easytabs
	$("#content").easytabs({
		animate: true,
		updateHash: false,
		transitionIn: 'slideDown',
		transitionOut: 'slideUp',
		animationSpeed: 600,
		tabs: ".tmenu",
		tabActiveClass: 'active',
	});

	/* ---------------------------------------------------------------------- */
	/*	Portfolio
	/* ---------------------------------------------------------------------- */

	// Needed variables
	const $pfilter = $('#projects-filter');
	const $plist = $('#projects-list');

	// Deselect current and select new current
	$pfilter.find('a').click(function () {
		$(this).parent().find('.current').removeClass('current');
		$(this).addClass('current');
	});

	// Run Isotope  
	$plist.isotope({
		itemSelector: '.project',
		filter: '*',
		layoutMode: 'masonry',
		animationOptions: {
			duration: 750,
			easing: 'linear'
		}
	});

	// Isotope Filter 
	$pfilter.find('a').click(function () {
		const selector = $(this).attr('data-filter');
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
	/*	Fancybox https://fancyapps.com/docs/ui/fancybox/
	/* ---------------------------------------------------------------------- */

	// attach Fancybox to the list of projects
	Fancybox.bind("#projects-list a", {
		// Your options
		caption: function (fancybox, carousel, slide) {
			if (slide.caption) {
				return $("#"+slide.caption).html().trim();
			}
		},
	});

	/* ---------------------------------------------------------------------- */
	/*	Footer
	/* ---------------------------------------------------------------------- */

	// set the year
	document.getElementById("year").innerHTML = (new Date().getFullYear());
});
