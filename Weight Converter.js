// // Hide cards
// document.query selector('#output').style.display="none";
// document.query selector('#output').style.visibility="hidden";


// catch user input
document.querySelector('#inputValue').addEventListener('input', convert);

// CATCH USER UNIT SELECTION
document.querySelector('#unit').addEventListener('input', convert);


	function convert(e){
	// // test if function is called
	// console.log("java is recieving user input")


	// // // get user input value
	// // let input = document.querySelector('#inputValue').value
	// let input = e.target.value;
	// // console.log(input);


	let input = e.target.value;

	// // GET USER UNIT SELECTION
	let unit = document.querySelector('#unit').value
	console.log(unit);



	// CHECK THE UNIT
	switch(unit){
	case 'Pounds':



	

	case 'Grams':

	case 'Kilograms':

	case 'Ounces':

	case 'Farenheit':
	case 'Celsius':

	case 'Meters':
	case 'Miles':
	case 'Inches':
	
	document.querySelector('#output').innerHTML =
			 		// <!-- Pounds -->
			 		'<div class="card bg-info">' +
					'<div class="card-header">' +
					'<h4>Pounds</h4>' +
					'<div>' + input * 453.592 + 
					'</div>' + '</div>' + '</div>' + 				
					'<br>' +

			 		// <!-- gram -->
			 		'<div class="card bg-info">' +
					'<div class="card-header">' +
					'<h4>Grams</h4>' +
					'<div>' + input * 453.592 + 
					'</div>' + '</div>' + '</div>' + 				
					'<br>' +

					// <!-- KILO -->		
					'<div class="card bg-primary">' +
					'<div class="card-header">' +
					'<h4>Kilograms</h4>' +
					'<div>' + input * 453.592 / 1000; + 
					'</div>' + '</div>' + '</div>' + 				
					'<br>' +

					// <!-- OUNCE -->	
					'<div class="card" style="background-color: blue">' +
					'<div class="card-header">' +
					'<h1>Ounces</h1>' +
					'<div>' + input * 453.592 / 1000; + 
					'</div>' + '</div>' + '</div>' + 				
					'<br>'}}
				









	// // // pound to grams
	// document.querySelector('#gram').innerHTML = input * 453.592;

	// // // pound to grams
	// document.querySelector('#kilo').innerHTML = input * 453.592 / 1000;

	// // // pound to ounces
	// document.querySelector('#oz').innerHTML = input * 453.592 / 1000;
	// // document.query selector('#output').style.display="block";
	// // document.query selector('#output').style.visibility="hidden";










	// function convert