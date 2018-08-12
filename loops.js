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
  
  var i = 1
 
  function incrementVariable() {
    i = i + 1;
  }
  
   
  if (array.length > 0) {
  
    do {
      delete array.i
      console.log('doo-bee-doo-bee-doo')
      incrementVariable();
    } while (array.length > 0 && incrementVariable());
  }
  
  return array
}
