function forLoop(array){
  for (let i = 0; i < 25; i++){
     if (i===1){
       array[i]= `I am ${i} strange loop.`
     }
  
      else if(i==24){
       array[i]=`I am ${i} strange loops.`
  
       }
    else{
      array[i]=`I am ${i} strange loops.`
      }
    }
  console.log(array[1])
  return array
}

function whileLoop(n){
  while (n>0){
    console.log(n)
    n--
  }
  return 'done'
}

function doWhileLoop(num){
  var i = 0;
 
function incrementVariable() {
  i = i + 1;
  return i;
}
 
do {
  console.log("I run once regardless.");
} while (incrementVariable() < num);
}