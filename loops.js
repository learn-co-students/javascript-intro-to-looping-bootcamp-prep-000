
function whileLoop(n) {
  while(n>0){
    console.log(n--)
  }
  return ("done")
}

function maybeTrue() {
  return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
}

function doWhileLoop(array) {
  do{
    array.length-=1
  }
  while(array.length-1 >0 && maybeTrue())
  return array
}
var tab = ["fistVar", "secondVar"]

function forLoop(array) {
  for( let i=0; i<25 ; i++){
    array.push(`"I am ${i} strange loop${i === 0 ? '' : 's'}."`)
  }
  return array
}
