 function forLoop (array) {
 const arr = [];
  
  for (let i = 0; i < 26; i++) {
    if (i === 1 ) {
      array.push("I am 1 strange loop.");
    }
    else if (i > 1 ) {
      array.push(`I am ${i} strange loops`);
    }
   
  }
  return array;
  }
  
  