function forLoop(array) {
  for (let i = 0; i<25; i++)
  { 
   array.push(`I am ${i} strange loop${i === 0 ? '' : 's'}.`);
        }
		return array;
}

function whileLoop(Number) {
  while (Number>0) {
    console.log(--Number);
  }
  return "done";
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(Array) {
do {
  Array.pop();
}
while (Array.length> 0 && maybeTrue());
return Array;
}


