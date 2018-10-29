function forLoop(array){
  for (let i = 0; i < 25; i++){
    let plural = (i === 1) ? "" : "s";
    array.push(`I am ${i} strange loop${plural}.`);
  }
  
  return array;
}

function whileLoop(n){
  while (n-- > 0){
    console.log(n);
  }
  return `done`
}

function doWhileLoop(array){
  let i = 0;

  function incrementVariable(){
    i = i + 1 
  }

  do { 
    array.pop()
  } while (array.length > 0 && incrementVariable())

  return array
}
