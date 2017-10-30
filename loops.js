
function forLoop(array) {

for (var i = 0; i < 25; i++) {

  array.push("I am ${i} strange loop${i === 0 ? '' : 's'}.");
}
return array;
}


function whileLoop(n) {

 while (n > 0) {

   n -= 1;

   }

}


function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array) {

  do {
    array.pop();
  } while (maybeTrue())
  return array;
}
