var i = 0
function incrementVariable() {
  i = i + 1;
}


function forLoop (array) {

for (let i = 0; i < 25; i++) {
  // ...
  if (i === 1) {
    array.push ( "I am 1 strange loop.") 
  }
  else {
    array.push ("I am " + i + " strange loops.")
  }
  
} 
return array 
}
// while Loop 
function whileLoop (number) {
  while (number > 0){
    console.log (--number)
  }
  return "done"
}
// doWhileLoop 
function doWhileLoop (array) {
  do {
    // remove element from arrary 
    array.pop()
  } while (array.length > 0 || incrementVariable ()); 
  return array
}
