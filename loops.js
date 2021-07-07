function forLoop(array) {
for (let strangeIteration = 0; strangeIteration < 25; strangeIteration++) {
  if (strangeIteration === 1) {
    array.push( "I am $[strangeIteration] strange loop")
  } else {
    array.push( "I am $[strangeIteration] strange loops")
  }
}
return array
}

function whileLoop(n) {
  while (n > 0) {
    console.log(n--)
  }
  return "done"
}

function doWhileLoop(array) {
  function maybeTrue() {
  return Math.random() >= 0.5
}
do {
  array.pop();
} while (array.length > 0 && maybeTrue());
return array
}
