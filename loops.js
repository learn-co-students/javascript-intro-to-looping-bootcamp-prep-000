//function forLoop
function forLoop(array){
  for (let i = 0; i < 26; i++) {
  if (i===1){
    array[1] = "I am 1 strange loop."
    }
    else {
    array [i] =`"I am ${i} strange loops"`
    }
  }
  return array
}
//whileLoops
function whileLoop(n){
  while(n>0){
  console.log(n--)
    }
    return 'done'
}
// define maybeTrue
function maybeTrue() {
  return Math.random() >= 0.5
}
//define doWhileLoop
function doWhileLoop(array){
  do{
    array.pop()
  } while (array.length > 0 && maybeTrue())
  return array
}
