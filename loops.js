// Use a for loop when you know how many times you want the loop to run (for example, when you have an array of known size).

var array = [];

function forLoop(arr) {
  //add string to array 25 times
  for(let i = 0; i < 25; i++) {
    //if i value is 1, add 'I am 1 strange loop'
    if(i === 1){
      arr.push(`I am 1 strange loop.`);
    } 
    //otherwise, add 'I am ${i} strange loops'
    else {
      arr.push(`I am ${i} strange loops.`);
    }
  }
  //return array
  return arr;
}

// A while loop is best used when we don't know how many times a loop needs to run - that is, the condition is dependent on a dynamic function/return value.

function whileLoop(num) {
  //while num is > 0
  while (num > 0) {
    //console.log value of num
    console.log(num);
    //decrement num by 1 with each pass of loop
    num--;
  }
  //when num is less than zero, return 'done'
  return "done";
}

//The do-while loop is almost exactly the same as the while loop, except for the fact that the loop's body is executed at least once before the condition is tested.

function maybeTrue() {
  return Math.random() >= 0.5
}

//define a function called doWhileLoop which takes array as argument
function doWhileLoop(arr) {
  //remove elements from array
  do {
    arr.pop();
  } 
  // until array is empty or until maybeTrue() returns false
  while (array.length > 0 && maybeTrue());
  //return the array
  return arr;
}

// Remember that 98% of the time you will want to use a for loop
