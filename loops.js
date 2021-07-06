function forLoop(array) {
    for (var i = 0; i < 25; i++)
//the loop's initialization is 0, the condition will run the loop until its 24th loop when the condition is false, the iteration increments 1 to i every run.    
    {
  if (i === 1) {
      array.push('I am 1 strange loop.')
      //the first run of the loop will add string above to array
     } else {
      array.push(`I am ${i} strange loops.`)
     }
    }
    return array
}
let n= Math.floor(Math.random() * 100);
//generates random number "n" ranging from 0-99

function whileLoop(n){
//funtion with argument "n" taken in

while (n>0){
   console.log(--n)}
// the loopBody will decrement that number repeatedly
 
  return  "done"}
//the function will return "done" once "n" reaches zero



function doWhileLoop(array){
var i = 0;
function incrementVariable() {
  i = i + 1}  // i is the index of the elements in the array , this                 //function makes you iterate through the array

 do  { array.shift() //removes one element from array at a time until the                   //while statement is false
 }
 while (array.length > 0 && incrementVariable())
return array}
// the condition states that the length of the array/index should be greater than BOTH 0 and the i value from the incrementVariable function


