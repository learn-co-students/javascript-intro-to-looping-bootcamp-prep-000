/*  use the FOR loop, make a special use case for the number 1 by using IF / ELSE control flow
use PUSH method to add each new string

*/

function forLoop(array) {

for (let i = 0; i < 25; i++) {
   
   if (i === 1) {
     
     array.push('I am 1 strange loop.'); 
   } else {
      array.push(`I am ${i} strange loops.`);
   } 
  }
  
    return array;
}


/*  so whatever n starts as, it will log the number and subtract 1 from it
add special case when it gets to 0.
*/
function whileLoop(n) {
  while (n > 0) {
    console.log(n--);
  }
  
  if (n === 0) {
    return 'done';
  }
}

/*  tell the DO what to do  first, 
then the WHILE the condition is still true
(value returned from  incrementVariable function is more than the number given)
*/

function doWhileLoop(num) {
  var i = 0;
 
function incrementVariable() {
  i = i + 1;
  return i;
}
 
do {
  console.log('I run once regardless');
} while (incrementVariable() < num);
}
