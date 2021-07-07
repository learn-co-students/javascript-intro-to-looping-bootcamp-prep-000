function forLoop(array){
  for(var i = 0; i <25; i++){
    if (i === 1){
      array.push(`I am ${i} strange loop.`)
    } else {
      array.push(`I am ${i} strange loops.`)
  }
}
return array
}



var sample_arr = [];
console.log(forLoop(sample_arr));


function whileLoop(n){
  while(n>0)
  {console.log(n--)}
  return "done"
}


function doWhileLoop(num)  {
   var i = 0; 

  function incrementVariable() {
    i++
    return i;
  }
  do {
    console.log("I run once regardless.");
   }
  while(incrementVariable() <= num);
 }



function doWhileLoop(num)  {
   if(num>9) {
      num = 9;
   }

   var i = 0; 

  function incrementVariable() {
    i++
    return i;
  }
  do {
    console.log("I run once regardless.");
   }
  while(incrementVariable() <= num);
 }

