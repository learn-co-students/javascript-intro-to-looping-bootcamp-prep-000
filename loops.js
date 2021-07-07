function forLoop(array) {
  for (let i = 0; i<25; i++) {
    if (i === 1) {
<<<<<<< HEAD
      array.push(`I am ${i} strange loop.`)
    } else {
      array.push(`I am ${i} strange loops.`)
    }
  }
  return array
}

function whileLoop(n) {
  let count = n
  while (count > 0) {
    console.log(count)
    count--
  }
  return "done"
}

var i = 0

function incrementVariable() {
  i = i + 1;
  return i;
}

function doWhileLoop(num) {
  do {
    console.log("I run once regardless.")
  } while (incrementVariable() <= num)
=======
      array.push("I am 1 strange loop")
    }
    else {
      array.push("I am ${i} strange loops")
    }
  }
>>>>>>> 8692fba6b59b22fcc1ebe2940a848231714a90dd
}