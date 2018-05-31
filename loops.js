
function forLoop(array) {
  for (var i = 0; i < 25; i++)
  if (i === 1)
  array.unshift("I am "+ i +" strange loop.")
  else
  array.unshift("I am "+ i +" strange loops.")
  return array
}

function whileLoop(number) {
  let countdown = number
  while(countdown > 0) {
    console.log(countdown)
    countdown--
  }
  return 'done'
}

function doWhileLoop(array) {
do {
  array.pop()
}
while (Math.random() >= 0.5 && array.length > 0)
return (array)
}