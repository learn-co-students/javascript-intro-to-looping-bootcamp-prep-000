/* My first solution is less verbose and achieves the desired result, but I get the error:
1) loops
       forLoop(array)
         adds `"I am ${i} strange loop${i === 0 ? '' : 's'}."` to an array 25 times:

      AssertionError: expected 'I am 11 strange loops.' to equal 'I am 1 strange loop.' <-- ?????
      + expected - actual

      -I am 11 strange loops. 
      +I am 1 strange loop. 

      at Context.it (test/loops-test.js:38:35)
First solution:

function forLoop(array) {
	for( let i = 0; i < 25; i++) {
		if (i >= 0) {		
		array[i] = `I am ${i} strange loop${i === 1 ? '' : 's'}.`;
    	}
	}
  return array;
}
*/

function forLoop(array) {
   for ( let i = 0; i < 25; i++) {
     if (i === 1) {
       array.push(`I am 1 strange loop.`)
     } else {
       array.push(`I am ${i} strange loops.`)
     }
  }
  return array;
}