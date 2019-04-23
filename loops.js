function forloop(array) {
  let (i = 0; i < array.length; i++)
    console.log("I am " + i + " strange loop");
}

let countdown = 100
whileLoop(countdown > 0) {
  console.log(--countdown);
}

function doWhileLoop(num) {
  console.log("I run once regardless.")
}
