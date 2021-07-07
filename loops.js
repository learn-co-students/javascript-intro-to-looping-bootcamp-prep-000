function forLoop(array){
  for (let i = 0; i < 25; i++){
    array.push("I am " + i + " strange loops.");
  }
  return array;
}

function whileLoop(num){
  while (num > 0){
    console.log(--num);
  }
  return "done";
}

function doWhileLoop(array){
  function maybeTrue() {
  return Math.random() >= 0.5;
  }

  do {array.pop()} 
    while (maybeTrue() && array.length > 0);
  
  return array;  

}







