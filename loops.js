function forLoop(arr){
  for(i=0;i<25;i++){
    arr.push(`I am ${i} strange for loop.`)
  }
  return arr
}

function whileLoop(n){
  while(n>0){
    console.log(n);
    n--
  }
  return "done"
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array){
  do {
    array.pop()
  } while (array.length > 0 && maybeTrue())
  return array
}
