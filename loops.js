function forLoop (array) {
  for (var int = 0; int < 25; int++) {
    if (int === 1) {
      array.push("I am 1 strange loop.");
    
    } else {
     array.push(`I am ${int} strange loops.`);
    }
  }
  return array;
}

function whileLoop(num) {
  while (num > 0) {
    console.log(--num);
      if (num === 0) {
        return "done";
    }
  }
}
 
function doWhileLoop(array) {
  do {
    array.pop();
  } while (array.length > 0);
  return array;
}
