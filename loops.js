
/*Build a function forLoop. It takes an array as an argument. Start counting from 0, and, using a for loop, add a string to the array 25 times. But not just any string. If your i value is 1, add the string "I am 1 strange loop."; if your i value is anything else, add the string "I am ${i} strange loops.". (Remember flow control with if and else? And how do we interpolate i?) Then return the array.
1) loops
       forLoop(array)
         adds `"I am ${i} strange loop${i === 0 ? '' : 's'}."` to an array 25 times:
         */
function forLoop(arr){
  var count=25;
  for(let i = 0; i < count; i++){
    i === 1 ?  arr.push(`I am ${i} strange loop.`): arr.push(`I am ${i} strange loops.`)
  }
  return arr;
}

/* Create a function called whileLoop in loops.js. The function should take a number as an argument. Using a while loop, count down (using console.log) from the passed in number to 0. Then return the string 'done'
2) loops
       whileLoop(n)
         counts down from n to 0:
         */
         
function whileLoop(number){
  while(number > 0){
    number--
    console.log(number)
  }
  return 'done'
}

/*Define a function called doWhileLoop in loops.js. The function should take an integer as an argument. Use the incrementVariable() function (you can copy it from this README) in the condition, and console log "I run once regardless." while incrementVariable() returns a number less than the parameter received. (Your condition might look something like incrementVariable() < num.) Remember that it should also console log when receiving 0 as a parameter because the do-while runs before the condition is checked.

3) loops
       doWhileLoop(num)
         console logs "I run once regardless." 1 time when passed an integer of0 as a parameter.:
4) loops
       doWhileLoop(num)
         console logs "I run once regardless." 10 times when passed an integer of 10 as a parameter.:*/
 
function doWhileLoop(number){
var i =0;
  function incrementVariable() {
  i = i + 1;
  return i;
}
do{
console.log(`"I run once regardless."`);
}while(incrementVariable() < number )
}