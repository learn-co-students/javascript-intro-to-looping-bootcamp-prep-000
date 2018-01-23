function forLoop (array){
  for (var i = 0; i < 25; i++) {
    if (i===1) {
    console.log(array.push("I am 1 strange loop."))
    } else if (i===0) {
    console.log(array.push("I am ${i} strange loop."))
    } else {
    console.log(array.push("I am ${i} strange loops."))
    }
  }
  return array
}

function whileLoop (n){
  while (n > 0) {
    console.log(--n)
  }
  return "done"
}

function doWhileLoop(array){
do {
  console.log(--array.length)
} while (array.length > 0 && Math.random() >= 0.5)
return array
}
