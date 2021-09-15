var x = 'Ahihi';
function doSomething() {
  var x = 5;
  console.log(x);
}
doSomething();
console.log(x);

/**
 * Ngữ cảnh thực thị: execution context: The concept of execution context, referred to ascontextfor simplicity, is of the utmost importance in JavaScript. 
 * The execution context of a variable or function defines what other data it has access to, as well as how it should behave.
 *  Each execution context has an associatedvariable objectupon which all of its defined variables and functions exist. 
 * This object is not accessible by code but is used behind the scenes to handle data.
 * 
The global execution context is the outermost one. Depending on the host environment for an ECMAScript implementation, 
the object representing this context may differ. In web browsers, the global context is said to be that of the window object
 (discussed in theBrowser Object Modelchapter), 
 so all global variables and functions defined with var are created as properties and methods on the window object.
  Declarations using let and const at the top level are not defined in the global context,
   but they are resolved identically on the scope chain. When an execution context has executed all of its code, 
   it is destroyed, taking with it all of the variables and functions defined within it (the global context isn't destroyed until the application exits,
 such as when a web page is closed or a web browser is shut down).
 Tức là các biến  và funtion được khai báo với var được tạo ra như properties và method của đối tượng Window.
  Tuy nhiên khai báo biến và function dùng let và const ở top level không được định nghĩa trong global context
  nhưng chúng vẫn đc giải quyết tương tự ở scope chain(chuỗi phạm vi). Khi ngữ cảnh thực thi đc thực thi tất cả các code thì
  tất cả các biến và function được khai báo với let và const sẽ bị destroyed.
  Còn các biến và function khai báo với var vẫn ở global context, chúng sẽ bị phá huỷ khi ứng dụng thoát, tức là đóng page hoặc đóng trình duyêt.
 * 
 */
let y = 5;
var z = 6;
console.log(y); // 5
//console.log(window.z); // 6, chỉ chạy được khi chay bằng trình duyệt thì mới có đối tượng window, chạy bằng node test5.js sẽ ko đc
//add(1,2); //  khai báo với let ko được hoisting như var, nên xem như add chưa được khai báo.
//sub(10,8); // sub is not a function, mặc du khai báo var được hosting như sub lúc này có kiểu là undefine , tức chưa đc gán giá trị nên sub ko phải là một function
console.log('sub= '+ sub);
let add = function(a,b) {
  return a+ b;
}
console.log(add(5,6));
var sub = function(a,b) {
  return a- b;
}
console.log(sub(10,4));

/**
 * Each function call has its own execution context. Whenever code execution flows into a function, 
 * the function's context is pushed onto a context stack. 
 * After the function has finished executing, the stack is popped, returning control to the previously executing context. 
 * This facility controls execution flow throughout an ECMAScript program.
 * 
When code is executed in a context, a scope chain of variable objects is created.
 The purpose of the scope chain is to provide ordered access to all variables and functions that an execution context has access to.
  The front of the scope chain is always the variable object of the context whose code is executing. 
  If the context is a function, then the activation objectis used as the variable object.
   An activation object starts with a single defined variable called arguments. (This doesn't exist for the global context.) 
   The next variable object in the chain is from the containing context, and the next after that is from the next containing context.
    This pattern continues until the global context is reached; the global context's variable object is always the last of the scope chain.

Có nghĩa là khi code được thực thi trong một ngữ cảnh, một scope chain của các variable object được tạo ra.
Mục đích cảu scope chain là cung cấp sự truy cập có thứ tự tới các biến và funtion mà ngữ cảnh thực thi đó truy cập tới
Vị trí đầu ở scope chian luôn là variable object của ngữ cảnh đang thực thi.
Nếu ngữ cảnh là function thì activation object được sử dụng như variation object.
Một activation boẹct bắt đầu với biến được định nghĩa gọi là arguments(ko tồn tại trong global context).
Variable object tiếp theo trong chian là từ nghữ cảnh đang chưa, tiếp theo nữa là nghữ cảnh chưa tiếp theo.
Khuôn mẫu này được tiếp tục cho đến khi global context được đạt tới, như vậy global context's variable object luôn là cuối cùng trong scope chain.

Ví dụ:
var x = 5;
var y = 6;
function doSomething(z){
  console.log(arguments[0]); // activation object ở đây là arguments.
  var x = 8;
  console.log(x);// 8, vì variable object x= 8 ở trong ngữ cảnh của doSomething.
  console.log(y); // 6 , vì ko có trong ngữ cảnh doSomething, nên global context được gọi => in ra y.
}
doSomething();

 */

console.log('test context nè');
var x1 = 5;
var y1= 6;
function doSomething(z){
  console.log(arguments[0]); // activation object ở đây là arguments.
  var x1 = 8;
  console.log(x1);// 8, vì variable object x= 8 ở trong ngữ cảnh của doSomething.
  console.log(y1); // 6 , vì ko có trong ngữ cảnh doSomething, nên global context được gọi => in ra y.
}
doSomething(9);

/*
var color = "blue";
        
function changeColor() {
    if (color === "blue") {
    color = "red";
    } else {
    color = "blue";
    }
}
        
changeColor();
In this simple example, the function changeColor() has a scope chain with two objects in it: its own variable object 
(upon which the arguments object is defined) and the global context's variable object. 
The variable color is therefore accessible inside the function, because it can be found in the scope chain.

* */

/**
 * 
 * var color = "blue";
        
function changeColor() {
    let anotherColor = "red";
        
    function swapColors() {
    let tempColor = anotherColor;
    anotherColor = color;
    color = tempColor;
    
    // color, anotherColor, and tempColor are all accessible here
    }
        
    // color and anotherColor are accessible here, but not tempColor  
    swapColors();
}
        
// only color is accessible here
changeColor();
There are three execution contexts in this code: global context, the local context of changeColor() ,
 and the local context of swapColors() . The global context has one variable, color , and one function, changeColor() .
  The local context of changeColor() has one variable named anotherColor and one function named swapColors() ,
   but it can also access the variable color from the global context. The local context of swapColors() has one variable, named tempColor ,
   that is accessible only within that context. Neither the global context nor the local context of swapColors() has access to tempColor .
    Within swapColors() , though, the variables of the other two contexts are fully accessible because they are parent execution contexts.
    Below is figure presenting the scope chain of above example : https://d1rxzn6szs9jwr.cloudfront.net/premium/reeedr/books/professional-javascript-for-web-developers-4th-edition/images/000029.png
    
 */