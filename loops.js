function forLoop (array) {
  for (i = 0; i < 25; i++) {
    if (i === 1) {
      array.push("I am 1 strange loop.");
    }
    else {
      array.push(`I am ${i} strange loops.`);
    }
  }
  return array;
}

function whileLoop (num) {
  while (num > 0){
  console.log(num--);
  }
  return 'done';
}

function incrementVariable() {
  i = i + 1;
}

function doWhileLoop (array) {
  do {
    incrementVariable();
    array.length--;
  }
  while (array.length > 0 && incrementVariable() === false) {
    return array;
  }
}