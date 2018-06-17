function forLoop(array){
  var string;
  for (var i = 0; i < 25; i++){
    string = "I am ${i} strange loops.";
    array.push(string);
  }
  return array;
}

function whileLoop(number){
  while (number > 0)
  {
  console.log(--number);
  }
  return 'done';
}

function doWhileLoop(array){
  
  function maybeTrue() {
  return Math.random() >= 0.5; // Returns a random number between 0 (inclusive) and 1 (exclusive)
}
  do {
    array.pop();
   } while (array.length > 0 && maybeTrue());
  return array;
}