function forLoop(arr){
     for (var i=0 ;i<25;i++){
      if (i===1){
          arr.push("I am 1 strange loop.")
      }
      else{
        arr.push(`I am ${i} strange loops.`)
      }
    }
    return arr
}

function whileLoop(number){
  let countdown = parseInt(number);
  while (countdown > 0) {
    console.log(--countdown);
    if(countdown === 0) {
      return 'done'
  }
  }
}

function doWhileLoop(array) {


function incrementVariable(){
  array.length -= 1;
}
do {
  incrementVariable()
} while (array.length > 0 && incrementVariable());
return array
}
