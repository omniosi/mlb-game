// animayion with TweenLite
var bk = document.getElementById("bk");
var odc = document.getElementById("mutt");
var odc = document.getElementById("odc");
var text = document.getElementsByTagName("h1")[0];

window.onload = function(){
	var tween = TweenLite.to(bk, 1, {
		opacity:1,
		ease: Power1.easeInOut,
		onComplete: step2
	});
	var step2 = TweenLite.to(mutt,1,{
		opacity:1,
		ease: Power1.easeInOut,
		delay:1,
		onComplete: step3
	});
	var step3 = TweenLite.to(mutt,0.5,{
		x:-182,
		y:-30,
		scale: 0.5,
		ease: Power1.easeInOut,
		delay:2,
		onComplete: step4
	});
	var step4 = TweenLite.to(odc,1,{
		opacity:1,
		ease: Power1.easeInOut,
		delay:2,
		onComplete: step5
	});
	var step5 = TweenLite.to(odc,0.5,{
		x:-75,
		y:60,
		scale: 0.5,
		ease: Power1.easeInOut,
		delay:3,
		onComplete: step6
	});
	var step6 = TweenLite.to(text,1,{
		opacity:1,
		ease: Power1.easeInOut,
		delay:4
	});
}