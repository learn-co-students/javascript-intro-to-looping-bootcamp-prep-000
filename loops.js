function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      array.push('I am 1 strange loop.');
    } else {
      array.push(`I am ${i} strange loops.`);
    }
  } return array;
}

forLoop([]);

function whileLoop(n) {
  while (n > 0) {
    console.log(n--);
  } return "done";
}
whileLoop();

function doWhileLoop(array) {
  var i = 0;
 
function incrementVariable() {
  i = i + 1;
}
 
do {
  array.shift();
  incrementVariable();
} while (array.length > 0 && incrementVariable());
return array;
}
