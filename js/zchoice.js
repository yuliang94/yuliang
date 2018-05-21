$(function(){
	;(function(){
		
	/*---------穿戴选项卡-------------*/
		$('.showlist').find('li').hover(function(){
			$(this).css('background','#ce1a1b').siblings('li').css('background','#ececec')
			$n=$(this).index()
			$('.imglist').find('li').eq($n).show().siblings('li').hide();
		},function(){
			$(this).css('background','#ececec')
		});
		
		
		
		/*----------智选中----------------*/
		
		
		$('.middle-pic-list').find('li').hover(function(){
			$(this).find('.middle-pick-mask').animate({
				top:'0'
			},20)
		},function(){
			$(this).find('.middle-pick-mask').animate({
				top:'152px'
			},20)
		})
		
		
		
		
		/*-------------z 智选放大-----------------------*/
		
		/*$('.top-near-pic').find('a').hover(function(){
			$(this).find('img').stop(true).animate({
				width:'300px'
			},100)
		},function(){
			$(this).find('img').stop(true).animate({
				width:'235px'
			},100)
		})*/
		
	})()
})
