 

function forLoop(array){
  for(var i = 0; i<25;i++){
    if (i === 1){
      array.push("I am 1 strange loop.")
    }else{
    array.push("I am " + i.toString() + " strange loops.")
    }
  }
  return array
}

function whileLoop(number){
  while(number > 0){
    console.log(number)
    number -= 1
  }
  return "done"
}

function doWhileLoop(array){
  var i = 0;
  function incrementVariable() {
    i = i + 1;
  }

  do {
    array.shift();
  } 
  while (array.length > 0 && incrementVariable())
  return array
}

//no point to incrementVariable()