function forLoop (array) {
for (let i=0; i<26; i++ ){
  if (i===0) {array}
  else if (i===1) {array.push(`I am ${i} strange loop.`);
    }
    else {array.push(`I am ${i} strange loops.`);
    }
}
  return array;
}


function whileLoop(x){
  let countdown=x;
  while (countdown>0){console.log(--countdown)}
  return "done";
}

function maybeTrue() {
  return Math.random() >= 0.5
}
function doWhileLoop(array){
  do {array.pop()} 
} while (array.length>0 && maybeTrue());
