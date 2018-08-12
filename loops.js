var array = {
// initially emply
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
 
var count = 0

function whileLoop(count) {
 
  while (count > 0) {
  console.log(count)
  count = count - 1
  }
  return 'done'
}

/*
function doWhileLoop(array) {
  
  var i = 1
 
  function incrementVariable() {
    i = i + 1
  }
  
   
  do {
      delete array.i
      console.log('doo-bee-doo-bee-doo')
    } while (array.length > 0 || incrementVariable())
  
  return array
}
 */