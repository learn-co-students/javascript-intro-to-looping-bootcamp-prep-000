function forLoop(a) {
  for (let i = 0; i < 25; i++) {
  if (i === 1) {a.push("I am 1 strange loop.")}
  else {a.push("I am ${i} strange loops.")}
}return a
}
function whileLoop(n) {
  let countdown = n
  while (countdown > 0) {
    console.log(--countdown)
  }return "done"
}
function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array) {
  do {array.shift()}
  while (array.length > 0 && maybeTrue())
  return array
}