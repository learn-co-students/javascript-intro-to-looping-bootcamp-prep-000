var forLoop = (array) => {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      array.push(`I am 1 strange loop.`)
    } else {
      array.push(`I am ${i} strlearange loops.`)
    }
  }
  return array
}

var whileLoop = (number) => {
  while (number > 0) {
    console.log(number)
    number--
  }
  return 'done'
}

var maybeTrue = _ => {
  return Math.random() >= 0.5
}

var doWhileLoop = array => {
  do {
    array.pop()
  } while (array.length > 0 && maybeTrue())

  return array
}
