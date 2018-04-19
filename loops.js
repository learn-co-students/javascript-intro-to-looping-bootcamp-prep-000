function forLoop(array)  {
  for(var index = 0; index < 25; index++)
  { 
    if (index === 1)  {
      array[index] = "I am 1 strange loop.";
    }
    else  {
      array[index] = `I am ${index} strange loops.`;
    }
  }
  return array;
}

function whileLoop(n)  {
  while(n > 0)  {
    console.log(--n);
  }
  return 'done';
}

function doWhileLoop(array)  {
  function maybeTrue() {
    return Math.random() >= 0.5
  }
  
  do  {
    array.pop();
  } while (array.length > 0 || maybeTrue());
  return array;
}
