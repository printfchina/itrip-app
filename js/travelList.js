/*底部切换*/
var backgrounds = [
      "images/icon/luggage_01.png",
      "images/icon/footer_0322_02.png",
      "images/icon/footer_0322_03.png",
      "images/icon/footer_0322_04.png",
      "images/icon/luggage_02.png",
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

//Tab开始
$('.nav-tab li').tap(function(){
	var index = $(this).index();
	$(this).addClass('nav-active').siblings().removeClass('nav-active');
	  //完成Tab切换效果
	$('.panel-item').eq(index).show().siblings().hide();
})

//调转页面
$(".search-box").tap(function(){
	self.location='search.html'; 
})
