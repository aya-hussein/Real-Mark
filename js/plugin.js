$(document).ready(function(){
	$(window).on("scroll",function(){
		$('#fixed-menu').css('background','#1c337b');
		if($(window).scrollTop()===0)
		{
			$('#fixed-menu').css('background','none');
		}
	});
		$('#Mynav').width($(window).width());
		$('#Mynav').height($(window).height());
		$('#Mynav li').width($(window).width());
	$(window).on("resize",function(){
		$('#Mynav').width($(window).width());
		$('#Mynav').height($(window).height());
		$('#Mynav li').width($(window).width());
	});
	$('#close-btn').on('click',function(){
		$('#Mynav').slideUp();
	});
	$('.navbar-toggler').on('click',function(){
		$('#Mynav').slideDown();
	});
});