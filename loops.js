
var i = 0;
 
function incrementVariable() {
  i = i + 1;
  return i;
}

function forLoop(array) {
  for (var c = 0; c < 25; c++) {
    if (c == 1) {
      array.push("I am 1 strange loop.");
    }
   else {
      array.push(`I am ${c} strange loops.`);
    }
  }
  return array;
}

function whileLoop(n) {
  while (n > 0) {
    --n;
    console.log(n);
  }
  return "done"
}

function doWhileLoop(n) {
  do {
    console.log("I run once regardless");
  } while (incrementVariable() <= n);
}