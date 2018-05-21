;(function(){
	$(function(){
		
		var bstop=true;//不通过
		$('.login-btn').on('click',function(){
			var username=$('.loginname').val();//获取用户名值
			var password=$('.loginpass').val();//获取密码值
			if(username!=''){//检测用户名是否为空
				$.ajax({
					type:"post",
					url:"php/login.php",
					data:{
						name:username,
						pass:password
					},
					success:function(d){
						if(d){
							addCookie('userName','username',7);
							//$('.loginname').next('i').css('color','red').html('用户名已存在');	
							location.href='index.html'
							
						}else{
							//alert(1);
							$('.loginname').next('i').css('color','red').html('用户名密码不正确');
							
						}
					}
				});
			}else{
				$('.loginname').next('i').css('color','red').html('用户名不能为空');
				
			}
		});
		
		function addCookie(key,value,day){
					var date=new Date();//创建日期对象
					date.setDate(date.getDate()+day);//过期时间：获取当前的日期+天数，设置给date
			document.cookie=key+'='+encodeURI(value)+';expires='+date;//添加cookie，设置过期时间
		}

				
		
	});
})();