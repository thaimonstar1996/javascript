// NO Overloading
/**
 * ECMAScript functions cannot be overloaded in the traditional sense.
 *  In other languages, such as Java, it is possible to write two definitions of a function as long as their signatures 
 * (the type and number of arguments accepted) are different.
 *  As just discussed, functions in ECMAScript don't have signatures because the arguments are represented as an array containing zero or more values
 *  Without function signatures, true overloading is not possible.

If two functions are defined to have the same name in ECMAScript, 
it is the last function that becomes the owner of that name. Consider the following example:
 */
function addSomeNumber(num) {
  return num + 100;
}
function addSomeNumber(num) {
  return num + 200;
}
let result = addSomeNumber(100);
console.log(result);

/*Thinking of function names as pointers also explains why there can be no function overloading in ECMAScript.
 In the previous example, it's clear that declaring two functions with the same name always results in the last function overwriting the previous one. 
 This code is almost exactly equivalent to the following:

let addSomeNumber = function(num) {
    return num + 100;
};
            
addSomeNumber = function(num) {
    return num + 200;
};
            
let result = addSomeNumber(100);  // 300
*/

