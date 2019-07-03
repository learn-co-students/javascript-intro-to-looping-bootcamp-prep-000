var i = 0
// used in incrementVariable() function

function forLoop(array){
  // for ([initialization]; [condition]; [iteration])
  for (let i = 0; i < 25; i++){
    if (i === 1){
      array.push("I am 1 strange loop.")
    } else {
      array.push("I am " + i + " strange loops.")
    }
  }
  return array
}

function whileLoop(number){
  // while ([condition])
  while (number > 0){
    console.log(number--)
  }
  return 'done'
}

function incrementVariable() {
  i = i + 1
  return i
}

function doWhileLoop(integer){
  do {
    console.log("I run once regardless")
  } while (incrementVariable() <= integer)
  }