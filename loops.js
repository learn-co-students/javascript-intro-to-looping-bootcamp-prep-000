function forLoop(array) {
for (var i = 0; i < 25; i++) {
  if (i === 1) { array.push(`I am ${i} strange loop.`)}
else {array.push(`I am ${i} strange loops.`)}
  
}
return array
}
function whileLoop (numb) {
  while (numb > 0){
  console.log(--numb)
  }
  return "done"  
}

var i = 0;
 
function incrementVariable() {
  i = i + 1;
}


function doWhileLoop (array) {
  do{
    array.pop()
    incrementVariable()
    } while(array.length > 0 && i===true)
  return array
}