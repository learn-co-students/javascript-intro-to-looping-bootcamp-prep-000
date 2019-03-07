function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      array.push(`I am 1 strange loop.`)
    }
    else {
      array.push(`I am ${i} strange loops.`)
    }
  }
  return array;
}

function whileLoop(n) {
  let countdown = n;
    while (countdown > 0) {
      console.log(--countdown)
   }
   return 'done';
}

//this next one is the one thats giving me trouble 

//var num = 0;
//function doWhileLoop(num) {
  //function incrementVariable() {
      //num = num + 1;
      //return num;
  //} do {
    //console.log("I run regardless")
     //} while (incrementVariable() < num);
//}

var num = 0;
function doWhileLoop(num) {
  function incrementVariable() {
    for (let num = 0; num >= 10; num++) {
      if (num === 0) {
      console.log("i run once regardless")
     } else { 
        do {
          console.log ("I run once regardless");
          } while (incrementVariable() < num);
      }
    }
  }
}




