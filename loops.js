
// problem 1
function forLoop(array) {
  for (var i = 0; i < 25; i++) {
    if (i === 1) {
      array.push("I am 1 strange loop.")}
    else {
      array.push(`I am ${i} strange loops.`)}
  }
  return array
}


//problem 2
function whileLoop(n) {
  while (n > 0) {
    console.log(--n);
  }
   return "done"
}


//problem 3
var i = 0
function incrementVariable() {
  i = i + 1;
}

function doWhileLoop(array) {
  const l = array.length;
  do {
    incrementVariable();
    array.pop();
  }
  while (i < l)
}