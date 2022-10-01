document.getElementById("nav-container").style.display = "none"
window.console = window.console || function(t) {};
if (document.location.search.match(/type=embed/gi)) {
	window.parent.postMessage("resize", "*");
}
$(window).on("load", function() {
	$(".loader-wrapper").fadeOut("slow");
	setTimeout(() => {
		$('body').css({
			overflow: 'auto'
		});
		document.getElementById("nav-container").style.display = "inherit"
	}, 250);
});
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
	var currentScrollPos = window.pageYOffset;
	if (prevScrollpos > currentScrollPos) {
		document.getElementById("navbar").style.top = "0";
		document.getElementById("navbar").style.position = "fixed"
	} else {
		document.getElementById("navbar").style.top = "-50px";
		document.getElementById("navbar").style.position = "none"
	}
	prevScrollpos = currentScrollPos;
}
window.onscroll = function() {
	myFunction()
};
var navbar = document.querySelector("#navbar");
var sticky = navbar.offsetTop;

function myFunction() {
	if (window.pageYOffset >= sticky) {
		navbar.classList.add("sticky");
		navbar.style.backgroundColor = "RGBA(0,0,0,0.3)";
	} else {
		navbar.classList.remove("sticky");
		navbar.style.backgroundColor = "RGBA(0,0,0,0.0)";
	}
}