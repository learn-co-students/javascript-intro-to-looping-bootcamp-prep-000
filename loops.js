//code-along section

function forLoop(array) {
  for (var i=0;i<25;i++) {
          if (i===1) {
            array.push(`I am ${i} strange loop.`);
          } else {
            array.push(`I am ${i} strange loops.`);
            // console.log(`${i}`)
          }
        }
  return array;
}

function whileLoop(number) {
  let countdown = number;
  
  while (countdown > 0) {
  console.log(--countdown);
  }
  return 'done';
}
function doWhileLoop(array) {
  
  function incrementVariable() {
  var i = i + 1;
  }
  
  do {
    array.pop();
  } while (array.length > 0 && incrementVariable()===true);
  
  return array;
}