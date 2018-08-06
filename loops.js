
function forLoop (array) {
  var arrayLength = array.length
    for (let i = 0; i < 25; i++) {
      if (i === 1 ) {
      array.push(`I am 1 strange loop.`);
      }
      else {
        array[arrayLength + i] = `I am ${i} strange loops.`;
      }
    }
    return array
}
function whileLoop (number){
  var countdown = number;
  while (countdown > 0){
    console.log(--countdown);
  }
  return `done`
}
function doWhileLoop (array) {
  function maybeTrue() {
  return Math.random() >= 0.5
}
  do {
    array.pop();
  } while (maybeTrue() || array.length > 0)
  return array
}
  
