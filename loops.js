function forLoop(array) { 
  for (var i = 0; i < 25; i++) {
    j = i + 1;
    if (j === 1) {
      array.push("I am 1 strange loop.")
      //  console.log(i);
      }
    else {
      array.push("I am " + j + " strange loops.")
      //  console.log(i);
      } 
  }
  return array;
}

function whileLoop(num) {
    while (num > 0) {
        console.log(--num)
    }
return ("done");
}

function maybeTrue() {
  return Math.random() >= 0.5 
}

array = [1, 2, 3, 4, 5]

function doWhileLoop(array) {
    do {
        array.pop();
    } while (array.length > 0 && maybeTrue());  
    return array;
}

