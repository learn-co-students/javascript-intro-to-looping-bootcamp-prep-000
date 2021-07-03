function forLoop(array) {
  for(var i = 0; i < 25; i++){
    array.push(`I am ${i} strange loop${i === 1 ? '' : 's'}.`);
  }
  return array;
}

function whileLoop(number){
  while(number > 0){
    console.log(number--);
  }
  return 'done';
}

function doWhileLoop(number){
  var i = 0;
  do {
    console.log(i);
  } while(++i < number)
}