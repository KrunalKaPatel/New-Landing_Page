$(document).ready(function(){
	$('.recent-project-slider').slick({
		infinite: true,
		arrows: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 767,
				settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				}
			},
			{
				breakpoint: 480,
				settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				}
			}
		]
	});

	$('.left-click').click(function(){
	$('.slider').slick('slickPrev');
	});

	$('.right-click').click(function(){
	$('.slider').slick('slickNext');
	});


	$('.testimonial-slider').slick({
  		infinite: true,
  		slidesToShow: 1,
  		slidesToScroll: 1
	});


});