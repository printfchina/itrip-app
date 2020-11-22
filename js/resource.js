'use strict';
// 加减数量
var addSum = function(){
	// 按钮事件
var jian=document.getElementsByClassName('jian');
var shu=document.getElementsByClassName('shu');
var jia=document.getElementsByClassName('jia');
for(var i=0;i<jia.length;i++){
	jian[i].shu=shu[i];
	jia[i].shu=shu[i];
	jia[i].jian=jian[i];
	jian[i].onclick=function(){
		var n=parseInt(this.shu.value)
		if(n>1){
			n--;
		}
		this.shu.value=n;
	};
	jia[i].onclick=function(){
		var n=parseInt(this.shu.value)
		n++;
		this.shu.value=n;
	};
}

}

//调用函数
addSum();



//单选框
$(".bill-two i").click(function(){
$(this).toggleClass('cur');
})


/*下面代码是--业务连通页面*/
$(".detail-next").tap(function(){
window.location.href="fill.html";
	
})
