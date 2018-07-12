function forLoop(array) {
	for (var i = 0; i < 25; i++) {
		var string1 = "I am 1 strange loop."
		var strings = "I am ${i} strange loops."
		if (i === 1) {
			array.push(string1)
		} else {
			array.push(strings)
		}
	}
	return array
}

function whileLoop(number) {
	while(number > 0){
		console.log(--number)
	}
	return 'done'	
}

function maybeTrue() {
	return Math.random() >= 0.5
}

function doWhileLoop(array) {
	do {
		array.pop()
	} while ((maybeTrue()) && (array.length > 0));
	return array
}