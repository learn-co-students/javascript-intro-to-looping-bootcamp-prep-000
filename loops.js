var array = [ 
// initially emply
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10
  ]

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
  
  var i = 1
 
  function incrementVariable() {
    i = i + 1
  }
  
   
  do { 
//      delete array.i
    console.log('doo-bee-doo-bee-doo')
    incrementVariable()
  } while (i < 5)
//    } while (array.length > 0 &&  incrementVariable())
  
  return array
}
 */
 
 /*
 TODO: Define a function called doWhileLoop in loops.js. The function should take an array as an argument. Use the incrementVariable() function (you can copy it from this README) as the condition, and remove elements from the array until the array is empty or until incrementVariable() returns false. (Your condition might look something like array.length > 0 && incrementVariable().) Finally, return the array.
  */
  
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