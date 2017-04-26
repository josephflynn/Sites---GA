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

	var cities = ["NYC", "SF", "LA", "ATX", "SYD"]

	  for(i=0;i<cities.length;i++) {

    $('#city-type').append('<option value="' + cities[i] + '">' + cities[i] + '</option>');
  }


  $('#city-type').change(changeBackground);
  

  function changeBackground(){
  	var cityName = $('#city-type').val();
  	cityName = cityName.toLowerCase();
  	$('body').attr('class', cityName);
  }
	

	
});