var array = [
  ]


function forLoop(array) {
  
  for (var i = 0; i < 25; i++) { 
 //   array[i] = `"I am ${i} strange loop${i === 1 ? '' : 's'}."`
    if (i === 1) {
 //     array.push("I am 1 strange loop.")
      array.push(`"I am ${i} strange loop${i === 1 ? '' : 's'}."`)
    } else {
 //     array.push(`"I am ${i} strange loops.")
 array[i] = `"I am ${i} strange loop${i === 0 ? 's' : ''}."`
    }
  } 
  
  return array
}
 

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
