let value = 5;
let exponent = 2;
let interpolateString = `${value} to the ${exponent} power is ${value*value}`;
console.log(interpolateString);
let interpolcate2 = `hello ${`2* 2 = ${2*2}`}, ok`;
console.log(interpolcate2);

let foo = {
  toString: () => 'World',
}
console.log(`Hello ${foo}`);

//Invoking functions and methods inside interpolated expressions is allowed:
function capitalize(word) {
  return `${word[0].toUpperCase()}${word.slice(1)}`;
}
let cappitalLize = `${capitalize('hello')}, ${capitalize('world')}`;
console.log(cappitalLize);
// Raw string
console.log(`\u00A9`);
console.log(String.raw`\u00A9`);
console.log(`first line\nseconde line`);
console.log(String.raw`first line
second line`);
console.log('end');

function printDraw(strings) {
  console.log(`Actual characters`);
  for(const s of strings) {
    console.log(s);
  }
  console.log(`Raw characters`);
  for(const s of strings.raw) {
    console.log(s);
  }
}
printDraw`\u00A9${'anddsdsd'}\n`;
console.log(`x${ 'and' }y`);
