
function forLoop(array){
  for (let i = 0; i < 25; i++){
    array.push(`I am ${i} strange loop${i===1 ? '' : 's'}.`)
  }
  return array
}


function whileLoop(n){
  let countdown = n
  while (countdown > 0){
     console.log(--countdown)
  }
  return 'done'
}


function doWhileLoop(array){
  var i = 0;
  function incrementVariable(){
    i = i + 1
  }
  do{
    array.pop('Do')
    incrementVariable()
  }
  while(i < 5)
  return array
}
