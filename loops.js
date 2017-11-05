function forLoop(arr)
{
  for (var i = 0; i < 25 ; i++) {
    arr.push("I am ${i} strange loop${i === 0 ? '' : 's'}.");
  }
  return arr;
}

function whileLoop(n)
{
  while (n != 0) {
    console.log(n--);
  }
  return "done";
}

function maybeTrue() {
  return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
}

function doWhileLoop(arr)
{
  do{
    var i = arr.length--;
  }while (maybeTrue() || arr.length == 0);
  return arr;
}
