function whileLoop(number)
{
  while(number > 0)
  {
    console.log(number);
    number = number - 1;
  }
  return 'done';
}

function forLoop(array2)
{
  for(var i = 1; i < 26; i++)
  {
    if(i === 1)
    {
      array2.push(`I am ${i} strange loop.`);
    }
    else
    {
      array2.push(`I am ${i} strange loops.`);
    }
  }
  return array2;
}

function maybeTrue() 
{
  return Math.random() >= 0.5;
}

function doWhileLoop(array2)
{
  do{
    array2.pop();
  } while( maybeTrue() && array2.length > 0);
  return array2;
}




