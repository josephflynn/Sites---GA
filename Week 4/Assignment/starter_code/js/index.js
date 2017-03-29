console.log("Hello world");

$(document).ready(function(){

	$(".readmore a").click(function(){
		event.preventDefault();
		$("#show-this-on-click").slideDown();
		$(".readmore").hide();
		$(".readless").show();
	});
	$(".readless a").click(function(){
		event.preventDefault();
		$("#show-this-on-click").slideUp();
		$(".readmore").show();
		$(".readless").hide();
	});
	$(".learnmore").click(function(){
		event.preventDefault();
		$("#learnmoretext").slideDown();
		$(".learnmore").hide();
	});

});