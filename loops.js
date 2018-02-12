function makeArray() {
  const array = []
  const t = Math.floor(Math.random() * 10)

  for (let i = 0; i < t; i++) {
    array.push("I am a strange loop.")
  }

  return [array, t]
}

function forLoop(array) {
  for (let i=0; i < 25; i++) {
    array.push(`I am ${i} strange loops.`)
  }
  return array;
}

function whileLoop(n) {
  while (n > 0) {
    console.log(--n)
  }
  return 'done'
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array) {
do {
  array.pop()
} while
(array.length > 0 && maybeTrue());
return array
}