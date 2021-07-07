function forLoop(array) {
for (var i = 0; i < 25; i++) 
  if (i==1)
  {
    array.push("I am 1 strange loop.");
  }
  else
  {
    array.push("I am " + i + " strange loops.")}
  return array
}

function whileLoop(n) {
  let countdown = n; 
  while (countdown > 0)
  {
    console.log(--countdown);
  }
return 'done'
}




function doWhileLoop(array) {
  var i = 0;
 
  function incrementVariable() {
    i = i + 1;
  }
  do {array.shift()}
  while (array.length>0 &&
  incrementVariable())
  return array
}

/*
NOTES AND OLD ATTEMPTS

1) var i and function incrementVariable needed to be inside the function doWhileLoop 2) parentheses needed to be around all conditions collectively not individual conditions 3) needed curly brackets around do actions

function doWhileLoop(array) {
  do array.shift()
  while (array.length > 0)
return array
}


for ([initialization]; [condition]; [iteration]) {
  [loopBody];
}
{
  console.log(i);
}

function doWhileLoop 
*/