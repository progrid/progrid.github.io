document.addEventListener("DOMContentLoaded", function() {

	$('.mobile__menu').on('click', function(e) {
		e.preventDefault();
		$(this).toggleClass('mobile__menu_active');
		$('.content').toggleClass('content__active');
	});



	// var $page = $('html, body');
	// $('a[href*="#"]').click(function() {
    // 	$page.animate({
    //     scrollTop: $($.attr(this, 'href')).offset().top
	// 	}, 400);
	// 	return false;
	// });



});
