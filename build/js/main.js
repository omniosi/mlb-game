// animayion with TweenLite
var bk = document.getElementById("bk");
var odc = document.getElementById("mutt");
var odc = document.getElementById("odc");
var text = document.getElementsByTagName("h1")[0];
var plus = document.getElementById("plus");

window.onload = function(){
	var tween = TweenLite.to(bk, 1, {
		opacity:1,
		ease: Power1.easeInOut,
		onComplete: step2
	});
	var step2 = TweenLite.to(mutt,1,{
		opacity:1,
		ease: Power1.easeInOut,
		delay:2,
		onComplete: step3
	});
	var step3 = TweenLite.to(odc,1,{
		opacity:1,
		ease: Power1.easeInOut,
		delay:3,
		onComplete: step4
	});
	var step4 = TweenLite.to(plus,1,{
		opacity:1,
		ease: Power1.easeInOut,
		delay:4,
		onComplete: step5
	});
	var step5 = TweenLite.to(text,1,{
		opacity:1,
		ease: Power1.easeInOut,
		delay:5
	});
}