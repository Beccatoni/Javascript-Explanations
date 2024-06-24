function display(data){console.log(data)};
function printHello(){console.log('Hello');}
function blockFor300ms(){/* block js thread for 300ms with long for loop */}

setTimeout(printHello, 0);

const futureData = fetch('https://jsonplaceholder.typicode.com/todos/1');
futureData.then(display);

blockFor300ms()
// which will run first?

console.log("Me first")