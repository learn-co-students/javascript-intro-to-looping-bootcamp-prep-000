function forLoop(arr) {
  for(var i = 0; i < 25; i++) {
    if(i === 1) {
    arr.push(`I am ${i} strange loop.`);
    } else {
    arr.push(`I am ${i} strange loops.`);
    }
  }
  return arr;
}

function whileLoop(n) {
  while(n > 0) {
    n--;
    console.log(n);
  }
  return 'done';
}

var i = 0;
function incrementVariable() {
  i ++;
  return i;
}

function doWhileLoop(num) {
  
  do{
    console.log("I run once regardless.");
  } while (incrementVariable() <= num);
}






