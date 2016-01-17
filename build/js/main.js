var bk = document.getElementById("bk");
var odc = document.getElementById("mutt");
var odc = document.getElementById("odc");
var text = document.getElementsByTagName("h1")[0];

window.onload = function(){
	var tween = TweenLite.to(bk, 1, {
		opacity:1,
		ease: Power1.easeInOut,
		onComplete: step2
	}, 1);
	var step2 = TweenLite.to(mutt,1,{
		opacity:1,
		ease: Power1.easeInOut,
		onComplete: step3
	});
	var step3 = TweenLite.to(mutt,1,{
		y:-150,
		scale: 0.5,
		ease: Power1.easeInOut,
		onComplete: step4
	});
	var step4 = TweenLite.to(odc,1,{
		opacity:1,
		ease: Power1.easeInOut,
		onComplete: step5
	});
	var step5 = TweenLite.to(odc,1,{
		y:80,
		scale: 0.5,
		ease: Power1.easeInOut
		// onComplete: step3
	});
}