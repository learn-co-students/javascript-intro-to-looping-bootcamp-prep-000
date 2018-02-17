var array = [];

function forLoop(array) {
  for(let i = 1; i <= 25; i++) {
    if(i !== 1) {
      array.push(`I am ${i} strange loops.`);
    } else {
      array.push(`I am ${i} strange loop.`);
    }
  }
  console.log(array.length);
  return array;
}


function whileLoop(n) {
  while(n > 0) {
    n--;
    console.log(n);
  }
  return 'done';
}

function doWhileLoop(array) {
  do {
    array.pop();
  } while(array.length !== 0);
  return array;
}
