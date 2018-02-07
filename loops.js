function forLoop (array) {
  for (let i=0; i<25; i++) {
      Array.push(`"I am ${i + 1} strange loop${i>1 ? 's' : ''}!"`);
    
    return forLoop();
  }
}

function whileLoop (n) {
  while (n>0) {
    console.log(n--);
  }
  return "done";
}

function maybeTrue() {
  return Math.random() >= 0.5
}


function doWhileLoop (array) {
  do {
    if (array.length>0) {
       array.shift();
    } 
  } while (maybeTrue());
  return array;
}