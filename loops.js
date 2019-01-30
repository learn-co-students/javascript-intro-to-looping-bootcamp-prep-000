function forLoop(array){
  for (var i=0; i< 25; i++){
    if (i===1){
      array.push("I am 1 strange loop.");
    } else {
      array.push(`I am ${i} strange loops.`);
    }
  }
return array;
}


function whileLoop(n){
  while (n > 0){
    console.log(n); 
    n--;
  }
  return 'done';
}



function doWhileLoop(array){
  var i = 0;
 
function incrementVariable() {
  i += 1;
}
do{
  console.log("Have you tried turing it off and on again?");
  incrementVariable();
  array.pop();
} while (i <= 10);
return array;
}