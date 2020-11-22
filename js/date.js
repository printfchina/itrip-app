$(function() {
	var now = new Date();

	$('#demo').mobiscroll().calendar({
		lang: 'zh',
		display: 'inline',
		layout: 'liquid',
		theme: 'default',
		markedDisplay: 'bottom',
		marked: [{
			d: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 6),
			color: 'rgb(28, 161, 227)'
		}, {
			d: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 8),
			color: 'rgb(28, 161, 227)'
		}, {
			d: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 9),
			color: 'rgb(28, 161, 227)'
		}, {
			d: new Date(now.getFullYear(), now.getMonth() + 1, 15),
			color: 'rgb(28, 161, 227)'
		}, {
			d: '11/30',
			color: 'rgb(163, 0, 38)'
		}, {
			d: '5/23',
			color: 'rgb(163, 0, 38)'
		}, {
			d: '3/12',
			color: 'rgb(163, 0, 38)'
		}, {
			d: '14',
			color: 'rgb(204,204,0)'
		}, {
			d: 'w5',
			color: 'rgb(34, 139, 34)'
		}, {
			d: '1/1',
			color: 'rgb(250,104,0)'
		}, {
			d: '1/2',
			color: 'rgb(250,104,0)'
		}, {
			d: '6/4',
			color: 'rgb(250,104,0)'
		}, {
			d: '8/4',
			color: 'rgb(0,0,0)'
		}, {
			d: '12/25',
			color: 'rgb(250,104,0)'
		}, {
			d: '12/26',
			color: 'rgb(250,104,0)'
		}]
	});

	$('.md-marked-list').mobiscroll().listview({
		theme: 'default',
		display: 'bottom',
		swipe: false
	});

	//单选框
	//
	$(".infant-box i").click(function() {
		$(this).toggleClass('cur');
	})

});

// 加减数量
var addSum = function() {
	// 按钮事件
	var jian = document.getElementsByClassName('jian');
	var shu = document.getElementsByClassName('shu');
	var jia = document.getElementsByClassName('jia');
	for(var i = 0; i < jia.length; i++) {
		jian[i].shu = shu[i];
		jia[i].shu = shu[i];
		jia[i].jian = jian[i];
		jian[i].onclick = function() {
			var n = parseInt(this.shu.value)
			if(n > 1) {
				n--;
			}
			this.shu.value = n;
		};
		jia[i].onclick = function() {
			var n = parseInt(this.shu.value)
			n++;
			this.shu.value = n;
		};
	}

}

//调用函数
addSum();