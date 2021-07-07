
function forLoop(arr)
{
  
  for(var i=0; i < 25; i++)
  {
    if(i == 1 )
    {
      arr.push(`I am 1 strange loop.`);
    }else {
      arr.push(`I am ${i} strange loops.`)
    }
  }
  return arr;
  
}


function whileLoop(val)
{
  while(val > 0){
    console.log(--val);
  }
  return "done";
  
}

var i = 0;

function incrementVariable()
{
  i = i + 1;
}

function doWhileLoop(arr)
{
  do {
    
    arr.shift();
    
  } while( arr.length > 0 && incrementVariable() );
  
  return arr;
}


































