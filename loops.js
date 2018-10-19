function forLoop(input)
{
  for (var i = 0; i < 25; i++)
  {
    if(i == 1)
    {
      input.push("I am 1 strange loop.");
    } else {
      input.push(`I am ${i} strange loops.`);
    }
  }
  return input
}

function whileLoop(x) {
  while (x > 0) {
    console.log(--x);
  }
  return 'done'
}

function incrementVariable() {
  var i = i + 1;
}

function doWhileLoop(array) {
  do {
    array.pop();
    incrementVariable;
  }
  while (array.length > 0 && incrementVariable());
  return array
}