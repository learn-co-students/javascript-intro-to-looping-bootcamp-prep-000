function forLoop(array)
{
  for(var i = 0; i < 25; i++)
  {
    if(i===0)
    {
    array.push("I am 0 strange loops.");
    }
    else
    {
     array.push("I am ${i} strange loop.");
    }
  }
  return array;
}
function whileLoop(number)
{
  let countdown = number;
  while (countdown >0)
  {
    console.log(--countdown);
  }
  return 'done';
}

function maybeTrue() 
{
  return Math.random() >= 0.5; // Returns a random number between
} 
function doWhileLoop(array)
{
  do{
    array.pop();
  }while(maybeTrue()||array.length>0);
  return array;
}
