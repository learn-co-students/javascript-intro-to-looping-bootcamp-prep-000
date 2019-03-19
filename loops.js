function forLoop(array) {
	for (var i = 0; i < 25; i++) {
		if (i === 1) {
			array.push("I am 1 strange loop.");
		} else {
			array.push(`I am ${i} strange loops.`);
		}
	}
	return array
}

function whileLoop (number) {
  while ( number > 0) {
    console.log(number);
    number --
  }
  return "done"
}

function doWhileLoop (i) {
  do {
    console.log("I run once regardless.");
      i --;
  } while (i > 0 && i < 10);
  return i;
}
