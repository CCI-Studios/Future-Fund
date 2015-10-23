(function($){

$(function(){

	$('#block-block-8 .content a').click(function(e){

		e.preventDefault();
		$('#block-system-main-menu').toggleClass('slide');
		$('#page-wrapper').toggleClass('slide-wrapper');

	});

	if($(window).width()<767)
		{
			$('#block-system-main-menu').insertBefore('#page-wrapper');
		}


	$(window).resize(function(){

		if($(window).width()<767)
		{
			$('#block-system-main-menu').insertBefore('#page-wrapper');
		}

		if($(window).width()>767)
		{
			$('#block-system-main-menu').insertAfter('#block-block-8');
		}

	});
	
});

})(jQuery);
