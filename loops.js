var array = [];
function forLoop(array) {
  for ( i = 0; i < 25; i++) {
    if (i < 2) {
      array.push('I am '+ i + ' strange loop.');
    } else {
      array.push('I am '+ i + ' strange loops.');
    }
  }
  return array
}

function whileLoop(number) {
 while (number > 0) {
   console.log(--number)
 }
 return "done"
}

var i = 0;

function incrementVariable() {
  i++;
  return i;
}

function doWhileLoop(num) {
  i = 0;
  do {
  console.log("I run once regardless.");
} while (incrementVariable() < num);
}
