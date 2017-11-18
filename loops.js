

function forLoop (array) {

  for (let i = 1; i < 26; i++) {

    if (i === 1) {
      array[i-1] = `"I am ${i} strange loop"`;
    }

    else if ((1 < i) && (i < 26)) {
      array[i-1] = `"I am ${i} stange loops."`;
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
