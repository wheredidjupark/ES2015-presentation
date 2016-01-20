//In ES5, all variables had functional scope.
//What is functional scope?

//example 1:
function greeting(name){
	var x = "Hello";
	console.log(x, name);
}

greeting("John Doe");

//console.log(x); //


//ES5 did not have block-scoped variables.
//In ES6, block-scoped variables are introduced.
// let
// variables declared with 'let' keyword is not hoisted to the top of its scope
//example2: Hoisting

function greeting2(name){
	'use strict';
	if(name){
		let y= "Greeting with let";
	}
	console.log(y, name); 
	/*
	does not have access to y, 
	because the 'let' keyword binds the scope of the variable 'y' to
	nearest curly braces. 
	In other words, variable y is accessible only within the curly braces
	*/
}

greeting2("Michael");


function greeting3(name){

	if(name){
		var y = "What's up";
	}
	console.log(y, name);
}
/*
What's really happening here? Hoisting.
Variables that are declared with 'var' keyword are 'hoisted' or declared to the top of its scope
upon compilation time by JavaScript compiler.
*/

// function greeting3(name){
// 	var y;
// 	if(name){
// 		y = "What's up";	
// 	}
// 	console.log(y, name);
// }
greeting3();



