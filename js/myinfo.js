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

/*下面代码是--业务连通页面*/
$(".orderall").tap(function(){
window.location.href="order.html";
	
})
