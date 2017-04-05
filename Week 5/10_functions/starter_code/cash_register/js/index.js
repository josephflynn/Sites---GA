//when document is ready...
//define var #total;
//when form is submitted...
	
	//Get the value of the input #newEntry
	//      Convert it to a number with only 2 decimal places
	//create a new <li> in #entries 
	//         which equals the value of the form + "$"
	// Add the new entry calue to the total
	//Clear the value in #newEntry

$(document).ready(start);

function start(){
	var total = 0;
	console.log(total);

	$("#entry").submit(processData)


	function processData(){

		var entry = $('#newEntry').val();
		var entryNumber = Number(entry);

		var processedNumber = entryNumber.toFixed(2);

		$('#entries').append('<li>$' + processedNumber + '</li>');

		total += entryNumber;

		console.log(total);

		$('#total').html('$' + total.toFixed(2));

		$('#newEntry').val('good boy');

		return false;
	}

}