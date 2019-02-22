function forLoop(array) {
  for (let i=0; i<25; i++)
    if (i === 1) {
      array.push("I am 1 strange loop.")
    }else {
      array.push(`I am ${i} strange loops.`)
    }
    return array
}

function whileLoop(number) {
  while (number > 0) {
    console.log(--number)
  }
  return "done"
}

// function doWhileLoop(integer) {
//     var i = 0;
//
//     function incrementVariable() {
//       i = i + 1;
//       return i;
//     }
//     do {
//       console.log("I run once regardless.")
//     } while (incrementVariable() < integer)
// }
function doWhileLoop(array) {
	var i = 0;

	function incrementVariable() {
		i = i + 1;
	}

	do {
		console.log('array.length = ' + array.length + ' and i = ' + i);
		array = array.slice(1);
		incrementVariable();
	} while (array.length > 0 && i < 5);

	return array;
}
