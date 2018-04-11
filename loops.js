function forLoop( newArray ) {
  for ( i = 0; i < 25; i++ ) {
    if ( i == 0 ) {
      newArray.push( "I am 1 strange loop." );
    }
    else {
      newArray.push( `I am ${ ( i + 1 ) } strange loops.` )
    }
  }
  return newArray;
}

function whileLoop( a ) {
  while ( a > 0 ) {
    console.log( --a );
  }
  return 'done';
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop( a ) {
  do {
    a.pop();
  } while ( a.length != 0 && maybeTrue() )
  return a;
}
