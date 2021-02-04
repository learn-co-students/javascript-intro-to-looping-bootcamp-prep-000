function forLoop(arrayLoop) {
  for (let i = 1; i < 25; i++) {
    if (i == 1) {
      arrayLoop.push("I am 1 strange loop") 
    } else { arrayLoop.push(`I am ${i} strange loops`)
    }
  }
}