function forLoop(array) {
  
  for(let i = 0; i < 25; i++) {
    
    var stringToBeReturned = "I am " +i+ " strange ";
    
    if(i === 1) {
     stringToBeReturned = stringToBeReturned + "loop.";
      
    } else {
     stringToBeReturned =stringToBeReturned + "loops.";
    }
    
    array.push(stringToBeReturned);
  }
  return array;
}


function whileLoop(number) {
  
  while (number > 0) {
    console.log( --number);
  }
  
  return "done";
  
}


function doWhileLoop(num) {

  var i = 0;

  function incrementVariable() {
  
    i = i + 1;
  
    return i;
  }

do {
  
  console.log("I run once regadless.");
  
} while (incrementVariable() < num);
}