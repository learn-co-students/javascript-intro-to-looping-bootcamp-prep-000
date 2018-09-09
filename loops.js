function forLoop(array){
  for (let i = 0; i < 25; i++){
  if (i === 1) {
    array.push("I am 1 strange loop.")
  } else {
array.push(`I am ${i} strange loop${i === 0 ? '' : 's'}.`);
  }
}
return array
}

let countdown = 100;
function whileLoop(n) {
  while (n > 0) {
    console.log(--n);
  }
  return ('done')
}

var i = 0;
function doWhileLoop(array){
  do {
    array.shift();
  } while (array.length > 0);   
return array
}
