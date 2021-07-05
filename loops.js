function forLoop (array) {
  for (i = 0; i < 25; i++) {
    if (i === 1) {
      array.push(`I am ${i} strange loop.`)
    } else {
      array.push(`I am ${i} strange loops.`)
    }
  }
  return array
}

function whileLoop(n) {
  while (n >= 0) {
   if (n > 0) {
     console.log(n)
   } else {
     return "done"
   }
    n--
  }
}

function doWhileLoop(num) {
  
  do {
    console.log("I run once regardless");
    num--
  } while (num > 0);
}