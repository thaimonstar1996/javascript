//Prior to the advent of let , for loop definition involved using an iterator variable whose definition would bleed outside the loop body:
console.log(i);
for(var i = 1; i<= 5; i++) {

}
console.log(i);// 5

//This is no longer a problem when switching to let declarations, as the iterator variable will be scoped only to the for loop block:

for(let j = 1; j<=5;j++){

}
//console.log(j);// ReferenceErrror: j is not defined;

