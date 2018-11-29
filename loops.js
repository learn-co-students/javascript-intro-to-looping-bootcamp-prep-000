function forLoop(array) {
for (let i = 0; i < 25; i++) {
  if (i == 1) {
    array.push(`I am 1 strange loop.`)
  }
  else {
    array.push(`I am ${i} strange loops.`)
  }
}
  return array
}

function whileLoop(n) {
  while (n > 0) {
    console.log(--n)
  }
  return "done"
}

function incrementVariable() {
  i = i + 1;
}

function doWhileLoop(array) {
 function incrementVariable() {
  i = i + 1;
}
  do {
    array.shift()
  } while (array.length > 0 && incrementVariable(i=0));
return array
}