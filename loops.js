function forLoop (array)
{
  for (let i = 0; i < 25; i++)
  {
    if (i === 1)
    {
      array.push("I am 1 strange loop.");
    }
    else
    {
      array.push(`I am ${i} strange loops.`);
    }
  }
}

function whileLoop (number)
{
  while (number > 0)
  {
    console.log(number);
    number--;
  }
  return ('done');
}

function doWhileLoop (array)
{
  do {
    array.pop();
  } while (maybeTrue() && array.length > 0);
}

function maybeTrue() {
  return Math.random() >= 0.5;
}
while (maybeTrue()) {
  console.log("And I ran; I ran so far away!");
}



