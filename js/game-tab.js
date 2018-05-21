$(function(){
	;(function(){
		
		
		/*---------ganme选项卡-------------*/
		$('.tab-game-btn').find('li').on('click',function(){
			$(this).addClass('active').siblings().removeClass('active')
			$n=$(this).index();
			$('.tab-game-ul').children('li').eq($n).show().siblings().hide();
			
		})

		
	})()
})
