function doWhileLoop(x) {
  console.log("wtf"); 
}

var i = 0;

do {
  console.log(i); 
  doWhileLoop(i++); 
} while (i<5); 

var x = [3, 5, 5];
doWhileLoop(x); 
