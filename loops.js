function forLoop(array){
  for (var i = 0; i < 25; i++) {
  if (i === 1){
    array.push("I am 1 strange loop."); 
    } else {
    array.push(`I am ${i} strange loops.`);
  }
} return array;
}

function whileLoop(n){
  while (n > 0){
    console.log(--n);
  } return 'done';
}

var i = 0;
 
function incrementVariable() {
  i = i + 1;
}

function doWhileLoop(array){
  do{
    array.pop();
  } while (array.length > 0 && incrementVariable() === false);
  return array;
}

/*
function doWhileLoop(array){
  do{
    array.pop();
  } while (array.length > 0);
  return array;
}
*/

//Using the incrementVariable function (returning false) will only pop an element off of the array once, because incrementVariable will never be empty (or false)
//The second function will empty the array until the array is empty (its length is 0)
