function forLoop(array){
  for (let i=0; i<25; i++){
    if (i===1){
      console.log (array.push("I am 1 strange loop"));
    }else {
    console.log (array.push("I am" +  i  + "strange loops."));
    }
  }
  return array 
}


  function whileLoop(n){
    while (n>0){
     console.log (--n)
    } 
     return ("done")
     
  }
  
 function maybeTrue() {
  return Math.random() >= 0.5
} 
  
  function doWhileLoop(array){
    do{return array.slice(array.length)
      ;
    }while(array.length> 0 && maybeTrue())
}
    
 