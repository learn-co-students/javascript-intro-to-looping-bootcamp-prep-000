function forLoop(array) {
	for (let i = 0; i < 25; i++) {
		if (i === 1) {
			array.push('I am 1 strange loop.');
		} else {
			array.push(`I am ${i} strange loops.`);
		}
	}


	return array;
}

function whileLoop(n) {
	while (n > 0) {
		console.log(--n);
	}

	return 'done';
}

// OBJECTIVE: DO-WHILE LOOP THAT REMOVES AN ELEMENT FROM THE ARRAY UNTIL WHILE IS COMPLETED

// setting the DoWhileLoop function that takes an array as an argument
function doWhileLoop(array) {
  	var i = 0; // sets variable i equal to zero as a start ?

// function that adds '1' to the 'i' variable each time it's ran
function incrementVariable() {
  		i = i + 1;
  	}

	do { // will run following body AT LEAST once.

		// console.log('array.length = ' + array.length + ' and i = ' + i); // WHAT THE HECK DOES THIS MEAN
    // console.log("DID THIS WORK?!"); // update: I actually don't even need the console.log part
		array = array.slice(1); // removes the first element in an array
		incrementVariable(); // function that adds '1' to the 'i' variable each time it's ran (function set above)
	} while (array.length > 0 && i < 5); // while the length of the array is greater than zero AND less than 5

	return array;
}


// PERSONAL NOTES: This Lab is solved! Turns out that the console.log part of the code was for debugging purposes
// like Ian Valentine told me! After some trial and error or erasing/adding/editing code, it at least works! Haha!
