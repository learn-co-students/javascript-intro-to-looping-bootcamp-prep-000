function forLoop(array){
  for (let i = 0; i < 25; i++) 
  if (i == 1){
    var additional = "I am 1 strange loop.";
    array.push(additional);
  } else{
    var second_addition = `I am ${i} strange loops.`
    array.push(second_addition);
    }
  return array;
  
}


function whileLoop(n){
  while (n > 0)
    console.log(--n);
    return "done";
  
}

function doWhileLoop(array){
  
  var i = 0;
  
  function incrementVariable() {
  i = i + 1;
}

do {
  incrementVariable();
  array.pop();
} while (array.length > 0 && incrementVariable());
return array;
}
