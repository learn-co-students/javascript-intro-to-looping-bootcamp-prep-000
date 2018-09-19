function forLoop(array){
  for (i = 0; i < 25; i++){
    if (i === 1){
      array.push("I am 1 strange loop.");
    } else {
      array.push (`I am ${i} strange loops.`);
    }
  }
  return array;
}

function whileLoop(num){
  while (num > 0){
    console.log (--num);
  } if (num === 0){
    return 'done';
  }
}


function doWhileLoop(array){
  function incrementVariable() {
  } do {
    array = array.splice(-1);
  } while (array.length > 0 && incrementVariable());
  return array;
}