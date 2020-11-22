//点击加载更多
$('.dis-btn').tap(function(){
	if($(this).html() == '查看全部评论') {
		$(this).html('收起部分评论');
	}else{
		$(this).html('查看全部评论');
	}
	var liLen = $(".dis-in");
	liLen.each(function(i){
		if($(this).css("display")=="none"){
     		$(this).show();
     	}else{
		    $(this).hide();
		}
	})	
     
})

$('.content-top li ').tap(function(){
	var index = $(this).index();
	$(this).addClass('nav-active').siblings().removeClass('nav-active');
	$('.content-bd').eq(index).show().siblings().hide();
})

/*下面代码是--业务连通页面*/
$(".btn-orange").tap(function(){
window.location.href="date.html";
	
})
