function forLoop(array) {
  for (let i = 0; i < 25; i++) {
  if(i===1){array.push("I am "+ i + " strange loop.")}
  
  else{array.push("I am "+ i +" strange loops.")}}

  return array
  
}

function whileLoop(number) {
  
 
while (number > 0) {
  console.log(--number);
}
return "done"
}

function doWhileLoop(array) {
  function incrementVariable() {
    array = array - 1; }
  
  do {return incrementVariable} 
  
  while (array.length > 0 && incrementVariable());

}
