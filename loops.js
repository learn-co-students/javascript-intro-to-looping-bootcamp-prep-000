var arr = [];
var z= 25;
var arr1 = ["cat", "dog", "rat"];
function forLoop(a) {
  for(var i = 0; i < 25; i++) {
    a[i] = "I am ${i} strange loops."
  }
  return a;
}

function whileLoop(num) {
  while(num>=0) {
    console.log(num--);
  }
  console.log("done");
}

function doWhileLoop(b) {
  function maybeTrue() {
    b.pop();
    console.log(b);
    return b.length === 1;
  }
  do {
    return b;
  }while(maybeTrue());
}

forLoop(arr);
whileLoop(z);