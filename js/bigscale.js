$(function(){
	;(function(){
			/*var smallpic=document.querySelector('.smallpic')
			var smallscale=document.querySelector('.smallscale')
			var bigscale=document.querySelector('.bscale')
			var bigpic=document.querySelector('.bigpic')
			var oBox=document.querySelector('.box')
			var picLi=document.querySelectorAll('ul li')
			var picUl=document.querySelector('ul')
			var right=document.querySelector('.right')
			var left=document.querySelector('.left')
			var liwidth=picLi[0].offsetWidth
			
			smallpic.onmouseover=function(){
				smallscale.style.visibility='visible';
				bigscale.style.visibility='visible';
				
				smallscale.style.width=smallpic.offsetWidth*bigscale.offsetWidth/bigpic.offsetWidth+'px'
				smallscale.style.height=smallpic.offsetHeight*bigscale.offsetHeight/bigpic.offsetHeight+'px'
				
				

				smallpic.onmousemove=function(ev){
					var ev=ev||window.event;
					
					var shortx=ev.offsetX;
					var shorty=ev.offsetY;
					
					var l=ev.clientX-oBox.offsetLeft-smallscale.offsetWidth/2
					var t=ev.clientY-oBox.offsetTop-smallscale.offsetHeight/2
					if(l<0){
						l=0;
					}else if(l>smallpic.offsetWidth-smallscale.offsetWidth-2){
						l=smallpic.offsetWidth-smallscale.offsetWidth-2
					}
					
					if(t<0){
						t=0
					}else if(t>smallpic.offsetHeight-smallscale.offsetHeight-2){
						t=smallpic.offsetHeight-smallscale.offsetHeight-2
					}
					smallscale.style.left=l+'px'
					smallscale.style.top=t+'px'
	
					var bili=bigpic.offsetHeight/smallpic.offsetHeight
					
					bigpic.style.left=-bili*l+'px'
					bigpic.style.top=-bili*t+'px'
				}
			}
			smallpic.onmouseout=function(){
				smallscale.style.visibility='hidden';
				bigscale.style.visibility='hidden'
			}*/
				var bigpic=$('.bigpic');
				var bigscale=$('.bscale');
				var smallscale=$('.smallscale');
				var smallpic=$('.smallpic')
			$('.smallpic').mouseover(function(e){
				$('.smallscale').css('visibility','visible')
				$('.bigpic').css('visibility','visible')
				
				var h=smallpic.outerHeight()*bigscale.outerHeight()/bigpic.outerHeight();
				var w=smallpic.outerWidth()*bigscale.outerWidth()/bigpic.outerWidth();

				smallscale.css({
					'height':h,
					'width':w
				})
				
				
			}).mousemove(function(e){
				var ev=ev||window.event;
				
				var l=e.pageX-smallpic.offset().left-smallscale.outerWidth()/2;
					t=e.pageY-smallpic.offset().top-smallscale.outerHeight()/2;
					
					if(l<0){
						l=0;
					}else if(l>smallpic.outerWidth()-smallscale.outerWidth()){
						l=smallpic.outerWidth()-smallscale.outerWidth();
					}
						
					if(t<0){
						t=0
					}else if(t>smallpic.outerHeight()-smallscale.outerHeight()){
						t=smallpic.outerHeight()-smallscale.outerHeight();
					}
				console.log(l,t);
				smallscale.css('left',l);
				smallscale.css('top',t);
				
				var bili=bigpic.outerHeight()/smallpic.outerHeight();
				
				bigpic.css({
					'left':l*bili*-1,
					'top':t*bili*-1
					
				})

			}).mouseout(function(){
				$('.smallscale').css('visibility','hidden')
				$('.bigpic').css('visibility','hidden')
			})

	})()
})
