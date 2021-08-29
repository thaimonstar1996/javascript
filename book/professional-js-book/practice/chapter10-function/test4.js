// Undertand arguments
/**
 * Function arguments in ECMAScript don't behave in the same way as function arguments in most other languages.
 *  An ECMAScript function doesn't care how many arguments are passed in, nor does it care about the data types of those arguments. 
 * Just because you define a function to accept two arguments doesn't mean you can pass in only two arguments. 
 * You could pass in one or three or none, and the interpreter won't complain.

This indifference happens because arguments in ECMAScript are represented as an array internally. 
The array is always passed to the function, but the function doesn't care what (if anything) is in the array. If the array arrives with zero items, that's fine; if it arrives with more, that's okay, too.
 In fact, when a function is defined using the function keyword (meaning a non-arrow function), 
 there actually is an arguments object that can be accessed while inside a function to retrieve the values of each argument that was passed in.

 The arguments object acts like an array (though it isn't an instance of Array ) 
 in that you can access each argument using bracket notation (the first argument is arguments[0] ,
   the second is arguments[1] , and so on) and determine how many arguments were passed in by using the length property.
 */
function sayHi1(name, message) {
  console.log(`Hello ${name}, ${message}`);
}
sayHi1('Julia', ' I love you');
function sayHi2() {
  console.log(`Hello ${arguments[0]}, ${arguments[1]}`);
}
sayHi2('Anna', ' I also love you');
// Anna and julia say again: Fuck you

/**
 * The arguments object can also be used to check the number of arguments passed into the function via the length property. 
 * The following example outputs the number of arguments passed into the function each time it is called:
 */
function howManyArguments() {
  console.log(arguments.length);
}
howManyArguments("x", "y");
howManyArguments();
howManyArguments("1");
/**
 * Another important thing to understand about arguments is that the arguments object can be used in conjunction with named arguments, 
 * such as the following:
 */
function doAdd(num1, num2) {
  if(arguments.length === 1) {
    console.log(num1 + 10);
  } else if(arguments.length === 2) {
    console.log(arguments[0] + num2);
  }
}
doAdd(10, 20);

/**
 * This version of doAdd() always overwrites the second argument with a value of 10. 
 * Because values in the arguments object are automatically reflected by the corresponding named arguments ,
 * the change to arguments[1] also changes the value of num2 , so both have a value of 10. 
 * This doesn't mean that both access the same memory space, however;
 *  their memory spaces are separate but happen to be kept in sync. 
 * This effect goes only one way: changing the named argument doesnotresult in a change to the corresponding value in arguments . 
 * Another thing to keep in mind: if only one argument is passed in, 
 * then setting arguments[1] to a value will not be reflected by the named argument 
 * because the length of the arguments object is set based on the number of arguments passed in, 
 * not the number of named arguments listed for the function.
 */
console.log('test');
function doAdd2(num1, num2) {
  console.log("num2 first = " + num2);
  arguments[1] = 10;
  console.log("num2 after = " + num2);
  console.log(num1 + num2);
  console.log("num2= " + num2);
  console.log("num1= "+ num1);
  console.log("argument 1 before: " + arguments[1]);
  num2= 8;
  console.log("argument 1 after = "+ arguments[1]);
}
doAdd2(2);
doAdd2(2, 5);

/**
 * Strict mode makes several changes to how the arguments object can be used. 
 * First, assignment, as in the previous example, no longer works. 
 * The value of num2 remains undefined even though arguments[1] has been assigned to 10. 
 * Second, trying to overwrite the value of arguments is a syntax error. (The code will not execute.)
 */
function doAdd3(num1, num2) {
  "use strict"; 
  arguments[1] = 4;
  console.log(num1 + num2);
}
doAdd3(4,5); // if use use strict : num1+ num2 = 9 else num1+num2 = 8 because strict mode assignment  to argument not work


// Argument in Arrow Function
/* When a function is defined using the arrow notation, the arguments passed to the function cannot be accessed 
 * using the arguments keyword; they can only be accessed using their named token in the function definition.
*/
let fooTest = () => {
  console.log(arguments[0]); // reference error
}
fooTest(5);
//Note
/* All arguments in ECMAScript are passed by value. It is not possible to pass arguments by reference.
 If an object is passed as an argument, the value is just a reference to the object.
*/


