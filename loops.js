
function forLoop(array){
  for (let i=1 ; i<26 ;i++)
  {
    array.push(`"I am ${i} strange loop."`)
  }
  return array
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function whileLoop(n){
  while(n!==0){
    console.log(n)
    n--
  }
  return 'done'
}



function doWhileLoop(array){
  do{
    array.pop()
  }while(array.length > 0 && maybeTrue())
  return array
}

