## **Arithmetic Operators**

console.log(5 + 2);
console.log(5 - 2);
console.log(5 * 2);
console.log(5 / 2);

**Remainder or Modulo % Operator**

console.log(6 / 3); //6 ÷ 3 = 2
console.log(6 % 3); //6 ÷ 3 = 2 with 0 remainder

console.log(7 % 2); //1
console.log(7 / 2); [//3.5](https://3.0.0.5/)
// 7 ÷ 2 = 3.5 with remainder 1

**Exponent**

5 ** 3 // is the same as 5 * 5 * 5
5 ** 2 // is the same as 5 * 5

**Operator Execution Order:**
PEMDAS

// Use what you've learnt about arithmetic operators in JS to calculate the BMI for this person:
// Height: 2m
// Weight: 82Kg


console.log(82 / (2 * 2));
20.5

/*
BMI for someone 82Kg weight, 2m height
BMI = weight / height to the power of 2
*/
//RIGHT:
console.log( 82 / 2 ** 2); //82 / 4 = 20.5
//WRONG:
console.log( 82 / 2 * 2 ); //41 * 2 = 82