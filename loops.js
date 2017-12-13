function whileLoop(num){
  while(--num > 0){
    console.log(num)
  }
  console.log(num)
  return 'done'
}

function forLoop(array){
  for(let i = 0; i < 25; i++){
    var optionalS = ((i == 1) ? "" : "s")
    console.log(`I am ${i} strange loop${optionalS}`)
    array.push(`I am ${i} strange loop${optionalS}`)
  }
  return array
}


function doWhileLoop(array){
  do{
    array.pop()
  }while(!(array.length <= 0 || !maybeTrue()))
  return array
}

function maybeTrue(){
  return Math.round() >= 0.5
}