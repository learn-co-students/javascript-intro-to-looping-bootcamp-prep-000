function forLoop(array)  {
  for (let i=0; i<25; i++) {
    if (i===1)  {
    array.push ("I am 1 strange loop.")
    } 
    else {
    array.push ("I am 24 strange loops.")
    } 
  } 
  return array
} 


function whileLoop(n)  {
  let countdown = n
  while (countdown > 0)  {
    console.log(--countdown)
  }
  return ('done')
}

function doWhileLoop(array)  {
  
  function incrementVariable()  {
  
  }
  do {
    array.shift()
    incrementVariable()
  } while (array.length >0)
  return array
}