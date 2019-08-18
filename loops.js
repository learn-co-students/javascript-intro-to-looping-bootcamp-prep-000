//for loop function 
function forLoop(array){
for (i = 0; i < 25; i++) {
if(array[i]===1){
array.push("I am 1 strange loop.");
} else {
array.push(`I am ${i} strange loops.`)
}
}
return array;
}

// while loop function 
function whileLoop(number){
  while (number > 0){
    console.log(--number);
    
  }
}

// do while function
function doWhileLoop(number){
do { console.log("I run once regardless.")
}while (incrementVariable()<number){
  
}
}



  



