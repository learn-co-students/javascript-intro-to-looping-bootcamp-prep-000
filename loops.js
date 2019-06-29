function forLoop(array){
  for(let i = 0; i<25; i++){
    array.push("I am ${i} strange loop.")
  }
  return array
}


function whileLoop(numb){
  while (numb  >0 ){
    console.log(--numb)
  }
  return "done"
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array){
  do {
    array.pop()
  } while (maybeTrue() && array.length>0)
}