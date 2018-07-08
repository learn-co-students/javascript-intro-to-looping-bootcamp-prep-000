
var arr = [];
function forLoop(arr){
  for (var i = 0; i < 25; i++){
    if (i <= 1){ 
    arr.push(`I am ${i} strange loop.`);}
    else { arr.push(`I am ${i} strange loops.`);
    }
  }
  return arr
}

forLoop(arr)

//couldn't understand  'Build a function forLoop. It takes an array as an argument. Start counting from 0, and, using a for loop, add a string to the array 25 times. But not just any string. If your i value is 1, add the string "I am 1 strange loop."; if your i value is anything else, add the string "I am ${i} strange loops.". (Remember flow control with if and else? And how do we interpolate i?) Then return the array.'
//Found a solution page and I modified. 
//The Key was -declare 'arr', use push() method. 

function whileLoop(n){
  while (n >= 0){
    console.log(n--)
  }
  return 'done'
}
whileLoop(5)



var arr = ['a', 'b', 'c'];

function maybeTrue() {
  return Math.random() >= 0.5
}
// Returns a random umber between 0 and 1

function doWhileLoop(arr) {
  do {
    //remove elements from the array
    var i = 0;
    var aL= arr.length
    arr.splice(i, aL);
    }
  while (arr.length > 0 && maybeTrue());
  //untill the array is empty
  //or run untill maybeTrue() returns 'false'
  return arr
}

doWhileLoop(arr)