
function makeArray() {
  const array = []
  const t = Math.floor(Math.random() * 10)

  for (let i = 0; i < t; i++) {
    array.push("I am a strange loop.")
  }

  return [array, t]
}

function forLoop(arr)
{
  var newArr = [...arr];
  
  for(let i =0;i<25;i++)
  {
    let s= i==1?"I am 1 strange loop.":`I am ${i} strange loops.`;
    newArr.push(s);
  }
  
  return newArr;
}

function whileLoop(n)
{
  while(n>0)
  {
    console.log('1');
    n--;
  }
  return 'done';
}

 function maybeTrue() {
  return Math.random() >= 0.5;
}

function doWhileLoop(arr)
{
  do
  {arr.pop();}
  while(arr.length >0  && maybeTrue());
  
  return arr;
}
  