function forLoop(arr) {
 for (i = 0; i < 25; i++) {
   var str = "";
   if (i === 1) {
     str = "I am 1 strange loop.";
     arr.push(str);
   } else {
     str = `I am ${i} strange loops.`;
     arr.push(str);
   }
 }
 return arr;
}

function whileLoop(num) {
  while (num > 0) {
    console.log(num--);
  }
  return "done";
}

function doWhileLoop(arr) {
  function maybeTrue() {
    return Math.random() >= 0.5;
  }

  do {
    arr.pop();
  } while (arr.length > 0 && maybeTrue());
  return arr;
}