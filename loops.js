var array = []

function forLoop(array){
    for (var i = 0; i < 25; i++){
      array.push("I am a strange loop.")}

    /*if(i === 1) {
      array.push("I am 1 strange loop.")
  } else{
    array.push("I am " + `${i}` + " strange loops.")
  }
    return array
  }*/
    return array 
      }

var n = 100

function whileLoop(n){
  while(n > 0) {
    console.log(--n)
  }
  return "done"
}

function maybeTrue() {
  return Math.random() >= 0.5
  }

function doWhileLoop(array){
  do {
    array.pop()
  } while(array.length > 0 && maybeTrue())

return array
}
