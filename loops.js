

function forLoop(array) {
  for (let i = 0; i < 25; i++) {
      array.push(`I am ${i} strange loop${i === 1 ? '' : 's'}.`)
  }
  return array
}
    
function whileLoop(number){
  while(number != 0){
    console.log(number--)
  }
  return "done"
}




var i = 0;
a = new Array()
a.push("hello")

function incrementVariable() {
  i = i + 1;
}

function doWhileLoop(array){
  do {
    array.pop()
    incrementVariable()
  } while(array.length > 0);
  return array
}

doWhileLoop()