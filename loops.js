var array = []

function forLoop(array) {
  
  for (var i = 0; i < 25; i++) { 
    if (i === 1) {
      array[i] = "I am 1 strange loop."
    } else {
      array[i] = `"I am ${1} strange loop${i === 0 ? 's' : ''}."`
    }
  }
   
    return array
}
 
/*
function forLoop(array) {
  for (let i = 0; i < 25; i++) {
//    array[i] = `"I am ${i} strange loop${i === 0 ? '' : 's'}."`
    if (i === 1) {
      array[i] = "I am 1 strange loop."
    } else {
      array[i] = `"I am ${i} strange loops."`
    }
    
  }
  return array
}
 */
 
/* passed 
function whileLoop(number) {
  while (number > 0) {
    console.log(--number)
  }
  
  return 'done'
}
 */
  
/*
function doWhileLoop(array) { 
  var i = 0;
 
  function incrementVariable() {
    i = i + 1;
  }
  
  do {
    delete array[i]
    console.log('doo-bee-doo-bee-doo')
    incrementVariable();
  } while (array.length > 0 &&  incrementVariable())
  
  return array
}
 */
 