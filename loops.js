function forLoop(arg) {
  for (var i = 0; i < 25; i++) {
  if (i === 1) {
   arg.push("I am 1 strange loop.");
  } else {
    arg.push(`I am ${i} strange loops.`); 
  }
}
return arg
}

function whileLoop(num) {
  while (num > 0) {
    console.log(--num);
  }
  return "done"
}

function doWhileLoop(arr) {

var i = 0;

function incrementVariable() {
  i = i + 1;
}

do {
  arr.pop();
  incrementVariable();
} while (arr.length > i && incrementVariable());
return arr
}