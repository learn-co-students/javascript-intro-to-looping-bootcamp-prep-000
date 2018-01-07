function forLoop(array){
  for (var i = 0; i < 25; i++){
    
    if (i === 1){
      array.unshift("I am 1 strange loop.");
    } else {
    array.unshift(`"I am ${i} strange loops."`);
    }
  }
  return array;
}


function whileLoop(n){
  //We're going to count down from 'n'
  for (n; n > 0; n--){
    console.log(n);
    //This should count from n, and go down from there I think?
    
  }
  return 'done';
}

// It worked!
function maybeTrue() {
  return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
}

function doWhileLoop(array){
  
 do{
   array.shift();
 } while (array.length > 0 && maybeTrue());
return array;
 } 
