var forLoop = (arr) => {

  for (let i = 0; i < 25; i++) {
    i === 1 ?
    arr.push(`I am ${i} strange loop.`) :
    arr.push(`I am ${i} strange loops.`)
  }

  return arr;
}

var whileLoop = (num) => {

  while (num > 0) {
    console.log(num);
    num--;
  }

  return "done";
}

var doWhileLoop = (arr) => {

  function maybeTrue() {
    return Math.random() >= 0.5;
  }

  do {
    arr.pop();
  } while (maybeTrue());

  return arr;

}
