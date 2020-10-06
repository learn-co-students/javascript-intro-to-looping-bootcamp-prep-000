function forLoop(inputArray) { 
  for (let i = 0; i < 25; i++) {
    if(i == 1) { 
      inputArray.push("I am 1 strange loop.");
    }
    else { 
      inputArray.push(`I am ${i} strange loops.` );
    }
  }
  return inputArray;
}

function whileLoop(n) {
  let countdown = n;
  while(countdown > 0) { 
    console.log(countdown--);
  }
  return "done"; 
}


function doWhileLoop(num) {
  let i = 0;
  do {
    console.log("I run once regardless.");
  }
  while (++i < num);
  
}