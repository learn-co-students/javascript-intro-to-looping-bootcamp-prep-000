

function forLoop(array){
          for (let i= 0; i< 25; i++){ 
              if (i===1) {
          
                array.push('I am 1 strange loop.')}
                 
                else {array.push('I am 24 strange loops.')} 
  
}
  return array;
  }
  function whileLoop(array){
  
          while (array > 0) {
          console.log (--array);
    }
          return 'done';
  }
  
  
  function doWhileLoop(num){           
           var n=0; 
  
  function incrementVariabe(){
            n= n+1;
            return n;
 }
   do {console.log("I run once regardless") ;
        incrementVariabe()
   }
   
   
   while (num >n );
   }
   console.log (incrementVariabe())
   
   
   
   
   
   