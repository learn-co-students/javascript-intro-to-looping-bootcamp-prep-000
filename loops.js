function doWhileLoop(array)
{
    let i = 0;
  do{
    //var value=array.slice(-(i+1));
  }while((maybeTrue())||(array.length>0));
}
function maybeTrue() 
{
  return Math.random() >= 0.5; // Returns a random number between 0 
}