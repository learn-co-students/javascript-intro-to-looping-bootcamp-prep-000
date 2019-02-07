function forLoop(array) {
  for (let i = 0; i < 25; i++) {
  if(i === 1) {
  array.push(`I am ${i} strange loop.`);
  } else {
  array.push(`I am ${i} strange loops.`);
  }
}
 return array;
}

function whileLoop(num) {
	while (num > 0) {
	console.log(num)
	num--;
	}
	return "done";
}

function doWhileLoop (integer) {
  function incrementVariable() {
    integer -= 1;
  }

do { 
  console.log("I run once regardless")
  incrementVariable()
} while (integer > 0)
}
