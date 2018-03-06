function forLoop(list){
  for (var i = 0; i < 25; i++) {
    if (i===1) {
      list.push("I am 1 strange loop.")
    }
    else {
      list.push("I am ${i} strange loops.")
    }
  }
  return list;
}

function whileLoop(digit) {
  while (digit > 0) {
    console.log(--digit);
  }
  return "done";
}

function maybeTrue() {
  return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
}

function doWhileLoop(list) {
  while (maybeTrue() && list.length>0){
    list.shift();
  }
  return list;
}