// @todo describe what this funcgtion does
function forLoop(originalArray) {

  for(var i = 0; i < 25; i++) {
    // check if i is equal to 1
    if(i === 1) {
       originalArray.push("I am 1 strange loop.") 
    } else {
       originalArray.push(`I am ${i} strange loops.`)
    }
  }
  return originalArray
}

function whileLoop(n) {
  while (n > 0) {
    console.log(--n)
  }
  return "done"
}

 

function doWhileLoop(array)  {
  var i = 0;

  function incrementVariable() {
    i = i + 1;
  }
  
  do {
   array.pop()
  } while (array.length > 0 && incrementVariable())
  return array
}