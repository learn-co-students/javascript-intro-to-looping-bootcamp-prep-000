function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    array.push(`I am ${i} strange loop${i === 1 ? '' : 's'}.`);
  }
  return array;
}

function whileLoop(n) {
  while (n > 0) {
    console.log(n);
    n--;
  }
  return 'done';
}

function doWhileLoop(array) {
  let i = array.length;
  const incrementVariable = () => {
    i++;
  };

  do {
    array.pop();
  } while(array.length > 0 || incrementVariable());
  return array;
}
