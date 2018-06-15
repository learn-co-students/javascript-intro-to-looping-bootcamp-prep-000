function forLoop(array) {
  for (let i=0; i<array.length; i++)
  {
  if (i === 1) {console.log("I am 1 strange loop.")}
  else {console.log("I am " + i + " strange loops.");
}}}

function whileLoop(Number) {
  while (Number>0) {
    console.log(--Number);
  }
  console.log("done");
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(Array) {
do {
  Array.pop();
}
while (Array.length> 0 && maybeTrue());
return Array
}


