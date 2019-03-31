function forLoop(array){
  for( i = 0; i < 25; i++ ) {
    if(i === 1){
    array.push('I am 1 strange loop.');
  } else {
    array.push(`I am ${i} strange loops.`);
}
}return(array)
}

function whileLoop(num) {
  while (num > 0) {
   console.log(--num)
  }
  return('done')
}

function doWhileLoop(int) {
  var i = 0;
  
  function incrementVariable() {
    i = i + 1;
    return i;
  }
  do {
    console.log('I run once regardless')
  }
  while(incrementVariable(int) < int)
}
 // if int is greater than incrementVariable() it will step through one more time. so while (incrementVariable() <= int) would go one more loop. Corect 
    // this by incrementVariable() < int) which will stop the increment at the exact value int instead of incrementing one more iteration.