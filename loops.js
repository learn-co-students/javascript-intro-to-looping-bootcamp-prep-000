var number = 25; 

function whileLoop(number){
  while (number > 0) {
    console.log(number--); 
  }
  if (number == 0){
    console.log("Done.")
  }
}  

whileLoop(25); 
