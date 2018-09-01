function forLoop (a) {
  for (var i=0; i<25; i++) {
    if (i==1) {
      a.push("I am 1 strange loop.");
    } else {
      a.push("I am "+i+" strange loops.");
    }
    //console.log(a[i]);
  }
  return a;
}

function whileLoop(num) {
  while(num>0) {
    console.log(num);
    num--;
  }
  return "done";
}
var n = 0;
function incrementVariable() {
  n++;
}

function doWhileLoop(a) {
  do {
    a.pop();
  } while(a.length > 0);
  return a;
}