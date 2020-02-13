function forLoop(array){
for(var i=0;i<25;i++)
{
  if(i === 1)
  {
  array.push(`I am ${i} strange loop.`);
  }
  else
  {
    array.push(`I am ${i} strange loops.`);
  }
  
}
  return array
}

function whileLoop(n)
{
      while(n>0)
      {
       console.log(n--);
      }
      
      return "done";
      
}

function doWhileLoop(num)
{ 
   var i=0;
  if(num === 0)
  {
  console.log("I run once regardless.");
  }
  
 if(num ==10){
  do{
     
         console.log("I run once regardless.")
         i++;
    }
    while(i < 10);
   
 }
    
  
}