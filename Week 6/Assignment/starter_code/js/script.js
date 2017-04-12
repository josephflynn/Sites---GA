//PSUDOCODE -
//Wait for the html and css to load in the document before using JS.
//Test that JS file is working by logging 'Hello World' to the console.
//Create a variable Array for the following values: "NYC", "SF", "LA", "ATX", "SYD"
//log the array to the console to test that it is working.
//create a forEach loop function for the "city" array (e, index, arr)
//that will list the elements in the array in the selector id="city-type"
//console.log the index number of the array along with it's corresponding element to check it's working
//add each element from the array to the end of the <option> element in the html inside <option></option> to create a new selection in the list.
//



$(document).ready(function(){

	console.log("Hello World");

	var city = ["NYC", "SF", "LA", "ATX", "SYD"]
	console.log(city)

	city.forEach(function(e, index, arr){
		console.log(index + ": " + e);

		$('form').change(function(){switch(city){
		case "new york city" :
		case "NYC" :
		case "new york" :
			$('body').attr('class','nyc');
			break;

		case "SF" :
		case "san francisco" :
		case "bay area" :
			$("body").attr("class","sf");
			break;

		case "austin" :
		case "ATX" :
			$("body").attr("class","austin");
			break;

		case "los angeles" :
		case "LA" :
		case "lax" :
			$("body").attr("class","la");
			break;
		case "sydney" :
		case "SYD" :
			$("body").attr("class","sydney");
			break;
	};
	});

		$('#city-type').append('<option value ="' + e + '">' + e + '</option>')

		$( '#city-type' ).val(e);
		

		$('body').change(function(){

		});


	});

	
});