function forLoop(array) {
  for (let i = 0; i < 25; i++){
    if (i === 1){
    array.push(`I am 1 strange loop.`)
    }
    else {
      array.push(`I am ${i} strange loops.`)
    }
  }
    return array
}

let countdown = 100

function whileLoop(countdown) {
  while (countdown > 0) {
    console.log(--countdown)
  if (countdown === 0){
    return 'done'
  }
  }
}

function maybeTrue() {
  return Math.random() >= 0.5
}

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function doWhileLoop(array) {
  do {
    console.log(array.length--)
  } while (array.length > 0 && maybeTrue())
  return array
}