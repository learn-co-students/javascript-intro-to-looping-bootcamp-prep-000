/* example
// for loop
for (var i = 1; i < 100; i++) {
  console.log( "Hello World the " + i + " time" );
}

//while loop
function maybeTrue() {
  return Math.random() >= 0.5
}

while (maybeTrue()) {
  console.log("And I ran; I ran so far away!");
}

// while loop2
let countdown2 = 100;
 
while (countdown2 > 0) {
  console.log(--countdown2)
}

//doWhile
function maybeTrue0() {
  return Math.random() >= 0.5
}
do {
  console.log('doo-bee-doo-bee-doo')
} while (maybeTrue0());

end example
*/

//TODO
//for while
function forLoop(array){
  for(var i = 0; i <25; i++){
    if (i === 1)
    {
      array.push(`I am ${i} strange loop.`)
    } 
    else 
    {
      array.push(`I am ${i} strange loops.`)
    }
}
  return array
}

var sample_arr = [];
console.log(forLoop(sample_arr))

//while
function whileLoop(n){
  while(n>0)
  {console.log(n--)}
  return "done"
}

function maybeTrue() {
  return Math.random() >= 0.5
}
function doWhileLoop(array)
{
  do {
    array.pop()
  } while (array.length>0 && maybeTrue())
  
  return array
}

do_while_arr = ['a','b','c'];
console.log(doWhileLoop(do_while_arr))