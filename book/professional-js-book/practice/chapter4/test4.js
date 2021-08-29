/*Function Scope Declaration Using var
When a variable is declared using var , it is automatically added to the most immediate context available. 
In a function, the most immediate one is the function's local context; in a with statement, the most immediate is the function context. 
If a variable is initialized without first being declared, it gets added to the global context automatically, as in this example:
*/

function add(num1, num2) {
  var sum = num1 + num2;
  return sum;
}

let result = add(5, 7);
console.log(result);
// console.log(sum);

/* NOTE : Initializing variables without declaring them is a very common mistake in JavaScript programming and can lead to errors.
 It's advisable to always declare variables before initializing them to avoid such issues. In strict mode, 
initializing variables without declaration causes an error.
*/


/**
 * A var declaration will be brought to the top of the function or global scope and before any existing code inside it. 
 * This is referred to as “hoisting”. 
 * This allows you to safely use a hoisted variable anywhere in the same scope without consideration for whether or not it was declared yet.
 *  However, in practice, this can lead to legal yet bizarre code in which a variable is used before it is declared. 
 * Here is an example of two equivalent code snippets in the global scope:
 */
var name = "jake";
// This is equipvalent to
name = "jake";
var name;

//Here is an example of two equivalent functions:
function fn1() {
    var name = 'Jake';
}
// This is equivalent to:
function fn2() {
    var name;
    name = 'Jake';
}

/*You can prove to yourself that a variable is hoisted by inspecting it before its declaration. 
The hoisting of the declaration means you will see undefined instead of ReferenceError */
console.log("test");
console.log(ab);
var ab =24;
console.log(ab);
function x() {
  console.log(ab);
  var ab = 43;
  console.log(ab);
}
x();
console.log(ab);

/** Ta thấy rằng function x được thự thi như sau bởi hoisting : var ab ; console.log(ab); ab = 43, console.log(ab),
 * mặc dù ab trùng tên với biến ab ở ngoài scope nhưng nó cũng có trong ngữ cảnh của function x,
 * do đó nó sẽ dùng biến ab trong x context execution
 * ____________________________________________________________________
 * ____________________________________________________________________
 */



// Block Scope Declaration Using let

/**
 * Brand new to ES6, let operates much in the same way as var , but it is scoped at the block level—a new concept in JavaScript.
 *  Block scope is defined as the nearest set of enclosing curly braces {} . This means if blocks, while blocks, function blocks, 
 * and even standalone blocks will be the extent of the scope of any variable declared with let .
 */

//  if (true) {
//   let a;
// }
// //console.log(a); // ReferenceError: a is not defined
// while (true) {
//   let b;
// }
// //console.log(b); // ReferenceError: b is not defined
// function foo() {
//   let c;
// }
// //console.log(c); // ReferenceError: c is not defined
//               // This should be unsurprising, as 
//               // a var declaration would also throw an Error
// // This is not an object literal, this is a standalone block.
// // The JavaScript interpreter will identify it as such based on its contents.
// {
//   let d;
// }
//console.log(d); // ReferenceError: d is not defined

/*In a similar departure from the behavior of var , let cannot be declared twice inside the same block scope. 
Duplicate var declarations are simply ignored; duplicate let declarations throw a SyntaxError .
var a;
var a;
// No errors thrown
{
    let b;
    let b;
}
//SyntaxError: Identifier 'b' has already been declared
*/

/**
 * The behavior of let is especially useful when using iterators inside loops. 
 * Iterator declarations using var will bleed outside the loop after it completes, which is frequently a very undesirable behavior.
 *  Consider these two examples:
    for (var i = 0; i < 10; ++i) {}
    console.log(i); // 10
    for (let j = 0; j < 10; ++j) {}
    console.log(j); // ReferenceError: j is not defined
 */
console.log("ahihi");
 for(var i = 0; i < 10; i++) {}
 console.log(i);

 // Constant declaration: simiiar let , but you could not reassigned to another value/ reference value, but you
 // can the keys inside object are not protected
// const o1 = {};
// o1 = {}; // TypeError: Assignment to a constant variable;
// const o2 = {};
// o2.name = 'Jake';
// console.log(o2.name); // 'Jake'

/**
 * If you wish to make the entire object immutable, you can use Object.freeze() , 
 * although attempted property assignment will not raise errors; it will just silently fail:
 */
const ct1 = Object.freeze({});
ct1.name = 'x';
console.log(ct1.name); // undefined

//Identifier Lookup
/**
 * When an identifier is referenced for either reading or writing within a particular context,
 *  a search must take place to determine what identifier it represents.
 *  The search starts at the front of the scope chain, looking for an identifier with the given name. 
 * If it finds that identifier name in the local context, then the search stops and the variable is set; 
 * if the search doesn't find the variable name, it continues along the scope chain.
 *  (Note that objects in the scope chain also have a prototype chain, so searching may include each object's prototype chain.) 
 * This process continues until the search reaches the global context's variable object. 
 * If the identifier isn't found there, it hasn't been declared.
 */
 //To better illustrate how identifier lookup occurs, consider the following example:

 var color = 'blue';
         
 function getColor() {
     return color;
 }
         
 console.log(getColor()); // 'blue'
 //When the function getColor() is called in this example, the variable color is referenced. 
 //At that point, a two-step search begins. First getColor() 's variable object is searched for an identifier named color .
 // When it isn't found, the search goes to the next variable object (from the global context) and then searches for an identifier named color . 
 //Because color is defined in that variable object, the search ends.
 
 //Given this search process, referencing local variables automatically stops the search from going into another variable object. 
 //This means that identifiers in a parent context cannot be referenced if an identifier in the local context has the same name, 
 //as in this example:
 
 var color = 'blue';
         
 function getColor() {
     let color = 'red';
     return color;
 }
 console.log(getColor()); // 'red'

/**
 * Using block scoped declarations does not change the search process, but it can add extra levels to the lexical hierarchy:

var color = 'blue';
        
function getColor() {
    let color = 'red';
    {
    let color = 'green';
    return color;
    }
}
console.log(getColor()); // 'green'
In this modified code, a local variable named color is declared inside the getColor() function.
 When the function is called, the variable is declared. When the second line of the function is executed, 
 it knows that a variable named color must be used.
The search begins in the local context, where it finds a variable named color with a value of 'green' .
Because the variable was found, the search stops and the local variable is used, meaning that the function returns 'green' 
 Any lines of code appearing after the declaration of color as a local variable cannot access the global color variable without qualifying it as window.color .
 If one of the operands is an object and the other is not, 
 the valueOf() method is called on the object to retrieve a primitive value to compare according to the previous rules.
 */