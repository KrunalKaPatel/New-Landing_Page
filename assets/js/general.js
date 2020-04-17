$(document).ready(function(){

	/* Recent Sroject Slider
	------------------------------*/
	$('.recent-project-slider').slick({
		infinite: true,
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
		arrows: false,
  		slidesToShow: 1,
  		slidesToScroll: 1
	});

	/* Our Patners Slider
	------------------------------*/
	$('.our-patners-slider').slick({
		infinite: true,
		slidesToShow: 5,
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
});