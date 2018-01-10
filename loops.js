function forLoop(forlooparray){
  for (let i = 0; i<25; i++) {
      if (i === 1) {
        forlooparray.push("I am 1 strange loop.");
      }
      else {
        forlooparray.push(`I am ${i} strange loops.`);
      }
  }
  return forlooparray
}

function whileLoop (counter) {
  while (counter > 0) {
    console.log(counter);
    counter = counter-1;
  }
  return("done");
}

function maybeTrue() {
  return Math.random() >= 0.5;
}

function doWhileLoop (array) {
  do {
    array.shift()
    console.log(array)
  }   while (maybeTrue() && array.length > 0);
  return array
}
