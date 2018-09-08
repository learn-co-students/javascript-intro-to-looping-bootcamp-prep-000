function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i === 1)
   array.push("I am 1 strange loop.")
    else
  array.push(`I am ${i} strange loops.`)
}
return array
}

function whileLoop(number) {
  while (number > 0) {
  console.log(number);
  number -= 1
  }
  return "done"
}


//var i = 0;
 
//function incrementVariable() {
//i = i + 1;
//}

//function doWhileLoop(array) {
//  do {
//    array.splice(0, 1);
//  } while (array.length > 0 && incrementVariable());
//  return array
//}

//The reason for the extra condition, "&& incrementVariable()" on line 29 is that it actually INVOKES the incrementVariable function...  Lines 20 through 31 work just fine.  But so does the function as constructed below, which is simpler imho.  The problem with both solutions had been my use of .pop rather than .slice.  I need to read up on .slice, and a little more on varible scope.

function doWhileLoop(array) {
  do {
    //var 
    counter = 0;
    array.splice(0, 1);
    counter += 1;
  } while (array.length > 0);
    return array;
}
