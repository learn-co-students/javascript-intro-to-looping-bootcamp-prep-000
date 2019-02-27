function forLoop(arr) {
  for(var i=0; i<25; i++) {
    arr = i === 1 
      ? [...arr, `I am ${i} strange loop.`] 
      : [...arr, `I am ${i} strange loops.`] 
  }
  return arr
}

function whileLoop(number) {
  while(number > 0) {
    console.log(number--);
  }
  return 'done'
}

function doWhileLoop(number) {
  i = 0
  
  function incrementVariable() {
    i = i + 1;
    return i;
  }
  
  do {
    console.log('I run once regardless.')
  } while(incrementVariable() < number)
  
}