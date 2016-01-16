// var bk = document.getElementsByClassName("bk")[0];
var bk = document.getElementById("bk");
// var mutt = document.getElementsByClassName("mutt")[0];
// var odc = document.getElementsByClassName("odc")[0];
// var text = document.getElementsByTagName("h1")[0];

window.onloud = function(){
// start TweenLite JS here
var tween = TweenLite.to(bk, 1, {
// TweenLite.to("bk", 1, {
	opacity:1,
	ease: Power1.easeInOut
	// onComplete: step2
}, 1);
var step2 = TweenLite.to(bk,1,{
	// x:200,
	// scale: 0.5,
	// ease: Power1.easeInOut,
	// onComplete: step3
},3);
// tween.play();
}