 var forLoop = (array) => {
   for (let i = 0; i < 25; i++) {
     if (i === 1) {
       array.push(`I am 1 strange loop.`);
     } else {
       array.push(`I am ${i} strange loops.`);
     }
   }
   return array;
 };
 
 var whileLoop = (num) => {
   let countdown = num;
   while (countdown > 0) {
     console.log(--countdown);
   }
   return 'done';
 };

var i = 0; 
function incrementVariable() {
  i = i + 1;
}

 var doWhileLoop = (array) => {
   do {
     array.pop();
   } while (array.length > 0 && incrementVariable());
   return array;
 };
 
 
 
 
 