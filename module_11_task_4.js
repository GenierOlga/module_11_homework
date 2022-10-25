let x = + prompt('Input first number');
let y = + prompt('Input second number');
function countNum(x, y) {
	
  let current = x;
  let timerId = setInterval(function () {
    console.log(current);
    if (current == y) {
      clearInterval(timerId);
    }
    current++;
  }, 1000);
}
countNum(x, y);