var array = [array, t]
 
function forLoop(array){
  for(var i = 0; i <25; i++){
    if (i === 1){
      array.push(`I am ${i} strange loop.`)
    } else {
      array.push(`I am ${i} strange loops.`)
  }
  }
  return array
}

function whileLoop(number){
  while(number>0){
      console.log(--number);
    }
  if(number===0){
    return ('done');
    }
}

var i = 0

function doWhileLoop(array){
  function incrementVariable() {
    i = i - 1;
  }
  do {
    array.pop()
  } while (array.length >0 && incrementVariable());
  return array
}

