
function forLoop(array) {
  for (var i = 0; i < 25; i++) {
    
    if (i === 1) {
      array.push('I am 1 strange loop.');
    } 
    else {
      array.push(`I am ${i} strange loops.`); 
    }
}
  return array;
}

// forLoop problem: 
// Was too specific in coding else (i > 1). else takes care of other posibilities so no need to specify. 
//'Add' means .push, 'print' means console.log.

function whileLoop(n) {
  while (n > 0) {
  console.log(--n);
  }
  return `done`;
}





function doWhileLoop(array) {
  function incrementVariable() {
  array.pop();
}
  do{
    console.log("hello world!");
  }
  while (incrementVariable() && array.length > 0);
  return array;  
}

// doWhileLoop problem: 
// Remember array "adding" & "subtracting"!