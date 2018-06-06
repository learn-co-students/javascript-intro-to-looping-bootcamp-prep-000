function forLoop(array){
  for (let i = 0; i<25; i++){
  if (i===1){
    array.push("I am 1 strange loop.");
  } else {
    array.push("I am ${i} strange loop.");
  }
}
return array;
}

function whileLoop(n) {
  let countdown = n;
  while (countdown > 0) {
    console.log(--countdown)
  }
  return 'done'
}

function doWhileLoop(array){
  function maybeTrue() {
    return Math.random() >= 0.5
  }

  do {
    var array = [];
    console.log(array.length > 0)
  } while (maybeTrue());
  return array;
}
