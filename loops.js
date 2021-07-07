function forLoop(array){
  for (var i = 0; i < 25; i++){
    array.push(`I am ${i} strange loop`)
  }
  return array
}

function whileLoop(n){
  while (n > 0){
    console.log(n)
    n--
  } if(n === 0){
    return 'done'
  }
}

function doWhileLoop(array){
  var i = 0
  do{
    array.splice(i)
    i++
  } while (array.length > 0)
  return array
}

