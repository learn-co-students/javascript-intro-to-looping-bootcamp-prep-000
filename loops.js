function forLoop (array){
  for (var i = 0; i < 25; i++){
    if (i === 1){
     array.push(`I am 1 strange loop.`); 
    }
    else {
      array.push(`I am  ${i}  strange loops`);
    }
  }
  return array;
}
function whileLoop (num){
  let countdown = num;
  while (countdown > 0){
    console.log(countdown --);
  }
  return "done";
}
function doWhileLoop (arr){
  function maybeTrue() {
  return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
}
  do {
    arr.pop();
  }
  while (arr.length > -1 && maybeTrue());
  return arr;
}