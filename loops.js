function forLoop(aray) {
  for(var i = 0; i < 25; i++) {
    if(i===0) {
      aray.push("I am ${i} strange loop.")
    }else{
      aray.push("I am ${i} strange loops.")
    }
  }
  return aray
}

function whileLoop(num) {
  while(num > 0 ) {
    console.log(--num)
  }
  return 'done';
}

  function doWhileLoop(arry) {
  do {
    arry.pop(arry.length);
  } while (arry.length > 0 || maybeTrue());
  return arry;
}
 function maybeTrue() {
  return Math.random() >= 0.5;
}