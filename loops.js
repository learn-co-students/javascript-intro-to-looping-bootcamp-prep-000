/*for (var i = 1; i < 100; i++) {
  console.log("Hello World the " + i + " time!")
}
*/
function forLoop(array) {
  for(let i = 0; i < 25; i++) {
    if(i===1){
      array.push(`I am ` + i + ` strange loop.`)
    }
    else {
      array.push(`I am ${i} strange loops.`)
    }
  }
  console.log("forLoop run!")
  return array
}

var box = []
forLoop(box)
//console.log(box)

function whileLoop(n) {
  while(n > 0) {
    console.log(--n)
  }
  return 'done'
}

var i
function incrementVariable() {
 i = i + 1;
 return true
}

doWhileLoop(box)

function doWhileLoop(array) {
do {
  console.log(array.length)
  console.log(array)

  array.pop()
} while (array.length > 0 && incrementVariable())
console.log(array)
console.log("were done")
return array
}
