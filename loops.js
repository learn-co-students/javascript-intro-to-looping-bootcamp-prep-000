function forLoop(array) { // Build forLoop function takes array as argument
	for (var i = 0; i < 25; i++) { //using for loop add string to the array 25 times.
		if (i === 1) { // if i value is 1
			array.push('I am 1 strange loop.'); //add the string "I am 1 strange loop.""
		} else { //if i is anything else
			array.push(`I am ${i} strange loops.`); //add this line <-----
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

function doWhileLoop(num) {
	var i = 0;

	function addOne() {
		i = i + 1;
    return i;
	}

  do {
    console.log("I run once regardless.");
  } while (addOne() < num);
}
