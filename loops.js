function forLoop(array) {
  for(var i = 0; i < 25; i++) {
    if(i === 1) {
      array.push("I am 1 strange loop");
    } else {
      array.push('I am ${i} strange loops');
    }
  }
  return array;
}

function whileLoop(count) {
  while(count>0) {
    console.log(count--);
  }
  return "done";
}

function doWhileLoop(array) {
  do {
    console.log(array.pop());
  } while(maybeTrue() && array.length>0)
  return array;
}

function maybeTrue() {
  return Math.random() >= 0.5;
}

var test = ['Test'];
doWhileLoop(test);
