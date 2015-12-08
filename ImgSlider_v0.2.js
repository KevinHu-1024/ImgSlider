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
	this.totalWidth = this.width*this.imgArray.length; 
	this.step = (this.width/this.totalWidth)*100;
	this.a = 0;
	this.index = 1;

	var ul = document.getElementById('imgSlider-container').getElementsByTagName('ul')[0];
    console.log(ul);
	ul.style.width = this.totalWidth + "px";
	ul.style.height = this.totalHeight + "px";
	ul.style.display = "block";
	ul.style.webkitTransition = "0.5s";
	ul.style.webkitTransform = "translate(0,0)";

	var li = document.getElementById('imgSlider-container').getElementsByTagName('li');
	console.log(li.length);
	var i;
	for (i=0; i<=(this.imgArray.length-1); i++) {
		li[i].style.height = this.totalHeight + "px";
		li[i].style.width = this.width + "px";
		li[i].style.float = "left";
		li[i].style.display = "inline";
		li[i].style.listStyleType = "none";
		li[i].getElementsByTagName("img")[0].style.textAlign = "center";
	}
}
//轮播函数
ImgSlider.prototype.start = function(_direction) {
	this.direction = _direction;
	var crr;
	var nxt;
	this.crr = document.getElementById('pageControl-bottom').getElementsByTagName('div')[this.index-1];
	if (this.direction == "left") {
		this.a = this.a+this.step;
		this.index++;
	} else if (this.direction == "right") {
		this.a = this.a-this.step;
		this.index--;
	}
	var ul = document.getElementById('imgSlider-container').getElementsByTagName('ul')[0];
	if (this.index<(this.imgArray.length+1)&&this.index>1) {
		ul.style.webkitTransform = "translate(-" + this.a + "%,0)";
		this.nxt = document.getElementById('pageControl-bottom').getElementsByTagName('div')[this.index-1];
	} else if (this.index<1) {
		ul.style.webkitTransform = "translate(-" + (this.step*(this.imgArray.length-1)) + "%,0)";
		this.a = this.step*(this.imgArray.length-1);
		this.index = this.imgArray.length;
		this.nxt = document.getElementById('pageControl-bottom').getElementsByTagName('div')[this.index-1];
	} else {
		ul.style.webkitTransform = "translate(0,0)";
		this.index = 1;
		this.a = 0;
		this.nxt = document.getElementById('pageControl-bottom').getElementsByTagName('div')[this.index-1];
	}
	this.crr.classList.remove("pageControl-items-current");
	this.nxt.classList.add("pageControl-items-current");
	this.crr = this.nxt;
}
//创建一个ImgSlider实例对象
function creatImgSlider(_width, _height, _imgArray) {
	return new ImgSlider(_width, _height, _imgArray || {});
}