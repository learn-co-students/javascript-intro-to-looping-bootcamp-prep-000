var array = {
  // inially empty
}

function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    /*
    array[i] = `"I am ${i} strange loop${i === 0 ? '' : 's'}."`
     */
    if (i === 1) {
      array[i] = "I am 1 strange loop."
    } else {
      array[i] = `"I am ${i} strange loops."`
    }
    
  }
  return array
}

function whileLoop(n) {
  let countdown = 10;
 
  while (countdown > 0) {
  console.log(--countdown)
  }
  return 'done'
}

function doWhileLoop(array) {
  /*
  var i = array.length - 1;
 
  function decrementVariable() {
    i = i - 1;
  }
   */
   
  if (array.length > 0) {
  
    do {
      delete array[0]
      console.log('doo-bee-doo-bee-doo')
      // decrementVariable();
    } while (array.length > 0)
    // && decrementVariable());
  }
  
  return array
}
