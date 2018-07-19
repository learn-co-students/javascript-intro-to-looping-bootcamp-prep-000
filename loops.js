function forLoop(array){
   for (let i = 0; i < 25; i = i + 1) { 
    if (i===1){ 
      array.push("I am 1 strange loop."); } 
    else{ 
      array.push(`I am ${i} strange loops.`); 
    }
    }
    return array
}
    
function whileLoop(x){
  while (x>0) {
  console.log(x)
  x=x-1
}
return "done"
}

function maybeTrue() {
  return Math.random() >= 0.5
}
function doWhileLoop(array){
do {
    array.pop()
} while (maybeTrue());
return array
}
