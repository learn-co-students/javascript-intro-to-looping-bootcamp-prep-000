function forLoop (array) {
  for (let i=0; i<25; i++) {
    if (i===0) {
      array.push(`"I am 1 strange loop!"`);
    } else {
      array.push(`"I am ${i + 1} strange loops!"`);
    }
    return forLoop();
  }
}

function whileLoop (n) {
  while (n>0) {
    console.log(n--);
  }
  return "done";
}

function doWhileLoop (array) {
  do {
    
  } while (
    
  )
}