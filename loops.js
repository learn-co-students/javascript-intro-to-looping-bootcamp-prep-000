function forLoop(array) {
  for(i = 1; i<=25, i++){
    if(i=1) { 
      array[i] = "I am 1 strange loop."
    }
    else {
      array[i] = `I am ${i} strangle loops.`
    }
  }
  return array
}