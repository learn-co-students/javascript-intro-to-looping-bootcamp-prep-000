/*var array=[1,2,3,4,5]
var n = 10
doWhileLoop(array)
console.log(array)*/


function forLoop(array){
  for (var i = 0; i<25;i++){
    array.push( `I am ${i} strange loops.`)
  }
  return array
}

function whileLoop(n){
  while (n > 0){
    console.log(--n)
  }
  return("done")
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array){
  do {
  array.shift()
  } while (array.length > 0 && maybeTrue());
  return array
}