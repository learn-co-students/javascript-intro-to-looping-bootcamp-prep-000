function forLoop(theArray){
for (var i = 0; i < 25; i++){
  if (i === 1){
    theArray.push("I am 1 strange loop.")
  }
  else{
    theArray.push(`I am ${i} strange loops`)
  }
}
return theArray
}

function whileLoop(theNumber){
  while (theNumber > 0){
    console.log(--theNumber)
  }
  return 'done'
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(theArray){
  do {
    theArray.pop()
  }
 while (theArray.length > 0 && maybeTrue())
 return theArray
}
