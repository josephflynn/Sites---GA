//Get a list of animals
//Put the in an array
//For each animal in the array, 
//     make a new option and put it in the select element

//get a list of animals then populate the select box with the anmals names

$(document).ready(function(){

		console.log("Animals Love Joe");

	var animals = ["Cat", "Squirrel", "Horse", "Frog", "Bat", "Dragon"]

		console.log(animals)

	animals.forEach(function(e, index, arr){
		console.log(index + ": " + e);

		$(".mainSelect").append('<option value ="' + e + '">' + e + '</option>')
	});

});

