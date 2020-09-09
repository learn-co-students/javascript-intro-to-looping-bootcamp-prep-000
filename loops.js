let strangeArray = []

function forLoop(strangeArray) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      strangeArray.push("I am 1 strange loop.")
    } else {
      strangeArray.push(`I am ${i} strange loops.`)
    }
  }
  return strangeArray
}

function whileLoop(n) {
  while (n > 0) {
    console.log(`${n}`)
    --n
  }
  return 'done'
}

function doWhileLoop(int) {
  let num = 0
  function incrementVariable() {
  num = num + 1;
  return num;
}

do {
  console.log("I run once regardless.")
} while (incrementVariable() < int)
}
