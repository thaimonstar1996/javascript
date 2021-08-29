// Function name
/**
 * Because function names are simply pointers to functions, they act like any other variable containing a pointer to an object.
 *  This means it's possible to have multiple names for a single function, as in this example:
 */
function sum(a, b) {
  return a + b;
}
console.log(sum(10,5));
let anotherSum = sum;
console.log(anotherSum(1,8));
sum = null;
console.log(anotherSum(9,10));
/**
 * This code defines a function named sum() that adds two numbers together.
 *  A variable, anotherSum , is declared and set equal to sum .
 *  Note that using the function name without parentheses accesses the function pointer instead of executing the function.
 *  At this point, both anotherSum and sum point to the same function, 
 * meaning that anotherSum() can be called and a result returned. When sum is set to null , 
 * it severs its relationship with the function, although anotherSum() can still be called without any problems.
 */

/**
 * All function objects in ECMAScript 6 expose a read-only name property that describes the function.
 *  In many cases, this will just be the function identifier, or the stringified variable name that references the function.
 *  If a function is unnamed, it will be reported as such.
 *  If it is created using the function constructor, it will be identified as “anonymous”:
 */
function foo() {} // function declaration: foo is function identifier
let bar = function() {}; // function expression : bar.name is reference the function
let baz = () => {} // arrow function : baz.name is reference  the function
console.log(foo.name); // foo
console.log(bar.name); // bar
console.log(baz.name); // baz
console.log((()=> {}).name); // empty string
console.log((new Function()).name); // anonymous

//If a function is a getter, a setter, or instantiated using bind() , a prefix will be prepended to identify it as such:

function foo() {}
console.log(foo.bind(null).name);  // bound foo
let dog = {
    years: 1,
    get age() {
    return this.years;
    },
    set age(newAge) {
    this.years = newAge;
    }
}
let propertyDescriptor = Object.getOwnPropertyDescriptor(dog, 'age');
console.log(propertyDescriptor.get.name); // get age
console.log(propertyDescriptor.set.name); // set age
