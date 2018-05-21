$(function(){
	;(function(){
		
		var num=0
		/*---------banner-------------*/
		$('.bannerimg-btn').find('li').on('click',function(){
			$(this).css('background','red').siblings().css('background','orange')
			$n=$(this).index();
			num=$n;
			$('.bannerimg-list').find('li').eq(num).show().siblings('li').hide()
		})

		$('.next').on('click',function(){
			num++
			if(num>2){
				num=0
			}
			$('.bannerimg-list').find('li').eq(num).show().siblings('li').hide();
			$('.bannerimg-btn').find('li').eq(num).addClass('active').siblings('li').removeClass('active')
			
		})
		
		$('.prev').on('click',function(){
			num--;
			if(num<0){
				num=2
			}
			$('.bannerimg-list').find('li').eq(num).show().siblings('li').hide();
			$('.bannerimg-btn').find('li').eq(num).addClass('active').siblings('li').removeClass('active')
			
			
		})
		
		var timer=setInterval(function(){
			$('.next').click();
		},5000);
		
		$('.banner').on('mouseover',function(){
			clearInterval(timer);
		});
		
		$('.banner').on('mouseout',function(){
			timmer=setInterval(function(){
				$('.next').click();
			},5000)
		})
		
	})()
})
