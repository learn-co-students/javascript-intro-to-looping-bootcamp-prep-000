function forLoop(array) {
const t = 25

for(let i = 0; i < t; i ++) {
  if(i === 1) {
    array.push("I am 1 strange loop.")
  } else {
    array.push(`I am ${i} strange loops.`)
    }
  }
  
  return array
  
}



function whileLoop(n) {
  let done = "done"
  while(n > 0) {
    console.log(--n)
  }
  
   return done
  
}

whileLoop(85)

let i = 0

function incrementVariable() {
  i = i + 1
}

function doWhileLoop(array) {
  
  do{
    incrementVariable()
    array.length = array.length - 1
  }while(array.length > 0 && incrementVariable > 0)
  
  return array
}

doWhileLoop(countdownArray)
