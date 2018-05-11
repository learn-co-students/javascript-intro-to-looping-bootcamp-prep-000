function forLoop(array){
  
  for(let i = 0; i < 25; i++ ){
    if ( i === 1 ){ 
      /*I can't write array[i] because I'm supposed to insert those 25 strings IN ADDITION TO what is already in the array, not INSTEAD OF. */
      //array[i] = "I am 1 strange loop.";
      
      array.push("I am 1 strange loop.");
    }
    
    else {
      //array[i] = `"I am ${i} strange loops."`;
      /* Note: if I insert "" into the string below, it inserts an extra set of "" into the string in addition to those put there by ``. So, it would look like ""I am 4 strange loops."" for example. That won't return an error, but the other way looks better. Also, to insert a backtick into a string, write \` on each end (between the quotes). */
      
      array.push(`I am ${i} strange loops.`);
    }
  }
  return array;
}

function whileLoop(number) {
  while (number > 0){ /* Looks like I need to either have this count from "number" to zero (exclusive) or "number" (exclusive) to zero, but NOT from "number"(inclusive) to zero (inclusive). */
    
    console.log(--number); //number (exclusive) to zero (inclusive)
   // --number; number (inclusive) to zero (exclusive) 
  }
  return 'done';
}

function maybeTrue() {
  return Math.random() >= 0.5;
}

function doWhileLoop (randomArray){
  do {
    randomArray.pop();
  } while( randomArray.length > 0 && maybeTrue() );
  /* This is valid, too (but longer): while(randomArray[0] !== undefined && maybeTrue() === true); Note that the program itself said to use !== instead of != */
  
  return randomArray;
}