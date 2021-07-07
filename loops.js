function whileLoop (thing) {
  while (thing > 0) {
    thing -= 1;
    console.log(thing);
    }
  if (thing === 0) {
    return "done";
  }
}
function forLoop(array) {
  for (var i = 0; i < 25; i++) {
    if (i === 1) {
      array.push("I am 1 strange loop.");
    }
    else {
      array.push(`I am ${i} strange loops.`)
    }
  }
  return array;
}
function doWhileLoop(array) {
  function maybeTrue() {
  return Math.random() >= 0.5
}
do {
  array.pop();
} while (array.length > 0 && maybeTrue())
return array;
}
