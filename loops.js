//loops forLoop(array) adds `"I am ${i} strange loop${i === 0 ? '' : 's'}."` to an array 25 times:
function forLoop(array){
for (let i=1; i<=25; i++){
  if (i===1){
    array.push("I am " + ${i} + " strange loop.");
  } else {
    array.push("I am " + ${i} + " strange loops.");
  }
}
  return array;
}
