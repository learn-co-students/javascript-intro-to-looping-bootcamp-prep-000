function forLoop(array) {
  for (var i = 0; i < 25; i++) {
    if (i === 1) {
      array.push("I am 1 strange loop.");
    }
    else {
      array.push(`I am ${i} strange loops.`);
    }
  }
    return array;
}
forLoop(array);

function whileLoop(num) {
  let countdown = num;
  while (countdown > 0) {
    console.log(-- countdown);
  }
  return "done";
}
whileLoop(num);

function maybeTrue() {
  return Math.random() >= 0.5;
}
function doWhileLoop(array) {
  //remove elements from array until array is empty or //maybeTrue returns false
  do {
  //remove elements from array
  array.pop();
}
  while(array.length > 0 && maybeTrue());
  return array;
}
doWhileLoop(num);