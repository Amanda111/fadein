$(function(){
	$.ajax({
		type:"GET",
		url:"origin.json",
		dataType:"json",
		success:function(data){
			var height=0,
			html='';
			html+='<div class="items"><h3>'+data[0].year+'</h3></div><div class="items"><h3>'+data[0].tag+'</h3></div>';
			for(var i=1;i<data.length;i++){
				html+='<div class="items">'+'<span class="date">'+data[i].date+'</span>'+'<h4>'+data[i].name+'</h4></div>';
			}
			$("body").html(html);
			$(".items").each(function(index){
				$(this).delay(300*index).fadeIn(800);
			});
		}
	});
})