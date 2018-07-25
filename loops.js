function forLoop(array) {
  for(var i = 0; i < 25; i++){
  if (i == 1) {array.push(`I am ${i} strange loop.`)} else {array.push(`I am ${i} strange loops.`)}
  }
return array}

function whileLoop(number) {
while (number > 0) {console.log(number--)}
return "done"}

function maybeTrue(){}

function doWhileLoop(array) {
do {array.pop()
} while (maybeTrue());
return array}