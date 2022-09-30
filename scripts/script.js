window.console = window.console || function(t) {};
if (document.location.search.match(/type=embed/gi)) {
	window.parent.postMessage("resize", "*");
}

$(window).on("load", function() {
	$('html').css({
		overflow: 'auto'
	});
	$(".loader-wrapper").fadeOut("slow");
});