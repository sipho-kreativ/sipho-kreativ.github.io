const body = document.body,
		jsScroll = document.getElementsByClassName('js-scroll')[0],
		height  = jsScroll.getBoundingClientRect().height - 1,
		speed = 0.04

var offset = 0;

body.style.height = Math.floor(height) + "px";

function smoothScroll(){
	offset += (window.scrollY - offset) * speed;
	var scroll = "translateY(-"+offset+"px) translateZ(0)"
	jsScroll.style.transform = scroll;

	raf = requestAnimationFrame(smoothScroll);

}

smoothScroll();

