// Increament operatoer: ++, --
let o = {
  valueOf: () => -1
}
console.log(--o);
let x = false;
console.log(--x);

/* Theunary plus and minus operatorsare familiar symbols to most developers and operate the same way in ECMAScript 
as they do in high-school math. 
The unary plus is represented by a single plus sign ( + ) placed before a variable and does nothing to a numeric value,
 as shown in this example: */

 let b = false;
 console.log(+b);
 console.log(+o);

 // Boolean operator: Not , And, Or

/* Not logical : The logical NOT operator is represented by an exclamation point ( ! ) and may be applied to any value in ECMAScript.
 This operator always returns a Boolean value, regardless of the data type it's used on.
  The logical NOT operator first converts the operand to a Boolean value and then negates it,
   meaning that the logical NOT behaves in the following ways  */
console.log(!false);
console.log(!"ahihi");
console.log(!"");
console.log(!NaN);
console.log(!undefined);
console.log(!123);
/*
 The logical AND operator is represented by the double ampersand ( && ) and is applied to two values, as in this example: 
*/
let r = true && false;
/** Logical AND can be used with any type of operand, not just Boolean values.
 *  When either operand is not a primitive Boolean, logical AND does not always return a Boolean value; 
 * instead, it does one of the following:
    If the first operand is an object, then the second operand is always returned.
    If the second operand is an object, then the object is returned only if the first operand evaluates to  true .
    If both operands are objects, then the second operand is returned.
    If either operand is null , then null is returned.
    If either operand is NaN , then NaN is returned.
    If either operand is undefined , then undefined is returned.
*/
console.log("test and logical");
console.log(null && null);
console.log(123 && undefined);
console.log(undefined && undefined);
let objX = {name : 'thai', toString: () => 'Ahihi'};
console.log(1==1 && objX );
//The logical OR operator is represented by the double pipe ( || ) in ECMAScript, like this:
let result = true || false;

// Divide operator
console.log(66/5);

// Exponent oprator: Math.pow(3,2)  <=> 3 ** 2 // 9
// x **= y <=> x = x ** y
console.log(3 ** 2);
console.log(Math.pow(3,2));


// Relation operator: < , > , <=, >=,  == , != ,=== , !==
// Equal operator:  == , != , ===, !==
let obj1 = {
  name: 'Thai',
  valueOf: () => 2
}
let obj2 = {
  name: 'Thai',
  valueOf: () => 2
}
//If both operands are objects, then they are compared to see if they are the same object. 
// If both operands point to the same object, then the equal operator returns true . Otherwise, the two are not equal.
console.log(obj1 == obj2);// false
console.log(obj1 === obj2); // false
//If one of the operands is an object and the other is not, 
// the valueOf() method is called on the object to retrieve a primitive value to compare according to the previous rules.

console.log(obj1 == 2);
console.log(obj2 == 2);

//Identically Equal and Not Identically Equal
// The identically equal and not identically equal operators do the same thing as equal and not equal,
// except that they do not convert operands before testing for equality. 
//The identically equal operator is represented by three equal signs ( === ) and returns true only if the operands are equal without conversion, as in this example:
let result1 = ("55" == 55);  // true - equal because of conversion
let result2 = ("55" === 55); // false - not equal because different data types
console.log(result1);
console.log(result2);

//Comma operator: 
let num1 = 1, num2 = 2, num3 = 3;
// Most often, the comma operator is used in the declaration of variables; however, it can also be used to assign values.
// When used in this way, the comma operator always returns the last item in the expression, as in the following example:
let num = (5, 1, 4, 8, 0); // num becomes 0




