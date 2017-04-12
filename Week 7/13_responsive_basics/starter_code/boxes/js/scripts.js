
$(document).ready(function(){

	console.log("Hello World");

	$(".hide").click(function(){
		$(".menu").toggle();
		var x = $("#left");
		if (x.style.justify-content === 'flex-start'){
			x.style.flex-direction === 'column';
		}
	});


});