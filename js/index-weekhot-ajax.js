$(function(){
	;(function(){
		
		$.ajax({
			type:"get",
			url:"php/index-weekhot.php",
			async:true,
			success: function(data){
				var data=JSON.parse(data);
				//console.log(data);
				$(data).each(function(i){
					//console.log(this.url)
					$('.digital-3c_list').append(`<li class="item">
						<div><a href=""><img src=${this.url}></a></div>
						<p class="wame-name"><a href="">${this.tittle}</a></p>
						<p class="price">${this.price}</p>
					</li>`)
				})
				
                  
        	}
		});
	
	})()
})
