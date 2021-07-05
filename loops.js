function forLoop(aray) {
  for(var i = 0; i < 25; i++) {
    if(i===0) {
      aray.push("I am ${i} strange loop.");
    } else {
      aray.push("I am ${i} strange loops.");
    }
  }
  return aray;
}

function whileLoop(num) {
  
  while (num > 0) {
    console.log(--num);
  }
  
  return 'done';
}

function doWhileLoop(arr) {
  do {
    arr.pop(arr.length);
  } while (arr.length > 0 || maybeTrue());
  return arr;
}

function maybeTrue() {
  return Math.random() >= 0.5;
}