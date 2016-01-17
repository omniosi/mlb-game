var bk = document.getElementById("bk");
var mutt = document.getElementById("mutt");
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
	},2);
	var step3 = TweenLite.to(mutt,1,{
		// x:200,
		scale: 0.5,
		ease: Power1.easeInOut
		// onComplete: step3
	},3);
}