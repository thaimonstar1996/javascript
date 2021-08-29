function addTen(num) {
  num += 10;
  return num;
}
let num = 20;
let result = addTen(num);
console.log(num);
console.log(result);

function setName(obj) {
  obj.name = 'thai';
}
let person = new Object();
setName(person);
console.log(person.name);

function setName2(obj) {
  obj.name = 'le';
  obj = new Object();
  obj.name = 'OOOO';
}

let person2 = new Object();
setName2(person2);
console.log(person2.name);
/**
 * The only change between this example and the previous one 
 *  is that two lines have been added to setName() that redefine obj as a new object with a different name.
 *  When person is passed into setName() , its name property is set to "Nicholas" .
 *  Then the variable obj is set to be a new object and its name property is set to "Greg" . 
 * If person were passed by reference, then person would automatically be changed to point to the object whose name is "Greg" . 
 * However, when person.name is accessed again, its value is "Nicholas" , 
 * indicating that the original reference remained intact even though the argument's value changed inside the function.
 *  When obj is overwritten inside the function, it becomes a pointer to a local object.
 *  That local object is destroyed as soon as the function finishes executing.
 * Note : Think of function arguments in ECMAScript as nothing more than local variables.
 */


// Determining Type
/**
 * The typeof operator, introduced in the previous chapter, is the best way to determine if a variable is a primitive type.
 *  More specifically, it's the best way to determine if a variable is a string, number, Boolean, or undefined .
 *  If the value is an object or null , then typeof returns "object" , as in this example:
    let s = "Nicholas";
    let b = true;
    let i = 22;
    let u;
    let n = null;
    let o = new Object();
            
    console.log(typeof s);  // string
    console.log(typeof i);  // number
    console.log(typeof b);  // boolean
    console.log(typeof u);  // undefined
    console.log(typeof n);  // object
    console.log(typeof o);  // object
 */

/**
 * The instanceof operator returns true if the variable is an instance of the given reference type (identified by its prototype chain,
 *  as discussed in theObjects, Classes, and Object-Oriented Programmingchapter). Consider this example:
 * console.log(person instanceof Object);  // is the variable person an Object?
  console.log(colors instanceof Array);   // is the variable colors an Array?
  console.log(pattern instanceof RegExp); // is the variable pattern a RegExp?
All reference values, by definition, are instances of Object ,
 so the instanceof operator always returns true when used with a reference value and the Object constructor. 
Similarly, if instanceof is used with a primitive value, it will always return false , because primitives aren't objects
 */
let x = 5;
console.log(x instanceof Object);
console.log(new Object() instanceof Object);

// Excution context and scope

// var x1 = 5;
// console.log(window.x1);// 5 ** Test on console of Chrome browser to have window object
// var method1 = () => 'ahihi';
// console.log(window.method1()); // ahihi

// Nên nhớ ở web browser như Chrome,Safari, global context được nói tới là window object . do đó
// các biến hoặc function được khai báo là var sẽ xem là properties và method của window object
/**
 * The global execution context is the outermost one.
 *  Depending on the host environment for an ECMAScript implementation,
 *  the object representing this context may differ. 
 * In web browsers, the global context is said to be that of the window object (discussed in theBrowser Object Modelchapter), 
 * so all global variables and functions defined with var are created as properties and methods on the window object.
 *  Declarations using let and const at the top level are not defined in the global context,
 *  but they are resolved identically on the scope chain. 
 * When an execution context has executed all of its code, it is destroyed, 
 * taking with it all of the variables and functions defined within it 
 * (the global context isn't destroyed until the application exits, such as when a web page is closed or a web browser is shut down).
 */

/**
 * Each function call has its own execution context.
 *  Whenever code execution flows into a function, the function's context is pushed onto a context stack.
 *  After the function has finished executing, the stack is popped, returning control to the previously executing context. 
 * This facility controls execution flow throughout an ECMAScript program.


 */
