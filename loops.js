var array = [
  ]


function forLoop(array) {
  
  for (var i = 0; i < 25; i++) { 
    array[i] = `"I am ${i} strange loop${i === 1 ? '' : 's'}."`
  } 
  
  return array
}
 
/* 
function whileLoop(number) {
  while (number > 0) {
    console.log(--number)
  }
  
  return 'done'
}
 
  

function doWhileLoop(array) { 
  var i = 0;
 
  function incrementVariable() {
    i = i + 1;
  }
  
  do {
    array.shift()
    incrementVariable();
  } while (array.length > 0 &&  incrementVariable())
  
  return array
}
 */
