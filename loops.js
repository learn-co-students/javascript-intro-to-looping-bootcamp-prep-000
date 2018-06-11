function forLoop(array) {
  array = [...array];
for (let i = 0; i < 25; i++) {
  array.push(`I am ${i} strange loop${i === 1 ? '' : 's'}.`);
 }
 return array
}
function whileLoop(n) {
  let countdown = 100;
  while (n > 0) {
    console.log (--n)
  }
  return `done`
}
function doWhileLoop(array) {
  function maybeTrue() {
  return Math.random() >=0.5
}
  do {
    array.pop()
  } while (maybeTrue()||array.length > 0)
  return array
}