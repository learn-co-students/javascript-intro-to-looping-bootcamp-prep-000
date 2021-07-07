function forLoop(list) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      list = [...list, 'I am 1 strange loop.'];
    } else {
      list = [...list, `I am ${i} strange loops.`];
    }
  }
  return list
}

function whileLoop(numero) {
  while (numero > 0) {
    console.log(--numero);
  }
  return 'done'
}

function doWhileLoop(int) {
  var n = 0;
  function incrementVariable() {
  n = n + 1;
  return n;
}
  do {
    console.log("I run once regardless.");
  } while (incrementVariable() < int);
}