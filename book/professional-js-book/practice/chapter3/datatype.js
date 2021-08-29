console.log(typeof b);
var b= 5;
console.log(typeof b);
let a = true;
console.log(typeof a);
a = "sss";
console.log(typeof a);
a  = {name: 'Name', age: 15};
console.log(typeof a);
a = 15.5;
console.log(typeof a);
function x() {
  console.log("dfdfd");
}
console.log(typeof x);
a = null;
console.log(typeof a);

let z;
console.log(z == undefined);
console.log(null == undefined);

let message = 'Ahihi';
if(message) {
  console.log("a not empty is converted to true");
}
message = '';
if(message) {
  console.log( `message not empty`);
} else {
  console.log(`an empty string is convert to false`);
}
message = 1;
if(message) {
  console.log('messasge is convert to true');
}
message = 0;
if(!message) {
  console.log('message is converted to false because numeric is zero');
}
console.log(0.1 + 0.3);
a = 0.1, b = 0.3;
console.log(a+b);
if(a+ b  ==  0.3 ) {// avoid
  console.log('You got 0.3');
}
console.log(isNaN('10'));
console.log(isNaN(true));
console.log(isNaN('abcd'));
console.log(Number(true));
console.log(Number(false));
let text = 'This is the letter sigma: \u03a3.';
console.log(text);
console.log(text.length);
let x1;
let x2= null;
console.log(String(x1));
console.log(String(x2));
let divElement = `
<div> 
  <p> xin chao moi nguoi </p>
<div>`;
console.log(divElement);
let secondTemplateLiteral = `
first line
second line`;
console.log(secondTemplateLiteral[0] === '\n');
console.log('begin');
console.log(secondTemplateLiteral);


