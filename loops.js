//Build a function forLoop. It takes an array as an argument.
//Start counting from 0, and, using a for loop, add a string to the
//array 25 times. But not just any string. If your i value is 1, add
//the string "I am 1 strange loop."; if your i value is anything
//else, add the string "I am ${i} strange loops.". (Remember flow
//control with if and else? And how do we interpolate i?) Then return the array.

function forLoop(someArray){
	for (let i = 0; i < 25; i++){
		if (i === 1) {
			someArray.push(`I am 1 strange loop.`)
		}
		else {
			someArray.push(`I am ${i} strange loops.`)
		}
	}
	return someArray;
}

//initialize blank array
//const myArray = [];
//run console.log to test the function
//console.log(forLoop(myArray));

//TODO: Create a function called whileLoop in loops.js. The function should
//take a number as an argument. Using a while loop, count down (using
//console.log) from the passed in number to 0. Then return the string 'done'.

function whileLoop(num){
	while (num > 0){
		console.log(--num)
	}
	return ("done")
}

//run console.log to test the function
//console.log(whileLoop(8));

//structure of do-while loop
//do {
//  [loopBody];
//} while ([condition]);

//test array
//names = ["Andrew", "Anya", "Zara", "Carell"];

var i = 0;

function incrementVariable(){
	i = i + 1;
}

function doWhileLoop(myArray){
	do {
		myArray.pop();
		incrementVariable();
} while (myArray.length > 0 && incrementVariable());
}

//test the loop
//doWhileLoop(names);
