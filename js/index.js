const valueA = Number(prompt('Enter number'));
function fib(n) {
  let firstNum = 1,
      secondNum = 1,
      result = 1;
  for (let i = 3; i <= n; i++) {
    result = firstNum + secondNum;
    firstNum = secondNum;
    secondNum = result;
  }
  return result;
}
alert( fib(valueA) );