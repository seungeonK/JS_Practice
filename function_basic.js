//function basics

function showMessage() {
  alert("hello?");
}

showMessage();

// **Outer variables**
// A function can access an outer variable as well, for example:
console.log('--------outer variable-------------')
let userName = 'John';

function showMessage2() {
  let message = 'Hello, ' + userName;
  alert(message);
}

showMessage2()

// The function has full access to the outer variable. It can modify it as well.
// For instance:
console.log('-------The function has full access to the outer variable. It can modify it as well------')
let userName2 = 'John';
function showMessage3() {
  userName2 = 'Bob'; //changed the outer variable

  let message = 'Hello, ' + userName2;
  alert(message);
}

alert(userName2);

showMessage3();

alert(userName2);

// The outer variable is only used if there’s no local one.
// If a same-named variable is declared inside the function then it shadows the outer one. For instance, in the code below the function uses the local userName. The outer one is ignored:



//**Parameter */

console.log('------------Parameter-----------')

function showMessage4(from, text) {
  alert(from + ': ' + text);
}

showMessage4('Ann', "What's up?");
