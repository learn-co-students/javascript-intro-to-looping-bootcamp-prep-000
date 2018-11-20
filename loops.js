function doWhileLoop(x) {
  do{
    indx = x.length-1;
    console.log(`wtf ${x[indx]}`); 
    x.pop()
  } while(x.length>0)
}

var x = [3, 5, 4];
doWhileLoop(x); 
