/*底部切换*/
var backgrounds = [
      "images/icon/footer_0322_01.png",
      "images/icon/footer_0322_02.png",
      "images/icon/footer_0322_03.png",
      "images/icon/footer_0322_04.png",
      "images/icon/footer_0322_05.png",
      "images/icon/footer_0322_06.png",
      "images/icon/footer_0322_07.png",
      "images/icon/footer_0322_08.png"
    ];
var aLen = $("#footer a");
$("#footer a").tap(function(){
	$(this).addClass('active').siblings().removeClass('active');
	//遍历所有的a，找到span变成灰色
	aLen.each(function(i){
		$(this).find('span').css('background-image','url('+backgrounds[i+4]+')')
	})
	//点击哪个哪个变亮
	$(this).children('span').css('background-image','url('+backgrounds[$(this).index()]+')');
})


//导航切换Tab效果
$(".nav li").tap(function(){
	var index = $(this).index();
	$(this).addClass('nav-current').siblings().removeClass('nav-current');
	//遍历所有的i，把按钮图标先变成灰色
	$(".nav li").each(function(i){
		$(this).find('i').attr("class","");
	})
	//点击哪个哪个变亮
	$(this).children('i').addClass('nav-bp'+(index+1)+'');
    //完成Tab切换效果
	$('.pro-scroll').eq(index).show().siblings().hide();

})

/*下面代码是--业务连通页面*/
$(".pro-scroll").tap(function(){
window.location.href="travelDetail.html";
	
})
