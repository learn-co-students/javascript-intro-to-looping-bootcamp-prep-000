var myArray = [];

function forLoop(myArray){
      for (let i = 0; i < 25; i++){
         if (i == 1){
           myArray.push(`I am 1 strange loop.`);
          } else {
           myArray.push(`I am ${i} strange loops.`);
         }
      }
      return myArray;
}

let countdown = 10;
      function whileLoop(countdown){
            while (countdown > 0) {
              console.log(--countdown);
              ;
            }
            return 'done';
      }

var myArray = [1,2,3];

function doWhileLoop(myArray){

   function maybeTrue() {
        return Math.random() >= 0.5
        }
    do {
          myArray.pop();
        } while ( myArray.leng >=0 || maybeTrue());
    return myArray;    
}
