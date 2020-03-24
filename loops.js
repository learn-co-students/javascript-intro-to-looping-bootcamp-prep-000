function doWhileLoop(num) {
  let i=0
  function incrementVariable() {
    i = i + 1;
    return i;
  }
  do {
    console.log("I run once regardless.");
  } while (incrementVariable() < num);
}

function forLoop(numarray) {
  for (let i=0; i<25; i++) {
    if (i==1) {
      numarray.push("I am 1 strange loop.")
    } else {
      numarray.push("I am "+i+" strange loops.")
    }
  }
  return(numarray)
}

function whileLoop(n) {
  let countdown = n;
  while (countdown > 0) {
    console.log(--countdown);
  }
  return('done')
}