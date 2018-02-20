function forLoop(arr) {
  for(let i = 0; i < 25; i++) {
    var addstring = `"I am ${i} strange loop${i === 0 ? '':'s'}."`;
    arr.push(addstring);
  }
  return arr;
}

function whileLoop(n) {
  while(n > 0) {
    console.log(n);
    n--;
  }
  
  return "done";
}

function doWhileLoop(arr) {
  do {
    arr.pop();
  } while(arr.length > 0 && maybeTrue() );
  
  return arr;
}

function maybeTrue() {
  return Math.random() >= 0.5
}