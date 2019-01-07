function forLoop(array) {
  for (var i = 0; i < 25; ++i) {
    if (i === 1) {
      array.push(`I am 1 strange loop.`);
    }
      else {
        array.push(`I am ${i} strange loops.`);
      }
   
  }
  return array;
}

function whileLoop(countdown) {
  while (countdown > 0) {
    console.log(--countdown);
  }
  if (countdown === 0) {
    return (`done`)
  }
}

function doWhileLoop(array) {
  
  var i = array.length;
  
  function incrementVariable() {
    i = i + 1;
  }
  
  function maybeTrue() {
    return Math.random() >= 0.5;
  }
  
  do {
    // remove element until array is empty
    array.pop();
  } while (incrementVariable());
  
  return array;
}