jQuery(document).ready(function($){
	$('img').each(function(){
		if(!$(this).attr('alt')){
			$(this).attr('alt', 'Trig Image');
		}
	});
	$('div.tp-bullet').append('<span class="pojo-sr-only sr-only">Nav Button</span>');
});
