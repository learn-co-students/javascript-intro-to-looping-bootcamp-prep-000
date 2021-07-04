var array = []; 

function forLoop(array) {
  for (var i = 0; i < 25; i++) {
    if (i === 1) {
  array.push(`I am ${i} strange loop.`)}  
  else array.push(`I am ${i} strange loops.`);   
} 
  return array;  
} 
 

function whileLoop(n) {
  let countdown = n; 
  while (countdown > 0) {
  console.log(--countdown)}
  return `done`
}

function doWhileLoop(array) {
  var i = 0;
function incrementVariable() {
  i += 1; 
}
do { 
  incrementVariable(); 
  array.pop();   
} 
while (array.length > 0 && incrementVariable());
return array;  
} 