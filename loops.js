function forLoop(array) {
  for (let i = 1; i < 26; i++){
    array.push(" I am ${i} strange loops.")
  }
  return array
}
let countdown = 10;

function whileLoop(countdown){
  while (countdown > 0){
    console.log(countdown)
    --countdown
  }

  return("done")
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array) {
  do {
    array.shift()
    //onsole.log("here")
  } while (array.length > 0 && maybeTrue())

  //console.log("got here")
  return array;
}
