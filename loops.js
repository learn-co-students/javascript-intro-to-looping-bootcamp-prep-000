
function forLoop(array) {
  for (let i = 0; i < 25; i++) {
  if (i === 1) {
  array.push(`I am ${i} strange loop.`);
} else {
   array.push(`I am ${i} strange loops.`); //${ } interpolation only works when using backticks on string
}
}
return array // has to be outside of for loop; when inside for loop, loop stops once hitting return
}
