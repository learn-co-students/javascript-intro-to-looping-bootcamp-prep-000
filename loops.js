function forLoop(arr){
  for (let i = 0; i < 25; i++) {
    if(i === 1){
      arr.push(`I am 1 strange loop.`)
    }else{
      arr.push(`I am ${i} strange loops.`)
    }
  }
  return arr;
}
function whileLoop(n){
  while(n > 0){
    console.log(n);
    n--;
  }
  return "done"
}
/*
Define a function called `doWhileLoop` in `loops.js`. The function should take
an array as an argument. Use the `incrementVariable()` function (you can copy it
from this README) as the condition, and remove elements from the array until the
array is empty or until `incrementVariable()` returns `false`. (Your condition
might look something like `array.length > 0 && incrementVariable()`.) Finally,
return the array.
*/
function doWhileLoop(arr){
  function incrementVariable() {
    i = i + 1;
  }

  let i = 0;
  do {
    arr.pop();
    incrementVariable();
  } while (arr.length > 0 && incrementVariable());
  return arr;
}
