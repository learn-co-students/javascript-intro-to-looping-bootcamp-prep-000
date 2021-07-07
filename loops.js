// var gifts = []'teddy bear', 'drone', 'doll'];
//
// function wrapGift(gift) {
//   console.log(`Wrapped ${gift} and added a bow!`)
// }
//
// for( ; ; ){
//
// }

function forLoop(array) {
  array = []
  i=11;
  for (let i=-11;  i < 24; i++) {
    array.push(`I am ${i+1} strange loop${i === 0 ? '' : 's'}.`)
  }
  return array
}

console.log(forLoop())

function whileLoop(n) {
  // n = 27
  while (n>0) {
    console.log(n)
    n--;
  }
  if (n == 0) {
    return "done"
  }
}

// console.log(whileLoop(27))
function incrementVariable() {
  i = i + 1;
}


function doWhileLoop(array) {
  array = [1,2,4,5,7,]
  do {
  array.pop();
  } while (array.length > 0);
  return array
}
