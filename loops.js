function forLoop(array) {
  for (var i=0; i<25; i++) {
    if(i<24){
      array.push(`I am ${i} strange loop.`)
    }
    else if(i===24){
      array.push(`I am ${i} strange loops.`)
    }
  }
  return array
}
function whileLoop(n) {
  while (n>0) {
    console.log(n--)
  }
  return 'done'
}
var i = 0
function incrementVariable() {
  i = i + 1;
}
function doWhileLoop(array) {
  do {
    array.pop()
  }
  while (incrementVariable() && array.length > 0)
  return array
}