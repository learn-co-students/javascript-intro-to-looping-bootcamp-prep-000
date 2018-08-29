function forLoop(arr) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      arr.push("I am 1 strange loop.");
    } else {
      arr.push(`I am ${i} strange loops.`);
    }
  }
  return arr;
}

function whileLoop(num) {
  while (num >= 1) {
    console.log(--num);
  }
  return 'done';
}

function doWhileLoop(arr) {
  
  // function incrementVariable() {
  //   i = i + 1;
  // }
  
  do {
    arr.pop();
  } while (arr.length > 0);
  return arr;
}
