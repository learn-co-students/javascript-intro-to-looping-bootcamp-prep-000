//forLoop

function forLoop(array){
    
    for (var i=0; i<25; i++){
        if (i===1){
           array.push("I am 1 strange loop.");
        } else {
          array.push(`I am ${array} strange loops.`);
        }
    } 
          //if you move this like to here does it work?
          return array;
}

//whileLoop
function whileLoop(i){
    while (i>0){
        console.log(i--)
    }
return 'done';
}
//doWhileLoop

function doWhileLoop(array){
  var i=0;
function incrementVariable() {
  i = i + 1;
}
do{array=array.slice(1);
  } while (array.length>0 && incrementVariable());
    return array;
}


