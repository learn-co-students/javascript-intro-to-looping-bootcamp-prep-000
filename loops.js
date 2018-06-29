
function forLoop(counts) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      counts.push("I am 1 strange loop.")
    } else {
      counts.push(`I am ${i} strange loops.`)
    }
  }
  return counts
}

function whileLoop(n) {
  while (n > 0) {
    console.log(--n)
  }

  return 'done'
}

function doWhileLoop(array) {
  function maybeTrue() {
    return Math.random() >= 0.5
  }

  do {
    array = array.slice(1)
  } while (array.length > 0 && maybeTrue())

  return array
}