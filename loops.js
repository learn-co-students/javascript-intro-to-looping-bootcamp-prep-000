function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
    array.push("I am 1 strange loop.")
    } else {
    array.push(`I am ${i} strange loop${i === 0 ? '' : 's'}.`)
    }
  }
  return array
}

function whileLoop(number) {
  while (number > 0) {
    console.log(-- number)
  }
  if (number === 0) {
  return "done"}
}

function doWhileLoop(array) {
  do { array = array.pop
  }
  while (array.length > 0 && incrementVariable());
}