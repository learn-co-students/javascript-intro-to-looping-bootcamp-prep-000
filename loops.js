function forLoop(array){
  for (var i = 0; i<25; i++){
    if (i === 1) {
      array = [...array, "I am 1 strange loop."];
    }
    else {
      array = [...array, `I am ${i} strange loops.`];
    }
  }
  return array;
}

function whileLoop(n){
  let counter = n;
  while(counter>0){
    console.log(--counter );
  }
return 'done'
}

function doWhileLoop(array){

  function maybeTrue() {
  return Math.random() >= 0.5
}

do {
  array.pop();
} while (maybeTrue() && array.length >0);
return array;
}
