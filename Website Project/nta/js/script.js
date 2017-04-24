$(document).ready(function(){

	console.log("Hello World");

	$(".hamburger").click(function(){
		$("button").toggleClass("is-active");
		$(".leftBar").toggleClass("click");
		$(".menuList").toggleClass("unhide");
		$(".facebook, .twitter, .paypal, .bitcoin").toggleClass("unhide1");
	});


	$('.my-slider').unslider();

});