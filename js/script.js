$(document).ready(function(){
	$('.slider,.travel-slider,.shop-slider').slick({
		slidesToShow:1,
		slidesToScroll: 1,
		fade: true,
		
		prevArrow:'<button type="button" class="slick-prev arrow arrow1"><img src="./img/prew.svg" alt=""></button>',
		nextArrow:'<button type="button" class="slick-next arrow arrow2"><img src="./img/next.svg" alt=""></button>',
		asNavFor: '.slider__nav',
	
	});
    $('.slider__nav').slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		asNavFor: '.slider',
		
		centerMode: true,
		focusOnSelect: true,
	});
	
	$('.surf-slider').slick({
		slidesToShow:4,
		asNavFor: '.surf-map-cards',
		prevArrow:'<button type="button" class="slick-prev arrow arrow1"><img src="./img/prew.svg" alt=""></button>',
		nextArrow:'<button type="button" class="slick-next arrow arrow2"><img src="./img/next.svg" alt=""></button>',
		responsive: [
			{
			  breakpoint: 900,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				
			  }
			},
			{
				breakpoint: 700,
				settings: {
				  slidesToShow: 2,
				  slidesToScroll: 1,
				  
				}
			  },
			  {
				breakpoint: 500,
				settings: {
				  slidesToShow: 1,
				  slidesToScroll: 1,
				  
				}
			  },
			
		  ]
		
	});
	$('.surf-map-cards').slick({
		slidesToShow:9,
		slidesToScroll: 9,
		focusOnSelect:true,
		asNavFor: '.surf-slider',
		centerMode: true,
		focusOnSelect: true,
	});
	
	$('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
    $('.quantity').each(function() {
      var spinner = $(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

      btnUp.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

      btnDown.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

	});
	
	$('.quantity-button').on('click', function(){
	 let summ = ($('.guests').val() * $('.summ').data('nights')) * $('.nights').val();
	$('.summ').html('$' + summ.toFixed(1));

});
$('.surf__circl,.top-menu__burger,.aside').click(function(event) {
	
	$(this).toggleClass('active');
	
   
});

});

