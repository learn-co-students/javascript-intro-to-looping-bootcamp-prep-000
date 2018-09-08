function forLoop(array) {
    for (i=0; i<25; i++) 
        if (i===1) {
		var A = "I am 1 strange loop."
        array.push(A)
        }
        else {
		var B = `I am ${i} strange loops.`
        array.push(B)
        }
	return array
}

function whileLoop(n) {
  while (n > 0) {
      console.log(--n);
    } if (n === 0) {
      return 'done';
    }
}

function doWhileLoop(array) {
  function incrementVariable() {
    var i = 0;
    i = i + 1;
  }
    do {
    array.pop(i);
    //remove elements until the array is empty or returns false
    } while (array.length > 0 && incrementVariable());
  return array;
}