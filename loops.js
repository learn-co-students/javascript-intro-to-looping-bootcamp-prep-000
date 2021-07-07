function forLoop(makeArray){
  for (var i = 0; i < 25; i++) {
    if (i == 1) {
      makeArray.push("I am 1 strange loop.");
    } else {
      makeArray.push("I am " + i + " strange loops.");
    }
  }
  return makeArray;
}
function whileLoop(n){
 while (n > 0){
   console.log(--n);
 }
return 'done';
}

function maybeTrue() {
  return Math.random() >= 0.5;
}

function doWhileLoop(array){
  do {
   array = array.slice(1);
  } while (array.length > 0 && maybeTrue());
return array;
}









