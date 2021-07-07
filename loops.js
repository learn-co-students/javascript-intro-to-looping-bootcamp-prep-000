function forLoop(){
  for (let i = 0; i < 25; i++){
    if (i<2){
      console.log("I am 1 strange loop.")
    } else {
      console.log("I am ${i} strange loops.")
    }
  }
}

function whileLoop(num){
  let countdown = num
  while (countdown > 0) {
    console.log(--countdown)
  }
  console.log('done')
}

function doWhileLooop(){
  
}