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



var scrollPic = function(){
	// banner
	var banner = document.getElementsByClassName("i-banner")[0];
	// 图片的宽度
	var width = banner.offsetWidth;

	//图片盒子
	var imgBox = banner.getElementsByTagName("ul")[0];

	//小圆点盒子
	var pointBox = banner.getElementsByTagName("ul")[1];

	//点数组
	var pointList = pointBox.getElementsByTagName("li");

	var  index = 1;
	var timer ;

	var startX = 0;
	var moveX = 0;
	var endX = 0;

	//定义一个过渡函数
	var addTransition = function(){
		imgBox.style.transition = "all .3s ease 0s";
		imgBox.style.webkitTransition = "all .3s ease 0s";
	} 

	//去掉过渡函数
	var removeTransition = function(){
		imgBox.style.transition = "none";
		imgBox.style.webkitTransition = "none";
	} 

	//改变位置
	var setTransform = function(t){
		imgBox.style.transform = "translate("+t+"px)";
		imgBox.style.webkitTransform = "translate("+t+"px)";
	} 

	//小圆点变化
	var setpoint = function(n){
		for (var i = 0; i < pointList.length; i++) {
			pointList[i].className = '';
		};
		if (n >= 5) {
			n = 1;
		}else if(n <= 0){
			n = 4;
		}
		pointList[n-1].className ='on';
	}

	

	//定时器
	timer = setInterval(function(){
		index++;
		addTransition();
		setTransform(-index*width);
		 setpoint(index);

	}, 3000)

	//监听函数

	imgBox.addEventListener('transitionEnd', function(){
		if (index >= 5) {
			index = 1;
		}else if(index <= 0){
			index = 4;
		}

		removeTransition();
		setTransform(-index*width);

	},false)

	imgBox.addEventListener('webkitTransitionEnd', function(){
		if (index >= 5) {
			index = 1;
		}else if(index <= 0){
			index = 4;
		}

		removeTransition();
		setTransform(-index*width);

	},false)



//触摸事件开始
	imgBox.addEventListener('touchstart', function(e){
		//console.log('strat');
		// 记录开始的位置
		startX = e.touches[0].clientX;
	})

	//触摸滑动事件开始
	imgBox.addEventListener('touchmove', function(e){
		//清除定时器
		clearInterval(timer);
		// 清除默认的滚动事件
		e.preventDefault();
		// 记录开始的位置
		endX = e.touches[0].clientX;
		//记录移动的位置
		moveX = startX - endX;

		removeTransition();
		setTransform(-index * width - moveX)
	})

	//触摸滑动事件结束
	imgBox.addEventListener('touchend', function(e){
		//如果移动的距离大雨三分之一是
		if( Math.abs(moveX) > (1/3*width) && endX != 0){
			// 向左
			if (moveX > 0) {
				index++;
			}else{
				index--;
			}
			// 改变位置
			setTransform(-index*width);
			setpoint(index);

		}

		// 回到原来的位置
		addTransition();
		setTransform(-index*width);

		startX = 0;
		endX = 0;

		clearInterval(timer);

		//定时器
		timer = setInterval(function(){
			index++;
			addTransition();
			setTransform(-index*width);
			setpoint(index);
		}, 3000)

	})

}

//banner 调用
scrollPic();


//滑动超过可视高度的一半，返回顶部按钮出现，过3s之后，按钮隐
//点击返回顶部按钮，缓动返回顶部
//封装返回顶部方法
function gotop(goTopId,win) {
  var toTopEle = document.getElementById(goTopId),
  		win = document.getElementById(win),
    removeTimer = 0,//定义定时器判断显示隐藏
    timer = null, //定义一个定时器
     isTop = true; //定义一个布尔值，用于判断是否到达顶部
	//一定清楚滚动区域是什么，这里是wrapper
	//给滚动区域添加监听事件
  win.addEventListener('scroll',
    function(){
    	//划过屏幕一半高度的时候，返回顶部显示出来
      if (win.scrollTop > window.innerHeight/2) {
        toTopEle.style.display = 'block';
        	//清除定时器
        if (removeTimer) {
          clearTimeout(removeTimer);
        }
        //显示之后每隔3秒隐藏返回顶部按钮
        removeTimer = setTimeout(function() {
            toTopEle.style.display = 'none';
         },
          3000);
      } else {
        toTopEle.style.display = 'none';
      }
      
      //主要用于判断当 点击回到顶部按钮后 滚动条在回滚过程中，若手动滚动滚动条，则清除定时器
        if(!isTop){
            clearInterval(timer);
        }
        isTop = false;
        
        
    },false);
  toTopEle.addEventListener('click',
    function() {//回到顶部按钮点击事件
        //设置一个定时器
        timer = setInterval(function(){
            //获取滚动条的滚动高度
            var osTop = win.scrollTop;
            //用于设置速度差，产生缓动的效果
            var speed = Math.floor(-osTop / 6);
            win.scrollTop = osTop + speed;
            isTop =true;  //用于阻止滚动事件清除定时器
            if(osTop == 0){
                clearInterval(timer);
            }
        },50);
    },
    false);
}
//调用返回顶部方法
gotop('Top','wrapper');

//给大家补充iscroll框架的内容，扩展大家知识面
//使用iscroll框架实现，滚动中间区域带有惯性
//大家知道这种方法即可，在以后的页面开发中，如果想滚动带惯性就添加下方代码即可
/*var myscroll;  
function loaded(){
   setTimeout(function(){  
            myscroll=new iScroll("wrapper");  
     }, 100 );  
}  
 window.addEventListener("load",loaded,false);  */
        