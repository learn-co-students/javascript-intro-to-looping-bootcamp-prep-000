   
  
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
    let countdown = n;
    
    while(countdown > 0) {
      console.log(--countdown);
    }
    return "done";
  }
  function doWhileLoop(array) {
   let i = array;
   console.log(i);
    do {		
     array.splice(1);
    }
    while (i > 0 && array.length -1);
	console.log (array);
	return array;
  }
  