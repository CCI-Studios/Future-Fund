(function($){

$(function(){

	var imgSrc1 = $('.view-header-images .views-field-field-image-header img').attr('src');
	var current2 = $('.view-header-images .views-field-field-image-header');
	$('.view-header-images .views-field-field-image-header img').remove();
	$(current2).append('<div class="backbg"></div>');
	$('.view-header-images .views-field-field-image-header .backbg').css('background-image', 'url(' + imgSrc1 + ')'); 

	$('.view-header-images .view-content').slick(); 

	$('#block-block-7 .content').slick({infinite: false,
	adaptiveHeight: true});

});

})(jQuery);
