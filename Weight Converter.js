// Hide cards
document.query selector('#output').style.display="none";
document.query selector('#output').style.visibility="hidden";



document.query selector('inputValue').addEventListener('input',convert);

function convert(){
// test if function is called
	// console.log("function is called")

// get user input value
// let input = document.querySelector('#inputValue').value
let input = e.target.value;
// console.log(input);

// pound to grams
document.querySelector('#gram').innerHTML = inpu * 453.592

// pound to grams
document.querySelector('#kg').innerHTML = inpu * 453.592 / 1000;

// pound to ounces
document.querySelector('#oz').innerHTML = inpu * 453.592 / 1000;





document.query selector('#output').style.display="block";
document.query selector('#output').style.visibility="hidden";
}