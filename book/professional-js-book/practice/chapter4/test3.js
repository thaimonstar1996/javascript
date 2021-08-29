var color = 'Blue';
function changeColor() {
  let anotherColor = 'red';
  function swapColor() {
    let tempColor = anotherColor;
    anotherColor = color;
    color = tempColor;
    // color, anotherColor, templColor are all accessible here
    console.log(anotherColor);
    console.log(color);
  }
  //color, anotherColr are accessible here, not tempColor
  swapColor();
}
// color is accessible here
changeColor();
console.log(color);
/**
 * There are three execution contexts in this code: global context, the local context of changeColor() , and the local context of swapColors() . 
 * The global context has one variable, color , and one function, changeColor() .
 *  The local context of changeColor() has one variable named anotherColor and one function named swapColors() ,
 *  but it can also access the variable color from the global context. 
 * The local context of swapColors() has one variable, named tempColor , that is accessible only within that context. 
 * Neither the global context nor the local context of swapColors() has access to tempColor . 
 * Within swapColors() , though, the variables of the other two contexts are fully accessible because they are parent execution contexts.
 *  Figure 4-3 represents the scope chain for the previous example.


 */