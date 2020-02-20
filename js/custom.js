
$(window).on('load', function(){
	$('body').removeClass('loaded');
});

$(function(){

	/* Якоря */
	/* ---------------------------------------------- */
	$('a.anchor').bind('click.smoothscroll',function () {
		var target = $(this).attr('href'),
			bl_top = $(target).offset().top,
			offset = $(this).data('offset') !== '' ? $(this).data('offset') : 0;
		$('body,html').animate({scrollTop: bl_top - offset}, 900);
		return false;
	});

	/* Plugins */
	/* ---------------------------------------------- */


});