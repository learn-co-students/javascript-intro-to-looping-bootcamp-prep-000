function whileLoop (i)
{
  while (i > 0)
  {
    console.log(i)
    i--;
  }
  return "done";
}

function forLoop(arr)
{
  for (var i = 0; i < 25; i++)
  {
    if (i < 2)
    {
      arr.push("I am "+i+" strange loop.")
    }
    else
    {
      arr.push("I am "+i+" strange loops.")
    }
  }
  return arr;
}


var i = 0;
function incrementVariable()
{
  return i+1;
}

function doWhileLoop(j)
{
  j++;
  do
  {
    console.log ("I run once regardless.");
    j--;
  }
  while (incrementVariable() < j)
}