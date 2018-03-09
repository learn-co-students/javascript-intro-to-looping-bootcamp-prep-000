
function forLoop (arrString) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      arrString.push("I am 1 strange loop.");
    }
    else {
      arrString.push(`"I am ${i} strange loops."`);
    }
  }
  return arrString;
}

function whileLoop (num) {
  while (num > 0) {
    console.log(num);
    num--;
  }
  return "done";
}

function doWhileLoop (array) {
  function maybeTrue() {
    return Math.random() >= 0.5;
  }
  do {
    array.pop();
  } while (array.length > 0 && maybeTrue());
  return array;
}