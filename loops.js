function forLoop(array) {
  var i
  for (let i = 0; i < 25; i++) {
    if (i = 1) {
    array.push("I am 1 strange loop.");
    } else {
      array.push("I am ${i} strange loops.");
    }
  }
}

//function whileLoop(number) {
//  return
//  let countdown = number; number - 1;
//  while (countdown > 0) {
//    console.log(--countdown)
//  }
//}

//function doWhileLoop(array) {
//  function maybeTrue() {
//    return Math.random() >=0.5
//  }
//  do {
//    array.shift()
//  } while array.length > 0 && maybeTrue();
//  return array;
//}
