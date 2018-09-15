var numbers = 100

for (var i = 1; i < numbers.size; i ++) {
  console.log("Hello world:" + i + "time");
}

// or 
for (var i = 1; i < 20; i++){
  console.log("Hello world:" + i + "time")
}
//
for (i = 0 ; i < gifts.length; i ++) {
  console.log(gifts[i])
}

//
for (let i = 0; i < 25;  i++) {
  if(i) {
     `I am ${i} strange loop.`
  }
  else if ( i === isNaN) {
    `I am ${i} strange loops.`
  }
}

// LAB
function forLoop(array) {
	for ( i = 0; i < 25; i++) {
		if (i === 1) {
			array.push(`I am ${i} strange loop.`);
		} else {
			array.push(`I am ${i} strange loops.`);
		}
	}

	return array;
}


//    ********* Todo: Create a function called whileLoop  **********
var fixum = 10

function whileLoop(fixum) {
	while ( 0 < fixum) {
		console.log(--fixum);
	}
	return 'done';
}

// Todo: Define a function called doWhileLoop in loops.js. The function should take an array as an argument. Use the incrementVariable() function (you can copy it from this README) as the condition, and remove elements from the array until the array is empty or until incrementVariable() returns false. (Your condition might look something like array.length > 0 && incrementVariable().) Finally, return the array.

function doWhileLoop(array) {
var i = 0;

	function incrementVariable() {
	 i = i + 1;
	}
//
	do {
		console.log('array.length = ' + array.length + ' and i = ' + i);
		array = array.slice(1);
		incrementVariable(); //Ask about get this calling !!
	}

	while (array.length > 0 && i < 5);

	return array;
}
// forEach(i in gifts) ...