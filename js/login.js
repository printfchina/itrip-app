'use strict';

// 输入框如果有内容显示清除按钮
$("input").each(function(key, val){
	var that = $(this);
	if(that.val() != ""){
		/*closest 最近的父元素*/
		that.closest(".inp").find(".clear").show();
	}else{
		that.closest(".inp").find(".clear").hide();
	}
});
// 显示隐藏密码
$(".change").click(function(){
	var that = $(this),
		input = that.closest(".pw").find("input");
	if(that.attr("data-show")==1){
		//prop此方法可以获取或者设置匹配元素的属性值。
		
	    /*
	     * prop 和 attr 简单区别一下：
	     * 对于HTML元素本身就带有的固有属性，在处理时，使用prop方法。
	     * 对于HTML元素我们自己自定义的DOM属性，在处理时，使用attr方法。 
	     * 
	     * 自定义属性 data-show 为 1时候  密码 是密文
	     * 自定义属性 data-show 为 2时候  密码 是明文
		*/
		input.prop("type", "text");
		that.attr("data-show","2");
	}else{
		input.prop("type", "password");
		that.attr("data-show","1");
	}
});
// 清除功能
$(".clear").click(function(){
	$(this).parent().find("input").val("").focus();
	$(this).hide();
});
// 激活清除功能

/*
 * 监听事件为: input propertychange  是即时搜索比较好的方案
 * input是标准的浏览器事件，一般应用于input元素，当input的value发生变化就会发生，无论是键盘输入还是鼠标黏贴的改变都能及时监听到变化　　　　　　　　
 * propertychange，只要当前对象属性发生改变。（IE专属的）
 * 移动端不用考虑，但是我还是写上了
 * 
 * 
 */
$(".login-bar input").on("input propertychange", function(){
	var len = $(this).val().length;
	if(len > 0){
		$(this).closest(".inp").find(".clear").show();
	}else{
		$(this).closest(".inp").find(".clear").hide();
	}
});

