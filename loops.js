// adds 'I am ${i} strange loop(s).' to array 25 times, then returns array
function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      array.push(`I am ${i} strange loop.`);
    }
    else {
      array.push(`I am ${i} strange loops.`);
    }
  }
  return array;
}
   
  
// Counts down to 0, then returns 'done'
function whileLoop(n) {
  while (n > 0) {
    console.log(--n);
  }
  return ('done');
}


function doWhileLoop(array){
  var i = 1;
    function incrementVariable() {
      i = i + 1;
    }
  do { 
    array.pop();
  } while (array.length > 0 && incrementVariable());
  return array;
}