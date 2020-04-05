const array = []
function forLoop(array) {
for (let i = 0; i < 25; i++) {
  if (i === 1) {
    array.push(`I am ${i} strange loop.`)
}
  else

    array.push(`I am ${i} strange loops.`)

  }
return array
}
forLoop(array)

function whileLoop(n) {
  while (n > 0) {
  console.log(n)
  n--
  }
  return "done"
}

let number = 0
function doWhileLoop(num) {
do {

  console.log("I run once regardless.")
  number++


}
  while(number < num + 1)
}
