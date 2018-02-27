/* function makeArray () {
  const array = [];
  const t = Math.floor(Math.random() * 10);
  for (var i = 0; i < t; i++) {
   {console.log ("I am a strange loop.");
   return array(t);}
  }
} */

function forLoop(array) {
   for (let i = 0; i < 25; i++) {
   if (i === 1) {array.push ("I am ${i} strange loop."); }
    else {
      array.push("I am ${i} strange loops.");
    }
  }
}

function whileLoop(n) {
  n = Math.floor(Math.random() * 100);
  while (n > 0 ) {
    console.log(--n);
  }
  console.log('done');
}

function doWhileLoop(array) {
do {
  array.pop();
} while (array.length > 0 && maybeTrue());

return array; 
}
