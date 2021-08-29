// Arrow function
/**
 * New in ECMAScript 6 is the capability to define a function expression using the fat-arrow syntax. 
 * For the most part, arrow functions instantiate function objects that behave in the same manner as their formal function expression counterparts. 
 * Anywhere a function expression can be used, an arrow function can also be used:
 * Tức là arrow funtion giống function expression. let x = function(x1, x2) {return x1 + x2} <=> let x = (x1,x2) => {retur x1 + x2}
 */

let arrowSum = (a, b) => {return a + b};
let functionExpressionSum = function(a,b) { return a + b};

console.log(arrowSum(8,8))
console.log(functionExpressionSum(2,5));

//Arrow functions are exceptionally useful in inline situations where they offer a more succinct syntax(cú pháp ngắn gọn)
let intArr = [1,2,3];
let doubleIntArr= intArr.map(function(i) {return i*2});
let doubleIntArr2 = intArr.map((i) => {return i*3});
let doubleIntArr3 = intArr.map((i) => {return i*4}); // Ngắn hơn nữa
console.log(doubleIntArr);
console.log(doubleIntArr2);
console.log(doubleIntArr3);

//Arrow functions do not require the parentheses if you only want to use a single parameter. 
//If you want to have zero parameters, or more than one parameter, parentheses are required:
let tripleX = (x) => {return x*3};
let tripleX2= x => {return x*3};
let getRandom = () => {return Math.random();};
console.log(tripleX(1));
console.log(tripleX2(2));
console.log(getRandom());

/**
 * Arrow functions also do not require curly braces, but choosing to not use them changes the behavior of the function.
 *  Using the curly braces is called the "block body" syntax and behaves in the same way as a normal function expression 
 * in that multiple lines of code can exist inside the arrow function as they would for a normal function expression. 
 * If you omit the curly braces, you are using the “concise body” syntax and are limited to a single line of code,
 *  such as an assignment or expression. The value of this line will implicitly return, as demonstrated here:
 */
let doubleY = (x) => {return x*2};
let trippleY = (x) => x*3;
// Assignment is allowed
let value = {};
let setName = (x) => x.name = 'Mart';
setName(value);
console.log(value);
// invalid syntax
// let multiply = (a,b) => return a*b;

/*Arrow functions, although syntactically succinct, are not suited in several situations. 
They do not allow the use of arguments , super , or new.target , and cannot be used as a constructor.
 Additionally, function objects created with the arrow syntax do not have a prototype defined.
*/



