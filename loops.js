var arrayOne = []

function forLoop(array) {
   for ( let i = 0; i < 25; i++) {
     if (i === 1) {
       array.push(`I am 1 strange loop.`)
     } else {
       array.push(`I am ${i} strange loops.`)
     }
  }
  return array;
}
forLoop(arrayOne)

function whileLoop(counter) {
  while (counter > 0) {
  console.log (--counter)
}
  return "done"
}
whileLoop(10)

var arrayTwo = [1,3,5,6,8,10,'test']

function doWhileLoop(array) {
do {array.pop()}
while (array.length > 0 )
return array
}
doWhileLoop(arrayTwo)
