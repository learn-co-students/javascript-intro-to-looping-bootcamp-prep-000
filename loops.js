function forLoop (array) {
  for (let i=0; i<25; i++) {
    if (i===1) {
    array.push("I am 1 strange loop.");
  }
  else {
    array.push(`I am ${i} strange loop.`);
  }
  }
  return array;
}
function whileLoop (n) {
  let countdown = n; 
  while (countdown>0) {
    console.log(countdown);
    countdown--;
  }
  return 'done';
}
 function maybeTrue() {
    return Math.random() >= 0.5;
  }
function doWhileLoop (array) {
  do {
    array.length=array.length - 1;
  }
  while (array.length>0 || maybeTrue());
  return array;
}