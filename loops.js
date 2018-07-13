function forLoop(anArr){
  for(let i=0; i<25; i++){
    if(i === 1){
      anArr.push("I am 1 strange loop.");
    }
    else anArr.push(`I am ${i} strange loops.`);
  }
  return anArr;
}

function whileLoop(num){
  while(num> 0){
    console.log(num);
    num--;
  }
  return 'done';
}

function doWhileLoop(anArr){
  do {
    anArr.pop();
  } while (anArr.length > 0 && maybeTrue());
  return anArr;
}

function maybeTrue() {
  return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
}