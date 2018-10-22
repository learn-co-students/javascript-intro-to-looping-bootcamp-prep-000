function forLoop(array) {
  for(var i = 0; i < 25; i++) {
    if (i === 1) {
      array.push(`I am ${i} strange loop.`)
    }else {
      array.push(`I am ${i} strange loops.`)
    }
  }
  return array;
}

function whileLoop(n) {
  while(n > 0) {
    console.log(n--)
  }
  return "done"
}

<<<<<<< HEAD
function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array) {
  do {
    array.pop()
  } while(array.length > 0 || maybeTrue())
  return array;
=======
function doWhile(array) {
  function incrementVariable(array) {
    array.pop()
  }

  do {
    incrementVariable()
  } while(array.length > 0)

  return false;
>>>>>>> f75629e08500b77ab318a2278285972c8e356e53
}
