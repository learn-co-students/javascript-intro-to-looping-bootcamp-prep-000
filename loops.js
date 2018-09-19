var arr = [];
var num;
var i;
function forLoop(arr) {
  for (let i = 0; i < 25; i++) {
    if (i == 1) {
      arr.push("I am 1 strange loop.");
    
    }
    else {
      var num = i;
      arr.push("I am " + num + " strange loops.");
      
    }
  }
  return arr;
}
function whileLoop(num) {
  while (num > 0) {
    console.log(--num);
  }
  return "done";
}
function incrementVariable() {
  i = i + 1;
}
function doWhileLoop(arr) {
  do {
    arr.pop();
  } while (arr.length > 0 && incrementVariable())
  return arr;
}
