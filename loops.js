function forLoop (array) {
  for (let i = 1; i < 26; i++) {

    if (i === 1) {
      array.push(`"I am a strange loop"`);
    }

    else {
      array.push(`"I am ${i} stange loops."`);
    }
  } //for loop
  return array;
} //function

//forLoop(array);

//console.log(array);


function whileLoop(n) {

  while (n > 0) {
    console.log(n);
    n--;
    if (n === 0) {
      return 'done';
    }
  }
}

function whileLoop(n) {
  while (n > 0) {
    console.log(--n)
  }

  return 'done'
}

function doWhileLoop(array) {
  function maybeTrue() {
    return Math.random() >= 0.5;
  }

  do {
    array = array.slice(1);
  } while (array.length > 0 && maybeTrue());

  return array;
}
