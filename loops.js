var myArray =[];
function forLoop(array) {

    for (var i = 0; i < 25; i++) {
      if ( i === 0){
        array.push("I am 1 strange loop.");
      } else {
        array.push('I am '+ i + ' strange loop.');
      }
    }

  return array;
}
let countdown = 100;
function whileLoop(counter){
  while (counter > 0) {
    console.log(--counter);
  }
  return 'done';
}
var myArray1 = [];
function doWhileLoop(array) {
  array.pop();
  return array;
}
function maybeTrue() {
  return Math.random() >= 0.5
}
do {
  console.log('doo-bee-doo-bee-doo')
} while (myArray1.length > 0 && maybeTrue());
