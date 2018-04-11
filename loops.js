function forLoop(arr){
  for (var i = 0; i < 25; i++){
    if (i === 1) {
      arr.push("I am 1 strange loop.");
    } else {
    arr.push(`I am ${i} strange loops`);
   }
  }
  return arr;
}
function whileLoop(number){
  while (number > 0){
    console.log(--number);
 }
  return "done";
}

function doWhileLoop(array){
  function maybeTrue() {
  return Math.random() >= 0.5;
}

do {
  array = array.slice(1);
} while (array.length > -1 && maybeTrue());
return array;
}