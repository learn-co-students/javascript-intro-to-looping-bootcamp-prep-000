//Test 1: For Loop to Create Array 25 in Length

function forLoop(array) {
  for(i=0; i<25; i++) {
    if(i===0) {
      array.push("I am a strange loop.");
      console.log(array[i-1]);
    }else if(i===1) {
      array.push("I am 1 strange loop.");
      console.log(array[i-1]);
    }else {
      array.push("I am " + i + " strange loops.");
      console.log(array[i-1]);
    }
  }return array;
}

//Test 2: While Loops That Counts Down to Zero

function whileLoop(n) {
  while(n>0) {
    n -= 1;
    console.log(n);
  }return "done";
}

//Test 3: Do While Loop Empties Array

function maybeTrue() {
  return Math.random() >= 0.5;
}

function doWhileLoop(array) {
  do {
   array.pop();
  } while (array.length > 0 && maybeTrue());
  return array;
}