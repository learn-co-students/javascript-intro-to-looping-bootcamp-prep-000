// Experiment with 'for' loop

function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
    array.push("I am 1 strange loop.");
    } else {
    array.push(`I am ${i} strange loops.`);
    }
  }
  return array;
}

// Experiment with 'while' loop

function whileLoop(number) {
  while (number > 0) {
    console.log(--number);
  }
  return "done";
}

// Experiment with 'do-while' loop

function doWhileLoop(num) {
  var i = 0;
  function incrementVariable() {
  i = i + 1;
  return i;
  }
  do { 
    console.log("I run once regardless.");
  } while (incrementVariable() < num);
}

