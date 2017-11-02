const array = ["A","B","C"]

function forLoop(array){
for (let i = 0; i<25; i++) {
  if (i === 1) {
    array.splice(array.length,0,"I am 1 strange loop.")
  }
  else
    array.splice(array.length,0, "I am " + i + " strange loops.")
}
return array
}

//forLoop(array)
//console.log(array)


function whileLoop(n){
  while (n>0) {
    console.log(--n)
  }
    return ("done")
  }

//var n = 10
//whileLoop(n)
//console.log(whileLoop)

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array){
do{
  //var newArray = array.pop()
  array.pop()
  return (array)
}while (array.length > 0 && maybeTrue());
}

doWhileLoop(array)
console.log(array)

var names = [ "Abbie","Odi","Joe"]
var lessNames = names.pop()
console.log(names, lessNames)
lessNames = names.pop()
console.log(names, lessNames)
