
function forLoop(array) {
  for (var i = 0; i < 25; i++) {
   if(i === 1) {
    array = [...array, `I am ${i} strange loop.`]
   } else {
     array = [...array, `I am ${i} strange loops.`]
   }
  }
return array
}

function whileLoop(n) {
  while (n > 0) {
    console.log(n);
    n -= 1;
  }
  return('done')
}

function doWhileLoop(array) {
  do {
    array.pop();
    return array
  } while (array.length >= 0);
}