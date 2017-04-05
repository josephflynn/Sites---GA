/**


Pseudo code
Input for Celcius temperature - C - is defined as a number
Convert button is clicked 
C number is converted to F with the formula of F = (C *9/5) + 32
C input is changed to the result of F calculation 
Background color of body changes to reflect temperature range in fahrenheit:
Hot: 75F or higher     red
Warm: between 60 - 74.99999  orange
Mild: between 50 - 59.99999   pink 
Cold: between 32.00001 - 49.99999   cyan
Freezing: 32 or less   blue


*/
$(document).ready(function(){

	$("button").click(function() {
  	  var c = $("#celcius").val();
	  var cNum = Number(c);
	  var convert = (c * 9/5) + 32;
	
		$(".fahrenheit").html(convert);

		var f = $(".fahrenheit").html();
		console.log(f);
		var fNum = Number(f);

		if(fNum > 75){
			console.log(fNum);
			$("body").css("background-color", "red");
		}
		else if(fNum > 60 && fNum < 74.99999){
			$("body").css("background-color", "orange");
		}
		else(fNum > 50 && fNum < 59.99999){
			$("body").css("background-color", "pink");
		}
		
	});

		

	

	
});