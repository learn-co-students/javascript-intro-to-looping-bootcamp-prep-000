/*
TODO: Build a function forLoop. It takes an array as an argument.
 Start counting from 0, and, using a for loop, add a string to the array 25 times.
  But not just any string. If your i value is 1, add the string "I am 1 strange loop.";
  if your i value is anything else, add the string "I am ${i} strange loops.".
  (Remember flow control with if and else? And how do we interpolate i?) Then return the array.
*/

function forLoop(arr){

  for(i=0; i<=24; i++){
    if(i===1){
      arr.push(`I am ${i} strange loop.`)
    }else{
      arr.push(`I am ${i} strange loops.`)
    }
  }

  return arr
}










/*TODO: Create a function called whileLoop in loops.js.
The function should take a number as an argument.
 Using a while loop, count down (using console.log) from the passed in number to 0.
 Then return the string 'done'.*/

 function whileLoop(n){

   while(n>0){
     console.log(n)
     n--
   }

   return "done"

 }









function maybeTrue() {
  return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
}

function doWhileLoop(arr){

  do{
    arr.pop()
  }while(maybeTrue() && arr.length>=0)

  return arr
}
