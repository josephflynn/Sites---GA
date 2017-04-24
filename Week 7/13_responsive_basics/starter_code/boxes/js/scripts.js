
$(document).ready(function(){

	console.log("Hello World");

	$(".hide").click(function(){
		$(".menu").toggle();
		var x = $(".menu");
		if (".menu".style.flex-direction === 'row';){
			".menu".style.flex-direction === 'column';
			".menu".style.display === 'block';
		};
		else (".menu".style.flex-direction === 'column'){
			".menu".style.flex-direction === 'row';
			".menu".style.display === 'none';
		};
	});


});