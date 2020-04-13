$(document).ready(function(){
	$('.recent-project-slider').slick({
  		infinite: true,
  		slidesToShow: 1,
  		slidesToScroll: 3,
  		responsive: [
		    {
		      breakpoint: 480,
		      settings: {
		        infinite: true,
		        slidesToShow: 1,
		        slidesToScroll: 1,
		      }
		    }
    	],
	});
});