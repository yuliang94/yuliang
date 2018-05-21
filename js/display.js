$(function(){
	;(function(){
		
		$('.sellcenter').hover(function(){
			$('.sellcenter-bg').show();
			$(this).parent().css({'background-color':'#fff','border-color':'#ededed','border-bottom-color':'#fff'})
		},function(){
			$('.sellcenter-bg').hide();
			$(this).parent().css({'background-color':'#f5f5f5','border-color':'transparent'})
			
		});
		
		$('.phonecity').hover(function(){
			$('.phonecity-bg').show();
			$(this).parent().css({'background-color':'#fff','border-color':'#ededed','border-bottom-color':'#fff'})
			
		},function(){
			$('.phonecity-bg').hide();
			$(this).parent().css({'background-color':'#f5f5f5','border-color':'transparent'})
			
		});
		
		$('.call').hover(function(){
			$('.call-bg').show();
			$(this).parent().css({'background-color':'#fff','border-color':'#ededed','border-bottom-color':'#fff'})
			
		},function(){
			$('.call-bg').hide();
			$(this).parent().css({'background-color':'#f5f5f5','border-color':'transparent'})
			
		});
		
	/*-----二级导航-------*/
	   $('.topnav').children('.item1').hover(function(){
		   	$(this).css({'background-color':'#fff'})
		   	$(this).find('p>a').css('color','#333');
		   	$('.subnav').show();
	   },function(){
	   		$('.subnav').hide();
	   		$(this).css({'background-color':'#454545'});
		   	$(this).find('p>a').css('color','#fff');
	   		
	   })
	   
	   
	   
	   
	   
	   /*------------------------------------*/
		
})();
})
