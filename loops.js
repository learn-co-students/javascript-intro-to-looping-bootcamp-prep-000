//forLoop. It takes an array as an argument. Start counting from 0, and, using a for loop, add a string to the array 25 times. But not just any string. If your i value is 1, add the string "I am 1 strange loop."; if your i value is anything else, add the string "I am ${i} strange loops.". (Remember flow control with if and else? And how do we interpolate i?) Then return the array.


function forLoop (array) { 
  for (var i = 0; i < 25; i++) { 
    if (i === 1) { array.push('I am 1 strange loop.');
    } else {
      array.push(`I am ${i} strange loops.`);
    };
    };
    return array;
}


//whileLoop w/ number as argument using console.log then return string 'done'. 

function whileLoop(startHere) {
  while(startHere > 0) {
    console.log(--startHere);
  }
  return 'done';
  
}


// define function doWhileLoop use the maybeTrue() as the dondition and remove elements from teh array until the array is empty or until maybeTrue() returns false.

function maybeTrue() {
  return Math.random() >= 0.5;
}

function doWhileLoop(array) {
  do { array.pop();  
} while (array.length > 0 && maybeTrue());
return array;
}