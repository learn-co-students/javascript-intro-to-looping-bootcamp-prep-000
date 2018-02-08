function forLoop(arr){

  for(var i=1; i<=25; i++){
    if(i === 1){
      arr.push("I am 1 strange loop.")
    }
    else{
      arr.push(`I am ${i} strange loops.`)
    }
  }
  return arr
}


function whileLoop(n){
  while(n>0){
    console.log(n);
    n--
  }
  return 'done'
}


function doWhileLoop(arr){
  function maybeTrue() {
    return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
  }

  do{arr.shift()
  }
  while(arr.length > 0 && maybeTrue()) {
  }
  return arr
}
