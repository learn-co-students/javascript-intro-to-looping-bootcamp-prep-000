
function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    
    if (i === 1) {
      str ="I am 1 strange loop."
    } 
    else {
      str ="I am ${i} strange loops."
    }
    array.push(str)
  }
  return array
}


function whileLoop(n) {
  while (n > 0) {
    console.log(--n)
  }
  return "done"
}


function maybeTrue() {
  return Math.random() >= 0.5
}
  
function doWhileLoop(array) {
  
  do{
    array.pop();
    console.log(array);
    console.log(array.length);
  }
  
  while (array.length > 0 && maybeTrue());
  return array
  
}

doWhileLoop([6,3,6,8,3])