
function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i != 1) {
       array.push("I am " + i + " strange loops.")
    } else {
       array.push("I am 1 strange loop.")
      }
  }
  return array
}

function whileLoop(number) {
  while (number > 0) {
    number = number - 1
    console.log(number)
  }
  return ('done')
}

function doWhileLoop(array) {
  array = array.length <= 9
  var i = 9;
  do {
    function incrementVariable() {
    i = i - 1
    }
  } while ( array.length > 0 && incrementVariable())
  return (array)
}
