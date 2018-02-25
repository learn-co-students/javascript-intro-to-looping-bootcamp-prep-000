function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i < 24) {
      array.push(`"I am ${i} strange loop${i === 0 ? '' : 's'}."`)
    }
    else {
      array.push(`"I am ${i} strange loop${i === 0 ? '' : 's'}."`)
      return array
    }
  }
}
function whileLoop(n) {
  var count = n
  while (count > 0) {
    if (count > 1) {
      console.log(--count)
    }
    else {
      console.log(--count)
      return "done"
    }
  }
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array) {
  do {
    array.shift()
  } while (array.length === 0 && maybeTrue()){ 
    return array
  }
}