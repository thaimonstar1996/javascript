// Default parameter values
function makeKing(name = 'Louis') {
  return `King ${name} VIII`;
}
console.log(makeKing());
console.log(makeKing("Henry"));

//Passing undefined as an argument is treated the same as not passing any argument, which allows for multiple independent default variables:
function makeKing2(name = "Louis", num = "VI") {
  return `King ${name} ${num}`;
}
console.log(makeKing2());
console.log(makeKing2("Henry"));
console.log(makeKing2(undefined, "VII"));
