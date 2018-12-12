function forLoop(array) {
  for (let i = 0; i < 25; i++) {
      if (i == 1) {
        array.push('I am ' + i + ' strange loop.')
      }
      else {
        array.push(`I am ${i} strange loops.`)
      }
  }
  return array;
}

function whileLoop(arg) {
  while(arg > 0) {
    console.log(arg)
    --arg
  }
  return 'done'
}

function doWhileLoop(array) {
  do {
    array.pop()
  }
  while(array.length > 0 && incrementVariable())
  return array
}

var i = 0;

function incrementVariable() {
  i = i + 1;
  if (i > 9) return false
  return true
}
