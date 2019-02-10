function forLoop(array) {

for (let i = 0; i < 25; i++)
{
if (i === 1) {
  console.log(array.push(`I am 1 strange loop.`));
} else {
  console.log(array.push( `I am ${i} strange loops.`));
}
}
return array;
}


function whileLoop(number) {
  while(number > 0){
    console.log(--number);
  }
    return `done`
  
}



function doWhileLoop(integer) {
   var i = 0;
do { 
   i = i + 1;
   console.log("I run once regardless.");
} while
( i < integer);
}
  