let array = []
function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      array.push("I am 1 strange loop.")
    } else {
      array.push(`I am ${i} strange loops.`)
    }
  }
  return array
}
var a = forLoop(array)
console.log(a)


let number = 10;
function whileLoop(number) {
while (number > 0) {
  console.log(--number);
}
  return "done"
}
var b = whileLoop(number)
console.log(b)



let i = 0;

function incrementVariable() {
  i = i + 1;
  return i;
}
//let num = 10
function doWhileLoop(num) {
  do {
    console.log("I run once regardless.");
  } while (incrementVariable() <= num);
  return "done"
}

var c = doWhileLoop(num)
console.log(c)