
function forLoop(array) {
  for( let i = 0; i < 25; i++){
    if( array[i] === 1) {
      array.push("I am 1 strange loop.");
    } else {
      array.push("I am" + i + "strange loops");
    }
  }
  return array;
}

function whileLoop(n) {
  while(n > 0){
    console.log(--n);
  }
  return 'done';
}
console.log(whileLoop(100));



function doWhileLoop(array) {
  function maybeTrue() {
    return Math.random() >= 0.5
  }
 do {
  array.pop()
  } while (maybeTrue() && array.length > -1);
  return array;
 }