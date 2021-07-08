function forLoop(array)
{
  var a = array;
  for ( var i = 0; i<25; i++){
  
  a.push(`"I am ${i} strange loop"`)
}

return a
  
}
     
function whileLoop(n)
{
  let countdown = n
  while (countdown > 0) {
    console.log(--countdown) 
  }
  return 'done'
}

function doWhileLoop(array) 
{
  if (array.length === 0) {
    return false
  }
  
}

function doWhileLoop(array) 
{
  myArray = array
   function truth(){
   if (myArray.length === 0) {
    return false
    } else{
      return true
    }
   }
  do {
    myArray.shift(1)
  } while(truth()=== true)
  
  return myArray
  
}