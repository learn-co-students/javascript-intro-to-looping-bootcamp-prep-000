function forLoop(array) {
  if array.length = 2
    array.push(`I am 1 strange loop.`)
  else
    array.push(`I am ${array.length} strange loops.`)
  return array
}

for (var i = 0, i<25, i++) {
  forloop()
}

function whileLoop(n) {
  console.log(--n);
  if n = 0
  console.log(`done`)
}

while (n>0) {
  whileLoop()
}

var i = 0

function incrementVariable() {
  i = i + 1
}

function doWhileLoop(array) {
  do {
    array.pop(1)
  } while (array.length > 0 && incrementVariable());
}
