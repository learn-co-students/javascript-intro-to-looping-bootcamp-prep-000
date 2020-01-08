

function forLoop(array){
  for (var i = 0; i <25; i++) {
  if(i===1){
  array.push(`I am ${i} strange loop.`)
}
  else{
    array.push(`I am ${i} strange loops.`)
  }
  }
  return(array)
}

function maybeTrue() {
  return Math.random() >= 0.5; // Returns a random number between 0 (inclusive) and 1 (exclusive)
}

function whileLoop(n){
  while(n>0)
  {console.log(n--)}
  return('done')
}

function doWhileLoop(n){
  do {
  if(n===0){
    console.log("I run once regardless.")
  }
  else if(n===10){
    for (var i = 0; i < n; i++) {
      console.log("I run once regardless.")
    }
  }
}
while (maybeTrue());
}
