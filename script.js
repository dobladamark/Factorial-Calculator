let num = 10;

function factorialCalculator(n) {
let result = 1;

for (let counter = 1; counter <= n; counter++) {
  result *= counter;
} 
return result;
}

let factorial = factorialCalculator(num);

let resultMsg = (`Factorial of ${num} is ${factorial}`)

console.log(resultMsg)
