
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


function doWhileLoop(array) {
  do {
    array.pop()
  }
  while
  (array.length >0);  //maybeTrue()

  }
  console.log(array);
}
