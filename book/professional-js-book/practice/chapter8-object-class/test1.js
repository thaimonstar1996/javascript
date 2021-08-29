let person = new Object();
person.name = 'Thai';
person.age = 25;
person.sayName = function() {
  console.log(this.name);
}
person.sayName();
/**
 * This example creates an object called person that has three properties ( name , age , and job ) and one method ( sayName() ). 
 * The sayName() method displays the value of this.name , which resolves to person.name . 
 * Early JavaScript developers used this pattern frequently to create new objects.
 *  A few years later, object literals became the preferred pattern for creating such objects. 
 * The previous example can be rewritten using object literal notation as follows:
 */
let person2 = {
  name: "Nicolas",
  age: 27,
  sayName() {
    console.log(this.name);
  }
}
person2.sayName();

