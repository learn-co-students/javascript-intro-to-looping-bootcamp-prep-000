function forLoop(array){
  var iValue = ""
  for(let i = 0; i < 25; i++) {
    if(i === 1) {
        iValue = `I am ${i} strange loop.`
         array.push(iValue)
    }else {
      iValue = `I am ${i} strange loops.`
      array.push(iValue)
    }
  }  
    return array
  }
  
function whileLoop(number) {
   
   while(number > 0) {
     
     console.log(number)
      number--
   }
   return "done"
}

function doWhileLoop(num) {

    do {
      console.log("I run once regardless.");
      
    } while (incrementVariable() <= num);
}

var i =0;
function incrementVariable() {
  i = i + 1;
  return i;
}

