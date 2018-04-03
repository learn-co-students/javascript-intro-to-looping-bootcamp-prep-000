function forLoop(array) {
  var i = 0;
  for (i; i < 25; i = i+1) {
    if (i === 1) {
      array.push("I am 1 strange loop.");
    } else {
      array.push(`I am ${i} strange loop.`);
    }
  }
  return array
}


function whileLoop(number) {
  while (number > 0) {
    console.log(--number);
  }
  return "done";
}

function maybeTrue() {
  return Math.random() >= 0.5;
}

function doWhileLoop(array) {
  do {
    array.pop();
  } while (array.length > 0 && maybeTrue());
  return array;
}

var a = new Array();
forLoop(a);
console.log(a);