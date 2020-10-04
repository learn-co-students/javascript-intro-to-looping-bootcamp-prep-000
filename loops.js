function forLoop( array ) {
  for( i = 0; i < 25; i++ ) {
    var str = i == 1 ? "I am 1 strange loop." : `I am ${i} strange loops.`;
    array.push(str);
  }
  return array;
}

function whileLoop( num ) {
  while( num ) {
    console.log(num);
    num--;
  }
  return "done";
}

function doWhileLoop(num) {
  let i = num;
  do {
    console.log("I run once regardless.", i);
    i--;
  } while ( i > 0 )
}