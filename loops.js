function forLoop(a){
  for (let i = 0; i < 25; i++) {
    if (i===1){
      a.push("I am 1 strange loop")
    }
    else
    {
      a.push("I am a strange loop.")
    }
  }
 
  return a;
}

function whileLoop(n){
  while(n>0){
    n--
    console.log(n)
    
  }
  return 'done'

}
function doWhileLoop(a){
  do{
    a.pop()
  }while(a.length = 0 && maybeTrue())
  return a
}
function maybeTrue() {
  return Math.random() >= 0.5
}

