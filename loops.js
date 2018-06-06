// adds `"I am ${i} strange loop${i === 0 ? '' : 's'}."`to an array 25 times:
function forLoop(array)
{
  for(var i = 1; i < 25; i++)
  {
    array[i] = `I am ${i} strange loop.`
  }
  
  return array
}

// counts down from n to 0:
function whileLoop(n)
{
  while(n > 0)
  {
    console.log(n)
    n--
  }
  
  return "done"
}