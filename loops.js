function forLoop (array) {
  for (let i = 0; i < 25; i++) {

    if (i === 0) {
      array[i] = `"I am a strange loop"`;
    }

    else if ((0 < i) && (i < 25)) {
      array[i] = `"I am ${i+1} stange loops."`;
    }
  } //for loop
  return array;
} //function

//forLoop(array);

//console.log(array);


function whileLoop(n) {

  while (n > 0) {
    console.log(n);
    n--;
    if (n === 0) {
      return 'done';
    }
  }
}

function doWhileLoop(array) {
  do {
    array.shift(1)
  } while (array.length > 0)
  return array;
}
