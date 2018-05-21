/*;(function(){
	$(function(){
				var bstop=true;//不通过
				var usereg=/^([\u4e00-\u9fa5]|[\w\-]){3,15}$/;
				$('#username').on('blur',function(){
					var username=$(this).val();//获取用户名值
					if(username!=''){//检测用户名是否为空
						if(usereg.test(username)){//检测用户名是否满足正则
							//将当前的用户名给后端，后端和数据库进行匹配，不管是否存在，后端返回结果
							$.ajax({
								type:'post',
								url:'../php/reg.php',
								data:{
									name:username//获取用户名给后端
								},
								success:function(d){
									if(d){
										$('#username').next('i').css('color','red').html('用户名已存在');
										bstop=true;
									}else{
										$('#username').next('i').css('color','green').html('√');
										bstop=false;
									}
								}
							})
						}else{
							$(this).next('i').css('color','red').html('格式不正确');
							bstop=true;
						}
					}else{
						$(this).next('i').css('color','red').html('用户名不能为空');
						bstop=true;
					}
				});
				
				
				$('form').on('submit',function(){//验证不通过无法提交的
					if(bstop){
						return false;//阻止按钮跳转。
					}
				});
	})
})();*/

$(function(){
	;(function(){
				var bstop=true;//不通过
				var usereg=/^[a-z0-9_-]{3,16}$/;
				$('#username').on('blur',function(){
					var username=$(this).val();//获取用户名值
					if(username!=''){//检测用户名是否为空
						if(usereg.test(username)){//检测用户名是否满足正则
							//将当前的用户名给后端，后端和数据库进行匹配，不管是否存在，后端返回结果
							$.ajax({
								type:'post',
								url:'php/reg.php',
								data:{
									name:username//获取用户名给后端
								},
								success:function(d){
									if(d){
										$('#username').next('i').css('color','red').html('用户名已存在');
										bstop=true;
									}else{
										$('#username').next('i').css('color','green').html('√');
										bstop=false;
									}
								}
							})
						}else{
							$(this).next('i').css('color','red').html('格式不正确');
							bstop=true;
						}
					}else{
						$(this).next('i').css('color','red').html('用户名不能为空');
						bstop=true;
					}
				});
				
			/*-------------password------------------*/
				
				var passreg=/^[a-z0-9_-]{6,18}$/;
				$('#password').on('blur',function(){
					var password=$(this).val();
					if(password!=''){
						if(passreg.test(password)){
							$('#password').next('i').css('color','green').html('√');
						}else{
							$(this).next('i').css('color','red').html('格式不正确');
							bstop=true;
						}
					}else{
						$(this).next('i').css('color','red').html('密码不能为空');
						bstop=true;
					}
				});
				
				
				/*-------------确认密码-----------------*/
				
				$('#passagain').on('blur',function(){
						var passagain=$(this).val();
						if(passagain!=''){
							if(passagain==$('#password').val()){
								$(this).next('i').css('color','green').html('√');
							}else{
								$(this).next('i').css('color','red').html('密码不一致');
								
							}
						}else{
							$(this).next('i').css('color','red').html('密码不能为空');
							bstop=true;
						}
				});
				
				$('form').on('submit',function(){//验证不通过无法提交的
					if(bstop){
						return false;//阻止按钮跳转。
					}
				});
		
	})();
})
