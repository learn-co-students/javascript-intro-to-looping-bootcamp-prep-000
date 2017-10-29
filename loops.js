

function maybeTrue() {
  return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
}

function forLoop(array) {
  array.length += 25;
  for (let i = 0; i < array.length; i++) {
    if (i === 1) {
      array[i] = `"I am 1 strange loop."`;
    }else{
      array[i] = `"I am ${i} strange loop${i === 0 ? '' : 's'}."`;
    }

  }

  return array;
}

function whileLoop(n) {
  while (n > 0) {
    console.log(n);
    n--;
  }
  return"done";
}


function doWhileLoop(array){
    do {
        array.splice(0,1);

    } while (array.length > 0 && maybeTrue());

    return array;

}
