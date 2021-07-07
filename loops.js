function makeArray() {
  const array=[];
  for (let i=0;i<26;i++) {
    array.push(`I am ${i} strange loops.`);
  }
  return array;
}

function whileLoop(number) {
  let countdown=number;
  while (number >= 0) {
    console.log(number--);
  }
  return 'done'
}

function doWhileLoop() {
  const array=[];
  function maybeTrue() {
    return Math.random() >=.5
  }
  do {
    array.pop();
  } while (array.length > 0 && maybeTrue());
  return array;
}