/*
for (var i = 1; i < 100; i++) {
  console.log( "Hello World the " + i + " time" );
}
*/

array = []
function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i == 1) {
      array.push(`I am 1 strange loop.`)
    } else {
      array.push(`I am ${i} strange loops`)
    }
  }
  return array
}

/*
while ([condition]) {
  [loopBody]
}
*/

function whileLoop(n) {
  while (n > 0) {
    --n
    console.log(n)
  }
  return "done"
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array) {
  do {
    array.shift()
  } while (array.length > 0 && maybeTrue())
  return array
}