

function forLoop(newArray){
  for(let i = 0; i < 25; i++){
  if (i === 1){
    newArray.push("I am 1 strange loop.")
  } else {
    newArray.push(`I am ${i} strange loops.`)
  	}
  } return newArray
}


function whileLoop(n){
  while(n > 0){
    console.log(n--)
  }
  return "done"
}

