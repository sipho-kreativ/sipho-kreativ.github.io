const body = document.body,
		jsScrollmain = document.getElementsByClassName('js-scrollmain')[0],
		height  = jsScrollmain.getBoundingClientRect().height - 1,
		speed = 0.04

var offset = 0;

body.style.height = Math.floor(height) + "px";

function smoothScroll(){
	offset += (window.scrollY - offset) * speed;
	var scroll = "translateY(-"+offset+"px) translateZ(0)"
	jsScrollmain.style.transform = scroll;

	raf = requestAnimationFrame(smoothScroll);

}

smoothScroll();

