function forLoop(array){
  for (let i = 0; i < 25; i++){
    var string = '';

    if(i===1){
      string = "I am 1 strange loop."
    }else{
      string = `I am ${i} strange loops.`
    }
    array.push(string)
  }
  return array
}

function whileLoop(n){
  while(n>0){
    console.log(n)
    n = n - 1
  }
  return 'done'
}

function doWhileLoop(array){
  var i = 0
  function incrementVariable() {
    i = i + 1
  }

  do{
    array.pop()
    console.log(array)
  }while(array.length > 0 && incrementVariable())
  
  return array;
}
