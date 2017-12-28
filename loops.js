function forLoop(array){
for (var i = 0; i < 25; i++) 
  if (i===0) 
  array.push("I am 1 strange loop.")
  else
  array.push("I am " + parseInt(i+1) + " strange loops.")
  return array
  }

function whileLoop(n){
let countdown = n 
while (countdown > 0) {
  console.log(--countdown)
  }
 return "done"
}
function maybeTrue(){
  return Math.random() >= 0.5
}
function doWhileLoop(array){
  do {
    array.slice(0, array.length - 1)
  } while (array.length > 0 && maybeTrue())
  return array && "false"
}