function forLoop(array){
  
  for (let i = 0; i < 25; i++){
    
   
      
   array.push(`"I am ${i} strange loop${i === 0 ? '' : 's'}."`);
      
    
   
    
  }
   return array;
}





function whileLoop(x){
while (x > 0) {
  console.log(--x);
}
return "done";
}


function doWhileLoop(array) {
  
  function maybeTrue() {
  return Math.random() >= 0.5
}
  

  
  do{
    
    array.shift();
    
  }while (array.length > 0 && maybeTrue());
  
  return array;

}
  
