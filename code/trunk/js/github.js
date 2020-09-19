$(function() {
	
	var magnifierConfig = {
		magnifier : "#magnifier1",//最外层的大容器
		width : 342,//承载容器宽
		height : 350,//承载容器高
		moveWidth : null,//如果设置了移动盒子的宽度，则不计算缩放比例
		zoom : 5//缩放比例
	};

	var _magnifier = magnifier(magnifierConfig);

	/*magnifier的内置函数调用*/
	/*
		//设置magnifier函数的index属性
		_magnifier.setIndex(1);

		//重新载入主图,根据magnifier函数的index属性
		_magnifier.eqImg();
    */
    // ----------banner 种类选择点击事件
$("#githubbanner .bottom .detail .kind div").click(function(){
    $(this).css("border","2px solid #ff6600").siblings().css("border","none")
    $(this).find("img").css("display","block").siblings().css("display","none")
    $(this).siblings().find("img").css("display","none")
})


});