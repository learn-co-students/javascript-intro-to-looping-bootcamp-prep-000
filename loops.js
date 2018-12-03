// WHat is the difference between var and let?

// I was stuck because I was trying to console.log the changes to the array instead of using array.push

const array = [];

function forLoop(array) {
	for (let i = 0; i < 25; i++) {
		if (i <= 1) {
			array.push("I am " + i + " strange loop.");
		}
		else if (i > 1) {
			array.push('I am ' + i  + " strange loops.");
		}	
	}
	return array;
}

let countdown = 10;

function whileLoop(countdown) {
	while (countdown > 0) {
		console.log(--countdown);
	}
	return "done";
}

const numbers = [1, 2, 3, 4, 5]

function doWhileLoop(numbers) {
	do {
		numbers.shift();
	} while (numbers.length > 0);
	return numbers;
}
