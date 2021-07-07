function forLoop(array){
for(var i=0; i<25; i++){
    if(i===1){
       array.push("I am 1 strange loop.")
  }else{
  array.push("I am " + i +" strange loops.")
  }
  }
  return array
}




function whileLoop(n){
  
  while(n>0){
  console.log(n)
  n--

  if(n===0){return "done"}
}}

function doWhileLoop(array) {
  function incrementVariable() {
    return Math.random() >= 0.5
  }

  do {
    array = array.slice(1)
  } while (array.length > 0 && incrementVariable())

  return array}