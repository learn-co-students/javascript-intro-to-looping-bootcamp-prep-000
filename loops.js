function maybeTrue() 
{
  return Math.random() >= 0.5;
}

function forLoop(arr)
{
  for (let i = 0; i < 25; i++)
  {
    arr.push(`"I am ${i} strange loop${i === 1 ? '' : 's'}."`);
  }
  return arr;
}

function whileLoop(num)
{
  while (num)
  {
    console.log(--num);
  }
  return 'done';
}

function doWhileLoop(arr)
{
  do
  {
    arr.pop();
  } while (arr.length > 0 && maybeTrue());
  return arr;
}