

function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i == 1) {
      array.push('I am 1 strange loop.');
    } else {
      array.push(`I am ${i} strange loops.`);
    }
  }
  return array;
}



function whileLoop(num) {
  while (num > 0) {
    console.log(num);
    num--;
  }
  return 'done';
}

function doWhileLoop(array) {
  let count = 0;
  function incrementVariable() {
  count = count + 1;
}
  do {
    array.pop();
  } while (array.length > 0 && incrementVariable());
  return array;
}
