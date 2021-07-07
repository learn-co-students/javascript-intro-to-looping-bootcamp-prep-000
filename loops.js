const arrayReal = [];
function forLoop(array) {
  for(let i = 0; i < 25; i++) {
    if(i === 1) {
      array.push(`I am ${1} strange loop.`)
    } else {
    array.push(`I am ${i} strange loops.`);
  }}
  return array
}
//console.log(forLoop(arrayReal))

const number = 5
function whileLoop(n) {
  while(n > 0) {
    console.log(n--)
  }
  if(n === 0) {
    return('done')
  }
}

//whileLoop(number)
let arrayTwo = [1, 2, 3, 4, 5]
var i = arrayTwo.length;

function incrementVariable() {
  i = i - 1;
}

function doWhileLoop(array) {
  do{
    array.pop();
} while (
  array.length > 0)
  return array
}

console.log(doWhileLoop(arrayTwo))