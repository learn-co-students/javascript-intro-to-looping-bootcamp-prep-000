let myArray = []

function forLoop(myArray){
	for (let i = 0; i < 25; i++){
		if (i == 1){
			myArray.push("I am 1 strange loop");
		} else {
			myArray.push(`I am ${i} strange loops`);
		}
  }
	return myArray;
};

forLoop(myArray);

function whileLoop(number){
	while(number > 0){
		console.log(number);
		number--;
	}
	return ("done");
};

whileLoop(20);

var scArray = ["onur", "yonur"]

function maybeTrue() {
    return Math.random() >= 0.5
}

function doWhileLoop(array) {
  do {
		array.pop()
} while (array.length > 0 && maybeTrue())
  return array
};

doWhileLoop(scArray);
