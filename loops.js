array = [];

// function forLoop(array) {
//     for (let i = 0; i < 25; i++) {
//       if (i === 1) {
//         array.push('I am 1 strange loop.')
//       } else {
//         array.push('I am ${i} strange loops.')
//       }
//     }
//   return array;
// }


function forLoop(array) {
  for (var i = 0; i < 25; i++) {
     var oneStrangeLoop = "I am 1 strange loop.";
     var strangeLoops = "I am " + i + " strange loops.";

      if (i === 1) {
        array.push(oneStrangeLoop);
      }
     else {
       array.push(strangeLoops);
     }
   }
 return array;
}

function whileLoop(n) {
  let countdown = n
  let done = 'done';

  while (countdown > 0) {
    console.log(--countdown)
  }
return done
}



function doWhileLoop(array) {
 var i = 0;
  function incrementVariable() {
    i = i + 1;
    }
     do {
       array.pop();
    }
    while(array.length > 0 && incrementVariable());
 return array;
}
