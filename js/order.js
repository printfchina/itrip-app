'use strict';
var aLen = $("#footer a");
$("#footer a").tap(function(){
	var index = $(this).index();
	//console.log(index);
	$(this).addClass('active').siblings().removeClass('active');
	//遍历所有的a，找到span变成灰色
	/*aLen.each(function(i){
		if (i==0) {
			$(this).children('i').addClass('active5');
		}else if (i==1) {
			$(this).children('i').addClass('active6');
		}else {
			$(this).children('i').addClass('active7');
		}
	})*/

	aLen.each(function(i){
		if (i==0) {
			$(this).children('i').removeClass('active2');
		}else if (i==1) {
			$(this).children('i').removeClass('active3');
		}else {
			$(this).children('i').removeClass('active4');
		}
	})


	
	/*for (var i = 0; i < aLen.length; i++) {
		if (i==0) {
			$(this).find('i').addClass('active5');
		}else if (i==1) {
			$(this).find('i').addClass('active6');
		}else {
			$(this).find('i').addClass('active7');
		}
	};*/

	//点击哪个哪个变亮
	if (index==0) {
		$(this).children('i').addClass('active2');
	}else if (index==1) {
		//$(this).children('i').css('background-postion','-677/75rem -611/75rem');
		$(this).children('i').addClass('active3');
	}else {
		$(this).children('i').addClass('active4');
	}
	
})