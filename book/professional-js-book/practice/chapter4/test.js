let name1 = "nicolas";
let name2 = new String("abcd");
name1.age = 26;
name2.age = 27;
console.log(name1.age);
console.log(name2.age);

//Copying Values
/**
 * Aside from differences in how they are stored, primitive and reference values act differently when copied from one variable to another.
 *  When a primitive value is assigned from one variable to another,
 *  the value stored on the variable object is created and copied into the location for the new variable. Consider the following example:

let num1 = 5;
let num2 = num1;
Here, num1 contains the value of 5. When num2 is initialized to num1 , 
it also gets the value of 5. This value is completely separate from the one that is stored in num1 because it's a copy of that value.
 */

////////////
/**
 * When a reference value is assigned from one variable to another, 
 * the value stored on the variable object is also copied into the location for the new variable.
 *  The difference is that this value is actually a pointer to an object stored on the heap. Once the operation is complete,
 *  two variables point to exactly the same object, so changes to one are reflected on the other, as in the following example:
 */
let obj1 = new Object();
let obj2 = obj1;
obj1.name = 'nicolas';
console.log(obj1.name);
console.log(obj2.name);

// Argument passsing
/**
 * All function arguments in ECMAScript are passed by value.
 *   This means that the value outside of the function is copied into an argument 
 *   on the inside of the function the same way a value is copied from one variable to another. 
 * If the value is primitive,  then it acts just like a primitive variable copy, and if the value is a reference, 
 * it acts just like a reference variable copy. 
 * 
 * When an argument is passed by value, the value is copied into a local variable (a named argument and, in ECMAScript, a slot in the arguments object).
 * When an argument is passed by reference, the location of the value in memory is stored into a local variable, 
 * which means that changes to the local variable are reflected outside of the function. (
 */
 function addTen(num) {
  num += 10;
  return num;
}
      
let count = 20;
let result = addTen(count);
console.log(count);  // 20 - no change
console.log(result); // 30
/**
 * Here, the function addTen() has an argument, num , which is essentially a local variable.
 *  When called, the variable count is passed in as an argument. 
 * This variable has a value of 20, which is copied into the argument num for use inside of addTen() .
 *  Within the function, the argument num has its value changed by adding 10,
 *  but this doesn't change the original variable count that exists outside of the function. 
 * The argument num and the variable count do not recognize each other; they only happen to have the same value. 
 * If num had been passed by reference, then the value of count would have changed to 30 to reflect the change made inside the function. 
 */
function setName(obj) {
  obj.name = "Nicholas";
}
      
let person = new Object();
setName(person);
console.log(person.name); // "Nicholas"
/**
 * n this code, an object is created and stored in the variable person . 
 * This object is then passed into the setName() method, where it is copied into obj .
 *  Inside the function, obj and person both point to the same object. 
 * The result is that obj is accessing an object by reference, even though it was passed into the function by value. 
 * When the name property is set on obj inside the function, this change is reflected outside the function,
 *  because the object that it points to exists globally on the heap.
 *  Many developers incorrectly assume that when a local change to an object is reflected globally, 
 * that means an argument was passed by reference. To prove that objects are passed by value, consider the following modified code:
 */
 function setName(obj) {
  obj.name = "Nicholas";
  obj = new Object();
  obj.name = "Greg";
}
      
let person = new Object();
setName(person);
console.log(person.name); // "Nicholas"

