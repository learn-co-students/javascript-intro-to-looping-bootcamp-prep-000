function forLoop(array) {
  for (let i = 1; i < 26; i++) {
    if ( i === 1 ) {
    array.push("I am 1 strange loop.");
    }  else {
    array.push(`I am ${1} strange loops."`);
    }
  } 
  return array;
}

function whileLoop(anynumber) {
  while (anynumber > 0) {
    console.log(--anynumber);
  }
  return "done";
}

function doWhileLoop(array) {
  do {
  array.shift()
  } while (array.length > 0 && maybeTrue());
  return array;
}