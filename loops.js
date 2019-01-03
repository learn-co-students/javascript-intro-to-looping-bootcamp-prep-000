
 //function for executing a for loop
 function forLoop(array) {
    for( let i=0; i<25;i++){
    array.push(`I am ${i} strange loop${i === 1 ? '' : 's'}.` );
    //`"I am ${i} strange loop." ${ }`;
      }
    return array;
    }
    
//function for executing a while loop   
function whileLoop(n) {
  let countdown=n;
  while(countdown>0){
    console.log(--countdown);
  }
  return 'done';
}

//function for executing a do-while loop
function doWhileLoop(array) {
  var j = array.length;
  
  //i going to be increment variable,which is given as a condition. array length (j) is the other condition given
 var i=0;
 function incrementVariable() {
     i = i + 1;
    }

do {
  array.pop();
  incrementVariable();
} while (i>5 && j>0);
return array;
}