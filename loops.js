function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    array.push(`I am ${i} strange loop${i === 1 ? '' : 's'}.`)
  }
  return array
}

function whileLoop(number) {
  while (number != 0) {
    console.log(number)
    number--
  }
  return 'done'
}
let i = 0;
function incrementVariable() {
  i = i + 1;
}
function doWhileLoop(array) {
  do {
    array.pop();
  } while (array.length > 0 && incrementVariable());
return array
}
