function doWhileLoop(array){
  for(var i = array.length;i>0;i--){
    array.pop();
  }
  return array;
}
function whileLoop(n){
  while (n > 0) {
    n--;
    console.log(n);
  }
  return "done";
}
function forLoop(array){
  for(let i=0;i<25;i++){
    if(i === 1){
      array.push("I am 1 strange loop.");
    }else{
      array.push("I am "+i+" strange loops.");
    }
    //array[i] = "I am ${i} strange loop${i === 0 ? \'\' : \'s\'}.";
  }
  return array;
}
