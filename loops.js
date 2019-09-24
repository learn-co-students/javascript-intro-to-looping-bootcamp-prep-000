function forLoop(arr) {
  for (let i = 0; i < 25; i++) { 
  if (i === 1) {
    arr.push(`I am 1 strange loop.`)
      } else { arr.push(`I am ${i} strange loops.`)
}
}
  return arr;
}



function whileLoop(num) {
   let countdown = num
   while (countdown > 0) {
    console.log(--countdown);
    }
    return 'done'
  }


function doWhileLoop(num) {
  
  var int = 0;
  

do{
	console.log("I run once regardless");
	int--;
} while(doWhileLoop() < 10);

}
