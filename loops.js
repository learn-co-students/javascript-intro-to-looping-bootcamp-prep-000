function forLoop(array) {
  for(var i = 0; i < 25; i++) {
    if(i === 1) {
      array.push("I am 1 strange loop.");
    } else {
      array.push(`I am ${i} strange loops.`);
    }
  }
  console.log(array);
  return array;
}

function whileLoop(n) {
  while(n > 0) {
    console.log(n);
    n -= 1;
  }
  return "done";
}

var i = 0;
function incrementVariable() {
  i++;
}
function doWhileLoop(array) {
  do {
    array.pop();
    incrementVariable();
  } while(array.length > 0 || incrementVariable());
  return array;
}