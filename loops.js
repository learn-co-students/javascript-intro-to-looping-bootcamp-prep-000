  function forLoop(array){
  
  for (var i = 0; i < 25; i++) {
  if (i === 1){
  
  array.push(`I am ` + i + ` strange loop.`);
}
  else {
    
    array.push(`I am ${i} strange loops.`)
  
  
 
 } 
}
 return array // Build a function forLoop. It takes an array as an argument. Start counting from 0, and, using a for loop, add a string to the array 25 times. But not just any string. If your i value is 1, add the string "I am 1 strange loop."; if your i value is anything else, add the string "I am ${i} strange loops."😢😂
}



function whileLoop(n){

while (n > 0) {
    console.log(n--)
  
  }  
  return (`done`)
}


function doWhileLoop(num){
  var i = 0
  function incrementVariable(){ 
    i = i + 1;
  return i;
  }
  
  do {
    console.log(`I run once regardless.`)
    incrementVariable()
  } while ( i < num);

  

}






