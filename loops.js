function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    var sentence = `I am ${i} strange loop`;
    if (i !== 1) {
      sentence += 's';
    }
    array.push(sentence);
  }
  return array;
}


function whileLoop(num) {
  while (num - 1 >= 0) {
    console.log(--num);
  }
  return 'done';
}


function maybeTrue() {
  return Math.random() >= 0.5
}


function doWhileLoop(array) {
  do {
    array.splice(array.length - 1);
  } while (array.length > 0 && maybeTrue());
  return array;
}
