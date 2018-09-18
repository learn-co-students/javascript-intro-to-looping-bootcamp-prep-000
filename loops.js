function forLoop(array){
  
  for(let i = 0; i < 25; i++){
  
  if (i === 1){
  array.push("I am 1 strange loop.");
  }
  else{
  array.push("I am " + i + " strange loops."); 
  }
  }
  return array;
}
function whileLoop(number) {
  while (number > 0) {
    console.log(number);
    number--;
  }
  return 'done';
}
function incrementVariable() {
 var i = i + 1;
}

function doWhileLoop(array){
  do {
  array.pop();incrementVariable(); 
  }
  while(array.length > 0 && incrementVariable());
  return array;
}