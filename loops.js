function forLoop(array)
{
  for (let i=0; i<25; i++)
  {
    var pushString = `I am ${i} strange loop`;
    (i===1) ? array.push(pushString + '.') : array.push(pushString + 's.');
  }
  return array;
}

function whileLoop(number)
{
  let countDown = number;
  while(countDown > 0)
  {
    console.log(--countDown);
  }
  return 'done';
}

var i = 0;

function incrementVariable()
{
  i = i + 1;
}

function doWhileLoop(array)
{
  do
  {
    array.pop();
  } while(array.length > 0 && incrementVariable());
  return array;
}
