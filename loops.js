var arr = [];
//
function forLoop (a) {
    for (let i = 0; i < 25; i++) {
        if (i == 1) 
            a.push( "I am 1 strange loop." )
        else 
            a.push( "I am " + i + " strange loops.")
    }
    return a }
//
function whileLoop (n) { 
  while (n > 0) 
    console.log (--n); 
  return "done" }
//
var i = 0
//
function incrementVariable() {
  i = i + 1 }
//
function doWhileLoop(a) {
  do 
   a.shift()
  while 
   (a.length > 0 && incrementVariable()); 
  return a
}
  
forLoop(arr);
whileLoop(100);
doWhile(arr);