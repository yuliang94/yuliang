$(function(){
	;(function(){
		
		$.ajax({
			type:"get",
			url:"php/tabimg.php",
			async:true,
			success: function(data){
				var data=JSON.parse(data);
				//console.log(data);
				$(data).each(function(i){
					//console.log(this.url)
					$('.imglist').append(`<li><img src=${this.url} alt="" /></li>`)
				})    
        	}
		});
	
	})()
})
