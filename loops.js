function forLoop(array)
{
  for(var i = 0; i < array.length; i++)
  {
    if(i === 1)
      `I am 1 strange loop.`
    else
      `I am ${i} strange loops`
  }
  
  return array;
}