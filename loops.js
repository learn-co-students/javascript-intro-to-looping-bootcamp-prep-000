function forLoop(array) {
  var accumulateArray = (array);
  for (i=1; i<=25; ++i) {
    accumulateArray.push( `"I am ${i} strange loop$(i === 0 ? \'\' : \'s\'}."`);
  }
   (array) = accumulateArray;
   return (array);
}

function whileLoop(n) {
  count = (n);
  while(count > 0) {
  console.log(count);
  --count;
  if(count === 0) return "done";
}
}

function doWhileLoop(array) {
  function maybeTrue() {
  return Math.random() >= 0.5;
}
do {
  maybeTrue();
  newArray = (array).pop;
} while ((maybeTrue()) || (newArray.length !== 0));
  (array) = newArray;
  return (array);
}
