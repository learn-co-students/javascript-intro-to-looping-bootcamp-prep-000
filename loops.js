var array = []

function forLoop(array)
{
for (let i = 0; i < 25; i++) 
{
  if (i === 1) {
    array.push("I am 1 strange loop.")
  } else if (i<25)
  {
    array.push("I am ${i} strange loops.")
} 
}
  return array 
}

parseInt('number', 10)

function whileLoop(number) {
 
while (number > 0) {
  console.log(--number)
}
return 'done'
}
