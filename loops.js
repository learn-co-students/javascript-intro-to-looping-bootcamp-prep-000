function forLoop(array)
{
  for (let i = 0; i < 25; i++){
    if (i === 1)
    {
        array.push("I am 1 strange loop.");
    }
    else
    {
      array.push('I am ${i} strange loop.');
    }
  }
  return array;
  
}forLoop(array);

function whileLoop(n)
{
  // n = Math.random()*100;
  while(n > 0)
  {
    console.log(--n); 
  }
  return 'done';
}whileLoop(n);

function doWhileLoop(array)
{
  function maybeTrue() 
  {
    return Math.random() >= 0.5;
  } 
  
  do
  {
    array = array.slice(1);  
  }
  while (array.length > 0 && maybeTrue(false));
  
  return array;
}