

$(document).ready(function(){

	$('#grayButton').click(function(){
		$(clear)
		$('body').addClass('gray');
		console.log("GRAY")
		
	});
	$('#whiteButton').click(function(){
		$(clear)
		$('body').addClass('white');
		console.log("WHITE")
	});
	$('#blueButton').click(function(){
		$(clear)
		$('body').addClass('blue');
		console.log("BLUE")
	});
	$('#yellowButton').click(function(){
		$(clear)
		$('body').addClass('yellow');
		console.log("YELLOW")
	});
	function clear(){
		$('body').attr('class', 'important-shit', '')
	}
	

});

