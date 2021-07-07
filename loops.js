function forLoop(arr){
  for (var i=0; i<25; i++){
    if (i == 1){
      arr.push('I am ${i} strange loop.')
    } else {
      arr.push("I am ${i} strange loops.")
    }
  }
  return arr
}

function whileLoop(num){
  while (num > 0){
    console.log(--num)
  }
  return 'done'
}

function doWhileLoop(arr){
  do {
    arr.pop()
  } while (arr.length > 0 && maybeTrue() )
  return arr
}


function maybeTrue() {
  return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
}
 
// run until `maybeTrue()` returns `false`
// (so the body of the loop might _never_ run!)
while (maybeTrue()) {
  console.log("And I ran; I ran so far away!");
}