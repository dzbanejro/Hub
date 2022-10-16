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
		document.getElementById("nav-container").style.display = "initial"
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
var navbarmenu = document.querySelector(".menu__box");
var sticky = navbar.offsetTop;

function myFunction() {
	if (window.pageYOffset >= sticky) {
		navbar.classList.add("sticky");
		navbarmenu.classList.remove("dd")
		navbarmenu.classList.add("sticky-menu-box")
	} else {
		navbar.classList.remove("sticky");
		navbarmenu.classList.remove("sticky-menu-box")
		navbarmenu.classList.add("dd")
	}
}

