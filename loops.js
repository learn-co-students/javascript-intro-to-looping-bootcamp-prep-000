function forLoop(a) {
  for(var i=0; i<25; i++) {
    a.push(`I am ${i} strange loop${i === 1 ? '' : 's'}.`);
  }
  return a;
}

function whileLoop(n) {
  while(n>0) {
    console.log(n--);
  }
  return "done";
}

function doWhileLoop(n) {
  if(n===0) {
    console.log("I run once regardless.");
  } else {
    while(n>0) {
      console.log("I run once regardless.");
      n--;
    }
  }
}
