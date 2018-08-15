function forLoop(arr) {
  for(var i = 0; i < 25; i++) {
    if(i === 1) {
      arr.push("I am 1 strange loop.");
    } else {
      arr.push("I am " + i + " strange loops.");
    }
  }
  return arr;
}

function whileLoop(n) {
  while(n > 0) {
    console.log(n);
    n--;
  }
  return "done";
}

function incrementVariable() {
  var i = 0;
  i = i + 1;
}

function doWhileLoop(arr) {
  do {
    arr.pop();
  } while(arr.length > 0 && incrementVariable())
}
