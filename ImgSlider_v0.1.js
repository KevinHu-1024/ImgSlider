/*
    By:CSS-L1-T8-146
    bbs.ptteng.com
 */
function ImgSlider (_width, _totalHeight, _imgArray) {
	this.width = _width;//组件宽度
	var totalWidth;//总宽：组件宽度 x 图片数量
	var step;//步进量：总宽/图片数
	var index;//图片索引，从1开始
	var a;//每次轮播时的增量结果
	
	this.totalHeight = _totalHeight;//组件高度
	this.imgArray = _imgArray;//图片数组
}
//初始化组件
ImgSlider.prototype.init = function() {
	//从width和数组长度，计算出总宽度 totalWidth;
	this.totalWidth = this.width*this.imgArray.length; 
	//计算步进量：width/totalWidth
	this.step = (this.width/this.totalWidth)*100;
	this.a = 0;
	this.index = 1;
	//（_width为每张图片容器的宽度，图片要在其中水平垂直居中的，超出部分hidden）
	//（_totalheight为每张图片容器的高度，同时也是总的轮播图的高度,图片要在其中水平垂直居中，超出的部分hidden）
	//
	//拿到ul，将totalWidth赋给其 width 属性；
	var ul = document.getElementById('imgSlider-container').getElementsByTagName('ul')[0];
    console.log(ul);
	ul.style.width = this.totalWidth + "px";
	//拿到ul，将totalHeight赋给其 height 属性；
	ul.style.height = this.totalHeight + "px";
	//拿到ul，设置display: block;
	ul.style.display = "block";
	//拿到ul，设置position: absolute;
	ul.style.position = "absolute";
	//拿到ul，插入webkitTransition = "0.5s";
	ul.style.webkitTransition = "0.5s";
	//拿到ul，插入-webkit-transform: translate(0,0);
	ul.style.webkitTransform = "translate(0,0)";
	//
	//拿到li，将width赋给其 width 属性；
	//拿到li，将totalHeight赋给其 height 属性；
	//拿到li，设置float: left;
	//拿到li，设置display: inline;
	//拿到li，设置list-style-type: none;
	var li = document.getElementById('imgSlider-container').getElementsByTagName('li');
	console.log(li.length);
	var i;
	for (i=0; i<=3; i++) {
		li[i].style.height = this.totalHeight + "px";
		li[i].style.width = this.width + "px";
		li[i].style.float = "left";
		li[i].style.display = "inline";
		li[i].style.listStyleType = "none";
		li[i].getElementsByTagName("img")[0].style.textAlign = "center";
	}
}
//轮播函数
ImgSlider.prototype.start = function() {
	//判断当前的索引index，不等于最后一张图的话就继续+步进量；超过最后一张的就修改偏移值为0，同时还原其他相关变量;
	console.log("->轮播开始" );
	var ul = document.getElementById('imgSlider-container').getElementsByTagName('ul')[0];
	if (this.index<this.imgArray.length) {
		this.a = this.a+this.step;
		ul.style.webkitTransform = "translate(-" + this.a + "%,0)";
		this.index++;
		console.log("  跳转完成");
	} else {
		ul.style.webkitTransform = "translate(0,0)";
		this.index = 1;
		this.a = 0;
		console.log("  返回原始位置" );
	}
}
//创建一个ImgSlider实例对象
function creatImgSlider(_width, _height, _imgArray) {
	return new ImgSlider(_width, _height, _imgArray || {});
}