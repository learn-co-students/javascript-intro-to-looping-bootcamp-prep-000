function forLoop(array){
  for (let i = 0; i < 25; i++){
    if(i === 1){
    array.push("I am 1 strange loop.")
  } else {
    array.push(`I am ${i} strange loops.`)
  }
}
return array
}

function whileLoop(num){
  let countdown = num;

  while (countdown > 0){
    console.log(--countdown);
  }
  return "done"
}

function doWhileLoop(array){
  let i = 10;

  function incrementVariable() {
  i = i - 1;
  }

  do {
    incrementVariable();
    array.pop();

  } while (array.length > 0);

  return array
}

// function doWhileLoop(array){
//   var i = 10;
//   function incrementVariable() {
//   i = i - 1;
// }
// do {
//   incrementVariable();
//   array.length - 1;
// } while (array.length > 0 && incrementVariable());
// return array
// }
