
function forLoop(array) {
  for (var i = 0; i < 25; i++) {
    if(i === 1) {
      array.push("I am 1 strange loop.");
    }
    else {
      array.push(`I am ${i} strange loops.`);
    }
  }
  return array;
}

var countdown = 59;
function whileLoop(countdown) {
  while(countdown > 0) {
    console.log(--countdown);
    if(countdown === 0) {
      return "done";
    }
  }
}


function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array) {
  do {
    array.pop();
  }
  while (array.length > 0 && maybeTrue());
  return array;
}



