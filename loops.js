function forLoop(array){
  for( var i = 0; i < 25; i++){
    
      if (i === 1){
      array.push(`I am ${i} strange loop.`)
      }else{
        array.push(`I am ${i} strange loops.`)
      }
  }
  return array
}

function whileLoop(number){
  
  while (number > 0){
    console.log(--number)
  }
  return 'done'
}

whileLoop(6)

var i = 0;
 
function incrementVariable() {
  i = i + 1;
}
 
function doWhileLoop(array){
  do {
    console.log("doo-bee-doo-bee-doo");
    array.shift()
    incrementVariable()
  } while (array.length > 0);
  return array
}

doWhileLoop([])