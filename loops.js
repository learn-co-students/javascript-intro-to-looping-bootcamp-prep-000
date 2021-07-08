function forLoop(array) {
  for(let i = 0; i < 25; i++) {
    if(i === 1) {
      // console.log('Hello');
      array.push("I am 1 strange loop.");
      // array[i] = "I am 1 strange loop.";
    } else {
      // console.log('good bye');
      array.push(`I am ${i} strange loops.`);
      // array[i] = `I am ${i} strange loops.`;
    }
    
  }
    return array;
}

function whileLoop(number) {
  while(number != 0) {
    console.log(number);
    number -= 1;
  }
  return 'done';
}

function maybeTrue() {
  return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
}

function doWhileLoop(array) {
  do {
    array.pop();
  } while (array.length > 0 && maybeTrue());
  return array;
  
}