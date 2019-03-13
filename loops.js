function forLoop(array)
{
  for(let i = 0; i < 25; i++)
  {
    if(i === 1)
    array.push("I am 1 strange loop.");
    else
    array.push(`I am ${i} strange loops.`);
  }
  
  return array;
}

function whileLoop(n)
{
    var num = n;
    while(num > 0){
      console.log(num);
      num--;
      if(num === 0)
        return "done";
    }
}

var i = 0;
function incrementVariable()
{
  i++;
  return i;
}

function doWhileLoop(num)
{
  //console.log("I run once regardless")
  do{
    console.log("I run once regardless.");
  }
  while(incrementVariable() < num + 1); // is this correct or janky? not sure
}