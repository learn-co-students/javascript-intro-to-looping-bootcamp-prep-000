// Build a function forLoop. It takes an array as an argument. Start counting from 0, and, using a for loop, add a string to the array 25 times. Your for loop could look something like this:
  // 1) loops
  //     forLoop(array)
  //       adds `"I am ${i} strange loop${i === 0 ? '' : 's'}."` to an array 25 times:

function forLoop (array){
for (let i = 0; i < 25; i++) {
 if (i === 1){
  array.push("I am 1 strange loop.")
 }
  else{ 
    array.push(`I am ${i} strange loops.`)
   
 }
}
return array
}


  // 2) loops
  //     whileLoop(n)
  //       counts down from n to 0:

// Build a function forLoop. It takes an array as an argument. Start counting from 0, and, using a for loop, add a string to the array 25 times. Your for loop could look something like this:
  // 1) loops
  //     forLoop(array)
  //       adds `"I am ${i} strange loop${i === 0 ? '' : 's'}."` to an array 25 times:

function forLoop (array){
for (let i = 0; i < 25; i++) {
 if (i === 1){
  array.push("I am 1 strange loop.")
 }
  else{ 
    array.push(`I am ${i} strange loops.`)
   
 }
}
return array
}


// Create a function called whileLoop in loops.js. The function should take a number as an argument. Using a while loop, count down (using console.log) from the passed in number to 0. Then return the string 'done'.

  // 2) loops
  //     whileLoop(n)
  //       counts down from n to 0:

function whileLoop (num){
 while (num > 0) {
  console.log(--num)
}
return "done";
}



  // 3) loops
  //     doWhileLoop(num)
  //       console logs "I run once regardless." 1 time when passed an integer of0 as a parameter.:


  // 4) loops
  //     doWhileLoop(num)
  //       console logs "I run once regardless." 10 times when passed an integer of 10 as a parameter.:
  
  function doWhileLoop (theInt){
    var i = 0;

	function incrementVariable() {
		i = i + 1;
    return i;
	}
    do {
      console.log("I run once regardless.");
    } while (incrementVariable() < theInt);
  }



