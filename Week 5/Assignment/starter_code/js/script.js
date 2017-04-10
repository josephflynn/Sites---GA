//PSUDOCODE -
//Wait for the html and css to load in the document before using JS.
//Test that JS file is working by logging 'Hello World' to the console.
//Prevent the Submit button from refreshing the page.
//Get the string that the user types into the "input" id="city-type" and correct 
//		capitalisation as well as remove extra spaces before or after the input
//reset the user "input" field after it is submitted
//If a user submits:
//❍ "New York" or "New York City" or "NYC" make the background of the page nyc.jpg
//❍ "San Francisco" or "SF" or "Bay Area" make the background of the page sf.jpg
//❍ "Los Angeles" or "LA" or "LAX" make the background of the page la.jpg
//❍ "Austin" or "ATX" make the background of the page austin.jpg
//❍ "Sydney" or "SYD" make the background of the page sydney.jpg



$(document).ready(function(){

	console.log("Hello World");

	$("#submit-btn").click(function(){
	    event.preventDefault()

	var city = $("#city-type").val();
	$("#city-type").val("");
	city = city.toLowerCase().trim();

//		if(city == "new york city" || city == "nyc" || city == "new york") 
//		{
//		  $('body').attr('class','nyc');
//		}
//		else if (city == "sf" || city == "san francisco" || city == "bay area") 
//		{
//		  $("body").attr("class","sf");
//		}
//		else if (city == "austin" || city == "atx") 
//		{
//		  $("body").attr("class","austin");
//		}
//		else if (city == "los angeles" || city == "la" || city == "lax") 
//		{
//		  $("body").attr("class","la");
//		}
//		else if (city == "sydney" || city == "syd") 
//		{
//		  $("body").attr("class","sydney");
//		};

//I tried it another way as well.... (both work fine :-) 

	switch(city){
		case "new york city" :
		case "nyc" :
		case "new york" :
			$('body').attr('class','nyc');
			break;

		case "sf" :
		case "san francisco" :
		case "bay area" :
			$("body").attr("class","sf");
			break;

		case "austin" :
		case "atx" :
			$("body").attr("class","austin");
			break;

		case "los angelese" :
		case "la" :
		case "lax" :
			$("body").attr("class","la");
			break;
		case "sydney" :
		case "syd" :
			$("body").attr("class","sydney");
			break;
	}
	});
	
});