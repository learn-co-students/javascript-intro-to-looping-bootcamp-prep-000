
function forLoop(array) {

for ( i = 0; i < 25; i++) {
  var j = i +1;

  if (i === 0) {
    array[i] = `I am ${j} strange loop.`;
    } else {
    array[i]= `I am ${j} strange loops.`;
    }
  }

return array;
}

// whileLopp

function whileLoop(n) {

 while (n > 0) {
   console.log(--n);
 }
return 'done'
}


// Do-While loop

// function maybeTrue() {
//   return Math.random() >5;
// }

// function incrementVariable() {
//   i = i + 1;
// }

function doWhileLoop(array) {
  // i = array.length

  do {
    array.pop()
  }
  //incrementVariable();
  while(array.length>0);  //condition incrementVariable() && array.length >0)

  return array;
}
