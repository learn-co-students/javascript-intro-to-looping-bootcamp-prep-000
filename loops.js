function forLoop(array) {
  for(let i = 0; i < 25; i++) {
    if(i === 1) {
     array.push("I am 1 strange loops.")
    }
    else {
    array.push("I am ${i} strange loops.");
    }
  }
  
  return array; 
}

function whileLoop(int) {
  while (int > 0) {
    console.log(--int)
  }
  return('done')
}


function doWhileLoop(array) {
  function maybeTrue() {
    return Math.random() >= 0.5
  }
  do {
    array.pop();
  }
  while (array.length > 0 || maybeTrue()); 
  
  return array;
}
