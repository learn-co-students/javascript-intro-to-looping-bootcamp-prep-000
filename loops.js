
function forLoop(array){
  for(let x = 0; x < 25; x++){
    if(x == 1)
      array.push(`I am 1 strange loops`)
      else array.push(`I am ${x} strange loops`)
}
return array
}

function whileLoop(number){
  
  while(number > 0)
  {
    console.log(--number)
  }
  
  return "done"
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array){
  do{
    array.pop()
  }while(array.length > 0 && maybeTrue());
  return array
}

