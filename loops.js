function forLoop(arr) {
   for (let i = 0; i < 25; i++) {
        arr.push(`I am ${i} strange loop${i === 1 ? '' : 's'}.`);
  }
return arr;
}


function whileLoop(a) {
 while (a > 0) {
  console.log(--a);
  }  
  return `done`;
}


 function incrementVariable(b) {
       b.splice(-1);
}

function doWhileLoop(b) {
do {
  incrementVariable(b);
} while (b.length > 0 );
return b;
}
