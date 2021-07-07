function forLoop(array) {
    for(let  i = 0; i < 25; i++ ) {
      if( i !== 1) {
      array.push(`I am ${i} strange loops.`)
      } else {
      array.push(`I am ${i} strange loop.`)
      }
    } 
    return array;
  }

function whileLoop(n) {
  while ( n > 0) {
    console.log(n--)
  }
    return 'done';
  }


function doWhileLoop(array) {
  
  var i = array.length;

  function incrementVariable() {
    i = i - 1;
  }
  
  do {
    array.pop();
    
  } while (array.length > 0 && incrementVariable());
   return array;
}