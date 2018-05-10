let i = 0

function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    console.log("I am ${i} strange loops.")
  }
  if ( i === 0 ) {
    console.log ("This isn't right.")
  } else if (i > 25) {
    console.log ("You've gone too far!")
  }
}