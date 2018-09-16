// 1st function

function forLoop(array) {
   for ( let i = 0; i < 25; i++) {
     if (i === 1) {
       array.push(`I am 1 strange loop.`);
     } else if(i===0) {
       array.push(`I am ${i} strange loop.`);
     }else{
       array.push(`I am ${i} strange loops.`);
     }
  }
  return array;
}



// 2nd function

function whileLoop(n) {
  let countdown = n;
     while (countdown > 0) {
      console.log(--countdown);
    }
    return "done";
  }



// 3rd function 


function doWhileLoop(array) {
  function maybeTrue() {
    return Math.random() >= 0.5
  }
   do {
    array.pop();
  } while (array.length > -1 && maybeTrue());
    return array;
}
