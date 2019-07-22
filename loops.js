var i=0;

function forLoop(arr) {
  for (var x=0; x < 25;x++) {
    if (x === 1) {
      arr.push(`I am ${x} strange loop.`);  
    } else {
      arr.push(`I am ${x} strange loops.`);
    }
    
  }
  return arr;
}

function whileLoop(n) {
  var ct=parseInt(n);
  while (n > 0) {
    console.log(--n);
  }
  return "done";
}

function doWhileLoop(num) {
  do {
    console.log("I run once regardless.");
  } while(incrementVariable() <= num)
}



function incrementVariable() {
  i = i + 1;
  return i;
}