function forLoop(array) {
  for (let i = 0; i < 25; i++)
  if (i === 0) {
    array.push(`I am ${i} strange loop.`);
}
  else if (i > 0) {
    array.push(`I am ${i} strange loops.`);
}
return array;
}

function whileLoop(n) {
  let countdown = n;
  while (countdown > 0) {
    console.log(--countdown);
  }
  return "done";
}

function doWhileLoop(array) {
  return array.slice(0, array.length -1)
  }
  
  do {console.log("false");
  }  while (array.length > 0 && maybeTrue())