$(function(){
	$.ajax({
		type:"GET",
		url:"origin.json",
		dataType:"json",
		success:function(data){
			html='';
			html+='<div class="items"><h3>'+data[0].year+'</h3></div><div class="items"><h3>'+data[0].tag+'</h3></div>';
			for(var i=1;i<data.length;i++){
				html+='<h4 class="items"><span class="date">'+data[i].date+'</span><span>'+data[i].name+'</span></h4>';
			}
			$(".line").height(i*45).css("display","none").slideDown(500);
			$(".content").html(html);
			$(".items").each(function(index){
				$(this).delay(300*index).addClass("on").fadeIn(800);
			});
		}
	});
})