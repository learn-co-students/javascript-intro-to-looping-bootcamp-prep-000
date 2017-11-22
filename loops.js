// var loopyArray = [1,2,3,4,]

function forLoop(array) {
  for (var i = 0; i < 25; i++) {
    array.push(`I am ${i} strange loops.`)
  }
  return array
}

//console.log(forLoop(loopyArray))


function whileLoop(number) {
  while (number > 0) {
    console.log(--number)
  }
  return 'done'
}

//whileLoop(100)



function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array) {
  do {
    array.pop()
  } while (array.length > 0 && maybeTrue());
  return array
}

doWhileLoop(loopyArray)
