function forLoop(array) {
  for(let i = 0;i<25;i++) {
    array.push(`I am ${i} strange loop${i === 1 ? '' : 's'}.`)
  }
  
  return(array)
}

function whileLoop(n) {
  while(n>0) {
    console.log(n)
    n--
  }
  
  return "done"
}

function doWhileLoop(num) {
  do {
    if(num === 0) {
      console.log("I run once regardless.")
    }
    while(num > 0) {
      console.log("I run once regardless.")
      num--
    }
    num++
  } while (num<0)
}