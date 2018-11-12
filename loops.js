function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      array.push('I am 1 strange loop.')
    } else {
      array.push(`I am ${i} strange loops.`)
    }
  }
  return array
}


function whileLoop(num) {
  let countdown = num
  while (countdown>0){
    console.log(--countdown)
  }
  return "done"
}




function doWhileLoop(array) {
  var i = 0;
  function incrementVariable() {
    if (i < 10) {i++}
  }

  do {
    array.pop()
    incrementVariable()
  } while (array.length > 0 && incrementVariable());

  return array
}
