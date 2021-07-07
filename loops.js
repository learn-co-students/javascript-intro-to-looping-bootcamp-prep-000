function forLoop(a) {
  for(var i=0; i<25; i++) {
    if(i === 1) {
      a.push("I am 1 strange loop.");
    }
    else {
      a.push("I am ${i} strange loops.");
    }
  }
  return a;
}

function whileLoop(n) {
  while(n> 0) {
    console.log(--n)
  }
  return 'done'
}

function doWhileLoop(array) {
  do {
    delete array[--array.length]
  } while(array.length>0 && mayBeTrue());
  return array
}

function mayBeTrue() {
  return Math.random() >= 0.5
}
