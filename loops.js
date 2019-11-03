function forLoop(array) {
  for (var i = 0; i < 25; i++ ) {
    if (i === 1) {
      bit = "I am ${i} strange loop";
      array.push(bit)
      }
    else {
      bit = "I am ${i} strange loops";
      array.push(bit)
      }
  }
}

function whileLoop(n) {
  while (n > 0)  {
    console.log(${n});
    n = n - 1
  }

  return 'done' ;
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array) {
  do {
    array.pop
  }  while (array.length > 0 && maybeTrue())
}
