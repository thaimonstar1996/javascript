// Có 3 cách để khai báo hàm: function-declaration, function-expression , arrow function, Funtion constructor(not recommended)

/**
 * Some of the most interesting parts of ECMAScript are its functions, primarily because functions actually are objects.
 *  Each function is an instance of the Function type that has properties and methods just like any other reference type.
 *  Because functions are objects, 
 * function names are simply pointers to function objects and are not necessarily tied to the function itself.
 * Functions are typically defined using function-declaration syntax, as in this example:
 */
function add(num1, num2) {
  return num1 + num2;
}
/**
 * In this code, a variable sum is defined and initialized to be a function.
 *  Note that there is no name included after the function keyword because it's not needed—the function can be referenced by the variable sum .
 *  Also note that there is no semicolon after the end of the function definition.
The function-declaration syntax is almost exactly equivalent to using a function expression, such as this:
 */
let sum = function(num1, num2) {
  return num1 + num2;
};
//Note that there is a semicolon after the end of the function, just as there would be after any variable initialization.

//Another way to define a function that is quite similar to a function expression is to use the “arrow” function syntax, such as this:
let sum2 = (num1, num2) => {
  return num1 + num2;
}
console.log(sum2(1,5));

/*The final way to define functions is to use the Function constructor,
 which accepts any number of arguments. The last argument is always considered to be the function body,
  and the previous arguments enumerate the new function's arguments. Consider this example:
*/
let sum3 = new Function("num1", "num2", "return num1 + num2");
console.log(sum3(4,6));

// it's important to think of functions as objects and function names as pointers — this syntax is great at representing that concept.


