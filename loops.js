
function forLoop(array) {
   for ( var i = 0; i < 25; i++) {
     if (i === 1) {
       array.push(`I am 1 strange loop.`)
     } else {
       array.push(`I am ${i} strange loops.`)
     }
  }
    return array;

}

function whileLoop(number) {
  while(number > -1) {
    if (number === 0) {
      return 'done'
    }
    else {
    console.log(number)
    number --
    }
    
  }
}
  
  var i = 0;
 
function incrementVariable() {
  i = i + 1;
  return i;
}

  function doWhileLoop(num) {
    do {
     console.log("I run once regardless") 
    } while 
    (incrementVariable() < num + 1);
  }
