function forLoop(a){
  for (i=0; i<25; i++){
    if (i===1){
      a.push('I am 1 strange loop')
    }
    else{
      a.push(`I am ${i} strange loop.`)
    }
  }
  return a
}

function whileLoop(n){
  while (n>0){
    console.log(--n)
  }
  return "done"
}

function doWhileLoop(a){
  function maybe(){
    return Math.random()>=0.5
  }
  do{
    a.pop()
  }
  while(a.length>0 && maybe())
  return a
}