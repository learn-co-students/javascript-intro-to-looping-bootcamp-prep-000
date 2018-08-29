//for loop

function forLoop(array) {
  for(let i = 0; i < 25; i++) {
    if (i === 1){
      array.push('I am 1 strange loop.');
    } else {
      array.push(`I am ${i} strange loops.`)
    }
  }
  return array;
}

//while loop

function whileLoop(num) {
  while(num > 0) {
    console.log(--num);
  }
  return 'done';
}


//do-while loop

let i = 0;
function incrementVariable() {
   i++;
}

function doWhileLoop(array) {
   do {
     array.length--;
   } while (array.length && !incrementVariable());
    return array;
}
