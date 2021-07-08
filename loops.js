/*
  2) loops whileLoop(n) counts down from n to 0:
  3) loops doWhileLoop(array) removes elements from `array` until `array` is empty or until `maybeTrue()` returns `false`:
*/

function forLoop(array){
  for(let i = 0; i < 25; i++){
    array.push(`I am ${i} strange loop${i === 0 ? '' : 's'}.`)
  }
  return array
}

function whileLoop(n){
  while(n>0){
    console.log(n--)
  }
  return "done"
}

function doWhileLoop(array){
  function maybeTrue() {
    return Math.random() >= 0.5
  }
  do{
    array.shift(1)
  }while (array.length > 0 && maybeTrue())
  return array
}
