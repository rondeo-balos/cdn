jQuery(document).ready(function($){
	var $selector = '.hover-box';
	if($('.box-cursor').length < 1 )
	    $('body').prepend('<div class="box-cursor"></di>');
	var $mouseposition = {};
	var $ishover = false;
	$($selector).hover(
		function(){
			$ishover = true;
			var $position = $(this).offset();
			var $width = $(this).width();
			var $height = $(this).height();
			$('.box-cursor').offset({ 'top': $position.top, 'left': $position.left });
			$('.box-cursor').width($width);
			$('.box-cursor').height($height);
			$('.box-cursor').css('opacity','1');
		},
		function(){
		    $('.box-cursor').animate({
		        'top': $mouseposition.top,
		        'left': $mouseposition.left,
		        'width': '20px',
		        'height': '20px',
		        'opacity': '0'
		    }, 200, 'linear', function(){
		        $ishover = false;
		    });
		}
	)

	$('body').mousemove(function(e){
		if($ishover) return true;
		$mouseposition = { 'top': e.pageY, 'left': e.pageX };
		$('.box-cursor').offset({ 'top': e.pageY, 'left': e.pageX });
	})
})